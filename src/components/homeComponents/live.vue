<template>
    <div>
      <div class="title">
        <h2>动态</h2>
      </div>
      <ul class="centered-list">
        <li v-for="(paper, index) in visiblePapers" :key="index" class="centered-item">
          <Card :title="paper.title" :description="paper.abstract" :imageUrl="paper.image_url" :date="paper.date" />
        </li>
      </ul>
      <div v-if="papers.length > visiblePapers.length" class="load-more">
        <button @click="loadMore">加载更多</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { usePapers } from '@/Hooks/getLiveData.js';
  import Card from '@/components/dataComponents/card.vue';
  
  const { papers } = usePapers();
  const visibleCount = ref(10); // 初始显示的卡片数量
  
  const visiblePapers = computed(() => {
    return papers.value.slice(0, visibleCount.value);
  });
  
  const loadMore = () => {
    visibleCount.value += 10; // 每次点击加载更多10个卡片
  };
  </script>
  
  <style scoped>
  .title {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
    color: #333;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    font-family: SourceHanSerifCN;
  }
  
  .centered-list {
    list-style-type: none; /* 移除列表项标记 */
    padding: 0; /* 去掉默认的内边距 */
    display: flex;
    flex-direction: column;
    align-items: center; /* 水平居中对齐 */
  }
  
  .centered-item {
    margin-bottom: 20px; /* 添加每个列表项之间的间距 */
  }
  
  .card {
    display: flex; /* 使用 Flexbox 布局 */
    align-items: center; /* 垂直居中对齐 */
  }
  
  .card-body {
    flex: 1; /* 占据剩余空间 */
  }
  
  .card h3 {
    margin-top: 0;
    font-size: 18px;
  }
  
  .load-more {
    text-align: center;
    margin-top: 20px;
  }
  
  .load-more button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .load-more button:hover {
    background-color: #0056b3;
  }
  </style>
  