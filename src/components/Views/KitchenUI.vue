<template>
  <div>
    <Orders :orders="orders" />
  </div>
</template>
<script>
import Orders from "../subComponents/Orders";
export default {
  name: "KitchenUI",
  components: {
    Orders
  },
  computed: {
    orders() {
      return this.$store.getters.orders;
    }
  }
};
</script>
