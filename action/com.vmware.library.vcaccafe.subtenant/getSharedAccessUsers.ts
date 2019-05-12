/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.subtenant {
export function getSharedAccessUsers(subtenant?: vCACCAFE.Subtenant): Array<string> {return vCACCAFESubtenantHelper.getSharedAccessUsers(subtenant);
}
}
