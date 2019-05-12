/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcaccafe.endpointconfiguration {
export function addCustomPropertyToEndpointObject(endpoint?: vCACCAFE.Endpoint, propertyName?: string, propertyValue?: string, isRuntime?: boolean, isHidden?: boolean, isEncrypted?: boolean): vCACCAFE.Endpoint {var endpointObj = vCACCAFEEndpointConfigurationHelper.addCustomProperty(endpoint, propertyName, propertyValue, isRuntime, isHidden, isEncrypted);

return endpointObj;
}
}
