<template>
    <div class="container">
        <figure :style="{ backgroundImage: `url(${backImage})` }" class="background-image"></figure>
    </div>
    <div class="title">
        <span>人员构成</span>
        <div class="divider"></div>
    </div>
    <div class="the_Boss">
        <card 
            :title="'导师：黄敏'" 
            :description="'&emsp;&emsp;武汉大学博士毕业，2023年赣鄱俊才·江西省主要学科学术和技术带头人（青年），国家自然科学基金委员会通讯评议专家，国际SCI二区学术期刊Remote Sensing专刊主编、国际学术期刊Data Science and Management青年编委、国际学术会议ICAG、AOGS分会场主席。主要从事智慧城市、遥感应用、北斗地理信息产教融合，在G&RS、JAG等国际权威学术期刊上发表论文10多篇。'" 
            :imageUrl="'https://dlxy.jxnu.edu.cn/_upload/article/images/04/2c/25605e83423f8dfdcdda3843c0b0/be785e3a-53fb-49e7-8648-8025d791e285.jpg'" 
            :date="'2025-02-09'" 
        />
    </div>
    <div class="card-list">
        <div v-for="(grade, index) in uniqueGrades" :key="index" class="card-item">
            <h3>{{ grade }}</h3>
            <div v-for="(item, index) in persons" :key="index">
                <div v-if="item.grade === grade">
                    <cardAnimals :name="item.name" :email="item.email" :img="item.img" :grade="item.grade"
                        :type="item.type"></cardAnimals>
                </div>
            </div>
        </div>
    </div>
    <Transition name="fade">
        <div v-if="showSidebar" class="grade-list">
            <ul style="list-style-type: none;">
                <li v-for="(item, index) in uniqueGrades" :key="index" class="grade-item">
                    {{ item }}
                    <div class="line"></div>
                </li>
            </ul>
        </div>
    </Transition>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import cardAnimals from '@/components/dataComponents/cardAnimals.vue';
import card from '@/components/dataComponents/card.vue';
import { usePersons } from '@/Hooks/getPersonData.js';
import backImage from '@/assets/imgbar.jpg';

const { persons } = usePersons();
const uniqueGrades = ref(new Set()); // 监听 persons 数据变化 
const showSidebar = ref(false);

watch(persons, (newPersons) => {
    uniqueGrades.value = new Set(newPersons.map(person => person.grade));
});

const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    showSidebar.value = scrollTop > window.innerHeight * 1; // 滚动到页面 20% 高度时显示
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* scoped 使用得定义的样式只在本页面内生效  */
.container {
    height: 320px;
}

.background-image {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-attachment: unset;
    background-size: cover;
    z-index: -1;
    background-position: center center;
}

.title {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 20px;
    font-size: 2rem;
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

.the_Boss {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    width: 100%;
    margin: 20px 0;
}
.the_Boss .card {
    width: 50%;
    margin: 0 20px;
}   

.card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    margin: 0 auto;
    list-style-type: none;
    width: 65%;
}
.card-item {
    margin: 30px;
}

.grade-list {
    position: fixed;
    width: 15%;
    top: 20%;
    right: 1.2rem;
    font-family: NovecentoSansWide;
    font-size: 2rem;
    color: #7a7a7a;
    margin-top: 5%;
}
.grade-list ul li {
    padding-top: 1.5rem;
}
.line {
    width: 100%;
    height: 2px;
    background-color: #7a7a7a;
    margin: 0 100px 0 0;
}

.grade-item {
    margin-top: 5%;
}

.grade-item:hover {
    cursor: pointer;
    color: #000000;
    transition: all 0.5s;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

@media screen and (max-width: 862px) {
    .container{
        height: 200px;
    }
    .grade-list {
        font-size: 1.2em;
        right: 2rem;
    }
    .card-list {
        width: 100%;
    }
    .card-item{
        font-size: 1rem;
    }
}
</style>
