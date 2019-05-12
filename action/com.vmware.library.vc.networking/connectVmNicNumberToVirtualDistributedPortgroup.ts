/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.networking {
export function connectVmNicNumberToVirtualDistributedPortgroup(vm?: VC.VirtualMachine, dvPortgroup?: VC.DistributedVirtualPortgroup, nicNumber?: number): VC.Task {// ------- ReconfigVM_Task -------
var vmspec = new VcVirtualMachineConfigSpec(); // Builds config spec object for VirtualMachine
var nicArray = new Array(); // Array holds each of the nic configurations (devicespecs)
var nic = new VcVirtualEthernetCardDistributedVirtualPortBackingInfo(); // NIC configuration spec and backing info
var port = new VcDistributedVirtualSwitchPortConnection(); // Port Connection details for dvSwitch backing
// need to get the uuid of the distributed virtual switch hosting the portgroup:
var dvSwitch = VcPlugin.convertToVimManagedObject(dvPortgroup, dvPortgroup.config.distributedVirtualSwitch);
port.switchUuid = dvSwitch.uuid;
port.portgroupKey = dvPortgroup.key;
nic.port = port;
if (nicNumber == null || nicNumber < 0 || nicNumber > 5){
	var nicNumber = 0;
}
var devicespec = new VcVirtualDeviceConfigSpec();
var devices = vm.config.hardware.device;
var actualPos = 0;
for (var i in devices){
	if (com.vmware.library.vc.vm.network.isSupportedNic(devices[i])) {
	    System.log("devices.deviceInfo.summary: '"+devices[i].deviceInfo.summary+"'");
		//if (devices[i].deviceInfo.summary == oldNetworkName) {
		if(actualPos++ == nicNumber){
		    devicespec.device = devices[i];
			devicespec.operation = VcVirtualDeviceConfigSpecOperation.edit;
			devicespec.device.backing = nic;
			nicArray.push(devicespec);
	    }
  }
}

vmspec.deviceChange = nicArray;
return vm.reconfigVM_Task(vmspec);
}
}
