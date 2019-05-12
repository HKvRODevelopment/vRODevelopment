/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.o11n.plugin.dynamictypes.configuration {
export function getAllNamespaceDefinitions(): Array<DynamicTypes.DynamicNamespaceDefinition> {return DynamicTypesManager.getAllNamespaces();
}
}
