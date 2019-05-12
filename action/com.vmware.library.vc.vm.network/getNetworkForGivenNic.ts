/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.network {
export function getNetworkForGivenNic(vm?: VC.VirtualMachine, nicNumber?: number): VC.Network {var devices = vm.config.hardware.device;

for (var i in devices) {
	if (com.vmware.library.vc.vm.network.isSupportedNic(devices[i])) {
		if (--nicNumber == 0) {
			if (devices[i].backing instanceof VcVirtualEthernetCardNetworkBackingInfo) {
				return VcPlugin.convertToVimManagedObject(vm ,devices[i].backing.network);
			} else if (devices[i].backing instanceof VcVirtualEthernetCardDistributedVirtualPortBackingInfo) {
				var portgroupId = null;
				var portgroupKey = devices[i].backing.port.portgroupKey;
				var networks = vm.network;
				for (var j in networks) {
					var network = networks[j];
					if (network instanceof VcDistributedVirtualPortgroup) {
						if (network.key == portgroupKey) {
							portgroupId = network.id;
							break;
						}
					}
				}
				if (portgroupId == null) {
					return null;
				}
				var moRef = new VcManagedObjectReference();
				moRef.type = "DistributedVirtualPortgroup";
				moRef.value = portgroupId;
				return VcPlugin.convertToVimManagedObject(vm ,moRef);
			} else {
				return null;
			}
		}
	}
}
return null;

}
}
