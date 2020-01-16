<template>
  <div>
    <Banner id="banner"/>
    <Tools id="tools"/>
    <Components id="components"/>
    <Mindset id="mindset"/>
    <Contact id="contact"></Contact>
  </div>
</template>

<script>
  import Banner from '../../sections/portfolio/Banner'
  import Tools from '../../sections/portfolio/Tools'
  import Components from '../../sections/portfolio/Components'
  import Contact from '../../sections/portfolio/Contact'

  export default {
    name: "LandingPage.vue",
    components: {
      Banner,
      Tools,
      Components,
      Contact
    }
  }
</script>

<style scoped>

</style>