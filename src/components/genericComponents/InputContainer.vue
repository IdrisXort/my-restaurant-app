<template>
  <div class="inputContainer">
    <label class="label" for="">{{ label }}</label>
    <slot/>
  </div>
</template>
<script>
export default {
  name: "InputContainer",
  props: {
    label: {
      type: String,
    },
  },
};
</script>
<style>
.inputContainer{
    display: flex;
    margin: 20px 10px 20px 10px;
}
.label {
    padding: 0 8px 0 8px;
}
.input {
        padding: 0 8px 0 8px;

}
</style>
