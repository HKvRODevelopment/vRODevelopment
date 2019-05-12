/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.asd.resourcemapping {
export function createResourceMapping(host?: vCACCAFE.VCACHost, name?: string, description?: string, catalogResourceType?: string, orchestratorType?: string, mappingWorkflowId?: string, mappingScriptAction?: string): vCACCAFE.CustomResource {var catalogResourceTypes = com.vmware.library.vcaccafe.asd.resourcemapping.getCatalogResourceTypes(host);
var catalogResourceTypeId;
for (var i = 0 ; i < catalogResourceTypes.length ; i++ ) {
	if(catalogResourceType == catalogResourceTypes[i].getName()) {
		catalogResourceTypeId = catalogResourceTypes[i].getId();
	}
}

var client = host.createAdvancedDesignerClient().getAdvancedDesignerCsResourceTypeService();

var resourceMapping = new vCACCAFECsResourceType();
resourceMapping.setName(name);
resourceMapping.setDescription(description);
resourceMapping.setVcoType(orchestratorType);
resourceMapping.setExternalTypeId(catalogResourceTypeId);
if(mappingWorkflowId){
	resourceMapping.setMappingWorkflowId(mappingWorkflowId);
}
if(mappingScriptAction){
	resourceMapping.setMappingScriptActionFqn(mappingScriptAction);
}
System.log("Creating resource mapping...");
var uri = client.createResourceType(host.tenant, resourceMapping);
var uriString = uri.toString();
System.log("Resource mapping created: " + uriString);

var uriParts = uriString.split("/");
var resourceId = uriParts[uriParts.length - 1];
return vCACCAFEEntitiesFinder.getResourceMapping(host, resourceId);
}
}
