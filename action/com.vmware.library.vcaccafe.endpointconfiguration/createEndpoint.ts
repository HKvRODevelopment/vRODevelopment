/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.endpointconfiguration {
export function createEndpoint(endpointObject?: vCACCAFE.Endpoint, host?: vCACCAFE.VCACHost): vCACCAFE.Endpoint {com.vmware.library.vcaccafe.util.validateObject(endpointObject, "Endpoint Object");

var endpointService = host.createEndpointConfigurationClient().getEndpointConfigurationEndpointService();

System.log("Creating endpoint [" + endpointObject.getName() + "] for type [" + endpointObject.getTypeId() + "] ...");
var endpointId = endpointService.createEndpoint(endpointObject);
System.log("Endpoint [" + endpointObject.getName() + "] for type [" + endpointObject.getTypeId() + "] is created with id [" + endpointId + "]");

System.log("Retrieving endpoint object with id [" + endpointId + "]...");
endpoint = endpointService.getEndpoint(endpointId, false);

if(endpoint == null)
{
	throw "The endpoint object is not found for id [" + endpointId + "]";
}

return endpoint;
}
}
