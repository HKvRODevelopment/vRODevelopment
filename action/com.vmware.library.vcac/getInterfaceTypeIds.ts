/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getInterfaceTypeIds(vcacHost?: vCAC.VCACHost): Array<string> {if (vcacHost == null) return null;
var entities = vCACEntityManager.readModelEntitiesByCustomFilter(vcacHost.id, "ManagementModelEntities.svc", "InterfaceTypes", null, null);
System.log("Interface Types found: "+entities.length);
var prop = new Properties();
for (var entity of entities) {
	prop.put(entity.getProperty("InterfaceTypeId"));
}
return prop.keys.sort();


}
}
