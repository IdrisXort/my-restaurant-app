// import { MainCourseKey } from "../../constants/MenuItemTypes";
import { TablesState } from "@/models/Store/TablesState";
import { Table } from "@/models/Table";
import { WaiterService } from "../../services/waiter-service";

const state: TablesState = {
  Tables: [],
  CurrentTableNumber: null,
};
const mutations = {
  GET_TABLES: (state: TablesState) => {
    state.Tables = WaiterService.getTables();
  },
  SET_TABLE: (state: TablesState, table: Table) => {
    state.Tables[table.Number - 1] = table;
  },
  SET_CURRENT_TABLE: (state: TablesState, tableNumber: number) => {
    state.CurrentTableNumber = tableNumber;
  },
};
const actions = {
  getTables({ commit }: { commit: Function }) {
    commit("GET_TABLES");
  },
  setOccupied({ commit }: { commit: Function }, table: Table) {
    table.IsOccupied = true;
    commit("SET_TABLE", table);
  },
  reserveTable({ commit }: { commit: Function }, table: Table) {
    table.IsReserved = true;
    commit("SET_TABLE", table);
  },
  setCurrentTable({ commit }: { commit: Function }, tableNumber: number) {
    commit("SET_CURRENT_TABLE", tableNumber);
  },
};
const getters = {
  tables: (state: TablesState) => state.Tables,
  currentTableNumber: (state: TablesState) => state.CurrentTableNumber,
};
export default {
  state,
  mutations,
  actions,
  getters,
};