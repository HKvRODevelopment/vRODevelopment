/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function updateVCACEntity(hostId?: string, modelName?: string, entitySetName?: string, entityIdString?: string, properties?: Properties, links?: Properties, headers?: Properties): vCAC.Entity {return vCACEntityManager.updateModelEntityBySerializedKey(hostId, modelName, entitySetName, entityIdString, properties, links, headers);
}
}
