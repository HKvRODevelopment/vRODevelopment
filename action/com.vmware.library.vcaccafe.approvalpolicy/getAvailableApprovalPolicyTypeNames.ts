/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.approvalpolicy {
export function getAvailableApprovalPolicyTypeNames(host?: vCACCAFE.VCACHost): Array<string> {var dataQuery = new vCACCAFEOdataQuery();
var order = new Array();
order[0] = "name";
dataQuery.addAscOrderBy(order);
var dataRequest = new vCACCAFEPageOdataRequest(1 , 100 , dataQuery);

var typeService = host.createApprovalClient().getApprovalApprovalPolicyTypeService();
var types = typeService.getApprovalPolicyTypes(dataRequest).getContent();

var approvalTypeNames = new Array();

for (var i = 0 ; i < types.length ; i++ ) {
		approvalTypeNames[i] = types[i].getName();
		System.log(types[i].getName());
}
return approvalTypeNames;
}
}
