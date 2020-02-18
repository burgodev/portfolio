<template>
  <section style="background-color: #222222">
    <v-container

      style="padding-left: 50px; padding-right: 50px;"
    >

      <!--- ROW 1 -->
      <v-row style="margin-top: 100px; margin-bottom: 100px;">
        <v-col cols="12">
          <article>

            <v-row
              class="grow"
              style="padding-top: 50px; "
            >

              <v-spacer/>
              <v-col
                cols="2"
                class="rotate-icon"
                style="background-color: #222222"

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
                  CSS 3
                  <br/>
                </span>
              </v-col>
            </v-row>


            <!--- ROW 2 -->
            <v-row
              class="grow"
              style=" padding-top: 55px"
            >

              <v-spacer/>
              <v-col
                cols="2"
                class="rotate-icon"
                style="background-color: #222222"

              >
                <v-icon color="white" size="100px" style="border: solid;  border-color: white;">info</v-icon>
              </v-col>
              <v-col cols="5" style="padding-top: 50px; ">
                <span
                  style="font-family: 'Michroma', cursive;  font-size: xx-large;"
                  >HTML 5
                  <br/>
                </span>
              </v-col>
            </v-row>

            <!--- ROW 3 -->
            <v-row
              class="grow"
              style=" padding-top: 55px"
            >
              <v-spacer/>
              <v-col
                cols="2"
                class="rotate-icon"
                style="background-color: #222222; transform: rotateZ(-10deg);">


                <v-icon color="white" size="100px" style="border: solid;  border-color: white;">school</v-icon>
              </v-col>

              <v-col
                cols="7"
                style="align-self: center; "
              >
                                    <span
                                      style="font-family: 'Michroma', cursive;  font-size: xx-large; "
                                    >
                                        JAVASCRIPT ES6+
                                        <br/>
                                    </span>
              </v-col>
            </v-row>

            <v-row
              class="grow"
              style="  padding-top: 55px"
            >
              <v-spacer/>
              <v-col
                cols="2"
                class="rotate-icon"
                style="transform: rotateZ(-10deg); background-color: #222222; transform: rotateZ(-10deg);"
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
                                       VUE JS
                                    </span>
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
    data: () => ({
      isIntersecting: false,
    }),

    methods: {
      teste() {
        alert('foi')
      }
    },
  }
</script>
<style lang="scss">

</style>


<style scoped>
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
