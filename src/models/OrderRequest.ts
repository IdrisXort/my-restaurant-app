import { MenuItem } from "./MenuItem";

export class OrderRequest {
  TableNumber: number;
  Orders: Array<MenuItem> | null;
  constructor(tableNumber: number, orders: Array<MenuItem>) {
    this.TableNumber = tableNumber;
    this.Orders = orders;
  }
}
