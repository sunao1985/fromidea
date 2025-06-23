<template>
    <div class="floating-left">
      <a :href="link" target="_blank">
        <img :src="imageSrc" alt="Floating Image">
      </a>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      imageSrc: '',
      link: '',
      lists: [
        {image: '/images/sidebar-1.png', link: 'https://www.aliyun.com/minisite/goods?userCode=tmijr0hj'},
        // {image: '/images/sidebar-2.png', link: 'https://www.aliyun.com/benefit/developer/company?userCode=tmijr0hj'},
        // {image: '/images/sidebar-3.png', link: 'https://www.aliyun.com/benefit?userCode=tmijr0hj'}
      ]
    }
  },
  mounted() {
    // 随机选择一张图片
    const randomIndex = Math.floor(Math.random() * this.lists.length);
    this.imageSrc = this.lists[randomIndex].image;
    this.link = this.lists[randomIndex].link;
  }
}
</script>
  
  <style scoped>
  .floating-left {
    position: fixed;
    z-index: 1000;
    width: calc(var(--sidebar-width) - 25px); /* 减去左右各10px的边距 */
    height: auto;
    left:10px;
    bottom:10px;
  }
  
  .floating-left img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .floating-left img:hover{
    transform: scale(1.05); /* 鼠标悬停时放大 */
    transition: transform 0.3s ease; /* 平滑过渡效果 */
  }

  /* 可以根据需要调整不同屏幕上的图片样式 */
    @media (max-width: 768px) {
    .floating-left {
        width: 120px; /* 移动端的图片大小 */
        top: 5px;
        /* 居中 */
        left: 50%;
        transform: translateX(-50%);
    }
    }
  </style>
  