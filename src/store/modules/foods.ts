// import { MainCourseKey } from "../../constants/MenuItemTypes";
import { MenuItemInputModel } from "@/models/InputModels/MenuItemInputModel";
import { MenuItem } from "@/models/MenuItem";
import { FoodsState } from "@/models/Store/FoodsState";
import { AdminService } from "../../services/admin-service";

const state: FoodsState = {
  Foods: [],
  InactiveItems: [],
};
const mutations = {
  ADD_MENU_ITEM: (
    state: FoodsState,
    menuItemInputModel: MenuItemInputModel
  ) => {
    AdminService.addMenuItemToDb(menuItemInputModel);
  },
  UPDATE_FOOD: (state: FoodsState, menuItem: MenuItem) => {
    AdminService.updateMenuItem(menuItem);
  },
  REMOVE_FOOD: (state: FoodsState, id: string) => {
    const menuItem = state.Foods.find((f) => f.Id === id);
    if (menuItem !== undefined) {
      AdminService.moveItemToTheBin(menuItem);
    }
  },
  SET_FOODS: (state: FoodsState, foods: Array<MenuItem>) => {
    state.Foods = foods;
  },
};
const actions = {
  addNewFood({ commit }: { commit: Function }, food: MenuItem) {
    commit("ADD_MENU_ITEM", food);
  },
  updateFood({ commit }: { commit: Function }, food: MenuItem) {
    commit("UPDATE_FOOD", food);
  },
  removeItem({ commit }: { commit: Function }, id: string) {
    commit("REMOVE_FOOD", id);
  },
  setFoods({ commit }: { commit: Function }, foods: Array<MenuItem>) {
    commit("SET_FOODS", foods);
  },
};
const getters = {
  foods: (state: FoodsState) => state.Foods,
  getFoodById: (state: FoodsState) => (id: string) => {
    return state.Foods.find((f) => f.Id === id);
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};