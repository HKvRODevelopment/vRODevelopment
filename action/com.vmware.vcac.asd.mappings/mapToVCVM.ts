/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vcac.asd.mappings {
export function mapToVCVM(vmProperties?: Properties): VC.VirtualMachine {var vmUuid = vmProperties.get('VirtualMachine.Admin.UUID');
if(!vmUuid){
	throw "VirtualMachine.Admin.UUID value is null!";
}

var endpointUuid = vmProperties.get('endpointExternalReferenceId');

if(endpointUuid){
	return com.vmware.vcac.asd.findVcVmByVcAndVmUuid(endpointUuid, vmUuid);
} else {
	System.warn("endpointExternalReferenceId is null. Searching in all vCenter Hosts.");
	return com.vmware.vcac.asd.findVcVmByUuid(vmUuid);
}
}
}
