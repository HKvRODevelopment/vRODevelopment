/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vcac.asd {
export function findVcVmByVcAndVmUuid(vCenterUuid?: string, vmUuid?: string): VC.VirtualMachine {System.log("Trying to resolve a vCenter VM with UUID " + vmUuid + " in vCenter with UUID " + vCenterUuid);

var sdkConnection = VcPlugin.findSdkConnectionForUUID(vCenterUuid);
if (!sdkConnection){
	throw "No vCenter host configuration found with ID " + vCenterUuid;
}

var vCenterVm = null;
try {
	vCenterVm = sdkConnection.searchIndex.findByUuid(null, vmUuid, true, true);
} catch(e) {
	System.log("Unable to find VM by instance UUID :" + vmUuid + ", for SDK connection " + sdkConnection.name + ", will fallback to search by BIOS UUID, reason : " + e);
    try {
    	vCenterVm = sdkConnection.searchIndex.findByUuid(null, vmUuid, true, false);
    } catch(e) {
    	System.log("Unable to find VM by BIOS UUID :" + vmUuid + ", for SDK connection " + sdkConnection.name + ", reason : " + e);
    }
}

if (vCenterVm == null) {
	try {
    	vCenterVm = sdkConnection.searchIndex.findByUuid(null, vmUuid, true, false);
    } catch(e) {
    	System.log("Unable to find VM by BIOS UUID :" + vmUuid + ", for SDK connection " + sdkConnection.name + ", reason : " + e);
    }
}

if (vCenterVm != null) {
   System.log("Resolved vCenter VM " + vCenterVm.name);
} else {
   throw "Virtual Machine with UUID " + vmUuid + " is not found";
}

return vCenterVm;
}
}
