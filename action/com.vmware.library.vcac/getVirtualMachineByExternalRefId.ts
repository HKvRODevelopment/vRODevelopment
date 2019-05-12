/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getVirtualMachineByExternalRefId(host?: vCAC.VCACHost, uniqueId?: string): vCAC.Entity {if (uniqueId == null) {
	return null;
}
var modelName = 'ManagementModelEntities.svc';
var entitySetName = 'VirtualMachines';

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
