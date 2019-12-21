<template>
  <v-container fluid class="height-100 background-color">
      <Menu/>


    <Delete ref="Delete"/>
  </v-container>
</template>

<script>
import Delete from "../components/dialogs/Delete.vue";
import Menu from "../components/Menu.vue";
export default {
  name: "Components",
  components:{
      Delete,
      Menu
  },


  data: () => ({

  }),

  methods: {
    openDelete() {
      this.$refs.Delete.open('Excluir Anúncio', 'Você tem certeza que deseja excluir este anúncio?');
    }
  }
};
</script>

<style scoped>
</style>