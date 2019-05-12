/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.resourcePool {
export function createResourcePool(resourcePool?: VC.ResourcePool, name?: string): VC.ResourcePool {// Action 'getSharesInfo' takes a VC:SharesLevel (Finder enum) parameter so we
//  can't use VcSharesInfo.normal as parameter
var finderEnum = Server.findForType("VC:SharesLevel", "normal");
var shares = com.vmware.library.vc.spec.getSharesInfo(finderEnum,0);
var allocation = com.vmware.library.vc.spec.getResourceAllocationInfo(true,-1,0,shares);

var resourceConfigSpec = new VcResourceConfigSpec();
resourceConfigSpec.cpuAllocation = allocation;
resourceConfigSpec.memoryAllocation = allocation;

return resourcePool.createResourcePool(name, resourceConfigSpec);

}
}
