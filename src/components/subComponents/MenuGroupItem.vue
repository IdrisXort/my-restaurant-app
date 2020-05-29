<template>
  <div>
    <h2>{{ menuGroupItem.Name }}</h2>
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
