/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.workflow.subscription {
export function hasPriority(subscription?: vCACCAFE.WorkflowSubscription): boolean {var host = vCACCAFEEntitiesFinder.getHostForEntity(subscription);
var topic = vCACCAFEEntitiesFinder.getEventTopic(host, subscription.getEventTopicId());
// It is OK to edit subscriptions for which the topics are not yet registered
return (topic == null || topic.isBlockable()) && subscription.isBlocking();
}
}
