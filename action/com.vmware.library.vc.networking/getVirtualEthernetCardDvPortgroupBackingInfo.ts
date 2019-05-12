/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.networking {
export function getVirtualEthernetCardDvPortgroupBackingInfo(deviceName?: string, network?: VC.DistributedVirtualPortgroup): any {if (deviceName == null) {
	deviceName = network.name;
}
var connection = new VcDistributedVirtualSwitchPortConnection();
connection.PortgroupKey = network.key;
connection.SwitchUuid = network.config.distributedVirtualSwitch.uuid;
backing = new VcVirtualEthernetCardDistributedVirtualPortBackingInfo();
backing.Port = connection;

return backing;
}
}
