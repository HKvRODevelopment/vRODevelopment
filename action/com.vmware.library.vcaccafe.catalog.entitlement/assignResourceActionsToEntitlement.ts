/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.catalog.entitlement {
export function assignResourceActionsToEntitlement(entitlement?: vCACCAFE.Entitlement, actions?: Array<vCACCAFE.CatalogResourceAction>, approvalPolicy?: vCACCAFE.ApprovalPolicy): void {if(approvalPolicy != null) {
	com.vmware.library.vcaccafe.util.checkHosts(entitlement, approvalPolicy, "entitlement", "approval policy");
}
var host = vCACCAFEEntitiesFinder.getHostForEntity(entitlement);
var client = host.createCatalogClient().getCatalogEntitlementService();

var entitledResourceOperations = entitlement.getEntitledResourceOperations();
var entitledAction;
for (var i = 0 ; i < actions.length ; i++ ) {
	com.vmware.library.vcaccafe.util.checkHosts(entitlement, actions[i], "entitlement", "resource action");
	//Check if the resource operation already exists in the entitlement
	var alreadyExists = false;
	for (var j = 0 ; j < entitledResourceOperations.length ; j++ ) {
		if(entitledResourceOperations[j].getResourceOperationRef().getId() == actions[i].getId()) {
			System.warn("Resource action " + actions[i].getName() + " is already entitled. The action will be skipped.");
			alreadyExists = true;
		}
	}
	if(!alreadyExists) {
		entitledAction = new vCACCAFEEntitledResourceOperation();
		var resourceOperationReference = new vCACCAFELabelledReference();
		resourceOperationReference.setId(actions[i].getId());
		resourceOperationReference.setLabel(actions[i].getName());
		entitledAction.setResourceOperationRef(resourceOperationReference);
		if(approvalPolicy != null) {
			entitledAction.setApprovalPolicyId(approvalPolicy.getId());
		}
		com.vmware.library.vcaccafe.util.addElementToList(entitlement, "getEntitledResourceOperations", entitledAction);
	}
}

System.log("Assigning resource actions to entitlement " + entitlement.getName() + "...");
client.update(entitlement);
System.log("Resource actions assigned to entitlement " + entitlement.getName());
}
}
