/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.datastore {
export function getDatacenterForDatastore(datastore?: VC.Datastore): VC.Datacenter {var hosts = datastore.host;
for (var i in hosts){
	var host = VcPlugin.convertToVimManagedObject(datastore, hosts[i].key);
	var parent = host.parent;
	while(!(parent instanceof VcDatacenter)){
		parent = parent.parent;
	}
	return parent;
}
}
}
