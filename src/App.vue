

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div>
      <MainCard />
    

    </div>
  </header>
</template> 

<script>

// import ProjectsCard from './components/ProjectsCard.vue'
import MainCard from "./components/MainCard.vue"
///above are imports


export default {
  name: "App",
  components: {

    MainCard,
    
  }
}

</script>


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