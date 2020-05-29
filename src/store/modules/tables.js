// import { MainCourseKey } from "../../constants/MenuItemTypes";
import { WaiterService } from "../../services/waiter-service";

const state = {
  tables: [],
  currentTableNumber: null
};
const mutations = {
  GET_TABLES: state => {
    state.tables = WaiterService.getTables();
  },
  SET_TABLE: (state, table) => {
    state.tables[table.Number - 1] = table;
  },
  SET_CURRENT_TABLE: (state, tableNumber) => {
    state.currentTableNumber = tableNumber;
  }
};
const actions = {
  getTables({ commit }) {
    commit("GET_TABLES");
  },
  setOccupied({ commit }, table) {
    table.IsOccupied = true;
    commit("SET_TABLE", table);
  },
  reserveTable({ commit }, table) {
    table.IsReserved = true;
    commit("SET_TABLE", table);
  },
  setCurrentTable({ commit }, tableNumber) {
    commit("SET_CURRENT_TABLE", tableNumber);
  }
};
const getters = {
  tables: state => state.tables,
  currentTableNumber: state => state.currentTableNumber
};
export default {
  state,
  mutations,
  actions,
  getters
};
