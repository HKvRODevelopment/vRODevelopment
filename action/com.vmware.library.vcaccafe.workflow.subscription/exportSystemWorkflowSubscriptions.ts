/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.workflow.subscription {
export function exportSystemWorkflowSubscriptions(vraHost?: vCACCAFE.VCACHost, resourceName?: string, persist?: boolean, resourceCategory?: ResourceElementCategory): MimeAttachment {var tenant = vraHost.tenant;

var MAX_INT = 2147483647;

System.log("Exporting system workflow subscriptions with user: " + vraHost.username);

var output = System.createTempFile("json");

var client = vraHost.createEventClient();

var path = "/event-broker/subscriptions?limit=" + MAX_INT;

var result = client.get(path);

var json = JSON.stringify(result.getBodyAsJson().content);

output.write(json);

var fullName = resourceName + ".json";
bundle = new MimeAttachment(output);
bundle.name = fullName;

if(resourceCategory != null) {
	Server.createResourceElement(resourceCategory, fullName , bundle, "application/json");
}

return bundle;
}
}
