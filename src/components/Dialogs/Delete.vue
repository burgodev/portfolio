<template>
  <v-dialog v-model="dialog" max-width="400px">
    <v-card class="mx-auto" max-width="400" outlined>
      <v-card-title>{{title}}</v-card-title>
      <v-divider class="mb-5" />

      <v-card-text>{{text}}</v-card-text>

      <v-card-actions class="justify-end">
        <v-btn text @click="cancel()">Cancelar</v-btn>
        <v-btn text @click="confirm()">Confirmar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Delete",

  data () {
      return {
        dialog: false,
        title: 'Excluir Usuário',
        text: 'Você tem certeza que deseja excluir este usuário?'
      }
    },

  methods: {
    open(title, text) {
        if(title){
           
            this.title = title;
        }

        if(text){
            this.text = text;
        }

        this.dialog = true;
    },

    cancel(){
        this.dialog = false;
    },

    confirm(){
        this.deleteItem();

    },

    deleteItem(){
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