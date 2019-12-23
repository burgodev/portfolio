<template>
  <v-app class="white margin-0">
    <!--  <v-app-bar
       app
       color="primary"
       dark
       flat
       dense
     >
       <div class="d-flex align-center">
         <v-img
           alt="Vuetify Logo"
           class="shrink mr-2"
           contain
           src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
           transition="scale-transition"
           width="40"
         />

         <v-img
           alt="Vuetify Name"
           class="shrink mt-1 hidden-sm-and-down"
           contain
           min-width="100"
           src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
           width="100"
         />
       </div>

       <v-spacer></v-spacer>

       <v-btn
         href="https://github.com/vuetifyjs/vuetify/releases/latest"
         target="_blank"
         text
       >
         <span class="mr-2">Latest Release</span>
         <v-icon>mdi-open-in-new</v-icon>
       </v-btn> -->


    <!--<v-row>
      <v-col sm="2" md="2" lg="2" xl="2" cols="2">
        <v-btn text> HOME </v-btn>
        <v-btn text> HOME </v-btn>
        <v-btn text> HOME </v-btn>
        <v-btn text> HOME </v-btn>
      </v-col>
    </v-row> -->
    <Toolbar/>

    <v-content class="padding-0 white">

      <Banner/>

      <Tools/>
      <RotatingCards class="mb-12"/>

      <Components class="mt-12"/>

    </v-content>


  </v-app>
</template>

<script>
  import HelloWorld from './components/HelloWorld';
  import Banner from './components/sections/Banner';
  import Tools from './components/sections/Tools';
  import RotatingCards from './components/sections/RotatingCards';
  import Components from './views/Components';
  import Toolbar from './components/general/Toolbar';

  export default {
    name: 'App',

    components: {
      Components,
      HelloWorld,
      Banner,
      Toolbar,
      Tools,
      RotatingCards
    },

    data: () => ({
      //
    }),

  };
</script>

<style>

  .v-application {
    font-family: "Roboto", sans-serif !important;
    line-height: 1.5;
  }


</style>
