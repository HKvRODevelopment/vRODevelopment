/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.subtenant {
export function getManagers(businessGroup?: vCACCAFE.Subtenant): Array<string> {return vCACCAFESubtenantHelper.getManagers(businessGroup);
}
}
