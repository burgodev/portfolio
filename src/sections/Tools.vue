<template>
  <v-container fluid class="transparent " style="    height: 190vh" >
    <v-col cols="12" class="text-center translate-top-title " >
      <h1 style="font-size: -webkit-xxx-large;" class="mainFont"> Ferramentas</h1>
    </v-col>
    <PresentationCards class="translate-top-presentation-cards"/>
    <RotatingCards class=" translate-top-rotating-cards "/>
  </v-container>
</template>

<script>
  import {isMobile} from "mobile-device-detect";
  import PresentationCards from '../components/cards/PresentationCards';
  import RotatingCards from '../components/cards/RotatingCards';
  import CuttedEdgeRight from '../components/cuttedEdges/CuttedEdgeRight';


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

<style scoped>
  .translate-top-presentation-cards{
    transform: translateY(-400px);
  }

  .translate-top-rotating-cards{
    transform: translateY(-290px);
  }






</style>

