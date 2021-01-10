// import { MainCourseKey } from "../../constants/MenuItemTypes";
import { OrderItem } from "@/models/OrderItem";
import { OrderRequest } from "@/models/OrderRequest";
import { OrdersState } from "@/models/Store/OrdersState";
import { OrderStatus } from "../../constants/OrderStatus";
const state: OrdersState = {
  Orders: [],
};

const setTableOrders = (state: OrdersState, orderRequest: OrderRequest) => {
  const tableOrders = state.Orders.find(
    (a) => a.TableNumber === orderRequest.TableNumber
  );
  if (tableOrders) {
    tableOrders.Orders = orderRequest.Orders;
  } else {
    state.Orders.push(orderRequest);
  }
};
const setOrderStatus = (
  state: OrdersState,
  order: OrderItem,
  orderStatus: string
) => {
  const request = state.Orders.find((r) => r.TableNumber === order.TableNumber);
  const orderX = request?.Orders.find((o) => o === order);
  if (orderX) orderX.OrderStatus = orderStatus;
};
const mutations = {
  SET_ORDERS: (state: OrdersState, orderRequest: OrderRequest) => {
    setTableOrders(state, orderRequest);
  },
  SET_INBOX: (state: OrdersState, order: OrderItem) => {
    setOrderStatus(state, order, OrderStatus.Inbox);
  },
  SET_INPROGRESS: (state: OrdersState, order: OrderItem) => {
    setOrderStatus(state, order, OrderStatus.InProgress);
  },
  SET_DONE: (state: OrdersState, order: OrderItem) => {
    setOrderStatus(state, order, OrderStatus.Done);
  },
  SET_DELIEVERED: (state: OrdersState, order: OrderItem) => {
    setOrderStatus(state, order, OrderStatus.Delievered);
  },
  SET_CANCELLED: (state: OrdersState, order: OrderItem) => {
    setOrderStatus(state, order, OrderStatus.Cancelled);
  },
};
const actions = {
  setOrders({ commit }: { commit: Function }, orderRequest: OrderRequest) {
    commit("SET_ORDERS", orderRequest);
  },
  setInbox({ commit }: { commit: Function }, order: OrderItem) {
    commit("SET_INBOX", order);
  },
  setInProgress({ commit }: { commit: Function }, order: OrderItem) {
    console.info("table number in action???", order.TableNumber);
    commit("SET_INPROGRESS", order);
  },
  setDone({ commit }: { commit: Function }, order: OrderItem) {
    commit("SET_DONE", order);
  },
  setDelievered({ commit }: { commit: Function }, order: OrderItem) {
    commit("SET_DELIEVERED", order);
  },
  setCancelled({ commit }: { commit: Function }, order: OrderItem) {
    commit("SET_CANCELLED", order);
  },
};
const getters = {
  orders: (state: OrdersState) => state.Orders,
  getOrderByTableNumber: (state: OrdersState) => (tableNumber: number) => {
    return state.Orders.find((a) => a.TableNumber === tableNumber);
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};