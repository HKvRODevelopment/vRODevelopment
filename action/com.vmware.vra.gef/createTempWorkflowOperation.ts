/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.gef {
export function createTempWorkflowOperation(host?: vCAC.VCACHost, endpointName?: string, workflowOperationName?: string): vCAC.Entity {var tempName = getTempName(endpointName, workflowOperationName);
System.debug("temporary WorkflowOperation name to use - '" + tempName + "'");

var inputProperties = {
	OperationName:tempName
};

return vCACEntityManager.createModelEntity(host.id, "ManagementModelEntities.svc", "WorkflowOperations", inputProperties, null, null);

function getTempName(endpointName, workflowOperationName) {
	var date = new Date();
	return endpointName + " -- " + workflowOperationName + " -- " + date.toGMTString() + " -- wfToken: " + workflow.id;
}
}
}
