/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.catalog.entitlement {
export function assignCatalogItemsToEntitlement(entitlement?: vCACCAFE.Entitlement, catalogItems?: Array<vCACCAFE.AdminCatalogItem>, approvalPolicy?: vCACCAFE.ApprovalPolicy): void {if(approvalPolicy != null) {
	com.vmware.library.vcaccafe.util.checkHosts(entitlement, approvalPolicy, "entitlement", "approval policy");
}
var host = vCACCAFEEntitiesFinder.getHostForEntity(entitlement);
var client = host.createCatalogClient().getCatalogEntitlementService();

var entitledCatalogItems = entitlement.getEntitledCatalogItems();

var entitledCatalogItem;
for (var i = 0 ; i < catalogItems.length ; i++ ) {
	com.vmware.library.vcaccafe.util.checkHosts(entitlement, catalogItems[i], "entitlement", "catalog item");
	//Check if the catalog item already exists in the entitlement
	var alreadyExists = false;
	for (var j = 0 ; j < entitledCatalogItems.length ; j++ ) {
		if(entitledCatalogItems[j].getCatalogItemRef().getId() == catalogItems[i].getId()) {
			System.warn("Catalog item: " + catalogItems[i].getName() + " is already entitled. The item will be skipped.");
			alreadyExists = true;
		}
	}
	if(!alreadyExists) {
		entitledCatalogItem = new vCACCAFEEntitledCatalogItem() ;
		var reference = new vCACCAFELabelledReference();
		reference.setId(catalogItems[i].getId());
		reference.setLabel(catalogItems[i].getName());
		entitledCatalogItem.setCatalogItemRef(reference);
		if(approvalPolicy != null) {
			entitledCatalogItem.setApprovalPolicyId(approvalPolicy.getId());
		}
		com.vmware.library.vcaccafe.util.addElementToList(entitlement, "getEntitledCatalogItems", entitledCatalogItem);
	}
}

System.log("Assigning catalog items to entitlement " + entitlement.getName() + "...");
client.update(entitlement);
System.log("Catalog items assigned to entitlement " + entitlement.getName());
}
}
