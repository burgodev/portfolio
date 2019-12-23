<template>
  <!--<v-dialog v-model="dialog" max-width="400px"> -->

  <v-container>

    <v-snackbar bottom v-model="snackbar" color="success" timeout=1500>
      {{snackbarText}}
      <v-btn dark text @click="snackbar = false">Fechar</v-btn>
    </v-snackbar>

    <v-card class="mx-auto" max-width="400" outlined>
      <v-card-title style="font-family: Michroma; font-style: italic">{{title}}</v-card-title>
      <v-divider class="mb-5"/>

      <v-card-text style="font-family: Michroma; font-style: italic">{{text}}</v-card-text>

      <v-card-actions class="justify-end">
        <v-btn class="custom-btn" x-small depressed text rounded @click="cancel()">Cancelar</v-btn>
        <v-btn class="confirmation-btn" x-small outlined depressed rounded @click="confirm()">Confirmar</v-btn>
      </v-card-actions>
    </v-card>


  </v-container>

  <!--</v-dialog> -->
</template>

<script>
  export default {
    name: "Delete",

    data() {
      return {
        dialog: false,
        title: 'Excluir item',
        text: 'Você tem certeza que deseja excluir este item?',
        snackbar: false,
        snackbarText: 'Excluído com sucesso',
      }
    },

    methods: {
      open(title, text) {
        if (title) {

          this.title = title;
        }

        if (text) {
          this.text = text;
        }

        this.dialog = true;
      },

      cancel() {
        this.dialog = false;
      },

      confirm() {
        this.snackbar = true;
        this.deleteItem();

      },

      deleteItem() {
        /*  try {
              let ret = await axios({
                  baseURL: `${this.config.protocol}://${this.config.baseUrl}:${this.config.port}/`,
                  url: `/api/admin/user/delete/${userId}`,
                  method: 'delete',
                  headers: await Utils.handlerHead(),
              });
              return ret.data;
          }
          catch (e) {
              return e;
          }*/

        this.dialog = false;
      },


    }
  };
</script>

<style scoped>
  .justify-end {
    justify-content: flex-end;
  }
</style>