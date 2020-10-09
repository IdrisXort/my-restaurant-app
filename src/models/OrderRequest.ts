import { OrderItem } from "./OrderItem";

export class OrderRequest {
  TableNumber: number;
  Orders: Array<OrderItem> | null;
  constructor(tableNumber: number) {
    this.TableNumber = tableNumber;
    this.Orders = new Array<OrderItem>();
  }
}
