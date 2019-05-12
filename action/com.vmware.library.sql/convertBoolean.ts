/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.sql {
export function convertBoolean(bool?: string): string {return SQLDatabaseManager.convertBooleanForPresentation(bool);
}
}
