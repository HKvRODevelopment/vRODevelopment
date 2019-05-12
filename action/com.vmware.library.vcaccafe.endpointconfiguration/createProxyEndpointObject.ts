/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.endpointconfiguration {
export function createProxyEndpointObject(host?: vCACCAFE.VCACHost, name?: string, description?: string, address?: string, port?: number, username?: string, password?: SecureString): vCACCAFE.Endpoint {var endpointObject = vCACCAFEEndpointConfigurationHelper.createProxyEndpoint(host, name, description, address, port, username, password);

if(endpointObject == null)
{
	throw "Failed to create proxy endpoint object";
}

return endpointObject;

}
}
