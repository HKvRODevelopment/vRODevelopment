/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.asd.resourceaction {
export function createResourceActionFromWorkflow(host?: vCACCAFE.VCACHost, name?: string, description?: string, workflowId?: string, resourceType?: vCACCAFE.CustomResource, parameterName?: string): vCACCAFE.ResourceAction {var client = host.createAdvancedDesignerClient().getAdvancedDesignerWorkflowService();
var param = new vCACCAFECsParameter() ;
param.setName(parameterName);
param.setResourceType(resourceType);

System.log("Generating resource operation " + name);
var resourceOperation = client.generateResourceOperationByWorkflowIdAndInputParameter(workflowId, param);
System.log("Generated resource operation " + name);
resourceOperation.setTenant(host.tenant);
resourceOperation.setName(name);
resourceOperation.setDescription(description);

var resourceOperationClient = host.createAdvancedDesignerClient().getAdvancedDesignerCsResourceOperationService();
System.log("Creating resource action " + resourceOperation.getName() + "...");
var uri = resourceOperationClient.createResourceOperation(resourceOperation);
var uriString = uri.toString();
System.log("Resource action created " + uriString);

var uriParts = uriString.split("/");
var resourceActionId = uriParts[uriParts.length - 1];
return vCACCAFEEntitiesFinder.getResourceAction(host, resourceActionId);
}
}
