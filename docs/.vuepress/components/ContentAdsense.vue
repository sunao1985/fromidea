<template>
  <div class="content-adsense" v-if="shouldShowAd">
    <div class="adsense-container" ref="adsenseContainer" :key="adRefreshKey"></div>
  </div>
</template>

<script>
export default {
  name: 'ContentAdsense',
  props: {
    position: {
      type: String,
      default: 'middle',
      validator: value => ['top', 'middle', 'bottom'].includes(value)
    },
    enabled: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      adLoaded: false,
      shouldShowAd: this.enabled,
      adRefreshKey: 0,
      currentPath: '',
      adsenseClient: 'ca-pub-6164093907849090',
      adsenseSlot: '2579512947',
      adLoadDelay: 1000,
      adRefreshDelay: 500,
      adRetryDelay: 2000
    }
  },
  watch: {
    '$route.path'(newPath) {
      if (newPath !== this.currentPath) {
        this.currentPath = newPath
        this.refreshAd()
      }
    },
    enabled(val) {
      this.shouldShowAd = val
    }
  },
  mounted() {
    if (typeof window === 'undefined') return
    this.currentPath = this.$route.path
    setTimeout(this.loadAdsenseAd, this.adLoadDelay)
  },
  methods: {
    refreshAd() {
      this.adLoaded = false
      this.adRefreshKey++
      setTimeout(this.loadAdsenseAd, this.adRefreshDelay)
    },
    loadAdsenseAd() {
      if (this.adLoaded || !this.$refs.adsenseContainer) return
      this.$refs.adsenseContainer.innerHTML = ''
      const adIns = this.createAdElement()
      this.$refs.adsenseContainer.appendChild(adIns)
      this.requestAd()
    },
    createAdElement() {
      const adIns = document.createElement('ins')
      adIns.className = 'adsbygoogle'
      adIns.style.display = 'block'
      adIns.style.textAlign = 'center'
      adIns.style.minHeight = '100px'
      adIns.setAttribute('data-ad-client', this.adsenseClient)
      adIns.setAttribute('data-ad-slot', this.adsenseSlot)
      adIns.setAttribute('data-ad-layout', 'in-article')
      adIns.setAttribute('data-ad-format', 'fluid')
      return adIns
    },
    requestAd() {
      if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
        try {
          (window.adsbygoogle).push({})
          this.adLoaded = true
        } catch (e) {
          // ignore
        }
      } else {
        setTimeout(this.loadAdsenseAd, this.adRetryDelay)
      }
    }
  }
}
</script>

<style scoped>
.content-adsense {
  margin: 1rem 0;
  overflow: hidden;
  width: 100%;
  text-align: center;
  position: relative;
}
.content-adsense::before {
  content: "- 广告 -";
  display: block;
  font-size: 0.75rem;
  color: #999;
  margin-bottom: 0.5rem;
  z-index: 99999;
}
</style>
