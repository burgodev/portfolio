<template>
  <section class="transparent padding-0 ">
    <CuttedEdgeRight />
    <v-row class="align-center translate-top-title-components ">
      <v-col cols="12" class="text-center">
        <h1 style="font-size: -webkit-xxx-large;  font-family: Michroma;"> Biblioteca de Componentes</h1>
      </v-col>
    </v-row>

    <v-row no-gutters class="translate-top-components">
      <v-col cols="1" class="text-center">
        <v-menu bottom>
          <template v-slot:activator="{ on }">
            <v-btn color="black" v-on="on" fab icon outlined>
              <v-icon color="black">menu</v-icon>
            </v-btn>
          </template>

          <v-list class="background-gradient">
            <v-list-item v-for="(item, index) in menu" :key="index" @click="openMenuItem(index)">
              <v-list-item-title class="menu-title" color="white" style="">
                <v-icon color="white">{{item.icon}}</v-icon>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-col v-if="clickHere" class="align-center blink" cols="3">
        <v-icon>arrow_back_ios</v-icon>
        <span class="black--text   "> Clique aqui! </span>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <v-row class="paddingComponents translate-top-components">
      <v-card flat height="85vh" class="width-fill transparent">
        <Confirmation v-if="confirmation" ref="Confirmation" class="paddingComponents"/>
        <Gallery v-if="gallery" class="paddingComponents"/>
        <CardsGrid v-if="cardsGrid" class="paddingComponents"/>
        <DataTable v-if="dataTable" class="paddingComponents"/>
      </v-card>
    </v-row>

    <CuttedEdgeLeft/>
  </section>
</template>

<script>
  import Confirmation from "../../components/dialogs/Confirmation";
  import Gallery from "../../components/image/Gallery";
  import CardsGrid from "../../components/cards/CardsGrid";
  import DataTable from "../../components/general/DataTable";
  import RotatingMenu from "../../components/general/RotatingMenu";
  import CuttedEdgeLeft from "../../components/cuttedEdges/CuttedEdgeLeft"
  import CuttedEdgeRight from "../../components/cuttedEdges/CuttedEdgeRight"

  export default {
    name: "Components",
    components: {
      Gallery,
      Confirmation,
      CardsGrid,
      DataTable,
      RotatingMenu,
      CuttedEdgeLeft,
      CuttedEdgeRight
    },


    data: () => ({
      menu: [
        {title: "Confirmação", icon: "check"},
        {title: "Galeria", icon: "image"},
        {title: "Cards Grid", icon: "person"},
        {title: "Data Table", icon: "person"}
      ],

      clickHere: true,

      confirmation: false,
      gallery: false,
      cardsGrid: true,
      dataTable: false,


    }),

    methods: {
      openMenuItem(index) {
        this.clickHere = false;
        //document.getElementById("clickHere").classList.remove("blink"); (id="clickHere")

        this.closeAll();

        switch (index) {
          case 0:
            this.showConfirmation();
            break;
          case 1:
            this.showGallery();
            break;
          case 2:
            this.showCardsGrid();
            break;
          case 3:
            this.showDataTable();
            break;
        }
      },


      showConfirmation() {
        this.confirmation = true;
      },

      showGallery() {
        this.gallery = true;
      },

      showCardsGrid() {
        this.cardsGrid = true;
      },

      showDataTable() {
        this.dataTable = true;
      },

      closeAll() {
        this.gallery = false;
        this.cardsGrid = false;
        this.confirmation = false;
        this.dataTable = false;
      },
    }
  };
</script>

<style scoped>

  .blink {
    animation: blink 1s infinite;
  }

  .paddingComponents{
    padding-top: 75px;
  }

  .translate-top-components{
    transform: translateY(-320px);
  }

  .translate-top-title-components{
    transform: translateY(-405px);
  }
</style>