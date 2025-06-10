<template>
    <div class="home-content-ad">
      <a v-for="(item, index) in lists" :key="index" :href="item.link" target="_blank">
        <img :src="item.image" alt="">
      </a>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        ads:'',
        lists: [
          {image: '/images/sidebar-1.png', link: 'https://www.aliyun.com/daily-act/ecs/activity_selection?userCode=tmijr0hj'},
          {image: '/images/sidebar-2.png', link: 'https://www.aliyun.com/benefit/developer/company?userCode=tmijr0hj'},
          {image: '/images/sidebar-3.png', link: 'https://www.aliyun.com/benefit?userCode=tmijr0hj'}
        ]
      }
    },
  }
  </script>
  
  <style scoped>
    .home-content-ad {
      display: flex;
      flex-wrap: wrap;
      place-content: stretch space-between;
      align-items: flex-start;
      padding: 1.2rem 0;
      border-top: 1px solid var(--vp-c-gutter);
      transition: border-color var(--vp-t-color);
    }
    
    .home-content-ad a {
      flex-grow: 1;
      flex-basis: 30%;
      max-width: 30%;
    }

    .home-content-ad a::after{
      display: none !important;
    }
    
    .home-content-ad img {
      width: 100%;
      height: auto;
      border-radius: 10px;
    }
    
    @media (max-width: 768px) {
      .home-content-ad {
        flex-direction: column;
      }
      
      .home-content-ad a {
        width: 100%;
        text-align: center;
        padding: 0;
        max-width: 100%;
        margin-bottom: 1rem; /* 添加底部间距 */
      }
      
      .home-content-ad img {
        width: 80%; /* 移动端图片宽度 */
      }
    }
    .home-content-ad img:hover {
      transform: scale(1.05);
      transition: transform 0.3s ease;
    }
  </style>
  