<template>
  <section class="translate-top-footer">
    <v-row class="align-center title-padding  ">
      <v-col cols="12" class="text-center">
        <h1 style="font-size: -webkit-xxx-large;  font-family: Michroma;"> Contato</h1>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-card flat width="550" style="background-color: transparent">
        <form>
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            label="Nome"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="contactEmail"
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
          <v-row class="justify-center">
            <v-btn class="mr-4 primary" depressed @click="submit">Enviar</v-btn>
            <v-btn @click="clear" depressed outlined>Limpar</v-btn>
          </v-row>
        </form>
      </v-card>
    </v-row>

    <v-row style="margin-top: 65px" class="no-gutters">
      <v-spacer/>
      <v-col class="text-center" cols="3">
        <v-icon x-large color="black" class="mr-2"> phone</v-icon>
        <span class="align-center main-font"><strong>{{phone}}</strong> </span>
      </v-col>
      <v-spacer/>
    </v-row>

    <v-row class="no-gutters mt-2">
      <v-spacer/>
      <v-col class="text-center" cols="3" style="margin-left: 35px;">
        <v-icon x-large color="black" class="mr-2"> mail</v-icon>
        <span class="align-center main-font"> <strong>{{email}} </strong></span>
      </v-col>
      <v-spacer/>
    </v-row>

    <v-row class="no-gutters">
      <v-spacer/>
      <v-col cols="1" class="align-icon">
        <a target="_blank"
           href="https://github.com">
          <v-img height="65" width="95" class="ml-3" :src="require('../assets/github.jpg')"/>
        </a>
      </v-col>
      <v-spacer/>
    </v-row>


    <v-row class="no-gutters">
      <v-spacer/>
      <v-col cols="1" class="align-icon">
        <a target="_blank"
           href="https://linkedin.com">
          <v-img height="30" width="150" class="ml-2"
                 :src="require('../assets/linkedin.jpg')"/>
        </a>
      </v-col>
      <v-spacer/>
    </v-row>
  </section>
</template>

<script>
  import {validationMixin} from 'vuelidate'
  import {required, maxLength, email} from 'vuelidate/lib/validators'

  export default {
    name: 'Contact.vue',
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
      contactEmail: '',
      phone: '(47) 9 9705-5115',
      email: 'burgodev@gmail.com',
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

      nameErrors() {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('Digite o nome')
        return errors
      },
      emailErrors() {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Digite um e-mail válido')
        !this.$v.email.required && errors.push('Digite um e-mail')
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
        this.contactEmail = ''
        this.select = null
        this.checkbox = false
      },
    },
  }
</script>

<style scoped>
  .translate-top-footer {
    transform: translateY(-780px);
    height: 0px;
  }

  .align-icon {
    text-align: -webkit-center;
  }
</style>