<template>
  <v-footer
    dark
    padless

  >
    <v-card
      flat
      tile
      style="background-color: #81755b;"
      class="white--text text-center"
    >
      <v-card-text>
        <v-row class="justify-center">
          <v-col sm="2" md="2" lg="2" xl="2" cols="2" style="text-align: -webkit-right;">
            <a target="_blank" href="https://www.instagram.com/uniforenses/">
              <v-img
                height="26"
                width="26"
                :src="require('../../../assets/instagram.png')"
              ></v-img>
            </a>
          </v-col>

          <v-col sm="2" md="2" lg="2" xl="2" cols="2">
            <a target="_blank" href="https://www.facebook.com/uniforenses/">
              <v-img
                height="26"
                width="26"
                :src="require('../../../assets/facebook.png')"
              ></v-img>
            </a>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut
        risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
        Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices,
        cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Kaizo</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: "Footer.vue"
  }
</script>

<style scoped>

</style>