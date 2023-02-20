<template>
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
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    . Quod tenetur ex itaque qui consequatur ab incidunt adipisci 
                    illo autem culpa? Similique repellendus ratione, aperiam maxime 
                    error neque tempora ex quia!</p>
            </div>
            <div class="technology-section">
                <h1>Technologies Studiedd</h1>
                  <div class="logos">
                    <img src="../assets/javascripticon.png" alt="">
                    <img src="../assets/python.png" alt="">
                    <img src="../assets/node_expresslogo.jpeg" alt="">

                </div>
            </div>
            <div class="button-container">
                <div class="project-button">
                    <a href="">My Projects</a>
                    
                </div>
                <div class="project-button">
                    <a href="">My Resume</a>
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
 img{
    height: 20px;
 }


  .main-container {
        display: flex;
        flex-direction: row;
        background-color: #ac179b;
        border-radius: 25px;

    } 

    .container-one{
        background-color: #58b533;
        padding: 2.5%;
        width: 40%;
        border-radius: 25px;

    }

    .container-two{
        background-color: purple;
        width: 60%;

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
        background-color: #ac179b;
        margin: 5px;
        padding: 5px;
        border-radius: 15px;
        
    }

    .project-button a{
        text-decoration: none;
        color: grey;
    }


</style>