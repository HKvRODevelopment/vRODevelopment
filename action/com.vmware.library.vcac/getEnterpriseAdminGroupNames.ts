/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getEnterpriseAdminGroupNames(vcacHost?: vCAC.VCACHost): Array<string> {if (vcacHost == null) return null;
var entities = vCACEntityManager.readModelEntitiesByCustomFilter(vcacHost.id, "ManagementModelEntities.svc", "EnterpriseAdminGroups", null, null);
System.log("Enterprise Admin Groups found: "+entities.length);
var prop = new Properties();
for (var entity of entities) {
	prop.put(entity.getProperty("AdminName"));
}
return prop.keys.sort();


}
}
