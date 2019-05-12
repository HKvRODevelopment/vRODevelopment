/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.basic {
export function getVimHostForVimObject(object?: any): VC.SdkConnection {return object.sdkConnection;
}
}
