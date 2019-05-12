/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.endpointconfiguration {
export function associateEndpointObjects(host?: vCACCAFE.VCACHost, fromEndpoint?: vCACCAFE.Endpoint, toEndpoint?: vCACCAFE.Endpoint): vCACCAFE.Endpoint {
var fromEndpointType = fromEndpoint.getTypeId();
var toEndpointType = toEndpoint.getTypeId();

var associationType = vCACCAFEEndpointConfigurationHelper.getAssociationTypeId(host, fromEndpointType, toEndpointType);

if (associationType == null)
{
	System.log("No association type found between [" + fromEndpointType + "] and [" + toEndpointType + "]");
	return fromEndpoint;
}

// get association created for fromEndpoint
fromEndpoint = vCACCAFEEndpointConfigurationHelper.associateEndpointObjects(fromEndpoint, toEndpoint, associationType.getId());
return fromEndpoint;
}
}
