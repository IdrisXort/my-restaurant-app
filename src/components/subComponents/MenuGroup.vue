<template>
  <div >
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
          <button type="button" class="btn btn-success" @click="increase(menuGroupItem)">
            Add
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
</style>
