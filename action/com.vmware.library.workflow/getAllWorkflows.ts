/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.workflow {
export function getAllWorkflows(): Array<Workflow> {var workflows = new Array();
var categories = Server.getAllWorkflowCategories();
for (var i in categories){
	getWorkflowsOfCategory(categories[i]);
}
return workflows;


function getWorkflowsOfCategory(cat) {
	workflows = workflows.concat(cat.workflows);
	var cats = cat.subCategories;
	if (cats != null) {
		for (var index in cats) {
			if (cats[index] != null)
				getWorkflowsOfCategory(cats[index]);
		}
	}
}
}
}
