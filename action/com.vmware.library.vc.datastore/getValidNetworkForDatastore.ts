/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.datastore {
export function getValidNetworkForDatastore(datastore?: VC.Datastore): Array<VC.Network> {var hosts = datastore.host;
var networks = new Properties();
for (var i in hosts) {
	var host = VcPlugin.convertToVimManagedObject(datastore , hosts[i].key);
	var nets = host.network;
	for (var j in nets) {
		networks.put(nets[j].name, nets[j]);
	}
}

var result = new Array()
for (var i in networks.keys) {
	result.push(networks.get(networks.keys[i]));
}
return result;
}
}
