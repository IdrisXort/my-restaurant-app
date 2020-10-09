<template>
  <li class="list-group-item">
    <span v-if="receiptItem.Note">***</span>
    {{ receiptItem.Name }}---------------------------------{{
      receiptItem.UnitPrice
    }}
    <button type="button" class="btn btn-warning" @click="addingNote = true">
      Add Note
    </button>
    <PopupModal :showModal="addingNote" @close="addNote" buttonText="Add Note">
      <template #body>
        {{ receiptItem.Name }}
      <textarea
          :key="receiptItem.orderItemId"
          class="orderNote"
          v-model="receiptItem.Note"
        />
      </template>
    </PopupModal>
    <button
      type="button"
      class="btn btn-danger"
      @click="removeOrderItemFromOrders(receiptItem)"
    >
      Remove
    </button>
  </li>
</template>

<script>
import { OrderItem } from "../../models/OrderItem";
import { PopupModal } from "../genericComponents";

export default {
  name: "ReceiptItem",
  components: {
    PopupModal,
  },
  data() {
    return {
      addingNote: false,
      noteForOrderItem: null,
      currentItem: {},
      goster: false,
    };
  },
  props: {
    receiptItem: {
      type: OrderItem,
      required: false,
    },
  },
  methods: {
    addNote() {
      this.addingNote = false;
      this.currentItem = {};
    },
    removeOrderItemFromOrders(orderItem) {
      const indexOfItem = this.orderRequest.Orders.indexOf(orderItem);
      this.orderRequest.Orders.splice(indexOfItem, 1);
    },
  },
};
</script>
