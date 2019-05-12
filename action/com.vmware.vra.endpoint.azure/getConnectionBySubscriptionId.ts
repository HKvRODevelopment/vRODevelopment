/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function getConnectionBySubscriptionId(subscriptionId?: string): Azure.Connection {var azureConnections = Server.findAllForType("Azure:Connection");

for (var azureConnection of azureConnections) {
	if (azureConnection.subscriptionId == subscriptionId) {
		return azureConnection;
	}
}

return null;
}
}
