/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.asd.resourcemapping {
export function setTargetCriteria(resourceMapping?: vCACCAFE.CustomResource, targetCriteria?: string): vCACCAFE.CustomResource {com.vmware.library.vcaccafe.util.validateObject(resourceMapping, "Resource mapping");
var mapping = {
    "id": {
		"id": resourceMapping.getTenantedUuid().getId(),
		"tenant": resourceMapping.getTenantedUuid().getTenant()
	},
    "name": resourceMapping.getName(),
    "description": resourceMapping.getDescription(),
    "vcoType": resourceMapping.getVcoType(),
    "externalTypeId": resourceMapping.getExternalTypeId(),
    "mappingScriptActionFqn": resourceMapping.getMappingScriptActionFqn(),
    "mappingWorkflowId": resourceMapping.getMappingWorkflowId(),
    "targetCriteria": JSON.parse(targetCriteria)
};

var host = vCACCAFEEntitiesFinder.getHostForEntity(resourceMapping);
var client = host.createAdvancedDesignerClient();
System.log("Setting target criteria to mapping: " + resourceMapping.getName());
client.post("/tenants/" + host.tenant + "/types", mapping);
System.log("Target criteria set successfully");

return vCACCAFEEntitiesFinder.getResourceMapping(host, resourceMapping.getId().toString());
}
}
