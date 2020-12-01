// import { MainCourseKey } from "../../constants/MenuItemTypes";
const state = {
  orders: [],
};

const setTableOrders = (orders, orderRequest) => {
  const table = orders.find((a) => a.TableNumber === orderRequest.TableNumber);
  if (table) {
    table.Orders = orderRequest.Orders;
  } else {
    orders.push({...orderRequest});
  }
};

const mutations = {
  SET_ORDERS: (state, orderRequest) => {
    setTableOrders(state.orders, orderRequest);
  },
};
const actions = {
  setOrders({ commit }, orderRequest) {
    commit("SET_ORDERS", orderRequest);
  },
};
const getters = {
  orders: (state) => state.orders,
  getOrderByTableNumber: (state) => (tableNumber) => {
    return state.orders.find(a=>a.TableNumber === tableNumber);
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
};
