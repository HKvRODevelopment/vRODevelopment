/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.subtenant {
export function getMachinePrefix(businessGroup?: vCACCAFE.Subtenant): vCACCAFE.MachinePrefix {var host = vCACCAFEEntitiesFinder.getHostForEntity(businessGroup);
var machinePrefixId = vCACCAFESubtenantHelper.getMachinePrefixId(businessGroup);
if (machinePrefixId){
	return vCACCAFEEntitiesFinder.getMachinePrefix(host, machinePrefixId);
} else {
	return null;
}
}
}
