/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.request {
export function getAvailableWorkItemActions(item?: vCACCAFE.WorkItem): Array<vCACCAFE.WorkItemAction> {if (item == null) {
	return null;
}
return vCACCAFEEntitiesFinder.getWorkItemActions(item);
}
}
