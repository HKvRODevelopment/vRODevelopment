/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.gef {
export function getWorkflowId(workflowIn?: Workflow): string {var url = workflowIn.getExecutionUrl(null, null, null, null, null);

var pattern = /.*workflowId=([0-9a-z-]+)&.*/;
var matches = pattern.exec(url);
var workflowId = matches[1];

return workflowId;
}
}
