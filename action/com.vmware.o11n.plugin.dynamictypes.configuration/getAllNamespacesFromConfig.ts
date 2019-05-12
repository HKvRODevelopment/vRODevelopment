/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.o11n.plugin.dynamictypes.configuration {
export function getAllNamespacesFromConfig(file?: MimeAttachment): Array<string> {return DynamicTypesManager.getAllNamespacesByPackage(file);
}
}
