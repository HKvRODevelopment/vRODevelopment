/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.azure {
export function getLoadBalancers(resourceGroup?: Azure.ResourceGroup): Array<string> {var lbs = AzureLoadBalancerManager.getAllLoadBalancerByResourceGroup(resourceGroup);
var loadBalancers = new Array();
for (var i = 0; i<lbs.length; i++){
	loadBalancers[i] = lbs[i].name;
}
return loadBalancers;
}
}
