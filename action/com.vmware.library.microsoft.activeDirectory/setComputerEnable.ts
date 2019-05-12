/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.microsoft.activeDirectory {
export function setComputerEnable(computer?: AD.ComputerAD, enable?: boolean): void {computer.enabled = enable;
}
}
