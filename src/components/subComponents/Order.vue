<template>
  <div class="col">
    <div class="row">
      <div class="col-md-12 alert alert-info" role="alert">
        <h2>Table number {{ tableNumber }}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 alert alert-danger" role="alert">
        Inbox
        <ul
          :key="order.OrderItemId"
          class="list-group"
          v-for="order in inboxOrders"
        >
          <br />
          <li class="list-group-item">
            {{ order.Name }}
            <span v-if="order.Note">*******{{ order.Note }}</span>
            <button :key="order.OrderItemId" @click="setInProgress(order)">
              setInProgress
            </button>
          </li>
        </ul>
      </div>

      <div class="col-md-4  alert alert-warning" role="alert">
        In Progress
        <ul
          :key="order.OrderItemId"
          class="list-group"
          v-for="order in inProgressOrders"
        >
          <br />
          <li class="list-group-item">
            <button :key="order.OrderItemId" @click="setInbox(order)">
              setInbox
            </button>
            {{ order.Name }}
            <button :key="order.OrderItemId" @click="setDone(order)">
              setDone
            </button>
            <span v-if="order.Note">*******{{ order.Note }}</span>
          </li>
        </ul>
      </div>
      <div class="col-md-4  alert alert-success" role="alert">
        Done
        <ul
          :key="order.OrderItemId"
          class="list-group"
          v-for="order in doneOrders"
        >
          <br />
          <li class="list-group-item">
            <button :key="order.OrderItemId" @click="setInProgress(order)">
              setInProgress
            </button>
            {{ order.Name }}
            <span v-if="order.Note">*******{{ order.Note }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { OrderStatus } from "../../constants/OrderStatus";
export default {
  name: "Order",
  props: {
    order: {
      type: Object,
    },
    tableNumber: {
      type: Number,
    },
  },
  methods: {
    setInbox(order) {
      this.$store.dispatch("setInbox", order);
    },
    setInProgress(order) {
      this.$store.dispatch("setInProgress", order);
    },
    setDone(order) {
      this.$store.dispatch("setDone", order);
    },
  },
  computed: {
    inboxOrders() {
      return (
        this.order.Orders.filter(
          (order) => order.OrderStatus === OrderStatus.Inbox
        ) || []
      );
    },
    inProgressOrders() {
      return (
        this.order.Orders.filter(
          (order) => order.OrderStatus === OrderStatus.InProgress
        ) || []
      );
    },
    doneOrders() {
      return (
        this.order.Orders.filter(
          (order) => order.OrderStatus === OrderStatus.Done
        ) || []
      );
    },
  },
};
</script>

<style lang="scss"></style>
