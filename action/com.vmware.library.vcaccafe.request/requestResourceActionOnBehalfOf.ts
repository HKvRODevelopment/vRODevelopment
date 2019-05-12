/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.request {
export function requestResourceActionOnBehalfOf(operation?: vCACCAFE.ConsumerResourceOperation, inputs?: Properties, user?: string): vCACCAFE.ResourceActionRequest {com.vmware.library.vcaccafe.util.validateObject(operation, "Resource operation");
System.log("Getting resource action '" + operation.getName() + "' request form...");
var form = vCACCAFERequestsHelper.getRequestFormForResourceAction(operation);

System.log("Accepted inputs:");
var fields = vCACCAFERequestsHelper.getFormKeys(form);
for (var i = 0; i < fields.length; i++) {
	System.log(" - " + fields[i]);
}

System.log("Filling in resource action request...");
form = vCACCAFERequestsHelper.setFormValues(form, inputs);

System.log("Sending resource action request on behalf of '" + user + "'...");
var request = vCACCAFERequestsHelper.requestResourceActionOnBehalfOf(operation, form, user);

System.log("Resource action request '" + request.getId() + "' sent!");
return request;
}
}
