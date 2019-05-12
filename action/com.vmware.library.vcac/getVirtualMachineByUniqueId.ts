/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getVirtualMachineByUniqueId(host?: vCAC.VCACHost, uniqueId?: string): vCAC.Entity {if (uniqueId == null) {
	return null;
}
var modelName = 'ManagementModelEntities.svc';
var entitySetName = 'VirtualMachines';
//421d3de5-bd45-4afe-9038-6db417f27b38
var filter = "VMUniqueID eq '" + uniqueId + "'";
var orderBy = null;
var top = 1;
var skip = 0;
var headers = null;
var select = null;

var entities = vCACEntityManager.readModelEntitiesBySystemQuery(host.id, modelName, entitySetName, filter, orderBy, select,
top, skip, headers);

if (entities.length > 0) {
	return entities[0];
}

return null;



}
}
