/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.storage {
export function listiSCSITargets(host?: VC.HostSystem, type?: string): Array<string> {if (host == null || type == null || type == ""){
	return [];
}

var hostStorageSystem = VcPlugin.toManagedObject( host, host.configManager.storageSystem );

// Display available storage adapters
var hostBusAdapters = hostStorageSystem.storageDeviceInfo.hostBusAdapter;

for (var busAdapter of hostBusAdapters){
	if(busAdapter.driver == 'iscsi_vmk'){
		var targetList = [];
		var delimiter = " ";
		if(type == 'Send'){
			for (var target of busAdapter.configuredSendTarget){
				targetList.push(target.address + delimiter + target.port); 
			}
		} else if (type == 'Static'){
			for (var target of busAdapter.configuredStaticTarget){
				targetList.push(target.address + delimiter + target.port + delimiter + target.iScsiName); 
			}
		} else {
			throw "Unknown target type '" + type + "'";
		}
		return targetList;
	}
}

throw "The iSCSI adapter is not enabled.";
}
}
