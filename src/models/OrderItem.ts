import { MenuItem } from "./MenuItem";
import {OrderStatus} from '../constants/OrderStatus';
export class OrderItem extends MenuItem {
  Note: string;
  WaiterId: string;
  OrderItemId: string;
  CreationTime:string;
  EditTime:string;
  OrderStatus:string;
  CancellationReason:string | undefined;
  TableNumber:number

  constructor(
    menuItem: MenuItem,
    note = "",
    waiterId = "",
    orderItemId: string,
    tableNumber:number
  ) {
      super(menuItem);
    this.WaiterId = waiterId;
    this.Note = note;
    this.OrderItemId = orderItemId;
    this.CreationTime = new Date().toLocaleTimeString()
    this.EditTime = ""
    this.OrderStatus = OrderStatus.Inbox
    this.CancellationReason = undefined
    this.TableNumber = tableNumber
  }
  setEditTime(){
   this.EditTime = new Date().toLocaleTimeString()
  }
}