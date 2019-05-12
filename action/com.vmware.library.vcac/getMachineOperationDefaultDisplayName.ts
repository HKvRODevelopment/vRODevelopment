/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getMachineOperationDefaultDisplayName(name?: string, host?: vCAC.VCACHost): string {if (host == null || name == null) return null;

var entitySetName = "MachineOperations";
var modelName = "ManagementModelEntities.svc";

//Get all  definitions
var properties = new Properties();
properties.put("Name", name);
var entities = vCACEntityManager.readModelEntitiesByCustomFilter(host.id, modelName, entitySetName, properties, null);
if (entities == null) return null;

return entities[0].getProperty("DefaultDisplayName");
}
}
