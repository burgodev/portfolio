<template>
  <section>
    <v-row class="align-center title-padding  ">
      <v-col v-bind:class="{animation: isIntersecting }" cols="12" class="text-center contact-title">
        <h1
          style="font-size: -webkit-xxx-large; color:white;  font-family: Michroma;"> Contato</h1>
      </v-col>
    </v-row>
    <v-row class="justify-center"
           v-intersect="{
            handler: onIntersect,
            options: {
              threshold: [0, 0.5, 1.0]
            }
          }">

      <v-card
        v-bind:class="{animation: isIntersecting }"
        dark flat width="550" class="contact-card">
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
      isIntersecting: false,


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
      onIntersect(entries, observer) {
        this.isIntersecting = entries[0].intersectionRatio >= 0.5

        if (this.isIntersecting == true) {
          this.isIntersecting = true;
        }
      },

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

  .align-icon {
    text-align: -webkit-center;
  }


  h1 {
    text-align: center;
    font-family: 'Michroma', Arial, sans-serif;
    font-size: calc(20px + 2vw);
    font-weight: 700;
    color: white;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-shadow: 0 0 0.15em lightgrey;
    user-select: none;
    white-space: nowrap;
    filter: blur(0.007em);
    animation: shake 2.5s linear infinite;
  }


  h1::after {
    content: '|';
    opacity: 1;
    margin-left: 5px;
    display: inline-block;
    animation: blink .7s infinite;
  }


  @keyframes shake {
    5%, 15%, 25%, 35%, 55%, 65%, 75%, 95% {
      filter: blur(0.018em);
      transform: translateY(0.018em) rotate(0deg);
    }

    10%, 30%, 40%, 50%, 70%, 80%, 90% {
      filter: blur(0.01em);
      transform: translateY(-0.018em) rotate(0deg);
    }

    20%, 60% {
      filter: blur(0.03em);
      transform: translate(-0.018em, 0.018em) rotate(0deg);
    }

    45%, 85% {
      filter: blur(0.03em);
      transform: translate(0.018em, -0.018em) rotate(0deg);
    }

    100% {
      filter: blur(0.007em);
      transform: translate(0) rotate(-0.5deg);
    }
  }

  .animation {
    -webkit-animation: translateX .5s ease-out forwards;
    -o-animation: translateX .5s ease-out forwards;
    animation: translateX .5s ease-out forwards;
  }


  @keyframes translateX {
    from {

    }

    to {
      -webkit-transform: translateX(0vh);
      -moz-transform: translateX(0vh);
      -ms-transform: translateX(0vh);
      -o-transform: translateX(0vh);
      transform: translateX(0vh);
    }
  }


  .contact-card {
    background-color: transparent;
    z-index: 99;
    transform: translateX(80vw);
  }

  .contact-title {
    background-color: transparent;
    z-index: 99;
    transform: translateX(-80vw);

  }
</style>
