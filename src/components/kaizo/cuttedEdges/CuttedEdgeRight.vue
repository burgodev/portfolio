<template>
  <section class="section">
    <div class="content">
    </div>
  </section>
</template>

<script>

  export default {
    Components: {},
    name: "CuttedEdgeRight.vue"
  }
</script>

<style scoped>
  .section {
    position: inherit;
    top: 50%;
    left: 50%;
    background: white;
    display: flex;
    transform: translateY(-100px)
  }

  .content {
    width: 50%;
    height: 100%;
    background: #81755b;
    box-sizing: border-box;
    /*border-left: 220vh solid #cbe9ff;*/
    border-left: 220vh solid #f5f5f5;
    border-bottom: 400px solid transparent;
    background-position: -100px -150px;

  }
</style>