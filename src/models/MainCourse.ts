import { MenuItem } from "./MenuItem";
import { MenuItemInputModel } from "./InputModels/MenuItemInputModel";
export class MainCourse extends MenuItem {
  PreperationTime: number | undefined;
  SubType: string | undefined;
  constructor(menuItemInputModel: MenuItemInputModel) {
    super(menuItemInputModel);
    this.PreperationTime = menuItemInputModel.ApproximitelyCookingTime;
    this.SubType = menuItemInputModel.SubType;
  }
}
