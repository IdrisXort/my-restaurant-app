<template>
  <ul class="list-group list-group-flush">
    {{
      title
    }}
    <receipt-item
      v-for="receiptItem in receiptItems"
      :receiptItem="receiptItem"
      :key="receiptItem.OrderItemId"
    />
    total -------
    {{
      totalCost
    }}
  </ul>
</template>

<script>
import ReceiptItem from "./ReceiptItem";
export default {
  name: "Receipt",
  components: {
    ReceiptItem,
  },
  props: {
    title: {
      type: String,
      required: false,
      default: "Receipt title",
    },
    receiptItems: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  computed: {
    totalCost() {
      return this.receiptItems.length
        ? this.receiptItems.reduce(this.add, 0)
        : 0;
    },
  },
  methods: {
    add(total, itemToAdd) {
      return parseFloat(
        parseFloat(total, 0) + parseFloat(itemToAdd.UnitPrice, 0)
      );
    },
  },
};
</script>
