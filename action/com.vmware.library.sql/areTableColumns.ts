/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.sql {
export function areTableColumns(table?: SQL.Table, columns?: Array<SQL.Column>): boolean {if (columns == null) {
	return true;
}
for (var i in columns) {
	if (columns[i].table != table) {
		return false;
	}
}
return true;
}
}
