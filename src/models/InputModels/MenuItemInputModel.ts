export class MenuItemInputModel {
  Id: string;
  Name: string;
  UnitPrice: number;
  IsAvailable: boolean;
  Description: string;
  Type: string;
  IsActive: boolean;
  ApproximitelyCookingTime: number | undefined;
  SubType: string | undefined;

  constructor({
    id,
    name,
    unitPrice,
    isAvailable,
    description,
    type,
    approximitelyCookingTime,
    subType,
  }: {
    id: string;
    name: string;
    unitPrice: number;
    isAvailable: boolean;
    description: string;
    type: string;
    approximitelyCookingTime: number;
    subType: string;
  }) {
    this.Id = id;
    this.Name = name;
    this.UnitPrice = unitPrice;
    this.IsAvailable = isAvailable;
    this.Description = description;
    this.Type = type;
    this.IsActive = true;
    this.ApproximitelyCookingTime = approximitelyCookingTime;
    this.SubType = subType;
  }
}
