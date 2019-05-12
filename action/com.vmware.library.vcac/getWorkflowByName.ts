/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getWorkflowByName(workflowName?: string): Workflow {var workflows = Server.findAllForType("Workflow");

var worflowsWithName = new Array();
for (var wf of workflows) {
	if (wf.name == workflowName) {
	worflowsWithName.push(wf);
	}	
}

if (worflowsWithName.length > 1) throw "More than one workflow with name " + workflowName;
if (worflowsWithName.length == 1) return worflowsWithName[0];
return null;
}
}
