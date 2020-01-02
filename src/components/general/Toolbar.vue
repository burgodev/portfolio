<template>
  <v-app-bar
    app
    class="transparent toolbar-animation"
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
      <v-btn
        text
        rounded
      >
        <v-icon>home</v-icon>
        <span class="ml-2">Home</span>
      </v-btn>

      <v-btn
        text
        rounded
        @click="$vuetify.goTo('#tools', options)">
        <v-icon>build</v-icon>
        <span class="ml-2">Ferramentas</span>
      </v-btn>


      <v-btn
        text
        rounded
        @click="$vuetify.goTo('#components', options)"
      >
        <v-icon>apps</v-icon>
        <span class="ml-2">Componentes</span>
      </v-btn>

      <v-btn
        @click="$vuetify.goTo('#vision', options)"
        text
        rounded
      >
        <v-icon>visibility</v-icon>
        <span class="ml-2">Visão</span>
      </v-btn>    </v-row>

  </v-app-bar>

</template>

<script>
  export default {
    name: "Toolbar.vue",
    data: () => {
      return {
        options: {
          duration: 750,
          offset: -100,
          easing: 'linear'
        }
      }
    }
  }
</script>

<style scoped>

</style>