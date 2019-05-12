/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.microsoft.activeDirectory {
export function getOrganizationUnitFromOrganizationUnit(container?: AD.OrganizationalUnit, ouName?: string): AD.OrganizationalUnit {ous = container.organizationalUnits;
for (var index in ous) {
	if (ous[index].name.toLowerCase() == ouName.toLowerCase()) {
		return ous[index];
	}
}
return null;
}
}
