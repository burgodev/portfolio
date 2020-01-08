<template>
  <div>
    <section class="section">
      <div class="content2">
      </div>

    </section>


  </div>
</template>

<script>
  import RotatingCards from '../general/RotatingCards'
  export default {
    Components:{
      RotatingCards
    },
    name: "About.vue"
  }
</script>

<style scoped>


  .section {
    position: inherit;
    top: 50%;
    left: 50%;
    background: white;
    display: flex;
  }

  .content1 {
    width: 50%;
    height: 100%;
    background: #000;
    box-sizing: border-box;

  }

  .content2 {
    width: 50%;
    height: 100%;
    background: white;
    box-sizing: border-box;
    /*border-left: 220vh solid #cbe9ff;*/
    border-left: 220vh solid black;
    border-bottom: 400px solid transparent;
    background-position: -100px -150px;

  }
</style>