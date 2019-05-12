/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.azure {
export function getAllRegions(connection?: Azure.Connection): Array<Azure.Region> {return AzureRegionManager.getRegionByConnection(connection);
}
}
