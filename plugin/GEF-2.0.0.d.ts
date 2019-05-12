/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
	interface GEFCafeHelper
	{

		delete(endpointId?: String, url?: String): void;
		get(endpointId?: String, url?: String): String;
		post(endpointId?: String, url?: String, body?: Object): String;
		put(endpointId?: String, url?: String, body?: Object): void;
	}

	declare const GEFCafeHelper: GEFCafeHelper;

	interface GEFComputeResource
	{
		allocationType: Integer;
		comments: String;
		computeResourceCluster: GEFComputeResource;
		dnsName: String;
		externalReferenceId: String;
		hardwareUuid: String;
		isCluster: boolean;
		isHighAvailabiltyEnabled: boolean;
		isTrustedPlatformModuleEnabled: boolean;
		location: String;
		machineType: int;
		manufacturer: String;
		model: String;
		name: String;
		networks: GEFComputeResourceNetwork[];
		numberOfProcessors: Integer;
		operatingSystem: String;
		processorSpeed: Integer;
		processorType: String;
		resourcePools: GEFComputeResourceResourcePool[];
		state: Integer;
		storages: GEFComputeResourceStorage[];
		text1: String;
		text2: String;
		totalMemoryBytes: Long;
		totalStorageBytes: Long;
		uniqueId: String;
		usedMemoryBytes: Long;
		usedStorageBytes: Long;

		addAnnotation(name?: String, value?: String): void;
		addCustomProperty(name?: String, value?: String): void;
		addNetwork(network?: GEFComputeResourceNetwork): void;
		addResourcePool(pool?: GEFComputeResourceResourcePool): void;
		addStorage(storage?: GEFComputeResourceStorage): void;
		addVendorCustomProperty(name?: String, value?: String): void;
		getAnnotation(name?: String): GEFPropertyItem;
		getAnnotations(): GEFPropertyItem[];
		getCustomProperties(): GEFPropertyItem[];
		getCustomProperty(name?: String): GEFPropertyItem;
		getVendorCustomProperties(): GEFPropertyItem[];
		getVendorCustomProperty(name?: String): GEFPropertyItem;
	}

	interface GEFComputeResourceConstructor {
		new(value?:any): GEFComputeResource;
		readonly prototype: GEFComputeResource;
		build(uniqueId?: String): GEFComputeResource;
	}

	declare const GEFComputeResource: GEFComputeResourceConstructor;

	interface GEFComputeResourceNetwork
	{
		macId: String;
		name: String;
		networkName: String;
		uniqueId: String;

	}

	interface GEFComputeResourceNetworkConstructor {
		new(value?:any): GEFComputeResourceNetwork;
		readonly prototype: GEFComputeResourceNetwork;
		build(uniqueId?: String): GEFComputeResourceNetwork;
	}

	declare const GEFComputeResourceNetwork: GEFComputeResourceNetworkConstructor;

	interface GEFComputeResourceResourcePool
	{
		cpuCount: int;
		description: String;
		memoryBytes: Long;
		name: String;
		text1: String;
		text2: String;
		uniqueId: String;

	}

	interface GEFComputeResourceResourcePoolConstructor {
		new(value?:any): GEFComputeResourceResourcePool;
		readonly prototype: GEFComputeResourceResourcePool;
		build(uniqueId?: String): GEFComputeResourceResourcePool;
	}

	declare const GEFComputeResourceResourcePool: GEFComputeResourceResourcePoolConstructor;

	interface GEFComputeResourceStorage
	{
		externalReferenceId: String;
		freeCapacityBytes: Long;
		isCluster: boolean;
		isFileLevelCloneEnabled: boolean;
		storageDevice: String;
		storageName: String;
		storageTypeId: int;
		text1: String;
		text2: String;
		totalCapacityBytes: Long;
		uniqueId: String;
		volumeSavingPercent: float;

	}

	interface GEFComputeResourceStorageConstructor {
		new(value?:any): GEFComputeResourceStorage;
		readonly prototype: GEFComputeResourceStorage;
		build(uniqueId?: String): GEFComputeResourceStorage;
	}

	declare const GEFComputeResourceStorage: GEFComputeResourceStorageConstructor;

	interface GEFEndpoint
	{
		flavor: String;
		InterfaceType: String;
		name: String;
		password: String;
		ProxyAddress: String;
		ProxyPort: int;
		ProxyUserName: String;
		ProxyUserPassword: String;
		url: String;
		userName: String;
		vendor: String;

		addAnnotation(name?: String, value?: String): void;
		addCustomProperty(name?: String, value?: String): void;
		addVendorCustomProperty(name?: String, value?: String): void;
		extractAuthDomain(): String;
		extractAuthUsername(): String;
		getAnnotation(name?: String): GEFPropertyItem;
		getAnnotations(): GEFPropertyItem[];
		getCustomProperties(): GEFPropertyItem[];
		getCustomProperty(name?: String): GEFPropertyItem;
		getHostname(): String;
		getVendorCustomProperties(): GEFPropertyItem[];
		getVendorCustomProperty(name?: String): GEFPropertyItem;
	}

	interface GEFEndpointConstructor {
		new(value?:any): GEFEndpoint;
		readonly prototype: GEFEndpoint;
	}

	declare const GEFEndpoint: GEFEndpointConstructor;

	interface GEFExecutionStatus
	{

		addErrorMessage(message?: String): void;
		addWarningMessage(message?: String): void;
		getErrorMessages(): String[];
	}

	interface GEFExecutionStatusConstructor {
		new(value?:any): GEFExecutionStatus;
		readonly prototype: GEFExecutionStatus;
	}

	declare const GEFExecutionStatus: GEFExecutionStatusConstructor;

	interface GEFInstanceType
	{
		cpu: int;
		description: String;
		memoryBytes: Long;
		name: String;
		performanceDescription: String;
		storageBytes: Long;
		uniqueId: String;
		virtualCores: Long;

	}

	interface GEFInstanceTypeConstructor {
		new(value?:any): GEFInstanceType;
		readonly prototype: GEFInstanceType;
		build(uniqueId?: String): GEFInstanceType;
	}

	declare const GEFInstanceType: GEFInstanceTypeConstructor;

	interface GEFJsonHelper
	{

		parseComputeResource(json?: String): GEFComputeResource;
		parseEndpoint(json?: String): GEFEndpoint;
		parseOperationData(operationType?: String, operationDataJson?: String): Properties;
		parseOperationRequest(json?: String): GEFOperationRequest;
		parseVersion(json?: String): GEFVersion;
		serialize(object?: Object): String;
		serializeArray(propertiesArray?: Object[]): String;
	}

	declare const GEFJsonHelper: GEFJsonHelper;

	interface GEFMachine
	{
		allowsHotCpu: boolean;
		allowsHotMemory: boolean;
		archiveDays: int;
		blueprintType: int;
		cdroms: GEFMachineCdrom[];
		childMachines: GEFMachine[];
		computeResource: GEFComputeResource;
		connectAddress: String;
		cpuCount: int;
		dnsName: String;
		expires: java.util.Date;
		externalReferenceId: String;
		guestOperatingSystem: String;
		guestOperatingSystemFamily: String;
		instanceTypeId: String;
		instanceTypeName: String;
		isComponent: boolean;
		isTemplate: boolean;
		leaseDays: Integer;
		machineName: String;
		memoryBytes: Long;
		networks: GEFMachineNetwork[];
		notes: String;
		ownerUserName: String;
		parentMachine: GEFMachine;
		running: boolean;
		state: String;
		storagePath: String;
		storages: GEFMachineStorage[];
		totalStorageBytes: Long;
		uniqueId: String;

		addAnnotation(name?: String, value?: String): void;
		addCdrom(cdrom?: GEFMachineCdrom): void;
		addChildMachine(machine?: GEFMachine): void;
		addCustomProperty(name?: String, value?: String): void;
		addNetwork(network?: GEFMachineNetwork): void;
		addStorage(storage?: GEFMachineStorage): void;
		addVendorCustomProperty(name?: String, value?: String): void;
		getAnnotation(name?: String): GEFPropertyItem;
		getAnnotations(): GEFPropertyItem[];
		getCustomProperties(): GEFPropertyItem[];
		getCustomProperty(name?: String): GEFPropertyItem;
		getVendorCustomProperties(): GEFPropertyItem[];
		getVendorCustomProperty(name?: String): GEFPropertyItem;
	}

	interface GEFMachineConstructor {
		new(value?:any): GEFMachine;
		readonly prototype: GEFMachine;
		build(uniqueId?: String): GEFMachine;
	}

	declare const GEFMachine: GEFMachineConstructor;

	interface GEFMachineCdrom
	{
		deviceId: String;
		location: String;
		name: String;
		password: String;
		userName: String;

	}

	interface GEFMachineCdromConstructor {
		new(value?:any): GEFMachineCdrom;
		readonly prototype: GEFMachineCdrom;
		build(name?: String): GEFMachineCdrom;
	}

	declare const GEFMachineCdrom: GEFMachineCdromConstructor;

	interface GEFMachineCustomization
	{
		childMachineCustomizations: GEFMachineCustomization[];
		initialCpu: int;
		initialMemoryBytes: Long;
		networks: GEFMachineCustomizationNetwork[];
		powerAction: int;
		requestedCpu: int;
		requestedMemoryBytes: Long;
		storages: GEFMachineCustomizationStorage[];

		addChildMachineCustomization(machine?: GEFMachineCustomization): void;
		addNetwork(network?: GEFMachineCustomizationNetwork): void;
		addStorage(storage?: GEFMachineCustomizationStorage): void;
	}

	interface GEFMachineCustomizationConstructor {
		new(value?:any): GEFMachineCustomization;
		readonly prototype: GEFMachineCustomization;
		build(): GEFMachineCustomization;
	}

	declare const GEFMachineCustomization: GEFMachineCustomizationConstructor;

	interface GEFMachineCustomizationNetwork
	{
		address: String;
		index: int;
		macAddress: String;
		networkProperties: Properties;
		oldAddress: String;
		operationType: int;
		originalNetworkName: String;
		originalNetworkUniqueId: String;
		requestedNetworkName: String;

	}

	interface GEFMachineCustomizationNetworkConstructor {
		new(value?:any): GEFMachineCustomizationNetwork;
		readonly prototype: GEFMachineCustomizationNetwork;
		build(originalNetworkUniqueId?: String): GEFMachineCustomizationNetwork;
	}

	declare const GEFMachineCustomizationNetwork: GEFMachineCustomizationNetworkConstructor;

	interface GEFMachineCustomizationStorage
	{
		deviceId: String;
		diskName: String;
		driveLetter: String;
		guestOSId: String;
		index: int;
		label: String;
		operationType: int;
		originalDiskSizeBytes: Long;
		requestedDiskSizeBytes: Long;
		storageName: String;
		storageProperties: Properties;

	}

	interface GEFMachineCustomizationStorageConstructor {
		new(value?:any): GEFMachineCustomizationStorage;
		readonly prototype: GEFMachineCustomizationStorage;
		build(deviceId?: String): GEFMachineCustomizationStorage;
	}

	declare const GEFMachineCustomizationStorage: GEFMachineCustomizationStorageConstructor;

	interface GEFMachineNetwork
	{
		address: String;
		dnsSearchSuffixes: String;
		dnsSuffix: String;
		gateway: String;
		hostName: String;
		index: int;
		internalAddress: String;
		macAddress: String;
		macAddressType: String;
		networkName: String;
		portId: String;
		primaryDns: String;
		primaryWins: String;
		secondaryDns: String;
		secondaryWins: String;
		subnetMask: String;

		addAnnotation(name?: String, value?: String): void;
		addCustomProperty(name?: String, value?: String): void;
		addVendorCustomProperty(name?: String, value?: String): void;
		getAnnotation(name?: String): GEFPropertyItem;
		getAnnotations(): GEFPropertyItem[];
		getCustomProperties(): GEFPropertyItem[];
		getCustomProperty(name?: String): GEFPropertyItem;
		getVendorCustomProperties(): GEFPropertyItem[];
		getVendorCustomProperty(name?: String): GEFPropertyItem;
	}

	interface GEFMachineNetworkConstructor {
		new(value?:any): GEFMachineNetwork;
		readonly prototype: GEFMachineNetwork;
		build(networkName?: String): GEFMachineNetwork;
	}

	declare const GEFMachineNetwork: GEFMachineNetworkConstructor;

	interface GEFMachinePerformance
	{
		cpuUsageAverage: float;
		diskUsageAverage: float;
		machineUniqueId: String;
		memoryUsageAverage: float;
		netUsageAverage: float;
		timeStamp: java.util.Date;

	}

	interface GEFMachinePerformanceConstructor {
		new(value?:any): GEFMachinePerformance;
		readonly prototype: GEFMachinePerformance;
		build(machineUniqueId?: String): GEFMachinePerformance;
	}

	declare const GEFMachinePerformance: GEFMachinePerformanceConstructor;

	interface GEFMachineSnapshot
	{
		createdDateTime: java.util.Date;
		description: String;
		isCurrentSnapshot: boolean;
		isMemorySnapshot: boolean;
		machineUniqueId: String;
		name: String;
		parentUniqueId: String;
		quiesceGuest: boolean;
		uniqueId: String;

	}

	interface GEFMachineSnapshotConstructor {
		new(value?:any): GEFMachineSnapshot;
		readonly prototype: GEFMachineSnapshot;
		build(machineUniqueId?: String): GEFMachineSnapshot;
	}

	declare const GEFMachineSnapshot: GEFMachineSnapshotConstructor;

	interface GEFMachineStorage
	{
		backingType: String;
		clusterName: String;
		deviceId: String;
		index: int;
		isFixed: boolean;
		name: String;
		sizeBytes: Long;
		sizeUsedBytes: Long;
		storageName: String;
		uniqueId: String;

		addAnnotation(name?: String, value?: String): void;
		addCustomProperty(name?: String, value?: String): void;
		addVendorCustomProperty(name?: String, value?: String): void;
		getAnnotation(name?: String): GEFPropertyItem;
		getAnnotations(): GEFPropertyItem[];
		getCustomProperties(): GEFPropertyItem[];
		getCustomProperty(name?: String): GEFPropertyItem;
		getVendorCustomProperties(): GEFPropertyItem[];
		getVendorCustomProperty(name?: String): GEFPropertyItem;
	}

	interface GEFMachineStorageConstructor {
		new(value?:any): GEFMachineStorage;
		readonly prototype: GEFMachineStorage;
		build(storageName?: String): GEFMachineStorage;
	}

	declare const GEFMachineStorage: GEFMachineStorageConstructor;

	interface GEFOperationRequest
	{
		callbackEndpoint: GEFEndpoint;
		callbackOperationName: String;
		operationType: String;

	}

	interface GEFOperationRequestConstructor {
		new(value?:any): GEFOperationRequest;
		readonly prototype: GEFOperationRequest;
	}

	declare const GEFOperationRequest: GEFOperationRequestConstructor;

	interface GEFPropertyItem
	{
		isEncrypted: boolean;
		isHidden: boolean;
		isRuntime: boolean;
		name: String;
		value: String;

	}

	interface GEFPropertyItemConstructor {
		new(value?:any): GEFPropertyItem;
		readonly prototype: GEFPropertyItem;
		build(name?: String, value?: String): GEFPropertyItem;
	}

	declare const GEFPropertyItem: GEFPropertyItemConstructor;

	interface GEFVersion
	{
		api: String;
		build: String;

	}

	interface GEFVersionConstructor {
		new(value?:any): GEFVersion;
		readonly prototype: GEFVersion;
	}

	declare const GEFVersion: GEFVersionConstructor;

	interface Long
	{

	}

	declare const Long: Long;

    
            
