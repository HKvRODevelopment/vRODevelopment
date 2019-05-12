/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function hasHttpMethodHasBodyPayload(methodName?: string): boolean {var methodsWithBodyParams = {
   'POST' : true , 
    'PUT'  : true,
    'DELETE' : true,  // the RFC do not forbid the delete method to has content 
    'OPTIONS' : true,
    'CONNECT' : true,
     'PATCH' : true 
};

if (methodsWithBodyParams[methodName]) return true;

return false;
}
}
