/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.sql.configuration {
export function getConnectionUrl(existing?: string, type?: string): string {return SQLDatabaseManager.getConnectionUrl(existing, type);
}
}
