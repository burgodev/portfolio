<template>
  <section class="padding-0  transparent translate-top-vision"  >
    <v-row class="align-center title-padding  ">
      <v-col cols="12" class="text-center">
        <h1 style="font-size: -webkit-xxx-large;  font-family: Michroma;"> Mindset</h1>
      </v-col>
    </v-row>

    <v-row class="padding-bottom ">
      <v-col sm="6" md="6" lg="6" xl="6" cols="6">
        <v-img
          :src="require('../../assets/burgo.jpg')"
          height="100vh"
          contain
        />

      </v-col>
      <v-col sm="6" md="6" lg="6" xl="6" cols="6" class="align-center">
        <v-card flat class="transparent">
          <v-card-text class="black--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas metus ac odio fringilla euismod ut eget
            eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed consectetur blandit justo, sit amet
            faucibus felis lacinia ut. Cras tempor urna eget tincidunt efficitur. Praesent tempor ipsum a arcu congue
            consequat. Donec et aliquet odio. Duis viverra felis ut urna pharetra posuere. Suspendisse potenti. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Curabitur vel dolor luctus, auctor arcu vitae, eleifend
            leo. Integer egestas, magna non gravida aliquam, orci ligula tincidunt lorem, nec sagittis ligula felis sit
            amet lacus.

            Mauris mauris leo, sollicitudin ut neque eu, dignissim facilisis quam. Praesent feugiat a erat sed laoreet.
            Sed sagittis elit ligula. Nam purus elit, malesuada id metus sed, efficitur consectetur arcu. Quisque
            gravida interdum egestas. Aliquam dignissim, lectus bibendum gravida congue, ante felis volutpat nunc, vitae
            commodo sapien turpis et odio. Nullam non urna condimentum, euismod dui vel, egestas ligula.

            Nam quis ornare lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            mus. In sit amet tortor eget massa interdum iaculis sit amet sit amet arcu. Quisque scelerisque diam at
            metus scelerisque, vitae commodo quam auctor. Vivamus in gravida eros. Quisque tincidunt quis diam vitae
            varius. Etiam placerat tristique blandit.

            Suspendisse ut velit in magna ornare elementum rhoncus quis ante. Sed sit amet nisi varius libero consequat
            eleifend eu sit amet odio. Duis vel nisl eu magna elementum efficitur ac quis lorem. Aliquam a enim erat.
            Donec quis ante nec diam eleifend dictum in at velit. Fusce nec odio augue. Sed sollicitudin ante non nisl
            tempor fringilla. Fusce maximus tortor eget feugiat lacinia. Aenean egestas quis eros eget volutpat. Aliquam
            lobortis justo sem, id hendrerit sem porttitor eget.

          </v-card-text>
        </v-card>

      </v-col>
    </v-row>
    <CuttedEdgeRight/>
  </section>
</template>

<script>
  import CuttedEdgeRight from '../../components/cuttedEdges/CuttedEdgeRight'

  export default {
    components: {
      CuttedEdgeRight
    },
    name: "Vision.vue"
  }
</script>

<style >
  .translate-top-vision{
    transform: translateY(-390px);
  }


</style>