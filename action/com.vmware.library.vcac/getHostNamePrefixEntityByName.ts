/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getHostNamePrefixEntityByName(vcacHost?: vCAC.VCACHost, prefixName?: string): vCAC.Entity {if (vcacHost == null) return null;
var model = "ManagementModelEntities.svc";
var entitySetName = "HostNamePrefixes";

var prefixProperty = new Properties();
prefixProperty.put("MachinePrefix",prefixName);

var entities = vCACEntityManager.readModelEntitiesByCustomFilter(vcacHost.id, model, entitySetName, prefixProperty, null);
if (entities != null){
	return entities[0];
}else{
	System.warn("No HostName Prefix found with name: "+prefixName);
	return null;
}
}
}
