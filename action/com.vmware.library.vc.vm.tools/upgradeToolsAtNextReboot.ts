/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.tools {
export function upgradeToolsAtNextReboot(vm?: VC.VirtualMachine): VC.Task {task = vm.upgradeTools_Task('/s /v"/qn REBOOT=ReallySuppress"');
return task;
}
}
