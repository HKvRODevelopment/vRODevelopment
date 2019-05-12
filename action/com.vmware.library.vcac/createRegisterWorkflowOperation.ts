/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vcac {
export function createRegisterWorkflowOperation(host?: vCAC.VCACHost, user?: string, identityUser?: string, templateId?: string, virtualMachineId?: string, hostReservationId?: string, hostStorageReservationId?: string): void {var modelName = 'ManagementModelEntities.svc';
var entitySetName = 'WorkflowOperations';

var links = null;
var headers = null;

var operationParameters = {
OperationName:'Register'
};

var wfOperation = vCACEntityManager
.createModelEntity(host.id, modelName, entitySetName, operationParameters, links, headers);

//-------------

entitySetName = 'WorkflowOperationArguments';

links = {
WorkflowOperation:wfOperation
};


inputProperties = {
Name:'User',
Value:user};
vCACEntityManager.createModelEntity(host.id, modelName, entitySetName, inputProperties, links, headers);

inputProperties = {
Name:'IdentityUser',
Value:identityUser};
vCACEntityManager.createModelEntity(host.id, modelName, entitySetName, inputProperties, links, headers);

inputProperties = {
Name:'TemplateId',
Value:templateId};
vCACEntityManager.createModelEntity(host.id, modelName, entitySetName, inputProperties, links, headers);

inputProperties = {
Name:'VirtualMachineId',
Value:virtualMachineId};
vCACEntityManager.createModelEntity(host.id, modelName, entitySetName, inputProperties, links, headers);

inputProperties = {
Name:'HostReservationId',
Value:hostReservationId};
vCACEntityManager.createModelEntity(host.id, modelName, entitySetName, inputProperties, links, headers);

inputProperties = {
Name:'HostStorageReservationId',
Value:hostStorageReservationId};
vCACEntityManager.createModelEntity(host.id, modelName, entitySetName, inputProperties, links, headers);
}
}
