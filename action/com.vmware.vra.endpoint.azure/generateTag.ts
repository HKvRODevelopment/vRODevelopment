/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function generateTag(allocationData?: Properties, vmName?: string): string {var ALLOCATION_DATA_ID_KEY = "xaas.allocationResult";
var TAG_PREFIX = "xaas.allocation.";

var allocationId = allocationData.get(ALLOCATION_DATA_ID_KEY);
	
return TAG_PREFIX + allocationId + "." + vmName;
}
}
