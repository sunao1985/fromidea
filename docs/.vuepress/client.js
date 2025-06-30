import { defineClientConfig } from '@vuepress/client'
import { usePageData } from '@vuepress/client'
import { h } from 'vue'
import FloatLeft from './components/FloatLeft.vue'
import FloatRight from './components/FloatRight.vue'
import HomeContentAd from './components/HomeContentAd.vue'
import ContentAdsense from './components/ContentAdsense.vue'
import AdInjector from './components/AdInjector.vue'

export default defineClientConfig({
  enhance({ app, router }) {
    app.component('HomeContentAd', HomeContentAd)
    app.component('ContentAdsense', ContentAdsense)
    
    // 添加 AdSense 代码到 head
    router.afterEach(() => {
      if (typeof window !== 'undefined' && !window.adsbygoogleLoaded) {
        window.adsbygoogleLoaded = true;
        const script = document.createElement('script')
        script.async = true
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6164093907849090'
        script.crossOrigin = 'anonymous'
        script.onerror = () => {
          console.log('AdSense script was blocked by an ad blocker')
          alert('感谢您，为了保障小站继续生存！请在本网站停用您的广告拦截器（AdBlock等...），谢谢！');
          window.adsbygoogleError = true
        }
        document.head.appendChild(script)
      }
    })
  },
  rootComponents: [
    () => {
      const pageData = usePageData()
      // 判断是否为文章页面
      const isArticlePage = pageData.value.path !== '/' && 
                            !pageData.value.path.endsWith('/') && 
                            pageData.value.path.includes('/blog/');
      
      if (pageData.value.path !== '/') {
        // 侧边广告
        return [h(FloatLeft), h(FloatRight)];
      }
      
      if (isArticlePage) {
        // 文章详情页添加广告注入器
        return [h(AdInjector)];
      }
      
      return null;
    }
  ],
})
