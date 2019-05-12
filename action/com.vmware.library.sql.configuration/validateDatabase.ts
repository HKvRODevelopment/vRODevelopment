/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.sql.configuration {
export function validateDatabase(database?: SQL.Database): void {try  {
 	SQLDatabaseManager.validateDatabase(database);
	System.log( "Connection to database successful" );
}
catch( ex )  {
	throw "Validation failure (Reason: " + ex + ")";
}
}
}
