<template>
    <div class="card">
        <!-- 图片容器 -->
        <div class="image-container">
            <img :src="imageUrl" @error="setDefaultImage" />
        </div>
        <div class="card-body">
            <h3><a :href="perpar_url" class="card-title">{{ title }}</a></h3>
            
            <p class="card-description">{{ description }}</p>
            <div v-if="date" class="card-date">Date: {{ date }}</div>
        </div>
    </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    perpar_url: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const { proxy } = getCurrentInstance();
const setDefaultImage = (event) => {
    event.target.src = proxy.$defaultImage; // 使用全局默认图片
};
</script>

<style scoped>
.card {
    display: flex;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.7rem;
    margin: 10px;
    align-items: center;
    /* width: 50rem; */
}

.card:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* 图片容器 */
.image-container {
    min-width: 21rem;
    max-width: 21rem;
    height: 19rem;
    overflow: hidden;
    border-radius: 4px;
    position: relative;
}

/* 图片样式 */
.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
}

.image-container:hover img {
    transform: scale(1.1);
}

/* 调整 card-body 样式 */
.card-body {
    height: 17rem;
    padding: 10px;
    display: flex;
    flex-direction: column; /* 垂直排列子元素 */
    justify-content: space-between; /* 在垂直方向上分散子元素 */
}

.card h3 {
    margin-top: 0;
    font-size: 18px;
}

.card-title {
    background: linear-gradient(to right, #000000, #000000) no-repeat right bottom;
    background-size: 0 1px;
    transition: background-size 1s;
}

.card-title:hover {
    background-position: left bottom;
    background-size: 100% 1px;
}

.card-date{
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.84rem;
    font-weight: 600;
    margin-bottom: 0.1rem;
    /* 移除多余的 margin-top */
}

.card-description {
  word-wrap: break-word; /* 确保长单词换行 */
  word-break: break-all; /* 确保长单词换行 */
}

@media screen and (max-width: 768px) {
    .card {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .image-container {
        min-width: 100%;
        max-width: 100%;
        height: 15rem;
        margin: 0px;
        padding: 0px;
    }
    .card-body {
        height: 15rem;
        width: 100%;
    }
    .card-body p {
        height: 10rem;
        overflow: hidden;
    }
}
</style>
