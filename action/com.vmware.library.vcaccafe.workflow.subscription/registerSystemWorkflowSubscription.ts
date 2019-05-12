/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.workflow.subscription {
export function registerSystemWorkflowSubscription(host?: vCACCAFE.VCACHost, name?: string, description?: string, eventTopic?: vCACCAFE.EventTopic, wf?: Workflow, status?: string, blocking?: boolean, priority?: number, timeout?: number, criteria?: string, version?: string, stopProcessingOnError?: boolean): vCACCAFE.WorkflowSubscription {var service = host.createEventClient().getEventSystemWorkflowSubscriptionService();

var workflowSubscription = com.vmware.library.vcaccafe.workflow.subscription
							.createWorkflowSubscription(name, description, eventTopic.getId(), wf.id, 
								status, blocking, eventTopic.isReplyable(), priority, timeout, criteria, version, stopProcessingOnError) ;
System.log("Creating workflow subscription...");
var createdSubscription = service.registerSystemSubscription(workflowSubscription);
System.log("Workflow subscription " + workflowSubscription.getName() + " created.");
return createdSubscription;
}
}
