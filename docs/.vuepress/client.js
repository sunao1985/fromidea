import { defineClientConfig, usePageData } from '@vuepress/client'
import { h, onMounted, watch } from 'vue'
import FloatLeft from './components/FloatLeft.vue'
import FloatRight from './components/FloatRight.vue'
import HomeContentAd from './components/HomeContentAd.vue'
import ContentAdsense from './components/ContentAdsense.vue'
import AdInjector from './components/AdInjector.vue'

const ADSENSE_CLIENT = 'ca-pub-6164093907849090'
const REFRESH_DELAY = 300

function initAdsense() {
  if (typeof window === 'undefined') return
  if (!window.adsbygoogleLoaded) {
    window.adsbygoogleLoaded = true
    const script = document.createElement('script')
    script.async = true
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`
    script.crossOrigin = 'anonymous'
    script.onerror = () => {
      console.log('AdSense script was blocked by an ad blocker')
      window.adsbygoogleError = true
    }
    document.head.appendChild(script)
  }
}

function refreshAds() {
  if (typeof window === 'undefined' || window.adsbygoogleError) return
  setTimeout(() => {
    document.querySelectorAll('.content-adsense .adsense-container').forEach(c => (c.innerHTML = ''))
    document.querySelectorAll('.auto-injected-ad').forEach(ad => ad.remove())
    window.dispatchEvent(new CustomEvent('vuepress-inject-ads'))
  }, REFRESH_DELAY)
}

export default defineClientConfig({
  enhance({ app, router }) {
    app.component('HomeContentAd', HomeContentAd)
    app.component('ContentAdsense', ContentAdsense)

    let lastPath = ''
    router.isReady().then(() => {
      initAdsense()
      lastPath = router.currentRoute.value.fullPath.split('#')[0]
    })
    router.afterEach((to) => {
      const newPath = to.fullPath.split('#')[0]
      if (newPath !== lastPath) {
        initAdsense()
        refreshAds()
        lastPath = newPath
      }
    })
  },

  rootComponents: [
    () => {
      const pageData = usePageData()
      const components = []

      onMounted(() => {
        let currentPath = pageData.value.path
        watch(() => pageData.value.path, newPath => {
          currentPath = newPath
          console.log(`Route changed to: ${currentPath}`)
        })
      })

      const isHome = pageData.value.path === '/'
      const isArticle = !isHome && !pageData.value.path.endsWith('/')

      if (isArticle) {
        components.push(h(FloatLeft), h(FloatRight))
      } else if (!isHome) {
        components.push(h(FloatRight))
      }

      return components.length ? components : null
    }
  ],
})
