/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.datastore {
export function getAllDatastoresMatchingRegexp(regexp?: string): Array<VC.Datastore> {// Get all datastores for all vCenter connections defined for this plugin
var allDatastores = VcPlugin.getAllDatastores();
var datastores = new Array();
// Check if the datastore match the regexp
for (var i in allDatastores) {
	if (allDatastores[i].name.match(regexp)) {
		datastores.push(allDatastores[i]);
	}
}	
return datastores;
}
}
