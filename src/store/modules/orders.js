// import { MainCourseKey } from "../../constants/MenuItemTypes";

const state = {
  orders: {}
};
const mutations = {
  SET_ORDERS: (state, orderRequest) => {
    state.orders[orderRequest.tableNumber] = orderRequest.orders;
  }
};
const actions = {
  setOrders({ commit }, orderRequest) {
    commit("SET_ORDERS", orderRequest);
  }
};
const getters = {
  orders: state => state.orders,
  getOrderByTableNumber: state => tableNumber => {
    return state.orders[tableNumber];
  }
};
export default {
  state,
  mutations,
  actions,
  getters
};
