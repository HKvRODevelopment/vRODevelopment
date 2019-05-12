/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function findStorageAccount(connection?: Azure.Connection, storageAccountName?: string): Azure.StorageAccount {var availableSAs = AzureStorageManager.listAllStorageAccount(connection);
// Resolved Azure SA
var storageAccount = null;
if (storageAccountName != null && storageAccountName != "") {
    System.log("Storage Account name is specified: " + storageAccountName);
    if (availableSAs != null && availableSAs.length != 0) {
        System.log("Storage Accounts exist: pick SA by Name.");
        for (var saObj of availableSAs) {
            if (saObj.name.toLowerCase() == storageAccountName.toLowerCase()) {
                storageAccount = saObj;
                break;
            }
        }
    }
} else {
    System.log("Storage Account name is NOT specified");
    if (availableSAs != null && availableSAs.length != 0) {
        System.log("Storage Accounts exist: pick first SA.");
        storageAccount = availableSAs[0];
    }
}
return storageAccount;
}
}
