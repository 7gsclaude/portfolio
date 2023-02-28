import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import PostProject from "../components/PostProject.vue";
import MainCard from "../components/MainCard.vue";
import ProjectCard from "../components/ProjectCard.vue";


   
    const routes = [
      { path: "/", name: "home", component: MainCard },
      { path: "/about", name: "about", component: About },
      { path: "/post-project", name: "post-project", component: PostProject },
      { path: "/project", name: "project", component: ProjectCard },
    ];

    const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes
    })


export default router;




