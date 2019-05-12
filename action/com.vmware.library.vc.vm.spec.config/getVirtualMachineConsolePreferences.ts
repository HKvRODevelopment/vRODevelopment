/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config {
export function getVirtualMachineConsolePreferences(closeOnPowerOffOrSuspend?: boolean, enterFullScreenOnPowerOn?: boolean, powerOnWhenOpened?: boolean): any {var prefs = new VcVirtualMachineConsolePreferences();
if (closeOnPowerOffOrSuspend != null) {
	prefs.closeOnPowerOffOrSuspend = closeOnPowerOffOrSuspend;
}
if (enterFullScreenOnPowerOn != null) {
	prefs.enterFullScreenOnPowerOn = enterFullScreenOnPowerOn;
}
if (powerOnWhenOpened != null) {
	prefs.powerOnWhenOpened = powerOnWhenOpened;
}
return prefs;
}
}
