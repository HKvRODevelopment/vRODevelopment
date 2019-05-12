/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function createResourceGroup(connection?: Azure.Connection, location?: Azure.Region, groupName?: string, apiVersion?: string): Azure.ResourceGroup {var REFERENCE_COUNT_TAG_KEY = "xaas.allocation.reference.count";

var lockId = groupName + "@" + connection.name;

// Locking
LockingSystem.lockAndWait(lockId, workflow.id);
log("Locked for '" + lockId + "'");

try {
    var resourceGroup = AzureResourceGroupManager.getResourceGroupByConnectionAndName(connection, groupName);

    if (resourceGroup == null) {
        // Create
        log("Creating new resource group with name: '" + groupName + "' in connection: '" + connection.displayName + "'");
        var resourceGroup = AzureResourceGroupManager.create(location, groupName);

        AzureResourceGroupManager.addTag(resourceGroup, REFERENCE_COUNT_TAG_KEY, "0");

        log("Resource group created successfully.");
    } else {
        // The resourceGroup exists, so don't do anything.
        log("Found Resource group with name: '" + groupName + "' in connection: '" + connection.displayName + "'.");
    }
} finally {
    // Unlocking
    LockingSystem.unlock(lockId, workflow.id);
    log("Unlocked for '" + lockId + "'");
}
return AzureResourceGroupManager.getResourceGroupByConnectionAndName(connection,groupName);

function log(message) {
    System.log("[createResourceGroup] " + message);
}
}
}
