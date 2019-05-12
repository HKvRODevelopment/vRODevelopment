/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra {
export function getDefaultHostForTenant(tenantId?: string): vCACCAFE.VCACHost {if (vCACCAFEHostManager.defaultHostExists()) {
	var hosts = Server.findAllForType("vCACCAFE:vCACHOST" , "Default");
	for (var host of hosts) {
		var hostTenant = host.tenant == null ? null : host.tenant.toLowerCase();
		var inputTenant = tenantId == null ? null : tenantId.toLowerCase();
		if(hostTenant == inputTenant) {
			return host;
		}
	}
} else {
	return vCACCAFEHostManager.addHostUsingComponentRegistry(null);
}

}
}
