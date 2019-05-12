/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getUserNames(vcacHost?: vCAC.VCACHost): Array<string> {if (vcacHost == null) return null;
var modelName = "ManagementModelEntities.svc";
var entitySetName = "Users";

var entities = vCACEntityManager.readModelEntitiesByCustomFilter(vcacHost.id, modelName, entitySetName, null, null);
System.log("User Names found: "+entities.length);
var prop = new Properties();
for (var entity of entities) {
	prop.put(entity.getProperty("UserName"));
}
return prop.keys.sort();
}
}
