/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.azure {
export function getLoadBalancerBackendpool(azureLoadBalancer?: Azure.LoadBalancer): Array<string> {return AzureLoadBalancerManager.getLoadBalancerBackendPool(azureLoadBalancer);
}
}
