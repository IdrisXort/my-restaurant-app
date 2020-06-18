<template>
  <div v-if="currentTableNumber && orderChangeIsRequested">
    <h2>Table {{ currentTableNumber }}</h2>
    <button class="closebtn" @click="orderChangeIsRequested = false">
      x
    </button>
    <menu-group
      v-for="key in menuItemTypes"
      :key="key"
      @addMenuItem="addMenuItemToOrders"
      :menuGroupItems="grouppedFoods[key]"
      :groupTitle="key"
    />
    <template v-if="tableHasOrders">
      Earlier Orders
      <div
        v-for="(orderItem, index) in ordersForCurrentTable"
        :key="orderItem.Order.Id + 'existing' + index"
      >
        <span>
          <span v-if="orderItem.Note">***</span>
          {{ orderItem.Order.Name }}---------------------------------{{
            orderItem.Order.UnitPrice
          }}</span
        >
      </div>
      <p v-if="tableHasNewOrders">
        Total already ordered ------------------------------------------{{
          totalCostOfExistingOrders
        }}
      </p>
    </template>
    <template v-if="tableHasNewOrders">
      New Orders
      <div
        v-for="(orderItem, index) in newOrders"
        :key="orderItem.Order.Id + 'new' + index"
      >
        <span>
          <span v-if="orderItem.Note">***</span>
          {{ orderItem.Order.Name }}---------------------------------{{
            orderItem.Order.UnitPrice
          }}</span
        >
        <button class="btn btn--increase" @click="beginToAddNote(orderItem)">
          Add Note
        </button>
        <!-- use the modal component, pass in the prop -->
        <PopupModal
          :showModal="addingNote"
          @close="addNote(orderItem)"
          buttonText="Add Note"
        >
          <template #body>
            <textarea class="orderNote" v-model="noteForOrderItem" />
          </template>
        </PopupModal>
        <button
          class="btn btn--decrease"
          @click="removeOrderItemFromOrders(orderItem)"
        >
          -
        </button>
      </div>
    </template>
    <p>Total ------------------------------------------{{ totalCost }}</p>
    <button @click="sendOrdersToKitchen">Send Order</button>
  </div>
</template>
<script>
import PopupModal from "../genericComponents/PopupModal";
import { MenuItemType } from "../../constants/MenuItemTypes";
import MenuGroup from "../subComponents/MenuGroup";
import { OrderRequest } from "../../models/OrderRequest";
import { OrderItem } from "../../models/OrderItem";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const lodash = require("lodash");

export default {
  name: "CreateOrder",
  components: {
    MenuGroup,
    PopupModal
  },
  data() {
    return {
      orderRequest: undefined,
      menuItemTypes: MenuItemType,
      orderChangeIsRequested: true,
      noteForOrderItem: null,
      addingNote: false
    };
  },
  watch: {
    currentTableNumber(tableNumber) {
      this.orderRequest = new OrderRequest(tableNumber);
      this.orderChangeIsRequested = true;
    }
  },
  computed: {
    grouppedFoods() {
      return lodash.groupBy(this.foods, "Type");
    },
    tableHasOrders() {
      return this.ordersForCurrentTable.length > 0;
    },
    tableHasNewOrders() {
      return this.orderRequest && this.orderRequest.Orders.length > 0;
    },
    currentTableNumber() {
      return this.$store.getters.currentTableNumber;
    },
    totalCostOfNewOrders() {
      return this.tableHasNewOrders
        ? this.orderRequest.Orders.reduce(this.add, 0)
        : 0;
    },
    totalCostOfExistingOrders() {
      return this.tableHasOrders
        ? this.ordersForCurrentTable.reduce(this.add, 0)
        : 0;
    },
    totalCost() {
      return this.totalCostOfExistingOrders + this.totalCostOfNewOrders;
    },
    tableNumber() {
      return this.$store.getters.currentTableNumber;
    },
    ordersForCurrentTable() {
      return this.$store.getters.getOrderByTableNumber(this.tableNumber) || [];
    },
    newOrders() {
      return this.orderRequest.Orders || [];
    },
    allOrders() {
      return this.tableHasOrders
        ? this.ordersForCurrentTable.concat(this.newOrders)
        : this.newOrders;
    },
    foods() {
      return Object.values(this.$store.getters.foods);
    }
  },
  methods: {
    add(total, itemToAdd) {
      return parseFloat(
        parseFloat(total, 0) + parseFloat(itemToAdd.Order.UnitPrice, 0)
      );
    },
    addMenuItemToOrders(menuItem) {
      this.orderRequest.Orders.push(new OrderItem({ menuItem }));
    },
    removeOrderItemFromOrders(orderItem) {
      const indexOfItem = this.orderRequest.Orders.indexOf(orderItem);
      this.orderRequest.Orders.splice(indexOfItem, 1);
    },
    sendOrdersToKitchen() {
      this.$store.dispatch("setOrders", {
        orders: this.allOrders,
        tableNumber: this.currentTableNumber
      });
      this.orderChangeIsRequested = false;
    },
    addNote(orderItem) {
      orderItem.Note = this.noteForOrderItem;
      this.noteForOrderItem = null;
      this.addingNote = false;
    },
    beginToAddNote(orderItem) {
      this.addingNote = true;
      this.noteForOrderItem = orderItem.Note;
    }
  }
};
</script>
<style lang="scss">
.closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
}
.orderNote {
  width: 250px;
  height: 250px;
}
.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  margin: 0 10px;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &--decrease {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }
  &--increase {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
  }
}
</style>
