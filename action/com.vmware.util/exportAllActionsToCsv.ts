/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.util {
export function exportAllActionsToCsv(csvPathAndName?: Path): void {var csvFile = new FileWriter(csvPathAndName) ;
csvFile.open();
csvFile.clean();

csvFile.write(
			"Action Category"
	+ "," + "Action Name" 
	+ "," + "Action Version"
	+ "," + "Action Signature"
	+ "," + "Action Fingerprint"
	+ "\n");	

var actions = Server.findAllForType('ScriptModule');

for (var i = 0;i<actions.length;i++){
	try {
		var signature = Server.getSignatureOwner(actions[i]);
	} catch(e) {
		var signature = "Unable to retrieve signature. Error " + e;
	}
	try {
		var fingerprint = Server.getSignatureFingerPrint(actions[i]);
	} catch(e) {
		var fingerprint = "Unable to retrieve fingerprint. Error " + e;
	}
	
	csvFile.write(
	"\"" + actions[i].module + "\""
	+ "," + "\"" + actions[i].name  + "\""
	+ "," + "\"" + actions[i].version + "\""
	+ "," + "\"" + signature + "\""
	+ "," + "\"" + fingerprint + "\""
	+ "\n");	
}

csvFile.close();

}
}
