/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.sql {
export function executeDelete(table?: SQL.Table, columns?: any, validateRecordUniqueness?: boolean): number {var count = table.deleteRecords(columns, validateRecordUniqueness);
System.log("Deleted " + count + " records from " + table.name);
return count;
}
}
