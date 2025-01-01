<template>
    <div class="container">
        <figure :style="{ backgroundImage: `url(${backImage})` }" class="background-image">
            <div class="content">
                <div style="display: flex; gap: 0.5rem; align-items: center; justify-content: center;">
                    <KinesisContainer>
                        <KinesisElement :strength="10">
                            <h1>M</h1>
                        </KinesisElement>
                    </KinesisContainer>
                    <KinesisContainer>
                        <KinesisElement :strength="10">
                            <h1>i</h1>
                        </KinesisElement>
                    </KinesisContainer>
                    <KinesisContainer>
                        <KinesisElement :strength="10">
                            <h1>n</h1>
                        </KinesisElement>
                    </KinesisContainer>
                    <KinesisContainer>
                        <KinesisElement :strength="10">
                            <h1>L</h1>
                        </KinesisElement>
                    </KinesisContainer>
                    <KinesisContainer>
                        <KinesisElement :strength="10">
                            <h1>a</h1>
                        </KinesisElement>
                    </KinesisContainer>
                    <KinesisContainer>
                        <KinesisElement :strength="10">
                            <h1>b</h1>
                        </KinesisElement>
                    </KinesisContainer>
                </div>

                <div style="font-family: SourceHanSerifCN; font-size: 1.1rem;">
                    <span style="font-family: 'NovecentoSansWide', sans-serif;">MinLab</span>
                    <span>是一个江西师范大学地理与环境学院的</span>
                    <span style="font-family: 'NovecentoSansWide', sans-serif;">GIS</span>
                    <span>研究团队</span>
                </div>
            </div>
            <div class="arrow-container">
                <div class="arrow" @click="scrollToTarget"></div>
            </div>
            <div class="date">
                <getTime></getTime>
            </div>
        </figure>
        <div class="target" ref="targetSection"></div>
        <live></live>
    </div>

</template>

<script setup>
import live from '@/components/homeComponents/live.vue';
import getTime from '@/components/dataComponents/getTime.vue';
import backImage from '@/assets/back.jpg';
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

import { ref } from 'vue';
const targetSection = ref(null);
const scrollToTarget = () => {
    targetSection.value.scrollIntoView({ behavior: 'smooth' });
};

</script>

<style scoped>
.background-image {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    z-index: -1;
    background-position: center center;
    padding-top: 1px;
}

.container {
    height: 100vh;
}

.content {
    position: absolute;
    top: 43%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #ffffff;
}

.content h1 {
    font-family: 'NovecentoSansWide', sans-serif;
    font-size: 5.5rem;
    font-weight: 600
}

.flex-container {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    flex-wrap: wrap;
}

.animated-text {
    font-family: 'NovecentoSansWide', sans-serif;
    font-size: 5.5rem;
    font-weight: 600;
}

.description {
    font-family: SourceHanSerifCN;
    font-size: 1.1rem;
}

.arrow-wrapper {
    position: absolute;
    bottom: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.arrow-container {
    position: absolute;
    bottom: 100px;
    /* 调整此值以控制箭头距离底部的距离 */
    display: flex;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
    width: 100%;
}

.arrow {
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid rgb(255, 255, 255);
    position: relative;
    animation: moveDown 1s infinite;
    cursor: pointer;
}

.date {
    position: absolute;
    bottom: 3%;
    right: 0.1rem;
    transform: translate(-50%, -50%);
    text-align: center;
}

@keyframes moveDown {
    0% {
        top: 0;
    }

    50% {
        top: 10px;
    }

    100% {
        top: 0;
    }
}

/* Media queries for mobile responsiveness */
@media (max-width: 862px) {
    /* .container{
        height: 15vh;
    } */
    .content {
        top: 38%;
        left: 50%;
    }

    .content h1 {
        font-size: 4rem;
    }

    .animated-text {
        font-size: 2.5rem;
    }

    .description {
        font-size: 0.9rem;
    }

    .arrow-container {
        bottom: 7rem;
    }
    .arrow {
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 15px solid rgb(255, 255, 255);
    }

    .date {
        font-size: 0.8rem;
        right: 0rem;
    }
}
</style>
