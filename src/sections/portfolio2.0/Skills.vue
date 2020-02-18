<template>
  <section>
    <v-container class="z-index-99">
      <v-row style="margin-top: 100px; margin-bottom: 100px;" class="z-index-99">
        <v-col cols="12"
               v-bind:class="{clickable: isIntersecting }"
               v-intersect="{
                handler: onIntersect,
                options: {
                threshold: [0, 0.5, 1.0]
            }
          }"
        >
          <article>


            <div class="row-left" v-bind:class="{col1active: isIntersecting }">
              <v-row
                class=" grow"
                style="padding-top: 50px;"
              >
                <v-spacer/>

                <v-col
                  cols="2"
                  class="  rotate-icon "
                  style="background: transparent; "
                >
                  <v-icon size="100px" color="white" style="border: solid;  border-color: white;">book</v-icon>

                </v-col>

                <v-col
                  cols="3"

                  style=" margin-top: 20px; margin-left: 20px; "
                >
                <span
                  style="font-family: 'Michroma', cursive;  font-size: xx-large;"

                >
                  Excelência
                  <br/>
                </span>
                </v-col>

              </v-row>
            </div>

            <!--- ROW 2 -->
            <div class="row-right" v-bind:class="{col1active: isIntersecting }">
              <v-row
                class="grow "
                style=" padding-top: 55px"

              >
                <v-spacer/>
                <v-col
                  cols="2"
                  class="rotate-icon"
                  style="background-color: transparent">
                  <v-icon color="white" size="100px" style="border: solid;  border-color: white;">info</v-icon>
                </v-col>
                <v-col cols="5" style="padding-top: 50px; ">
                <span
                  style="font-family: 'Michroma', cursive;  font-size: xx-large;"
                >Qualidade
                  <br/>
                </span>
                </v-col>
              </v-row>
            </div>
            <!--- ROW 3 -->
            <div class="row-left" v-bind:class="{col1active: isIntersecting }">
              <v-row
                class="grow "
                style=" padding-top: 55px"

              >
                <v-spacer/>
                <v-col
                  cols="2"
                  class="rotate-icon"
                  style="background-color: transparent; ">
                  <v-icon color="white" size="100px" style="border: solid;  border-color: white;">school</v-icon>
                </v-col>

                <v-col
                  cols="7"
                  style="align-self: center; "
                >
                <span
                  style="font-family: 'Michroma', cursive;  font-size: xx-large; "
                >
                  Proatividade
                  <br/>
                </span>
                </v-col>
              </v-row>
            </div>

            <div class="row-right" v-bind:class="{col1active: isIntersecting }">
              <v-row
                class="grow "
                style="  padding-top: 55px"

              >
                <v-spacer/>
                <v-col
                  cols="2"
                  class="rotate-icon"
                  style="background-color: transparent; "
                >"
                  >
                  <v-icon color="white" size="100px" style="border: solid;  border-color: white;">work</v-icon>
                </v-col>
                <v-spacer/>
                <v-col
                  cols="8"
                >
                <span
                  style="font-family: 'Michroma', cursive;  font-size: xx-large; "
                >
                  Problem Solver Mindset
                </span>
                </v-col>
              </v-row>
            </div>
          </article>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  export default {
    name: "Skills.vue",

    data: () => ({
      isIntersecting: false,

    }),


    methods: {
      onIntersect(entries, observer) {
        this.isIntersecting = entries[0].intersectionRatio >= 0.5
        if (this.isIntersecting == true) {
          this.isIntersecting = true;
        }
        console.log('caiu', this.isIntersecting)
      },
    }
  }
</script>

<style scoped>
  .clickable {
    animation: clickable 1s 1s forwards linear;
  }

  @keyframes clickable {
    from {
      z-index: 0;
    }
    to {
      z-index: 99;
    }
  }

  .row-left {
    transition: 1s;
    -webkit-transform: translateX(-100vw);
    -moz-transform: translateX(-100vw);
    -ms-transform: translateX(-100vw);
    -o-transform: translateX(-100vw);
    transform: translateX(-100vw);
  }

  .row-right {
    transition: 1s;
    -webkit-transform: translateX(100vw);
    -moz-transform: translateX(100vw);
    -ms-transform: translateX(100vw);
    -o-transform: translateX(100vw);
    transform: translateX(100vw);
  }

  .col1active {
    transition: 1s;
    animation: translate0 1s forwards ease-out;

  }

  .grow {
    transition: 1s;
  }

  .grow:hover {
    transform: scale(1.1);
  }


  @keyframes translate0 {
    from {

    }
    to {
      -webkit-transform: translateX(0vw);
      -moz-transform: translateX(0vw);
      -ms-transform: translateX(0vw);
      -o-transform: translateX(0vw);
      transform: translateX(0vw);
    }

  }

  .grow {
    transition: 1s;
  }

  .grow:hover {
    transform: scale(1.1);
  }

  .rotate-icon {
    transition: 1s;
  }

  .grow:hover .rotate-icon {
    transform: rotateZ(0deg) !important;
    background-color: white;
  }

  .rotate-icon {
    transform: rotateZ(-10deg);
  }


  .v-icon {
    filter: blur(0.007em);
    animation: shake 2.5s linear infinite;

  }


  .teste {
    filter: blur(0.007em);
    animation: shake 2.5s linear infinite;
  }

  span {

    text-align: center;
    position: absolute;
    font-family: 'Michroma', Arial, sans-serif;
    font-size: calc(5px + .6vw);
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
