/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device {
export function createVirtualEthernetCardNetworkConfigSpec(network?: VC.Network, macAddress?: string, nicType?: string): any {// Create connectable info for network
var connectInfo = new VcVirtualDeviceConnectInfo();
connectInfo.allowGuestControl = false;
connectInfo.connected = false;
connectInfo.startConnected = true;
// Create Network BackingInfo
var netBackingInfo = new VcVirtualEthernetCardNetworkBackingInfo();
netBackingInfo.deviceName = network.name;
// Create VirtualNetwork
var vNetwork = null;
if (!nicType || nicType == "pcnet32") {
    vNetwork = new VcVirtualPCNet32();
} else if (nicType == "e1000") {
    vNetwork = new VcVirtualE1000();
} else if (nicType == "e1000e") {
    vNetwork = new VcVirtualE1000e();
} else if (nicType == "vmxnet2") {
    vNetwork = new VcVirtualVmxnet2();
}else if (nicType == "vmxnet3") {
    vNetwork = new VcVirtualVmxnet3();
}else if (nicType == "sriov") {
    vNetwork = new VcVirtualSriovEthernetCard();
} else {
    throw "Unknown nic type " + nicType;
}
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
