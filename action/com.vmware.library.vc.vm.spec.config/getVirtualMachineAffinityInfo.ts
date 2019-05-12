/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config {
export function getVirtualMachineAffinityInfo(affinitySet?: Array<number>): any {var infos = new VcVirtualMachineAffinityInfo();
if (affinitySet != null) {
	infos.affinitySet = affinitySet;
}
return infos;
}
}
