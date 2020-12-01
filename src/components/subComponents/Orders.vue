<template>
  <div class="col">
    <order
      :order="order"
      :table-number="order.TableNumber"
      :key="order.TableNumber"
      v-for="order in orders"
    />
  </div>
</template>

<script>
import Order from "./Order";
export default {
  name: "Orders",
  components: {
    Order,
  },
  props: {
    orders: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    inboxOrders() {
      return [];
    },
    inProgressOrders() {
      return [];
    },
    doneOrders() {
      return [];
    },
  },
};
</script>
