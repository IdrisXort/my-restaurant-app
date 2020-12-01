// import { MainCourseKey } from "../../constants/MenuItemTypes";
import { OrderStatus } from "../../constants/OrderStatus";
const state = {
  orders: [],
};

const setTableOrders = (orders, orderRequest) => {
  const table = orders.find((a) => a.TableNumber === orderRequest.TableNumber);
  if (table) {
    table.Orders = orderRequest.Orders;
  } else {
    orders.push({ ...orderRequest });
  }
};

const findOrder = (orders, order) => {
  return orders.reduce((acc, curr) => {
    const ord = curr.Orders.find((o) => o === order);
    if (ord) {
      acc = ord;
    }
    return acc;
  }, {});
};
const setOrderStatus = (orders, orderX, orderStatus) => {
  const searchResult = findOrder(orders, orderX);
  searchResult.OrderStatus = orderStatus;
};
const mutations = {
  SET_ORDERS: (state, orderRequest) => {
    setTableOrders(state.orders, orderRequest);
  },
  SET_INBOX: (state, order) => {
    setOrderStatus(state.orders, order, OrderStatus.Inbox);
  },
  SET_INPROGRESS: (state, order) => {
    setOrderStatus(state.orders, order, OrderStatus.InProgress);
  },
  SET_DONE: (state, order) => {
    setOrderStatus(state.orders, order, OrderStatus.Done);
  },
};
const actions = {
  setOrders({ commit }, orderRequest) {
    commit("SET_ORDERS", orderRequest);
  },
  setInbox({ commit }, order) {
    commit("SET_INBOX", order);
  },
  setInProgress({ commit }, order) {
    commit("SET_INPROGRESS", order);
  },
  setDone({ commit }, order) {
    commit("SET_DONE", order);
  },
};
const getters = {
  orders: (state) => state.orders,
  getOrderByTableNumber: (state) => (tableNumber) => {
    return state.orders.find((a) => a.TableNumber === tableNumber);
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
