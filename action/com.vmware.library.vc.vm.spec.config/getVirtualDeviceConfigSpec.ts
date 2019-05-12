/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config {
export function getVirtualDeviceConfigSpec(device?: any, fileOperation?: VC.VirtualDeviceConfigSpecFileOperation, operation?: VC.VirtualDeviceConfigSpecOperation): any {var configSpec = new VcVirtualDeviceConfigSpec();
if (device != null) {
	if (testDeviceType(device)) {
		configSpec.device = device;
	}
}
else {
	throw "ReferenceError: device cannot be null";
}
if (fileOperation != null) {
	if (fileOperation instanceof VcVirtualDeviceConfigSpecFileOperation) {
		configSpec.fileOperation = fileOperation;
	}
	else {
		throw "TypeError: fileOperation must be of type 'VcVirtualDeviceConfigSpecFileOperation'";
	}
}
if (operation != null) {
	//if (operation instanceof VcVirtualDeviceConfigSpecOperation) {
		configSpec.operation = VcVirtualDeviceConfigSpecOperation.fromString(operation.name);
//	}
//	else {
//		throw new TypeError("operation must be of type 'VcVirtualDeviceConfigSpecOperation'");
//	}
}
return configSpec;
	
	

function testDeviceType (device) {
	if (device instanceof VcVirtualCdrom) return true;
	
	if (device instanceof VcVirtualIDEController) return true;
	if (device instanceof VcVirtualPCIController) return true;
	if (device instanceof VcVirtualPS2Controller) return true;
	if (device instanceof VcVirtualSCSIController) return true;
	if (device instanceof VcVirtualSIOController) return true;
	if (device instanceof VcVirtualUSBController) return true;

	if (device instanceof VcVirtualDisk) return true;
	
	if (com.vmware.library.vc.vm.network.isSupportedNic(device)) return true;
	
	if (device instanceof VcVirtualFloppy) return true;
	
	if (device instanceof VcVirtualKeyboard) return true;
	
	if (device instanceof VcVirtualMachineVideoCard) return true;
	
	if (device instanceof VcVirtualParallelPort) return true;
	
	if (device instanceof VcVirtualPointingDevice) return true;
	
	if (device instanceof VcVirtualSCSIPassthrough) return true;
	
	if (device instanceof VcVirtualSerialPort) return true;
	
	if (device instanceof VcVirtualEnsoniq1371) return true;
	if (device instanceof VcVirtualSoundBlaster16) return true; 
	
	if (device instanceof VcVirtualUSB) return true; 

	throw "TypeError: Device is not of a supported virtual device type";
}
}
}
