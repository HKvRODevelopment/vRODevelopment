/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.sql.configuration {
export function removeDatabase(database?: SQL.Database): SQL.Database {var item = SQLDatabaseManager.removeDatabase(database);

System.log("Database object removed: " + item);

return item;

}
}
