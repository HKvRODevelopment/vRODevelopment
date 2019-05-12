/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.sql.configuration {
export function getUnmappedTableNames(database?: SQL.Database): Array<string> {return database ? database.getUnmappedTableNames() : new Array();
}
}
