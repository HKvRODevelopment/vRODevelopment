/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device {
export function createVirtualEthernetCardDvNetworkConfigSpec(dvPortgroup?: VC.DistributedVirtualPortgroup, macAddress?: string): any {// Create connectable info for dvPortgroup
var connectInfo = new VcVirtualDeviceConnectInfo();
connectInfo.allowGuestControl = false;
connectInfo.connected = false;
connectInfo.startConnected = true;
// Create Network BackingInfo
var dvsPortConnection = new VcDistributedVirtualSwitchPortConnection();
var dvSwitch = VcPlugin.convertToVimManagedObject(dvPortgroup, dvPortgroup.config.distributedVirtualSwitch);
dvsPortConnection.switchUuid = dvSwitch.uuid;
dvsPortConnection.portgroupKey = dvPortgroup.key;

var netBackingInfo = new VcVirtualEthernetCardDistributedVirtualPortBackingInfo() ;
netBackingInfo.port = dvsPortConnection;

//new VimVirtualEthernetCardNetworkBackingInfo();
//netBackingInfo.deviceName = dvPortGroup.name;

// Create VirtualNetwork
var vNetwork = new VcVirtualPCNet32();
vNetwork.backing = netBackingInfo;
vNetwork.key = 0;
vNetwork.unitNumber = 0;
if ( macAddress != null  &&  macAddress != "" )  {
	vNetwork.addressType = "Manual";
	vNetwork.macAddress = macAddress;
}
else  {
	vNetwork.addressType = "Generated";
}
vNetwork.connectable = connectInfo;
// Create Network ConfigSpec
var deviceConfigSpec = new VcVirtualDeviceConfigSpec();
deviceConfigSpec.device = vNetwork;
deviceConfigSpec.operation = VcVirtualDeviceConfigSpecOperation.add;

return deviceConfigSpec;

}
}
