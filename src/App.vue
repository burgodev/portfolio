<template>
  <v-app class="margin-0 " style="height: 100vh;">
    <Toolbar v-if="$route.path === '/home'"/>

    <v-content class=" padding-0 ">
      <router-view/>
    </v-content>



  </v-app>
</template>

<script>
  import Toolbar from './components/general/ToolbarPortfolio2.0';
  import Footer from './components/general/FooterPortfolio2.0';


  export default {
    name: 'App',
    components: {
      Toolbar,
      Footer


    },

    data: () => ({
      //
    }),

    methods: {

      initialize() {


      }

    },

    mounted() {

      if (this.$route.path === '/') {
        this.$router.replace('/intro');
      }

      /* const cursor = document.querySelector('.cursor')

       console.log('cursor', cursor)

       document.addEventListener('mousemove', e =>{

         console.log(e.pageY, e.pageX)



         cursor.setAttribute("style", "top:" + (e.pageY - 10) +"px; left:"+(e.pageX-10)+'px;' )
         console.log('cursor', cursor)
       })

       document.addEventListener('click', () => {
         console.log('cliquei')
         cursor.classList.add("expand")

         setTimeout(() => {
           console.log('expandiu remove')
           cursor.classList.remove("expand")
         }, 500)

       })*/
    }


  };
</script>

<style scoped lang="scss">
  body {
    margin: 0;
    height: 100vh;

    background: rgb(34, 34, 34);
  }

  .cursor {
    width: 20px;
    height: 20px;
    border: 1px solid white;
    border-radius: 50%;
    position: absolute;
    transition-duration: 100ms;
    transition-timing-function: ease-out;
    animation: cursorAnim .5s infinite alternate;
  }

  .cursor::after {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    border: 8px solid gray;
    border-radius: 50%;
    opacity: .5;
    top: -8px;
    left: -8px;
    animation: cursorAnim2 .5s infinite alternate;
  }

  .expand {
    animation: cursorAnim3 .5s forwards;
    border: 1px solid red;
  }

  @keyframes cursorAnim {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(.7)
    }
  }

  @keyframes cursorAnim2 {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(.4)
    }
  }

  @keyframes cursorAnim3 {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(3);
    }

    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

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


  .theme--light.v-application[data-v-7ba5bd90] {
    background: transparent !important;
    color: rgba(0, 0, 0, 0.87);
  }


</style>
