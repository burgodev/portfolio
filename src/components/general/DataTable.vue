<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="calories"
      :items-per-page="itemsPerPage"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>{{title}}</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">{{newItemText}}</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.email" label="Calories"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.phone" label="Fat (g)"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.birthday" label="Carbs (g)"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" small text @click="close">Cancelar</v-btn>
                <v-btn color="blue darken-1" small rounded outlined @click="save">Salvar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          edit
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
  export default {
    name: "DataTable.vue",

    data: () => ({
      dialog: false,
      title : 'Usuários',
      newItemText: 'Novo Usuário',
      editItemText: 'Editar Usuário',
      itemsPerPage: 6,
      headers: [
        {
          text: 'Nome',
          align: 'left',
          sortable: true,
          value: 'name',
        },
        {text: 'Email', value: 'email'},
        {text: 'Telefone', value: 'phone'},
        {text: 'Data de Nascimento', value: 'birthday'},

        {text: 'Actions', value: 'action', sortable: false},
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        email: 0,
        phone: 0,
        birthday: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        email: 0,
        phone: 0,
        birthday: 0,
        protein: 0,
      },
    }),

    computed: {
      formTitle() {
        return this.editedIndex === -1 ? this.newItemText : this.editItemText
      },
    },

    watch: {
      dialog(val) {
        val || this.close()
      },
    },

    created() {
      this.initialize()
    },

    methods: {
      initialize() {
        this.desserts = [
          {
            name: 'Ana',
            email: 'ana@gmail.com',
            phone: '99999999',
            birthday: '11/10/1990',
            protein: 4.0,
          },
          {
            name: 'Bianca',
            email: 'bianca@gmail.com',
            phone: '99999999',
            birthday: '11/10/1990',
            protein: 4.3,
          },
          {
            name: 'Luis',
            email: 'luis@gmail.com',
            phone: '99999999',
            birthday: '11/10/1990',
            protein: 6.0,
          },
          {
            name: 'Iann',
            email: 'iann@gmail.com',
            phone: '99999999',
            birthday: '11/10/1990',
            protein: 4.3,
          },
          {
            name: 'Filipe',
            email: 'filipe@gmail.com',
            phone: '99999999',
            birthday: '11/10/1990',
            protein: 3.9,
          },
          {
            name: 'Julio',
            email: 'julio@gmail.com',
            phone: '99999999',
            birthday: '11/10/1990',
            protein: 0.0,
          },
          {
            name: 'João',
            email: 'joão@gmail.com',
            phone: '99999999',
            birthday: '11/10/1990',
            protein: 0,
          },
          {
            name: 'Nicolas',
            email: 'nicolas@gmail.com',
            phone: '99999999',
            birthday: '11/10/1990',
            protein: 6.5,
          },
          {
            name: 'Diogo',
            email: 'diogo@gmail.com',
            phone: '99999999',
            birthday: '11/10/1990',
            protein: 4.9,
          },
          {
            name: 'Osvaldo',
            email: 'osvaldo@gmail.com',
            phone: '99999999',
            birthday: '11/10/1990',
            protein: 7,
          },
        ]
      },

      editItem(item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem(item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close() {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save() {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>

<style scoped>

</style>