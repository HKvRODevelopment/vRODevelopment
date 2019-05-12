/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.sql.configuration {
export function getMappedTables(database?: SQL.Database): Array<string> {return database ? database.getTables() : new Array();
}
}
