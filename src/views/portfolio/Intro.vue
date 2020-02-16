<template>
  <div class="wrap-banner">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.3"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="2"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.3"
      :linesDistance="200"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      style="z-index: 1;"
      class="particles"

    >

    </vue-particles>
    <section class="back " style=" overflow: hidden; z-index: 99;">
      <kinesis-container v-bind:class="{blackout: turnBlack}" :duration="duration">
        <kinesis-element type="depth"
                         :strength="strength">
          <video-background
            ref="video"
            :loop="loop"
            :autoplay="autoplay"
            :muted="muted"
            :src="require('../../assets/Video Intro.mp4')"
            @ended="videoEnded()"
            class="video-size"
          >

            <v-row class="justify-center intro-row " v-bind:class="{clear: clear}">
              <v-col cols="3" class="  rotate-90 col1" style="height: 100vh;"
                     v-bind:class="{ rotate1: rotate1 }"></v-col>
              <v-col cols="3" class="  rotate-90 col2 " style="background-position-x: 30%"
                     v-bind:class="{ rotate2: rotate2 }">


              </v-col>
              <v-col cols="3" class=" rotate-90 col3" style="background-position-x: 60%"
                     v-bind:class="{ rotate3: rotate3 }">


              </v-col>
              <v-col cols="3" class=" rotate-90 col4" style="background-position-x: 90%"
                     v-bind:class="{ rotate4: rotate4 }"></v-col>


              <v-col cols="12" class="text-center btn-col " v-if="!playing">
                <button
                  @click="play()"
                  style=" transform: translateY(-60vh); "
                  type="button"><h1>INICIALIZAR</h1>
                </button>
              </v-col>
            </v-row>


          </video-background>
        </kinesis-element>
      </kinesis-container>
    </section>



  </div>


  <!-- <section class="back " style=" overflow: hidden;">


     <kinesis-container v-bind:class="{blackout: turnBlack}" :duration="duration">
       <kinesis-element type="depth"
                        :strength="strength">
         <video-background
           ref="video"
           :loop="loop"
           :autoplay="autoplay"
           :muted="muted"
           :src="require('../../assets/Video Intro.mp4')"
           @ended="videoEnded()"
           class="video-size"

         >


           <v-row class="justify-center intro-row " v-bind:class="{clear: clear}">
             <v-col cols="3" class=" black rotate-90 " style="height: 100vh;"
                    v-bind:class="{ rotate1: rotate1 }"></v-col>
             <v-col cols="3" class="black  rotate-90 " style="background-position-x: 30%"
                    v-bind:class="{ rotate2: rotate2 }">


             </v-col>
             <v-col cols="3" class="black rotate-90" style="background-position-x: 60%"
                    v-bind:class="{ rotate3: rotate3 }">


             </v-col>
             <v-col cols="3" class="black rotate-90" style="background-position-x: 90%"
                    v-bind:class="{ rotate4: rotate4 }"></v-col>

             <v-col cols="12" class="text-center btn-col" v-if="!playing">


                             <v-btn
                               color="white"
                               large
                               outlined
                               rounded
                               v-if="!playing"
                               @click="play()"
                               text
                               style=" transform: translateY(-65vh); font-family: 'Michroma', sans-serif; font-size: 80px;"


                             > Inicializar
                             </v-btn>

               <button
                 @click="play()"
                 style="color: white; transform: translateY(-60vh); "
                 type="button"><h1>INICIALIZAR</h1>
               </button>


             </v-col>
           </v-row>


         </video-background>
       </kinesis-element>

     </kinesis-container>
   </section> -->
</template>


<script>
  export default {
    data: () => ({
      muted: false,
      clear: false,
      loop: false,
      autoplay: false,
      playing: false,
      rotate1: false,
      showBtn: false,
      rotate2: false,
      rotate3: false,
      rotate4: false,
      i: 1,
      strength: 50,
      duration: 1500,
      turnBlack: false,
    }),


    methods: {
      play() {
        this.rotateCols();
        let me = this;
        this.playing = true;
        this.strength = 20;

        setTimeout(function () {
          me.turnBlack = true;
          me.$refs.video.player.play();


        }, 400)
      },

      rotateCols() {
        let col1 = document.querySelector('.col1')
        let col2 = document.querySelector('.col2')


        col1.setAttribute("style", "background-color: black ;")
        col2.setAttribute("style", "background-color: black ;")


        this.rotate1 = true;
        this.rotate2 = true;
        this.rotate3 = true;
        this.rotate4 = true;
      },

      videoEnded() {
        this.clear = true;
        this.$router.replace('/home');
      },

    },

    created() {


    },

    mounted() {

    }
  }


</script>


<style scoped>
  btn:focus {
    outline: none;
  }

  /*

    h1::after {
      content: '|';
      opacity: 1;
      margin-left: 5px;
      display: inline-block;
      animation: blink .7s infinite;

    }


    h1 {
      font-family: 'Michroma', sans-serif;
      font-size: 40px;
    }

  */


  .col1 {

  }

  .intro-row {
    width: 100vw;
    height: 100vh;
    background-color: transparent;

  }

  .clear {
    animation: turnwhite 2s forwards ease-in;
  }

  .intro-col {
    align-self: center;
    text-align: -webkit-center;
    text-align: -moz-center;
    text-align: center;
  }

  .video-size {
    height: 100vh;
    width: 100vw;
  }


  .opacity-0 {
    opacity: 0;
  }

  .rotate-90 {
    transform: rotateY(90deg);
  }

  .rotate1 {


    animation: rotate forwards 1.5s;
  }

  .rotate2 {


    animation: rotate forwards 1.5s .2s;
  }

  .rotate3 {


    animation: rotate forwards 1.5s .4s;
  }

  .rotate4 {


    animation: rotate forwards 1.5s .6s;
  }

  @keyframes rotate {

    90% {
      transform: rotateY(0deg);
      opacity: 1;
    }
    100% {

      opacity: 0;
      transform: rotateY(0deg);
    }
  }

  @keyframes turnwhite {
    50% {
      background-color: transparent;
    }
    100% {
      background-color: white;
    }

  }


  .back {

    height: 100vh;
    width: 100vw;
  }

  .btn-col {
    height: 0vh;
    width: 0vw
  }

  .blackout {
    transition: 1.5s;
    background-color: black !important;
  }


  /* teste */

  .particles {
    background-image: url('../../assets/tech.jpg');

    background-color: #222222;
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


  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #000;
    overflow: hidden;
  }

  h1 {
    right: -30vh;
    top: -2vh;

    position: absolute;
    font-family: 'Montserrat', Arial, sans-serif;
    font-size: calc(20px + 3vw);
    font-weight: 700;
    color: #dedede;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-shadow: 0 0 0.15em lightgrey;
    user-select: none;
    white-space: nowrap;
    filter: blur(0.007em);
    animation: shake 2.5s linear infinite;
  }

  h1 span {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    -webkit-clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);
    clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);
  }

  h1::before,
  h1::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
  }

  h1::before {
    animation: crack1 2.5s linear forwards;
    -webkit-clip-path: polygon(0% 0%, 10% 0%, 55% 100%, 0% 100%);
    clip-path: polygon(0% 0%, 10% 0%, 55% 100%, 0% 100%);
  }

  h1::after {
    animation: crack2 2.5s linear forwards;
    -webkit-clip-path: polygon(44% 0%, 100% 0%, 100% 100%, 70% 100%);
    clip-path: polygon(44% 0%, 100% 0%, 100% 100%, 70% 100%);
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

  @keyframes crack1 {
    0%, 95% {
      transform: translate(-50%, -50%);
    }

    100% {
      transform: translate(-51%, -48%);
    }
  }

  @keyframes crack2 {
    0%, 95% {
      transform: translate(-50%, -50%);
    }

    100% {
      transform: translate(-49%, -53%);
    }
  }



</style>
