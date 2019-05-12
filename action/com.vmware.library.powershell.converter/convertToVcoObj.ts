/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.powershell.converter {
export function convertToVcoObj(converterDefinitionsCSV?: ResourceElement, obj?: any): Array<any> {var definitions =  com.vmware.library.powershell.converter.getConverterDefinitions(converterDefinitionsCSV);
var converter = com.vmware.library.powershell.converter.getConverter(definitions, obj);
return converter.convert();
}
}
