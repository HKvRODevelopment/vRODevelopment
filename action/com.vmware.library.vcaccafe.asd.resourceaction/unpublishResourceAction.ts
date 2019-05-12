/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.asd.resourceaction {
export function unpublishResourceAction(resourceAction?: vCACCAFE.ResourceAction): void {com.vmware.library.vcaccafe.util.validateObject(resourceAction, "Resource action");
var host = vCACCAFEEntitiesFinder.getHostForEntity(resourceAction);
var resourceOperationClient = host.createAdvancedDesignerClient().getAdvancedDesignerCsResourceOperationService();

System.log("Unpublishing resource action " + resourceAction.getName() + "...");
resourceOperationClient.updateResourceOperationStatus(resourceAction.getId(), vCACCAFEDesignerPublishStatus.DRAFT);
System.log("Resource action " + resourceAction.getName() + " unpublished.");
}
}
