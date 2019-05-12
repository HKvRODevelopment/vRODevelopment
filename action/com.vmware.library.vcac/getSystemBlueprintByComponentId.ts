/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getSystemBlueprintByComponentId(host?: vCAC.VCACHost, componentType?: string): vCAC.Entity {var modelName = "ManagementModelEntities.svc";
var entitySetName = "VirtualMachineTemplates";

var mapping = new Properties();
mapping.put("Infrastructure.CatalogItem.Machine.Virtual.vSphere", "system_blueprint_vsphere");
mapping.put("Infrastructure.CatalogItem.Machine.Cloud.AmazonEC2", "system_blueprint_amazon");
mapping.put("Infrastructure.CatalogItem.Machine.Virtual.CitrixXen", "system_blueprint_citrixxen");
mapping.put("Infrastructure.CatalogItem.Machine.Virtual.HyperV", "system_blueprint_hyperv");
mapping.put("Infrastructure.CatalogItem.Machine.Virtual.KVM", "system_blueprint_kvm");
mapping.put("Infrastructure.CatalogItem.Machine.Cloud.OpenStack", "system_blueprint_openstack");
mapping.put("Infrastructure.CatalogItem.Machine.Virtual.SCVMM", "system_blueprint_scvmm");
mapping.put("Infrastructure.CatalogItem.Machine.Cloud.vCloudDirector", "system_blueprint_vcloud");
mapping.put("Infrastructure.CatalogItem.Machine.Cloud.vCloudAir", "system_blueprint_vcloudair");

var blueprintEntity = null;

var systemBlueprintName = mapping.get(componentType);
if (systemBlueprintName) {
	var filter = "VirtualMachineTemplateName eq '" + systemBlueprintName + "'";
	blueprintEntity = vCACEntityManager.readModelEntitiesBySystemQuery(host.id, modelName, entitySetName, filter, null, null, 1, 0, null)[0];
}

return blueprintEntity;
}
}
