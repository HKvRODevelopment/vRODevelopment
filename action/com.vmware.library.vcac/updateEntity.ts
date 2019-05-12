/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function updateEntity(entity?: vCAC.Entity, inputProperties?: Properties, links?: Properties): void {hostId = entity.hostId;
modelName = entity.modelName;
entitySetName = entity.entitySetName;
entityIdString = entity.keyString;
var entityKey = entity.entityKey;

System.log("hostId : " + hostId);
System.log("modelName : " + modelName);
System.log("entitySetName : " + entitySetName);
System.log("entityIdString : " + entityIdString);
System.log("entityKey : " + entityKey);

vCACEntityManager.updateModelEntity(hostId, modelName, entitySetName, entityKey, inputProperties, links, null);	

}
}
