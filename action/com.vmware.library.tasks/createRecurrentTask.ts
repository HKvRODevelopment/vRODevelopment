/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.tasks {
export function createRecurrentTask(workflowToCall?: Workflow, startDate?: Date, endDate?: Date, recurrencePattern?: string, recurrenceCycle?: string, workflowArguments?: Properties, username?: string, password?: string): Task {if (startDate != null && startDate < new Date()) {
	throw "Start startDate in the past!";
}
recurrenceCycle = recurrenceCycle.toLowerCase();
if (recurrenceCycle != null && recurrenceCycle != "" && 
	recurrenceCycle != "one-time" && 
	recurrenceCycle != "every-minutes" && 
	recurrenceCycle != "every-hours" && 
	recurrenceCycle != "every-days" && 
	recurrenceCycle != "every-weeks" && 
	recurrenceCycle != "every-months") {
	
	throw "recurrenceCycle " + recurrenceCycle + " not supported";
}

var task = workflowToCall.scheduleRecurrently(workflowArguments , recurrencePattern , recurrenceCycle , startDate , endDate , username , password);

return task;
}
}
