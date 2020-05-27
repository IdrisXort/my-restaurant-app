<template>
  <button>{{ tableNumber }}</button>
</template>
<script>
export default {
  name: "Table",
  props: {
    tableNumber: {
      type: Number,
    },
  },
};
</script>
<style></style>
