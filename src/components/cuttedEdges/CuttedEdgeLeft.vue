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
    name: "Teste.vue"
  }
</script>

<style scoped>
  .background {
    background-color: #121212;
    transform: rotate(-25deg);

  }

  .background2 {
    content: "";
    height: 100%;
    left: -150%;
    position: absolute;
    top: 0;
    transform: rotate(-25deg);
    width: 400%;


    background-color: #121212;
    content: "";
    height: 100%;
    left: -100%;
    position: absolute;
    top: 0;
    transform: rotate(-25deg);
    width: 300%;
  }

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
    /*border-right: 220vh solid #f5f5f5;*/
    border-right: 220vh solid black;
    border-bottom: 400px solid transparent;
    background-position: -100px -150px;
  }
</style>