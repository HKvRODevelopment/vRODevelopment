/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.datastore {
export function getDatastoreFreeSize(datastore?: VC.Datastore): number {return datastore.summary.freeSpace / 1024 / 1024;
}
}
