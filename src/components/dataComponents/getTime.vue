<template>
    <div class="date">
      <span>{{ currentDateTime }}</span>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const currentDateTime = ref('');
  
  const updateDateTime = () => {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit' };
    currentDateTime.value = now.toLocaleDateString('zh-CN', options);
  };
  
  onMounted(() => {
    updateDateTime();
    setInterval(updateDateTime, 60000); // 每分钟更新一次时间
  });
  </script>
  
  <style scoped>
  .date {
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    font-family: 'Geometos';
  }
  </style>
  