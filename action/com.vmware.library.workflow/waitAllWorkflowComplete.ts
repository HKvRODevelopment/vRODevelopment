/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.workflow {
export function waitAllWorkflowComplete(tokens?: Array<WorkflowToken>): Array<Properties> {var result = new Array();
if (tokens != null && tokens.length > 0) {
	result[tokens.length-1] = null; // init the array with the good size but full of null
	
	var allFinished = false;
	while (! allFinished) {
		System.sleep(500);
	
		allFinished = true;
		
		for (var i in tokens) {
			if (tokens[i].state == "completed" || tokens[i].state == "failed" || tokens[i].state == "canceled") {
				allFinished &= true;
				if (result[i] == null) {
					var prop = tokens[i].getOutputParameters();	// Properties
					if (prop == null) prop = new Properties();
					prop.put("__state", tokens[i].state);
					if (tokens[i].state == "failed")
						prop.put("__exception", tokens[i].exception);
					result[i] = prop;
				}
			}
			else {
				allFinished = false;
			}
		}
	}	
}
return result;
}
}
