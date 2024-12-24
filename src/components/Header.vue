<template>
  <header :class="{'header': true, 'hidden': !headerVisible}" @mouseenter="showHeader" @mouseleave="hideHeader">
    <nav>
      <a href="#" class="nav-link">
        <img src="@\assets\Jiangxi_Normal_University_seal.svg" class="logo">
      </a>
      <div class="nav-group">
        <a href="/" class="nav-link"><span class="underline">首页</span></a>
        <a href="#" class="nav-link"><span class="underline">服务</span></a>
        <a href="#" class="nav-link"><span class="underline">介绍</span></a>
        <a href="#" class="nav-link"><span class="underline">研究课题</span></a>
        <a href="#" class="nav-link"><span class="underline">研究成果</span></a>
        <a href="/Animals" class="nav-link"><span class="underline">团队成员</span></a>
        <a href="#" class="nav-link"><span class="underline">关于</span></a>
      </div>
      <div class="nav-group">
        <a href="#" class="nav-link">联系我们</a>
      </div>
    </nav>
  </header>
</template>

<script setup>
// import { ref } from 'vue';
// const headerVisible = ref(false);
// const showHeader = () => {
//   console.log('showHeader');
//   headerVisible.value = true;
// };
// const hideHeader = () => {
//   console.log('hideHeader');
//   headerVisible.value = false;
// };

// window.addEventListener('scroll', () => {
//   headerVisible.value = true; 
//   clearTimeout(window.hideHeaderTimeout); 
//   window.hideHeaderTimeout = setTimeout(() => { headerVisible.value = false; }, 2000); // Hide header after 2 seconds of inactivity });
// })

</script>

<style scoped>
/* scoped 使用得定义的样式只在本页面内生效 */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  /* Change background color to a pleasant shade of green */
  transition: opacity 0.5s ease-in-out, top 0.3s;
  z-index: 999;
  opacity: 0.8;
}
/* .header.hidden { 
  opacity: 0;
  transition: all 0.5s ease-in-out;
} */

.header:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* Add a subtle shadow for depth */
  transition: box-shadow 0.5s;
  /* Smooth transition for hover effect */
  opacity: 1;
}

header>nav {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 10px 0 10px;
  /* Add padding for spacing */
 transition: all 0.7s ease-in-out;
}

.nav-group {
  display: flex;
  align-items: center;
}

.nav-link {
  color: rgb(105, 105, 105);
  /* Change text color to white */
  text-decoration: none;
  margin: 12px 50px 20px 0;
  
  font-weight:lighter;
  font-size: 1.3rem;
  font-family: 'Merriweather Sans',Helvetica,Tahoma,Arial,'PingFang SC','Hiragino Sans GB','Microsoft Yahei','WenQuanYi Micro Hei',sans-serif;
  font-weight: 300;

  transform: translateX(2px);
  transition: color 0.3s;
}

.underline {
  background:linear-gradient(to right, #000000, #000000) no-repeat right 
  bottom;
  background-size: 0 1px;
  transition: background-size 1s;
}
.underline:hover {
  background-position: left bottom;
  background-size: 100% 1px;
}


.nav-link:hover {
  color: #000000;
  /* Change text color to gold on hover */
}

.logo {
  width: 35px;
  height: 35px;
}

</style>
