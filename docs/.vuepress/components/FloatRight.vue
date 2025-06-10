<template>
    <div class="floating-right">
      <a href="https://s.click.taobao.com/1ExDhXr" target="_blank">
        <img :src="imageSrc" alt="Floating Image">
      </a>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      imageSrc: '/images/sidebar.jpg', // 默认图片
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
        ? '/images/sidebar-small.png'  // 移动端使用的较小图片
        : '/images/sidebar.jpg';       // 桌面端使用的较大图片
    },
  },
}
</script>
  
  <style scoped>
  .floating-right {
    position: fixed;
    top: 80px;
    right: 20px;
    z-index: 1000;
    width: 180px;
    height: auto;
  }
  
  .floating-right img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .floating-right img:hover {
    transform: scale(1.05); /* 鼠标悬停时放大 */
    transition: transform 0.3s ease; /* 平滑过渡效果 */
  }

  /* 可以根据需要调整不同屏幕上的图片样式 */
    @media (max-width: 768px) {
    .floating-right {
        width: 100px; /* 移动端的图片大小 */
        top: 60px;
        right: 0px;
    }
    }
  </style>
  