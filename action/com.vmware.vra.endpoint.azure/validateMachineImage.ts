/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function validateMachineImage(imageUrl?: string, imageType?: string, locationId?: string): string {var attributeResults = com.vmware.vra.endpoint.azure.configuration.getAzureConfigurations({
       'General': ["imageValidation"]});

var validationEnabled = attributeResults['General']['imageValidation'];

if (validationEnabled != null && validationEnabled != "enabled") {
   System.log("Image validation Disabled.");
   return "";
}

System.log("Looking up for a connection that contains location with id '" + locationId + "'.");
if (imageUrl == "" || imageUrl == null) {
   return "Type Valid Image Name";
}

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
   return "No subscription containing the passed location was found!";
}

var IMAGE_TYPE_STOCK = "Stock";
var IMAGE_TYPE_CUSTOM = "Custom";
var IMAGE_TYPE_CUSTOM_FORMAT = "https://<storageaccount>.blob.core.windows.net/<container>/<image>.vhd";

if (imageType == IMAGE_TYPE_STOCK) {
    System.log("Stock Image URN: " + imageUrl);

    // Create ref to Stock VM image. Passed image URN should be: publisher:offer:sku:version
    var imagePOSV = imageUrl.split(":");
    if (imagePOSV.length != 4) {
      throw "Stock VM image URN should comply to 'publisher:offer:sku:version' format. Passed value is: " + imageUrl;
    }
    try {
      var vmImage = AzureVirtualMachineManager.getAzureVirtualMachineImage(region, imagePOSV[0].trim(), imagePOSV[1].trim(), imagePOSV[2].trim(), imagePOSV[3].trim());
    } catch (error) {
      return "Error while searching for the given stock image. Please check the value.";
    }
    if (vmImage == null ) {
      return "Error while searching for the given stock image. Please check the value." ;
    }
} else if (imageType == IMAGE_TYPE_CUSTOM) {
   // At this point we will not know if it is managed Disk or Stroage Account. So try the BruteForce way.
   // First check for Stroage Account to see if it matches the pattern.
   // Next try for Managed Disk.
   if (imageUrl.match(/^((https|http):\/\/)/)) {
      var match;
      if (locationId == "chinaeast" || locationId == "chinanorth") {
         match = imageUrl.match(/^((https|http):\/\/)([^\/]+)\.blob\.core\.chinacloudapi\.cn\/([^\/]+\/)+[^\/]+\.vhd$/i);
         IMAGE_TYPE_CUSTOM_FORMAT = "https://<storageaccount>.blob.core.chinacloudapi.cn/<container>/<image>.vhd";
      } else if (locationId == "germanycentral" || locationId == "germanynortheast") {
         match = imageUrl.match(/^((https|http):\/\/)([^\/]+)\.blob\.core\.cloudapi\.de\/([^\/]+\/)+[^\/]+\.vhd$/i);
         IMAGE_TYPE_CUSTOM_FORMAT = "https://<storageaccount>.blob.core.cloudapi.de/<container>/<image>.vhd";
      } else if (locationId == "usgovvirginia" || locationId == "usgovtexas" || locationId == "usgovarizona" || locationId == "usgoviowa" || locationId == "usdodeast" || locationId == "usdodcentral") {
         match = imageUrl.match(/^((https|http):\/\/)([^\/]+)\.blob\.core\.usgovcloudapi\.net\/([^\/]+\/)+[^\/]+\.vhd$/i);
         IMAGE_TYPE_CUSTOM_FORMAT = "https://<storageaccount>.blob.core.usgovcloudapi.net/<container>/<image>.vhd";
      } else {
         match = imageUrl.match(/^((https|http):\/\/)([^\/]+)\.blob\.core\.windows\.net\/([^\/]+\/)+[^\/]+\.vhd$/i);
	  }

      if (!match || match.length == 0) {
         return "VM image URN of type '" + IMAGE_TYPE_CUSTOM + "' should comply to '" + IMAGE_TYPE_CUSTOM_FORMAT + "'. Passed value is: " + imageUrl + " match " + match;
      }
   } else {
      var imagePOSV = imageUrl.split(":");
      if (imagePOSV.length != 2) {
          return "For Managed Disk the Format is ResourceGroup:CustomImageName";
      }
      var imageRg = AzureResourceGroupManager.getResourceGroupByConnectionAndName(connection, imagePOSV[0].trim());
      if (imageRg == null) {
         return "Please check the value you have Entered. No ResourceGroup with the given name found.";
      }
      var vmImage = AzureVirtualMachineManager.getCustomImageByName(imageRg, imagePOSV[1].trim());

      if (vmImage == null ) {
         return "Error while searching for the given stock image. Please check the value." ;
      }

   }
}

return "";

}
}
