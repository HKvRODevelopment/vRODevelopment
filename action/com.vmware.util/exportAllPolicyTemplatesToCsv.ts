/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.util {
export function exportAllPolicyTemplatesToCsv(csvPathAndName?: Path): void {var csvFile = new FileWriter(csvPathAndName) ;
csvFile.open();
csvFile.clean();

csvFile.write(
		"Category"
		+ "," + "Policy Template Name" 
		+ "," + "Policy Template Version" 
		+ "," + "Policy Template Signature Owner"
		+ "," + "Policy Template Signature Fingerprint"
		+ "\n");	

var rootCats = Server.getAllPolicyTemplateCategories();
for (var catIndex = 0; catIndex < rootCats.length; catIndex++) {
	var cats = allSubCategories(rootCats[catIndex]);
}

csvFile.close();

function allSubCategories(cat) {
	if ( cat.policyTemplates != null  &&  cat.policyTemplates.length > 0 )  {
		csvFile.write("\"" + cat.path + "\"" + "\n");
		for (var l = 0; l < cat.policyTemplates.length; l++) {	
			try {
				var signature = Server.getSignatureOwner(cat.policyTemplates[l]);
			} catch(e) {
				var signature = "Unable to retrieve signature. Error " + e;
			}
			try {
				var fingerprint = Server.getSignatureFingerPrint(cat.policyTemplates[l]);
			} catch(e) {
				var fingerprint = "Unable to retrieve fingerprint. Error " + e;
			}

			csvFile.write(
			  "," + "\"" + cat.policyTemplates[l].name + "\"" 
			+ "," + "\"" + cat.policyTemplates[l].version + "\"" 
			+ "," + "\"" + signature +  "\"" 
			+ "," + "\"" + fingerprint+ "\"" 
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
