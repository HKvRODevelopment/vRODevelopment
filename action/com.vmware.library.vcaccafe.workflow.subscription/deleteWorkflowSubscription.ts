/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.workflow.subscription {
export function deleteWorkflowSubscription(workflowSubscription?: vCACCAFE.WorkflowSubscription): void {com.vmware.library.vcaccafe.util.validateObject(workflowSubscription, "System workflow subscription");
var host = vCACCAFEEntitiesFinder.getHostForEntity(workflowSubscription);
var service;
System.log("Deleting workflow subscription...");
if(workflowSubscription.getTenantId()) {
	service = host.createEventClient().getEventTenantWorkflowSubscriptionService();
	service.deleteTenantSubscription(host.tenant, workflowSubscription.getId());
} else {
	service = host.createEventClient().getEventSystemWorkflowSubscriptionService();
	service.deleteSystemSubscription(workflowSubscription.getId());
}
System.log("Workflow subscription " + workflowSubscription.getName() + " deleted.");
}
}
