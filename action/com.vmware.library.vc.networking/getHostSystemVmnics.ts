/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.networking {
export function getHostSystemVmnics(hostSystem?: VC.HostSystem): Array<string> {var vmnicNames = new Array();
if (hostSystem != null) {
	var pnics = hostSystem.configManager.networkSystem.networkConfig.pnic;
	//System.log("Checking pnics from networkConfig: ");
	for (var pnic of pnics){
		System.log("Device: "+pnic.device);
		vmnicNames.push(pnic.device);
	}
}
return vmnicNames;
}
}
