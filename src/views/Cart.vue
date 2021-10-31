<template>
  <div v-for="items in cart" :key="items.id">
    <div v-for="item in items" :key="item.id">
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>{{ item.product.name }}</strong>
          <br />
          {{ item.quantity }} x ${{ item.product.price }}
        </div>
        <div>
          <a
            href="#"
            class="badge badge-secondary"
            @click.prevent="removeProductFromCart(item.product)"
            >remove</a
          >
        </div>
      </div>
      <hr />
    </div>
   
    <div class="d-flex justify-content-between">
      
      <span>Total: ${{  totlalPrice }} </span>
      <hr>
      <a href="#" @click.prevent="clearCartItems()">Clear Cart</a>
    </div>
  </div>
</template>

<script>
import {  mapActions } from "vuex";
export default {
  data() {
    return {
      cart: this.$store.state.cart,
    };
  },
  methods: {
    ...mapActions("cart", ["removeProductFromCart", "clearCartItems"]),
  },
  computed: {
    totlalPrice() {
      let total = 0;
      this.$store.state.cart.cart.forEach((item) => {
        total += item.product.price * item.quantity;
      });
      return total;
    },
  },
};
</script>

<style>
</style>