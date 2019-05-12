/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getUserEntityByName(vcacHost?: vCAC.VCACHost, userName?: string): vCAC.Entity {if (vcacHost == null) return null;
var model = "ManagementModelEntities.svc";
var entitySetName = "Users";

var property = new Properties();
property.put("UserName",userName);

var entities = vCACEntityManager.readModelEntitiesByCustomFilter(vcacHost.id, model, entitySetName, property, null);
if (entities != null){
	return entities[0];
}else{
	System.warn("No User found with name: "+userName);
	return null;
}
}
}
