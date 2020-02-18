<template>
  <v-footer class="whitesmoke justify-center">
    <v-card>
      <v-row style="margin-top: 65px" class="no-gutters white">

        <v-col class="text-center mt-5" cols="3" style="z-index: 99;">
          <v-icon x-large color="black" class="mr-2"> phone</v-icon>
          <span class="black--text align-center main-font"><strong>{{phone}}</strong> </span>
        </v-col>

        <v-col class="text-center" cols="3" style="margin-left: 35px; z-index: 99;">
          <v-icon x-large color="black" class="mr-2"> mail</v-icon>
          <span class="black--text align-center main-font"> <strong>{{email}} </strong></span>
        </v-col>



        <v-col cols="1" class="align-icon" style="z-index: 99;">
          <a target="_blank"
             href="https://github.com">
            <v-img height="65" width="95" class="ml-3" :src="require('../../assets/github.jpg')"/>
          </a>
        </v-col>




        <v-col cols="1" class="align-icon mb-5" style="z-index: 99;">
          <a target="_blank"
             href="https://linkedin.com">
            <v-img height="30" width="150" class="ml-2"
                   :src="require('../../assets/linkedin.jpg')"/>
          </a>
        </v-col>

      </v-row>


    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>

</style>
