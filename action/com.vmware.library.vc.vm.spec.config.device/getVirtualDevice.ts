/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device {
export function getVirtualDevice(device?: any, backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number): any {if (device == null) throw "ReferenceError: device cannot be null. getVirtualDevice must be called from another getVirtual[device] action";
if (backing != null) {
	if (checkBackingType(backing) == true) {
		device.backing = backing;
	}
}
if (connectable != null) {
	if (connectable instanceof VcVirtualDeviceConnectInfo) {
		device.connectable = connectable;
	}
	else {
		throw "ReferenceError: connectable must be of type 'VcVirtualDeviceConnectInfo'";
	}
}
if (deviceInfo != null) {
	if (deviceInfo instanceof VcDescription) {
		device.deviceInfo = deviceInfo;
	}
	else {
		throw "ReferenceError: deviceInfo must be of type 'VcDescription'";
	}
}
if (key != null) {
	device.key = key;
}
else {
	device.key = 0;
	System.log("Device key not set. Force to 0");
}
if (unitNumber != null) {
	device.unitNumber = unitNumber;
}

return device;


function checkBackingType(backing) {
	if (backing instanceof VcVirtualCdromAtapiBackingInfo) return true;
	if (backing instanceof VcVirtualCdromPassthroughBackingInfo) return true;
	if (backing instanceof VcVirtualDiskRawDiskVer2BackingInfo) return true;
	if (backing instanceof VcVirtualDiskPartitionedRawDiskVer2BackingInfo) return true;
	if (backing instanceof VcVirtualEthernetCardLegacyNetworkBackingInfo) return true;
	if (backing instanceof VcVirtualEthernetCardNetworkBackingInfo) return true;
	if (backing instanceof VcVirtualEthernetCardDistributedVirtualPortBackingInfo) return true;
	if (backing instanceof VcVirtualFloppyDeviceBackingInfo) return true;
	if (backing instanceof VcVirtualParallelPortDeviceBackingInfo) return true;
	if (backing instanceof VcVirtualPointingDeviceDeviceBackingInfo) return true;
	if (backing instanceof VcVirtualSCSIPassthroughDeviceBackingInfo) return true;
	if (backing instanceof VcVirtualSerialPortDeviceBackingInfo) return true;
	if (backing instanceof VcVirtualSoundCardDeviceBackingInfo) return true;
	if (backing instanceof VcVirtualDeviceFileBackingInfo) return true;
	if (backing instanceof VcVirtualDevicePipeBackingInfo) return true;
	if (backing instanceof VcVirtualDeviceRemoteDeviceBackingInfo) return true;
	
	if (backing instanceof VcVirtualCdromIsoBackingInfo) return true;
	if (backing instanceof VcVirtualDiskFlatVer1BackingInfo) return true;
	if (backing instanceof VcVirtualDiskFlatVer2BackingInfo) return true;
	if (backing instanceof VcVirtualDiskRawDiskMappingVer1BackingInfo) return true;
	if (backing instanceof VcVirtualDiskSparseVer1BackingInfo) return true;
	if (backing instanceof VcVirtualDiskSparseVer2BackingInfo) return true;
	if (backing instanceof VcVirtualFloppyImageBackingInfo) return true;
	if (backing instanceof VcVirtualParallelPortFileBackingInfo) return true;
	if (backing instanceof VcVirtualSerialPortFileBackingInfo) return true;

	if (backing instanceof VcVirtualSerialPortPipeBackingInfo) return true;
	
	if (backing instanceof VcVirtualCdromRemoteAtapiBackingInfo) return true;
	if (backing instanceof VcVirtualCdromRemotePassthroughBackingInfo) return true;
	if (backing instanceof VcVirtualFloppyRemoteDeviceBackingInfo) return true;
	throw ("TypeError: backing is not of a valide type. type is: " + System.getObjectClassName(backing));
}
}
}
