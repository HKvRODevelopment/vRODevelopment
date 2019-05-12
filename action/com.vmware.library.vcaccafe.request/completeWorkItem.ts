/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.request {
export function completeWorkItem(item?: vCACCAFE.WorkItem, itemAction?: vCACCAFE.WorkItemAction, inputs?: Properties): void {com.vmware.library.vcaccafe.util.validateObject(itemAction, "Work item action");
var map = vCACCAFERequestsHelper.createLiteralMap(inputs);
System.log("Completing work item '" + item.getWorkItemNumber() + "'...");
vCACCAFERequestsHelper.completeWorkItem(item, itemAction, map);
System.log("Work item '" + item.getWorkItemNumber() + "' completed.");

}
}
