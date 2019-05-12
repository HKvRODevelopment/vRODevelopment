/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.asd.blueprint {
export function cloneServiceBlueprint(serviceBlueprint?: vCACCAFE.ServiceBlueprint): vCACCAFE.ServiceBlueprint {com.vmware.library.vcaccafe.util.validateObject(serviceBlueprint, "Service blueprint");
var host = vCACCAFEEntitiesFinder.getHostForEntity(serviceBlueprint);
var blueprintService = host.createAdvancedDesignerClient().getAdvancedDesignerServiceBlueprintService();

System.log("Creating clone of service blueprint " + serviceBlueprint.getName() + "...");
var uri = blueprintService.cloneServiceBlueprint(serviceBlueprint.getTenant() , serviceBlueprint.getId());
System.log("Created clone of service blueprint " + serviceBlueprint.getName() + ".");

var uriString = uri.toString();
var uriParts = uriString.split("/");
var cloneId = uriParts[uriParts.length - 1];
return vCACCAFEEntitiesFinder.getServiceBlueprint(host, cloneId);
}
}
