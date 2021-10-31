import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product",
    name: "Product", 
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Product.vue"),
  },
  {
    path: "/product/:id",
    name: "SingleProduct", 
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SingleProduct.vue"),
  },
  {
    path: "/cart",
    name: "cart", 
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
