<template>
  <section style="background-color: #f5f5f0;">
    <v-container>
      <v-row>
        <v-col cols="6"
               style="border: solid; border-color: #81755b; transform: rotate(-5deg) translateY(-5px) scale3d(1.1, 1.1, 1.1);">
          <article>
            <v-col cols="12">
              <h1 class="text--uppercase text-center" style="color: #81755b; font-size: 4rem;"> Quem sou eu?</h1>
            </v-col>
            <v-col cols="12" style="transform: rotate(5deg);">
              <p> Sou Felipe Gruetzmacher, formado em gestão ambiental, educador ambiental e percebo a distância entre a
                teoria das Universidades e a prática do mundo empresarial.
                Compreendo as dificuldades dos empreendedores em acessar know-how qualificado e trocar ideias para
                alinhar
                pessoas, tecnologia, ciência e missão institucional.
                Meu site nasceu com a missão de auxiliar Startups a contornar esse empecilho e sintonizar os saberes
                práticos e saberes científicos.</p>
            </v-col>
          </article>
        </v-col>

        <v-spacer/>

        <v-col cols="6"/>

        <v-col cols="6">
          <v-img :src="require('../assets/KaisoHome5.png')" height="80%" width="90%"
                 style="transform: translateY(60px) translateX(35px) rotate(-5deg);"
                 gradient="to right top, rgba(129, 117, 91, 0.6), rgba(126, 116, 91, 0.6)">
          </v-img>
        </v-col>

        <v-col cols="6"
               style="border: solid; border-color: #81755b; transform: rotate(5deg) translateY(-5px) scale3d(1.1, 1.1, 1.1);">
          <article>
            <v-col cols="12">
              <h1 class="text--uppercase text-center" style="color: #81755b; font-size: 4rem;"> O que é o Kaizo?</h1>
            </v-col>

            <v-col cols="12" style="transform: rotate(-5deg);">
              <p> "Kaizo" é uma palavra japonesa, a tradução para "modificação".
                Optei por usar um Louva-Deus como símbolo do projeto porque é um animal que lembra prosperidade e bons
                ventos.
                A Startup Kaizo é um site que fornece poderosas ideias e insights sobre como aproximar ciência acadêmica
                e
                Startups.
                A partir de nossas postagens, nós simplificamos e sintetizamos saberes teóricos de cientistas, livros e
                artigos para aproximar a linguagem científica do mundo Startup.
                Construímos credibilidade e autoridade a partir de conteúdo gratuito para fomentar o diálogo entre
                empreendedor e a ciência teórica.
                Nosso modelo de monetização está baseado no tripé:
              </p>

              <span> - Oferta de artigos exclusivos para membros VIP. <br> </span>
              <span> - Oferta de um livro virtual que ensina como "transferir" ciência teórica para Startups (um "passo a passo"). <br></span>
              <span> - Oferta de um banco de dados para o usuário para "gravar" ideias de cientistas-usuários e
            empreendedores-usuários para facilitar a proximidade entre esses dois nichos. <br></span>
            </v-col>
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

<style scoped>

</style>