<template>
  <div>
    <section class="section">
      <div class="content">
      </div>
    </section>
  </div>
</template>

<script>

  export default {
    Components:{

    },
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
  }

  .content {
    width: 50%;
    height: 100%;
    background: white;
    box-sizing: border-box;
    /*border-left: 220vh solid #cbe9ff;*/
    border-left: 220vh solid #f5f5f5;
    border-bottom: 400px solid transparent;
    background-position: -100px -150px;

  }
</style>