/// <reference path="./../../includes.d.ts"/>

namespace test {
export function GetVMNameFromBizGrpName(BizGrpName?: string): Array<string> {var vmNames = new Array();
if(BizGrpName == null){
	return vmNames;	
}
var BizGrpNameTrim = BizGrpName.trim();
if(BizGrpNameTrim == ""){
	System.log("BizGrpName is null")
	return vmNames;	
}
var vcacHost = Server.findForType("VCACCAFE:VCACHost","5d1f6870-9c64-4b0b-9fc6-7efd8c31ea66");
if(vcacHost != null){
	System.log(vcacHost.id)
	System.log(vcacHost.name)
}else{
	System.log("vcacHost is null")
	return vmNames;
}

var service = vcacHost.createCatalogClient().getCatalogConsumerResourceService();   

businessGroupObject = vCACCAFEEntitiesFinder.findBusinessGroups(vcacHost,BizGrpNameTrim);
if(businessGroupObject.length == 0){
	System.log("BizGrpName"+BizGrpNameTrim+" is not exist")
	return vmNames;	
}
System.log("businessGroupObject is " + typeof(businessGroupObject[0]))
System.log("businessGroupObject name is " + businessGroupObject[0].name)
System.log("businessGroupObject id is " + businessGroupObject[0].id)
businessGroupName = businessGroupObject[0].getId();

var conditions = new Array();   
conditions[0] = vCACCAFEFilterParam.substringOf("organization/subTenant/id", vCACCAFEFilterParam.string(businessGroupName));   
var query = vCACCAFEOdataQuery.query().addFilter(conditions);
var items = service.getResourcesList(new vCACCAFEPageOdataRequest(query));  

//System.log(items);  

for (var item of items) {  
  System.log("name:"+ item.name);
  var resourceId = item.Id;  
  var resource = vCACCAFEEntitiesFinder.getCatalogResource(vcacHost,resourceId);  
  var resourceType = resource.getResourceTypeRef().getLabel();
  System.log("resource type: " + resourceType);
  var providerBinding = resource.getProviderBinding();  
  var bindingId = providerBinding.getBindingId();  
  var provider = providerBinding.getProviderRef();  
  System.log("provider.getLabel(): " + provider.getLabel());
//  if ((resourceType == "Virtual Machine") && (provider.getLabel() == "iaas-service")){
  if ((resourceType == "Virtual Machine")){
    System.log("It's an VM!");  
    vCACVm = Server.findForType("vCAC:VirtualMachine", bindingId);  
    System.log("It's name is " + vCACVm.virtualMachineName);
	vmNames.push(vCACVm.virtualMachineName);
  }
}
if(vmNames.length == 0){
}
return vmNames;

}
}
