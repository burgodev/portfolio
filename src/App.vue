<template>
  <v-app class="white margin-0 " style="height: 100vh;">
    <ToolbarKaizo/>
    <v-container fluid class="padding-0 white">

      <!-- KAIZO -->
      <KaizoLandingPage/>

      <!-- PORTFOLIO -->
        <!-- <PortfolioLandingPage/> -->

    </v-container>
    <!-- Footer -->


    <!--  <Footer></Footer>-->
  </v-app>
</template>

<script>
  import Toolbar from './components/general/Toolbar';
  import ToolbarKaizo from './components/general/ToolbarKaizo';
  import Footer from './components/general/Footer';
  import KaizoLandingPage from './views/kaizo/LandingPage';
  import PortfolioLandingPage from './views/portfolio/LandingPage';


  export default {
    name: 'App',
    components: {
      Toolbar,
      Footer,
      ToolbarKaizo,
      KaizoLandingPage,
      PortfolioLandingPage
    },

    data: () => ({
      //
    }),

    methods: {

      initialize() {

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

  .transformCenter {
    transform: translateX(38px);
  }


</style>
