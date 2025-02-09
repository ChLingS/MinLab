<template>
    <div class="blog-post">
        <div class="blog-post-img"> 
            <img :src="imageUrl" alt="" @error="setDefaultImage">
            <!-- <img :src="imageUrl" alt="" @error="setDefaultImage">  -->
        </div>
        <div class="blog-post-info">
            <div class="blog-post-date"> <span>{{ nameOfjournal }}</span> <span>{{ date }}</span> </div>
            <h1 class="blog-post-title">{{ title }}</h1>
            <p class="blog-post-text"> abstract: {{ text }} </p>
            <KinesisContainer>
                <KinesisElement :strength="10">
                    <a :href="paper_url" class="blog-post-cta">Read more</a>
                </KinesisElement>
            </KinesisContainer>
        </div>
    </div>
</template>
<script setup>
import { getCurrentInstance } from 'vue';
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
const { proxy } = getCurrentInstance();
const setDefaultImage = (event) => {
    event.target.src = proxy.$defaultImage; // 使用全局默认图片
};
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    nameOfjournal: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: true
    },
    paper_url: {
        type: String,
        required: true
    }
});




</script>
<style scoped>
/* scoped 使用得定义的样式只在本页面内生效 */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.blog-post {
    display: flex;
    /* width: 100%; */
    padding: 0.7rem;
    background-color: #ffffff;
    box-shadow: 5px 5px 5px 0px #EAEAEA;
    align-items: center;
    /* border-radius: 0.8rem; */
    flex-basis: 20px;
}

.blog-post-img {
    min-width: 21rem;
    max-width: 21rem;
    height: 19rem;
    /* transform: translateX(-5rem); */
    position: relative;
    overflow: hidden;
}

.blog-post-img img {
    width: 80%;
    height: 80%;
    object-fit: cover;
    border-radius: 0.8rem;
    display: block;
    transition: transform 0.3s ease; /* 添加缩放过渡效果 */
}

.blog-post-img img:hover {
    transform: translateX(0.5rem);
}


.blog-post-img img::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to right, rgba(79, 172, 254, 0.8) rgba(0, 242, 254, 0.8));
    border-radius: 0.8rem;
    box-shadow: 0.5rem 0.5rem 3rem 1px rgba(0, 0, 0, 0.5);
}

.blog-post-date span {
    display: block;
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.84rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.blog-post-title {
    font-size: 1.5rem;
    margin: 0.5rem 0 0.5rem;
    color: #3a3a3a;
    position: relative;
    background: linear-gradient(to right, #000000, #000000) no-repeat right bottom;
    background-size: 0 1px;
    transition: background-size 1s;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}

.blog-post-title:hover {
    background-position: left bottom;
    background-size: 100% 1px;
}


.blog-post-text {
    font-family: 'thin_english', sans-serif;
    margin-bottom: 3rem;
    font-size: 0.96rem;
    color: rgba(0, 0, 0, 0.7);
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
}

.blog-post-cta {
    display: inline-block;
    /* padding: 1.2rem 3rem; */
    letter-spacing: 1px;
    color: #949494;
    font-size: 0.84rem;
    text-decoration: none;
}


.blog-post-title::after {
    content: '';
    display: block;
    width: 10rem;
    height: 0.4rem;
    /* background-color: #4f4f4f; */
    position: absolute;
    top: 3.5rem;
    left: 0;
}

@media screen and (max-width: 1068px) {
    .blog-post {
        max-width: 80rem;
    }

    .blog-post-img {
        min-width: 30rem;
        max-width: 30rem;
    }
}

/* @media screen and (max-width: 959px) {
    .blog-post {
        max-width: 70rem;
    }

    .blog-post-img {
        min-width: 100%;
        max-width: 100%;
        transform: translate(0, -8rem);
    }
} */

@media screen and (max-width: 768px) {
    .blog-post {
        /* padding: 1rem; */
        flex-direction: column;
        
        /* margin: 0px; */
    }

    .blog-post-img {
        min-width: 100%;
        max-width: 100%;
        /* transform: translate(0, -3rem); */
    }

    .blog-post-info {
        margin: 0px;
        padding: 0px;
        margin-left: 2rem;
        margin-right: 2rem;
        transform: translateY(-3rem);
    }

    .blog-post-title {
        font-size: 1.75rem;
        margin: 1.5rem 0 1.5rem;
    }
    .blog-post-info p{
        height: 10rem;
        overflow: hidden;
    }
}
</style>
