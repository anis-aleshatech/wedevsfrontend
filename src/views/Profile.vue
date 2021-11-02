<template>
  <div class="profile">  
    <div v-for="permisssion of permissions" v-bind:key="permisssion.id">
    <div v-if="permisssions.name=='profile.view'">
          {{user.name}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "profile",
  data() {
    return {
      permissions: [],
      user: [],
    };
  },
  created() {
    this.permissions = this.permission;
    this.user = this.userData;
  },
  computed: {
    ...mapState("user", ["user"]),
    permission() {
      let total = [];
      if (this.$store.state.user.permission) {
        this.$store.state.user.permission.forEach((item) => {
          total.push(item.name);
        });
      }
      return total;
    },
    userData() {
      return this.$store.state.user;
    },
  },
};
</script>

<style>
.profile {
  padding: 50px;
  clear: both;
}
</style>