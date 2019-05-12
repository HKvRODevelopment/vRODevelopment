/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.basic {
export function cloneVM(vm?: VC.VirtualMachine, vmFolder?: VC.VmFolder, name?: string, powerOn?: boolean, template?: boolean, datastore?: VC.Datastore, host?: VC.HostSystem, pool?: VC.ResourcePool, thinProvisioned?: boolean): VC.Task {var transform = null;
if (thinProvisioned == true) {
	transform = VcVirtualMachineRelocateTransformation.sparse;
} else if (thinProvisioned == false) {
	transform = VcVirtualMachineRelocateTransformation.flat;
}

if (datastore == null) {
	datastore = vm.datastore[0];
}
relocateSpec = com.vmware.library.vc.vm.spec.getRelocateSpec(datastore,null,host,pool,transform);
cloneSpec = com.vmware.library.vc.vm.spec.getCloneSpec(null,null,relocateSpec,powerOn,template);





return vm.cloneVM_Task(vmFolder, name, cloneSpec);
}
}
