<template>
<div class="main-container">
    <!-- {{ projectData.ProjectsArray }} this shows my json data -->
    <div class="project-card" v-for="(items, index) in projectData.ProjectsArray" v-bind:key="items">
        <h2>{{ projectData.ProjectsArray[index].Title }}</h2>
        <img :src="projectData.ProjectsArray[index].Image" alt="">
        <p>{{ projectData.ProjectsArray[index].About }}</p>
        <div class="links">
            <a :href="projectData.ProjectsArray[index].Link"><img src="../assets/acro1.png" alt="click on this acro for github">Click the coral for Github</a>
        </div>
    </div>
</div>
</template>



<script>
import jsonData from '/projects.json'

export default {

    data() {
        return {
            projectData: jsonData
        }
    }
}
</script>





<style scoped>
.main-container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
}

.project-card{
    padding: 10px;
    margin-top: 10px;
    flex-wrap: 0 0 40% ;
    background-color: white;
    border-radius: 25px;
    box-shadow: rgb(10, 1, 1) 0px 3px 10px;
}
.project-card img{
    height: 5rem;
}

.liknks{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;


}

.links img{
    height: 2rem;
    margin: 5px;

}

</style>