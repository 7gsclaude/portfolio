<template>
    <div class="container">
        <div class="input-container">
            <label for="id">ProjectId</label>
            <input type="text" name="id" v-model="postData.id">
        </div>
  
    
            <div class="input-container">
                <label for="id">Title</label>
                <input type="text" name="title" v-model="postData.title">
            </div>
        
        
                <div class="input-container">
                    <label for="id">About</label>
                    <input type="text" name="about" v-model="postData.about">
                </div>
            
            
                    <div class="input-container">
                        <label for="id">Image</label>
                        <input type="text" name="image" v-model="postData.image">
                    </div>
                
                
                        <div class="input-container">
                            <label for="id">Link</label>
                            <input type="text" name="link" v-model="postData.link">
                        </div>
                    
                    <!-- 
                            <div class="input-container">
                                <label for="id">Github</label>
                                <input type="text" name="github" v-model="postData.github">
                            </div>
                         -->
            <button type="submit" @click="$event => PostProject()">Post</button>
    </div>

    
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            postData: {
                id: "",
                title: "",
                about: "",
                image: "",
                link: "",
                // github needs to be applied or like an alt project link
                
            }
        }
    },
    methods: {
        PostProject() {
            axios.put("https://aghi0wv4xh.execute-api.us-east-1.amazonaws.com/items", this.postData).then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            })
        }
    }

}
</script>


<style scoped>
div {
    background-color: red;
}

</style>