/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.catalog.service {
export function createService(host?: vCACCAFE.VCACHost, name?: string, description?: string, status?: string, ownerType?: string, owner?: string, supportTeamType?: string, supportTeam?: string, hoursFrom?: Date, hoursTo?: Date, dayOfTheWeek?: string, changeWindowFrom?: Date, changeWindowTo?: Date): vCACCAFE.Service {var client = host.createCatalogClient().getCatalogServiceAdminService();
var service = new vCACCAFEService();
service.setName(name);
service.setDescription(description);
service.setStatus(vCACCAFEStatus.valueOf(status));

var orgReference = new vCACCAFECatalogOrganizationReference();
orgReference.setTenantRef(host.tenant);
service.setOrganization(orgReference);

if (owner != null && owner != "") {
	var principal = new vCACCAFECatalogPrincipal();
	if (ownerType == "USER") {
		principal.setType(vCACCAFEPrincipalType.USER);
	} else {
		principal.setType(vCACCAFEPrincipalType.GROUP);
	}
	principal.setRef(owner);
	principal.setTenantName(host.tenant);
	service.setOwner(principal);
}

if (supportTeam != null && supportTeam != "") {
	var supportTeamRef = new vCACCAFECatalogPrincipal();
	if (supportTeamType == "USER") {
		supportTeamRef.setType(vCACCAFEPrincipalType.USER);
	} else {
		supportTeamRef.setType(vCACCAFEPrincipalType.GROUP);
	}
	supportTeamRef.setRef(supportTeam);
	supportTeamRef.setTenantName(host.tenant);
	service.setSupportTeam(supportTeamRef);
}

if (hoursTo != null && hoursFrom != null) {
	var timeRange = new vCACCAFETimeRange();
	timeRange.setStartTime(hoursFrom);
	timeRange.setEndTime(hoursTo);
	service.setHours(timeRange);
}

if (dayOfTheWeek != null && dayOfTheWeek != "" 
		&& changeWindowFrom != null && changeWindowFrom != "" 
		&& changeWindowTo != null && changeWindowTo != "") {
	var changeWindow = new vCACCAFEChangeWindow();
	changeWindow.setDayOfWeek(vCACCAFEDay.valueOf(dayOfTheWeek));
	var changeWindowRange = new vCACCAFETimeRange();
	changeWindowRange.setStartTime(changeWindowFrom);
	changeWindowRange.setEndTime(changeWindowTo);
	changeWindow.setHours(changeWindowRange);

	service.setChangeWindow(changeWindow);
}

System.log("Creating a service: " + service.getName() + "...");
var newService = client.createService(service);
System.log("Service: " + service.getName() + " created.");

return vCACCAFEEntitiesFinder.getService(host, newService.getId());
}
}
