import { MenuItem } from '../MenuItem';

export class MenuItemInputModel {
  Id: string | undefined;
  Name: string | undefined;
  UnitPrice: number | undefined;
  IsAvailable: boolean | undefined;
  Description: string | undefined;
  Type: string | undefined;
  ApproximitelyCookingTime: number | undefined;
  SubType: string  | undefined;
  IsActive: boolean | undefined

  constructor({
    Id,
    Name,
    UnitPrice,
    IsAvailable,
    Description,
    Type,
    ApproximitelyCookingTime,
    SubType
  }: {
    Id: string | undefined;
    Name: string | undefined;
    UnitPrice: number | undefined;
    IsAvailable: boolean | undefined;
    Description: string | undefined;
    Type: string | undefined;
    ApproximitelyCookingTime: number | undefined;
    SubType: string  | undefined;
    IsActive:boolean | undefined
  }) {
    this.Id = Id;
    this.Name = Name;
    this.UnitPrice = UnitPrice;
    this.IsAvailable = IsAvailable;
    this.Description = Description;
    this.Type = Type;
    this.IsActive = true;
    this.ApproximitelyCookingTime = ApproximitelyCookingTime;
    this.SubType = SubType;
  }
  static clone(menuItem:MenuItem){
    return new MenuItemInputModel(menuItem)
  }
}
