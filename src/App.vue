<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import backTotop from './components/backTotop.vue';
</script>

<template>
  <Header/>
  <main class="content">
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </RouterView>
  </main>
  <backTotop />
</template>

<style scoped>
/* .content { 
  padding-top: 60px; 
} */

/* 添加过渡动画的样式 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
