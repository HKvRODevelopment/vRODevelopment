/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.spec {
export function getResourceConfigSpec(changeVersion?: string, cpuAllocation?: any, entity?: any, lastModified?: Date, memoryAllocation?: any): any {var result = new VcResourceConfigSpec();
if (cpuAllocation == null) throw "ReferenceError: cpuAllocation cannot be null";
if (memoryAllocation == null) throw "ReferenceError: memoryAllocation cannot be null";

if (changeVersion != null && changeVersion != "")
	result.changeVersion = changeVersion;
result.cpuAllocation = cpuAllocation;
if (entity != null)
	result.entity = entity;
if (lastModified != null)
	result.lastModified = lastModified;
result.memoryAllocation = memoryAllocation;

return result;
}
}
