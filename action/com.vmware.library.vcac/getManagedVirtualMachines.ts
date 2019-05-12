/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getManagedVirtualMachines(host?: vCAC.VCACHost): Array<vCAC.VirtualMachine> {var result = new Array()

if (host == null) return result;

var properties = new Properties();
properties.put("IsManaged", true);

var entities = vCACEntityManager.readModelEntitiesByCustomFilter(host.id, "ManagementModelEntities.svc", "VirtualMachines", properties, null);

System.log(entities);


for (var entity of entities) {
	result.push(entity.getInventoryObject());
}

return result;
}
}
