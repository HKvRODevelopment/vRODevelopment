/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.sql.configuration {
export function addDatabase(name?: string, type?: string, connectionURL?: string, username?: string, password?: SecureString, sessionMode?: string): SQL.Database {var database = new SQLDatabase() ;

database.name = name;
database.type = type;
database.connectionURL = connectionURL;
database.username = username;
database.password = password;
database.sessionMode = sessionMode;
database = SQLDatabaseManager.addDatabase(database);

System.log("Database object added: " + database);

return database;

}
}
