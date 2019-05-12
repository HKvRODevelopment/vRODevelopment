/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getPropertiesFromVirtualMachine(host?: vCAC.VCACHost, virtualMachine?: vCAC.VirtualMachine): Properties {var properties = new Properties();
properties.put("VirtualMachineID", virtualMachine.virtualMachineID);


var virtualMachineEntity = vCACEntityManager.readModelEntity(host.id, "ManagementModelEntities.svc", "VirtualMachines", properties, null);
var vmProperties = new Properties();

var virtualMachinePropertiesEntities = virtualMachineEntity.getLink(host, "VirtualMachineProperties");
for (var virtualMach inePropertiesEntity of virtualMachinePropertiesEntities) {
	var propertyName = virtualMachinePropertiesEntity.getProperty("PropertyName");
	var propertyValue = virtualMachinePropertiesEntity.getProperty("PropertyValue");
	System.log("Found property " + propertyName + " = " + propertyValue);
	vmProperties.put(propertyName, propertyValue);
}
return vmProperties;
}
}
