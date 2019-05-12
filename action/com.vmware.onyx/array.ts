/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.onyx {
export function array(type?: any, size?: number): Array {var ret = [];
for (var i = 0; i < size;i++) {
	ret.push(new type())
}
return ret;

}
}
