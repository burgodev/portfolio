<template>

  <!--  <div class="wrap-banner"> -->

  <!--  <vue-particles
      color="#7aafff"
      :particleOpacity="0.7"
      :particlesNumber="150"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      style="z-index: 1;"
      class="particles"
    >


    </vue-particles>
-->


  <!--</div> -->


  <section>
    <div class="wrap-banner">


      <div class="wrapper run-animation">
        <v-row class="title-animation">
          <v-col cols="12" style="padding: 12.5rem; ">
            <v-row class="justify-center">

              <h1 style="font-size: 3vw; top: 40vh; "> FRONT-END DEVELOPER</h1>

            </v-row>

            <v-row class="justify-center">
              <h2 style="     font-size: 1.5vw; top: 50vh; "> FILIPE BURGONOVO</h2>
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
    </div>
  </section>
  <!--  <vue-particles
      color="#7aafff"
      :particleOpacity=".2"
      :particlesNumber="75"
      shapeType="circle"
      :particleSize="2.5"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      style="z-index: 1;"
      class="particles"
    >
    </vue-particles>


-->


</template>


<script>
  import RotatingCards from '../../components/cards/RotatingCards'

  export default {
    components: {
      RotatingCards
    },
    name: "Home.vue",
    data: () => ({}),

    methods: {
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
      },

    },

    created() {
      setTimeout(() => this.typewriter(), 2000);
    }


  }

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



  /*  h1 {

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
  }*/


  .wrapper {
    height: 100vh;
    width: 100vw;
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
    -webkit-animation: grow linear 2.5s forwards;
    animation: grow linear 2.5s forwards;
  }

  .title-animation {
    opacity: 0;
    -webkit-animation: fade-in linear 3s 1.8s forwards;
    animation: fade-in linear 3s 1.8s forwards;
  }


  @keyframes grow {
    0% {
      opacity: 0;
      transform: scale(0.9);


      /*-webkit-transform: scale(0.95);*/
      background-image: linear-gradient(to right bottom, rgba(243, 232, 194, 0), rgba(0, 0, 0, 0)),
      url("../../assets/banner01.jpg");

    }


    100% {
      transform: scale(1);
      opacity: 1;


      background-image: linear-gradient(to right bottom, rgba(243, 232, 194, 0), rgba(0, 0, 0, 0)),
      url("../../assets/banner01.jpg");
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


<style scoped>
  .particles {


    background-color: transparent;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  .particles2 {


    background-color: transparent;
    background-size: cover;
    position: absolute;
    top: 0vh;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  .wrap-banner {
    position: relative;
    -ms-flex-align: center;
    -webkit-box-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

 /* h1 {

    text-align: center;

    font-family: 'Michroma', sans-serif;
    color: #fff;

  }

*/
  h1 {

    text-align: center;
    position: absolute;
    font-family: 'Michroma', Arial, sans-serif;
    font-size: calc(20px + 5vw);
    font-weight: 700;
    color: white;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-shadow: 0 0 0.15em lightgrey;
    user-select: none;
    white-space: nowrap;
    filter: blur(0.007em);
    animation: shake 2.5s linear infinite;
  }

  h1 span {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    -webkit-clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);
    clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);
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
    position: absolute;
    font-family: 'Michroma', Arial, sans-serif;
    font-size: calc(20px + 5vw);
    font-weight: 700;
    color: white;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-shadow: 0 0 0.15em lightgrey;
    user-select: none;
    white-space: nowrap;
    filter: blur(0.007em);
    animation: shake 2.5s linear infinite;
  }

  h2 span {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    -webkit-clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);
    clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);
  }

  h2::after {
    content: '|';
    opacity: 1;
    margin-left: 5px;
    display: inline-block;
    animation: blink .7s infinite;
  }


  @keyframes shake {
    5%, 15%, 25%, 35%, 55%, 65%, 75%, 95% {
      filter: blur(0.018em);
      transform: translateY(0.018em) rotate(0deg);
    }

    10%, 30%, 40%, 50%, 70%, 80%, 90% {
      filter: blur(0.01em);
      transform: translateY(-0.018em) rotate(0deg);
    }

    20%, 60% {
      filter: blur(0.03em);
      transform: translate(-0.018em, 0.018em) rotate(0deg);
    }

    45%, 85% {
      filter: blur(0.03em);
      transform: translate(0.018em, -0.018em) rotate(0deg);
    }

    100% {
      filter: blur(0.007em);
      transform: translate(0) rotate(-0.5deg);
    }
  }



  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #000;
    overflow: hidden;
  }

  /*
    h1 {
      top: 40vh;
      position: absolute;
      font-family: 'Montserrat', Arial, sans-serif;
      font-size: calc(20px + 5vw);
      font-weight: 700;
      color: black;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      text-shadow: 0 0 0.15em lightgrey;
      user-select: none;
      white-space: nowrap;
      filter: blur(0.007em);
      animation: shake 2.5s linear infinite;
    }

    h1 span {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(-50%, -50%);
      -webkit-clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);
      clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);
    }

    h1::before,
    h1::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
    }

    h1::before {
      animation: crack1 2.5s linear forwards;
      -webkit-clip-path: polygon(0% 0%, 10% 0%, 55% 100%, 0% 100%);
      clip-path: polygon(0% 0%, 10% 0%, 55% 100%, 0% 100%);
    }

    h1::after {
      animation: crack2 2.5s linear forwards;
      -webkit-clip-path: polygon(44% 0%, 100% 0%, 100% 100%, 70% 100%);
      clip-path: polygon(44% 0%, 100% 0%, 100% 100%, 70% 100%);
    }*/

  @keyframes shake {
    5%, 15%, 25%, 35%, 55%, 65%, 75%, 95% {
      filter: blur(0.018em);
      transform: translateY(0.018em) rotate(0deg);
    }

    10%, 30%, 40%, 50%, 70%, 80%, 90% {
      filter: blur(0.01em);
      transform: translateY(-0.018em) rotate(0deg);
    }

    20%, 60% {
      filter: blur(0.03em);
      transform: translate(-0.018em, 0.018em) rotate(0deg);
    }

    45%, 85% {
      filter: blur(0.03em);
      transform: translate(0.018em, -0.018em) rotate(0deg);
    }

    100% {
      filter: blur(0.007em);
      transform: translate(0) rotate(-0.5deg);
    }
  }

  @keyframes crack1 {
    0%, 95% {
      transform: translate(-50%, -50%);
    }

    100% {
      transform: translate(-51%, -48%);
    }
  }

  @keyframes crack2 {
    0%, 95% {
      transform: translate(-50%, -50%);
    }

    100% {
      transform: translate(-49%, -53%);
    }
  }


  a {


    font-family: 'Michroma', sans-serif;
    color: white !important;
    font-size: 50px;


  }
</style>
