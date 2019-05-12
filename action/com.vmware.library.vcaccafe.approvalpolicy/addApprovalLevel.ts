/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.approvalpolicy {
export function addApprovalLevel(approvalPolicy?: vCACCAFE.ApprovalPolicy, approvalType?: string, name?: string, description?: string, users?: Array<string>, groups?: Array<string>, approvalMode?: string): vCACCAFE.ApprovalPolicy {com.vmware.library.vcaccafe.util.validateObject(approvalPolicy, "Approval policy");
var level = new vCACCAFEApprovalLevel();
level.setName(name);
level.setDescription(description);
level.setApprovalMode(vCACCAFEApprovalMode.valueOf(approvalMode));

if(users != null){
   for (var i = 0 ; i < users.length ; i++ ) {
      var user = new vCACCAFEApprovalPrincipal();
      user.setValue(users[i]);
      user.setType(vCACCAFEApprovalPrincipalType.USER);
      com.vmware.library.vcaccafe.util.addElementToList(level, "getApprovers", user);
   }
}

if(groups != null){
   for (var i = 0 ; i < groups.length ; i++ ) {
      var group = new vCACCAFEApprovalPrincipal();
      group.setValue(groups[i]);
      group.setType(vCACCAFEApprovalPrincipalType.GROUP);
      com.vmware.library.vcaccafe.util.addElementToList(level, "getApprovers", group);
   }
}

var phases = approvalPolicy.getPhases();
for (var i = 0 ; i < phases.length ; i++ ) {
	if(phases[i].getPhasetype().getId() == approvalType) {
		level.setLevelNumber(phases[i].getLevels().length + 1);
		com.vmware.library.vcaccafe.util.addElementToList(phases[i], "getLevels", level);
		break;
	}
}

var host = vCACCAFEEntitiesFinder.getHostForEntity(approvalPolicy);
var approvalPolicyService = host.createApprovalClient().getApprovalApprovalPolicyService();

System.log("Adding approval level to approval policy " + approvalPolicy.getName());
updatedApprovalPolicy = approvalPolicyService.update(approvalPolicy);
System.log("Approval level added.");
return vCACCAFEEntitiesFinder.getApprovalPolicy(host, updatedApprovalPolicy.getId());
}
}
