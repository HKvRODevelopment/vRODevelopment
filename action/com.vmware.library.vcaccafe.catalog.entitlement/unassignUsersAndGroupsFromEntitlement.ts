/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.catalog.entitlement {
export function unassignUsersAndGroupsFromEntitlement(entitlement?: vCACCAFE.Entitlement, users?: Array<string>, groups?: Array<string>): void {com.vmware.library.vcaccafe.util.validateObject(entitlement, "Entitlement");
var host = vCACCAFEEntitiesFinder.getHostForEntity(entitlement);
var client = host.createCatalogClient().getCatalogEntitlementService();

var assigned;
for (var i = 0 ; users != null && i < users.length ; i++ ) {
	assigned = false;
	for (var j = 0 ; j < entitlement.getPrincipals().length ; j++ ) {
		var principal = entitlement.getPrincipals()[j];
		if (users[i] == principal.getRef()) {
			assigned = true;
			vCACCAFEEntityHelper.removeElementFromList(entitlement, "getPrincipals", principal);
			break;
		}
	}
	if (!assigned) {
		System.warn("User " + users[i] + " is not assigned to the entitlement. The user will be skipped.");
	}
}

for (var i = 0 ; groups != null && i < groups.length ; i++ ) {
	assigned = false;
	for (var j = 0 ; j < entitlement.getPrincipals().length ; j++ ) {
		var principal = entitlement.getPrincipals()[j];
		if (groups[i] == entitlement.getPrincipals()[j].getRef()) {
			assigned = true;
			vCACCAFEEntityHelper.removeElementFromList(entitlement, "getPrincipals", principal);
			break;
		}
	}
	if (!assigned) {
		System.warn("Group " + groups[i] + " is not assigned to the entitlement. The group will be skipped.");
	}
}

System.log("Unassigning groups and users from entitlement " + entitlement.getName() + "...");
client.update(entitlement);
System.log("Groups and users unassigned from entitlement " + entitlement.getName());
}
}
