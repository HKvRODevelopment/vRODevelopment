/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.reservations {
export function getReservationTypeIdForComponent(host?: vCACCAFE.VCACHost, blueprintId?: string, componentId?: string): void {var compositionService = host.createCompositionClient().getCompositionCompositeBlueprintService();

var blueprint = compositionService.getBlueprint(blueprintId);
var component = blueprint.getComponents().get(componentId);

if  (component != null) {
	var configurationElementCategory = Server.getConfigurationElementCategoryWithPath("System/vRealize Automation/XaaS/Resource Mappings/vCenter");
	for (var configElem of configurationElementCategory.configurationElements) {
		if(configElem.name == "ReservationMappingConfigurationElement") {
			var reservationProps = configElem.getAttributeWithKey("ComponentTypeToReservationTypeMapper");
			var match = reservationProps.value.get(component.getType());
			if (match == null) {
				System.warn("No matching reservation type for the type '" + component.getType() + "' for component '" + componentId + "' of blueprint '" + blueprintId + "' has been found.");
			}
			return match;
		}
	}
}
System.warn("The selected component '" + componentId + "' of blueprint '" + blueprintId + "' is null");
return null;
}
}
