/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.sql {
export function getActiveRecordProperty(source?: SQL.ActiveRecord, property?: string): Date {return source != null ? source.getProperty(property) : null;
}
}
