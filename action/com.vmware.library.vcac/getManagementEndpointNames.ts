/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getManagementEndpointNames(vcacHost?: vCAC.VCACHost): Array<string> {if (vcacHost == null) return null;
var entities = vCACEntityManager.readModelEntitiesByCustomFilter(vcacHost.id, "ManagementModelEntities.svc", "ManagementEndpoints", null, null);
System.log("Management Endpoints found: "+entities.length);
var prop = new Properties();
for (var entity of entities) {
	prop.put(entity.getProperty("ManagementEndpointName"));
}
return prop.keys.sort();
}
}
