/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.soap {
export function generateWorkflowFromSOAPOperation(host?: SOAP.Host, operationName?: string, workflowName?: string, category?: WorkflowCategory, options?: Properties): Workflow {System.log("generating workflow...");
var w = host.createWorkflow(operationName, workflowName, category, options);
System.log("workflow successfully generated for host '" + host.name + "' (" + host.id + ") and operation '" + operationName + "'.");
return w;
}
}
