/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.approvalpolicy {
export function getAvailableApprovalPolicyTypes(host?: vCACCAFE.VCACHost): Array<any> {var dataQuery = new vCACCAFEOdataQuery();
var order = new Array();
order[0] = "name";
dataQuery.addAscOrderBy(order);
var dataRequest = new vCACCAFEPageOdataRequest(1 , 100 , dataQuery);

var typeService = host.createApprovalClient().getApprovalApprovalPolicyTypeService();
var types = typeService.getApprovalPolicyTypes(dataRequest).getContent();

return types;
}
}
