<template>
  <ul>
    <CreateOrder />
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
import Tables from "../subComponents/Tables";
import CreateOrder from "../forms/CreateOrder";
export default {
  name: "WaiterUI",
  components: {
    Tables,
    CreateOrder
  },
  computed: {
    tables() {
      return this.$store.getters.tables;
    },
  },
};
</script>
