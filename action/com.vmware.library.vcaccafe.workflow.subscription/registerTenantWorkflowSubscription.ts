/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.workflow.subscription {
export function registerTenantWorkflowSubscription(host?: vCACCAFE.VCACHost, name?: string, description?: string, eventTopic?: vCACCAFE.EventTopic, wf?: Workflow, status?: string, blocking?: boolean, priority?: number, timeout?: number, version?: string, criteria?: string, stopProcessingOnError?: boolean): vCACCAFE.WorkflowSubscription {var service = host.createEventClient().getEventTenantWorkflowSubscriptionService();

var workflowSubscription = com.vmware.library.vcaccafe.workflow.subscription
							.createWorkflowSubscription(name, description, eventTopic.getId(), wf.id, 
								status, blocking, eventTopic.isReplyable(), priority, timeout, criteria, version, stopProcessingOnError) ;
System.log("Creating workflow subscription...");
var createdSubscription = service.registerTenantSubscription(host.tenant, workflowSubscription);
System.log("Workflow subscription " + workflowSubscription.getName() + " created.");
return createdSubscription;
}
}
