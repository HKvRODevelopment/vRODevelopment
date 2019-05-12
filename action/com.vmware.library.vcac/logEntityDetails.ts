/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function logEntityDetails(entity?: vCAC.Entity, vcacHost?: vCAC.VCACHost): void {System.log("");
System.log("===================== Entity Details ========================");
System.log("entityKey: "+entity.entityKey);
System.log("entitySetName: "+entity.entitySetName);
System.log("hostId: "+entity.hostId);
System.log("keyString: "+entity.keyString);
System.log("modelName: "+entity.modelName);
System.log("");
System.log("===================== Properties ============================");
var simpleProps = entity.getProperties();
for (var propName in simpleProps ) {
	System.log(propName + ":"+entity.getProperty(propName));
}
if(vcacHost != null){
	System.log("");
	System.log ("------- Complex Properties ----------");
	var complexProps = entity.getLinks(vcacHost);
	for (var propName in complexProps) {
		System.log(propName + ":"+complexProps.get(propName));
	}
}
}
}
