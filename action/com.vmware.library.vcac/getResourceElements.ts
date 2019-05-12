/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getResourceElements(resource?: ResourceElement): Array<ResourceElement> {if (resource == null) return null;
return resource.getResourceElementCategory().resourceElements;
}
}
