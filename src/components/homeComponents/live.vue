<template>
  <div>
    <div class="title">
      <h2>动态</h2>
      <div style="
        width: 80%;  
        height: 2px; /* 分界线高度 */
         background-color: #ccc; /* 分界线颜色 */ 
         margin: 20px auto 0; /* 上下边距和居中对齐 */ 
         border-radius: 1px;
      "></div>
    </div>

    <ul class="centered-list">
      <li v-for="(paper, index) in visiblePapers" :key="index" class="centered-item">
        <Card :title="paper.title" :description="paper.abstract" :imageUrl="paper.image_url" :date="paper.date" />
      </li>
    </ul>
    <div v-if="papers.length > visiblePapers.length" class="load-more">
      <button @click="loadMore" class="arrow-button">⬇️</button>
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

.divider {
  width: 80%;
  height: 2px;
  background-color: #ccc;
  margin: 20px auto 0;
  border-radius: 1px;
}

.centered-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.centered-item {
  margin-bottom: 20px;
}

.card {
  display: flex;
  align-items: center;
}

.card-body {
  flex: 1;
}

.card h3 {
  margin-top: 0;
  font-size: 18px;
}

.load-more {
  text-align: center;
  margin-top: 20px;
}

.arrow-button {
  background-color: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}

.arrow-button:hover {
  color: #949494;
}

/* Media queries for mobile responsiveness */
@media (max-width: 862px) {
  .title {
    font-size: 20px;
  }

  .centered-item {
    margin-bottom: 15px;
  }

  .arrow-button {
    font-size: 1.5rem;
  }

  .card h3 {
    font-size: 16px;
  }
  .card {
    width: 90%;
  }
}
</style>
