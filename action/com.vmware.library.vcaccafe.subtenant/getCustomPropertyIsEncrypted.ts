/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.subtenant {
export function getCustomPropertyIsEncrypted(group?: vCACCAFE.Subtenant, name?: string): boolean {return vCACCAFESubtenantHelper.isCustomPropertyEncrypted(group, name);
}
}
