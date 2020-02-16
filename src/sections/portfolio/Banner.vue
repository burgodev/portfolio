<template>
  <section class="banner black padding-0">
    <div class="wrapper run-animation">
      <v-row class="title-animation">
        <v-col cols="12" style="padding: 12.5rem;">
          <v-row class="justify-center">

            <h1 style="font-size: -webkit-xxx-large; "> FRONT-END DEVELOPER</h1>
          </v-row>

          <v-row class="justify-center">
            <h2 style="     font-size: larger; "> FILIPE BURGONOVO</h2>
          </v-row>
        </v-col>

        <v-col cols="12" class="text-center toolbar-animation">
          <v-btn text @click="$vuetify.goTo('#tools', {duration: 750, offset: -100, easing: 'linear'})">
            <svg class="mouse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 130"
                 preserveAspectRatio="xMidYMid meet">
              <g fill="none" fill-rule="evenodd">
                <rect width="70" height="118" x="1.5" y="1.5" stroke="#FFF" stroke-width="3" rx="36"/>
                <circle class="scroll" cx="36.5" cy="31.5" r="4.5" fill="#FFF"/>
              </g>
            </svg>
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <div class="images"/>
    <CuttedEdgeLeft/>
  </section>
</template>

<script>
  import {isMobile} from "mobile-device-detect";
  import CuttedEdgeLeft from '../../components/cuttedEdges/CuttedEdgeLeft';

  export default {
    name: "Banner.vue",
    components: {CuttedEdgeLeft},

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

        setTimeout(() => stringH2.forEach((letter, i) => {
          setTimeout(() => h2.innerHTML += letter, 115 * i);
        }), 1500);
      }
    },

    created() {
      setTimeout(() => this.typewriter(), 3200);
    }
  };
</script>


<style lang="scss" scoped>
  /* To usando */


  /* MOUSE ANIMATION */
  $mouse-width: 2.5rem;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .mouse {
    max-width: $mouse-width;
    width: 100%;
    height: auto;
  }

  .scroll {
    animation-name: scroll;
    animation-duration: 1.5s;
    animation-timing-function: cubic-bezier(0.650, -0.550, 0.250, 1.500);
    animation-iteration-count: infinite;
    transform-origin: 50% 20.5px;
    will-change: transform, opacity;
    opacity: 1;
  }

  @keyframes scroll {

    0%, 20% {
      transform: translateY(0) scaleY(1);
    }

    100% {
      transform: translateY(36px) scaleY(2);
      opacity: 0;
    }

  }

  /* MOUSE ANIMATION END */


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
      opacity: 1;
      transform: scale(1.4);
      background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, .6)),
      url("/src/assets/banner01.jpg");

    }

    20% {

      transform: scale(1.35);
      background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, .6)),
      url("../../assets/banner02.jpg");
    }

    30% {

      transform: scale(1.3);

      background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, .6)),
      url("../../assets/banner03.png");
    }

    40% {

      transform: scale(1.25);
      background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, .6)),
      url("../../assets/banner04.jpg");


    }

    50% {
      opacity: 0.6;
      transform: scale(1.2);
      background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .5)),
      url("../../assets/banner05.jpg");
    }

    60% {
      opacity: 0.6;
      transform: scale(1.15);
      background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, .4)),
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
    -webkit-animation: grow linear 2.5s 2s forwards;
    animation: grow linear 2.5s 2s forwards;
  }

  .title-animation {
    opacity: 0;
    -webkit-animation: fade-in linear 3s 3s forwards;
    animation: fade-in linear 3s 3s forwards;
  }


  @keyframes grow {
    0% {
      opacity: 0;
      transform: scale(0.9);


      /*-webkit-transform: scale(0.95);*/
      background-image: linear-gradient(to right bottom, rgba(243, 232, 194, 0.6), rgba(0, 0, 0, .9)),
      url("../../assets/banner04.jpg");

    }

    50% {


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



</style>
