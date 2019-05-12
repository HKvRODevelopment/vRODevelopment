/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.sql {
export function findUniqueRecord(table?: SQL.Table, example?: Array): Workflow {Server.log(example);
return table.findUniqueRecord(example);
}
}
