<template>
  <div class="table">
    <button
      class="openbtn"
      :style="{
        backgroundColor: isTableOccupied ? 'aqua' : '#111',
      }"
      @click="openNav"
    >
      ☰ Table {{ table.Number }}
    </button>
    <div
      class="sidepanel"
      :style="{
        height: isCollapsed ? '250px' : '0px',
      }"
    >
      <a href="#" @click="setOccupied">Serve table</a>
      <a style="cursor:pointer;" @click="getOrders">Orders</a>
    </div>
  </div>
</template>
<script>
import { Table } from "../../models/Table";
export default {
  name: "Table",
  data() {
    return {
      isCollapsed: false,
    };
  },
  props: {
    table: {
      type: Table,
    },
  },
  computed: {
    className() {
      return this.isTableOccupied ? "sidepanel occupied" : "sidepanel";
    },
    isTableOccupied() {
      return this.table.IsOccupied;
    },
  },
  methods: {
    setOccupied() {
      this.$store.dispatch("setOccupied", this.table);
    },
    openNav() {
      this.isCollapsed = !this.isCollapsed;
    },
    reserveTable() {
      this.$store.dispatch("reserveTable", this.table);
    },
    getOrders() {
      this.isCollapsed = false;
      this.$store.dispatch("setCurrentTable", this.table.Number);
    },
  },
};
</script>
<style>
.table {
  margin: 10px;
}
.sidepanel {
  background-color: #111;
  width: 250px;
  position: inherit;
  z-index: 1;
  height: 250px;
  overflow-x: hidden;
  transition: 0.5s;
}

.sidepanel a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidepanel a:hover {
  color: #f1f1f1;
}
.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
  width: 250px;
}

.openbtn:hover {
  background-color: #444;
}
</style>
