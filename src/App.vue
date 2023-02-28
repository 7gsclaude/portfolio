

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <nav class="links">
      <div>
        <router-link class="router-link" to="/">home</router-link> |
        <router-link class="router-link" to="/post-project">Projects</router-link> |
        <router-link class="router-link" to="/contact">contact</router-link>
      </div>
    </nav>
  </header>
  <router-view/>
</template> 
<!-- 
<script setup>

</script> -->

<!-- <script>



import { RouterView } from "vue-router"
import MainCard from "./components/MainCard.vue"
import ProjectCard from "./components/ProjectCard.vue"
///above are imports


export default {
  name: "App",
  components: {

    MainCard,
    ProjectCard,
    RouterView
  }
}

</script> -->


<style>
#app{
  font-family: Avenir, Helvetic, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;


}


</style>