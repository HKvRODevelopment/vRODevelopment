/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getMachineOperationByName(vcacHost?: vCAC.VCACHost, name?: string): vCAC.Entity {if (vcacHost == null) return null;
var model = "ManagementModelEntities.svc";
var entitySetName = "MachineOperations";

var property = new Properties();
property.put("Name",name);

var entities = vCACEntityManager.readModelEntitiesByCustomFilter(vcacHost.id, model, entitySetName, property, null);
if (entities != null){
	if (entities.length >1) System.warn("Found more than one machine operation with name " + name);
	return entities[0];
}else{
	System.warn("No machine operation found with name: "+name);
	return null;
}
}
}
