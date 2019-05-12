/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.o11n.plugin.dynamictypes.configuration {
export function getNamespaceByName(name?: string): DynamicTypes.DynamicNamespaceDefinition {if (name == null) {
  System.log("getNamespaceByName() --> name is null");
  return null;
}

return DynamicTypesManager.getNamespace(name);
}
}
