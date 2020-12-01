<template>
  <div v-if="currentTableNumber && orderChangeIsRequested">
    <button
      type="button"
      class="close"
      data-dismiss="modal"
      aria-label="Close"
      @click="orderChangeIsRequested = false"
    >
      <span aria-hidden="true">X</span>
    </button>

    <div class="row">
      <div class="col-md-8">
        <h2>Table {{ currentTableNumber }}</h2>
        <menu-group
          v-for="key in menuItemTypes"
          :key="key"
          @addMenuItem="addMenuItemToOrders"
          :menuGroupItems="grouppedFoods[key]"
          :groupTitle="key"
        />
      </div>

      <div class="col-md-4">
        <Receipt
          title="exsisting orders"
          v-if="tableHasOrders"
          :receiptItems="ordersForCurrentTable"
        />
        <Receipt
          title="new orders"
          v-if="tableHasNewOrders"
          :receiptItems="newOrders"
        />
        <button
          type="button"
          v-if="tableHasOrders || tableHasNewOrders"
          @click="sendOrdersToKitchen"
        >
          Send Order
        </button>
      </div>
    </div>
  </div>
</template>
<script>
// import { PopupModal } from "../genericComponents";
import { MenuItemType } from "../../constants/MenuItemTypes";
import MenuGroup from "../subComponents/MenuGroup";
import Receipt from "../subComponents/Receipt";
import { OrderRequest } from "../../models/OrderRequest";
import { OrderItem } from "../../models/OrderItem";
import Guid from "guid";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const lodash = require("lodash");

export default {
  name: "CreateOrder",
  components: {
    MenuGroup,
    // PopupModal,
    Receipt,
  },
  data() {
    return {
      orderRequest: undefined,
      menuItemTypes: MenuItemType,
      orderChangeIsRequested: true,
      noteForOrderItem: null,
      currentItem: {},
    };
  },
  watch: {
    currentTableNumber(tableNumber) {
      this.orderRequest = new OrderRequest(tableNumber);
      this.orderChangeIsRequested = true;
    },
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
      return this.$store.getters.getOrderByTableNumber(this.tableNumber)
        ? this.$store.getters.getOrderByTableNumber(this.tableNumber).Orders
        : [];
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
    },
  },
  methods: {
    addMenuItemToOrders(menuItem) {
      this.orderRequest.Orders.push(
        new OrderItem(menuItem, "", "", Guid.raw())
      );
    },

    sendOrdersToKitchen() {
      const request = new OrderRequest(this.currentTableNumber);
      request.Orders = this.allOrders;
      this.$store.dispatch("setOrders", request);
      this.orderChangeIsRequested = false;
    },
  },
};
</script>
<style lang="scss">
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
