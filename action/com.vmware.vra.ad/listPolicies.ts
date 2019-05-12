/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.ad {
export function listPolicies(): Array<string> {var tenant = System.getContext().getParameter("__asd_tenantRef");
var vcacHost = vCACCAFEHostManager.getDefaultHostForTenant(tenant , true);
var restClient = vcacHost.createAdvancedDesignerClient();

try {
	var policies = restClient.get("policies").getBodyAsJson();
} catch (error) {
	throw "Error while retrieving policies: " + error;
}

var ret = [];

for (var pol of policies.content) {
	ret.push(pol.hrid);
}

return ret;

}
}
