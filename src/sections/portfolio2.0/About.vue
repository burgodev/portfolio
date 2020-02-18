<template>
  <section style="height: 250vh;">

    <v-container style="height: 300vh;">
      <v-row class="justify-center align-center " style="height: 200vh;"
             v-intersect="{
            handler: onIntersect,
            options: {
              threshold: [0, 0.5, 1.0],

            }
          }"
      >
        <v-col

          cols="12" class="text-center" style="z-index: 99;">
          <h1 style="color:white;"> SOBRE </h1>
        </v-col>

        <v-col cols="6"
               class="mx-auto mt-6"

               style="transform: translateX(100vw); padding-left: 5vh; "

               v-bind:class="{col1 : isIntersecting}"
        >
          <p style="color:white ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at sollicitudin mauris. Suspendisse
            cursus, lorem sit amet tincidunt efficitur, arcu augue mattis ante, sit amet placerat justo ligula a enim.
            Cras a tortor ut libero gravida ultrices eget in tellus. Donec volutpat nulla scelerisque risus accumsan,
            eget malesuada est vestibulum. Duis volutpat sollicitudin turpis, quis ullamcorper nisi. Nulla porttitor
            fermentum magna in cursus. Quisque id turpis eget velit ultrices fermentum. Nullam eleifend velit id elit
            suscipit, ac tincidunt orci tempor. Curabitur nec ultrices nisi, quis aliquam risus. Duis ex ligula,
            viverra
            eu ipsum at, dignissim faucibus magna. Maecenas aliquet, ipsum ut porttitor viverra, erat mauris sagittis
            lectus, at iaculis metus orci id ante.

            Nullam at tincidunt purus, eget facilisis velit. Duis in leo tellus. Donec ut diam dapibus, volutpat mi
            at,
            maximus est. Praesent ornare ex massa, a semper nisi molestie at. Aenean quis lectus finibus ex mollis
            posuere a et erat. Fusce vehicula tempor facilisis. Vestibulum dignissim et urna nec gravida. Etiam
            iaculis
            leo in accumsan egestas. Aenean nec erat quis augue ultrices efficitur ut cursus enim. Vivamus pulvinar,
            ipsum in facilisis tristique, libero sem vehicula nulla, eu convallis purus mauris non erat. Quisque
            malesuada mi sem, eget placerat sem gravida vel. Proin blandit pretium ante.
          </p>
        </v-col>

        <v-col cols="6" style="transform: translateY(100vh); transition: 1s; opacity: 0; "

               v-bind:class="{col2  : isIntersecting}">
          <p style="color:white ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at sollicitudin mauris. Suspendisse
            cursus, lorem sit amet tincidunt efficitur, arcu augue mattis ante, sit amet placerat justo ligula a enim.
            Cras a tortor ut libero gravida ultrices eget in tellus. Donec volutpat nulla scelerisque risus accumsan,
            eget malesuada est vestibulum. Duis volutpat sollicitudin turpis, quis ullamcorper nisi. Nulla porttitor
            fermentum magna in cursus. Quisque id turpis eget velit ultrices fermentum. Nullam eleifend velit id elit
            suscipit, ac tincidunt orci tempor. Curabitur nec ultrices nisi, quis aliquam risus. Duis ex ligula,
            viverra
            eu ipsum at, dignissim faucibus magna. Maecenas aliquet, ipsum ut porttitor viverra, erat mauris sagittis
            lectus, at iaculis metus orci id ante.

            Nullam at tincidunt purus, eget facilisis velit. Duis in leo tellus. Donec ut diam dapibus, volutpat mi
            at,
            maximus est. Praesent ornare ex massa, a semper nisi molestie at. Aenean quis lectus finibus ex mollis
            posuere a et erat. Fusce vehicula tempor facilisis. Vestibulum dignissim et urna nec gravida. Etiam
            iaculis
            leo in accumsan egestas. Aenean nec erat quis augue ultrices efficitur ut cursus enim. Vivamus pulvinar,
            ipsum in facilisis tristique, libero sem vehicula nulla, eu convallis purus mauris non erat. Quisque
            malesuada mi sem, eget placerat sem gravida vel. Proin blandit pretium ante.
          </p>


        </v-col>

        <v-col cols="6" class="mt-12" style="transform: translateY(-100vh); transition: 1s; opacity: 0;   "

               v-bind:class="{col1 : isIntersecting}">
          <p style="color:white ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at sollicitudin mauris. Suspendisse
            cursus, lorem sit amet tincidunt efficitur, arcu augue mattis ante, sit amet placerat justo ligula a enim.
            Cras a tortor ut libero gravida ultrices eget in tellus. Donec volutpat nulla scelerisque risus accumsan,
            eget malesuada est vestibulum. Duis volutpat sollicitudin turpis, quis ullamcorper nisi. Nulla porttitor
            fermentum magna in cursus. Quisque id turpis eget velit ultrices fermentum. Nullam eleifend velit id elit
            suscipit, ac tincidunt orci tempor. Curabitur nec ultrices nisi, quis aliquam risus. Duis ex ligula,
            viverra
            eu ipsum at, dignissim faucibus magna. Maecenas aliquet, ipsum ut porttitor viverra, erat mauris sagittis
            lectus, at iaculis metus orci id ante.

            Nullam at tincidunt purus, eget facilisis velit. Duis in leo tellus. Donec ut diam dapibus, volutpat mi
            at,
            maximus est. Praesent ornare ex massa, a semper nisi molestie at. Aenean quis lectus finibus ex mollis
            posuere a et erat. Fusce vehicula tempor facilisis. Vestibulum dignissim et urna nec gravida. Etiam
            iaculis
            leo in accumsan egestas. Aenean nec erat quis augue ultrices efficitur ut cursus enim. Vivamus pulvinar,
            ipsum in facilisis tristique, libero sem vehicula nulla, eu convallis purus mauris non erat. Quisque
            malesuada mi sem, eget placerat sem gravida vel. Proin blandit pretium ante.
          </p>

        </v-col>

        <v-col cols="6" style="transform: translateX(-100vw);   "

               v-bind:class="{col2 : isIntersecting}">
          <p style="color:white ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at sollicitudin mauris. Suspendisse
            cursus, lorem sit amet tincidunt efficitur, arcu augue mattis ante, sit amet placerat justo ligula a enim.
            Cras a tortor ut libero gravida ultrices eget in tellus. Donec volutpat nulla scelerisque risus accumsan,
            eget malesuada est vestibulum. Duis volutpat sollicitudin turpis, quis ullamcorper nisi. Nulla porttitor
            fermentum magna in cursus. Quisque id turpis eget velit ultrices fermentum. Nullam eleifend velit id elit
            suscipit, ac tincidunt orci tempor. Curabitur nec ultrices nisi, quis aliquam risus. Duis ex ligula,
            viverra
            eu ipsum at, dignissim faucibus magna. Maecenas aliquet, ipsum ut porttitor viverra, erat mauris sagittis
            lectus, at iaculis metus orci id ante.

            Nullam at tincidunt purus, eget facilisis velit. Duis in leo tellus. Donec ut diam dapibus, volutpat mi
            at,
            maximus est. Praesent ornare ex massa, a semper nisi molestie at. Aenean quis lectus finibus ex mollis
            posuere a et erat. Fusce vehicula tempor facilisis. Vestibulum dignissim et urna nec gravida. Etiam
            iaculis
            leo in accumsan egestas. Aenean nec erat quis augue ultrices efficitur ut cursus enim. Vivamus pulvinar,
            ipsum in facilisis tristique, libero sem vehicula nulla, eu convallis purus mauris non erat. Quisque
            malesuada mi sem, eget placerat sem gravida vel. Proin blandit pretium ante.
          </p>

        </v-col>



      </v-row>
    </v-container>
  </section>
  <!-- <vue-particles
       color="#7aafff"
       :particleOpacity=".2"
       :particlesNumber="75"
       shapeType="circle"
       :particleSize="2.5"
       linesColor="#dedede"
       :linesWidth="1"
       :lineLinked="true"
       :lineOpacity="0.4"
       :linesDistance="150"
       :moveSpeed="3"
       :hoverEffect="true"
       hoverMode="grab"
       :clickEffect="true"
       clickMode="push"
       style="z-index: 1;"
       class="particles3"
     >
     </vue-particles> -->


</template>


<script>


  export default {

    name: "About.vue",
    data: () => ({
      isIntersecting: false,
      watcher: false,
      options: {
        rootMargin: '200px',
        threshold: 1.0
      }

    }),

    methods: {

      onIntersect(entries, observer) {

        if (this.watcher == false) {
          this.isIntersecting = entries[0].intersectionRatio >= 0.5

          console.log(this.isIntersecting)

          if (this.isIntersecting == true) {

            this.isIntersecting = true;
            this.watcher = true;



          }


        }
      }
    },

    created() {

    }


  }

</script>


<style scoped>
  p{
    padding: 5vh;
    text-align: justify;
  }
  .col1 {
    transition: 2s;
    z-index: 99;
    animation: animationcol1 .5s ease-out forwards
  }

  .col2 {
    transition: 2s;
    z-index: 99;
    animation: animationcol2 .5s ease-out forwards
  }

  @keyframes animationcol1 {
    from {

    }

    to {
      opacity: 1;
      -webkit-transform: translateX(0vw);
      -moz-transform: translateX(0vw);
      -ms-transform: translateX(0vw);
      -o-transform: translateX(0vw);
      transform: translateX(0vw);
    }
  }

  @keyframes animationcol2 {
    from {

    }

    to {
      opacity: 1;
      -webkit-transform: translateX(0vw) translateY(0vh);
      -moz-transform: translateX(0vw) translateY(50vh);
      -ms-transform: translateX(0vw) translateY(50vh);
      -o-transform: translateX(0vw) translateY(50vh);
      transform: translateX(0vw) translateY(30vh);
    }
  }

  .col3 {
    transition: 2s;
    z-index: 99;
    animation: animationcol3 2.5s ease-out forwards
  }

  @keyframes animationcol3 {
    from {

    }

    to {
      opacity: 1;
      -webkit-transform: translateX(0vw) translateY(50vh);
      -moz-transform: translateX(0vw) translateY(50vh);
      -ms-transform: translateX(0vw) translateY(50vh);
      -o-transform: translateX(0vw) translateY(50vh);
      transform: translateX(0vw) translateY(50vh);
    }
  }

  .particles3 {


    background-color: transparent;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .wrap-banner {
    position: relative;
    -ms-flex-align: center;
    -webkit-box-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
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


</style>
