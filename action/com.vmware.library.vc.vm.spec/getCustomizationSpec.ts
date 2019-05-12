/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec {
export function getCustomizationSpec(globalIPSettings?: any, identity?: any, nicSettingMap?: Array<any>, options?: any): any {var customSpec
try {
	checkParams();
	customSpec = new VcCustomizationSpec();
	affectParams();
	return customSpec;
}
catch (ex) {
	throw "Unable to create VcCustomizationSpec: " + ex;
}

function affectParams() {
	customSpec.globalIPSettings = globalIPSettings;
	customSpec.identity = identity;
	customSpec.nicSettingMap = nicSettingMap;
	customSpec.options = options;
}

function checkParams() {
	if (globalIPSettings == null) throw "globalIPSettings cannot be null";
	if ((globalIPSettings instanceof VcCustomizationGlobalIPSettings) == false) throw "globalIPSettings must be of type VcCustomizationGlobalIPSettings";
	if (identity == null) throw "identity cannot be null";
	if (((identity instanceof VcCustomizationLinuxPrep) || (identity instanceof VcCustomizationSysprep) || (identity instanceof VcCustomizationSysprepText)) == false )
		throw "identity must be of type VcCustomizationLinuxPrep, VcCustomizationSysprep or VcCustomizationSysprepText";
	if (nicSettingMap != null) {
		for (var i in nicSettingMap) {
			if ((nicSettingMap[i] instanceof VcCustomizationAdapterMapping) == false) {
				throw "nicSettingMap must be of type VcCustomizationAdapterMapping";
			}
		}
	}
	if (options != null && ((options instanceof VcCustomizationLinuxOptions) || (options instanceof VcCustomizationWinOptions)) == false) throw "options must be of type VcCustomizationOptions";
}
}
}
