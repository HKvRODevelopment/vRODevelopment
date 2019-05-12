/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.basic {
export function getDatacenterForVimObject(object?: any): VC.Datacenter {var parent = object;

while (parent != null && ! (parent instanceof VcDatacenter)) {
	parent = parent.parent;
}
return parent;
}
}
