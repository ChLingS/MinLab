<template>
    <div class="container">


        <div class="title">
            <span>
                专利列表
            </span>
            <div style="
                width: 80%;  
                height: 2px; /* 分界线高度 */
                background-color: #ccc; /* 分界线颜色 */ 
                margin: 20px auto 0; /* 上下边距和居中对齐 */ 
                border-radius: 1px;
            "></div>
        </div>
        <div class="card-list">
            <div v-for="(patent, index) in visiblePatents" :key="index" v-slideln>
                <cardBlog :title="patent.title" 
                          :date="patent.date" 
                          :text="patent.abstract"
                          :imageUrl="patent.image_url"
                          :paper_url="patent.paper_url" />
            </div>
        </div>
        <div v-if="patents.length > visiblePatents.length" class="load-more">
            <button @click="loadMore" class="arrow-button">⬇️</button>
        </div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue';
import cardBlog from '@/components/dataComponents/cardBlog.vue';
import vSlideln from '@/plugins/vSlideln';
import { usePatents } from '@/Hooks/getPatentData.js';

const { patents } = usePatents();

// console.log("patent", patents.value);

const visibleCount = ref(10);

const visiblePatents = computed(() => {
    return patents.value.slice(0, visibleCount.value);
});

const loadMore = () => {
    visibleCount.value += 10;
};


</script>
<style scoped>
/* scoped 使用得定义的样式只在本页面内生效  */
.container {
    height: 100vh;
}

.title {
    text-align: center;
    /* margin-top: 70px; */
    padding-top: 60px;
    margin-bottom: 50px;
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    font-family: SourceHanSerifCN;
}

.card-list {
    display: flex;
    flex-direction: column;
    justify-self: center;
    width: 70%;
    padding: 20px;
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

@media screen and (max-width: 768px) {
    .card-list {
        width: 100%;
        padding: 0px;
    }
}


</style>