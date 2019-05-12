/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm {
export function setDisksToNonPersistent(vm?: VC.VirtualMachine): VC.Task {var devices = vm.config.hardware.device;

var virtualMachineConfigSpec = new VcVirtualMachineConfigSpec();

var deviceChange = new Array();
for (var i in devices) {
	if (devices[i] instanceof VcVirtualDisk) {
		virtualDisk = devices[i];

		virtualDeviceConfigSpec = new VcVirtualDeviceConfigSpec();

		virtualDisk.backing.diskMode = VcVirtualDiskMode.independent_nonpersistent;

		virtualDeviceConfigSpec.device = virtualDisk;
		virtualDeviceConfigSpec.operation = VcVirtualDeviceConfigSpecOperation.edit;

		deviceChange.push(virtualDeviceConfigSpec);
	}
}
virtualMachineConfigSpec.deviceChange = deviceChange;


return vm.reconfigVM_Task(virtualMachineConfigSpec);

}
}
