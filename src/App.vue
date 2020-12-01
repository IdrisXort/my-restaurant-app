<template>
  <div id="app" class="row">
    <div class="col-md-1"></div>
    <div class="col-md-10">
      <!-- <p>Admin UserInterface</p>
      <admin-u-i /> -->
      <p>Waiter/Guest UserInterface</p>
      <waiter-u-i />
      <p>Kitchen UserInterface</p>
      <kitchen-u-i />
    </div>
    <div class="col-md-1"></div>
  </div>
</template>

<script>
// import AdminUI from "./components/Views/AdminUI";
import WaiterUI from "./components/Views/WaiterUI";
import KitchenUI from "./components/Views/KitchenUI";
import { foodsRef } from "./base";

export default {
  name: "App",
  components: {
    // AdminUI,
    WaiterUI,
    KitchenUI
  },
  computed: {
    isAdmin() {
      return false;
    },
  },
  created() {
    foodsRef.on("value", (snap) => {
      this.$store.dispatch("setFoods", snap.val());
    });
    this.$store.dispatch("getTables");
  },
};
</script>

<style></style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
