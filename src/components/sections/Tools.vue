<template>
  <v-container fluid style="background-image: url('../../assets/paper1.jpg');">

    <!-- DESKTOP -->


    <v-col cols="12" class="text-center">
      <h1 style="font-size: -webkit-xxx-large;  font-family: Michroma;"> Ferramentas</h1>
    </v-col>
    <section style="background-color: white;" v-if="!mobile">

      <div class="screen">
        <div class="content">
          <h2 style="color: #ffcc00">Javascript</h2>

        </div>
      </div>
      <div class="screen">
        <div class="content">
          <h2>HTML 5</h2>

        </div>
      </div>
      <div class="screen">
        <div class="content">
          <h2 style="color: #71b2de">CSS 3</h2>

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
    name: "Tools.vue",
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
  h2 {
    font-family: "Bangers";
  }

  p {
    font-family: "Bangers";
  }

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
    opacity: 0.2;
    background-color: black;
  }

  section .screen:hover {
    flex-grow: 3;
    opacity: 1;
    border-radius: 20px;
  }

  section .screen:nth-child(1) {


    background: url("../../assets/jss.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transform: rotateZ(5deg);
    transition: 2s;

    height: 400px;
    align-self: center;
    justify-self: center;
  }

  section .screen:nth-child(1):hover {
    transform: rotateZ(0deg);
  }

  section .screen:nth-child(2) {
    background: url("../../assets/html.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transform: rotateZ(5deg);
    transition: 2s;
    height: 400px;
    align-self: center;
    justify-self: center;


  }

  section .screen:nth-child(2):hover {
    transform: rotateZ(0deg);


  }

  section .screen:nth-child(3) {

    background: url("../../assets/csss.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transform: rotateZ(5deg);
    transition: 2s;
    height: 400px;
    align-self: center;
    justify-self: center;
  }

  section .screen:nth-child(3):hover {
    transform: rotateZ(0deg);
  }

  section .screen:nth-child(4) {
    background: url("https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transform: rotateZ(5deg);
    transition: 2s;

  }

  section .screen:nth-child(4):hover {
    transform: rotateZ(0deg);
  }

  section .screen:nth-child(5) {
    background: url("../../assets/vue.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transform: rotateZ(5deg);
    transition: 2s;


  }

  section .screen:nth-child(5):hover {
    transform: rotateZ(0deg);
  }

  section .screen:nth-child(6) {
    background: url("../../assets/POST14.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transform: rotateZ(5deg);
    transition: 2s;
  }

  section .screen:nth-child(6):hover {
    transform: rotateZ(0deg);
  }
/*
  section:nth-child(2) .screen:nth-child(1) {
    background: url("../../assets/POST08.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transform: rotateZ(5deg);
    transition: 2s;
  }

  section:nth-child(2) .screen:nth-child(2) {
    background: url("../../assets/POST10.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transform: rotateZ(5deg);
    transition: 2s;
  }

  section:nth-child(3) .screen:nth-child(1) {
    background: url("../../assets/POST12.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transform: rotateZ(5deg);
    transition: 2s;
  }

  section:nth-child(3) .screen:nth-child(2) {
    background: url("../../assets/POST14.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transform: rotateZ(5deg);
    transition: 2s;
  }
*/
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
    transform: translateX(90px);
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
    transform: translateX(0);
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

