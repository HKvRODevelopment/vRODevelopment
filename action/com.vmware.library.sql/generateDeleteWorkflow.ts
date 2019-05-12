/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.sql {
export function generateDeleteWorkflow(table?: SQL.Table, category?: WorkflowCategory, overwriteWorkflow?: boolean): Workflow {var resultWorkflow = SQLDatabaseManager.generateDeleteWorkflow(table, category, overwriteWorkflow);
System.log("CreateRecord workflow for table '" + table.name + "' was created in " + category.path);
return resultWorkflow;
}
}
