/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.catalog.service {
export function deleteService(service?: vCACCAFE.Service): void {var host = vCACCAFEEntitiesFinder.getHostForEntity(service);
var client = host.createCatalogClient().getCatalogServiceAdminService();

service.setStatus(vCACCAFEStatus.DELETED);

System.log("Deleting service...");
client.updateService(service);
System.log("Service: " + service.getName() + " deleted.");
}
}
