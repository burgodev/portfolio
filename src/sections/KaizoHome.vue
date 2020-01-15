<template>
  <section style="    background-color: #ecece280;">
    <v-row style=" align-items: center;">
      <v-spacer/>
      <v-col cols="6" class="grow-and-rotate">
        <v-row
          class="rotate-col"
          style="justify-content: center; border: solid; border-color: #83785c; transform: rotate(-5deg) translateY(25px)  scaleY(1.1) scaleX(1.1);  ">
          <v-col cols="12" >
            <h3 style="font-family: 'Poiret One', cursive;  font-weight: 200;  text-align: center; transform: rotate(5deg);  margin-top: 20px; "> Welcome
              to</h3>
            <h1 class="text--uppercase;  "
                style="font-family: 'Fredericka the Great', serif; font-weight: lighter; text-align: center; font-size: 5rem; color: #83785c; ">
              Kaizo
            </h1>
          </v-col>

          <v-col cols="8" style="text-align: center; " >
            <p class="rotate-p" style="font-family: 'Poiret One', cursive;     font-weight: bold; text-align: justify; transform: rotate(5deg); ">
              A ciência foca na descoberta da verdade.
              O empreendedorismo foca na obtenção do lucro.
              São dois Universos diferentes.
              O Blog "Kaizo" publica posts apresentando
              problemas academicamente delimitados e
              soluções (Startups) para esses problemas.
              Aproximando a ciência básica e a linguagem do
              empreendedorismo.
            </p>


            <v-btn  class="show-button-animation" style="margin-bottom: 7px;" color="#83785c" outlined> Quero me inscrever!</v-btn>
          </v-col>
        </v-row>

      </v-col>
      <v-col cols="6" class="padding-0" style="height: 100vh;">
        <v-img :src="require('../assets/KaisoHome4.jpg')" height="100%" width="100%"/>
      </v-col>
    </v-row>

  </section>
</template>

<script>
  export default {
    name: "KaisoHome.vue",

    methods: {
      typewriter() {
        let h3 = document.querySelector('h3');
        let h1 = document.querySelector('h1');
        let p = document.querySelector('p');
        let stringH3 = h3.innerHTML.split('');
        let stringH1 = h1.innerHTML.split('');
        let stringP = p.innerHTML.split('');

        h3.innerHTML = '';

        setTimeout(() => stringH3.forEach((letter, i) => {
          setTimeout(() => h3.innerHTML += letter, 115 * i);
        }));

        h1.innerHTML = '';

        setTimeout(() => stringH1.forEach((letter, i) => {
          setTimeout(() => h1.innerHTML += letter, 300 * i);
        }), 1200);


        p.innerHTML = '';

        setTimeout(() => stringP.forEach((letter, i) => {
          setTimeout(() => p.innerHTML += letter, 50 * i);
        }), 2500);


      }
    },

    created() {
      setTimeout(() => this.typewriter(), 0);
    }


  }


</script>

<style scoped>


  p::after {
    content: '|';
    opacity: 1;
    margin-left: 5px;
    display: inline-block;
    animation: blink .7s infinite;
  }

  .show-button-animation {
    opacity: 0;
    -webkit-animation: fade-in ease-in 2.5s 18s forwards;
    animation: fade-in ease-in 2.5s 18s forwards;
  }

  .grow-and-rotate {
    transition: 1s;
  }

  .grow-and-rotate:hover {
    transform: scale(1.1);
  }

  .rotate-col {
    transition: 1s;
  }

  .grow-and-rotate:hover .rotate-col {
    transform: rotateZ(0deg) !important;
    background-color: white;

  }

  .rotate-p {
    transition: 1s;
  }

  .grow-and-rotate:hover .rotate-p {
    transform: rotateZ(0deg) !important;
  }

  h3 {
    transition: 1s;
  }

  .grow-and-rotate:hover h3 {
    transform: rotateZ(0deg) !important;
  }

</style>