/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function deletePropertyFromVirtualMachineEntity(host?: vCAC.VCACHost, virtualMachineEntity?: vCAC.Entity, propertyName?: string): void {var virtualMachinePropertiesEntities = virtualMachineEntity.getLink(host, "VirtualMachineProperties");
for (var virtualMach inePropertiesEntity of virtualMachinePropertiesEntities) {
	if (virtualMachinePropertiesEntity.getProperty("PropertyName") == propertyName) {
		var entityKey = virtualMachinePropertiesEntity.entityKey;
		var entityKeyId = entityKey.get("Id");
		System.log("Delete entity with id " + entityKeyId + " from virtualMachine " + virtualMachineEntity.getProperty("VirtualMachineName"));
		vCACEntityManager.deleteModelEntityBySerializedKey(host.id , "ManagementModelEntities.svc" , "VirtualMachineProperties" , entityKeyId , null);
	}
}




}
}
