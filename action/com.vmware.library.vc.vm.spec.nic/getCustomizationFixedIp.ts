/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.nic {
export function getCustomizationFixedIp(ipAddress?: string): any {var fixedIp = new VcCustomizationFixedIp();
fixedIp.ipAddress = ipAddress;
return fixedIp;
}
}
