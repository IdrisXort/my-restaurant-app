import { MenuItem } from "./MenuItem";

export class Table {
  IsOccupied: boolean;
  Number: number;
  Orders: Array<MenuItem> | null;
  IsReserved = false;
  HasOrders = false
  constructor(isOccupied: boolean, number: number, orders: null) {
    this.IsOccupied = isOccupied;
    this.Number = number;
    this.Orders = orders;
  }
}
