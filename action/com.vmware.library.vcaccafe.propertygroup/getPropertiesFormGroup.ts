/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.propertygroup {
export function getPropertiesFormGroup(group?: vCACCAFE.PropertyGroup): Array<string> {return group.properties.keys;
}
}
