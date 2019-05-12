/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.policy {
export function stopPolicy(thePolicy?: Policy, reason?: string): void {if (reason == null) reason = "";
thePolicy.stop(reason);
}
}
