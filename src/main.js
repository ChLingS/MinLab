import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import defaultImage from '@/assets/icon.png'; // 引用本地默认图片

const app = createApp(App)

// 设置全局属性 
app.config.globalProperties.$defaultImage = defaultImage

app.use(router)

app.mount('#app')
