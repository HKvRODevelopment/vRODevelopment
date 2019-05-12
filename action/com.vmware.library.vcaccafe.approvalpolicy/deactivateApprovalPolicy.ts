/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.approvalpolicy {
export function deactivateApprovalPolicy(approvalPolicy?: vCACCAFE.ApprovalPolicy, deleteAssignments?: boolean): void {com.vmware.library.vcaccafe.util.validateObject(approvalPolicy, "Approval policy");
var host = vCACCAFEEntitiesFinder.getHostForEntity(approvalPolicy);
var approvalClient = host.createApprovalClient().getApprovalApprovalPolicyService();
var catalogClient = host.createCatalogClient().getCatalogApprovalRequestCallbackService();

var usages = catalogClient.getApprovalPolicyUsage(null, approvalPolicy.getId());
if (usages.length > 0) {
	if (deleteAssignments) {
		com.vmware.library.vcaccafe.approvalpolicy.replaceApprovalPolicy(approvalPolicy, null);
	} else {
		throw "Approval policy '" + approvalPolicy.getName() + "' is in use!";
	}
}

approvalPolicy.setState(vCACCAFEApprovalPolicyState.RETIRED);

System.log("Deactivating approval policy '" + approvalPolicy.getName() + "'...");
approvalClient.update(approvalPolicy);
System.log("Approval policy '" + approvalPolicy.getName() + "' deactivated.");

}
}
