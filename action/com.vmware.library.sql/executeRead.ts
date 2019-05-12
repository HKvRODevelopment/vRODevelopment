/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.sql {
export function executeRead(table?: SQL.Table, criteria?: any, validateUnique?: boolean): Array<SQL.ActiveRecord> {return table.readRecords(criteria, validateUnique);
}
}
