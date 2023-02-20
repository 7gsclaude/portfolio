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



<template>
    {{ projectData.ProjectsArray }}
    <div v-for="(items, index) in projectData.ProjectsArray" v-bind:key="items">
        <h2>{{projectData.ProjectsArray[index].Title}}</h2>
        <img :src="projectData.ProjectsArray[index].Image" alt="">
    </div>
</template>



<style>
.project-card img{
    height: 2rem;
}

</style>