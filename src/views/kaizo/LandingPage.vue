<template>
  <div style="background-color: rgb(245, 245, 240)">

    <MemberArea/>
    <!--<KaizoHome/>

    <KaizoAbout/>
    <CuttedEdgeRight/>
    <ValueOffer/>
    <Contact/>
    <Footer/> -->
  </div>
</template>

<script>
  import MemberArea from '../../views/kaizo/MemberArea'
  import KaizoHome from '../../sections/kaizo/Home'
  import KaizoAbout from '../../sections/kaizo/About'
  import ValueOffer from '../../sections/kaizo/ValueOffer'
  import Contact from '../../sections/kaizo/Contact'
  import CuttedEdgeRight from '../../components/kaizo/cuttedEdges/CuttedEdgeRight'
  import CuttedEdgeLeft from '../../components/kaizo/cuttedEdges/CuttedEdgeLeft'
  import Footer from '../../components/kaizo/general/Footer'

  export default {
    name: "LandingPage.vue",
    components:{
      KaizoHome,
      KaizoAbout,
      ValueOffer,
      Contact,
      CuttedEdgeRight,
      CuttedEdgeLeft,
      Footer,
      MemberArea

    }
  }
</script>

<style scoped>

</style>