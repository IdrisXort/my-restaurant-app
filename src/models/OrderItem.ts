import { MenuItem } from "./MenuItem";
export class OrderItem extends MenuItem {
  Note: string;
  WaiterId: string;
  OrderItemId: string;
  CreationTime:string;
  EditTime:string;

  constructor(
    menuItem: MenuItem,
    note = "",
    waiterId = "",
    orderItemId: string
  ) {
      super(menuItem);
    this.WaiterId = waiterId;
    this.Note = note;
    this.OrderItemId = orderItemId;
    this.CreationTime = new Date().toLocaleTimeString()
    this.EditTime = ""
  }
  setEditTime(){
   this.EditTime = new Date().toLocaleTimeString()
  }
}