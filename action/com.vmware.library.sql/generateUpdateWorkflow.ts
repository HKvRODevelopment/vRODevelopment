/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.sql {
export function generateUpdateWorkflow(table?: SQL.Table, category?: WorkflowCategory, overwriteWorkflow?: boolean, readOnlyColumns?: Array<SQL.Column>): Workflow {var resultWorkflow = SQLDatabaseManager.generateUpdateWorkflow(table, category, overwriteWorkflow, readOnlyColumns);
System.log("UpdateRecord workflow for table '" + table.name + "' was created in " + category.path);
return resultWorkflow;
}
}
