/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.endpointconfiguration {
export function createInfrastructureEndpointObject(endpointType?: string, name?: string, description?: string, address?: string, username?: string, password?: SecureString, integratedAuth?: boolean, vcoPriority?: number, organization?: string, openstackProject?: string, certificateThumbprint?: string, trustAllCertificates?: boolean): vCACCAFE.Endpoint {
var endpointObj = vCACCAFEEndpointConfigurationHelper.createInfrastructureEndpointObject(name , description , address , username , password , integratedAuth , endpointType , vcoPriority , organization , openstackProject , certificateThumbprint , trustAllCertificates)

if(endpointObj == null)
{
	throw "Failed to create endpoint object";
}

return endpointObj;

}
}
