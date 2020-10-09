// import { MainCourseKey } from "../../constants/MenuItemTypes";
import { AdminService } from "../../services/admin-service";

const state = {
  foods: {},
  inActiveItems: {}
};
const mutations = {
  ADD_MENU_ITEM: (state, menuItemInputModel) => {
    AdminService.addMenuItemToDb(menuItemInputModel);
  },
  UPDATE_FOOD: (state, menuItem) => {
    AdminService.updateMenuItem(menuItem);
  },
  REMOVE_FOOD: (state, id) => {
    AdminService.moveItemToTheBin({ ...state.foods[id], IsActive: false });
  },
  SET_FOODS: (state, foods) => {
    state.foods = foods;
  }
};
const actions = {
  addNewFood({ commit }, food) {
    commit("ADD_MENU_ITEM", food);
  },
  updateFood({ commit }, food) {
    commit("UPDATE_FOOD", food);
  },
  removeItem({ commit }, id) {
    commit("REMOVE_FOOD", id);
  },
  setFoods({ commit }, foods) {
    commit("SET_FOODS", foods);
  }
};
const getters = {
  foods: state => state.foods,
  getFoodById: state => id => {
    return state.foods[id];
  }
};
export default {
  state,
  mutations,
  actions,
  getters
};
