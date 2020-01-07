<template>
  <v-container fluid class="white align-center" >
      <section class="image-cards mt-3 mx-5 mx-auto" >
        <div class="image-cards__content">
          <a
            target="_blank"
            class="image-cards__item d-flex align-items-center justify-content-center"
            href="https://vuejs.org/"
          ></a>
          <a
            target="_blank"
            class="image-cards__item d-flex align-items-center justify-content-center"
            href="https://vuetifyjs.com/pt-BR/"
          ></a>
          <a
            target="_blank"
            class="image-cards__item d-flex align-items-center justify-content-center"
            href="https://github.com/"
          ></a>
        </div>
      </section>
  </v-container>
</template>

<script>
  import {isMobile} from "mobile-device-detect";

  export default {
    name: "Products",

    data: () => ({
      mobile: isMobile ? true : false
    }),

    methods: {
      initialize() {
      },

      created() {
        this.initialize();
      }
    }
  };
</script>

<style lang="scss" scoped>
  .image-cards {
    position: relative;
    /*width: 80vw; */
    height: 60vw;
    max-width: 580px;
    max-height: 450px;
    margin: 0;
    color: white;
    perspective: 1000px;
    transform-origin: center;

    &__content {
      position: absolute;
      width: 100%;
      height: 100%;
      transform-origin: center;
      transform-style: preserve-3d;
      transform: translateZ(-30vw) rotateY(0);
      animation: carousel 7s infinite cubic-bezier(0.77, 0, 0.175, 1) forwards;

      &.step-animation {
        animation: carousel 7s infinite steps(1) forwards;
      }
    }

    &__item {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100vw;
      height: 80vw;
      max-width: 580px;
      max-height: 450px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
      border-radius: 80px;
      transform-origin: center;
      cursor: pointer;

      &:nth-child(1) {
        border-radius: 30px;
        background: rgba(255, 255, 255, 0.95);
        background: url("../../assets/vue.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        transform: rotateY(0) translateZ(35vw);
      }

      &:nth-child(1):hover {
        background-image: linear-gradient(to right bottom,
          rgb(63, 185, 132, 0.2),
          rgba(63, 185, 132, 0.2)
        ),
        url("../../assets/vue.png");
        /* transform: rotateY(360deg); */
        transition: 1s;
      }

      &:nth-child(2) {
        border-radius: 30px;
        background: rgba(255, 255, 255, 0.95);
        background-image: url("https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        transform: rotateY(120deg) translateZ(35vw);
      }

      &:nth-child(2):hover {
        background-image: linear-gradient(
            to right bottom,
            rgba(169, 244, 255, 0.2),
            rgba(23, 176, 199, 0.2)
        ),
        url("https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png");
        /*  transform: rotateY(480deg); */
        transition: 1s;
      }

      &:nth-child(3) {
        border-radius: 30px;
        background: rgba(255, 255, 255, 0.95);
        background-image: url("../../assets/github.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        transform: rotateY(240deg) translateZ(35vw);
      }

      &:nth-child(3):hover {
        background-image: linear-gradient(to right bottom,
          rgb(23, 21, 22, 0),
          rgba(23, 21, 22, 0)
        ),
        url("../../assets/github.png");
        /* transform: rotateY(540deg); */
        transition: 1s;
      }
    }
  }

  html,
  body {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #101010;
  }

  @keyframes carousel {
    0%,
    12.5% {
      transform: translateZ(-35vw) rotateY(0);
    }
    25%,
    42.5% {
      transform: translateZ(-35vw) rotateY(-120deg);
    }
    57.5%,
    75% {
      transform: translateZ(-35vw) rotateY(-240deg);
    }
    90%,
    100% {
      transform: translateZ(-35vw) rotateY(-360deg);
    }
  }

  //Caindo/Pingando Animação
  @keyframes jelly {
    from {
      transform: scale(1, 1);
    }
    30% {
      transform: scale(1.25, 0.75);
    }
    40% {
      transform: scale(0.75, 1.25);
    }
    50% {
      transform: scale(1.15, 0.85);
    }
    65% {
      transform: scale(0.95, 1.05);
    }
    75% {
      transform: scale(1.05, 0.95);
    }
    to {
      transform: scale(1, 1);
    }
  }
</style>
