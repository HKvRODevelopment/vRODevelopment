/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function updateAvailabilitySetReferenceCountTag(connection?: Azure.Connection, resourceGroupName?: string, availabilitySetName?: string, numberToApply?: number): number {var REFERENCE_COUNT_TAG_KEY = "xaas.allocation.reference.count";

// Assert that a valid value is passed for the number to apply.
if (numberToApply == 0) {
    throw "The passed number for changing the reference count for AvailabilitySet with name '" + availabilitySetName +
        "' under ResourceGroup '" + resourceGroupName + "' is 0.";
}

var lockId = availabilitySetName + "@" + resourceGroupName + "@" + connection.name;

// Locking
LockingSystem.lockAndWait(lockId, workflow.id);
log("Locked for '" + lockId + "'");

var updatedReferenceCount = 0;

try {
    var resourceGroup = AzureResourceGroupManager.getResourceGroupByConnectionAndName(connection, resourceGroupName);
    if (!resourceGroup) {
        throw "ResourceGroup with name '" + resourceGroupName + "' does not exist in the subscription!";
    }

    var availabilitySet = AzureAvailabilitySetManager.getAvailabilitySetByResourceGroupAndName(resourceGroup, availabilitySetName);
    if (!availabilitySet) {
        throw "AvailabilitySet with name '" + availabilitySetName + "' does not exist in the subscription!";
    }

    var existingtags = new Properties();

    var tags = AzureAvailabilitySetManager.listTags(availabilitySet);

    for (var item of tags) {
         var field = item.split(':');
         existingtags.put(field[0], field[1]);
    }

    if (tags.length > 0 && existingtags.get(REFERENCE_COUNT_TAG_KEY)) {
        var referenceCount = parseInt(existingtags.get(REFERENCE_COUNT_TAG_KEY));
        updatedReferenceCount = referenceCount + numberToApply;
        log("Current reference count is " + referenceCount + ". After the update it will be " + updatedReferenceCount);
        if (updatedReferenceCount < 0) {
            // Assure that we don't set reference count to less than 0.
            log("Cannot decrease reference count to a number less than zero! No action is taken.");
            return 0;
        }

        AzureAvailabilitySetManager.addTag(availabilitySet, REFERENCE_COUNT_TAG_KEY, "" + updatedReferenceCount);
        log("Reference count was updated successfully. The new count is " + updatedReferenceCount);

    } else {
        log("The AvailabilitySet with name '" + availabilitySetName + "' under ResourceGroup '" + resourceGroupName +
            "' is not created by vRA as it has no reference count tag. No action is taken.");
        updatedReferenceCount = -1;
    }
} catch (error) {
    throw "Cannot update reference count tag because of the error: " + error;
} finally {
    LockingSystem.unlock(lockId, workflow.id);
    log("Unlocked for '" + lockId + "'");
}

return updatedReferenceCount;

function log(message) {
    System.log("[updateAvailabilitySetReferenceCountTag] " + message);
}
}
}
