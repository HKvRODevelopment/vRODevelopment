/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.datastore {
export function getAllDatastoresOfVCExceptTheOneInParam(datastore?: VC.Datastore): Array<VC.Datastore> {var datastores = new Array();
var newDatastores = datastore.sdkConnection.getAllDatastores();

for (var d of newDatastores){
	if(d!=datastore && datastore.summary.accessible){
		datastores.push(d);
	}
}
return datastores;
}
}
