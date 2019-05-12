/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.basic {
export function waitForCompletionForBatchWorkflow(wfTokens?: Array<WorkflowToken>): Array<WorkflowToken> {
for (var i = 0; i<wfTokens.length; i++){
	var allComplete = false;
	while(! allComplete){
		System.sleep(2000); // Wait 2 seconds
		allComplete = true;
		if(!(wfTokens[i].state != "running" && wfTokens[i].state != "waiting")) {
			// Look if it's running or waiting
			allComplete = false;
		}
	}
	// Now the state is completed, failed or canceled
	var parameters = wfTokens[i].rootWorkflow.inParameters;
	var name = parameters[0].name;
	var object = wfTokens[i].getInputParameters().get(name);
	var logMessage = "The workflow terminated with status '"+wfTokens[i].state+"' on the object '" + object.name + "'.";
	if(wfTokens[i].state=="failed"){
		System.warn(logMessage); 
		System.error(wfTokens[i].exception);
	}else{
		System.log(logMessage); 
	}
}

var tokens = new Array();
for (var i in wfTokens) {
	tokens.push(wfTokens[i]);
}
if(wfTokens.length>0){
	System.log("***All workflows completed***");
}
}
}
