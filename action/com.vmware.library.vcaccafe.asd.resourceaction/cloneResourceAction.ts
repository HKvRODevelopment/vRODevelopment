/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.asd.resourceaction {
export function cloneResourceAction(resourceAction?: vCACCAFE.ResourceAction): vCACCAFE.ResourceAction {com.vmware.library.vcaccafe.util.validateObject(resourceAction, "Resource action");
var host = vCACCAFEEntitiesFinder.getHostForEntity(resourceAction);
var workflowService = host.createAdvancedDesignerClient().getAdvancedDesignerWorkflowService();

var param = new vCACCAFECsParameter() ;
param.setName(resourceAction.getInputParameter().getName());
param.setResourceType(resourceAction.getInputParameter().getResourceType());

System.log("Generating clone of resource operation " + resourceAction.getName());
var cloned = workflowService.generateResourceOperationByWorkflowIdAndInputParameter(resourceAction.getWorkflowId(), param);
System.log("Generated clone of resource operation " + resourceAction.getName());

cloned.setTenant(host.tenant);
cloned.setName(resourceAction.getName() +  " (2)");
cloned.setDescription(resourceAction.getDescription());

var client = host.createAdvancedDesignerClient().getAdvancedDesignerCsResourceOperationService();

System.log("Cloning resource action " + resourceAction.getName() + "...");
var uri = client.createResourceOperation(cloned);
System.log("Resource action cloned.");

var uriString = uri.toString();
var uriParts = uriString.split("/");
var resourceActionId = uriParts[uriParts.length - 1];
return vCACCAFEEntitiesFinder.getResourceAction(host, resourceActionId);
}
}
