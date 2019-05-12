/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.sql {
export function generateReadWorkflow(table?: SQL.Table, category?: WorkflowCategory, overwriteWorkflow?: boolean): Workflow {var resultWorkflow = SQLDatabaseManager.generateReadWorkflow(table,category, overwriteWorkflow);
System.log("ReadRecord workflow for table '" + table.name + "' was created in " + category.path);
return resultWorkflow;
}
}
