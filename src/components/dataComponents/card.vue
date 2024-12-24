<template>
    <div class="card">
        <img :src="imageUrl" @error="setDefaultImage" />
        <div class="card-body">
            <h3><a class="card-title">{{ title }}</a></h3>
            <p>{{ description }}</p>
            <!-- <button @click="handleClick">Click me</button> -->
            <div class="card-date">Date: {{ date }}</div>
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
})
const { proxy } = getCurrentInstance(); const setDefaultImage = (event) => {
    event.target.src = proxy.$defaultImage; // 使用全局默认图片 
};

</script>

<style scoped>
.card {
    display: flex;
    /* 使用 Flexbox 布局 */
    /* align-items: center;
    垂直居中对齐 */
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    margin: 10px;
    width: 50rem;
}

.card:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    /* 添加阴影效果 */
}

.card img {
    max-width: 10rem;
    /* 限制图片最大宽度为卡片宽度 */
    max-height: 100%;
    /* 限制图片最大高度 */
    height: auto;
    /* 保持图片比例 */
    border-radius: 4px;
    object-fit: cover;
    /* 保持图片覆盖 */
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
</style>