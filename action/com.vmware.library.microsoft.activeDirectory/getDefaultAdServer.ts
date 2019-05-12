/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.microsoft.activeDirectory {
export function getDefaultAdServer(): AD.AdHost {var defId = ConfigurationManager.getPluginOptions().defaultAdServerId;
if (defId != null) {
   var hosts = Server.findAllForType("AD:AdHost")
   for (var idx in hosts) {
      var host = hosts[idx]
      if (defId == host.hostConfiguration.id){
		return host;
      }
   }
}
}
}
