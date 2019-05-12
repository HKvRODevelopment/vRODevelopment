/// <reference path="./../../includes.d.ts"/>

namespace test {
export function getBizGrpsName_2(): Array<string> {//var vcacHost = Server.findForType("VCACCAFE:VCACHost","5ea3efb7-9917-454c-803b-99ce47046a47");
var vcacHost = Server.findForType("VCACCAFE:VCACHost","5d1f6870-9c64-4b0b-9fc6-7efd8c31ea66");
if(vcacHost != null){
	System.log(vcacHost.id)
	System.log(vcacHost.name)
}

var bizgrps = vCACCAFEEntitiesFinder.findBusinessGroups(vcacHost,"")
System.log(bizgrps.length)

var strBizGrpsName = [];
for (var bizgrp of bizgrps) {
	System.log(bizgrp.name)
	System.log(bizgrp.id)
	System.log(bizgrp.getTotalMachines())
	System.log(bizgrp.administratorEmail)
	strBizGrpsName.push(bizgrp.name)
}

return strBizGrpsName;

}
}
