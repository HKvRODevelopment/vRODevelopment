/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.workflow.subscription {
export function publishWorkflowSubscription(workflowSubscription?: vCACCAFE.WorkflowSubscription): vCACCAFE.WorkflowSubscription {com.vmware.library.vcaccafe.util.validateObject(workflowSubscription, "System workflow subscription");
var publishedWfSubscription;
var service;
var host = vCACCAFEEntitiesFinder.getHostForEntity(workflowSubscription);
System.log("Publishing workflow subscription...");
if(workflowSubscription.getTenantId()) {
	service = host.createEventClient().getEventTenantWorkflowSubscriptionService();
	service.updateTenantSubscriptionStatus(host.tenant, workflowSubscription.getId(), vCACCAFEDesignerPublishStatus.PUBLISHED);
	publishedWfSubscription = vCACCAFEEntitiesFinder.getTenantWorkflowSubscription(host, workflowSubscription.getId());
} else {
	service = host.createEventClient().getEventSystemWorkflowSubscriptionService();
	workflowSubscription.setStatus(vCACCAFEDesignerPublishStatus.PUBLISHED);
	service.updateSystemSubscription(workflowSubscription);
	publishedWfSubscription = vCACCAFEEntitiesFinder.getSystemWorkflowSubscription(host, workflowSubscription.getId());
}
System.log("Workflow subscription " + workflowSubscription.getName() + " published.");
return publishedWfSubscription;
}
}
