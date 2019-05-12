/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.sql.configuration {
export function updateDatabase(database?: SQL.Database, name?: string, type?: string, connectionURL?: string, username?: string, password?: SecureString, sessionMode?: string): SQL.Database {if( database == null ) {
	throw "Database object is required!";
}

var item = SQLDatabaseManager.getDatabaseById(database.id);

if( item == null ) {
	throw "Database object is is not found in inventory!";
}

item.name = name;
item.type = type;
item.connectionURL = connectionURL;
item.username = username;
item.password = password;
item.sessionMode = sessionMode;

item = SQLDatabaseManager.updateDatabase(item);

System.log("Database object updated: " + item);

return item;

}
}
