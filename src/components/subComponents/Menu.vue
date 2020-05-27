<template>
  <div>
    <menu-item-list title="Main courses" :menuItems="mainCourses" />
    <menu-item-list title="Soups" :menuItems="soups" />
    <menu-item-list title="Aperitifs" :menuItems="aperitifs" />
    <menu-item-list title="Starters" :menuItems="starters" />
    <menu-item-list title="Salads" :menuItems="salads" />
    <menu-item-list title="Desserts" :menuItems="desserts" />
    <menu-item-list title="Extras" :menuItems="extras" />
  </div>
</template>
<script>
import MenuItemList from "./MenuItemList";
import { MenuItemType } from "../../constants/MenuItemTypes";

export default {
  name: "Menu",
  components: {
    MenuItemList,
  },
  computed: {
    foods() {
      return Object.values(this.$store.getters.foods);
    },
    mainCourses() {
      return this.foods.filter(this.getMainCourses);
    },
    soups() {
      return this.foods.filter(this.getSoups);
    },
    aperitifs() {
      return this.foods.filter(this.getAperitifs);
    },
    starters() {
      return this.foods.filter(this.getStarters);
    },
    salads() {
      return this.foods.filter(this.getSalads);
    },
    desserts() {
      return this.foods.filter(this.getDesserts);
    },
    extras() {
      return this.foods.filter(this.getExtras);
    },
  },
  methods: {
    getMainCourses(item) {
      return item.Type === MenuItemType.MainCourse && item.IsActive;
    },
    getDesserts(item) {
      return item.Type === MenuItemType.Dessert && item.IsActive;
    },
    getAperitifs(item) {
      return item.Type === MenuItemType.Aperitif && item.IsActive;
    },
    getSoups(item) {
      return item.Type === MenuItemType.Soup && item.IsActive;
    },
    getSalads(item) {
      return item.Type === MenuItemType.Salad && item.IsActive;
    },
    getExtras(item) {
      return item.Type === MenuItemType.Extra && item.IsActive;
    },
    getStarters(item) {
      return item.Type === MenuItemType.Starter && item.IsActive;
    },
  },
};
</script>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
