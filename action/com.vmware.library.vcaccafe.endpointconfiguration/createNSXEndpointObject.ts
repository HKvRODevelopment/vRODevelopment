/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.endpointconfiguration {
export function createNSXEndpointObject(host?: vCACCAFE.VCACHost, name?: string, description?: string, address?: string, username?: string, password?: SecureString, vsphereEndpoint?: vCACCAFE.Endpoint, certificateThumbprint?: string, trustAllCertificates?: boolean): vCACCAFE.Endpoint {if(vsphereEndpoint == null)
{
	System.log("No vsphere endpoint found. No association will be created");
}

var nsxEndpoint = vCACCAFEEndpointConfigurationHelper.createNsxEndpoint(host, name, description, address, username, password, certificateThumbprint, trustAllCertificates, vsphereEndpoint);

if(nsxEndpoint == null)
{
	throw "Failed to create nsx endpoint.";
}

return nsxEndpoint;
}
}
