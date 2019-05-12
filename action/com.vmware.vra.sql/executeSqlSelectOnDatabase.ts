/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.sql {
export function executeSqlSelectOnDatabase(databaseName?: string, sqlSelectQuery?: string, keyColumnName?: string, valueColumnName?: string): Properties {var allDatabases = SQLDatabaseManager.getDatabases();

var database;
for (var i = 0; i < allDatabases.length; i++){
	if (allDatabases[i].name == databaseName){
		database = allDatabases[i];
		break;
	}
}

if (!database){
	throw "Can not find database configuration with name: " + databaseName;
}

System.debug("Executing query '" + sqlSelectQuery + "' on database '" + database.name+"'");

var resultRecords = database.readCustomQuery(sqlSelectQuery);
System.debug("Number of records found: " +resultRecords.length);

var resultAsProperties = new Properties();

for(var i ; i < resultRecords.length ; i++){
	var record = resultRecords[i];
	validateResultColumns(record.getFieldNames());
	resultAsProperties.put(record.getProperty(keyColumnName), String(record.getProperty(valueColumnName)));
}

System.debug("Number of keys added: " + resultAsProperties.keys.length);
return resultAsProperties;

function validateResultColumns(columnNames){
	if(columnNames.indexOf(keyColumnName) == -1){
		throw "Query result does not have column " + keyColumnName;
	}
	if(columnNames.indexOf(valueColumnName) == -1){
		throw "Query result does not have column " + valueColumnName;
	}
}
}
}
