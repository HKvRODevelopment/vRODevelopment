/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.approvalpolicy {
export function copyApprovalPolicy(approvalPolicy?: vCACCAFE.ApprovalPolicy, name?: string): vCACCAFE.ApprovalPolicy {com.vmware.library.vcaccafe.util.validateObject(approvalPolicy, "Approval policy");
var host = vCACCAFEEntitiesFinder.getHostForEntity(approvalPolicy);
var client = host.createApprovalClient().getApprovalApprovalPolicyService();

if ((name == null) || (name == "")) {
	name = "Copy of " + approvalPolicy.getName()
}

var copy = approvalPolicy;
copy.setId(null);
copy.setName(name);
copy.setState(vCACCAFEApprovalPolicyState.DRAFT);

var copyPhases = copy.getPhases();
for (var i = 0; i < copyPhases.length; i++) {
	copyPhases[i].setId(null);
	var copyLevels = copyPhases[i].getLevels();
	for (var j = 0; j < copyLevels.length; j++) {
		copyLevels[j].setId(null);
	}	
}

System.log("Copying approval policy '" + approvalPolicy.getName() + "'...");
copy = client.createPolicy(copy);
System.log("Approval policy '" + approvalPolicy.getName() + "' copied to '" + copy.getName() + "'.");

return vCACCAFEEntitiesFinder.getApprovalPolicy(host, copy.getId());
}
}
