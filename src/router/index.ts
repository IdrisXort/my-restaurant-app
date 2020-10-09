import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Menu from "../components/subComponents/Menu.vue";
import AddMenuItem from "../components/forms/AddMenuItem.vue";
import UpdateMenuItem from "../components/forms/UpdateMenuItem.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/menu",
    name: "Menu",
    component: Menu
  },
  {
    path: "/add-menu-item",
    name: "AddMenuItem",
    component: AddMenuItem
  },
  {
    path: "/update-menu-item",
    name: "UpdateMenuItem",
    component: UpdateMenuItem
  }
];

const router = new VueRouter({
  routes
});

export default router;
