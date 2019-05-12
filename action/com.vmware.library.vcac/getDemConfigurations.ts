/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getDemConfigurations(demConfigurationResource?: ResourceElement, configurationID?: string): any {var demConfigurationContent = demConfigurationResource.getContentAsMimeAttachment().content;
var demConfigProps = JSON.parse(demConfigurationContent);

return demConfigProps[configurationID];

}
}
