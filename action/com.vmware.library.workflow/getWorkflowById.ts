/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.workflow {
export function getWorkflowById(workflowId?: string): Workflow {var wf = Server.getWorkflowWithId(workflowId);
if (wf == null) {
	throw "Invalid workflow ID. No workflow found for id " + workflowId;
}
return wf;
}
}
