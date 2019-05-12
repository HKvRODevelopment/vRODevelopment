/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.workflow.subscription {
export function updateWorkflowSubscription(workflowSubscription?: vCACCAFE.WorkflowSubscription, name?: string, description?: string, wf?: Workflow, status?: string, criteria?: string, priority?: number, timeout?: number, version?: string, stopProcessingOnError?: boolean): vCACCAFE.WorkflowSubscription {com.vmware.library.vcaccafe.util.validateObject(workflowSubscription, "System workflow subscription");
var updatedWfSubscription;
var service;
var host = vCACCAFEEntitiesFinder.getHostForEntity(workflowSubscription);

workflowSubscription.setName(name);
workflowSubscription.setDescription(description);
workflowSubscription.setWorkflowId(wf.id);
workflowSubscription.setStatus(vCACCAFEDesignerPublishStatus.fromValue(status));
workflowSubscription.setPriority(priority);
workflowSubscription.setTimeout(timeout);
if(criteria){
   vCACCAFEEBSHelper.setCriteriaToWorkflowSubscription(workflowSubscription, criteria);
}
var cafeVersion = new vCACCAFEVersion();
cafeVersion.setVersion(version);
workflowSubscription.setVersion(cafeVersion);

if (workflowSubscription.isBlocking()) {
   workflowSubscription.setFailOnError(stopProcessingOnError);
}

System.log("Updating workflow subscription...");
if(workflowSubscription.getTenantId()) {
	service = host.createEventClient().getEventTenantWorkflowSubscriptionService();
	service.updateTenantSubscription(host.tenant, workflowSubscription);
	updatedWfSubscription = vCACCAFEEntitiesFinder.getTenantWorkflowSubscription(host, workflowSubscription.getId());
} else {
	service = host.createEventClient().getEventSystemWorkflowSubscriptionService();
	service.updateSystemSubscription(workflowSubscription);
	updatedWfSubscription = vCACCAFEEntitiesFinder.getSystemWorkflowSubscription(host, workflowSubscription.getId());
}
System.log("Workflow subscription " + workflowSubscription.getName() + " updated.");
return updatedWfSubscription;
}
}
