<template>
  <header :class="{ 'header': true, 'hidden': isHidden, 'transparent': isTransparent }" @mouseenter="showHeader"
    @mouseleave="hideHeader">
    <nav>
      <a href="#" class="nav-link">
        <img src="@\assets\Jiangxi_Normal_University_seal.svg" class="logo">
      </a>
      <div class="nav-group">
        <div class="center-group">
          <a href="/" class="nav-link"><span class="underline">首页</span></a>
          <a href="#" class="nav-link"><span class="underline">研究课题</span></a>
          <a href="/Patents" class="nav-link"><span class="underline">专利相关</span></a>
          <a href="/Animals" class="nav-link"><span class="underline">团队成员</span></a>
          <a href="/About" class="nav-link"><span class="underline">关于</span></a>
        </div>
      </div>
      <div class="nav-group">
        <a href="#" class="nav-link"><span class="underline">联系我们</span></a>
      </div>


      <div class="toggle-button" @click="menu = !menu">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
    </nav>
  </header>
  <Transition>

    <div class="dropdown-menu" v-if="menu">
      <li style="height: 0.9rem;">
        <a></a>
      </li>
      <li>
        <a href="/" class="nav-link"><span class="underline">首页</span></a>
      </li>
      <li>
        <a href="#" class="nav-link"><span class="underline">研究课题</span></a>
      </li>
      <li>
        <a href="/Patents" class="nav-link"><span class="underline">专利相关</span></a>
      </li>
      <li>
        <a href="/Animals" class="nav-link"><span class="underline">团队成员</span></a>
      </li>
      <li>
        <a href="/About" class="nav-link"><span class="underline">关于</span></a>
      </li>
      <li>
        <a href="#" class="nav-link"><span class="underline">联系我们</span></a>
      </li>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isHidden = ref(false);
const isTransparent = ref(false);

const showHeader = () => {
  isHidden.value = false;
};

const hideHeader = () => {
  isHidden.value = true;
};

const handleScroll = () => {
  if (window.scrollY === 0 && !isMouseOverHeader.value) {
    isTransparent.value = true;
  } else {
    isTransparent.value = false;
  }
  clearTimeout(window.hideHeaderTimeout);
  window.hideHeaderTimeout = setTimeout(() => {
    isHidden.value = true;
  }, 2000); // Hide header after 2 seconds of inactivity
};

const isMouseOverHeader = ref(false);

const menu = ref(false);



onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  transition: opacity 0.5s ease-in-out, top 0.3s;
  z-index: 999;
  opacity: 0.8;
}

.header.hidden {
  background-color: #ffffff;
  transition: all 0.7s ease-in-out;
}

.header.transparent {
  background-color: transparent;
}

.header:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  opacity: 1;
}

header>nav {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 10px;
  transition: all 0.7s ease-in-out;
}

.nav-group {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.center-group {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}


.nav-link {
  color: rgb(105, 105, 105);
  text-decoration: none;
  margin: 12px 50px 20px 0;
  font-weight: lighter;
  font-size: 1.3rem;
  font-family: 'Merriweather Sans', Helvetica, Tahoma, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', 'WenQuanYi Micro Hei', sans-serif;
  font-weight: 300;
  transform: translateX(2px);
  transition: color 0.3s;
}

.underline {
  background: linear-gradient(to right, #000000, #000000) no-repeat right bottom;
  background-size: 0 1px;
  transition: background-size 1s;
}

.underline:hover {
  background-position: left bottom;
  background-size: 100% 1px;
}

.nav-link:hover {
  color: #000000;
}

.logo {
  width: 35px;
  height: 35px;
}

.toggle-button {
  display: none;
  cursor: pointer;
  font-size: 2rem;
  color: #4f4f4f;
}

/*dropdown*/
.dropdown-menu {
  position: fixed;
  justify-content: center;
  align-items: center;
  /* right: 2rem; */
  /* top: 60px; */
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  backdrop-filter: blur(15px);
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  z-index: 3;
}

.dropdown-menu li {
  list-style-type: none;
  align-items: center;
  justify-content: center;
  display: flex;
  transition: color 0.3s;
  padding: 1rem;
}

.dropdown-menu li:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.dropdown-menu li a {
  margin-left: 3rem;
  color: #2e2e2e;
}

.dropdown-menu li a:hover {
  color: #d16556;
}

/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* Media queries for mobile responsiveness */

@media (max-width: 862px) {
  .nav-group {
    display: none;
  }

  .toggle-button {
    display: block;
    /* /* padding: 7px; */
    margin-top: 0.5rem;
    margin-right: 1.2rem;
  }
}
</style>
