/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.soap {
export function defaultInParameterLabel(operation?: SOAP.Operation, parameterNumber?: number): string {if ((operation != null) && (operation.getInParameters().length >= parameterNumber)) {
	return "<" + operation.getInParameters()[parameterNumber - 1].replace("[]", "[0]") + ">";
} else {
	return "";
}

}
}
