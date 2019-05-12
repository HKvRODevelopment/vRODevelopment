/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.approvalpolicy {
export function replaceApprovalPolicy(approvalPolicy?: vCACCAFE.ApprovalPolicy, replacementApprovalPolicy?: vCACCAFE.ApprovalPolicy): void {var host = vCACCAFEEntitiesFinder.getHostForEntity(approvalPolicy);
var client = host.createCatalogClient().getCatalogApprovalRequestCallbackService();

System.log("Replacing approval policy '" + approvalPolicy.getName() + "'...");
client.replaceApprovalPolicy(approvalPolicy.getId(), replacementApprovalPolicy);
System.log("Approval policy '" + approvalPolicy.getName() + "' replaced with '" + ((replacementApprovalPolicy == null) ? "(none)" : replacementApprovalPolicy.getName()) + "'.");
}
}
