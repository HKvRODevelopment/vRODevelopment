/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.microsoft.activeDirectory {
export function createOrganizationalUnit(ouName?: string, container?: AD.OrganizationalUnit): void {container.createOrganizationalUnit(ouName);
}
}
