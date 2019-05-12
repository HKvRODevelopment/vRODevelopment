/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.approvalpolicy {
export function createApprovalPolicy(host?: vCACCAFE.VCACHost, name?: string, description?: string, type?: string): vCACCAFE.ApprovalPolicy {var approvalClient = host.createApprovalClient();
var typeService = approvalClient.getApprovalApprovalPolicyTypeService();

var types = com.vmware.library.vcaccafe.approvalpolicy.getAvailableApprovalPolicyTypes(host)
var policyType;
for (var i = 0 ; i < types.length ; i++ ) {
	if(types[i].getName() == type) {
		policyType = types[i];
		break;
	}
}

var approvalPolicy = new vCACCAFEApprovalPolicy();
approvalPolicy.setName(name);
approvalPolicy.setDescription(description);
approvalPolicy.setPolicyType(policyType);
approvalPolicy.setState(vCACCAFEApprovalPolicyState.DRAFT);

var phases = new Array();
for (var i = 0 ; i < policyType.getPhaseTypes().length ; i++ ) {
	var phaseType = policyType.getPhaseTypes()[i];
	var phase = new vCACCAFEPhase();
	phase.setDescription(phaseType.getDescription());
	phase.setName(phaseType.getName());
	phase.setPhasetype(phaseType);
	
	com.vmware.library.vcaccafe.util.addElementToList(approvalPolicy, "getPhases", phase);
}

var approvalPolicyService = approvalClient.getApprovalApprovalPolicyService();
System.log("Creating an approval policy...");
newPolicy = approvalPolicyService.createPolicy(approvalPolicy);
System.log("Approval policy " + newPolicy.getName() + " created.");
return vCACCAFEEntitiesFinder.getApprovalPolicy(host, newPolicy.getId());
}
}
