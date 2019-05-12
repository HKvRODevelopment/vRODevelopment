/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function getVMSizesBySeries(locationId?: string, series?: string): Array<string> {System.log("Looking up for a connection that contains location with id '" + locationId + "'.");

var azureConnections = Server.findAllForType("Azure:Connection");
var connection = null;
var region = null;
for (var azureConnection of azureConnections) {
    try {
	   region = AzureRegionManager.getRegionByConnectionAndName(azureConnection, locationId);
	} catch (ex) {
	   // This happens when we encounter Error for the given connection for any reason. Will skip this connection and try the next.
	   System.error("Not able to extablish the connection -" + ex);
	}

	if (region != null)
	{
		System.log("The location was found in subscription '" + azureConnection.displayName + "'.");
        connection = azureConnection;
        break;
	}
}

if(connection == null)
{
   System.log("No subscription containing the passed location was found!");
   return null;
}

var vmSizes = AzureVirtualMachineManager.getVirtualMachineSizesByRegion(region);


var sizes = new Array();
for (var size of vmSizes) {
    var seriesName = extractSeries(size.name);

    if (seriesName == series) {
        sizes.push(size.name);
    }
}

System.debug("[getVMSizesBySeries] In the passed location '" + locationId + "' and series '" + series + "' were found the following sizes: " + sizes.join(", "));

return sizes;

function extractSeries(sizeName) {
    // The passed sizeName has a form like "Standard_A0" or "Standard_DS1_v2". For the first case the series name is A, while in the second - DSv2.
    var splitted = sizeName.split("_");
    var serieName = splitted[1].match("^[a-zA-Z]+")[0];
    if (splitted[2]) {
        serieName = serieName + splitted[2];
    }
    return serieName;
}

}
}
