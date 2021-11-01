import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store"; 
import { sync } from 'vuex-router-sync'
const unsync = sync(store, router) // done. Returns an unsync callback fn

// bootstrap your app...

// During app/Vue teardown (e.g., you only use Vue.js in a portion of your app
// and you navigate away from that portion and want to release/destroy
// Vue components/resources)
unsync() // Unsyncs store from router
createApp(App).use(store).use(router).mount("#app");
