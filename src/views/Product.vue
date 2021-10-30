<template>
  <div class="product">
    <Product />
    <Product />
    <Product />
    <Product />
  </div>
</template>

<script>

import Product from "@/components/Product.vue";
export default {
 name: "ProductPage",
  components: {
    Product,
  },
}
</script>

<style scoped>
 
.product { 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  clear: both;
}
</style>
