<template>
  <v-container fluid>
    <PresentationCards/>
    <RotatingCards/>
  </v-container>
</template>

<script>
  import {isMobile} from "mobile-device-detect";
  import PresentationCards from '../general/PresentationCards';
  import RotatingCards from '../general/RotatingCards';

  export default {
    name: "Tools.vue",
    components: {PresentationCards, RotatingCards},

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

