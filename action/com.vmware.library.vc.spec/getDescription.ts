/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.spec {
export function getDescription(label?: string, summary?: string): any {if (label == null) throw "ReferenceError: Cannot create Description [label cannot be null]";
if (summary == null) throw "ReferenceError: Cannot create Description [summary cannot be null]";
var description = new VcDescription();
description.label = label;
description.summary = summary;
return description;
}
}
