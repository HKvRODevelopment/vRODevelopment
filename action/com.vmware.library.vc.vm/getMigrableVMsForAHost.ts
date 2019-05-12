/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm {
export function getMigrableVMsForAHost(host?: VC.HostSystem): Array<VC.VirtualMachine> {var result = new Array();

for (var datastore of host.datastore) {
	for (var vm of datastore.vm) {
		if (checkVMaccessHost(vm, host)) {
			result.push(vm);
		}
	}
}

return result;

function checkVMaccessHost (vm, host) {  // as boolean
	if (vm != null && vm.runtime != null && vm.runtime.host!= null && vm.runtime.host.sdkId == host.sdkId) {
		return false;
	}
	for (var datastore of vm.datastore) {
		for (var hostMount of datastore.host) {
			System.debug(hostMount.key + " ?= " + host);
			if (hostMount.key == host)
				return true;
		}
	}
	return false;
}
}
}
