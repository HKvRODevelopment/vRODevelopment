/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.businessgroup {
export function getAvailableMachinePrefixes(parent?: any, query?: string): Array<vCACCAFE.MachinePrefix> {var host = null;
if (parent instanceof vCACCAFEHost) {
	host = parent;
} else if (parent instanceof vCACCAFEBusinessGroup) {
	host = vCACCAFEEntitiesFinder.getHostForEntity(parent);
} else {
	throw "Invalid machine prefix parent, it must be a vCAC host or a Business group!";
}
return vCACCAFEEntitiesFinder.findMachinePrefixes(host, query);
}
}
