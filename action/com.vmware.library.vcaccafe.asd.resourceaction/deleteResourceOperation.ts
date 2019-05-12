/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.asd.resourceaction {
export function deleteResourceOperation(resourceAction?: vCACCAFE.ResourceAction): void {com.vmware.library.vcaccafe.util.validateObject(resourceAction, "Resource action");
var host = vCACCAFEEntitiesFinder.getHostForEntity(resourceAction);
var client = host.createAdvancedDesignerClient().getAdvancedDesignerCsResourceOperationService();

System.log("Deleteing resource action " + resourceAction.getName() + "...");
client.deleteResourceOperation(resourceAction.getId());
System.log("Resource action deleted.");
}
}
