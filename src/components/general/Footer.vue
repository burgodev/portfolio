<template>
  <v-container class="translate-top-footer">
    <v-row class="align-center title-padding  ">
      <v-col cols="12" class="text-center">
        <h1 style="font-size: -webkit-xxx-large;  font-family: Michroma;"> Contato</h1>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-card flat width="700" style="background-color: transparent">
        <form>
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="10"
            label="Nome"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-textarea
            name="input-7-1"
            label="Mensagem"
            value=""


          ></v-textarea>
          <v-btn class="mr-4 primary" depressed @click="submit">Enviar</v-btn>
          <v-btn @click="clear" depressed outlined>Limpar</v-btn>
        </form>
      </v-card>
    </v-row>

    <v-row class="justify-center " style="margin-top: 125px">
      <v-icon large> home</v-icon>
      <v-icon large> home</v-icon>
      <v-icon large> home</v-icon>
      <v-icon large> home</v-icon>

    </v-row>
  </v-container>
</template>

<script>
  import {validationMixin} from 'vuelidate'
  import {required, maxLength, email} from 'vuelidate/lib/validators'

  export default {
    name: 'Footer.vue',
    mixins: [validationMixin],

    validations: {
      name: {required, maxLength: maxLength(10)},
      email: {required, email},
      select: {required},
      checkbox: {
        checked(val) {
          return val
        },
      },
    },

    data: () => ({
      name: '',
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    computed: {
      checkboxErrors() {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      selectErrors() {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors() {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors() {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      submit() {
        this.$v.$touch()
      },
      clear() {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      },
    },
  }
</script>

<style scoped>

  .translate-top-footer {
    transform: translateY(-750px);
  }
</style>