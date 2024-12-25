<template>
    <div class="card">
        <div class="image"> <img :src="img" @error="setDefaultImage" /></div>
        <div class="card-body"> 
            <h3><a class="card-title">{{ name }}</a></h3>
            <p>{{ email }}</p>
        </div>
    </div>
</template>
<script setup>
import { getCurrentInstance } from 'vue';
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true  
    },
    img: {
        type: String,
        required: true
    },
    grade:{
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})
const { proxy } = getCurrentInstance(); const setDefaultImage = (event) => {
    event.target.src = proxy.$defaultImage; // 使用全局默认图片 
};

</script>
<style scoped>
/* scoped 使用得定义的样式只在本页面内生效  */
.card{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    margin: 10px;
    width: 14rem;
}
.card:hover {
    box-shadow:  0 4px 6px rgba(0, 0, 0, 0.1);
}
.card img{
    max-width: 10rem;
    /* 限制图片最大宽度为卡片宽度 */
    max-height: 10rem;
    /* 限制图片最大高度 */
    height: auto;
    /* 保持图片比例 */
    border-radius: 4px;
    object-fit: cover;
    /* 保持图片覆盖 */
}
.image img:not(:hover) {
    filter: blur(10px) grayscale(70%);
    scale: 0.9;
    transition: all 0.3s ease-in-out;
}

</style>
 