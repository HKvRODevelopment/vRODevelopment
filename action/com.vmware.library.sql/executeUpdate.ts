/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.sql {
export function executeUpdate(table?: SQL.Table, record?: SQL.ActiveRecord): number {var count = table.updateRecord(record);
System.log("Updated " + count + " records from " + table.name);
return count;
}
}
