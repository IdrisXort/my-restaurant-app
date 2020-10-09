<template>
  <div class="menu-group-item">
    <h2>
      {{ menuGroupItem.Name }} - <span>{{ menuGroupItem.UnitPrice }} Euro</span>
    </h2>
    <slot name="add" />
    <p>{{ menuGroupItem.Description }}</p>
  </div>
</template>
<script>
export default {
  name: "MenuGroupItem",
  props: {
    menuGroupItem: {
      type: Object
    }
  }
};
</script>
<style>
.menu-group-item:hover {
  background-color: yellow;
}
</style>
