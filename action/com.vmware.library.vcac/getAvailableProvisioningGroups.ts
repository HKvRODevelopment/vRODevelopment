/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getAvailableProvisioningGroups(host?: vCAC.VCACHost): Array<vCAC.ProvisioningGroup> {if (host != null) {
	return host.findAllChildProvisioningGroups();
} else {
	return null;
}
}
}
