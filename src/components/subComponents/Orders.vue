<template>
  <div>
    <Order
      v-for="(orderItem, index) in orderItems"
      :tableNumber="orderItem.TableNumber"
      :key="index"
      :orderItems="orderItem.Orders"
    />
  </div>
</template>

<script>
import Order from "./Order";
export default {
  name: "Orders",
  components: {
    Order
  },
  data() {
    return {
      orderItems: []
    };
  },
  props: { orders: { type: Object, default: () => ({}) } },
  watch: {
    orders(newVal) {
      console.info("orders changedddd", newVal);
      this.orderItems = Object.values(newVal);
    }
  }
};
</script>

<style lang="scss"></style>
