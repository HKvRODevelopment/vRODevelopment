/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.subtenant {
export function getCustomPropertyIsRuntime(group?: vCACCAFE.Subtenant, name?: string): boolean {return vCACCAFESubtenantHelper.isCustomPropertyPromptUser(group, name);
}
}
