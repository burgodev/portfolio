<template>
  <v-app-bar
    app
    class="transparent toolbar-animation"
    style="z-index: 999;"
    dark
    flat
    absolute
  >
    <!--  <div class="d-flex align-center"> -->
    <v-row class="align-baseline" >

      <v-col cols="2" class="pad-cols ml-5">

        <button
          @click="teste()"
          type="button">
          <v-icon>person</v-icon>
          <span class="ml-2" style="margin-top: 3px;">Sobre</span>
        </button>
      </v-col>
      <v-col cols="3" class="pad-cols">

        <button
          @click="teste()"
          type="button">
          <v-icon>build</v-icon>
          <span class="ml-2" style="margin-top: 3px;">Experiência</span>
        </button>
      </v-col>
      <v-col cols="2" class="pad-cols">

        <button
          @click="teste()"
          type="button">
          <v-icon>mail</v-icon>
          <span class="ml-2" style="margin-top: 3px;">Contato</span>
        </button>
      </v-col>

    </v-row>
    <!--  </div> --->


    <v-row class="justify-center">
<!--
      <v-col cols="2" class="pad-cols">

        <button
          @click="teste()"
          type="button">
          <v-icon>person</v-icon>
          <span class="ml-2" style="margin-top: 3px;">Sobre</span>
        </button>
      </v-col>
      <v-col cols="3" class="pad-cols">

        <button
          @click="teste()"
          type="button">
          <v-icon>build</v-icon>
          <span class="ml-2" style="margin-top: 3px;">Experiência</span>
        </button>
      </v-col>
      <v-col cols="2" class="pad-cols">

        <button
          @click="teste()"
          type="button">
          <v-icon>mail</v-icon>
          <span class="ml-2" style="margin-top: 3px;">Contato</span>
        </button>
      </v-col> -->
    </v-row>


  </v-app-bar>

</template>

<script>
  export default {
    name: "Toolbar.vue",
    data: () => {
      return {
        options: {
          duration: 750,
          offset: 335,
          easing: 'linear'
        }
      }
    }
  }
</script>

<style scoped>

  .v-icon{
    filter: blur(0.007em);
    animation: shake 2.5s linear infinite;

  }
  span {

    text-align: center;
    position: absolute;
    font-family: 'Michroma', Arial, sans-serif;
    font-size: calc(5px + .6vw);
    font-weight: 700;
    color: white;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-shadow: 0 0 0.15em lightgrey;
    user-select: none;
    white-space: nowrap;
    filter: blur(0.007em);
    animation: shake 2.5s linear infinite;
  }


  @keyframes shake {
    5%, 15%, 25%, 35%, 55%, 65%, 75%, 95% {
      filter: blur(0.018em);
      transform: translateY(0.018em) rotate(0deg);
    }

    10%, 30%, 40%, 50%, 70%, 80%, 90% {
      filter: blur(0.01em);
      transform: translateY(-0.018em) rotate(0deg);
    }

    20%, 60% {
      filter: blur(0.03em);
      transform: translate(-0.018em, 0.018em) rotate(0deg);
    }

    45%, 85% {
      filter: blur(0.03em);
      transform: translate(0.018em, -0.018em) rotate(0deg);
    }

    100% {
      filter: blur(0.007em);
      transform: translate(0) rotate(-0.5deg);
    }
  }

  .pad-cols{
    padding-left: 0;
    padding-right: 0;
  }
</style>


