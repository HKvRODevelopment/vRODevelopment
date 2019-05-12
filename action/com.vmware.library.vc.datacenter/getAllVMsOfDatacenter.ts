/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.datacenter {
export function getAllVMsOfDatacenter(datacenter?: VC.Datacenter): Array<VC.VirtualMachine> {var vms = com.vmware.library.vc.folder.getAllVirtualMachinesByFolderIncludingSubFolders(datacenter.vmFolder);
return vms;

}
}
