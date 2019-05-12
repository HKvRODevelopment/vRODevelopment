/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.propertygroup {
export function createPropertyGroup(host?: vCACCAFE.VCACHost, name?: string, id?: string, description?: string, allTenantsVisibility?: boolean): vCACCAFE.PropertyGroup {var service = host.createPropertyClient().getPropertyContextPropertyGroupService();
var group = new vCACCAFEContextPropertyGroup();
group.setName(name);
group.setId(id);
group.setDescription(description);
if(allTenantsVisibility) {
	group.setTenantId(null);
} else {
	group.setTenantId(host.tenant);
}

System.log("Creating property group...");
service.createPropertyGroup(group);

return vCACCAFEEntitiesFinder.getPropertyGroup(host, id);


}
}
