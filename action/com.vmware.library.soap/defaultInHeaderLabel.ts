/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.soap {
export function defaultInHeaderLabel(operation?: SOAP.Operation, headerNumber?: number): string {if ((operation != null) && (operation.getInHeaders().length >= headerNumber)) {
	return "<" + operation.getInHeaders()[headerNumber - 1].replace("[]", "[0]") + ">";
} else {
	return "";
}

}
}
