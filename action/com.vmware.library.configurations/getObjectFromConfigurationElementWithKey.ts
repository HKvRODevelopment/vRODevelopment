/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.configurations {
export function getObjectFromConfigurationElementWithKey(key?: string, configEl?: ConfigurationElement): any {return configEl.getAttributeWithKey(key).value;
}
}
