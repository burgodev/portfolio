<template>
  <section style="height: 90vh; margin-top:125px;">
    <v-row class="justify-center">
      <v-col cols="12" style="padding: 0px;">
        <h1 class="text-center"
            style="font-family: 'Fredericka the Great', serif;
                   font-weight: lighter; text-align: center;
                   font-size: 4rem; color: #83785c;"
        >
          CONTATO
        </h1>
      </v-col>


      <v-col cols="6">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-textarea
            outlined
            name="input-7-4"
            label="Texto"
            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
          ></v-textarea>



          <v-row style="justify-content: center;">
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Enviar
            </v-btn>

            <v-btn
              color="error"
              class="mr-4"
              @click="reset"
            >
              Limpar
            </v-btn>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: "Contact.vue",
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Preencha o nome',

      ],
      email: '',
      emailRules: [
        v => !!v || 'Preencha o e-mail',
        v => /.+@.+\..+/.test(v) || 'Preencha um e-mail válido',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate() {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset() {
        this.$refs.form.reset()
      },
      resetValidation() {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style scoped>

</style>