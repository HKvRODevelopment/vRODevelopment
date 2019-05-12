/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.sql {
export function generateCreateWorkflow(table?: SQL.Table, category?: WorkflowCategory, overwriteWorkflow?: boolean, readOnlyColumns?: Array<SQL.Column>): Workflow {var resultWorkflow = SQLDatabaseManager.generateCreateWorkflow(table, category, overwriteWorkflow, readOnlyColumns);
System.log("CreateRecord workflow for table '" + table.name + "' was created in " + category.path);
return resultWorkflow;
}
}
