<template>
  <div>
    <button :class="className" @click="toggle">
      <h1>{{ groupTitle }}</h1>
    </button>
    <div class="panel" :style="{ display: isToggled ? 'block' : 'none' }">
      <menu-group-item
        :menuGroupItem="menuGroupItem"
        v-for="menuGroupItem in menuGroupItems"
        :key="menuGroupItem.Id"
      >
        <template #add>
          <button class="btn btn--increase" @click="increase(menuGroupItem)">
            +
          </button>
          <button class="btn btn--decrease" @click="decrease(menuGroupItem)">
            -
          </button>
        </template>
      </menu-group-item>
    </div>
  </div>
</template>
<script>
import MenuGroupItem from "./MenuGroupItem";
import { OrderRequest } from "../../models//OrderRequest";
export default {
  name: "MenuGroup",
  components: {
    MenuGroupItem
  },
  data() {
    return {
      isToggled: false,
      orderRequest: new OrderRequest()
    };
  },
  props: {
    groupTitle: {
      type: String
    },
    menuGroupItems: {
      type: Array
    }
  },
  computed: {
    className() {
      return this.isToggled ? "accordion active" : "accordion";
    }
  },
  methods: {
    toggle() {
      this.isToggled = !this.isToggled;
    },
    increase(menuGroupItem) {
      this.$emit("addMenuItem", menuGroupItem);
    },
    decrease(menuGroupItem) {
      this.$emit("removeMenuItem", menuGroupItem);
    }
  }
};
</script>
<style lang="scss">
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
  text-align: center;
}

.active,
.accordion:hover {
  background-color: #ccc;
}

.panel {
  padding: 0 18px;
  display: none;
  background-color: white;
  overflow: hidden;
}
.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  margin: 0 10px;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &--decrease {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }
  &--increase {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
  }
}
</style>
