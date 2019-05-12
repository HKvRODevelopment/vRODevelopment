/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.gef {
export function getOperationWorkflows(endpointName?: string, operationType?: string): Array<Workflow> {var configurations = com.vmware.vra.gef.getAllEndpointWorkflowMappings();
if (configurations == null) {
	throw "No Endpoints have been configured yet.";
}
var workflowMappings = configurations.get(endpointName);
if (workflowMappings == null) {
	throw "Endpoint " + endpointName + " not configured yet";
}
return workflowMappings.get(operationType);
}
}
