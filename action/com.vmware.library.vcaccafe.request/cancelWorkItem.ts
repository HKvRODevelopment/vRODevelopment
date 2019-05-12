/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.request {
export function cancelWorkItem(item?: vCACCAFE.WorkItem): void {System.log("Cancelling work item '" + item.getWorkItemNumber() + "'...");
vCACCAFERequestsHelper.cancelWorkItem(item);
System.log("Work item '" + item.getWorkItemNumber() + "' cancelled.");
}
}
