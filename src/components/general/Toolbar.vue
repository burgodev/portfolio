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
    <v-row class="align-baseline" no-gutters>
      <v-col cols="1" class="mr-2 ">

        <v-img
          href="https://vuetifyjs.com/pt-BR/"
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="50"
          height="50"
        />
      </v-col>
      <v-col cols="2 mt-1">
        <v-img
          href="https://vuetifyjs.com/pt-BR/"
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </v-col>

    </v-row>
    <!--  </div> --->


    <v-row class="justify-end">
   <!--   <v-btn
        text

      >
        <v-icon>home</v-icon>
        <span class="ml-2">Home</span>
      </v-btn> -->

      <v-btn
        text

        @click="$vuetify.goTo('#tools', options)">
        <v-icon>build</v-icon>
        <span class="ml-2">Ferramentas</span>
      </v-btn>


      <v-btn
        text

        @click="$vuetify.goTo('#components', options)"
      >
        <v-icon>apps</v-icon>
        <span class="ml-2">Componentes</span>
      </v-btn>

      <v-btn
        @click="$vuetify.goTo('#mindset', options)"
        text
      >
        <v-icon>visibility</v-icon>
        <span class="ml-2">Mindset</span>
      </v-btn>


      <v-btn
        @click="$vuetify.goTo('#contact', options)"
        text
      >
        <v-icon>mail</v-icon>
        <span class="ml-2">Contato</span>
      </v-btn>
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

</style>


