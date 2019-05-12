/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getManagementEndpointEntityByName(vcacHost?: vCAC.VCACHost, endpointName?: string): vCAC.Entity {if (vcacHost == null) return null;
var model = "ManagementModelEntities.svc";
var entitySetName = "ManagementEndpoints";

var endpointProperty = {
	ManagementEndpointName:endpointName,
}

var entities = vCACEntityManager.readModelEntitiesByCustomFilter(vcacHost.id, model, entitySetName, endpointProperty, null);
if (entities != null){
	return entities[0];
}else{
	System.warn("No Management Endpoint found with name: "+endpointName);
	return null;
}
}
}
