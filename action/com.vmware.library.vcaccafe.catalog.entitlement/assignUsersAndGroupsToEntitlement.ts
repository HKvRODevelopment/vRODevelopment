/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.catalog.entitlement {
export function assignUsersAndGroupsToEntitlement(entitlement?: vCACCAFE.Entitlement, users?: Array<string>, groups?: Array<string>): void {com.vmware.library.vcaccafe.util.validateObject(entitlement, "Entitlement");
var host = vCACCAFEEntitiesFinder.getHostForEntity(entitlement);
var client = host.createCatalogClient().getCatalogEntitlementService();

var alreadyExists;
for (var i = 0 ; users != null && i < users.length ; i++ ) {
	alreadyExists = false;
	for (var j = 0 ; j < entitlement.getPrincipals().length ; j++ ) {
		if (users[i] == entitlement.getPrincipals()[j].getRef()) {
			System.warn("User " + users[i] + " is already assigned to the entitlement. The user will be skipped.");
			alreadyExists = true;
			break;
		}
	}
	if (!alreadyExists) {
		var principal = new vCACCAFECatalogPrincipal();
		principal.setType(vCACCAFEPrincipalType.USER);
		principal.setRef(users[i]);
		principal.setTenantName(host.tenant);
		com.vmware.library.vcaccafe.util.addElementToList(entitlement, "getPrincipals", principal);
	}
}

for (var i = 0 ; groups != null && i < groups.length ; i++ ) {
	alreadyExists = false;
	for (var j = 0 ; j < entitlement.getPrincipals().length ; j++ ) {
		if (groups[i] == entitlement.getPrincipals()[j].getRef()) {
			System.warn("Group " + groups[i] + " is already assigned to the entitlement. The group will be skipped.");
			alreadyExists = true;
			break;
		}
	}
	if (!alreadyExists) {
		var principal = new vCACCAFECatalogPrincipal();
		principal.setType(vCACCAFEPrincipalType.GROUP);
		principal.setRef(groups[i]);
		principal.setTenantName(host.tenant);
		com.vmware.library.vcaccafe.util.addElementToList(entitlement, "getPrincipals", principal);
	}
}

System.log("Assigning groups and users to entitlement " + entitlement.getName() + "...");
client.update(entitlement);
System.log("Groups and users assigned to entitlement " + entitlement.getName());
}
}
