<template>
  <v-footer
    dark
    padless
    color="#aeddff"
    class="white"

    height="200px"

  >
    <v-card
      flat
      tile
      class="white--text text-center transparent"
    >




    <!--  <v-card-text class="black--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut
        risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
        Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices,
        cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text> -->

      <v-divider></v-divider>

    <!--  <v-card-text class="black--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text> -->
    </v-card>
  </v-footer>


</template>

<script>
  export default {
    name: "Footer.vue",

    data: () => ({}),
  }
</script>

<style scoped>

  .margin-top-55 {
    margin-top: 55px;
  }

  .footerBack{
    background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, .4));
    -webkit-background-size: cover;
    background-size: cover;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    width: -webkit-fill-available;


  }
</style>