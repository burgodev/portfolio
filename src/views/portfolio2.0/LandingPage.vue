<template>
  <div >
    <Home/>
    <About/>
    <RotatingCards/>

    <Contact/>


   <vue-particles
     color="#dedede"
     :particleOpacity="0.3"
     :particlesNumber="45"
     shapeType="circle"
     :particleSize="2"
     linesColor="#dedede"
     :linesWidth="1"
     :lineLinked="true"
     :lineOpacity="0.3"
     :linesDistance="250"
     :moveSpeed="3"
     :hoverEffect="true"
     hoverMode="grab"
     :clickEffect="true"
     clickMode="push"
     style="z-index: 1;"
     class="particles"
    >
    </vue-particles>


  </div>




</template>

<script>
  import Home from '../../sections/portfolio2.0/Home'
  import Tools from '../../sections/portfolio2.0/Tools'
  import About from '../../sections/portfolio2.0/About'
  import Intro from '../../views/portfolio/Intro'
  import RotatingCards from '../../components/cards/RotatingCards'
  import PresentationCards from '../../components/cards/PresentationCards'
  import Contact from '../../sections/portfolio2.0/Contact'


  export default {
    components: {
      PresentationCards,
      Home,
      Tools,
      About,
      Intro,
      RotatingCards,
      Contact,
      PresentationCards

    },
    name: "LandingPage",

    data: () => ({}),
  }
</script>

<style scoped>
  .particles {


    background-color: transparent;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }


</style>
