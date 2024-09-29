<template>
    <div class="floating-image">
      <a href="/about.html" target="_blank">
        <img :src="imageSrc" alt="Floating Image">
      </a>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      imageSrc: 'images/floating.png', // 默认图片
    }
  },
  mounted() {
    this.updateImageSrc();
    window.addEventListener('resize', this.updateImageSrc);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateImageSrc);
  },
  methods: {
    updateImageSrc() {
      const isMobile = window.innerWidth <= 768; // 768px 以下为移动端
      this.imageSrc = isMobile
        ? 'images/floating-small.png'  // 移动端使用的较小图片
        : 'images/floating.png';       // 桌面端使用的较大图片
    },
  },
}
</script>
  
  <style scoped>
  .floating-image {
    position: fixed;
    top: 100px;
    right: 20px;
    z-index: 1000;
    width: 200px;
    height: auto;
  }
  
  .floating-image img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  /* 可以根据需要调整不同屏幕上的图片样式 */
    @media (max-width: 768px) {
    .floating-image {
        width: 80px; /* 移动端的图片大小 */
    }
    }
  </style>
  