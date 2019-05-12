/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.sql.configuration {
export function getAllTableNames(database?: SQL.Database): Array<string> {return database ? database.getAllTableNames() : new Array();
}
}
