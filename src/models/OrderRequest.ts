import { MenuItem } from "./MenuItem";

export class OrderRequest {
  TableNumber: number;
  Orders: Array<MenuItem> | null;
  constructor(tableNumber: number) {
    this.TableNumber = tableNumber;
    this.Orders = new Array<MenuItem>();
  }
}
