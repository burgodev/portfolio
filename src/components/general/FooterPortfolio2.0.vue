<template>
  <v-footer class="white justify-center mt-12">
    <v-row class="no-gutters white justify-center">
      <v-col cols="12" class="mt-3" style="z-index: 99;">
        <div style="width: 95px;" class="mx-auto">
          <a target="_blank"
             href="https://github.com">
            <v-img height="65" width="95" class="mx-auto" :src="require('../../assets/github.jpg')"/>
          </a>
        </div>
      </v-col>

      <v-col cols="2" style="z-index: 99;">
        <div style="width: 150px;" class="mx-auto">
          <a target="_blank"
             href="https://linkedin.com">
            <v-img height="30" width="150" class="mx-auto"
                   :src="require('../../assets/linkedin.jpg')"/>
          </a>
        </div>
      </v-col>

      <v-col class="text-center mt-4" cols="12" style="z-index: 99;">
        <v-icon x-large color="black" class="mr-2"> phone</v-icon>
        <span class="black--text align-center main-font " style="margin-top: 50px !important;"><strong>{{phone}}</strong> </span>
      </v-col>

      <v-col class="text-center mt-1" cols="12" style=" z-index: 99;">
        <v-icon x-large color="black" class="mr-2"> mail</v-icon>
        <span class="black--text align-center main-font mt-1" > <strong>{{email}} </strong></span>
      </v-col>


      <v-col class="text-center mt-5 mb-3" cols="12" style=" z-index: 99;">
        <span> {{ new Date().getFullYear() }} — <strong>BurgoDev</strong></span>
      </v-col>

    </v-row>
  </v-footer>
</template>

<script>
  export default {
    name: "FooterPortfolio2.0",

    data: () => ({
      phone: '(47) 9 9705-5115',
      email: 'burgodev@gmail.com',

    }),


  }
</script>

<style scoped>

</style>
