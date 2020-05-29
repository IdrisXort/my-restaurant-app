<template>
  <ul>
    <router-view></router-view>
    <tables :tables="tables" />
    GARSON
    <li>masa hesabi ac</li>
    <li>sparis ver</li>
    <li>sparis iptal et</li>
    <li>sparis degistir</li>
    <li>yemek servis et</li>
    <li>aynan</li>
    <br />
  </ul>
</template>
<script>
import { foodsRef } from "../../base";
import Tables from "../subComponents/Tables";
export default {
  name: "WaiterUI",
  components: {
    Tables
  },
  created() {
    this.$store.dispatch("getTables");
  },
  mounted() {
    foodsRef.on("value", snap => {
      this.$store.dispatch("setFoods", snap.val());
    });
  },
  computed: {
    tables() {
      return this.$store.getters.tables;
    }
  }
};
</script>
