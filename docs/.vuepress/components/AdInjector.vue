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
      injectedAds: [],
      adsenseClient: 'ca-pub-6164093907849090',
      adsenseSlot: '2579512947',
      observerConfig: { childList: true, subtree: true },
      observationTimeout: 3000,
      mutationDelay: 300,
      adInjectionDelay: 200
    }
  },
  mounted() {
    if (typeof window === 'undefined') return
    this.setupAdInjection()
    window.addEventListener('vuepress-inject-ads', this.reinjectAds)
  },
  beforeUnmount() {
    if (typeof window === 'undefined') return
    window.removeEventListener('vuepress-inject-ads', this.reinjectAds)
    this.cleanupResources()
  },
  methods: {
    cleanupResources() {
      this.observer?.disconnect()
      this.observer = null
      if (this.observerTimeout) {
        clearTimeout(this.observerTimeout)
        this.observerTimeout = null
      }
    },
    setupAdInjection() {
      this.observer = new MutationObserver(this.handleMutation)
      this.observer.observe(document.body, this.observerConfig)
      setTimeout(() => {
        if (!this.observer) return
        this.observer.disconnect()
        this.injectAdsIfContentReady()
      }, this.observationTimeout)
    },
    handleMutation() {
      clearTimeout(this.observerTimeout)
      this.observerTimeout = setTimeout(() => {
        this.injectAdsIfContentReady()
      }, this.mutationDelay)
    },
    injectAdsIfContentReady() {
      const contentEl = document.querySelector('.theme-default-content')
      if (contentEl && contentEl.children.length > 5) {
        this.observer?.disconnect()
        this.injectAdsToContent(contentEl)
      }
    },
    reinjectAds() {
      this.cleanupInjectedAds()
      const contentEl = document.querySelector('.theme-default-content')
      if (contentEl) this.injectAdsToContent(contentEl)
    },
    cleanupInjectedAds() {
      this.injectedAds.forEach(ad => {
        // Remove ad and its adjacent hr elements if present
        if (ad.previousSibling && ad.previousSibling.tagName === 'HR') {
          ad.previousSibling.parentNode.removeChild(ad.previousSibling)
        }
        if (ad.nextSibling && ad.nextSibling.tagName === 'HR') {
          ad.nextSibling.parentNode.removeChild(ad.nextSibling)
        }
        ad?.parentNode?.removeChild(ad)
      })
      this.injectedAds = []
    },
    injectAdsToContent(contentEl) {
      const nodes = contentEl.querySelectorAll('p, h2, h3, h4, pre, ul, ol')
      if (nodes.length < 5) return
      const middleIndex = Math.floor(nodes.length / 2)
      if (middleIndex >= 2) {
        const middleEl = nodes[middleIndex]
        // Create hr, ad, hr
        const hrBefore = document.createElement('hr')
        const adElement = this.createAdElement('middle')
        const hrAfter = document.createElement('hr')
        middleEl.parentNode.insertBefore(hrBefore, middleEl.nextSibling)
        middleEl.parentNode.insertBefore(adElement, hrBefore.nextSibling)
        middleEl.parentNode.insertBefore(hrAfter, adElement.nextSibling)
        this.injectedAds.push(adElement)
      }
    },
    createAdElement(position) {
      const adContainer = document.createElement('div')
      adContainer.className = `auto-injected-ad ad-${position}`
      adContainer.style.margin = '2rem 0'
      adContainer.dataset.adPosition = position

      const componentContainer = document.createElement('div')
      componentContainer.className = 'adsense-component-container'
      adContainer.appendChild(componentContainer)

      setTimeout(() => {
        const adIns = document.createElement('ins')
        adIns.className = 'adsbygoogle'
        adIns.style.display = 'block'
        adIns.style.textAlign = 'center'
        adIns.setAttribute('data-ad-client', this.adsenseClient)
        adIns.setAttribute('data-ad-slot', this.adsenseSlot)
        adIns.setAttribute('data-ad-layout', 'in-article')
        adIns.setAttribute('data-ad-format', 'fluid')
        componentContainer.appendChild(adIns)
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (e) {
          // ignore
        }
      }, this.adInjectionDelay)

      return adContainer
    }
  }
}
</script>

<style>
.auto-injected-ad {
  margin: 2rem 0;
  position: relative;
  display: block;
  width: 100%;
  min-height: 10px; /* Ensure element has height for ::before */
}
.auto-injected-ad::before {
  content: "- 广告 -";
  display: block;
  font-size: 0.75rem;
  color: #999;
  text-align: center;
  margin-bottom: 0.5rem;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
  position: relative;
}
</style>
