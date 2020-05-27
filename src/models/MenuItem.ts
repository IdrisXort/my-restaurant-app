import { MenuItemInputModel } from "./InputModels/MenuItemInputModel";
export class MenuItem {
  Id: string;
  Name: string;
  UnitPrice: number;
  IsAvailable: boolean;
  Description: string;
  Type: string;
  IsActive: boolean;

  constructor(inputModel: MenuItemInputModel) {
    this.Id = inputModel.Id;
    this.Name = inputModel.Name;
    this.UnitPrice = inputModel.UnitPrice;
    this.IsAvailable = inputModel.IsAvailable;
    this.Description = inputModel.Description;
    this.Type = inputModel.Type;
    this.IsActive = true;
  }
}
