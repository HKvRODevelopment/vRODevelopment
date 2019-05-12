/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.util {
export function exportAllWorkflowsToCsv(csvPathAndName?: Path): void {var csvFile = new FileWriter(csvPathAndName) ;
csvFile.open();
csvFile.clean();

csvFile.write(
		"Category"
		+ "," + "Workflow Name" 
		+ "," + "Workflow Version" 
		+ "," + "Workflow Signature Owner"
		+ "," + "Workflow Signature Fingerprint"
		+ "\n");	

var rootCats = Server.getAllWorkflowCategories();
for (var catIndex = 0; catIndex < rootCats.length; catIndex++) {
	allSubCategories(rootCats[catIndex]);
}

csvFile.close();

function allSubCategories(cat) {
 	if ( cat.workflows != null  &&  cat.workflows.length > 0 )  {
		csvFile.write("\"" + cat.path + "\"" + "\n");
		for (var l = 0; l < cat.workflows.length; l++) {	
			try { 
				var signature = Server.getSignatureOwner(cat.workflows[l]);
			} catch(e) {
				var signature = "Unable to retrieve signature. Error " + e;
			}
			try {
				var fingerprint = Server.getSignatureFingerPrint(cat.workflows[l]);
			} catch(e) {
				var fingerprint = "Unable to retrieve fingerprint. Error " + e;
			}
			csvFile.write(
				"," + "\"" + cat.workflows[l].name + "\"" 
				+ "," + "\"" + cat.workflows[l].version + "\"" 
				+ "," + "\"" + signature + "\""
				+ "," + "\"" + fingerprint + "\""
				+ "\n");	
		}
 	}
	
 	var allCategories = cat.subCategories;
 	if (allCategories != null &&  allCategories.length > 0) {
 		for (var i = 0; i < allCategories.length; i++) {
			var allSubCats = allSubCategories(allCategories[i]);				
		}
 	}
 	
 	csvFile.write("\n");
}	

}
}
