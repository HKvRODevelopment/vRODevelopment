/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vcac.asd.mappings {
export function mapToCatalogResource(deploymentProps?: Properties): vCACCAFE.CatalogResource {var catalogResourceId = deploymentProps.get("catalogResourceId");
if (!catalogResourceId){
	throw "catalogResourceId is null!"
}

var tenantId = deploymentProps.get("tenantId");
if (!tenantId){
	throw "tenantId is null!"
}

System.debug("Finding catalog resource with id " + catalogResourceId + " in tenant " + tenantId);

var deploymentResource;
var vcacHosts = Server.findAllForType("vCACCAFE:VCACHost");
for (var vcacHost of vcacHosts){
	if (vcacHost.tenant == tenantId){
		deploymentResource = Server.findForType("vCACCAFE:CatalogResource", vcacHost.id + "/" + catalogResourceId);
		if (deploymentResource){
			break;
		}
	}
}

if (!deploymentResource){
	throw "Can not find deployment with id " + catalogResourceId + " in tenant " + tenantId;
}

return deploymentResource;
}
}
