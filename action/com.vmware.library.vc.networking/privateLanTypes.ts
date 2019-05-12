/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.networking {
export function privateLanTypes(primaryVlanId?: number, secondaryVlanId?: number): Array<string> {return primaryVlanId == secondaryVlanId? ['promiscuous']: ['isolated','community'];
}
}
