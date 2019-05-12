/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.network {
export function getNetworkForResourcePoolHostVm(pool?: VC.ResourcePool, host?: VC.HostSystem, vm?: VC.VirtualMachine): Array<VC.Network> {if (pool != null) {
	var parent = pool.parent;
	while (! (parent instanceof VcClusterComputeResource || parent instanceof VcComputeResource)) {
		parent = parent.parent;
	}
	return parent.network;
}
if (host != null) {
	return host.network;
}
if (vm != null) {
	return com.vmware.library.vc.network.getNetworksForVimHost(vm.vimHost);
}
}
}
