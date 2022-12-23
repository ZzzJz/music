import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import '@/assets/css/tailwind.css'
import 'uno.css'
import "@/assets/font/iconfont.css";

createApp(App).use(router).mount('#app')
