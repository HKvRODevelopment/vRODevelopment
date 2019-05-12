/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell {
export function cmdletNameToActionName(cmdletName?: string): string {var result = cmdletName.charAt(0).toLowerCase()
result += cmdletName.substring(1).replace('-', '');

return result
}
}
