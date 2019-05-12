/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.util {
export function exportAllResourceElementsToCsv(csvPathAndName?: Path): void {var csvFile = new FileWriter(csvPathAndName) ;
csvFile.open();
csvFile.clean();

csvFile.write(
		"Category"
		+ "," + "Resource Element Name" 
		+ "," + "Resource Element Version" 
		+ "," + "Resource Element Signature Owner"
		+ "," + "Resource Element Signature Fingerprint"
		+ "\n");	

var rootCats = Server.getAllResourceElementCategories();
for (var catIndex = 0; catIndex < rootCats.length; catIndex++) {
	var cats = allSubCategories(rootCats[catIndex]);
}

csvFile.close();

function allSubCategories(cat) {
	if ( cat.resourceElements != null  &&  cat.resourceElements.length > 0 )  {
		csvFile.write("\"" + cat.path + "\"" + "\n");
		for (var l = 0; l < cat.resourceElements.length; l++) {	
			try {
				var signature = Server.getSignatureOwner(cat.resourceElements[l]);
			} catch(e) {
				var signature = "Unable to retrieve signature. Error " + e;
			}
			try {
				var fingerprint = Server.getSignatureFingerPrint(cat.resourceElements[l]);
			} catch(e) {
				var fingerprint = "Unable to retrieve fingerprint. Error " + e;
			}

			csvFile.write(
			  "," + "\"" + cat.resourceElements[l].name + "\"" 
			+ "," + "\"" + cat.resourceElements[l].version + "\"" 
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
