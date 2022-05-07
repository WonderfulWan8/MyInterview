import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 路由：根据不同的url展示不同的内容，带#的是哈希路由
createApp(App).use(router).mount('#app')
