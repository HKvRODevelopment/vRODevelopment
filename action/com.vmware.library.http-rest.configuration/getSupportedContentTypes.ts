/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function getSupportedContentTypes(restOperation?: REST.RESTOperation): Array<string> {var defautContnetType = restOperation.getDefaultContentType();
var types = restOperation.getSupportedContentTypes();
var result = [];
result.push(defautContnetType);

for (var k in types) {
 if (!(defautContnetType == types[k])) {
    result.push (types[k]);
 }
} 

return result; 


}
}
