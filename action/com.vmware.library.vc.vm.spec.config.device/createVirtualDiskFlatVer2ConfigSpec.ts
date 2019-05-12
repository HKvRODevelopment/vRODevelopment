/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device {
export function createVirtualDiskFlatVer2ConfigSpec(sizeInGB?: any, datastore?: VC.Datastore, controllerKey?: number, diskIndex?: number, diskMode?: VC.VirtualDiskMode, thinProvisioned?: boolean): any {// Create Disk BackingInfo
var diskBackingInfo = new VcVirtualDiskFlatVer2BackingInfo();
diskBackingInfo.diskMode = diskMode.value;
var datastorePath = "[" + datastore.info.name + "]";
diskBackingInfo.fileName = datastorePath;
diskBackingInfo.thinProvisioned = thinProvisioned;
// Create VirtualDisk
var disk = new VcVirtualDisk();
disk.backing = diskBackingInfo;
disk.controllerKey = controllerKey;
disk.key = -2;
// Index 0 is not valid since Vi 4.0 (probably a bug)
disk.unitNumber = diskIndex;
disk.capacityInKB = parseInt( "" + (sizeInGB*1024*1024) );
// Create Disk ConfigSpec
deviceConfigSpec = new VcVirtualDeviceConfigSpec();
deviceConfigSpec.device = disk;
deviceConfigSpec.fileOperation = VcVirtualDeviceConfigSpecFileOperation.create;
deviceConfigSpec.operation = VcVirtualDeviceConfigSpecOperation.add;

return deviceConfigSpec;

}
}
