<template>
  <section class="banner background-color">
    <div class="wrapper run-animation">


      <v-row class="title-animation" style="    align-self: center;    text-align: center;">
        <v-row>
          <v-col cols="12" >
            <h1 style="font-size: -webkit-xxx-large; "> FRONT-END DEVELOPER</h1>

          </v-col>
          <v-col cols="12" >
            <h2 style="     font-size: larger; "> FILIPE BURGONOVO</h2>
          </v-col>
        </v-row>
      </v-row>


    </div>
    <div class="images"></div>


  </section>
</template>

<script>
  import {isMobile} from "mobile-device-detect";


  export default {
    name: "Banner.vue",
    components: {},

    data: () => ({
      mobile: isMobile ? true : false,
      beginTypewriting: false,
    }),

    methods: {
      initialize() {

      },

      typewriter() {


        let h1 = document.querySelector('h1');
        let h2 = document.querySelector('h2');
        let stringH1 = h1.innerHTML.split('');
        let stringH2 = h2.innerHTML.split('');

        h1.innerHTML = '';
        stringH1.forEach((letter, i) => {
          setTimeout(() => h1.innerHTML += letter, 100 * i);
        });

        h2.innerHTML = '';

        setTimeout(() =>  stringH2.forEach((letter, i) => {
          setTimeout(() => h2.innerHTML += letter, 115 * i);
        }), 1500);



      }


    },

    created() {

      setTimeout(() => this.typewriter(), 3200);

    }
  }
  ;
</script>


<style scoped>
  /* To usando */


  h1 {

    text-align: center;

    font-family: 'Michroma', sans-serif;
    color: #fff;

  }

  h1::after {
    content: '|';
    opacity: 1;
    margin-left: 5px;
    display: inline-block;
    animation: blink .7s infinite;
  }

  h2 {

    text-align: center;

    font-family: 'Michroma', sans-serif;
    color: #fff;

  }

  h2::after {
    content: '|';
    opacity: 1;
    margin-left: 5px;
    display: inline-block;
    animation: blink .7s infinite;
  }

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }


  .banner {

    width: 100%;
    color: #fff !important;
  }

  .wrapper {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-position: top;
  }

  .images {
    pointer-events: none;
    height: 100vh;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0;
    position: absolute;
    z-index: 20;
    transform: scale(1.1);
    border-color: black;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    animation: imagesAnimation 4s forwards linear;
  }

  @keyframes imagesAnimation {
    10% {
      opacity: 0.6;

      transform: scale(1.4);
      background-image: linear-gradient(to right bottom, rgba(243, 232, 194, 0.6), rgba(0, 0, 0, .9)),
      url("/src/assets/banner01.jpg");
    }

    20% {
      opacity: 0.6;
      transform: scale(1.35);
      background-image: linear-gradient(to right bottom, rgba(243, 232, 194, 0.6), rgba(0, 0, 0, .9)),
      url("../../assets/banner02.jpg");
    }

    30% {
      opacity: 0.6;
      transform: scale(1.3);

      background-image: linear-gradient(to right bottom, rgba(243, 232, 194, 0.6), rgba(0, 0, 0, .9)),
      url("../../assets/banner03.png");
    }

    40% {
      opacity: 0.6;
      transform: scale(1.25);
      background-image: linear-gradient(to right bottom, rgba(243, 232, 194, 0.6), rgba(0, 0, 0, .9)),
      url("../../assets/banner04.jpg");
    }

    50% {
      opacity: 0.6;
      transform: scale(1.2);
      background-image: linear-gradient(to right bottom, rgba(243, 232, 194, 0.6), rgba(0, 0, 0, .9)),
      url("../../assets/banner05.jpg");
    }

    60% {
      opacity: 0.6;
      transform: scale(1.15);
      background-image: linear-gradient(to right bottom, rgba(243, 232, 194, 0.6), rgba(0, 0, 0, .9)),
      url("../../assets/banner06.jpg");
    }

    70% {
      opacity: 0.4;
      transform: scale(1.1);
    }

    80% {
      opacity: 0.2;
    }

    90% {
      opacity: 0;
      transform: scale(1.05);
    }

    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

  .wrapper.run-animation {
    -webkit-animation: grow linear 3s forwards;
    animation: grow linear 3s 1250ms forwards;
  }

  .title-animation {
    opacity: 0;
    -webkit-animation: title linear 10s forwards;
    animation: title linear 3s 3s forwards;
  }

  @keyframes title {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }

  }


  @keyframes grow {
    0% {
      opacity: 0;
      transform: scale(0.93);


      /*-webkit-transform: scale(0.95);*/
      background-image: linear-gradient(to right bottom, rgba(243, 232, 194, 0.6), rgba(0, 0, 0, .9)),
      url("../../assets/banner04.jpg");

    }

    50% {
      opacity: 0.3;


    }


    100% {
      transform: scale(1);
      opacity: 1;


      background-image: linear-gradient(to right bottom, rgba(243, 232, 194, 0.6), rgba(0, 0, 0, .9)),
      url("../../assets/banner04.jpg");
    }
  }


  @-webkit-keyframes grow {
    0% {
    }
    100% {
      -webkit-transform: scale(0.6);
      transform: scale(0.6);
      opacity: 1;
    }
  }


  /* Até aqui */


  .logo {
    cursor: pointer;
    text-align: center;
  }

  .logo:hover .restart {
    opacity: .8;
  }

  .restart {
    color: #fff;
    margin-top: 20px;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: -.08rem;
    transition: opacity 150ms linear;
  }


  .wesy {
    position: relative;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: -.2rem;
    font-size: 5rem;
    margin: .05rem .05rem .5rem;
    padding: 0 0.4rem;
    display: inline-block;
    z-index: 10;
    font-weight: 800;
    -webkit-transform: translateX(95px);
    transform: translateX(95px);
  }


  .lab {
    position: absolute;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: -.2rem;
    font-size: 5rem;
    margin: .05rem .05rem .5rem;
    padding: 0 0.4rem;
    display: inline-block;
    right: 35%;
    top: 37%;
    font-weight: 500;
    letter-spacing: -.3rem;
    animation: labAnimation 1200ms ease 3600ms forwards;
  }


  .wesy:before {
    z-index: -10;
    content: '';
    display: block;
    background-color: #000;
    border: solid rgba(255, 255, 255, 0.2) 1px;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .studios:after, .studios:before {
    content: '';
    display: block;
    height: 3px;
    position: absolute;
    background-color: #fff;
    display: block;
    left: 0.4rem;
    right: 0.4rem;
  }

  .studios:before {
    top: 0;
  }

  .studios:after {
    bottom: 0;
  }


  .wrapper.run-animation.wesy {
    -webkit-transform: translateX(95px);
    transform: translateX(95px);
    -webkit-animation: slide-out-X 750ms ease forwards;
    animation: slide-out-X 750ms ease forwards;
  }

  .wrapper.run-animation .studios {
    -webkit-transform: translateX(-95px);
    transform: translateX(-95px);
    color: transparent;
    -webkit-animation: slide-out-X 750ms ease forwards,
    show-text 300ms linear forwards 1500ms;
    animation: slide-out-X 750ms ease forwards,
    show-text 300ms linear forwards 1500ms;
  }

  .wrapper.run-animation .studios:before {
    -webkit-transform: translateY(2.9rem);
    transform: translateY(2.9rem);
    -webkit-animation: slide-out-Y 300ms ease forwards 750ms;
    animation: slide-out-Y 300ms ease forwards 750ms;
  }

  .wrapper.run-animation .studios:after {
    -webkit-transform: translateY(-2.9rem);
    transform: translateY(-2.9rem);
    -webkit-animation: slide-out-Y 300ms ease forwards 750ms;
    animation: slide-out-Y 300ms ease forwards 750ms;
  }

  .wrapper.run-animation .restart {
    opacity: 0;
    -webkit-animation: fade-down 1200ms ease 3600ms forwards;
    animation: fade-down 1200ms ease 3600ms forwards;
  }

  /*
  .wrapper.run-animation ~ .images {
    animation: flicker-images 8s linear backwards;
  } */


  @-webkit-keyframes slide-out-X {
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @keyframes slide-out-X {
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @-webkit-keyframes slide-out-Y {
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes slide-out-Y {
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @-webkit-keyframes show-text {
    100% {
      color: #fff;
    }
  }

  @keyframes show-text {
    100% {
      color: #fff;
    }
  }


  @-webkit-keyframes tighten-vinette {
    100% {
      background-size: 120%;
    }
  }

  @keyframes tighten-vinette {
    100% {
      background-size: 120%;
    }
  }

  @-webkit-keyframes fade-down {
    0% {
      -webkit-transform: translateY(-2rem);
      transform: translateY(-2rem);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 0.5;
    }
  }

  @keyframes fade-down {
    0% {
      -webkit-transform: translateY(-2rem);
      transform: translateY(-2rem);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 0.5;
    }
  }


  @keyframes labAnimation {

    100% {


      transform: translateX(98%);
    }
  }


</style>
