<template>
  <section>
    <v-container>
      <v-row style="justify-content: space-around;">
        <v-col class="card mt-5 grow-and-rotate-mb" style="margin-bottom: 100px " cols="5" v-for="card in cards" v-bind:key="card.id">
          <v-card flat  style="border: solid; color: #83785c;">
            <v-card-title class="justify-center">
              <h4>
                {{card.title}}
              </h4>
            </v-card-title>

            <v-card-text>
              <v-img :src="require('../../assets/KaisoHome3.jpg')"/>
            </v-card-text>
            <v-card-text>
              <p>
                {{card.text.substr(0, 210)}} <span>...</span>
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
  .grow-and-rotate-mb:nth-child(n){
    transition: 1s;
    transform: rotateZ(5deg);
  }

  .grow-and-rotate-mb:nth-child(n):hover{
    transition: 1s;
    transform: rotateZ(0deg) scale(1.2, 1.2);
  }

  .card{
    transform: translateY(0px) rotateZ(15deg);
    transition: 1s;
    cursor: pointer;
  }
</style>