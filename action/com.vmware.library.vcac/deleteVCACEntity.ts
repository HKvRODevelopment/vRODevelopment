/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function deleteVCACEntity(doHostId?: string, modelName?: string, entitySetName?: string, entityKeyString?: string, headers?: Properties): void {vCACEntityManager.deleteModelEntityBySerializedKey(doHostId, modelName, entitySetName, entityKeyString, headers);
}
}
