/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.tools {
export function updateToolsOnWindowsVirtualMachineWithoutRebooting(vm?: VC.VirtualMachine): VC.Task {task = vm.upgradeTools_Task('/s /v"/qn REBOOT=ReallySuppress"');
return task;
}
}
