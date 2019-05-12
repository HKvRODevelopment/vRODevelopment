/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.datastore {
export function getAllDatastoresOfVC(vc?: VC.SdkConnection): Array<VC.Datastore> {return vc.getAllDatastores();
}
}
