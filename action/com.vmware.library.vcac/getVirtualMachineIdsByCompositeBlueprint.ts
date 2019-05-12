/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function getVirtualMachineIdsByCompositeBlueprint(cbp?: vCACCAFE.CompositeBlueprint): Array<string> {var host = vCACCAFEEntitiesFinder.getHostForEntity(cbp);
var catalogClient = host.createCatalogClient();

var response = catalogClient.get("/providers?$filter=providerType/id eq 'com.vmware.csp.component.cafe.composition'").getBodyAsJson();
var providerId = response.content[0].id;//Get the first provider, as we expect one

//Getting catalog items by BP name and tenant
var nameParam = new vCACCAFEFilterParam("eq", "name", vCACCAFEFilterParam.string(cbp.name));
var tenantParam = new vCACCAFEFilterParam("eq", "organization/tenant", vCACCAFEFilterParam.string(cbp.getTenantId()));
var providerParam = new vCACCAFEFilterParam("eq", "providerBinding/provider/id", vCACCAFEFilterParam.string(providerId));

var catalogItemsOdataQuery = new vCACCAFEOdataQuery();
var filters = new Array();
filters[0] = nameParam;
filters[1] = tenantParam;
filters[2] = providerParam;
catalogItemsOdataQuery.addFilter(filters);
var catalogItemsOdataRequest = new vCACCAFEPageOdataRequest(1, 2, catalogItemsOdataQuery);

var catalogConsumerCatalogItemService = catalogClient.getCatalogConsumerCatalogItemService();
var catalogItems = catalogConsumerCatalogItemService.getCatalogItems(catalogItemsOdataRequest);

var iaasVmIds = new Array();

for (var catalogItem of catalogItems) {
	System.log("Got catalog item with name: " + catalogItem.name + " and id: " + catalogItem.id);
	//Getting requests by catalog item
	var uri = "/consumer/requests?$filter=catalogItem/id eq " + vCACCAFEFilterParam.string(catalogItem.id);

	response = catalogClient.get(uri).getBodyAsJson();
	var catalogItemRequests = response.content;

	for (var catalogItemRequest of catalogItemRequests) {
		response = catalogClient.get("consumer/resources?$filter=resourceType/id eq 'composition.resource.type.deployment' and request/id eq " + vCACCAFEFilterParam.string(catalogItemRequest.id)).getBodyAsJson();
		var deployments = response.content;
		for (var deployment of deployments) {
			if (deployment.hasChildren) {
				response = catalogClient.get("consumer/resources?$filter=resourceType/id eq 'Infrastructure.Virtual' and parentResource/id eq " + vCACCAFEFilterParam.string(deployment.id));
				var vms = response.getBodyAsJson().content;
				for (var vm of vms) {
					System.log("Got VM with name: " + vm.name);
					iaasVmIds.push(vm.providerBinding.bindingId);
				}
			}
		}
	}
}
return iaasVmIds;
}
}
