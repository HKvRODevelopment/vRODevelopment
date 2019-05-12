/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.catalog.service {
export function copyService(service?: vCACCAFE.Service, name?: string): vCACCAFE.Service {var host = vCACCAFEEntitiesFinder.getHostForEntity(service);
var client = host.createCatalogClient().getCatalogServiceAdminService();

var clonedService = new vCACCAFEService();
clonedService.setStatus(vCACCAFEStatus.RETIRED);
if(name == null || !name) {
	clonedService.setName("Copy of " + service.getName());
}else{
	clonedService.setName(name);
}
clonedService.setChangeWindow(service.getChangeWindow());
clonedService.setDescription(service.getDescription());
clonedService.setHours(service.getHours());
clonedService.setIconId(service.getIconId());
clonedService.setLastUpdatedBy(service.getLastUpdatedBy());
clonedService.setLastUpdatedDate(service.getLastUpdatedDate());
clonedService.setNewDuration(service.getNewDuration());
clonedService.setOrganization(service.getOrganization());
clonedService.setOwner(service.getOwner());
clonedService.setSupportTeam(service.getSupportTeam());
clonedService.setVersion(service.getVersion());

System.log("Creating a copy of service: " + service.getName() + "...");
var newService = client.createService(clonedService);
System.log("A copy of service: " + service.getName() + " created.");

return vCACCAFEEntitiesFinder.getService(host, newService.getId());


}
}
