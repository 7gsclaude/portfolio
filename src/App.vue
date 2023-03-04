

<template>
  <header>
    <div class="logo">
    <img alt="cover image"  src="./assets/coverimage.jpeg" />
    </div>
   
    <nav class="links">
      <div>
        <router-link class="router-link" to="/">home</router-link> |
        <router-link class="router-link" to="/project">Projects</router-link> |
        <router-link class="router-link" to="/about">About</router-link> |
        <router-link class="router-link" to="/resume">Resume</router-link>
      </div>
    </nav>


  </header>
  <router-view/>






</template> 



<style>
#app{
  font-family: Avenir, Helvetic, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;


}

.logo img {
  width: 100%;
  height: 100%;
 
}

</style>

TODO fix caraousel 
