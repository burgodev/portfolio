<template>
  <v-container fluid class="transparent" style="height: 100vh;">
    <!-- DESKTOP -->


    <section class="transparent" v-if="!mobile">
      <div class="screen">
        <div class="content">
          <h2 style="color: #ffcc00;" class="main-font">Javascript</h2>
        </div>
      </div>
      <div class="screen">
        <div class="content">
          <h2 class="main-font">HTML 5</h2>
        </div>
      </div>
      <div class="screen">
        <div class="content">
          <h2 style="color: #71b2de" class="main-font">CSS 3</h2>
        </div>
      </div>
    </section>

    <!-- MOBILE -->
    <!--  <v-content v-else>
        <section>
          <div class="screen" style="transform: rotateZ(0deg) !important;">
            <div class="content2">
              <h2>Giulio</h2>
              <p>Giulio faz parte da equipe bla bla bla bla bla bla...</p>
            </div>
          </div>
          <div class="screen" style="transform: rotateZ(0deg) !important;" >
            <div class="content2">
              <h2 style="color: #3490dc">Diogo</h2>
              <p>Diogo faz parte da equipe bla bla bla bla bla bla...</p>
            </div>
          </div>
        </section>

        <section>
          <div class="screen" style="transform: rotateZ(0deg) !important;">
            <div class="content2">
              <h2 style="color: #ffcc00">Nicolas</h2>
              <p>Nicolas faz parte da equipe bla bla bla bla bla bla...</p>
            </div>
          </div>
          <div class="screen" style="transform: rotateZ(0deg) !important;">
            <div class="content2">
              <h2 style="color: #8a00ff">Julio</h2>
              <p>Julio faz parte da equipe bla bla bla bla bla bla...</p>
            </div>
          </div>
        </section>

        <section>
          <div class="screen" style="transform: rotateZ(0deg) !important; ">
            <div class="content2">
              <h2 style="color: #ff8600">Filipe</h2>
              <p>Filipe faz parte da equipe bla bla bla bla bla bla...</p>
            </div>
          </div>

          <div class="screen" style="transform: rotateZ(0deg) !important;">
            <div class="content2">
              <h2 style="color: green">João</h2>
              <p>João faz parte da equipe bla bla bla bla bla bla...</p>
            </div>
          </div>
        </section>
      </v-content>-->
  </v-container>
</template>


<script>
  import {isMobile} from "mobile-device-detect";

  export default {
    name: "PresentationCards.vue",
    components: {},

    data: () => ({
      mobile: isMobile ? true : false
    }),

    methods: {
      initialize() {
      }
    },

    created() {
    }
  };
</script>

<style scoped>
   section {
    position: relative;
    height: 100vh;
    display: flex;
    background: #000;
  }

  section .screen {
    position: relative;
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    overflow: hidden;
    transition: 1s;
  }

  section:hover .screen {
    opacity: 0.4;
    background-color: black;
  }

  section .screen:hover {
    flex-grow: 3.5;
    opacity: 1;
    border-radius: 20px;

  }

  section .screen:nth-child(1) {
    background: url("../../assets/jss.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transform: rotateZ(5deg)  translateX(15px);
    transition: 2s;
    height: 400px;
    align-self: center;
    justify-self: center;
  }

  section .screen:nth-child(1):hover {
    transform: rotateZ(0deg) ;

  }

  section .screen:nth-child(2) {
    background: url("../../assets/html.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transform: rotateZ(5deg) translateY(75px) translateX(50px);
    transition: 2s;
    height: 400px;
    align-self: center;
    justify-self: center;


  }

  section .screen:nth-child(2):hover {
    transform: rotateZ(0deg) translateY(75px);



  }

  section .screen:nth-child(3) {

    background: url("../../assets/css.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transform: rotateZ(5deg) translateY(150px) translateX(50px);
    transition: 2s;
    height: 400px;
    align-self: center;
    justify-self: center;
  }

  section .screen:nth-child(3):hover {
    transform: rotateZ(0deg) translateY(150px);

  }


  section .screen .content2 /*Mobile*/
  {
    position: absolute;
    width: 250px;
    height: auto;
    background: transparent;

    box-sizing: border-box;
    transform: translateX(70%);
    transition: 0.5s;
    text-align: justify;
    border-radius: 20px;
  }

  section .screen:hover .content2 {
    transform: translateX(20px);
    transition-delay: 0.5s;
  }

  section .screen .content {
    position: absolute;
    width: 250px;
    height: auto;
    background: transparent;

    box-sizing: border-box;
    transform: translateX(100%);
    transition: 0.5s;
    text-align: justify;
    border-radius: 20px;
  }

  section .screen:hover .content {
    transform: translateX(-10%);
    transition-delay: 0.5s;
  }

  section .screen .content h2 {
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    font-size: 30px;
    color: #ed363a;
  }

  section .screen .content p {
    margin: 0;
    padding: 0;
  }
</style>

