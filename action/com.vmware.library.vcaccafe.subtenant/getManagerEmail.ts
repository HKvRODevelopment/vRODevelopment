/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.subtenant {
export function getManagerEmail(businessGroup?: vCACCAFE.Subtenant): string {return vCACCAFESubtenantHelper.getManagerEmails(businessGroup);
}
}
