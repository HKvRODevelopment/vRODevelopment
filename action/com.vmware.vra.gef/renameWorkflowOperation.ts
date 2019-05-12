/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.gef {
export function renameWorkflowOperation(workflowOperation?: vCAC.Entity, workflowOperationName?: string): vCAC.Entity {var operationNameProperty = {
	OperationName: workflowOperationName
};

var hostId = workflowOperation.hostId;
var entityIdString = workflowOperation.keyString;
var links = new Properties();
var headers = new Properties();

// System.debug("WorkflowOperation: " + workflowOperation.toSource());

return vCACEntityManager.updateModelEntityBySerializedKey(
					hostId,
					"ManagementModelEntities.svc", 
					"WorkflowOperations", 
					entityIdString, 
					operationNameProperty, 
					null, 
					null);					
}
}
