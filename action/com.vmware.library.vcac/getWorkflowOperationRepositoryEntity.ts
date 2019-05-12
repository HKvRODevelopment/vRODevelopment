/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getWorkflowOperationRepositoryEntity(host?: vCAC.VCACHost): vCAC.Entity {var entitySetName = "RepositoryEntities";
var modelName = "Metamodel.svc";

//Get all workflow definitions
var properties = new Properties();
properties.put("Name", "WorkflowOperation");
var entities = vCACEntityManager.readModelEntitiesByCustomFilter(host.id, modelName, entitySetName, properties, null);
return entities[0];
}
}
