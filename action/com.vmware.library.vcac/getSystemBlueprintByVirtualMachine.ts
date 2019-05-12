/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getSystemBlueprintByVirtualMachine(host?: vCAC.VCACHost, vm?: vCAC.VirtualMachine): vCAC.Entity {var vmEntity = vm.getEntity();
var hostEntity = vmEntity.getLink(host, "Host")[0];
var endpointEntity = hostEntity.getLink(host, "ManagementEndpoint")[0];
//This is the interface type of the vm
var interfaceType = endpointEntity.getProperty("InterfaceType");
System.log("VM interface type is: " + interfaceType);
var filter = "InterfaceTypeId eq '" + interfaceType + "'";
var systemBlueprint = vCACEntityManager.readModelEntitiesBySystemQuery(host.id, "ManagementModelEntities.svc", "VirtualMachineTemplates", filter, null, null, 1, 0, null)[0];
return systemBlueprint;
}
}
