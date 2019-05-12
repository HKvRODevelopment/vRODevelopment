/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.gef {
export function commitWorkflowOperationArgument(host?: vCAC.VCACHost, workflowOperation?: vCAC.Entity, argumentName?: string, argumentValue?: string): vCAC.Entity {var inputProperties = {
	Name:argumentName,
	Value:argumentValue
};

var links = {
	WorkflowOperation:workflowOperation
};

return vCACEntityManager.createModelEntity(host.id, "ManagementModelEntities.svc", "WorkflowOperationArguments", inputProperties, links, null);
}
}
