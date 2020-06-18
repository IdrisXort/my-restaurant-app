<template>
  <div
    v-if="currentTableNumber && orderChangeIsRequested"
    tabindex="0"
    @keydown.esc="orderChangeIsRequested = false"
    ref="blaa"
  >
    <h2>Table {{ currentTableNumber }}</h2>
    <button class="closebtn" @click="orderChangeIsRequested = false">
      x
    </button>
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
      <div
        v-for="(item, index) in ordersForCurrentTable"
        :key="item.Id + 'existing' + index"
      >
        <span
          >{{ item.Name }}---------------------------------{{
            item.UnitPrice
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
      <div v-for="item in newOrders" :key="item.Id + 'new' + index">
        <span
          >{{ item.Name }}---------------------------------{{
            item.UnitPrice
          }}</span
        >
        <button class="btn btn--increase" @click="addMenuItemToOrders(item)">
          +
        </button>
        <button
          class="btn btn--decrease"
          @click="removeMenuItemFromOrders(item)"
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
  mounted(){
    this.$refs.blaa.focus()
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
<style lang="scss">
.closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
}
</style>
