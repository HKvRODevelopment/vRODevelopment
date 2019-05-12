/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.gef {
export function updateIaasHost(name?: string, hostAddress?: string, authUserName?: string, authPassword?: SecureString, connectionTimeout?: number, operationTimeout?: number, workstation?: string, domain?: string, autoAccept?: boolean): vCAC.VCACHost {var hostToReturn = null;

try {
	System.log("Updating IaaS Host: " + name);
	
	// Update an IaaS host
	var wf = Server.getWorkflowWithId("ae371706-13cb-41ec-99e3-0aecbe4425dc");
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
	System.log("updateIaasHost Failed: " + e);
}

return hostToReturn;

}
}
