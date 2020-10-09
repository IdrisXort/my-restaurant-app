<template>
  <div class="row">
    <Table v-for="(table, index) in tables" :table="table" :key="index" />
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
