import { defineClientConfig } from '@vuepress/client'
import { usePageData, useRouteLocale } from '@vuepress/client'
import { h, onMounted, watch } from 'vue'
import FloatLeft from './components/FloatLeft.vue'
import FloatRight from './components/FloatRight.vue'
import HomeContentAd from './components/HomeContentAd.vue'
import ContentAdsense from './components/ContentAdsense.vue'
import AdInjector from './components/AdInjector.vue'

export default defineClientConfig({
  enhance({ app, router }) {
    app.component('HomeContentAd', HomeContentAd)
    app.component('ContentAdsense', ContentAdsense)
    
    // 初始化 AdSense
    const initAdsense = () => {
      if (typeof window === 'undefined') return;
      
      if (!window.adsbygoogleLoaded) {
        window.adsbygoogleLoaded = true;
        const script = document.createElement('script')
        script.async = true
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6164093907849090'
        script.crossOrigin = 'anonymous'
        script.onerror = () => {
          console.log('AdSense script was blocked by an ad blocker')
          window.adsbygoogleError = true
        }
        document.head.appendChild(script)
      }
    };
    
    // 重新加载页面中的所有广告
    const refreshAds = () => {
      if (typeof window === 'undefined' || window.adsbygoogleError) return;
      
      console.log('Route changed, refreshing ads');
      
      // 延迟一点执行，确保DOM已更新
      setTimeout(() => {
        // 查找页面中的所有广告容器
        const adContainers = document.querySelectorAll('.content-adsense');
        console.log(`Found ${adContainers.length} ad containers to refresh`);
        
        // 清空现有广告容器
        adContainers.forEach(container => {
          const adsenseContainer = container.querySelector('.adsense-container');
          if (adsenseContainer) adsenseContainer.innerHTML = '';
        });
        
        // 使用新的 AdInjector 为当前页面内容添加广告
        const contentEl = document.querySelector('.theme-default-content');
        if (contentEl) {
          // 移除旧的自动注入广告
          const oldAds = document.querySelectorAll('.auto-injected-ad');
          oldAds.forEach(ad => ad.remove());
          
          // 触发 AdInjector 重新注入广告
          window.dispatchEvent(new CustomEvent('vuepress-inject-ads'));
        }
      }, 300);
    };
    
    // 初次加载 AdSense
    router.isReady().then(() => {
      initAdsense();
    });
    
    // 监听路由变化
    router.afterEach(() => {
      initAdsense(); // 确保脚本已加载
      refreshAds(); // 刷新广告
    });
  },
  
  rootComponents: [
    () => {
      const pageData = usePageData();
      const routeLocale = useRouteLocale();
      
      // 路由变化时重新评估组件渲染
      const components = [];
      
      // 监听路由变化
      onMounted(() => {
        // 创建可观察的路径变量
        let currentPath = pageData.value.path;
        
        // 监视路由变化
        watch(() => pageData.value.path, (newPath) => {
          currentPath = newPath;
          console.log(`Route changed to: ${currentPath}`);
        });
      });
      
      // 判断页面类型
      const isArticlePage = pageData.value.path !== '/' && 
                           !pageData.value.path.endsWith('/');
      
      // 文章详情页 - 添加所有组件
      if (isArticlePage) {
        components.push(h(FloatLeft));
        components.push(h(FloatRight));
        components.push(h(AdInjector));
      } 
      // 非首页其他页面 - 仅添加侧边广告
      else if (pageData.value.path !== '/') {
        components.push(h(FloatLeft));
        components.push(h(FloatRight));
      }
      
      return components.length > 0 ? components : null;
    }
  ],
});
