<template>
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
        <cardBlog title="Geospatial Analysis of Urban Heat Islands" text="abstract: 
            This study uses GIS to map the potentials of renewable energy sources such as solar and wind energy. 
            It provides an in-depth analysis of suitable locations for renewable energy installations.This study uses GIS to map the potentials of renewable energy sources such as solar and wind energy. 
            It provides an in-depth analysis of suitable locations for renewable energy installations"
            date="2023-01-01" day="Sunday" imageUrl="path/to/image.jpg" perpar_url="path/to/paper.pdf" />
    </div>
    <div class="card-list">
        <cardBlog title="Geospatial Analysis of Urban Heat Islands" text="abstract: 
            This study uses GIS to map the potentials of renewable energy sources such as solar and wind energy. 
            It provides an in-depth analysis of suitable locations for renewable energy installations.This study uses GIS to map the potentials of renewable energy sources such as solar and wind energy. 
            It provides an in-depth analysis of suitable locations for renewable energy installations"
            date="2023-01-01" day="Sunday" imageUrl="path/to/image.jpg" perpar_url="path/to/paper.pdf" />
    </div>
    <div class="card-list">
        <cardBlog title="Geospatial Analysis of Urban Heat Islands" text="abstract: 
            This study uses GIS to map the potentials of renewable energy sources such as solar and wind energy. 
            It provides an in-depth analysis of suitable locations for renewable energy installations.This study uses GIS to map the potentials of renewable energy sources such as solar and wind energy. 
            It provides an in-depth analysis of suitable locations for renewable energy installations"
            date="2023-01-01" day="Sunday" imageUrl="path/to/image.jpg" perpar_url="path/to/paper.pdf" />
    </div>
    <div class="card-list">
        <cardBlog title="Geospatial Analysis of Urban Heat Islands" text="abstract: 
            This study uses GIS to map the potentials of renewable energy sources such as solar and wind energy. 
            It provides an in-depth analysis of suitable locations for renewable energy installations.This study uses GIS to map the potentials of renewable energy sources such as solar and wind energy. 
            It provides an in-depth analysis of suitable locations for renewable energy installations"
            date="2023-01-01" day="Sunday" imageUrl="path/to/image.jpg" perpar_url="path/to/paper.pdf" />
    </div>
    <div class="card-list">
        <cardBlog title="Geospatial Analysis of Urban Heat Islands" text="abstract: 
            This study uses GIS to map the potentials of renewable energy sources such as solar and wind energy. 
            It provides an in-depth analysis of suitable locations for renewable energy installations.This study uses GIS to map the potentials of renewable energy sources such as solar and wind energy. 
            It provides an in-depth analysis of suitable locations for renewable energy installations"
            date="2023-01-01" day="Sunday" imageUrl="path/to/image.jpg" perpar_url="path/to/paper.pdf" />
    </div>
    <div class="card-list">
        <cardBlog title="Geospatial Analysis of Urban Heat Islands" text="abstract: 
            This study uses GIS to map the potentials of renewable energy sources such as solar and wind energy. 
            It provides an in-depth analysis of suitable locations for renewable energy installations.This study uses GIS to map the potentials of renewable energy sources such as solar and wind energy. 
            It provides an in-depth analysis of suitable locations for renewable energy installations"
            date="2023-01-01" day="Sunday" imageUrl="path/to/image.jpg" perpar_url="path/to/paper.pdf" />
    </div>
    <div class="card-list">
        <cardBlog title="Geospatial Analysis of Urban Heat Islands" text="abstract: 
            This study uses GIS to map the potentials of renewable energy sources such as solar and wind energy. 
            It provides an in-depth analysis of suitable locations for renewable energy installations.This study uses GIS to map the potentials of renewable energy sources such as solar and wind energy. 
            It provides an in-depth analysis of suitable locations for renewable energy installations"
            date="2023-01-01" day="Sunday" imageUrl="path/to/image.jpg" perpar_url="path/to/paper.pdf" />
    </div>
    <div class="card-list">
        <cardBlog title="Geospatial Analysis of Urban Heat Islands" text="abstract: 
            This study uses GIS to map the potentials of renewable energy sources such as solar and wind energy. 
            It provides an in-depth analysis of suitable locations for renewable energy installations.This study uses GIS to map the potentials of renewable energy sources such as solar and wind energy. 
            It provides an in-depth analysis of suitable locations for renewable energy installations"
            date="2023-01-01" day="Sunday" imageUrl="path/to/image.jpg" perpar_url="path/to/paper.pdf" />
    </div>

</template>
<script setup>
import cardBlog from '@/components/dataComponents/cardBlog.vue';
</script>
<style scoped>
/* scoped 使用得定义的样式只在本页面内生效  */
.title {
    text-align: center;
    margin-top: 70px;
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
</style>