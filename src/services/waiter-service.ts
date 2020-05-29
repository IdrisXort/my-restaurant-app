import { TableCount } from "../constants/MenuItemTypes";
import { Table } from "@/models/Table";
export class WaiterService {
  static getTables() {
    const tables = new Array<Table>();
    for (let i = 0; i < TableCount; i++) {
      tables.push(new Table(false, i + 1, null));
    }
    return tables;
  }
}
