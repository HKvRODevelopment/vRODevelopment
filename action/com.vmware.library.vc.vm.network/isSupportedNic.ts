/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.network {
export function isSupportedNic(nic?: any): boolean {return (nic instanceof VcVirtualE1000
    || nic instanceof VcVirtualE1000e
    || nic instanceof VcVirtualPCNet32
    || nic instanceof VcVirtualVmxnet
    || nic instanceof VcVirtualVmxnet2
    || nic instanceof VcVirtualVmxnet3
    || nic instanceof VcVirtualSriovEthernetCard);

}
}
