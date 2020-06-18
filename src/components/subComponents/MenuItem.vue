<template>
  <tr :class="className">
    <td>{{ menuItem.Name }}</td>
    <td>{{ menuItem.UnitPrice }}</td>
    <td>{{ menuItem.Description }}</td>
    <button @click="removeItem(menuItem.Id)">Remove</button>
    <button @click="sendItemToGetUpdated(menuItem.Id)">Update</button>
  </tr>
</template>
<script>
export default {
  name: "MenuItem",
  props: {
    menuItem: {
      type: Object
    }
  },
  methods: {
    sendItemToGetUpdated(id) {
      this.$router.push({ path: "update-menu-item", query: { id } });
    },
    removeItem(id) {
      this.$store.dispatch("removeItem", id);
    }
  },
  computed: {
    className() {
      return this.menuItem.Type;
    }
  }
};
</script>
