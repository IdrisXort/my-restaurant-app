<template>
  <div class="col-md-3">
    <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              @click="openNav"
            >
              ☰ Table {{ table.Number }}
              <span v-if="tableHasDoneOrders">****</span>
            </button>
          </h2>
        </div>

        <div
          id="collapseOne"
          :class="isCollapsed ? 'collapse show' : 'collapse'"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <a class="row" href="#" @click="setOccupied">Serve table</a>
              </li>
              <li class="list-group-item">
                <a class="row" style="cursor:pointer;" @click="getOrders"
                  >Orders</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Table } from "../../models/Table";
import { OrderStatus } from "../../constants/OrderStatus";
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
    tableHasDoneOrders() {
      return (
        this.ordersForTable &&
        this.ordersForTable.some((a) => a.OrderStatus === OrderStatus.Done)
      );
    },
    ordersForTable() {
      const order = this.$store.getters.getOrderByTableNumber(
        this.table.Number
      );
      return order ? order.Orders : [];
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
