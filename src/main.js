import { createApp } from 'vue'

import App from './App.vue'

import './assets/main.css'
import router from "./router"

// import Home from './views/Home.vue'
// import About from './views/About.vue'
// import { createRouter, createWebHistory } from "vue-router";

// const router = createRouter( {
//     history: createWebHistory(),
//     routes: [
//         { path: '/', component: Home },
//         { path: '/about', component: About },
//     ]
// })

const app = createApp(App)
    
app.use(router)
    
app.mount('#app')
