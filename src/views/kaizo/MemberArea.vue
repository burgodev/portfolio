<template>
  <section>
    <v-container>
      <v-row class="justify-center" style="padding-bottom: 50px;">
        <v-col cols="12" class="align-center" style="padding-bottom: 50px;">
          <h1 class="main-font text--uppercase" style="text-align: -webkit-center; font-size: 2.5rem;">
            Área de Membros
          </h1>

        </v-col>
        <v-col cols="6" class="padding-0">
          <v-text-field rounded outlined label="Digite um mês"></v-text-field>

          <v-row class="justify-center">
            <v-checkbox label="Título" class="mx-2"></v-checkbox>
            <v-checkbox label="Data" class="mx-2"></v-checkbox>
          </v-row>
        </v-col>
      </v-row>


      <v-row style="justify-content: space-around;">
        <v-col class="card mt-5 grow-and-rotate-mb" style="margin-bottom: 100px " cols="5" v-for="card in cards"
               v-bind:key="card.id">
          <v-card flat style="border: solid; color: #83785c; border-radius: 50px;">
            <v-card-title class="justify-center">
              <h1>
                {{card.title}}
              </h1>
            </v-card-title>

            <v-card-text>
              <v-img :src="require('../../assets/KaisoHome3.jpg')"/>
            </v-card-text>
            <v-card-text>
              <p>
                {{card.text.substr(0, 250)}} <span>...</span>
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  export default {
    name: "MemberArea",

    data: () => ({
      cards: [
        {
          title: 'Card 1',
          image: '',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
            'Suspendisse mollis cursus erat sit amet varius. Nullam id mollis sem. ' +
            'Aliquam erat volutpat. Duis eu nisi at nibh hendrerit mattis. Nulla posuere lorem sed felis mollis, ' +
            'ac congue risus placerat. Maecenas commodo massa in pharetra iaculis. ' +
            'Sed nibh urna, elementum non dolor in, vestibulum porttitor libero. ' +
            'Suspendisse urna tortor, pellentesque non pharetra ut, hendrerit non orci.'
        },
        {
          title: 'Card 2',
          image: '',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
            'Suspendisse mollis cursus erat sit amet varius. Nullam id mollis sem. ' +
            'Aliquam erat volutpat. Duis eu nisi at nibh hendrerit mattis. Nulla posuere lorem sed felis mollis, ' +
            'ac congue risus placerat. Maecenas commodo massa in pharetra iaculis. ' +
            'Sed nibh urna, elementum non dolor in, vestibulum porttitor libero. ' +
            'Suspendisse urna tortor, pellentesque non pharetra ut, hendrerit non orci.'
        },
        {
          title: 'Card 3',
          image: '',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
            'Suspendisse mollis cursus erat sit amet varius. Nullam id mollis sem. ' +
            'Aliquam erat volutpat. Duis eu nisi at nibh hendrerit mattis. Nulla posuere lorem sed felis mollis, ' +
            'ac congue risus placerat. Maecenas commodo massa in pharetra iaculis. ' +
            'Sed nibh urna, elementum non dolor in, vestibulum porttitor libero. ' +
            'Suspendisse urna tortor, pellentesque non pharetra ut, hendrerit non orci.'
        },
        {
          title: 'Card 4',
          image: '',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
            'Suspendisse mollis cursus erat sit amet varius. Nullam id mollis sem. ' +
            'Aliquam erat volutpat. Duis eu nisi at nibh hendrerit mattis. Nulla posuere lorem sed felis mollis, ' +
            'ac congue risus placerat. Maecenas commodo massa in pharetra iaculis. ' +
            'Sed nibh urna, elementum non dolor in, vestibulum porttitor libero. ' +
            'Suspendisse urna tortor, pellentesque non pharetra ut, hendrerit non orci.'
        },
        {
          title: 'Card 5',
          image: '',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
            'Suspendisse mollis cursus erat sit amet varius. Nullam id mollis sem. ' +
            'Aliquam erat volutpat. Duis eu nisi at nibh hendrerit mattis. Nulla posuere lorem sed felis mollis, ' +
            'ac congue risus placerat. Maecenas commodo massa in pharetra iaculis. ' +
            'Sed nibh urna, elementum non dolor in, vestibulum porttitor libero. ' +
            'Suspendisse urna tortor, pellentesque non pharetra ut, hendrerit non orci.'
        },

        {
          title: 'Card 6',
          image: '',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
            'Suspendisse mollis cursus erat sit amet varius. Nullam id mollis sem. ' +
            'Aliquam erat volutpat. Duis eu nisi at nibh hendrerit mattis. Nulla posuere lorem sed felis mollis, ' +
            'ac congue risus placerat. Maecenas commodo massa in pharetra iaculis. ' +
            'Sed nibh urna, elementum non dolor in, vestibulum porttitor libero. ' +
            'Suspendisse urna tortor, pellentesque non pharetra ut, hendrerit non orci.'
        },

        {
          title: 'Card 7',
          image: '',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
            'Suspendisse mollis cursus erat sit amet varius. Nullam id mollis sem. ' +
            'Aliquam erat volutpat. Duis eu nisi at nibh hendrerit mattis. Nulla posuere lorem sed felis mollis, ' +
            'ac congue risus placerat. Maecenas commodo massa in pharetra iaculis. ' +
            'Sed nibh urna, elementum non dolor in, vestibulum porttitor libero. ' +
            'Suspendisse urna tortor, pellentesque non pharetra ut, hendrerit non orci.'
        },

      ],

    })
  }
</script>

<style scoped>
  .grow-and-rotate-mb:nth-child(n) {
    transition: 1s;
    transform: rotateZ(5deg) scale(.95);

  }

  .grow-and-rotate-mb:nth-child(n):hover {
    transition: 1s;
    transform: rotateZ(0deg) scale(1.2, 1.2);
  }

  .card {
    transform: translateY(0px) rotateZ(15deg);
    transition: 1s;
    cursor: pointer;
  }
</style>