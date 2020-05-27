<template>
  <div class="menu-item-list">
    <h2 class="title">{{ title }}</h2>
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Description</th>
      </tr>
      <menu-item
        v-for="menuItem in menuItems"
        :menuItem="menuItem"
        :key="menuItem.Id"
      />
    </table>
  </div>
</template>
<script>
import MenuItem from "./MenuItem";
export default {
  name: "MenuItemList",
  components: {
    MenuItem,
  },
  props: {
    menuItems: {
      type: Array,
    },
    title: {
      type: String,
    },
  },
};
</script>
<style lang="scss">
.menu-item-list {
  display: flex;
}
.title {
}
</style>
