/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.o11n.plugin.dynamictypes.configuration {
export function getPropertiesOfType(type?: DynamicTypes.DynamicTypeDefinition): Array<string> {if (type == null) {
  return null;
}
return type.properties;
}
}
