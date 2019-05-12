/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.endpointconfiguration {
export function deleteEndpoint(endpoint?: vCACCAFE.Endpoint, host?: vCACCAFE.VCACHost): void {var endpointService = host.createEndpointConfigurationClient().getEndpointConfigurationEndpointService();

com.vmware.library.vcaccafe.util.validateObject(endpoint, "Endpoint")

var endpointId = endpoint.getId();

// secure fields are returned empty by default
System.log("Retrieving endpoint object with id [" + endpointId + "]...");
var existingEndpoint = endpointService.getEndpoint(endpointId, false);

if(existingEndpoint == null)
{
	System.log("Endpoint with id [" + endpointId + "] is not found");
	return;
}

System.log("Deleting endpoint with id [" + endpointId + "]...");
endpointService.deleteEndpoint(endpointId);
System.log("Endpoint with id [" + endpointId + "] deleted.");
}
}
