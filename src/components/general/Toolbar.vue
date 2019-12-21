<template>
  <v-app-bar
    app
    style="    background-color: transparent;
    border-color: transparent;
    color: transparent;"
    dark
    flat

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

      text
      rounded
    >
      <v-icon>home</v-icon>
      <span class="ml-2">Home</span>
    </v-btn>

    <v-btn

      text
      rounded
    >
      <v-icon>home</v-icon>
      <span class="ml-2">Componentes</span>
    </v-btn>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      text
      rounded
    >
      <v-icon>home</v-icon>
      <span class="ml-2">Ferramentas</span>
    </v-btn>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      text
      rounded
    >
      <v-icon>home</v-icon>
      <span class="ml-2">Experiência</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
  export default {
    name: "Toolbar.vue"
  }
</script>

<style scoped>

</style>