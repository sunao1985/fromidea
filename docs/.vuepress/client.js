import { defineClientConfig } from '@vuepress/client'
import FloatingImage from './components/FloatingImage.vue'

export default defineClientConfig({
  setup() {
    // 页面加载完成时自动挂载浮动图片组件
  },
  rootComponents: [
    // FloatingImage, // 全局挂载 FloatingImage 组件
  ],
})
