/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.datastore {
export function getValidDatastoreForConversion(datastore?: VC.Datastore, vms?: Array<VC.VirtualMachine>): Array<VC.Datastore> {var datastores = new Array();
var newDatastores = datastore.sdkConnection.getAllDatastores();

for (var d of newDatastores){
	if(d!=datastore && datastore.summary.accessible){
		datastores.push(d);
	}
}
var prop = new Properties();
for (var vm of vms){
	var host = VcPlugin.convertToVimManagedObject(vm , vm.runtime.host);
	var datastoresOfVM = host.datastore;
	for (var datastoreOfVM of datastoresOfVM){
		var ds = VcPlugin.convertToVimManagedObject(vm , datastoreOfVM);
		prop.put(ds.id,ds);
	}
}
 var finalDatastores = new Array();
for (var dd of datastores){
	if(prop.get(dd.id)){
		finalDatastores.push(dd);
	}
}

return finalDatastores;
}
}
