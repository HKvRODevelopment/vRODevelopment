/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.storage {
export function listDatastores(host?: VC.HostSystem): Array<string> {var datastoreNames = [];

if (host == null) {
	return datastoreNames
}

var hostDatastoreSystem = VcPlugin.toManagedObject( host, host.configManager.datastoreSystem );

for (var datastore of hostDatastoreSystem.datastore) {
	datastoreNames.push(datastore.name);
}

return datastoreNames;
}
}
