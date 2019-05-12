/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.workflow.subscription {
export function importTenantWorkflowSubscriptions(vraHost?: vCACCAFE.VCACHost, configurationFile?: MimeAttachment, overwriteExisting?: boolean): void {var tenant = vraHost.tenant;
System.log("Importing subscriptions in tenant: " + tenant + " with user: " + vraHost.username);

var content = configurationFile.content;

var subscriptions = JSON.parse(content);

var service = vraHost.createEventClient().getEventTenantWorkflowSubscriptionService();

for (var sub of subscriptions) {
	var existing = service.getTenantSubscription(tenant, sub.id);
	var query1 = new vCACCAFEOdataQuery();
		query1.addFilter([vCACCAFEFilterParam.equal("name", sub.name)]);
	if (!existing) {
		var query = new vCACCAFEOdataQuery();
		query.addFilter([vCACCAFEFilterParam.equal("name", "'" + sub.name + "'")]);
		var request = new vCACCAFEPageOdataRequest(query);
	    existing = service.getTenantSubscriptions(tenant, request).getContent()[0];
	} 
	if (existing) {
		System.log("Found subscription with id " + existing.getId() + " and name " + existing.getName());
		if (overwriteExisting) {
			System.log("Deleting exsisting subscription");
			service.deleteTenantSubscription(tenant, existing.getId());
		} else {
			continue;
		}
	} 

	var workflowSubscription = new vCACCAFEWorkflowSubscription();
	workflowSubscription.setName(sub.name);
	workflowSubscription.setDescription(sub.description);
	workflowSubscription.setEventTopicId(sub.eventTopicId);
	workflowSubscription.setWorkflowId(sub.workflowId);
	workflowSubscription.setStatus(vCACCAFEDesignerPublishStatus.fromValue(sub.status));
	workflowSubscription.setBlocking(sub.blocking);
	workflowSubscription.setFailOnError(sub.failOnError);
	workflowSubscription.setReply(sub.reply);
	workflowSubscription.setPriority(sub.priority);
	workflowSubscription.setTimeout(sub.timeout);
	var version = new vCACCAFEVersion();
	version.setVersion(sub.version.version);
	workflowSubscription.setVersion(version);
	if(sub.criteria){
   		vCACCAFEEBSHelper.setCriteriaToWorkflowSubscription(workflowSubscription, JSON.stringify(sub.criteria));
	}

System.log("Creating workflow subscription " + workflowSubscription.getName() + " in tenant " + tenant);
var createdSubscription = service.registerTenantSubscription(tenant, workflowSubscription);
System.log("Workflow subscription " + workflowSubscription.getName() + " created.");
}




}
}
