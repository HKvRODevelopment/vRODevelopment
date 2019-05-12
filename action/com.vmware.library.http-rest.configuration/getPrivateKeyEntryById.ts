/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.httprest.configuration {
export function getPrivateKeyEntryById(keyId?: string): Configurator.Key {var result = Server.findForType("Configurator:Key", keyId);
if (result != null) {
    System.log("Found key for id: " + keyId);
} else {
    System.log("Key for id not found: " + keyId);
}
return result;
}
}
