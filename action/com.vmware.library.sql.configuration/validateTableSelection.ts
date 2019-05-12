/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.sql.configuration {
export function validateTableSelection(table?: SQL.Table, database?: SQL.Database): boolean {return table.database == database;
}
}
