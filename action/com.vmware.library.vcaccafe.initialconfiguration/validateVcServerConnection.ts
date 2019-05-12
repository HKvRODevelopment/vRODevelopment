/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.initialconfiguration {
export function validateVcServerConnection(host?: string, port?: number, path?: string, username?: string, password?: SecureString): string {var result = null;
// Import Certificate from server
var u = new URL();
var hostAndPort = u.escapeHost(host) + ":" + port;

var ld = Config.getKeystores().getImportCAFromUrlAction();
var model = ld.getModel();
model.value = hostAndPort;
var error = ld.execute();

if(error){
	return "Invalid host settings."
}

try{
	VcPlugin.validateConnection(host, port, path, username, password);	
} catch (ex) {
	result = "Validation failed. Error : " + ex.message;
} 

return result;
}
}
