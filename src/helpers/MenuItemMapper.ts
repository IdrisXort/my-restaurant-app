import { MenuItemType } from "../constants/MenuItemTypes";
import { MainCourse } from "@/models/MainCourse";
import { MenuItemInputModel } from "@/models/InputModels/MenuItemInputModel";
import { Aperitif } from "@/models/Aperitif";
import { Dessert } from "@/models/Dessert";
import { Soup } from "@/models/Soup";
import { Salad } from "@/models/Salad";
import { Extra } from "@/models/Extra";
import { Starter } from "@/models/starter";
export class MenuItemMapper {
  static GetMappedMenuItem(menuItemInputModel: MenuItemInputModel) {
    switch (menuItemInputModel.Type) {
      case MenuItemType.MainCourse:
        return new MainCourse(menuItemInputModel);
      case MenuItemType.Aperitif:
        return new Aperitif(menuItemInputModel);
      case MenuItemType.Dessert:
        return new Dessert(menuItemInputModel);
      case MenuItemType.Soup:
        return new Soup(menuItemInputModel);
      case MenuItemType.Salad:
        return new Salad(menuItemInputModel);
      case MenuItemType.Extra:
        return new Extra(menuItemInputModel);
      case MenuItemType.Starter:
        return new Starter(menuItemInputModel);
      default:
        break;
    }
  }
}
