<template>
  <div>
    <CreateOrder />
    <tables :tables="tables" />
  </div>
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
