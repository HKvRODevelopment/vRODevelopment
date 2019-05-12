/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.businessgroup {
export function getCustomProperties(group?: vCACCAFE.BusinessGroup, query?: string): Array<vCACCAFE.CustomProperty> {return vCACCAFEEntitiesFinder.findCustomProperties(group, query);
}
}
