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
                        <a href="">
                            <h2>Github</h2>
                            <img src="../assets/github.png" alt="">
                        </a>
                    </div>
                    <div class="link">
                        <a href="">
                            <h2>LinkedIn</h2>
                            <img src="../assets/linkedin.png" alt="">
                        </a>
                    </div>

                    <div class="link">
                        <a href="">
                            <h2>Instagram</h2>
                            <img src="../assets/instagram-icon-small.jpeg" alt="">
                        </a>
                        
                    </div>
            </div>
        </div>
        <div class="container-two">
            <div class="aboutme">
                <h1>About Me</h1>
                <p>I love the ocean and technology. These two are things that have always facinated me and drawn my attentionn after learning in GA's bootcamp. I want to encorperate the ocean and technology as much as possible, its something really important to me. </p>
            </div>
            <div class="technology-section">
                <h1>Technologies Studied</h1>
                  <div class="logos">
                    <img src="../assets/javascripticon.png" alt="">
                    <img src="../assets/python.png" alt="">
                    <img src="../assets/node_expresslogo.jpeg" alt="">
                    
                    <img src="../assets/reactlogo.png" alt="">
                    <img src="../assets/html5.jpg" alt="">
                    <img src="../assets/css3.png" alt="">
                    <img src="../assets/mongodb.png" alt="">
                    <img src="../assets/aws.png" alt="">
                


                </div>
            </div>
            <div class="button-container">
                <div class="project-button">
                    <a href="/project">My Projects</a>
                    
                </div>
                <div class="project-button">
                    <a href="/resume">My Resume</a>
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
        width: 60%;
        

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

    .aboutme{
        text-align: left;
        margin: 2.5%;
        width:70%
    }

    .logos img{
        height: 2.5rem;

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
        color: grey;
    }


    @media only screen and (max-width: 950px) {
        .main-container{
            
            width: 90%;
        }
        
    }


</style>