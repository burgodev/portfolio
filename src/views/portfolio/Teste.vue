<template>
  <!--<section class="black" style="height: 100vh;">
    <a href="#" class="glitch" data-glitch="INICIALIZAR">INICIALIZAR</a>
  </section> -->


  <!--      <h1 data-text="black mirror"><span>black mirror</span></h1> -->


  <!--  <v-container>
      <v-row class="justify-center" style="height: 100vh; width: 100vw;">
        <v-col cols="4">
            <h1 data-text="black mirror"><span>black mirror</span></h1> -->

 <div class="wrap-banner">

    <vue-particles
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
     <h1  class="pointer" style="z-index: 99; color: white"> INICIALIZAR </h1>




   </div>


</template>


<script>
  import RotatingCards from '../../components/cards/RotatingCards'

  export default {
    components: {
      RotatingCards
    },
    name: "Teste.vue",


  }

</script>

<style lang="scss">
  body {
    background-color: #232323;
  }

  .glitch {
    font: {
      size: 8.125em;
      family: 'Raleway', sans-serif;
      weight: 700;
    }
    text-decoration: none;
    text-transform: uppercase;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    color: #fff;
    letter-spacing: 5px;

    &:before, &:after {
      display: block;
      content: attr(data-glitch);
      text-transform: uppercase;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: .8;
    }

    &:after {
      color: #f0f;
      z-index: -2;
    }

    &:before {
      color: #0ff;
      z-index: -1;
    }

    &:hover {
      &:before {
        animation: glitch .3s cubic-bezier(.25, .46, .45, .94) both 5
      }

      &:after {
        animation: glitch .3s cubic-bezier(.25, .46, .45, .94) reverse both 5
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .glitch {
      font-size: 3em;
    }
  }


  @keyframes glitch {
    0% {
      transform: translate(0)
    }
    20% {
      transform: translate(-5px, 5px)
    }
    40% {
      transform: translate(-5px, -5px)
    }
    60% {
      transform: translate(5px, 5px)
    }
    80% {
      transform: translate(5px, -5px)
    }
    to {
      transform: translate(0)
    }
  }
</style>


<style scoped>
  .particles {
    background-image: url('../../assets/tech.jpg');

    background-color: transparent;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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


  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #000;
    overflow: hidden;
  }

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

  /* h1::before,
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


*/


</style>
