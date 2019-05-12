/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.azure {
export function checkStorageNameAvailability(resourceGroup?: Azure.ResourceGroup, storageAccountName?: string): boolean {return AzureStorageManager.checkNameAvailability(AzureConnectionManager.getConnectionBySid(resourceGroup.ResourceGroup.getInternalId()),storageAccountName);
}
}
