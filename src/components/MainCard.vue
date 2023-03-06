<template>
<div class="wrapper">

    <div class="main-container">
        

        <div class="container-one">
            <div class="profile">
                <img src="../assets/profilepicture.jpeg" alt="">
                <h1>Porfolio</h1> 
                <h1>Claude Allen</h1>
                <p>Software Dev and Reef Keeper</p>
            </div>
            <div class="social-links">
                <div class="link">
                        <a href="https://github.com/7gsclaude">
                            <h2>Github</h2>
                            <img src="../assets/github.png" alt="">
                        </a>
                    </div>
                    <div class="link">
                        <a href="https://www.linkedin.com/in/7gsclaude-claude-allen-software/">
                            <h2>LinkedIn</h2>
                            <img src="../assets/linkedin.png" alt="">
                        </a>
                    </div>

                    <div class="link">
                        <a href="https://www.instagram.com/7gsreef/?hl=en">
                            <h2>Instagram</h2>
                            <img src="../assets/instagram-icon-small.jpeg" alt="">
                        </a>
                        
                    </div>
            </div>
        </div>
        <div class="container-two">
            <div class="aboutme">
                <h1>About Me</h1>
                <p>I love the ocean and technology. These two are things that have always fascinated me and drawn my attention since I was young. I want to incorporate the ocean and technology as much as possible, it's something really important to me.</p>
            </div>
            <div class="technology-section">
                <h1>Technologies Studied</h1>
                  <div class="logos">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="">
                    <img src="../assets/python.png" alt="">
                    <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="">
                    
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="">
                    <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt="">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="">
                    <img src="https://cyclr.com/wp-content/uploads/2022/03/ext-553.png" alt="">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/aws-1869025-1583149.png" alt="">
                


                </div>
            </div>
            <div class="button-container">
                <div class="project-button">
                    <router-link class="router-link" to="/project">My Projects</router-link>
                </div>
                <div class="project-button">
                   <router-link class="router-link" to="/resume">My Resume</router-link>
                </div>
                
            </div>
        </div>

    </div>
</div>
</template>



<script>
export default {
    
}

</script>



<style scoped>
.wrapper{
    display: flex;
    justify-content: center;
   
    max-height: 600px;
}

 img{
    height: 20px;
 }


  .main-container {
        display: flex;
        flex-direction: row;
        background-color: #ac179b;
        background-color: blue;
        border-radius: 25px;
        width: 80%;
        

    } 

    .container-one{
        background-color: #58b533;
        padding: 2.5%;
        width: 40%;
        border-radius: 25px;

    }

    .container-two{
        background-color: purple;
        margin: 2.5%;
        width: 60%;
        color: black;
        border-radius: 25px;
        

    }
   

    .profile img{
        height: 5rem;
        border-radius: 50%;

    }

    .link a{
        text-decoration: none;
        color: black;
        font-size: 12px; 
    }
    
    .link img{
        height: 2rem;
    }

    .aboutme h1 p {
        text-align: center;
        margin: 2.5%;
        width:70%
    }

    .logos img{
        height: 2.5rem;
        margin: 1.5%;

    }


    .button-container{
        margin-top: 5%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .project-button{
        background-color: #f20ad7;
        margin: 5px;
        padding: 5px;
        border-radius: 15px;
        
    }

    .project-button a{
        text-decoration: none;
        color: green;
        font-weight: bold;
        text-shadow: 5px 5px 5px black, 0 0 1em blue, 0 0 0.2em blue;
        font-weight: bold;

    
    }


    @media only screen and (max-width: 950px) {
        .main-container{
            
            width: 100%;
            height: 100%;
        }
        
    }


</style>