/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getMachineOperationsByName(host?: vCAC.VCACHost, name?: string): Array<vCAC.Entity> {var modelName = "ManagementModelEntities.svc";
var entitySetName = "MachineOperations";

var properties = new Properties();
properties.put("Name", name);

return vCACEntityManager.readModelEntitiesByCustomFilter(host.id, modelName, entitySetName, properties, null);
}
}
