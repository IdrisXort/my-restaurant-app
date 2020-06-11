<template>
  <div v-if="currentTableNumber && orderChangeIsRequested">
    <h2>Table {{ currentTableNumber }}</h2>
    <menu-group
      v-for="key in menuItemTypes"
      :key="key"
      @addMenuItem="addMenuItemToOrders"
      @removeMenuItem="removeMenuItemFromOrders"
      :menuGroupItems="grouppedFoods[key]"
      :groupTitle="key"
    />
    <template v-if="tableHasOrders">
      Earlier Orders
      <div v-for="(item, index) in ordersForCurrentTable" :key="index">
        <span
          >{{ item.Name }}---------------------------------{{
            item.UnitPrice
          }}</span
        >
      </div>
    </template>
    <template v-if="tableHasNewOrders">
      New Orders
      <div v-for="(item, index) in newOrders" :key="index">
        <span
          >{{ item.Name }}---------------------------------{{
            item.UnitPrice
          }}</span
        >
      </div>
    </template>
    <p>Total ------------------------------------------{{ totalCost }}</p>
    <button @click="sendOrdersToKitchen">Send Order</button>
  </div>
</template>
<script>
import { MenuItemType } from "../../constants/MenuItemTypes";
import MenuGroup from "../subComponents/MenuGroup";
import { OrderRequest } from "../../models/OrderRequest";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const lodash = require("lodash");

export default {
  name: "CreateOrder",
  components: {
    MenuGroup
  },
  data() {
    return {
      orderRequest: undefined,
      menuItemTypes: MenuItemType,
      orderChangeIsRequested: true
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
    totalCost() {
      return this.orderRequest && this.orderRequest.Orders
        ? this.orderRequest.Orders.reduce(this.add, 0)
        : 0;
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
        parseFloat(total, 0) + parseFloat(itemToAdd.UnitPrice, 0)
      );
    },
    addMenuItemToOrders(menuItem) {
      this.orderRequest.Orders.push(menuItem);
    },
    removeMenuItemFromOrders(menuItem) {
      const indexOfItem = this.orderRequest.Orders.indexOf(menuItem);
      if (indexOfItem >= 0) {
        this.orderRequest.Orders.splice(indexOfItem, 1);
      }
    },
    sendOrdersToKitchen() {
      this.$store.dispatch("setOrders", {
        orders: this.allOrders,
        tableNumber: this.currentTableNumber
      });
      this.orderChangeIsRequested = false;
    }
  }
};
</script>
