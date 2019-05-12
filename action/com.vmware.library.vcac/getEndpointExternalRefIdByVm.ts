/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getEndpointExternalRefIdByVm(host?: vCAC.VCACHost, vmId?: string): string {if (!host) {
	throw "vCAC host cannot be null.";
}

var filter = "VirtualMachineID eq (guid'" + vmId + "')";
var expand = 'Host/ManagementEndpoint';
var result = vCACEntityManager.readModelEntitiesBySystemExpandQuery(host.id, "ManagementModelEntities.svc", "VirtualMachines", filter, expand, null, null, 1, 0, null)[0];
var endpointRefId = result.getLink(host, "Host")[0].getLink(host, "ManagementEndpoint")[0].getProperty('ExternalReferenceId');
return endpointRefId;
}
}
