<template>
  <v-container fluid class="translateTop padding-0 ">
    <v-col cols="12" class="text-center">
      <h1 style="font-size: -webkit-xxx-large;" class="mainFont"> Ferramentas</h1>
    </v-col>
    <PresentationCards/>
    <RotatingCards class="padding-bottom"/>
    <CuttedEdgeRight />
  </v-container>
</template>

<script>
  import {isMobile} from "mobile-device-detect";
  import PresentationCards from '../components/general/PresentationCards';
  import RotatingCards from '../components/general/RotatingCards';
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




</style>

