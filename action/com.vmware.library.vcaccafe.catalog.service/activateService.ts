/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.catalog.service {
export function activateService(service?: vCACCAFE.Service): void {var host = vCACCAFEEntitiesFinder.getHostForEntity(service);
var client = host.createCatalogClient().getCatalogServiceAdminService();

service.setStatus(vCACCAFEStatus.ACTIVE);

System.log("Activating service...");
client.updateService(service);
System.log("Service: " + service.getName() + " activated.");
}
}
