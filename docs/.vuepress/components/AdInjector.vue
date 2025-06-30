<template>
  <div class="ad-injector">
    <slot></slot>
  </div>
</template>

<script>
import { createApp } from 'vue';
import ContentAdsense from './ContentAdsense.vue';

export default {
  name: 'AdInjector',
  mounted() {
    // 确保只在客户端运行
    if (typeof window === 'undefined') return;
    
    // 查找文章内容区域
    const contentEl = document.querySelector('.theme-default-content');
    if (!contentEl) return;
    
    // 获取所有段落元素
    const paragraphs = contentEl.querySelectorAll('p, h2, h3, h4, pre, ul, ol');
    if (paragraphs.length < 3) return; // 内容太少不插入广告
    
    // 创建广告元素
    const createAdElement = () => {
      const adContainer = document.createElement('div');
      adContainer.className = 'auto-injected-ad';
      adContainer.style.margin = '2rem 0';
      
      // 创建Vue组件实例并挂载
      // 防止重复挂载
      if (adContainer.querySelector('.content-adsense')) {
        return adContainer; // 如果已经有广告组件，则不再创建
      }
      
      const adApp = createApp(ContentAdsense);
      adApp.mount(adContainer);
      
      return adContainer;
    };
    
    // 在文章中间位置插入广告
    const middleIndex = Math.floor(paragraphs.length / 2);
    if (middleIndex >= 2) {
      const middleEl = paragraphs[middleIndex];
      middleEl.parentNode.insertBefore(createAdElement(), middleEl.nextSibling);
    }
    
    // 在文章底部插入广告（如果文章足够长）
    if (paragraphs.length >= 6) {
      const bottomEl = paragraphs[paragraphs.length - 2];
      bottomEl.parentNode.insertBefore(createAdElement(), bottomEl.nextSibling);
    }
  }
}
</script>