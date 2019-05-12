/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.tasks {
export function createTask(workflowToCall?: Workflow, date?: Date, workflowArguments?: Properties): Task {if (date < new Date()) {
	throw "Start date in the past!";
}

var task = workflowToCall.schedule(workflowArguments, date);
return task;
}
}
