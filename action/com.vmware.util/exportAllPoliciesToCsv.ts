/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.util {
export function exportAllPoliciesToCsv(csvPathAndName?: Path): void {var csvFile = new FileWriter(csvPathAndName) ;
csvFile.open();
csvFile.clean();

csvFile.write(
	"Policy Name" 
	+ "," + "Policy Signature"
	+ "," + "Policy Fingerprint"
	+ "\n");	

var policies = Server.findAllForType('Policy');

for (var i = 0;i<policies.length;i++){
	try {
		var signature = Server.getSignatureOwner(policies[i]);
	} catch(e) {
		var signature = "Unable to retrieve signature. Error " + e;
	}
	try {
		var fingerprint = Server.getSignatureFingerPrint(policies[i]);
	} catch(e) {
		var fingerprint = "Unable to retrieve fingerprint. Error " + e;
	}
	
	csvFile.write(
	"\"" + policies[i].name  + "\""
	+ "," + "\"" + signature + "\""
	+ "," + "\"" + fingerprint + "\""
	+ "\n");	
}

csvFile.close();

}
}
