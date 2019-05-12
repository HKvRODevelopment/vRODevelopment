/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vcac.asd.mappings {
export function mapToVCloudVM(vmProperties?: Properties): vCloud.VM {var type = 'vCloud:VM';
var vmHref = vmProperties.get('EXTERNAL_REFERENCE_ID');
var foundVM = com.vmware.vcac.asd.findVcdObjectByHref(type,vmHref);
if (!foundVM) {
	System.warn('No VMs with href ' + vmHref + ' were found');
}
return foundVM;
}
}
