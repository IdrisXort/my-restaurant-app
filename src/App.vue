<template>
  <div id="app">
    <admin-u-i v-if="isAdmin" />
    <waiter-u-i />
  </div>
</template>

<script>
import AdminUI from "./components/Views/AdminUI";
import WaiterUI from "./components/Views/WaiterUI";
export default {
  name: "App",
  components: {
    AdminUI,
    WaiterUI
  },
  computed: {
    isAdmin() {
      return false;
    }
  }
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
