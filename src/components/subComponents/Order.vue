<template>
  <div>
    <template>
      Table number {{ orderItems.TableNumber }}

      <ul v-for="(orderItem, index) in orderItems.Orders" :key="index">
        <p>{{ orderItem.Note }}</p>
        <br />
        <li>{{ orderItem.Order.Name }}</li>
      </ul>
      <hr />
    </template>
  </div>
</template>
<script>
export default {
  name: "Order",
  props: {
    orderItems: {
      type: Array
    },
    tableNumber: {
      type: String
    }
  }
};
</script>

<style lang="scss"></style>
