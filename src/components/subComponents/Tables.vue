<template>
  <div>
    <Table
      v-for="(table, index) in tables"
      :tableNumber="table.Number"
      :key="index"
    />
  </div>
</template>
<script>
import Table from "./Table";
export default {
  name: "Tables",
  components: {
    Table
  },
  props: {
    tables: {
      type: Array
    }
  }
};
</script>
<style></style>
