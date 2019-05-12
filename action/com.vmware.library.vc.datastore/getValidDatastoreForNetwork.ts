/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.datastore {
export function getValidDatastoreForNetwork(network?: VC.Network): Array<VC.Datastore> {var hosts = network.host;
var datastores =  new Properties();
for (var i in hosts){
	var datastores2 = hosts[i].datastore;
	for (var j in datastores2) {
		datastores.put(datastores2[j].name, datastores2[j]);
	}
}

var result = new Array();
for (var i in datastores.keys){
	result.push(datastores.get(datastores.keys[i]));
}
return result;
}
}
