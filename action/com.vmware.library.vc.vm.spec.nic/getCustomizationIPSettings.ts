/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.nic {
export function getCustomizationIPSettings(dnsDomain?: string, dnsServerList?: Array<string>, gateway?: Array<string>, ip?: any, netBIOS?: VC.CustomizationNetBIOSMode, primaryWINS?: string, secondaryWINS?: string, subnetMask?: string): any {var ipSettings;
checkParams();
ipSettings = new VcCustomizationIPSettings();
affectParams();
return ipSettings;

function affectParams() {
	ipSettings.dnsDomain = dnsDomain;
	ipSettings.dnsServerList = dnsServerList;
	ipSettings.gateway = gateway;
	ipSettings.ip = ip;
	if (netBIOS != null)
		ipSettings.netBIOS = VcCustomizationNetBIOSMode.fromString(netBIOS.name) ;
	ipSettings.primaryWINS = primaryWINS;
	ipSettings.secondaryWINS = secondaryWINS;
	ipSettings.subnetMask = subnetMask;
}

function checkParams() {
	if (ip == null) throw  "ReferenceError: ip cannot be null";

	if (((ip instanceof VcCustomizationCustomIpGenerator) || (ip instanceof VcCustomizationDhcpIpGenerator) ||
		 (ip instanceof VcCustomizationFixedIp) || (ip instanceof VcCustomizationUnknownIpGenerator)) == false)
		throw "ReferenceError: ip must be of type VcCustomizationCustomIpGenerator, VcCustomizationDhcpIpGenerator, VcCustomizationFixedIp or VcCustomizationUnknownIpGenerator";
	if (ip instanceof VcCustomizationFixedIp) {
		if (subnetMask == null || subnetMask == "") {
			throw "ReferenceError: SubnetMask is not set";
		}
		if (gateway == null || gateway.length==0) {
			throw "ReferenceError: Gateway is not set";
		}
	}
}
}
}
