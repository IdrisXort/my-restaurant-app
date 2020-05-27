<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <router-link to="add-menu-item">Add Food</router-link>
        <br />
        <router-link to="addStaff">Add Staff</router-link>
        <br />
        <router-link to="menu">Menu</router-link>
      </div>
      <router-view class="col-md-8" />
    </div>
  </div>
</template>
<script>
import { foodsRef } from "../../base";
export default {
  name: "AdminUI",
  mounted() {
    foodsRef.on("value", snap => {
      this.$store.dispatch("setFoods", snap.val());
    });
  }
};
</script>
