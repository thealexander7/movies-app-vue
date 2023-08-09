import { createPinia } from 'pinia'
import { createApp } from 'vue'
import './assets/styles/main.scss'
import App from './App.vue'

createApp(App).use(createPinia()).mount('#app')
