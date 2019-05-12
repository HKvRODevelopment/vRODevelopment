/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.powershell {
export function executePowerShellScriptOnHostByName(hostName?: string, script?: string): any {var host = getHostByName(hostName);

if(!host) {
	throw "Host '" + hostName + "' not found";
}

var session;
try {
	session = host.openSession();
	return com.vmware.library.powershell.invokeScript(host, script, session.getSessionId()).getRootObject();
} finally {
	if (session){
		host.closeSession(session.getSessionId());
	}
}

function getHostByName(name) {
	if(!name) {
		throw "Host name not specified";
	}

	var hosts = Server.findAllForType("PowerShell:PowerShellHost");
	
	for (var host of hosts) {
		if(host.name == name) {
			return host;
		}
	}
}
}
}
