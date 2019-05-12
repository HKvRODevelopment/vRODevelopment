/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.util {
export function exportAllConfigurationElementsToCsv(csvPathAndName?: Path): void {var csvFile = new FileWriter(csvPathAndName) ;
csvFile.open();
csvFile.clean();

csvFile.write(
		"Category"
		+ "," + "Configuration Element Name" 
		+ "," + "Configuration Element Version" 
		+ "," + "Configuration Element Signature Owner"
		+ "," + "Configuration Element Signature Fingerprint"
		+ "\n");	

var rootCats = Server.getAllConfigurationElementCategories();
for (var catIndex = 0; catIndex < rootCats.length; catIndex++) {
	var cats = allSubCategories(rootCats[catIndex]);
}

csvFile.close();

function allSubCategories(cat) {
	if ( cat.configurationElements != null  &&  cat.configurationElements.length > 0 )  {
		csvFile.write("\"" + cat.path + "\"" + "\n");
		for (var l = 0; l < cat.configurationElements.length; l++) {	
			try {
				var signature = Server.getSignatureOwner(cat.configurationElements[l]);
			} catch(e) {
				var signature = "Unable to retrieve signature. Error " + e;
			}
			try {
				var fingerprint = Server.getSignatureFingerPrint(cat.configurationElements[l]);
			} catch(e) {
				var fingerprint = "Unable to retrieve fingerprint. Error " + e;
			}

			csvFile.write(
			  "," + "\"" + cat.configurationElements[l].name + "\"" 
			+ "," + "\"" + cat.configurationElements[l].version + "\"" 
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
