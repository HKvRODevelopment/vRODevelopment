/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.sql {
export function readRecordByColumns(table?: SQL.Table, colName?: string, col0?: string, col1?: string, col2?: string, col3?: string, col4?: string, col5?: string, col6?: string, col7?: string, col8?: string, col9?: string, col10?: string, col11?: string, col12?: string, col13?: string, col14?: string): string {if (table == null) {
	return null;
}
var columnsMap = new Properties();
var columns = table.getColumns();

if (col0 && columns[0]) {
	System.log("Putting for column " + columns[0] + " value " + col0);
	columnsMap.put(columns[0].name, col0);
}
	
if (col1 && columns[1]) {
	System.log("Putting for column " + columns[1] + " value " + col1);
	columnsMap.put(columns[1].name, col1);
}
	
if (col2 && columns[2]) {
	System.log("Putting for column " + columns[2] + " value " + col2);
	columnsMap.put(columns[2].name, col2);	
}
	
if (col3 && columns[3]) {
	System.log("Putting for column " + columns[3] + " value " + col3);
	columnsMap.put(columns[3].name, col3);
}
	
if (col4 && columns[4]) {
	System.log("Putting for column " + columns[4] + " value " + col4);
	columnsMap.put(columns[4].name, col4);
}

if (col5 && columns[5]) {
	System.log("Putting for column " + columns[5] + " value " + col5);
	columnsMap.put(columns[5].name, col5);
}
	
if (col6 && columns[6]) {
	System.log("Putting for column " + columns[6] + " value " + col6);
	columnsMap.put(columns[6].name, col6);
}
	
if (col7 && columns[7]) {
	System.log("Putting for column " + columns[7] + " value " + col7);
	columnsMap.put(columns[7].name, col7);	
}
	
if (col8 && columns[8]) {
	System.log("Putting for column " + columns[8] + " value " + col8);
	columnsMap.put(columns[3].name, col8);
}
	
if (col9 && columns[9]) {
	System.log("Putting for column " + columns[9] + " value " + col9);
	columnsMap.put(columns[9].name, col9);
}

if (col10 && columns[10]) {
	System.log("Putting for column " + columns[10] + " value " + col10);
	columnsMap.put(columns[10].name, col10);
}

if (col11 && columns[11]) {
	System.log("Putting for column " + columns[11] + " value " + col11);
	columnsMap.put(columns[11].name, col11);
}

if (col12 && columns[12]) {
	System.log("Putting for column " + columns[12] + " value " + col12);
	columnsMap.put(columns[12].name, col12);
}

if (col13 && columns[13]) {
	System.log("Putting for column " + columns[13] + " value " + col13);
	columnsMap.put(columns[13].name, col13);
}

if (col14 && columns[14]) {
	System.log("Putting for column " + columns[14] + " value " + col14);
	columnsMap.put(columns[14].name, col14);
}

var result = table.readRecords(columnsMap, true);
System.log("Result is: " + result);
if (result.length < 1) {
	return null;
}
return result[0].getProperty(colName);

}
}
