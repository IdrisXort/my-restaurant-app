<template>
  <div class="col">
    <div class="row">
      <div class="col-md-12 alert alert-info" role="alert">
        <h2>Table number {{ tableNumber }}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 alert alert-danger" role="alert">
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

      <div class="col-md-3  alert alert-warning" role="alert">
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
      <div class="col-md-3  alert alert-success" role="alert">
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
            <button :key="order.OrderItemId" @click="setDelievered(order)">
              setDelievered
            </button>
          </li>
        </ul>
      </div>
      <div class="col-md-3  alert alert-secondary" role="alert">
        Delievered
        <ul
          :key="order.OrderItemId"
          class="list-group"
          v-for="order in delieveredOrders"
        >
          <br />
          <li class="list-group-item">
            <button
              :key="order.OrderItemId"
              @click="cancellationActivated = true"
            >
              setCancelled
            </button>
            <PopupModal
              :showModal="cancellationActivated"
              @close="setCancelled(order)"
              buttonText="Add Cancellation Note"
            >
              <template #body>
                <select v-model="order.CancellationReason">
                  <option v-for="option in cancellationReasons" :key="option">{{
                    option
                  }}</option>
                </select>
                {{ order.Name }}
                <textarea
                  :key="order.orderItemId"
                  class="orderNote"
                  v-model="order.CancellationReason"
                />
              </template>
            </PopupModal>
            {{ order.Name }}
            <span v-if="order.Note">*******{{ order.Note }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { PopupModal } from "../genericComponents";

import { OrderStatus } from "../../constants/OrderStatus";
import { FoodCancellationReasons } from "../../constants/cancellationReasons";
export default {
  name: "Order",
  components: {
    PopupModal,
  },
  data() {
    return {
      cancellationActivated: false,
    };
  },
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
    setDelievered(order) {
      this.$store.dispatch("setDelievered", order);
    },
    setCancelled(order) {
      this.$store.dispatch("setCancelled", order);
      this.cancellationActivated = false;
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
    delieveredOrders() {
      return (
        this.order.Orders.filter(
          (order) => order.OrderStatus === OrderStatus.Delievered
        ) || []
      );
    },
    cancelledOrders() {
      return (
        this.order.Orders.filter(
          (order) => order.OrderStatus === OrderStatus.Cancelled
        ) || []
      );
    },
    cancellationReasons() {
      return FoodCancellationReasons;
    },
  },
};
</script>

<style lang="scss"></style>
