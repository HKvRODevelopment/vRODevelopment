/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.ad {
export function getPolicyConfig(vcacHost?: vCACCAFE.VCACHost, policyId?: string): any {var restClient = vcacHost.createAdvancedDesignerClient();
var policyObject = null;

try {
	policyObject = restClient.getWithVariables("policies/hrid/{hrid}", [policyId]).getBodyAsJson();
} catch (error) {
	throw "No policy with id '" + policyId + "' found. Error: " + error;
}

var ret = {};

for (var prop of policyObject.properties.entries) {
	var val = prop.value ? prop.value.value : null;
	switch(prop.key) {
		case "ext.policy.activedirectory.domain":
			ret.domainName = val;
			break;
		case "ext.policy.activedirectory.orgunit":
			ret.ouDN = val;
			break;
		case "ext.policy.activedirectory.endpoint.id":
			ret.adHostId = val;
			break;
		default:
			System.log("Unrecognized property '" + prop.key + "' with value = '" + val);
	} 
}

return ret;
}
}
