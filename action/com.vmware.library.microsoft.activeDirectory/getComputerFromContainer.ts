/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.microsoft.activeDirectory {
export function getComputerFromContainer(container?: any, computerName?: string): AD.ComputerAD {computers = container.computers;
for (var index in computers) {
	if (computers[index].name.toLowerCase() == computerName.toLowerCase()) {
		return computers[index];
	}
}
return null;
}
}
