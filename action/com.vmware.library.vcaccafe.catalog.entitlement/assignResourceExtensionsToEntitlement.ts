/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.catalog.entitlement {
export function assignResourceExtensionsToEntitlement(entitlement?: vCACCAFE.Entitlement, extensions?: Array<vCACCAFE.CatalogResourceExtension>, approvalPolicy?: vCACCAFE.ApprovalPolicy): void {if(approvalPolicy != null) {
	com.vmware.library.vcaccafe.util.checkHosts(entitlement, approvalPolicy, "entitlement", "approval policy");
}
var host = vCACCAFEEntitiesFinder.getHostForEntity(entitlement);
var client = host.createCatalogClient().getCatalogEntitlementService();

entitledResourceOperations = entitlement.getEntitledResourceOperations();
var entitledExtension;
for (var i = 0 ; i < extensions.length ; i++ ) {
	com.vmware.library.vcaccafe.util.checkHosts(entitlement, extensions[i], "entitlement", "resource extension");
	//Check if the resource extensions already exists in the entitlement
	var alreadyExists = false;
	for (var j = 0 ; j < entitledResourceOperations.length ; j++ ) {
		if(entitledResourceOperations[j].getResourceOperationRef().getId() == extensions[i].getId()) {
			System.warn("Resource extension " + extensions[i].getName() + " is already entitled. The extension will be skipped.");
			alreadyExists = true;
		}
	}
	if(!alreadyExists) {
		entitledExtension = new vCACCAFEEntitledResourceOperation();
		var resourceOperationReference = new vCACCAFELabelledReference();
		resourceOperationReference.setId(extensions[i].getId());
		resourceOperationReference.setLabel(extensions[i].getName());
		entitledExtension.setResourceOperationRef(resourceOperationReference);
		if(approvalPolicy != null) {
			entitledExtension.setApprovalPolicyId(approvalPolicy.getId());
		}
		com.vmware.library.vcaccafe.util.addElementToList(entitlement, "getEntitledResourceOperations", entitledExtension);
	}
}

System.log("Assigning resource extensions to entitlement " + entitlement.getName() + "...");
client.update(entitlement);
System.log("Resource extensions assigned to entitlement " + entitlement.getName());
}
}
