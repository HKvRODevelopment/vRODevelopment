/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.approvalpolicy {
export function deleteApprovalPolicy(approvalPolicy?: vCACCAFE.ApprovalPolicy): void {com.vmware.library.vcaccafe.util.validateObject(approvalPolicy, "Approval policy");
var host = vCACCAFEEntitiesFinder.getHostForEntity(approvalPolicy);
var client = host.createApprovalClient().getApprovalApprovalPolicyService();

System.log("Deleting approval policy '" + approvalPolicy.getName() + "'...");
client.delete(approvalPolicy);
System.log("Approval policy '" + approvalPolicy.getName() + "' deleted.");
}
}
