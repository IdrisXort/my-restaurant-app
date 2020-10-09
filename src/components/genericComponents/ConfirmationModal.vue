<template>
  <div class="modal-backdrop" v-show="show">
    <div class="modal">
      <h1 class="text-center text-2xl font-bold mb-4">
        Are you sure?
      </h1>
      <slot name="input" />
      <div class="text-center">
        <button @click="cancel" type="button" class="btn btn-grey mr-4">
          {{ cancelButtonText }}
        </button>
        <button @click="confirmAction" type="button" class="btn btn-red">
          {{ confirmationButtonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmationModal",
  props: {
    show: {
      type: Boolean
    },
    confirmationButtonText: {
      type: String,
      default: "Confirm"
    },
    cancelButtonText: {
      type: String,
      default: "Cancel"
    }
  },
  methods: {
    cancel() {
      this.$emit("close");
    },
    confirmAction() {
      this.$emit("close");
    }
  },
  watch: {
    show: {
      immediate: true,
      handler: show => {
        if (show) {
          document.body.style.setProperty("overflow", "hidden");
        } else {
          document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  created() {
    const escapeHandler = e => {
      if (e.key === "Escape" && this.show) {
        this.cancel();
      }
    };
    document.addEventListener("keydown", escapeHandler);
    this.$once("hook:destroyed", () => {
      document.removeEventListener("keydown", escapeHandler);
    });
  }
};
</script>
