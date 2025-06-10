import { defineClientConfig } from '@vuepress/client'
import { usePageData } from '@vuepress/client'
import { h } from 'vue'
import FloatingImage from './components/FloatingImage.vue'
import HomeContentAd from './components/HomeContentAd.vue'


export default defineClientConfig({
  enhance({ app }) {
    app.component('HomeContentAd', HomeContentAd)
  },
  rootComponents: [
    () => {
      const pageData = usePageData()
      // Only render when not on home page
      return pageData.value.path !== '/' ? h(FloatingImage) : null
    }
  ],
})
