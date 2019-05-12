/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.o11n.plugin.dynamictypes.configuration {
export function validateConfigurationPackage(file?: MimeAttachment): boolean {if (file == null) {
  return true;
}
return DynamicTypesManager.validateConfigurationPackage(file);
}
}
