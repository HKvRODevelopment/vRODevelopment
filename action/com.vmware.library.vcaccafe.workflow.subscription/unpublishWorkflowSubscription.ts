/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.workflow.subscription {
export function unpublishWorkflowSubscription(workflowSubscription?: vCACCAFE.WorkflowSubscription): vCACCAFE.WorkflowSubscription {com.vmware.library.vcaccafe.util.validateObject(workflowSubscription, "System workflow subscription");
var unpublishedWfSubscription;
var service;
var host = vCACCAFEEntitiesFinder.getHostForEntity(workflowSubscription);
System.log("Unpublishing workflow subscription...");
if(workflowSubscription.getTenantId()) {
	service = host.createEventClient().getEventTenantWorkflowSubscriptionService();
	service.updateTenantSubscriptionStatus(host.tenant, workflowSubscription.getId(), vCACCAFEDesignerPublishStatus.DRAFT);
	unpublishedWfSubscription = vCACCAFEEntitiesFinder.getTenantWorkflowSubscription(host, workflowSubscription.getId());
} else {
	service = host.createEventClient().getEventSystemWorkflowSubscriptionService();
	workflowSubscription.setStatus(vCACCAFEDesignerPublishStatus.DRAFT);
	service.updateSystemSubscription(workflowSubscription);
	unpublishedWfSubscription = vCACCAFEEntitiesFinder.getSystemWorkflowSubscription(host, workflowSubscription.getId());
}
System.log("Workflow subscription " + workflowSubscription.getName() + " unpublished.");
return unpublishedWfSubscription;
}
}
