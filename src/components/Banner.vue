<!--<template>
  <section class="banner background-color">

   <div class="wrapper run-animation">

        <v-row class="title-animation" style="    text-align: center;" >
          <v-col cols="12">
            <h1> FILIPE BURGONOVO</h1>
          </v-col>
          <v-col cols="12">
            <h2> FRONT-END DEVELOPER</h2>
          </v-col>
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
  /* To usando */
  .banner {
    height: 100%;
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
    background-position: center;
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

      transform: scale(1.08);
      background-image: linear-gradient(
        to right bottom,
        rgba(255, 0, 0, 0.1),
        rgba(255, 100, 100, 0.1)
      ),
      url("/../assets/banner01.jpg");
    }

    20% {
      opacity: 0.6;
      transform: scale(1.06);
      background-image: linear-gradient(
        to right bottom,
        rgba(0, 132, 255, 0.1),
        rgba(133, 210, 255, 0.1)
      ),
      url("../assets/banner02.jpg");
    }

    30% {
      opacity: 0.6;
      transform: scale(1.04);

      background-image: linear-gradient(
        to right bottom,
        rgba(255, 238, 0, 0.1),
        rgba(255, 227, 104, 0.1)
      ),
      url("../assets/banner03.png");
    }

    40% {
      opacity: 0.6;
      transform: scale(1.02);
      background-image: linear-gradient(
        to right bottom,
        rgba(153, 0, 255, 0.1),
        rgba(220, 176, 255, 0.1)
      ),
      url("../assets/banner04.jpg");
    }

    50% {
      opacity: 0.6;
      transform: scale(1);
      background-image: linear-gradient(
        to right bottom,
        rgba(255, 123, 0, 0.1),
        rgba(255, 152, 56, 0.1)
      ),
      url("../assets/banner05.jpg");
    }

    60% {
      opacity: 0.6;
      transform: scale(0.98);
      background-image: linear-gradient(
        to right bottom,
        rgba(0, 255, 0, 0.1),
        rgba(156, 156, 156, 0.1)
      ),
      url("../assets/banner06.jpg");
    }

    70% {
      opacity: 0.4;
      transform: scale(0.96);
    }

    80% {
      opacity: 0.2;
    }

    90% {
      opacity: 0;
      transform: scale(0.94);
    }

    100% {
      transform: scale(0.92);
      opacity: 0;
    }
  }

  .wrapper.run-animation {
    -webkit-animation: grow linear 3s forwards;
    animation: grow linear 3s 500ms forwards;
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
      transform: scale(0.95);


      /*-webkit-transform: scale(0.95);*/
      background-image: linear-gradient(to right bottom,
      rgba(255, 255, 255, 0.4),
      rgba(0, 0, 0, 1)),
      url("../assets/banner05.jpg");

    }

    50% {
      opacity: 0.3;


    }


    100% {
      transform: scale(1);
      opacity: 1;


      background-image: linear-gradient(to right bottom,
      rgba(255, 255, 255, 0.4),
      rgba(0, 0, 0, 1)),
      url("../assets/banner05.jpg");
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
-->