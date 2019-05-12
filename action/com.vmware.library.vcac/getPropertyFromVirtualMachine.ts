/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getPropertyFromVirtualMachine(host?: vCAC.VCACHost, virtualMachine?: vCAC.VirtualMachine, propertyName?: string): any {var properties = new Properties();
properties.put("VirtualMachineID", virtualMachine.virtualMachineID);
var virtualMachineEntity = vCACEntityManager.readModelEntity(host.id, "ManagementModelEntities.svc", "VirtualMachines", properties, null);

var virtualMachinePropertiesEntities = virtualMachineEntity.getLink(host, "VirtualMachineProperties");
for (var virtualMach inePropertiesEntity of virtualMachinePropertiesEntities) {
	if (virtualMachinePropertiesEntity.getProperty("PropertyName") == propertyName) {
		return virtualMachinePropertiesEntity.getProperty("PropertyValue");
	}
}
return null;
}
}
