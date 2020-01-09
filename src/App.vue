<template>
  <v-app class="white margin-0 " style="height: 100vh;">
    <Toolbar/>
    <v-container fluid class="padding-0 white" >
      <Banner id="banner"/>
      <Tools id="tools"/>
      <Components id="components"/>
      <Vision id="mindset"/>

    </v-container>
    <Footer></Footer>
  </v-app>
</template>

<script>
  import HelloWorld from './components/HelloWorld';
  import Banner from './sections/Banner';
  import Tools from './sections/Tools';
  import Vision from './sections/Mindset';
  import CuttedEdgeRight from './components/cuttedEdges/CuttedEdgeRight';
  import CuttedEdgeLeft from './components/cuttedEdges/CuttedEdgeLeft';
  import RotatingCards from './components/cards/RotatingCards';
  import Components from './sections/Components';
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
      RotatingMenu,
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

  .theme--light.v-application {
    background: white !important;
    color: rgba(0, 0, 0, 0.87);
  }

  .transformCenter{
    transform: translateX(38px);
  }


</style>
