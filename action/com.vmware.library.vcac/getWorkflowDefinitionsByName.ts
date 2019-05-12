/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getWorkflowDefinitionsByName(host?: vCAC.VCACHost, name?: string): Array<vCAC.Entity> {var modelName = "Metamodel.svc";
var entitySetName = "WorkflowDefinitions";

var properties = new Properties();
properties.put("Name", name);

return vCACEntityManager.readModelEntitiesByCustomFilter(host.id, modelName, entitySetName, properties, null);
}
}
