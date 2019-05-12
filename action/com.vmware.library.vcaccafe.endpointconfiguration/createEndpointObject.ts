/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.endpointconfiguration {
export function createEndpointObject(endpointType?: string, name?: string, description?: string, address?: string, username?: string, password?: SecureString): vCACCAFE.Endpoint {
var endpointObject = vCACCAFEEndpointConfigurationHelper.createEndpointObject(name , description , address , username , password , endpointType);

if (endpointObject == null)
{
	throw "Failed to create endpoint object";
}

return endpointObject;
}
}
