/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function deleteEntity(entity?: vCAC.Entity): void {var entityKey = entity.entityKey;
var entityKeyId = entityKey.get("Id");

System.log("Delete Entity " + entity.entitySetName + " with id " + entity.keyString);
try {
vCACEntityManager.deleteModelEntityBySerializedKey(entity.hostId , entity.modelName , entity.entitySetName , entity.keyString , null);
} catch(e) {System.log(e)}
}
}
