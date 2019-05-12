/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getVirtualMachineEntity(host?: vCAC.VCACHost, virtualMachine?: vCAC.VirtualMachine): vCAC.Entity {if (host == null || virtualMachine == null) return null;

var properties = new Properties();
properties.put("VirtualMachineID", virtualMachine.virtualMachineID);
return vCACEntityManager.readModelEntity(host.id, "ManagementModelEntities.svc", "VirtualMachines", properties, null);
}
}
