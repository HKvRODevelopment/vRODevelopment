/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.gef {
export function addIaasHost(name?: string, hostAddress?: string, authUserName?: string, authPassword?: SecureString, connectionTimeout?: number, operationTimeout?: number, workstation?: string, domain?: string, autoAccept?: boolean): vCAC.VCACHost {var hostToReturn = null;

try {
	System.log("Adding IaaS Host: " + name);
	
	// Add an IaaS host
	var wf = Server.getWorkflowWithId("5ca252c4-b831-4746-8ffc-db3eb50f5b80");
	var args = new Properties();
	
	args.put("name", name);
	args.put("hostAddress", hostAddress);
	args.put("authUserName", authUserName);
	args.put("authPassword", authPassword);
	args.put("connectionTimeout", connectionTimeout);
	args.put("operationTimeout", operationTimeout);
	args.put("sessionMode", "Shared Session");
	args.put("workstation", workstation);
	args.put("domain", domain);
	args.put("autoAccept", autoAccept);
	args.put("addProxySettings", false);
	args.put("proxyHost", null);
	args.put("proxyPort", null);
	args.put("authentication", "NTLM");
	args.put("defaultConnectionSettings", null);
	
	var wfToken = wf.execute(args);			
	com.vmware.library.workflow.waitForCompletion([wfToken]);	
						
	var outParameters = wfToken.getOutputParameters();
	hostToReturn = outParameters["restHost"];
}
catch(e)
{
	System.log("addIaasHost Failed: " + e);
}

return hostToReturn;	
	
}
}
