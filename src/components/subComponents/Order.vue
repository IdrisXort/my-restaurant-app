<template>
  <div class="col">
    <div class="col-md-12 alert alert-info" role="alert" :key="tableNumber">
      <h2>Table number {{ tableNumber }}</h2>
    </div>
    <div class="row">
      <div class="col-md-4 alert alert-danger" role="alert" :key="tableNumber">
        Inbox
        <ul
          :key="index"
          class="list-group"
          v-for="(order, index) in order.Orders"
        >
          <br />
          <li class="list-group-item">
            {{ order.Name }}
            <span v-if="order.Note">*******{{ order.Note }}</span>
          </li>
        </ul>
      </div>

      <div
        class="col-md-4  alert alert-warning"
        role="alert"
        :key="order.TableNumber"
      >
        In Progress
        <ul
          :key="index"
          class="list-group"
          v-for="(order, index) in order.Orders"
        >
          <br />
          <li class="list-group-item">
            {{ order.Name }}
            <span v-if="order.Note">*******{{ order.Note }}</span>
          </li>
        </ul>
      </div>
      <div
        class="col-md-4  alert alert-success"
        role="alert"
        :key="order.TableNumber"
      >
        Done
        <ul
          :key="index"
          class="list-group"
          v-for="(order, index) in order.Orders"
        >
          <br />
          <li class="list-group-item">
            {{ order.Name }}
            <span v-if="order.Note">*******{{ order.Note }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
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
};
</script>

<style lang="scss"></style>
