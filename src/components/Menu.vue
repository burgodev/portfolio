<template>
  <div>
    <v-menu bottom>
      <template v-slot:activator="{ on }">
        <v-btn color="white" v-on="on" fab icon outlined >
          <v-icon color="white">menu</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in menu" :key="index" @click="openMenuItem(index)">
          <v-list-item-title>
            <v-icon>{{item.icon}}</v-icon>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <Delete ref="Delete" />
    <Gallery v-if="gallery"/>
  </div>
</template>

<script>
  import Delete from "./dialogs/Delete";
  import Gallery from "./Gallery";
export default {
  name: "Menu",
  components:{
    Gallery,
    Delete
  },

  data() {
    return {
      menu: [
        { title: "Delete", icon: "delete" },
        { title: "Perfil", icon: "person" },
        { title: "Anuncie", icon: "" },
        { title: "Termos de Uso", icon: "" }
      ],

      gallery: false,
    };
  },

  methods: {
    openMenuItem(index) {
      this.closeAll();

      switch (index) {
        case 0:
          this.openDelete();
          break;
        case 1:
          this.showGallery();
          break;
        case 2:
          break;
        case 3:
          break;
      }
    },


    openDelete() {
      this.$refs.Delete.open('Excluir Anúncio', 'Você tem certeza que deseja excluir este anúncio?');
    },

    showGallery(){
      this.gallery = true;
    },

    closeAll(){
      this.gallery = false;
    },

  },

};
</script>

<style scoped >
</style>