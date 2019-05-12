/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec {
export function checkVMwareInput(vm?: VC.VirtualMachine, folder?: VC.VmFolder, datastore?: VC.Datastore, host?: VC.HostSystem, pool?: VC.ResourcePool): void {if (vm != null) {
	var vcenter = vm.vimHost;
}
if (folder != null && folder.vimHost != vcenter) throw "Target folder is not part of the same VI Server as the source VM";
if (datastore != null && datastore.vimHost != vcenter) throw "Target datastore is not part of the same VI Server as the source VM";
if (host != null && host.vimHost != vcenter) throw "Target host is not part of the same VI Server as the source VM";
if (pool != null && pool.vimHost != vcenter) throw "Target pool is not part of the same VI Server as the source VM";
}
}
