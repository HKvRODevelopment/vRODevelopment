/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.asd.customresources {
export function deleteCustomResource(customResource?: vCACCAFE.CustomResource): void {com.vmware.library.vcaccafe.util.validateObject(customResource, "Custom resource");
var host = vCACCAFEEntitiesFinder.getHostForEntity(customResource);
var client = host.createAdvancedDesignerClient().getAdvancedDesignerCsResourceTypeService();

System.log("Deleting custom resource " + customResource.getName() + "...");
client.deleteResourceType(host.tenant, customResource.getId());
System.log("Custom resource deleted");
}
}
