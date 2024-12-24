<template>
    <div class="content">
        <ul>
            <li v-for="(item, index) in person" :key="index">
                <cardAnimals :name="item.name" :email="item.email" :img="item.img" :grade="item.grade" :type="item.type"></cardAnimals>
            </li>
        </ul>
    </div>
</template>
<script setup>
import cardAnimals from '@/components/dataComponents/cardAnimals.vue';
import getPerson from '@/Hooks/getPerson.js';

const { person } = getPerson();



</script>
<style scoped>
/* scoped 使用得定义的样式只在本页面内生效  */
.content {
    padding-top: 60px;
}
</style>