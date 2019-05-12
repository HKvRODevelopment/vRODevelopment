/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.workflow {
export function waitForCompletion(wfTokens?: Array<WorkflowToken>): Array<WorkflowToken> {var allComplete = false;
while(! allComplete){
	System.sleep(2000); // Wait 2 seconds
	allComplete = true;
	for (var i = 0; i<wfTokens.length; i++){
		if(wfTokens[i].state != "running" && wfTokens[i].state != "waiting") {
			// completed, error or canceled
			System.log("Workflow '"+wfTokens[i].name+"' ("+i+") terminated with status '"+wfTokens[i].state+"'"); 
			Server.log("Workflow '"+wfTokens[i].name+"' ("+i+") terminated with status '"+wfTokens[i].state+"'"); 
		}
		else {
			// running or waiting
			allComplete = false;
		}
	}
}

System.log("All workflows completed");
Server.log("All workflows completed");
return wfTokens;
}
}
