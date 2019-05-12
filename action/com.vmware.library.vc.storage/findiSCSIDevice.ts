/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.storage {
export function findiSCSIDevice(host?: VC.HostSystem): string {var hostStorageSystem = VcPlugin.toManagedObject( host, host.configManager.storageSystem );

// Display available storage adapters
var hostBusAdapters = hostStorageSystem.storageDeviceInfo.hostBusAdapter;

for (var busAdapter of hostBusAdapters){
	if(busAdapter.driver == 'iscsi_vmk'){
		return busAdapter.device;
	}
}

throw "The iSCSI adapter is not enabled.";
}
}
