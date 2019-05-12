/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.request {
export function requestCatalogItem(item?: vCACCAFE.CatalogItem, inputs?: Properties): vCACCAFE.CatalogItemRequest {com.vmware.library.vcaccafe.util.validateObject(item, "Catalog item");
System.log("Getting provisioning request for: '" + item.getName() + "' request form...");
var provisioningRequest = vCACCAFERequestsHelper.getProvisioningRequestForCatalogItem(item);

if (inputs != null) {
	if (inputs["description"] != null) {
		provisioningRequest.setDescription(inputs["description"]);
	}
	if (inputs["reasons"] != null) {
		provisioningRequest.setReasons(inputs["reasons"]);
	}
	
	if (inputs["requestedFor"] != null) {
		provisioningRequest.setRequestedFor(inputs["requestedFor"]);
	}
}

provisioningRequest.setBusinessGroupId(item.getOrganization().getSubtenantRef());

var jsonData = vCACCAFERequestsHelper.getProvisioningRequestData(provisioningRequest);

System.log(jsonData);

var json = JSON.parse(jsonData);

var parameterPattern = /^provider[-~]([^~]+)(?:~([^~]+))*$/;

if (inputs != null) {
	for (var path in inputs) {
		var parameter = inputs[path];
		var match = path.match(parameterPattern);
		if (match != null) {
			var index = 1;
			var component = json;
			while (index < match.length - 1 && match[index + 1] != null  
				&& component[match[index]] != null && component[match[index]].data != null) {
				component = component[match[index]].data;
				index++;
			}
			component[match[index]] = parameter;
		}
	}
}

vCACCAFERequestsHelper.setProvisioningRequestData(provisioningRequest, JSON.stringify(json));

var request = com.vmware.library.vcaccafe.request.requestCatalogItemWithProvisioningRequest(item, provisioningRequest);
System.log(JSON.stringify(json));

return request;
}
}
