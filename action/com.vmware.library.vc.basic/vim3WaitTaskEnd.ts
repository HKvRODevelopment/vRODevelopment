/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.basic {
export function vim3WaitTaskEnd(task?: VC.Task, progress?: boolean, pollRate?: number): any {var taskEnd = false;
var error;

while (task != null) {
	if (task.info == null) {
		throw "VIM Task info is null";
	}
	if (task.info.state == null) {
		throw "VIM Task state is null";
	}	

	var state = task.info.state.value;
	if (state == "success") {
		break;
	}
	else if (state == "error") {
		if (task.info.error.localizedMessage == null) {
			throw "Task '" + task.info.name + "' has encountered an unknown error";
		}
		else {
			throw "Task '" + task.info.name + "' error: "+task.info.error.localizedMessage;
		}
	}
	else if ((progress) && (state == "running")) {
		if (task.info.progress == null) {
			System.log(task.info.name+" Queued or In Progress...");
			}
		else {
			System.log(task.info.name+" "+task.info.progress+" %");
		}
	}
	System.sleep(pollRate*1000);
}

if (task == null) {
	throw "VIM Task is null";
}
else if (progress) {
	System.log(task.info.name+" end");
}

System.sleep(2*1000);

// Return the Task Result
if (task != null && task.info != null && task.info.result != null) {
	return VcPlugin.convertToVimManagedObject(task , task.info.result);
}
else {
	return null;
}
}
}
