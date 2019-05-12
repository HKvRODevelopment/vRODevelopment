/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getVirtualMachineEntityFromId(host?: vCAC.VCACHost, virtualMachineId?: string): vCAC.Entity {var properties = new Properties();
properties.put("VirtualMachineID", virtualMachineId);

if (host != null)return vCACEntityManager.readModelEntity(host.id, "ManagementModelEntities.svc", "VirtualMachines", properties, null);

var hosts = Server.findAllForType("vCAC:VCACHost");
System.log("hosts: " + hosts);
for (var host of hosts) {
	try {
		var entity = vCACEntityManager.readModelEntity(host.id, "ManagementModelEntities.svc", "VirtualMachines", properties, null);
		if (entity != null) return entity;
	} catch (e) {
		System.log("Error reading model entity. Error: " + e);
	}
}

return null;

}
}
