<template>
  <section style="background-color: #f5f5f0;">
    <v-container>
      <article>
        <v-row style="justify-content: flex-end;">
          <v-col cols="5">
            <v-img :src="require('../../assets/KaisoHome3.jpg')" height="70%" width="80%"
                   style="transform: rotate(5deg);"
                   gradient="to right top, rgba(129, 117, 91, 0.6), rgba(126, 116, 91, 0.6)">
            </v-img>
          </v-col>
          <v-col cols="7" class="grow-and-rotate">
            <v-col cols="12"
                   class="rotate-col"
                   style="border: solid;
                          border-color: #81755b;
                          transform: rotate(5deg)
                          translateY(-5px) scale3d(1.1, 1.1, 1.1);">

              <v-col cols="12">
                <h1 class="text--uppercase text-center"
                    style="font-family: 'Fredericka the Great', serif;
                   font-weight: lighter; text-align: center;
                   font-size: 4rem; color: #83785c;"
                >

                </h1>
              </v-col>
              <v-row style="justify-content: center;">
                <v-col cols="10" class="rotate-p" style="transform: rotate(-5deg);">
                  <p
                    style="font-family: 'Poiret One', cursive;  font-weight: bold; margin-bottom: 35px;     text-align: justify;">
                    A ciência do Serviço Social comprova que o Estado está à serviço da classe dominante e as políticas
                    sociais
                    funcionam como um "controle social" sobre a classe trabalhadora (hipótese da sociologia).

                    Logo, Kaizo expõe como as tecnologias das Startups e os métodos do empreendedorismo podem otimizar a
                    atuação
                    do
                    Estado no sentido de agregar um real valor para a classe trabalhadora através de políticas sociais
                    mais
                    consistentes.
                  </p>
                </v-col>
              </v-row>
            </v-col>
          </v-col>
        </v-row>

        <v-row style="justify-content: flex-start; margin-top: 50px; text-align: -webkit-center; ">
          <v-col cols="7" class="grow-and-rotate">
            <v-col cols="12"
                   class="rotate-col"
                   style="border: solid;
                border-color: #81755b;
                 transform: rotate(5deg)
                  translateY(-5px) scale3d(1.1, 1.1, 1.1);">

              <v-col cols="12">
                <h1 class="text--uppercase text-center"
                    style="font-family: 'Fredericka the Great', serif;
                   font-weight: lighter; text-align: center;
                   font-size: 4rem; color: #83785c;"
                >

                </h1>
              </v-col>

              <v-row style="text-align: -webkit-right; justify-content: center;">
                <v-col cols="10" class="rotate-p" style="transform: rotate(-5deg); ">
                  <p
                    style="font-family: 'Poiret One', cursive;  font-weight: bold; margin-bottom: 35px;     text-align: justify;">
                    A psicanálise mostra como o trabalho na sociedade capitalista produz neuroses (hipótese
                    cientificamente
                    comprovada).


                    Então, o uso dos softwares (Startups) podem otimizar a seleção de pessoas (recursos humanos) e a
                    diminuição
                    das
                    horas trabalhadas (acréscimo em eficiência) para a mitigação dos sintomas neuróticos.
                  </p>
                </v-col>
              </v-row>
            </v-col>
          </v-col>

          <v-col cols="5" style="    transform: translateY(85px);">
            <v-img :src="require('../../assets/KaisoHome3.jpg')" height="70%" width="80%"
                   style="transform: rotate(5deg);"
                   gradient="to right top, rgba(129, 117, 91, 0.6), rgba(126, 116, 91, 0.6)">
            </v-img>
          </v-col>
        </v-row>


        <v-row style="margin-top: 100px; margin-bottom: 100px;">
          <v-col cols="12">
            <article>
              <v-row class="grow" style="padding-top: 50px; text-align: -webkit-left;">

                <v-col cols="4" style="   ">
                  <v-img :src="require('../../assets/KaisoHome3.jpg')" height="150%" width="100%"
                         style="transform: rotate(-5deg);"
                         gradient="to right top, rgba(129, 117, 91, 0.6), rgba(126, 116, 91, 0.6)">
                  </v-img>
                </v-col>
                <v-spacer/>
                <v-col cols="2"
                       class="rotate-icon"
                       style="text-align: center; align-self: center;  border: solid;  border-color: #80745a; transform: rotateZ(-10deg);">
                  <v-icon size="100px"> person</v-icon>
                </v-col>

                <v-col cols="3" style="margin-top: 20px; margin-left: 20px; text-align: -webkit-center;">
                <span style="font-family: 'Fredericka the Great', cursive;  font-size: xx-large;">
                  - Conhecimento
                   <br> </span>
                </v-col>
              </v-row>

              <v-row class="grow" style="justify-content: center; text-align: -webkit-center; padding-top: 55px">
                <v-spacer/>
                <v-col cols="2"
                       class="rotate-icon"
                       style=" text-align: -webkit-left;   align-self: center; text-align: center; border: solid;  border-color: #80745a; transform: rotateZ(-10deg);">
                  <v-icon size="100px"> stay_current_landscape
                  </v-icon>
                </v-col>
                <v-col cols="" style="padding-top: 50px; ">
                  <span style="font-family: 'Fredericka the Great', cursive;  font-size: xx-large;"> - Post ricos em informação. <br></span>
                </v-col>
              </v-row>

              <v-row class="grow" style="justify-content: flex-end;  padding-top: 55px">
                <v-spacer/>
                <v-col cols="2"
                       class="rotate-icon"
                       style="align-self: center; text-align: center; border: solid;  border-color: #80745a; transform: rotateZ(-10deg);">
                  <v-icon size="100px"> sd_card</v-icon>
                </v-col>

                <v-col cols="7" style="text-align: -webkit-center; ">
                  <span style="font-family: 'Fredericka the Great', cursive;  font-size: xx-large; "> - Ciência aberta para a inovação. <br></span>
                </v-col>
              </v-row>

              <v-row class="grow" style="justify-content: flex-end;  padding-top: 55px">
                <v-spacer/>
                <v-col cols="2"
                       class="rotate-icon"
                       style="align-self: center; text-align: center; border: solid;  border-color: #80745a; transform: rotateZ(-10deg);">
                  <v-icon size="100px"> sd_card</v-icon>
                </v-col>
<v-spacer/>
                <v-col cols="8" style="text-align: -webkit-center; ">
                  <span style="font-family: 'Fredericka the Great', cursive;  font-size: xx-large; "> - Comunicação franca entre ciência , hipóteses cientificamente comprovadas e a "inteligência prática" das Startups <br></span>
                </v-col>
              </v-row>
            </article>
          </v-col>
        </v-row>


      </article>
    </v-container>
  </section>
</template>

<script>
  export default {
    name: "ValueOffer.vue"
  }
</script>

<style scoped>

</style>