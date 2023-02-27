import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import './assets/main.css'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
    ]
})

createApp(App).mount('#app')
    
    .use(router)
    
.mount('#app')
