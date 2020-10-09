import { MenuItem } from "@/models/MenuItem";
import { MenuItemMapper } from "../helpers/MenuItemMapper";
import { foodsRef, inActiveItemsRef } from "../base";
import { MenuItemInputModel } from "@/models/InputModels/MenuItemInputModel";

export class AdminService {
  static addMenuItemToDb(menuItemInputModel: MenuItemInputModel) {
    const menuItemToAdd = MenuItemMapper.GetMappedMenuItem(menuItemInputModel);
    if (menuItemToAdd?.Id) foodsRef.child(menuItemToAdd.Id).set(menuItemToAdd);
  }
  static updateMenuItem(menuItem: MenuItem) {
    foodsRef.child(menuItem.Id).set(menuItem);
  }
  static moveItemToTheBin(menuItem: MenuItem) {
    inActiveItemsRef.child(menuItem.Id).set(menuItem);
    foodsRef.child(menuItem.Id).remove();
  }
}
