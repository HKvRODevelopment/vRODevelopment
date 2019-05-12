/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.workflow.subscription {
export function hasTimeout(subscription?: WorkflowToken): boolean {var host = vCACCAFEEntitiesFinder.getHostForEntity(subscription);
var topic = vCACCAFEEntitiesFinder.getEventTopic(host, subscription.getEventTopicId());
// We should be able to edit subscriptions for which the topics are not yet registered
return topic == null || topic.isBlockable() || topic.isReplyable();
}
}
