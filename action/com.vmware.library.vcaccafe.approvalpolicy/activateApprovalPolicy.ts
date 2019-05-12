/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.approvalpolicy {
export function activateApprovalPolicy(approvalPolicy?: vCACCAFE.ApprovalPolicy): void {com.vmware.library.vcaccafe.util.validateObject(approvalPolicy, "Approval policy");
var host = vCACCAFEEntitiesFinder.getHostForEntity(approvalPolicy);
var client = host.createApprovalClient().getApprovalApprovalPolicyService();

approvalPolicy.setState(vCACCAFEApprovalPolicyState.PUBLISHED);

System.log("Activating approval policy '" + approvalPolicy.getName() + "'...");
client.update(approvalPolicy);
System.log("Approval policy '" + approvalPolicy.getName() + "' activated.");
}
}
