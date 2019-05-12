/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac.devops.rp {
export function getPollInterval(plugin?: any): number {var pluginPollInterval = null; // Default poll interval
try {
	pluginPollInterval = plugin.pollInterval;
} catch (err) {
	//Ignore if there is no pollinterval vsoproperty present as part of the instance.
	//It will use the default interval of 30 seconds.
}
if (pluginPollInterval == null) {
	pluginPollInterval = 30;
}
System.debug("Poll Interval is " + pluginPollInterval);
return pluginPollInterval;
}
}
