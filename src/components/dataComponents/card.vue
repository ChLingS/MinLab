<template>
    <div class="card">
        <!-- 图片容器 -->
        <div class="image-container">
            <img :src="imageUrl" @error="setDefaultImage" />
        </div>
        <div class="card-body">
            <h3><a :href="perpar_url" class="card-title">{{ title }}</a></h3>
            <p>{{ description }}</p>
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
    padding: 10px;
    margin: 10px;
    width: 50rem;
}

.card:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* 图片容器 */
.image-container {
    width: 100%;
    max-width: 100%;
    max-height: 10rem;
    overflow: hidden; /* 隐藏超出部分 */
    border-radius: 4px;
    position: relative;
    display: flex;
    justify-content: center; 
    align-items: center; 
}

/* 图片样式 */
.image-container img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* 保持图片比例并覆盖容器 */
    transition: transform 0.3s ease; /* 添加缩放过渡效果 */
}

/* 鼠标移入时缩放图片 */
.image-container:hover img {
    transform: scale(1.1); /* 缩放比例为1.1 */
}

.card-body {
    padding: 10px;
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

@media screen and (max-width: 768px) {
    .card {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
}
</style>