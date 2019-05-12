/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.azure {
export function getVirtualMachineSizeByRegion(region?: Azure.Region): Array<Azure.VirtualMachineSize> {return AzureVirtualMachineManager.getVirtualMachineSizesByRegion(region);
}
}
