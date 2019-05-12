/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.catalog.entitlement {
export function assignServicesToEntitlement(entitlement?: vCACCAFE.Entitlement, services?: Array<vCACCAFE.Service>, approvalPolicy?: vCACCAFE.ApprovalPolicy): void {if(approvalPolicy != null) {
	com.vmware.library.vcaccafe.util.checkHosts(entitlement, approvalPolicy, "entitlement", "approval policy");
}
var host = vCACCAFEEntitiesFinder.getHostForEntity(entitlement);
var client = host.createCatalogClient().getCatalogEntitlementService();

var entitledServices = entitlement.getEntitledServices();
var entitledService;
for (var i = 0 ; i < services.length ; i++ ) {
	com.vmware.library.vcaccafe.util.checkHosts(entitlement, services[i], "entitlement", "service");
	//Check if the service already exists in the entitlement
	var alreadyExists = false;
	for (var j = 0 ; j < entitledServices.length ; j++ ) {
		if(entitledServices[j].getServiceRef().getId() == services[i].getId()) {
			System.warn("Service " + services[i].getName() + " is already entitled. The service will be skipped.");
			alreadyExists = true;
		}
	}
	if(!alreadyExists) {
		entitledService = new vCACCAFEEntitledService();
		var reference = new vCACCAFELabelledReference();
		reference.setId(services[i].getId());
		reference.setLabel(services[i].getName());
	
		entitledService.setServiceRef(reference);
		if(approvalPolicy != null) {
			entitledService.setApprovalPolicyId(approvalPolicy.getId());
		}
		com.vmware.library.vcaccafe.util.addElementToList(entitlement, "getEntitledServices", entitledService);
	}
}

System.log("Assigning services to entitlement " + entitlement.getName() + "...");
client.update(entitlement);
System.log("Services assigned to entitlement " + entitlement.getName());
}
}
