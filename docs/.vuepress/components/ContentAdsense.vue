<template>
  <div class="content-adsense" v-if="shouldShowAd">
    <div class="adsense-container" ref="adsenseContainer"></div>
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
      shouldShowAd: false
    }
  },
  mounted() {
    // 只在客户端加载广告
    if (typeof window !== 'undefined') {
      this.shouldShowAd = this.enabled;
      
      // 确保是文章详情页
      const isArticlePage = document.querySelector('.theme-default-content') !== null;
      if (!isArticlePage) {
        this.shouldShowAd = false;
        return;
      }

      // 延迟加载广告以确保内容先渲染
      setTimeout(() => {
        this.loadAdsenseAd();
      }, 1000);
    }
  },
  methods: {
    loadAdsenseAd() {
      if (this.adLoaded) return;
      
      // 创建AdSense广告代码
      const adScript = document.createElement('ins');
      adScript.className = 'adsbygoogle';
      adScript.style.display = 'block';
      adScript.style.textAlign = 'center';
      adScript.setAttribute('data-ad-client', 'ca-pub-6164093907849090'); // 替换为你的客户ID
      adScript.setAttribute('data-ad-slot', '2579512947'); // 替换为你的广告位ID
      adScript.setAttribute('data-ad-layout', 'in-article');
      adScript.setAttribute('data-ad-format', 'fluid');
    //   adScript.setAttribute('data-full-width-responsive', 'true');
      
      // 将广告代码添加到容器
      this.$refs.adsenseContainer.appendChild(adScript);
      
      // 请求广告
      if (window.adsbygoogle) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          this.adLoaded = true;
        } catch (error) {
          console.error('AdSense error:', error);
        }
      } else {
        console.warn('AdSense not loaded yet');
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