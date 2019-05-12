/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function createAvailabilitySet(connection?: Azure.Connection, location?: Azure.Region, resourceGroup?: Azure.ResourceGroup, asName?: string, isManaged?: boolean): Azure.AvailabilitySet {var REFERENCE_COUNT_TAG_KEY = "xaas.allocation.reference.count";

if (!connection)
    throw "Connection cannot be null.";
if (!location)
    throw "Location cannot be null.";
if (!resourceGroup)
    throw "Resource group cannot be null.";

var lockId = asName + "@" + resourceGroup.name + "@" + connection.name;

// Locking
LockingSystem.lockAndWait(lockId, workflow.id);
log("Locked for '" + lockId + "'");

try {
    var as = AzureAvailabilitySetManager.getAvailabilitySetByResourceGroupAndName(resourceGroup, asName);
    if (as == null) {
       log("Creating new availability set with name: '" + asName + "' in resource group: '" + resourceGroup.displayName + "'.");
       as = AzureAvailabilitySetManager.create(resourceGroup, location, asName, isManaged, 0, 0);
       if (as != null){
          log("Availability set created successfully.");
          AzureAvailabilitySetManager.addTag(as, REFERENCE_COUNT_TAG_KEY, "0");
       } else {
          log("Creation of availability set with name: '" + asName + "' has failed.");
       }

    } else {
        log("Found availability set with name: '" + asName + "' in resource group: '" + resourceGroup.displayName + "'.");
    }
} finally {
    // Unlocking
    LockingSystem.unlock(lockId, workflow.id);
    log("Unlocked for '" + lockId + "'");
}

return AzureAvailabilitySetManager.getAvailabilitySetByResourceGroupAndName(resourceGroup, asName);

function log(message) {
    System.log("[createAvailabilitySet] " + message);
}
}
}
