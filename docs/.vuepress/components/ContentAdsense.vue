<template>
  <div class="content-adsense" v-if="shouldShowAd">
    <div class="adsense-container" ref="adsenseContainer" :key="adRefreshKey"></div>
  </div>
</template>

<script>
export default {
  name: 'ContentAdsense',
  props: {
    // 控制广告位置（可以是 'top', 'middle', 'bottom'）
    position: {
      type: String,
      default: 'middle'
    },
    // 是否启用广告
    enabled: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      adLoaded: false,
      shouldShowAd: false,
      adRefreshKey: 0, // 用于强制重新渲染
      currentPath: ''  // 跟踪当前路径
    }
  },
  watch: {
    '$route.path': {
      handler(newPath) {
        if (newPath !== this.currentPath) {
          console.log('Route changed in ContentAdsense', newPath);
          this.currentPath = newPath;
          this.refreshAd();
        }
      },
      immediate: true
    }
  },
  mounted() {
    // 只在客户端加载广告
    if (typeof window !== 'undefined') {
      this.shouldShowAd = this.enabled;
      this.currentPath = this.$route.path;
      
      // 延迟加载广告以确保内容先渲染
      setTimeout(() => {
        this.loadAdsenseAd();
      }, 1000);
    }
  },
  methods: {
    refreshAd() {
      // 重置状态
      this.adLoaded = false;
      this.adRefreshKey++; // 改变key强制Vue重新渲染组件
      
      // 延迟加载新广告
      setTimeout(() => {
        this.loadAdsenseAd();
      }, 500);
    },
    
    loadAdsenseAd() {
      if (this.adLoaded) return;
      
      // 确保容器存在
      if (!this.$refs.adsenseContainer) {
        console.warn('AdSense container not found');
        return;
      }
      
      // 清空容器
      this.$refs.adsenseContainer.innerHTML = '';
      
      // 创建AdSense广告代码
      const adScript = document.createElement('ins');
      adScript.className = 'adsbygoogle';
      adScript.style.display = 'block';
      adScript.style.textAlign = 'center';
      adScript.style.minHeight = '100px';
      adScript.setAttribute('data-ad-client', 'ca-pub-6164093907849090'); // 替换为你的客户ID
      adScript.setAttribute('data-ad-slot', '2579512947'); // 替换为你的广告位ID
      adScript.setAttribute('data-ad-layout', 'in-article');
      adScript.setAttribute('data-ad-format', 'fluid');
      
      // 将广告代码添加到容器
      this.$refs.adsenseContainer.appendChild(adScript);
      
      // 请求广告
      if (window.adsbygoogle) {
        try {
          console.log('Requesting ad for position:', this.position);
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          this.adLoaded = true;
        } catch (error) {
          console.error('AdSense error:', error);
        }
      } else {
        console.warn('AdSense not loaded yet');
        
        // 如果AdSense未加载，稍后重试
        setTimeout(() => {
          if (window.adsbygoogle) {
            this.loadAdsenseAd();
          }
        }, 2000);
      }
    }
  }
}
</script>

<style scoped>
.content-adsense {
  margin: 2rem 0;
  overflow: hidden;
  min-height: 100px;
  width: 100%;
  text-align: center;
}

.content-adsense::before {
  content: "- 广告 -";
  display: block;
  font-size: 0.75rem;
  color: #999;
  margin-bottom: 0.5rem;
}
</style>