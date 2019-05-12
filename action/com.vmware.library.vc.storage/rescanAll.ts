/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.storage {
export function rescanAll(host?: VC.HostSystem): void {var hostStorageSystem = VcPlugin.convertToVimManagedObject( host, host.configManager.storageSystem );
hostStorageSystem.rescanAllHba();
hostStorageSystem.rescanVmfs();
hostStorageSystem.refreshStorageSystem();

}
}
