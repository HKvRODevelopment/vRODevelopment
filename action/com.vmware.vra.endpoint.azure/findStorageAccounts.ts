/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function findStorageAccounts(connection?: Azure.Connection, storageAccountNames?: Array<string>): Array<Azure.StorageAccount> {var resultedStorageAccounts = new Array();
if (storageAccountNames == null || storageAccountNames.length == 0) {
    System.log("No Storage Account names provided. Returning empty array.");
    return resultedStorageAccounts;
}

// NOTE: This is not the best way to get the storage accounts, but is currently the only way. Once
// this bug https://bugzilla.eng.vmware.com/show_bug.cgi?id=1740756 is fixed in Azure plugin, this action should be revised.

// Load all resourceGroups and loop throught them in searching for the passed storage accounts.
var resourceGroups = connection.resourceGroups;

var nonProcessedNames = new Properties();
for (var index in storageAccountNames) {
    var storageAccountName = storageAccountNames[index];
    nonProcessedNames.put(storageAccountName, "");
}

var foundStorageAccounts = new Properties();

for (var index in resourceGroups) {
    var resourceGroup = resourceGroups[index];
    for (var storageAccountName in nonProcessedNames) {
        var storageAccount = resourceGroup.getStorageAccountByName(storageAccountName);
        if (storageAccount != null) {
            System.log("Found storage account with name '" + storageAccount.name + "' in resourceGroup '" + resourceGroup.name + "'.");
            foundStorageAccounts.put(storageAccountName, storageAccount);
            nonProcessedNames.remove(storageAccountName);
        }
    }
    if (nonProcessedNames.keys.length == 0) {
        break;
    }
}

// Finally build the result with the found StorageAccounts in the same order as received in the input.
for (var index in storageAccountNames) {
    var storageAccountName = storageAccountNames[index];
    resultedStorageAccounts.push(foundStorageAccounts.get(storageAccountName));
    if (!foundStorageAccounts.get(storageAccountName)) {
        System.log("Storage account with name " + storageAccountName + " was not found in the subscription!");
    }
}

return resultedStorageAccounts;
}
}
