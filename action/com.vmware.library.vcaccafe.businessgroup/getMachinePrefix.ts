/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.businessgroup {
export function getMachinePrefix(group?: vCACCAFE.BusinessGroup): vCACCAFE.MachinePrefix {var host = vCACCAFEEntitiesFinder.getHostForEntity(group);
return vCACCAFEEntitiesFinder.getMachinePrefix(host, group.getMachinePrefixId().toString());
}
}
