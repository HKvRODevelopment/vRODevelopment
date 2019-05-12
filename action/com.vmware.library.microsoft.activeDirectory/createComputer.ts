/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.microsoft.activeDirectory {
export function createComputer(parent?: any, computerName?: string, domainName?: string): void {parent.createComputer(computerName, domainName);
}
}
