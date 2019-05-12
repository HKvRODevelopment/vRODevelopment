/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function getFirstConnectionContainingLocationId(locationId?: string): Azure.Connection {System.log("[getFirstConnectionContainingLocationId] Looking up for a connection that contains location with id '" + locationId + "'.");

var azureConnections = Server.findAllForType("Azure:Connection");

for (var azureConnection of azureConnections) {
	var region = AzureRegionManager.getRegionByConnectionAndName(azureConnection, locationId);
	if (region != null)
    {
		System.log("[getFirstConnectionContainingLocationId] The location was found in subscription '" + azureConnection.displayName + "'.");
        return azureConnection;
    }
}
System.log("[getFirstConnectionContainingLocationId] No subscription containing the passed location was found!");
return null;
}
}
