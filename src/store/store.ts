import Vue from "vue";
import Vuex from "vuex";
import foods from "./modules/foods";
import tables from "./modules/tables";
import orders from "./modules/orders";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    foods,
    tables,
    orders
  }
});