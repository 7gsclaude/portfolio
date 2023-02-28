import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import PostProject from "../components/PostProject.vue";
import MainCard from "../components/MainCard.vue";


   
    const routes = [
        { path: "/", name: "home", component: MainCard },
        { path: "/about", name: "about", component: About },
        { path: "/post-project", name: "post-project", component: PostProject },
    ]

    const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes
    })


export default router;




