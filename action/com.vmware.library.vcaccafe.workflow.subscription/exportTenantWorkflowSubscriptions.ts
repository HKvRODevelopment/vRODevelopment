/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.workflow.subscription {
export function exportTenantWorkflowSubscriptions(vraHost?: vCACCAFE.VCACHost, resourceName?: string, persist?: boolean, resourceCategory?: ResourceElementCategory): MimeAttachment {var tenant = vraHost.tenant;

var MAX_INT = 2147483647;

System.log("Exporting subscriptions for tenant: " + tenant + " with user: " + vraHost.username);

var output = System.createTempFile("json");
var client = vraHost.createEventClient();
var path = "tenants/" + tenant + "/event-broker/subscriptions?limit=" + MAX_INT;
var result = client.get(path);

output.write(JSON.stringify(result.getBodyAsJson().content));

var fullName = resourceName + ".json";
bundle = new MimeAttachment(output);
bundle.name = fullName;

if(resourceCategory != null) {
	Server.createResourceElement(resourceCategory , fullName , bundle, "application/json");
}

return bundle;
}
}
