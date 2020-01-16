<template>
  <div style="background-color: rgb(245, 245, 240)">
    <KaizoHome/>
    <KaizoAbout/>
    <CuttedEdgeRight/>
    <ValueOffer/>
  </div>
</template>

<script>
  import KaizoHome from '../../sections/kaizo/Home'
  import KaizoAbout from '../../sections/kaizo/About'
  import ValueOffer from '../../sections/kaizo/ValueOffer'
  import CuttedEdgeRight from '../../components/kaizo/cuttedEdges/CuttedEdgeRight'
  import CuttedEdgeLeft from '../../components/kaizo/cuttedEdges/CuttedEdgeLeft'

  export default {
    name: "LandingPage.vue",
    components:{
      KaizoHome,
      KaizoAbout,
      ValueOffer,
      CuttedEdgeRight,
      CuttedEdgeLeft
    }
  }
</script>

<style scoped>

</style>