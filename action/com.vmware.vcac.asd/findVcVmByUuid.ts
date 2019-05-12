/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vcac.asd {
export function findVcVmByUuid(vmUuid?: string): VC.VirtualMachine {System.log("Trying to resolve a vCenter VM with UUID " + vmUuid);

var vCenterVm = null;
      
var sdkConnections = VcPlugin.allSdkConnections;
for (var sdkConnection of sdkConnections) {
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

   if (vCenterVm != null) {
      break;
   } else{
      try {
         vCenterVm = sdkConnection.searchIndex.findByUuid(null, vmUuid, true, false);
      } catch(e) {
         System.log("Unable to find VM by BIOS UUID :" + vmUuid + ", for SDK connection " + sdkConnection.name + ", reason : " + e);
      }
   }
   
   if (vCenterVm != null) {
      break;
   }
}

if (vCenterVm != null) {
   System.log("Resolved vCenter VM " + vCenterVm.name);
} else {
   System.warn('No VMs with UUID ' + vmUuid + ' were found');
}

return vCenterVm;
}
}
