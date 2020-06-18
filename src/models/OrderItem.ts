import { MenuItem } from './MenuItem'

export class OrderItem {
    Note:string | undefined
    WaiterId:string
    Order:MenuItem
  
    constructor({menuItem, note, waiterId = ''}:{menuItem: MenuItem, note:string, waiterId:string}) {
        this.Order=menuItem
        this.WaiterId=waiterId,
        this.Note=note
    }
  }