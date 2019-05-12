/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.catalog.entitlement {
export function activateEntitlement(entitlement?: vCACCAFE.Entitlement): void {var host = vCACCAFEEntitiesFinder.getHostForEntity(entitlement);
var client = host.createCatalogClient().getCatalogEntitlementService();

entitlement.setStatus(vCACCAFEEntitlementStatus.ACTIVE);

System.log("Activating entitlement " + entitlement.getName() + "...");
client.update(entitlement);
System.log("Entitlement: " + entitlement.getName() + " activated.");
}
}
