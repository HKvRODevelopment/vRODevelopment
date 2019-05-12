/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.datastore {
export function getAllVMsOfDatastore(datastore?: VC.Datastore): Array<VC.VirtualMachine> {if(!datastore){
	throw "UndefinedParameter: datastore mandatory input is not defined.";
}
return datastore.vm;
}
}
