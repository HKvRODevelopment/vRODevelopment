/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getEnterpriseAdminGroupEntityByName(vcacHost?: vCAC.VCACHost, groupName?: string): vCAC.Entity {if (vcacHost == null) return null;
var model = "ManagementModelEntities.svc";
var entitySetName = "EnterpriseAdminGroups";

var groupProperty = new Properties();
groupProperty.put("AdminName",groupName);

var entities = vCACEntityManager.readModelEntitiesByCustomFilter(vcacHost.id, model, entitySetName, groupProperty, null);
if (entities != null){
	return entities[0];
}else{
	System.warn("No Enterprise Admin Group found with name: "+groupName);
	return null;
}
}
}
