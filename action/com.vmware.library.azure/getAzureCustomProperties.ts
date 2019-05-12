/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.azure {
export function getAzureCustomProperties(connection?: Azure.Connection): Array<CompositeType(name.string,value.string).AzureCustomProperties> {return JSON.parse(connection.customProperties);

}
}
