/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function isVcSupportedVersion(agent?: vCAC.VCACAgent, managementURI?: string, version?: string): boolean {var supportedVersions = agent.getSupportedVcVersions(managementURI);
for (var i in supportedVersions) {
	if (version.trim() == supportedVersions[i].trim()) {
		return true;
	}
}

return false;

}
}
