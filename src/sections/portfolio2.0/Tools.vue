<template>
  <section fluid class="white full-viewport "  >
    <v-col cols="12" class="text-center" >
      <h1 style="font-size: -webkit-xxx-large; color:black;" class="main-font"> Ferramentas</h1>
    </v-col>
    <PresentationCards/>
    <RotatingCards/>
  </section>
</template>

<script>
  import {isMobile} from "mobile-device-detect";
  import PresentationCards from '../../components/cards/PresentationCards';
  import RotatingCards from '../../components/cards/RotatingCards';
  import CuttedEdgeRight from '../../components/cuttedEdges/CuttedEdgeRight';


  export default {
    name: "Tools.vue",
    components: {PresentationCards, RotatingCards, CuttedEdgeRight},

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


