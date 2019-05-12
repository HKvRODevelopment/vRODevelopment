/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getEntitiesBySystemFilter(host?: vCAC.VCACHost, modelName?: string, entitySetName?: string, filter?: string, orderBy?: string, select?: string, top?: number, skip?: number, headers?: Properties): Array<vCAC.Entity> {return vCACEntityManager.readModelEntitiesBySystemQuery(host.id, modelName, entitySetName, filter, orderBy, select, top, skip, headers);
}
}
