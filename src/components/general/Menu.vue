<template>
  <div class="mt-5 ">
    <v-menu bottom>
      <template v-slot:activator="{ on }">
        <v-btn color="black" v-on="on" fab icon outlined >
          <v-icon color="black">menu</v-icon>
        </v-btn>
      </template>

      <v-list class="background-gradient">
        <v-list-item  v-for="(item, index) in menu" :key="index" @click="openMenuItem(index)">
          <v-list-item-title class="menu-title" color="white" style="">
            <v-icon color="white">{{item.icon}}</v-icon>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

  </div>
</template>

<script>

export default {
  name: "Menu",
  components:{
    Gallery,
    Delete,
    CardsGrid
  },

  data() {
    return {
      menu: [
        { title: "Confirmação", icon: "check" },
        { title: "Galeria", icon: "image" },
        { title: "Cards Grid", icon: "person" },
        { title: "Termos de Uso", icon: "person" }
      ],

      gallery: false,
      cardsGrid: false,
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
          this.showCardsGrid();
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

    showCardsGrid(){
      this.cardsGrid = true;
    },

    closeAll(){
      this.gallery = false;
      this.cardsGrid = false;
    },

  },

};
</script>

<style scoped >
</style>