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

    <v-container fluid class="padding-0 white">
      <Banner id="banner"/>
      <Tools id="tools"/>
      <Components id="components"/>

      <Vision id="vision"/>



    </v-container>



    <Footer class="mt-12"></Footer>

  </v-app>
</template>

<script>
  import HelloWorld from './components/HelloWorld';
  import Banner from './components/sections/Banner';
  import Tools from './components/sections/Tools';
  import Vision from './components/sections/Vision';
  import RotatingCards from './components/general/RotatingCards';
  import Components from './views/Components';
  import Toolbar from './components/general/Toolbar';
  import Footer from './components/general/Footer';
  import RotatingMenu from './components/general/RotatingMenu';


  export default {
    name: 'App',

    components: {
      Footer,
      Components,
      HelloWorld,
      Banner,
      Toolbar,
      Tools,
      RotatingCards,
      Footer,
      Vision,
      RotatingMenu

    },

    data: () => ({

      //
    }),

    methods:{
      openMenu(){
        this.$refs.Menu.open();
      },

      initialize(){

      }

    }

  };
</script>

<style>

  .v-application {
    font-family: "Roboto", sans-serif !important;
    line-height: 1.5;
  }


</style>
