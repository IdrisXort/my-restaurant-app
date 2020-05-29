<template>
  <div>
    <menu-group :menuGroupItems="mainCourses" groupTitle="mainCourses" />
    <menu-group :menuGroupItems="soups" groupTitle="soups" />
    <menu-group :menuGroupItems="aperitifs" groupTitle="aperitifs" />
    <menu-group :menuGroupItems="starters" groupTitle="starters" />
    <menu-group :menuGroupItems="salads" groupTitle="salads" />
    <menu-group :menuGroupItems="desserts" groupTitle="desserts" />
    <menu-group :menuGroupItems="extras" groupTitle="extras" />
  </div>
</template>
<script>
import { MenuItemType } from "../../constants/MenuItemTypes";
import MenuGroup from "../subComponents/MenuGroup";
export default {
  name: "CreateOrder",
  components: {
    MenuGroup
  },
  computed: {
    tableNumber() {
      return this.$store.getters.currentTableNumber;
    },
    orders() {
      return this.$store.getters.getOrderByTableNumber(this.tableNumber);
    },
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
    }
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
    }
  }
};
</script>
