/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.asd.blueprint {
export function createServiceBlueprintFromWorkflow(host?: vCACCAFE.VCACHost, name?: string, description?: string, workflowId?: string, resourceType?: vCACCAFE.CustomResource, outputParameterName?: string): vCACCAFE.ServiceBlueprint {var workflowClient = host.createAdvancedDesignerClient().getAdvancedDesignerWorkflowService();
System.log("Generating service blueprint " + name + "...");
var blueprint = workflowClient.generateServiceBlueprintByWorkflowId(workflowId);
System.log("Generated service blueprint " + name + ".");

blueprint.setTenant(host.tenant);
blueprint.setName(name);
blueprint.setDescription(description);
if(resourceType != null && outputParameterName != null) {
var parameter = new vCACCAFECsParameter();
	parameter.setName(outputParameterName);
	parameter.setResourceType(resourceType);
	blueprint.setOutputParameter(parameter);
}

var blueprintService = host.createAdvancedDesignerClient().getAdvancedDesignerServiceBlueprintService();
System.log("Creating service blueprint " + name + "...");
var uri = blueprintService.createServiceBlueprint(host.tenant , blueprint);
System.log("Created service blueprint " + name + ".");

var uriString = uri.toString();
var uriParts = uriString.split("/");
var serviceBlueprintId = uriParts[uriParts.length - 1];
return vCACCAFEEntitiesFinder.getServiceBlueprint(host, serviceBlueprintId);


}
}
