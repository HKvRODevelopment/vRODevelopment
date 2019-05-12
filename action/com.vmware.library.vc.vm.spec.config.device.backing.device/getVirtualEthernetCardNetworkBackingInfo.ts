/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device.backing.device {
export function getVirtualEthernetCardNetworkBackingInfo(deviceName?: string, network?: VC.Network): any {if (deviceName == null) 
	deviceName = network.name;
	
var backing = new VcVirtualEthernetCardNetworkBackingInfo();
backing.deviceName = deviceName;
//backing.network = network.reference; Not used during configuration
return backing;
}
}
