<template>
  <div class="ad-injector"></div>
</template>

<script>
export default {
  name: 'AdInjector',
  data() {
    return {
      observer: null,
      observerTimeout: null,
      injectedAds: []
    }
  },
  mounted() {
    // 初次挂载时注入广告
    this.setupAdInjection();
    
    // 监听自定义事件，用于路由变化后重新注入广告
    if (typeof window !== 'undefined') {
      window.addEventListener('vuepress-inject-ads', this.reinjectAds);
    }
  },
  beforeUnmount() {
    // 清理事件监听
    if (typeof window !== 'undefined') {
      window.removeEventListener('vuepress-inject-ads', this.reinjectAds);
    }
    
    // 清理观察器
    if (this.observer) {
      this.observer.disconnect();
    }
    
    // 清理超时
    if (this.observerTimeout) {
      clearTimeout(this.observerTimeout);
    }
  },
  methods: {
    setupAdInjection() {
      if (typeof window === 'undefined') return;
      
      console.log('Setting up ad injection');
      
      // 使用 MutationObserver 等待内容完全加载
      this.observer = new MutationObserver((mutations) => {
        // 当 DOM 变化停止 300ms 后再插入广告
        clearTimeout(this.observerTimeout);
        this.observerTimeout = setTimeout(() => {
          const contentEl = document.querySelector('.theme-default-content');
          if (contentEl && contentEl.children.length > 5) {
            this.observer.disconnect(); // 停止观察
            console.log('Content fully loaded, injecting ads');
            this.injectAdsToContent(contentEl);
          }
        }, 300);
      });
      
      // 开始观察文档变化
      this.observer.observe(document.body, { 
        childList: true, 
        subtree: true 
      });
      
      // 安全超时，3秒后停止观察
      setTimeout(() => {
        if (this.observer) {
          this.observer.disconnect();
          const contentEl = document.querySelector('.theme-default-content');
          if (contentEl) {
            console.log('Timeout reached, injecting ads anyway');
            this.injectAdsToContent(contentEl);
          }
        }
      }, 3000);
    },
    
    reinjectAds() {
      console.log('Reinjecting ads on route change');
      
      // 清除之前注入的广告
      this.injectedAds.forEach(ad => {
        if (ad && ad.parentNode) {
          ad.parentNode.removeChild(ad);
        }
      });
      this.injectedAds = [];
      
      // 重新注入新广告
      const contentEl = document.querySelector('.theme-default-content');
      if (contentEl) {
        this.injectAdsToContent(contentEl);
      }
    },
    
    injectAdsToContent(contentEl) {
      // 获取所有段落元素
      const paragraphs = contentEl.querySelectorAll('p, h2, h3, h4, pre, ul, ol');
      console.log(`Found ${paragraphs.length} potential ad injection points`);
      
      if (paragraphs.length < 5) {
        console.log('Content too short, not injecting ads');
        return; // 内容太少不插入广告
      }
      
      // 在文章中间位置插入广告，且仅插入一次
      const middleIndex = Math.floor(paragraphs.length / 2);
      if (middleIndex >= 2) {
        console.log(`Injecting ad at middle position (element ${middleIndex})`);
        const middleEl = paragraphs[middleIndex];
        const adElement = this.createAdElement('middle');
        middleEl.parentNode.insertBefore(adElement, middleEl.nextSibling);
        this.injectedAds.push(adElement);
      }
      
      // 在文章底部插入广告（如果文章足够长）
      // if (paragraphs.length >= 6) {
      //   console.log('Injecting ad at bottom position');
      //   const bottomEl = paragraphs[paragraphs.length - 2];
      //   const adElement = this.createAdElement('bottom');
      //   bottomEl.parentNode.insertBefore(adElement, bottomEl.nextSibling);
      //   this.injectedAds.push(adElement);
      // }
    },
    
    createAdElement(position) {
      const adContainer = document.createElement('div');
      adContainer.className = `auto-injected-ad ad-${position}`;
      adContainer.style.margin = '2rem 0';
      adContainer.dataset.adPosition = position;
      
      // 创建组件容器
      const componentContainer = document.createElement('div');
      componentContainer.className = 'adsense-component-container';
      adContainer.appendChild(componentContainer);
      
      // 延迟创建广告，确保DOM已稳定
      setTimeout(() => {
        // 创建AdSense广告代码
        const adInsElement = document.createElement('ins');
        adInsElement.className = 'adsbygoogle';
        adInsElement.style.display = 'block';
        adInsElement.style.textAlign = 'center';
        adInsElement.setAttribute('data-ad-client', 'ca-pub-6164093907849090');
        adInsElement.setAttribute('data-ad-slot', '2579512947');
        adInsElement.setAttribute('data-ad-layout', 'in-article');
        adInsElement.setAttribute('data-ad-format', 'fluid');
        
        componentContainer.appendChild(adInsElement);
        
        // 请求广告
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          console.log(`Ad request sent for position: ${position}`);
        } catch (error) {
          console.error('Ad request failed:', error);
        }
      }, 200);
      
      return adContainer;
    }
  }
}
</script>

<style scoped>
.auto-injected-ad {
  margin: 2rem 0;
  min-height: 120px;
  position: relative;
}

.auto-injected-ad::before {
  content: "- 广告 -";
  display: block;
  font-size: 0.75rem;
  color: #999;
  text-align: center;
  margin-bottom: 0.5rem;
}
</style>