<template>
  <div>
    <section class="section">
      <div class="content">
      </div>
    </section>
  </div>
</template>

<script>
  import RotatingCards from '../cards/RotatingCards'
  export default {
    Components:{
      RotatingCards
    },
    name: "CuttedEdgeLeft.vue"
  }
</script>

<style scoped>
  .section {
    position: inherit;
    top: 50%;
    left: 50%;
    background: #6a6a6a;
    display: flex;
  }

  .content {
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    border-right: 220vh solid #f5f5f5;
    border-bottom: 400px solid transparent;
    background: white -100px -150px;
  }
</style>