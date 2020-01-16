<template>
  <section style="background-color: #f5f5f0;">
    <v-container>
      <v-row>
        <v-col class="grow-and-rotate" cols="6">
          <v-col cols="12"
                 class="rotate-col"
                 style="border: solid;
               border-color: #81755b;
               transform: rotate(-5deg) translateY(-5px) scale3d(1.1, 1.1, 1.1);
               height: -webkit-fill-available;"
          >
            <article>

              <v-col cols="12">
                <h1 class="text--uppercase text-center"
                    style="font-family: 'Fredericka the Great', serif;
                   font-weight: lighter; text-align: center;
                   font-size: 4rem; color: #83785c;"
                >
                  Quem sou eu?
                </h1>
              </v-col>
              <v-col cols="12" class="rotate-p" style="transform: rotate(5deg);">
                <p
                  style="font-family: 'Poiret One', cursive;  font-weight: bold; margin-bottom: 35px;  text-align: justify;">
                  Sou Felipe
                  Gruetzmacher, formado em gestão ambiental, educador ambiental e percebo a distância entre a
                  teoria das Universidades e a prática do mundo empresarial.
                  Compreendo as dificuldades dos empreendedores em acessar know-how qualificado e trocar ideias para
                  alinhar
                  pessoas, tecnologia, ciência e missão institucional.
                  Meu site nasceu com a missão de auxiliar Startups a contornar esse empecilho e sintonizar os saberes
                  práticos e saberes científicos.</p>
              </v-col>
            </article>
          </v-col>
        </v-col>

        <v-spacer/>

        <v-col cols="6">
          <v-img :src="require('../../assets/KaisoHome3.jpg')" height="70%" width="80%"
                 style="transform: translateY(30px) translateX(120px) translateX(50px) rotate(5deg);"
                 gradient="to right top, rgba(129, 117, 91, 0.6), rgba(126, 116, 91, 0.6)">
          </v-img>
        </v-col>

        <v-col cols="6">
          <v-img :src="require('../../assets/KaisoHome5.png')" height="80%" width="90%"
                 style="transform: translateY(60px) rotate(-5deg);"
                 gradient="to right top, rgba(129, 117, 91, 0.6), rgba(126, 116, 91, 0.6)">
          </v-img>
        </v-col>
        <v-spacer/>

        <v-col cols="5" class="grow-and-rotate">
          <v-col cols="12"
                 class="rotate-col"
                 style="border: solid;
                border-color: #81755b;
                 transform: rotate(5deg)
                  translateY(-5px) scale3d(1.1, 1.1, 1.1);">
            <article>
              <v-col cols="12">
                <h1 class="text--uppercase text-center"
                    style="font-family: 'Fredericka the Great', serif;
                   font-weight: lighter; text-align: center;
                   font-size: 4rem; color: #83785c;"
                >
                  O que é o Kaizo?
                </h1>
              </v-col>
              <v-row style="justify-content: center;">
                <v-col cols="10" class="rotate-p" style="transform: rotate(-5deg);">
                  <p
                    style="font-family: 'Poiret One', cursive;  font-weight: bold; margin-bottom: 35px;     text-align: justify;">
                    "Kaizo" é uma palavra japonesa, a tradução para "modificação".
                    Optei por usar um Louva-Deus como símbolo do projeto porque é um animal que lembra prosperidade e
                    bons
                    ventos.
                    A Startup Kaizo é um site que fornece poderosas ideias e insights sobre como aproximar ciência
                    acadêmica
                    e
                    Startups.
                    A partir de nossas postagens, nós simplificamos e sintetizamos saberes teóricos de cientistas,
                    livros
                    e
                    artigos para aproximar a linguagem científica do mundo Startup.
                    Construímos credibilidade e autoridade a partir de conteúdo gratuito para fomentar o diálogo entre
                    empreendedor e a ciência teórica.
                    Nosso modelo de monetização está baseado no tripé:
                  </p>
                </v-col>
              </v-row>
            </article>
          </v-col>
        </v-col>
      </v-row>

      <v-row style="margin-top: 100px; margin-bottom: 100px;">
        <v-col cols="12">
          <article>
            <v-row class="grow" style="padding-top: 50px; text-align: -webkit-left;">
              <v-col cols="2"
                     class="rotate-icon"
                     style="text-align: center; align-self: center;  border: solid;  border-color: #80745a; transform: rotateZ(-10deg);">
                <v-icon size="100px"> person</v-icon>
              </v-col>

              <v-col cols="9" style="margin-top: 20px; margin-left: 20px; text-align: -webkit-right;">
                <span style="font-family: 'Fredericka the Great', cursive;  font-size: xx-large;">
                  - Oferta de um banco de dados para o usuário para "gravar" ideias de cientistas-usuários e
                 empreendedores-usuários para facilitar a proximidade entre esses dois nichos.
                   <br> </span>
              </v-col>
              <v-spacer/>
            </v-row>

            <v-row class="grow" style="justify-content: center; text-align: -webkit-right; padding-bottom: 55px">
              <v-spacer/>
              <v-col cols="2"
                     class="rotate-icon"
                     style="    align-self: center; text-align: center; border: solid;  border-color: #80745a; transform: rotateZ(-10deg);">
                <v-icon size="100px"> stay_current_landscape
                </v-icon>
              </v-col>
              <v-col cols="9" style="padding-top: 50px; ">
                <span style="font-family: 'Fredericka the Great', cursive;  font-size: xx-large;"> - Oferta de um livro virtual que ensina como "transferir" ciência teórica para Startups (um "passo a passo"). <br></span>
              </v-col>
            </v-row>

            <v-row class="grow" style="justify-content: flex-end;">
              <v-col cols="2"></v-col>
              <v-col cols="2"
                     class="rotate-icon"
                     style="align-self: center; text-align: center; border: solid;  border-color: #80745a; transform: rotateZ(-10deg);">
                <v-icon size="100px"> sd_card</v-icon>
              </v-col>
              <v-spacer/>
              <v-col cols="7" style="text-align: -webkit-right; ">
                <span style="font-family: 'Fredericka the Great', cursive;  font-size: xx-large; "> - Oferta de artigos exclusivos para membros VIP. <br></span>
              </v-col>
            </v-row>
          </article>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  export default {
    name: "KaizoAbout.vue"
  }
</script>

<style >
  .grow {
    transition: 1s;
  }

  .grow:hover {
    transform: scale(1.1);
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

  .rotate-icon {
    transition: 1s;
  }

  .grow:hover .rotate-icon {
    transform: rotateZ(0deg) !important;
    background-color: white;
  }


</style>