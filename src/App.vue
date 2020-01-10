<template>
  <v-app class="white margin-0 " style="height: 100vh;">
    <Toolbar/>
    <v-container fluid class="padding-0 white" >
      <Banner id="banner"/>
      <Tools id="tools"/>
      <Components id="components"/>
      <Mindset id="mindset"/>
      <Contact id="contact"></Contact>
    </v-container>
    <!-- Footer -->


    <Footer></Footer>
  </v-app>
</template>

<script>
  import HelloWorld from './components/HelloWorld';
  import Banner from './sections/Banner';
  import Tools from './sections/Tools';
  import Mindset from './sections/Mindset';
  import RotatingCards from './components/cards/RotatingCards';
  import Components from './sections/Components';
  import Toolbar from './components/general/Toolbar';
  import Footer from './components/general/Footer';
  import Contact from './sections/Contact';
  import RotatingMenu from './components/general/RotatingMenu';


  export default {
    name: 'App',
    components: {
      Contact,
      Components,
      HelloWorld,
      Banner,
      Toolbar,
      Tools,
      RotatingCards,
       Mindset,
      RotatingMenu,
      Footer
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
