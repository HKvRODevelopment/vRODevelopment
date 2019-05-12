/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.util {
export function exportAllAuthorizationElementsToCsv(csvPathAndName?: Path): void {var csvFile = new FileWriter(csvPathAndName) ;
csvFile.open();
csvFile.clean();

csvFile.write(
	"AuthorizationElement Name" 
	+ "," + "AuthorizationElement LDAP Element DN"
	+ "\n");	

var authorizationElements = Server.findAllForType('AuthorizationElement');

for (var i = 0;i<authorizationElements.length;i++){
	
	csvFile.write(
	"\"" + authorizationElements[i].name  + "\""
	+ "," + "\"" + authorizationElements[i].ldapElementDn + "\""
	+ "\n");	
}

csvFile.close();

}
}
