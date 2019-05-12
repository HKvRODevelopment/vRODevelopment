/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
declare module java.lang
{
	export interface Number
	{

	}


}
declare module java.util
{
	export interface Map
	{

	}


}
	interface Long
	{

	}

	declare const Long: Long;

declare module org.joda.time
{
	export interface LocalDateTime
	{

	}


}
declare module org.odata4j.core
{
	export interface UnsignedByte
	{

	}


}
	interface vCACCachingEntityManager
	{

		evictCachedModelEntitiesByCustomFilter(hostId?: String, modelName?: String, entitySetName?: String, properties?: java.util.Map, headers?: Properties): void;
		evictCachedModelEntitiesBySystemQuery(hostId?: String, modelName?: String, entitySetName?: String, filter?: String, orderBy?: String, select?: String, top?: int, skip?: int, headers?: Properties): void;
		evictCachedModelEntity(hostId?: String, modelName?: String, entitySetName?: String, entityId?: java.util.Map, headers?: Properties): void;
		readModelEntitiesByCustomFilter(hostId?: String, modelName?: String, entitySetName?: String, properties?: java.util.Map, headers?: Properties): VCACEntity[];
		readModelEntitiesBySystemQuery(hostId?: String, modelName?: String, entitySetName?: String, filter?: String, orderBy?: String, select?: String, top?: int, skip?: int, headers?: Properties): VCACEntity[];
		readModelEntity(hostId?: String, modelName?: String, entitySetName?: String, entityId?: java.util.Map, headers?: Properties): VCACEntity;
	}

	declare const vCACCachingEntityManager: vCACCachingEntityManager;

	interface VCACEntity
	{
		entityKey: Properties;
		entitySetName: String;
		hostId: String;
		keyString: String;
		modelName: String;

		getInventoryObject(): Object;
		getLink(host?: vCACVcacHost, linkName?: String): VCACEntity[];
		getLinks(host?: vCACVcacHost): Properties;
		getProperties(): Properties;
		getProperty(propertyName?: String): Object;
	}

	interface VCACEntityConstructor {
		new(value?:any): VCACEntity;
		readonly prototype: VCACEntity;
	}

	declare const VCACEntity: VCACEntityConstructor;

	interface vCACEntityBatchSession
	{

		createEntity(entitySetName?: String, parameters?: java.util.Map, links?: java.util.Map): void;
		deleteEntities(dataEntities?: VCACEntity[]): void;
		deleteEntity(dataEntity?: VCACEntity): void;
		deleteEntityByKey(entitySetName?: String, entityKey?: String): void;
		updateEntity(entitySetName?: String, entityId?: java.util.Map, parameters?: java.util.Map, links?: java.util.Map): void;
		updateEntityByKey(entitySetName?: String, entityKey?: String, parameters?: java.util.Map, links?: java.util.Map): void;
	}

	interface vCACEntityBatchSessionConstructor {
		new(value?:any): vCACEntityBatchSession;
		readonly prototype: vCACEntityBatchSession;
	}

	declare const vCACEntityBatchSession: vCACEntityBatchSessionConstructor;

	interface vCACEntityManager
	{

		calculateMD5Hash(input?: MimeAttachment): MimeAttachment;
		createEntityBatchSession(vcacHost?: vCACVcacHost, modelName?: String, headers?: Properties): vCACEntityBatchSession;
		createModelEntity(hostId?: String, modelName?: String, entitySetName?: String, parameters?: java.util.Map, links?: java.util.Map, headers?: Properties): VCACEntity;
		deleteLink(hostId?: String, modelName?: String, entitySetName?: String, sourceEntity?: VCACEntity, targetNavProperty?: String, serializedKeyString?: String, headers?: Properties): void;
		deleteModelEntityBySerializedKey(hostId?: String, modelName?: String, entitySetName?: String, entityKey?: String, headers?: Properties): void;
		readModelEntitiesByCustomFilter(hostId?: String, modelName?: String, entitySetName?: String, properties?: java.util.Map, headers?: Properties): VCACEntity[];
		readModelEntitiesBySystemExpandQuery(hostId?: String, modelName?: String, entitySetName?: String, filter?: String, expand?: String, orderBy?: String, select?: String, top?: int, skip?: int, headers?: Properties): VCACEntity[];
		readModelEntitiesBySystemQuery(hostId?: String, modelName?: String, entitySetName?: String, filter?: String, orderBy?: String, select?: String, top?: int, skip?: int, headers?: Properties): VCACEntity[];
		readModelEntity(hostId?: String, modelName?: String, entitySetName?: String, entityId?: java.util.Map, headers?: Properties): VCACEntity;
		updateModelEntity(hostId?: String, modelName?: String, entitySetName?: String, entityId?: java.util.Map, parameters?: java.util.Map, links?: java.util.Map, headers?: Properties): VCACEntity;
		updateModelEntityBySerializedKey(hostId?: String, modelName?: String, entitySetName?: String, entityId?: String, parameters?: java.util.Map, links?: java.util.Map, headers?: Properties): VCACEntity;
	}

	declare const vCACEntityManager: vCACEntityManager;

	interface vCACHostMachine
	{
		readonly displayName: String;
		flags: Long;
		hostComments: String;
		hostDNSName: String;
		hostId: String;
		hostManufacturer: String;
		hostModel: String;
		hostName: String;
		hostOSType: String;
		hostProcessors: Integer;
		hostProcessorSpeed: Integer;
		hostProcessorType: String;
		hostStateID: org.odata4j.core.UnsignedByte;
		hostTotalMemoryMB: Long;
		hostTotalStorageGB: Long;
		hostUniqueId: String;
		hostUsedMemoryMB: Long;
		hostUsedStorageGB: Long;
		readonly internalId: String;
		isCluster: boolean;
		isVRMManaged: boolean;
		machineType: org.odata4j.core.UnsignedByte;
		physicalLocationId: String;
		recCreationTime: org.joda.time.LocalDateTime;
		recDeleteTime: org.joda.time.LocalDateTime;
		recUpdateTime: org.joda.time.LocalDateTime;
		text1: String;
		text2: String;

		getEntity(): VCACEntity;
	}

	interface vCACHostMachineConstructor {
		new(value?:any): vCACHostMachine;
		readonly prototype: vCACHostMachine;
	}

	declare const vCACHostMachine: vCACHostMachineConstructor;

	interface vCACMachinePrefix
	{
		readonly displayName: String;
		hostnamePrefixId: String;
		readonly internalId: String;
		machineNumberLength: int;
		machinePrefix: String;
		nextMachineNo: int;

		getEntity(): VCACEntity;
	}

	interface vCACMachinePrefixConstructor {
		new(value?:any): vCACMachinePrefix;
		readonly prototype: vCACMachinePrefix;
	}

	declare const vCACMachinePrefix: vCACMachinePrefixConstructor;

	interface vCACManagementEndpoint
	{
		readonly credentialDescription: String;
		readonly credentialId: String;
		readonly credentialName: String;
		readonly displayName: String;
		readonly domain: String;
		externalReferenceId: String;
		interfaceType: String;
		readonly internalId: String;
		managementEndpointDescription: String;
		managementEndpointID: String;
		managementEndpointName: String;
		managementUri: String;
		readonly password: String;
		readonly userName: String;

		getEntity(): VCACEntity;
		isSame(sdkHost?: String): boolean;
	}

	interface vCACManagementEndpointConstructor {
		new(value?:any): vCACManagementEndpoint;
		readonly prototype: vCACManagementEndpoint;
	}

	declare const vCACManagementEndpoint: vCACManagementEndpointConstructor;

	interface vCACProvisioningGroup
	{
		adContainer: String;
		administratorEmail: String;
		displayName: String;
		groupDescription: String;
		groupID: String;
		groupName: String;
		groupType: org.odata4j.core.UnsignedByte;
		readonly internalId: String;
		isTestGroup: boolean;

		getEntity(): VCACEntity;
		getVirtualMachineTemplates(): Object[];
		setVirtualMachineTemplates(virtualMachineTemplates?: Object[]): void;
	}

	interface vCACProvisioningGroupConstructor {
		new(value?:any): vCACProvisioningGroup;
		readonly prototype: vCACProvisioningGroup;
	}

	declare const vCACProvisioningGroup: vCACProvisioningGroupConstructor;

	interface vCACReservation
	{
		currentNetworkAllocationIndex: Integer;
		currentStorageAllocationIndex: Integer;
		readonly displayName: String;
		enabled: boolean;
		flags: Long;
		hostReservationID: String;
		hostReservationName: String;
		id: String;
		readonly internalId: String;
		isFileLevelCloningEnabled: boolean;
		machineType: org.odata4j.core.UnsignedByte;
		maxVMsCreate: Integer;
		maxVMsPowerOn: Integer;
		reservationMemorySizeMB: Long;
		reservationPriority: Integer;
		reservationStorageSizeGB: Long;
		storageAllocationPolicyID: org.odata4j.core.UnsignedByte;
		text1: String;
		text2: String;

		getEntity(): VCACEntity;
	}

	interface vCACReservationConstructor {
		new(value?:any): vCACReservation;
		readonly prototype: vCACReservation;
	}

	declare const vCACReservation: vCACReservationConstructor;

	interface vCACVcacHost
	{
		readonly acceptAllCertificates: boolean;
		readonly authenticationType: String;
		readonly displayName: String;
		readonly id: String;
		readonly name: String;
		readonly proxyHost: String;
		readonly proxyPort: int;
		readonly proxyUrl: String;
		readonly url: String;
		readonly username: String;

		extractMessage(trigger?: Trigger): String;
		findAllChildManagementEndpoints(): vCACManagementEndpoint[];
		findAllChildProvisioningGroups(): vCACProvisioningGroup[];
		getAuthProperty(index?: int): String;
		receiveAsync(virtualMachines?: VCACEntity[], successStates?: String[], failStates?: String[], timeoutSeconds?: int): Trigger;
		remove(): void;
		update(props?: Object): vCACVcacHost;
		validate(): void;
	}

	interface vCACVcacHostConstructor {
		new(value?:any): vCACVcacHost;
		readonly prototype: vCACVcacHost;
	}

	declare const vCACVcacHost: vCACVcacHostConstructor;

	interface vCACVcacHostManager
	{

		addVcacHost(props?: Object): vCACVcacHost;
		removeVcacHost(host?: vCACVcacHost): void;
		retrieveIaasRepositoryFromComponentRegistry(): String;
		updateVcacHost(host?: vCACVcacHost, props?: Object): vCACVcacHost;
	}

	declare const vCACVcacHostManager: vCACVcacHostManager;

	interface vCACVirtualMachine
	{
		blueprintType: org.odata4j.core.UnsignedByte;
		connectToVdi: boolean;
		currentTask: String;
		readonly displayName: String;
		expireDays: Integer;
		expires: org.joda.time.LocalDateTime;
		externalReferenceId: String;
		fileLevelCloneImageName: String;
		flags: Long;
		guestOS: String;
		guestOSFamily: String;
		initiatorType: String;
		readonly internalId: String;
		isComponent: boolean;
		isDeleted: boolean;
		isManaged: boolean;
		isMissing: boolean;
		isRogue: boolean;
		isRunning: boolean;
		isTemplate: boolean;
		lastLoggedDate: org.joda.time.LocalDateTime;
		lastLoggedUser: String;
		lastPowerOffDate: org.joda.time.LocalDateTime;
		lastPowerOnDate: org.joda.time.LocalDateTime;
		machineType: org.odata4j.core.UnsignedByte;
		notes: String;
		ownerExists: boolean;
		platformDetails: String;
		recCreationTime: org.joda.time.LocalDateTime;
		recDeleteTime: org.joda.time.LocalDateTime;
		recUpdateTime: org.joda.time.LocalDateTime;
		storagePath: String;
		text1: String;
		text2: String;
		usageIndex: Integer;
		usageIndexIgnoreBy: String;
		virtualMachineID: String;
		virtualMachineName: String;
		virtualMachineState: String;
		virtualMachineTemplateID: String;
		vmCPUs: Integer;
		vmCreationDate: org.joda.time.LocalDateTime;
		vmDeleteDate: org.joda.time.LocalDateTime;
		vmDNSName: String;
		vmEstimatedUsedSpace: java.lang.Number;
		vmInitialUsedSpace: java.lang.Number;
		vmTotalMemoryMB: Long;
		vmTotalStorageGB: Long;
		vmUniqueID: String;
		vmUsedStorageGB: java.lang.Number;

		collectPostProvisiningActions(): String[];
		getEntity(): VCACEntity;
		postProvisionAction(actionName?: String, properties?: java.util.Map, headers?: Properties): void;
		register(user?: String, identityUser?: String, templateId?: String, hostReservationId?: String, hostStorageReservationId?: String, headers?: Properties): void;
		registerVm(arguments?: Properties, headers?: Properties): void;
	}

	interface vCACVirtualMachineConstructor {
		new(value?:any): vCACVirtualMachine;
		readonly prototype: vCACVirtualMachine;
	}

	declare const vCACVirtualMachine: vCACVirtualMachineConstructor;

	interface vCACVirtualMachineProperty
	{
		id: int;
		isEncrypted: boolean;
		isHidden: boolean;
		isRuntime: boolean;
		propertyName: String;
		propertyValue: String;

	}

	interface vCACVirtualMachinePropertyConstructor {
		new(value?:any): vCACVirtualMachineProperty;
		readonly prototype: vCACVirtualMachineProperty;
	}

	declare const vCACVirtualMachineProperty: vCACVirtualMachinePropertyConstructor;

    
    // Finder objects.
declare namespace vCAC {
	interface Endpoint extends vCACManagementEndpoint
	{
		readonly credentialDescription: any;
		readonly credentialId: any;
		readonly credentialName: any;
		readonly displayName: any;
		readonly domain: any;
		externalReferenceId: any;
		interfaceType: any;
		internalId: any;
		managementEndpointDescription: any;
		managementEndpointID: any;
		managementEndpointName: any;
		managementUri: any;
		readonly password: any;
		readonly userName: any;

	}

	interface EndpointConstructor {
		new(value?:any): Endpoint;
		readonly prototype: Endpoint;
	}

	const Endpoint: EndpointConstructor;

	interface Entity extends VCACEntity
	{
		entityKey: any;
		entitySetName: any;
		hostId: any;
		keyString: any;
		modelName: any;

	}

	interface EntityConstructor {
		new(value?:any): Entity;
		readonly prototype: Entity;
	}

	const Entity: EntityConstructor;

	interface HostMachine extends vCACHostMachine
	{
		readonly displayName: any;
		flags: any;
		hostComments: any;
		hostDNSName: any;
		hostId: any;
		hostManufacturer: any;
		hostModel: any;
		hostName: any;
		hostOSType: any;
		hostProcessors: any;
		hostProcessorSpeed: any;
		hostProcessorType: any;
		hostStateID: any;
		hostTotalMemoryMB: any;
		hostTotalStorageGB: any;
		hostUniqueId: any;
		hostUsedMemoryMB: any;
		hostUsedStorageGB: any;
		internalId: any;
		isCluster: any;
		isVRMManaged: any;
		machineType: any;
		physicalLocationId: any;
		recCreationTime: any;
		recDeleteTime: any;
		recUpdateTime: any;
		text1: any;
		text2: any;

	}

	interface HostMachineConstructor {
		new(value?:any): HostMachine;
		readonly prototype: HostMachine;
	}

	const HostMachine: HostMachineConstructor;

	interface HostNamePrefixes extends vCACMachinePrefix
	{
		readonly displayName: any;
		hostnamePrefixId: any;
		internalId: any;
		machineNumberLength: any;
		machinePrefix: any;
		nextMachineNo: any;

	}

	interface HostNamePrefixesConstructor {
		new(value?:any): HostNamePrefixes;
		readonly prototype: HostNamePrefixes;
	}

	const HostNamePrefixes: HostNamePrefixesConstructor;

	interface ProvisioningGroup extends vCACProvisioningGroup
	{
		adContainer: any;
		administratorEmail: any;
		displayName: any;
		groupDescription: any;
		groupID: any;
		groupName: any;
		groupType: any;
		internalId: any;
		isTestGroup: any;

	}

	interface ProvisioningGroupConstructor {
		new(value?:any): ProvisioningGroup;
		readonly prototype: ProvisioningGroup;
	}

	const ProvisioningGroup: ProvisioningGroupConstructor;

	interface Reservation extends vCACReservation
	{
		currentNetworkAllocationIndex: any;
		currentStorageAllocationIndex: any;
		readonly displayName: any;
		enabled: any;
		flags: any;
		hostReservationID: any;
		hostReservationName: any;
		id: any;
		internalId: any;
		isFileLevelCloningEnabled: any;
		machineType: any;
		maxVMsCreate: any;
		maxVMsPowerOn: any;
		reservationMemorySizeMB: any;
		reservationPriority: any;
		reservationStorageSizeGB: any;
		storageAllocationPolicyID: any;
		text1: any;
		text2: any;

	}

	interface ReservationConstructor {
		new(value?:any): Reservation;
		readonly prototype: Reservation;
	}

	const Reservation: ReservationConstructor;

	interface Root
	{

		hosts(): VCACHost;
	}

	interface RootConstructor {
		new(value?:any): Root;
		readonly prototype: Root;
	}

	const Root: RootConstructor;

	interface VCACHost extends vCACVcacHost
	{
		readonly acceptAllCertificates: any;
		readonly authenticationType: any;
		readonly displayName: any;
		readonly id: any;
		readonly name: any;
		readonly proxyHost: any;
		readonly proxyPort: any;
		readonly proxyUrl: any;
		readonly url: any;
		readonly username: any;

		virtualFolder_Endpoints(): virtualFolder_Endpoints;
		virtualFolder_Hosts(): virtualFolder_Hosts;
		virtualFolder_Prefixes(): virtualFolder_Prefixes;
		virtualFolder_ProvisioningGroups(): virtualFolder_ProvisioningGroups;
		virtualFolder_Reservations(): virtualFolder_Reservations;
		virtualFolder_VirtualMachines(): virtualFolder_VirtualMachines;
	}

	interface VCACHostConstructor {
		new(value?:any): VCACHost;
		readonly prototype: VCACHost;
	}

	const VCACHost: VCACHostConstructor;

	interface virtualFolder_Endpoints
	{

		Endpoint(): Endpoint;
	}

	interface virtualFolder_EndpointsConstructor {
		new(value?:any): virtualFolder_Endpoints;
		readonly prototype: virtualFolder_Endpoints;
	}

	const virtualFolder_Endpoints: virtualFolder_EndpointsConstructor;

	interface virtualFolder_Hosts
	{

		HostMachine(): HostMachine;
	}

	interface virtualFolder_HostsConstructor {
		new(value?:any): virtualFolder_Hosts;
		readonly prototype: virtualFolder_Hosts;
	}

	const virtualFolder_Hosts: virtualFolder_HostsConstructor;

	interface virtualFolder_Prefixes
	{

		HostNamePrefixes(): HostNamePrefixes;
	}

	interface virtualFolder_PrefixesConstructor {
		new(value?:any): virtualFolder_Prefixes;
		readonly prototype: virtualFolder_Prefixes;
	}

	const virtualFolder_Prefixes: virtualFolder_PrefixesConstructor;

	interface virtualFolder_ProvisioningGroups
	{

		ProvisioningGroup(): ProvisioningGroup;
	}

	interface virtualFolder_ProvisioningGroupsConstructor {
		new(value?:any): virtualFolder_ProvisioningGroups;
		readonly prototype: virtualFolder_ProvisioningGroups;
	}

	const virtualFolder_ProvisioningGroups: virtualFolder_ProvisioningGroupsConstructor;

	interface virtualFolder_Reservations
	{

		Reservation(): Reservation;
	}

	interface virtualFolder_ReservationsConstructor {
		new(value?:any): virtualFolder_Reservations;
		readonly prototype: virtualFolder_Reservations;
	}

	const virtualFolder_Reservations: virtualFolder_ReservationsConstructor;

	interface virtualFolder_VirtualMachines
	{

		VirtualMachine(): VirtualMachine;
	}

	interface virtualFolder_VirtualMachinesConstructor {
		new(value?:any): virtualFolder_VirtualMachines;
		readonly prototype: virtualFolder_VirtualMachines;
	}

	const virtualFolder_VirtualMachines: virtualFolder_VirtualMachinesConstructor;

	interface VirtualMachine extends vCACVirtualMachine
	{
		blueprintType: any;
		connectToVdi: any;
		currentTask: any;
		readonly displayName: any;
		expireDays: any;
		expires: any;
		externalReferenceId: any;
		fileLevelCloneImageName: any;
		flags: any;
		guestOS: any;
		guestOSFamily: any;
		initiatorType: any;
		internalId: any;
		isComponent: any;
		isDeleted: any;
		isManaged: any;
		isMissing: any;
		isRogue: any;
		isRunning: any;
		isTemplate: any;
		lastLoggedDate: any;
		lastLoggedUser: any;
		lastPowerOffDate: any;
		lastPowerOnDate: any;
		machineType: any;
		notes: any;
		ownerExists: any;
		platformDetails: any;
		recCreationTime: any;
		recDeleteTime: any;
		recUpdateTime: any;
		storagePath: any;
		text1: any;
		text2: any;
		usageIndex: any;
		usageIndexIgnoreBy: any;
		virtualMachineID: any;
		virtualMachineName: any;
		virtualMachineState: any;
		virtualMachineTemplateID: any;
		vmCPUs: any;
		vmCreationDate: any;
		vmDeleteDate: any;
		vmDNSName: any;
		vmEstimatedUsedSpace: any;
		vmInitialUsedSpace: any;
		vmTotalMemoryMB: any;
		vmTotalStorageGB: any;
		vmUniqueID: any;
		vmUsedStorageGB: any;

	}

	interface VirtualMachineConstructor {
		new(value?:any): VirtualMachine;
		readonly prototype: VirtualMachine;
	}

	const VirtualMachine: VirtualMachineConstructor;

    }    
