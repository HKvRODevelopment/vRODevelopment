/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.approvalpolicy {
export function getApprovalPolicyPhaseTypeIds(approvalPolicy?: vCACCAFE.ApprovalPolicy): Array<string> {if (approvalPolicy == null) {
    return new Array();
}

var phaseTypes = approvalPolicy.getPolicyType().getPhaseTypes();
var ids = new Array();
for (var i = 0 ; i < phaseTypes.length ; i++ ) {
	ids[i] = phaseTypes[i].getId();
}
return ids;
}
}
