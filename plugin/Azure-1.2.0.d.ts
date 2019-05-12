/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
	declare class AzureAvailabilitySet
	{
		azureId: String;
		connection: AzureConnection;
		displayName: String;
		id: String;
		internalIdString: String;
		name: String;
		platformFaultDomainCount: String;
		platformUpdateDomainCount: String;
		region: String;
		resourceGroup: AzureResourceGroup;
		type: String;

		constructor();
	}

	interface AzureAvailabilitySetManager
	{

		addTag(availabilitySet?: AzureAvailabilitySet, key?: String, value?: String): void;
		create(resourceGroup?: AzureResourceGroup, region?: AzureRegion, availabilitySetName?: String, isManaged?: boolean, faultDomain?: Number, updateDomain?: Number): AzureAvailabilitySet;
		delete(availabilitySet?: AzureAvailabilitySet): void;
		getAllAvailabilitySetByTag(resourceGroup?: AzureResourceGroup, key?: String, value?: String): AzureAvailabilitySet[];
		getAvailabilitySetById(connection?: AzureConnection, azureId?: String): AzureAvailabilitySet;
		getAvailabilitySetByResourceGroup(resourceGroup?: AzureResourceGroup): AzureAvailabilitySet[];
		getAvailabilitySetByResourceGroupAndName(resourceGroup?: AzureResourceGroup, name?: String): AzureAvailabilitySet;
		listTags(availabilitySet?: AzureAvailabilitySet): String[];
		removeTag(availabilitySet?: AzureAvailabilitySet, key?: String): void;
		toggleSkuType(availabilitySet?: AzureAvailabilitySet): AzureAvailabilitySet;
	}

	declare const AzureAvailabilitySetManager: AzureAvailabilitySetManager;

	interface AzureConnection
	{
		azureEnvironment: String;
		clientId: String;
		customProperties: String;
		displayName: String;
		loginUrl: String;
		name: String;
		proxyHost: String;
		proxyPort: Number;
		proxyUsername: String;
		serviceUri: String;
		storageUri: String;
		subscriptionId: String;
		tenantId: String;

		destroy(): void;
		validate(): void;
	}

	interface AzureConnectionConstructor {
		new(value?:any): AzureConnection;
		readonly prototype: AzureConnection;
	}

	declare const AzureConnection: AzureConnectionConstructor;

	interface AzureConnectionManager
	{

		delete(connection?: AzureConnection): void;
		getConnectionBySid(sid?: String): AzureConnection;
		save(props?: Object, keystoreLocation?: String): String;
		saveFromPem(props?: Object, privateKey?: String, certificate?: String): String;
		saveFromResource(props?: Object, resource?: ResourceElement): String;
		update(props?: Object, connection?: AzureConnection): void;
	}

	declare const AzureConnectionManager: AzureConnectionManager;

	interface AzureDatabaseManager
	{

		addTag(sqlDatabase?: AzureSqlDatabase, sqlServer?: AzureSqlServer, key?: String, value?: String): void;
		addTagForSqlServer(sqlServer?: AzureSqlServer, key?: String, value?: String): void;
		changeSQLServerAdminPwd(sqlServer?: AzureSqlServer, administratorPassword?: String): void;
		createDatabase(sqlServer?: AzureSqlServer, databaseName?: String, databaseEdition?: String, serviceObject?: String, storageSize?: String, collation?: String): AzureSqlDatabase;
		createDatabaseFromSourceDb(sqlServer?: AzureSqlServer, databaseName?: String, sourceDatabase?: AzureSqlDatabase, createMode?: String): AzureSqlDatabase;
		createSQLServer(resourceGroup?: AzureResourceGroup, region?: AzureRegion, sqlServerName?: String, administratorLogin?: String, administratorPassword?: String): AzureSqlServer;
		deleteDatabase(database?: AzureSqlDatabase): void;
		deleteElasticPool(sqlServer?: AzureSqlServer, elasticPoolName?: String, propsJson?: String): void;
		deleteSQLServer(sqlServer?: AzureSqlServer): void;
		getDatabaseInElasticPool(sqlServer?: AzureSqlServer, elasticPoolName?: String): AzureSqlDatabase[];
		getSqlServerById(connection?: AzureConnection, azureId?: String): AzureSqlServer;
		listTags(sqlDatabase?: AzureSqlDatabase, sqlServer?: AzureSqlServer): String[];
		listTagsForSqlServer(sqlServer?: AzureSqlServer): String[];
		removeDatabaseFromElasticPool(sqlServer?: AzureSqlServer, database?: AzureSqlDatabase): void;
		removeTag(sqlDatabase?: AzureSqlDatabase, sqlServer?: AzureSqlServer, key?: String): void;
		removeTagForSqlServer(sqlServer?: AzureSqlServer, key?: String): void;
		toggleAccessFromAzureServices(sqlServer?: AzureSqlServer, enable?: boolean): void;
	}

	declare const AzureDatabaseManager: AzureDatabaseManager;

	declare class AzureDeployment
	{
		azureId: String;
		connection: AzureConnection;
		internalIdString: String;
		name: String;
		resourceGroup: AzureResourceGroup;

		constructor();
	}

	declare class AzureDisk
	{
		attachedToVirtualMachine: boolean;
		azureId: String;
		connection: AzureConnection;
		internalIdString: String;
		name: String;
		osType: String;
		region: String;
		resourceGroup: AzureResourceGroup;
		sizeInGB: Number;
		timeCreated: String;
		type: String;

		constructor();
	}

	interface AzureDiskManager
	{

		addTag(disk?: AzureDisk, key?: String, value?: String): void;
		createDiskFromSnapshot(resourceGroup?: AzureResourceGroup, region?: AzureRegion, diskName?: String, diskSizeInGB?: Number, snapshot?: AzureSnapshot, accountType?: String): AzureDisk;
		createDiskFromVhd(resourceGroup?: AzureResourceGroup, region?: AzureRegion, diskName?: String, diskSizeInGB?: Number, osType?: String, vhdURI?: String, accountType?: String): AzureDisk;
		createEmptyDisk(resourceGroup?: AzureResourceGroup, region?: AzureRegion, diskName?: String, diskSizeInGB?: Number, accountType?: String): AzureDisk;
		delete(disk?: AzureDisk): void;
		getDiskById(connection?: AzureConnection, azureId?: String): AzureDisk;
		listTags(disk?: AzureDisk): String[];
		removeTag(disk?: AzureDisk, key?: String): void;
	}

	declare const AzureDiskManager: AzureDiskManager;

	declare class AzureDnsZone
	{
		azureId: String;
		connection: AzureConnection;
		internalIdString: String;
		name: String;
		nameServers: String;
		region: String;
		resourceGroup: AzureResourceGroup;
		type: String;

		constructor();
	}

	interface AzureExtensionManager
	{

		detachCustomScriptExtension(virtualMachine?: AzureVirtualMachine, extensionName?: String): void;
		runCustomScriptExtProtectedConfig(virtualMachine?: AzureVirtualMachine, extensionName?: String, scriptPaths?: String[], command?: String, storageAccountName?: String, storageAccountKey?: String, minorUpgrade?: boolean): void;
		runCustomScriptExtPublicConfig(virtualMachine?: AzureVirtualMachine, extensionName?: String, scriptPaths?: String[], command?: String, minorUpgrade?: boolean): void;
		runVMAccess(virtualMachine?: AzureVirtualMachine, extensionName?: String, props?: String): void;
	}

	declare const AzureExtensionManager: AzureExtensionManager;

	declare class AzureLoadBalancer
	{
		azureId: String;
		connection: AzureConnection;
		etag: String;
		internalIdString: String;
		name: String;
		provisioningState: String;
		publicIpAddress: String;
		region: String;
		resourceGroup: AzureResourceGroup;
		resourceGuid: String;
		type: String;

		constructor();
	}

	interface AzureLoadBalancerManager
	{

		addHttpProbe(loadBalancer?: AzureLoadBalancer, probeName?: String, requestPath?: String, interval?: Number, port?: Number, probes?: Number): void;
		addLoadBalancerInboundNatRule(loadBalancer?: AzureLoadBalancer, natRuleName?: String, natFrontEndport?: Number, natBackendPort?: Number, frontEndName?: String, floatingIpEnabled?: boolean, idleTimeoutInMinutes?: Number): AzureLoadBalancer;
		addLoadBalancerPrivateFrontEnd(loadBalancer?: AzureLoadBalancer, frontEndName?: String, network?: AzureVirtualNetwork, subnetName?: String, privateIp?: String): AzureLoadBalancer;
		addLoadBalancerPublicFrontEnd(loadBalancer?: AzureLoadBalancer, frontEndName?: String, publicIp?: AzurePublicIPAddress): AzureLoadBalancer;
		addLoadBalancerRule(loadBalancer?: AzureLoadBalancer, lbRuleName?: String, transportProtocol?: String, frontEndport?: Number, backendPort?: Number, probeName?: String, requestPath?: String, probeInterval?: Number, probeThreshold?: Number, floatingIpEnabled?: boolean, idleTimeoutInMinutes?: Number, loadDistributionMode?: String, frontEndName?: String, backendName?: String): AzureLoadBalancer;
		addTag(loadBalancer?: AzureLoadBalancer, key?: String, value?: String): void;
		addTcpProbe(loadBalancer?: AzureLoadBalancer, probeName?: String, interval?: Number, port?: Number, probes?: Number): void;
		attachNicToLoadBalancerBackendPool(loadBalancer?: AzureLoadBalancer, backendPoolName?: String, vNic?: AzureNetworkInterface): void;
		createExternalFacingLoadBalancer(resourceGroup?: AzureResourceGroup, region?: AzureRegion, lbName?: String, lbRuleName?: String, transportProtocol?: String, frontEndport?: Number, backendPort?: Number, probeName?: String, requestPath?: String, probeInterval?: Number, probeThreshold?: Number, floatingIpEnabled?: boolean, idleTimeoutInMinutes?: Number, loadDistributionMode?: String, publicIp?: AzurePublicIPAddress, frontEndName?: String, backendName?: String): AzureLoadBalancer;
		createInternalFacingLoadBalancer(resourceGroup?: AzureResourceGroup, region?: AzureRegion, lbName?: String, lbRuleName?: String, natRuleName?: String, transportProtocol?: String, frontEndport?: Number, backendPort?: Number, natFrontEndport?: Number, natBackendPort?: Number, probeName?: String, requestPath?: String, probeInterval?: Number, probeThreshold?: Number, floatingIpEnabled?: boolean, idleTimeoutInMinutes?: Number, loadDistributionMode?: String, frontEndName?: String, backendName?: String, network?: AzureVirtualNetwork, subnet?: AzureSubnet, privateIp?: String): AzureLoadBalancer;
		deleteLoadBalancer(loadBalancer?: AzureLoadBalancer): void;
		getAllLoadBalancerByResourceGroup(resourceGroup?: AzureResourceGroup): AzureLoadBalancer[];
		getLoadBalancerBackendPool(loadBalancer?: AzureLoadBalancer): String[];
		getLoadBalancerByResourceGroup(resourceGroup?: AzureResourceGroup): AzureLoadBalancer[];
		getLoadBalancerByResourceGroupAndName(resourceGroup?: AzureResourceGroup, name?: String): AzureLoadBalancer;
		listTags(loadBalancer?: AzureLoadBalancer): String[];
		removeBackend(loadBalancer?: AzureLoadBalancer, backendName?: String): void;
		removeFrontEnd(loadBalancer?: AzureLoadBalancer, frontendName?: String): void;
		removeLoadBalancerRule(loadBalancer?: AzureLoadBalancer, ruleName?: String): void;
		removeNatRule(loadBalancer?: AzureLoadBalancer, natRuleName?: String): void;
		removeProbe(loadBalancer?: AzureLoadBalancer, probeName?: String): void;
		removeTag(loadBalancer?: AzureLoadBalancer, key?: String): void;
	}

	declare const AzureLoadBalancerManager: AzureLoadBalancerManager;

	interface AzureLockManager
	{

		addLock(connection?: AzureConnection, azureId?: String, lockName?: String, lockType?: String): String;
		getLocks(connection?: AzureConnection, azureId?: String): String[];
		removeLock(connection?: AzureConnection, lockId?: String): void;
	}

	declare const AzureLockManager: AzureLockManager;

	declare class AzureNetworkInterface
	{
		acceleratedNetworkEnabled: boolean;
		appliedDnsServers: String;
		attachedToVm: String;
		azureId: String;
		connection: AzureConnection;
		displayName: String;
		dnsName: String;
		dnsServerIps: String;
		domainNameSuffix: String;
		fqdn: String;
		internalIdString: String;
		ipForwardingEnabled: boolean;
		isPrimary: boolean;
		macAddress: String;
		name: String;
		networkSecurityGroup: String;
		primarySubnet: String;
		primaryVirtualNetworkId: String;
		privateAllocationMethod: String;
		privateIpAddress: String;
		provisioningState: String;
		publicIpAddress: String;
		publicIpAddressName: String;
		regionName: String;
		resourceGroup: AzureResourceGroup;
		resourceGroupName: String;
		tags: String;
		type: String;

		constructor();
	}

	interface AzureNetworkInterfaceManager
	{

		addTag(networkInterface?: AzureNetworkInterface, key?: String, value?: String): void;
		attachNetworkSecurityGroup(networkInterface?: AzureNetworkInterface, networkSecurityGroup?: AzureNetworkSecurityGroup): AzureNetworkInterface;
		attachPublicIpAddress(networkInterface?: AzureNetworkInterface, publicIpAddress?: AzurePublicIPAddress): AzureNetworkInterface;
		create(resourceGroup?: AzureResourceGroup, region?: AzureRegion, vNetwork?: AzureVirtualNetwork, subnet?: AzureSubnet, publicIPAddress?: AzurePublicIPAddress, networkInterfaceName?: String, staticPrivateIPAddress?: String): AzureNetworkInterface;
		createWithoutPublicIp(resourceGroup?: AzureResourceGroup, region?: AzureRegion, vNetwork?: AzureVirtualNetwork, subnet?: AzureSubnet, networkInterfaceName?: String, staticPrivateIPAddress?: String): AzureNetworkInterface;
		delete(networkInterface?: AzureNetworkInterface): void;
		detachPublicIpAddress(networkInterface?: AzureNetworkInterface): AzureNetworkInterface;
		getAllSecondaryNetworkInterfaceByVirtualMachine(virtualMachine?: AzureVirtualMachine): AzureNetworkInterface[];
		getAllVirtualNetworkByTag(resourceGroup?: AzureResourceGroup, key?: String, value?: String): AzureNetworkInterface[];
		getNetworkInterfaceByResourceGroup(resourceGroup?: AzureResourceGroup): AzureNetworkInterface[];
		getNetworkInterfaceByResourceGroupAndName(resourceGroup?: AzureResourceGroup, name?: String): AzureNetworkInterface;
		getPrimaryNetworkInterfaceByVirtualMachine(virtualMachine?: AzureVirtualMachine): AzureNetworkInterface;
		getVirtualNetworkById(connection?: AzureConnection, azureId?: String): AzureNetworkInterface;
		listTags(networkInterface?: AzureNetworkInterface): String[];
		removeTag(networkInterface?: AzureNetworkInterface, key?: String): void;
	}

	declare const AzureNetworkInterfaceManager: AzureNetworkInterfaceManager;

	declare class AzureNetworkSecurityGroup
	{
		azureId: String;
		connection: AzureConnection;
		etag: String;
		internalIdString: String;
		name: String;
		provisioningState: String;
		region: String;
		resourceGroup: AzureResourceGroup;
		resourceGuid: String;
		type: String;

		constructor();
	}

	interface AzureNetworkSecurityGroupManager
	{

		addTag(nsg?: AzureNetworkSecurityGroup, key?: String, value?: String): void;
		create(resourceGroup?: AzureResourceGroup, region?: AzureRegion, networkSecurityGroupName?: String): AzureNetworkSecurityGroup;
		delete(networkSecurityGroup?: AzureNetworkSecurityGroup): void;
		getNetworkSecurityGroupByResourceGroup(resourceGroup?: AzureResourceGroup): AzureNetworkSecurityGroup[];
		getNetworkSecurityGroupByResourceGroupAndName(resourceGroup?: AzureResourceGroup, name?: String): AzureNetworkSecurityGroup;
		listTags(nsg?: AzureNetworkSecurityGroup): String[];
		removeTag(nsg?: AzureNetworkSecurityGroup, key?: String): void;
	}

	declare const AzureNetworkSecurityGroupManager: AzureNetworkSecurityGroupManager;

	declare class AzurePublicIPAddress
	{
		availableToUse: boolean;
		azureId: String;
		connection: AzureConnection;
		displayName: String;
		fqdn: String;
		idleTimeoutMinutes: Number;
		internalIdString: String;
		ipAddress: String;
		ipAllocationType: String;
		ipVersion: String;
		leafDomain: String;
		name: String;
		provisioningState: String;
		regionName: String;
		resourceGroup: AzureResourceGroup;
		resourceGroupName: String;
		reverseFqdn: String;
		tags: String;
		type: String;
		zones: String;

		constructor();
	}

	interface AzurePublicIPAddressManager
	{

		addTag(publicIpAddress?: AzurePublicIPAddress, key?: String, value?: String): void;
		attachPublicIpToVm(publicIPAddress?: AzurePublicIPAddress, virtualMachine?: AzureVirtualMachine): void;
		create(resourceGroup?: AzureResourceGroup, region?: AzureRegion, publicIPAddressName?: String): AzurePublicIPAddress;
		delete(publicIPAddress?: AzurePublicIPAddress): void;
		detachPublicIpOfVm(virtualMachine?: AzureVirtualMachine): void;
		getAllAvailablePublicIpAddresses(connection?: AzureConnection): AzurePublicIPAddress[];
		getAvailablePublicIpAddressesByResourceGroup(resourceGroup?: AzureResourceGroup): AzurePublicIPAddress[];
		getPublicIpAddressByResourceGroupAndName(resourceGroup?: AzureResourceGroup, name?: String): AzurePublicIPAddress;
		getPublicIpAddressesByResourceGroup(resourceGroup?: AzureResourceGroup): AzurePublicIPAddress[];
		listTags(publicIPAddress?: AzurePublicIPAddress): String[];
		removeTag(publicIpAddress?: AzurePublicIPAddress, key?: String): void;
	}

	declare const AzurePublicIPAddressManager: AzurePublicIPAddressManager;

	declare class AzureRegion
	{
		azureId: String;
		connection: AzureConnection;
		displayName: String;
		internalIdString: String;
		name: String;
		resourceGroup: AzureResourceGroup;

		constructor();
	}

	interface AzureRegionManager
	{

		getRegionByConnection(connection?: AzureConnection): AzureRegion[];
		getRegionByConnectionAndName(connection?: AzureConnection, regionName?: String): AzureRegion;
	}

	declare const AzureRegionManager: AzureRegionManager;

	declare class AzureResourceGroup
	{
		azureId: String;
		connection: AzureConnection;
		displayName: String;
		internalIdString: String;
		name: String;
		provisiongState: String;
		regionName: String;
		resourceGroup: AzureResourceGroup;

		constructor();
	}

	interface AzureResourceGroupManager
	{

		addTag(resourceGroup?: AzureResourceGroup, key?: String, value?: String): void;
		create(region?: AzureRegion, rgName?: String): AzureResourceGroup;
		delete(resourceGroup?: AzureResourceGroup): void;
		deleteInBackground(resourceGroup?: AzureResourceGroup): void;
		deployArmTemplate(deploymentName?: String, resourceGroup?: AzureResourceGroup, template?: String, parameters?: String, mode?: String): void;
		deployArmTemplateViaUri(deploymentName?: String, resourceGroup?: AzureResourceGroup, templateLink?: String, templateLinkVersion?: String, parametersLink?: String, parametersLinkVersion?: String, mode?: String): void;
		getAllResourceGroupByTag(connection?: AzureConnection, key?: String, value?: String): AzureResourceGroup[];
		getDeploymentState(resourceGroup?: AzureResourceGroup, deploymentName?: String): String;
		getResourceGroupByConnection(connection?: AzureConnection): AzureResourceGroup[];
		getResourceGroupByConnectionAndName(connection?: AzureConnection, name?: String): AzureResourceGroup;
		listTags(resourceGroup?: AzureResourceGroup): String[];
		removeTag(resourceGroup?: AzureResourceGroup, key?: String): void;
	}

	declare const AzureResourceGroupManager: AzureResourceGroupManager;

	declare class AzureRoute
	{
		addressPrefix: String;
		azureId: String;
		connection: AzureConnection;
		internalIdString: String;
		name: String;
		nextHopAddress: String;
		nextHopType: String;
		resourceGroup: AzureResourceGroup;
		routeTable: String;

		constructor();
	}

	declare class AzureRouteTable
	{
		azureId: String;
		connection: AzureConnection;
		internalIdString: String;
		location: String;
		name: String;
		resourceGroup: AzureResourceGroup;
		routes: String;
		subnets: String;
		type: String;

		constructor();
	}

	interface AzureRouteTableManager
	{

		addTag(routeTable?: AzureRouteTable, key?: String, value?: String): void;
		createRoute(resourceGroup?: AzureResourceGroup, routeTable?: AzureRouteTable, routeName?: String, addressPerfix?: String, nextHopType?: String, applianceIpAddress?: String): AzureRoute;
		createRouteTable(resourceGroup?: AzureResourceGroup, region?: AzureRegion, routeTableName?: String): AzureRouteTable;
		deleteRoute(routeTable?: AzureRouteTable, route?: AzureRoute): void;
		deleteRouteTable(routeTable?: AzureRouteTable): void;
		listTags(routeTable?: AzureRouteTable): String[];
		removeTag(routeTable?: AzureRouteTable, key?: String): void;
	}

	declare const AzureRouteTableManager: AzureRouteTableManager;

	declare class AzureSecurityRule
	{
		access: String;
		azureId: String;
		connection: AzureConnection;
		description: String;
		destinationAddressPrefix: String;
		destinationPortRange: String;
		direction: String;
		etag: String;
		internalIdString: String;
		name: String;
		priority: String;
		protocol: String;
		provisioningState: String;
		resourceGroup: AzureResourceGroup;
		sourceAddressPrefix: String;
		sourcePortRange: String;

		constructor();
	}

	declare class AzureSnapshot
	{
		accountType: String;
		azureId: String;
		connection: AzureConnection;
		displayName: String;
		internalIdString: String;
		name: String;
		osType: String;
		region: String;
		resourceGroup: AzureResourceGroup;
		sizeInGB: Number;
		sourceDisk: String;
		state: String;
		type: String;

		constructor();
	}

	interface AzureSnapshotManager
	{

		addTag(snapshot?: AzureSnapshot, key?: String, value?: String): void;
		create(resourceGroup?: AzureResourceGroup, region?: AzureRegion, snapshotName?: String, sourceDisk?: AzureDisk, accountType?: String): AzureSnapshot;
		createVMSnapshot(resourceGroup?: AzureResourceGroup, region?: AzureRegion, virtualMachine?: AzureVirtualMachine, snapshotName?: String, accountType?: String, IsDataDiskSnapshotIncluded?: boolean): AzureSnapshot[];
		delete(snapshot?: AzureSnapshot): void;
		getSnapshotById(connection?: AzureConnection, azureId?: String): AzureSnapshot;
		listTags(snapshot?: AzureSnapshot): String[];
		removeTag(snapshot?: AzureSnapshot, key?: String): void;
	}

	declare const AzureSnapshotManager: AzureSnapshotManager;

	declare class AzureSqlDatabase
	{
		azureId: String;
		collation: String;
		connection: AzureConnection;
		databaseId: String;
		displayName: String;
		elasticPoolName: String;
		internalIdString: String;
		name: String;
		regionName: String;
		resourceGroup: AzureResourceGroup;
		resourceGroupName: String;
		secondaryLocation: String;
		sqlServerName: String;
		status: String;

		constructor();
	}

	declare class AzureSqlServer
	{
		admin: String;
		azureId: String;
		connection: AzureConnection;
		databases: Object[];
		displayName: String;
		elasticPools: Object[];
		fqdn: String;
		internalIdString: String;
		kind: String;
		name: String;
		regionName: String;
		resourceGroup: AzureResourceGroup;
		resourceGroupName: String;
		state: String;
		type: String;
		version: String;

		constructor();
	}

	declare class AzureStorageAccount
	{
		accountType: String;
		azureId: String;
		connection: AzureConnection;
		creationTime: String;
		displayName: String;
		internalIdString: String;
		lastGeoFailoverTime: String;
		name: String;
		primaryLocation: String;
		provisioningState: String;
		region: String;
		resourceGroup: AzureResourceGroup;
		secondaryLocation: String;
		statusOfPrimary: String;
		statusOfSecondary: String;
		target: AzureStorageAccount;
		type: String;

		constructor();
	}

	interface AzureStorageManager
	{

		addTag(storageAccount?: AzureStorageAccount, key?: String, value?: String): void;
		allowAllAccess(storageAccount?: AzureStorageAccount): void;
		checkNameAvailability(connection?: AzureConnection, name?: String): boolean;
		create(resourceGroup?: AzureResourceGroup, region?: AzureRegion, storageAccountName?: String, propsJson?: String): AzureStorageAccount;
		delete(storageAccount?: AzureStorageAccount): void;
		deleteVhdByUri(resourceGroup?: AzureResourceGroup, vhdUri?: String): void;
		getById(connection?: AzureConnection, azureId?: String): AzureStorageAccount;
		listAllStorageAccount(connection?: AzureConnection): AzureStorageAccount[];
		listStorageAccountByResourceGroup(resourceGroup?: AzureResourceGroup): AzureStorageAccount[];
		listTags(storageAccount?: AzureStorageAccount): String[];
		removeTag(storageAccount?: AzureStorageAccount, key?: String): void;
		restrictAccessByIPRange(storageAccount?: AzureStorageAccount, ipAddressCidr?: String, restrict?: boolean): void;
		restrictHttpsAndHttpTraffice(storageAccount?: AzureStorageAccount, httpsOnly?: boolean): void;
		toggleAccessByIPAddress(storageAccount?: AzureStorageAccount, ipAddress?: String, restrict?: boolean): void;
		toggleAccessBySubnet(storageAccount?: AzureStorageAccount, vNetwork?: AzureVirtualNetwork, subnet?: AzureSubnet, restrict?: boolean): void;
		toggleAccessWithinAzureServices(storageAccount?: AzureStorageAccount, restrict?: boolean): void;
		toggleBlobEncryption(storageAccount?: AzureStorageAccount, enable?: boolean): void;
		toggleFileEncryption(storageAccount?: AzureStorageAccount, enable?: boolean): void;
		toggleReadAccessToLoggingFromAnyNetwork(storageAccount?: AzureStorageAccount, restrict?: boolean): void;
		toggleReadAccessToMetricsFromAnyNetwork(storageAccount?: AzureStorageAccount, restrict?: boolean): void;
	}

	declare const AzureStorageManager: AzureStorageManager;

	declare class AzureSubnet
	{
		addressPrefix: String;
		azureId: String;
		connection: AzureConnection;
		displayName: String;
		internalIdString: String;
		name: String;
		resourceGroup: AzureResourceGroup;

		constructor();
	}

	interface AzureSubnetManager
	{

		create(virtualNetwork?: AzureVirtualNetwork, subnetName?: String, addressPrefix?: String): AzureSubnet;
		delete(virtualNetwork?: AzureVirtualNetwork, subnet?: AzureSubnet): void;
		getSubnetByVirtualNetwork(virtualNetwork?: AzureVirtualNetwork): AzureSubnet[];
		getSubnetByVirtualNetworkAndName(subnetName?: String, virtualNetwork?: AzureVirtualNetwork): AzureSubnet;
	}

	declare const AzureSubnetManager: AzureSubnetManager;

	declare class AzureVirtualMachine
	{
		azureId: String;
		connection: AzureConnection;
		displayName: String;
		internalIdString: String;
		licenseType: String;
		managedDiskEnabled: boolean;
		name: String;
		operatingSystem: String;
		osDiskUri: String;
		powerState: String;
		primaryPrivateIP: String;
		provisioningState: String;
		publicIpAddress: String;
		region: String;
		resourceGroup: AzureResourceGroup;
		resourceGroupName: String;
		subscriptionId: String;
		type: String;
		virtualMachineMaxDiskCount: Number;
		virtualMachineResourceDiskSizeMb: Number;
		virtualMachineSize: String;

		constructor();
	}

	declare class AzureVirtualMachineCustomImage
	{
		azureId: String;
		connection: AzureConnection;
		internalIdString: String;
		name: String;
		osType: String;
		region: String;
		resourceGroup: AzureResourceGroup;
		sourceVirtualMachine: String;

		constructor();
	}

	declare class AzureVirtualMachineImage
	{
		azureId: String;
		connection: AzureConnection;
		displayName: String;
		internalIdString: String;
		name: String;
		offer: String;
		operatingSystem: String;
		product: String;
		publisher: String;
		region: String;
		resourceGroup: AzureResourceGroup;
		sku: String;
		version: String;

		constructor();
	}

	declare class AzureVirtualMachineImageOffer
	{
		azureId: String;
		connection: AzureConnection;
		internalIdString: String;
		name: String;
		region: String;
		resourceGroup: AzureResourceGroup;

		constructor();
	}

	declare class AzureVirtualMachineImagePublisher
	{
		azureId: String;
		connection: AzureConnection;
		internalIdString: String;
		name: String;
		region: String;
		resourceGroup: AzureResourceGroup;

		constructor();
	}

	declare class AzureVirtualMachineImageSku
	{
		azureId: String;
		connection: AzureConnection;
		internalIdString: String;
		name: String;
		region: String;
		resourceGroup: AzureResourceGroup;

		constructor();
	}

	interface AzureVirtualMachineManager
	{

		addTag(virtualMachine?: AzureVirtualMachine, key?: String, value?: String): void;
		attachBootDiagnosticStorage(virtualMachine?: AzureVirtualMachine, storageAccount?: AzureStorageAccount): void;
		attachExistingManagedDisk(virtualMachine?: AzureVirtualMachine, disk?: AzureDisk): void;
		attachExistingSecondaryNetworkInterface(virtualMachine?: AzureVirtualMachine, networkInterface?: AzureNetworkInterface): AzureVirtualMachine;
		attachNewManagedDisk(virtualMachine?: AzureVirtualMachine, diskName?: String, diskSizeInGB?: Number, lun?: Number, cachingType?: String, skuType?: String): void;
		attachUnmanagedDiskWithExistingVhd(virtualMachine?: AzureVirtualMachine, diskName?: String, lun?: Number, cachingType?: String, storageAccountName?: String, containerName?: String, vhdName?: String): void;
		attachUnmanagedDiskWithNewVhd(virtualMachine?: AzureVirtualMachine, diskName?: String, diskSizeInGB?: Number, lun?: Number, cachingType?: String, existingStorageAccountName?: String, existingContainerName?: String, vhdName?: String): void;
		capture(virtualMachine?: AzureVirtualMachine, containerName?: String, vhdPrefix?: String, overwriteVhd?: boolean): String;
		cloneFromUnmanagedDisk(resourceGroup?: AzureResourceGroup, region?: AzureRegion, vmName?: String, vmSize?: AzureVirtualMachineSize, networkInterface?: AzureNetworkInterface, availabilitySet?: AzureAvailabilitySet, osType?: String, diskVhdUri?: String, userName?: String, passKey?: String): AzureVirtualMachine;
		convertToManaged(virtualMachine?: AzureVirtualMachine): void;
		create(resourceGroup?: AzureResourceGroup, region?: AzureRegion, vmName?: String, storageAccount?: AzureStorageAccount, networkInterface?: AzureNetworkInterface, isManagedDiskVM?: boolean, userName?: String, passKey?: String, vmSize?: AzureVirtualMachineSize, vmImage?: AzureVirtualMachineImage, availabilitySet?: AzureAvailabilitySet, osDiskSkuType?: String): AzureVirtualMachine;
		createCustomImage(virtualMachine?: AzureVirtualMachine, imageName?: String): AzureVirtualMachineCustomImage;
		createCustomImageFromVhd(virtualMachine?: AzureVirtualMachine, imageName?: String, includeDataDisks?: boolean, isGeneralized?: boolean): AzureVirtualMachineCustomImage;
		deallocate(virtualMachine?: AzureVirtualMachine): void;
		deallocateAsync(virtualMachine?: AzureVirtualMachine): void;
		delete(virtualMachine?: AzureVirtualMachine): void;
		deleteAsync(virtualMachine?: AzureVirtualMachine): void;
		deleteCustomImage(vmCustomImage?: AzureVirtualMachineCustomImage): void;
		deployFromImage(resourceGroup?: AzureResourceGroup, region?: AzureRegion, vmName?: String, userName?: String, passKey?: String, networkInterface?: AzureNetworkInterface, availabilitySet?: AzureAvailabilitySet, vmCustomImage?: AzureVirtualMachineCustomImage, vmSize?: AzureVirtualMachineSize): AzureVirtualMachine;
		deployFromManagedDisk(resourceGroup?: AzureResourceGroup, region?: AzureRegion, vmName?: String, vmSize?: AzureVirtualMachineSize, networkInterface?: AzureNetworkInterface, availabilitySet?: AzureAvailabilitySet, disk?: AzureDisk): AzureVirtualMachine;
		deployFromUnmanagedDisk(resourceGroup?: AzureResourceGroup, region?: AzureRegion, vmName?: String, vmSize?: AzureVirtualMachineSize, networkInterface?: AzureNetworkInterface, availabilitySet?: AzureAvailabilitySet, osType?: String, diskvHdURI?: String): AzureVirtualMachine;
		deprovisionAgentInLinuxVM(host?: String, port?: Number, userName?: String, password?: String): void;
		detachBootDiagnosticStorage(virtualMachine?: AzureVirtualMachine): void;
		detachDataDisk(virtualMachine?: AzureVirtualMachine, lun?: Number): void;
		generalize(virtualMachine?: AzureVirtualMachine): void;
		generalizeAsync(virtualMachine?: AzureVirtualMachine): void;
		getAllVirtualMachineByTag(resourceGroup?: AzureResourceGroup, key?: String, value?: String): AzureVirtualMachine[];
		getAvailabilitySetOfVm(virtualMachine?: AzureVirtualMachine): AzureAvailabilitySet;
		getAzureVirtualMachineImage(region?: AzureRegion, publisher?: String, offer?: String, sku?: String, version?: String): AzureVirtualMachineImage;
		getAzureVMSizeByRegionAndSizeName(regionName?: String, vmSizeName?: String, connection?: AzureConnection): AzureVirtualMachineSize;
		getCustomImageByName(resourceGroup?: AzureResourceGroup, imageName?: String): AzureVirtualMachineCustomImage;
		getPublicIpAddress(virtualMachine?: AzureVirtualMachine): AzurePublicIPAddress;
		getVirtualMachineById(connection?: AzureConnection, azureId?: String): AzureVirtualMachine;
		getVirtualMachineByResourceGroupAndVmName(resourceGroup?: AzureResourceGroup, vmName?: String): AzureVirtualMachine;
		getVirtualMachineSizesByRegion(region?: AzureRegion): AzureVirtualMachineSize[];
		getVmDiskDiskForData(virtualMachine?: AzureVirtualMachine): String[];
		getVmDiskForOs(virtualMachine?: AzureVirtualMachine): String;
		getVmVhdUriForData(virtualMachine?: AzureVirtualMachine): String[];
		getVmVhdUriForOs(virtualMachine?: AzureVirtualMachine): String;
		listTags(virtualMachine?: AzureVirtualMachine): String[];
		powerOff(virtualMachine?: AzureVirtualMachine): void;
		powerOffAsync(virtualMachine?: AzureVirtualMachine): void;
		removeTag(virtualMachine?: AzureVirtualMachine, key?: String): void;
		restart(virtualMachine?: AzureVirtualMachine): void;
		restartAsync(virtualMachine?: AzureVirtualMachine): void;
		start(virtualMachine?: AzureVirtualMachine): void;
		startAsync(virtualMachine?: AzureVirtualMachine): void;
	}

	declare const AzureVirtualMachineManager: AzureVirtualMachineManager;

	declare class AzureVirtualMachineSize
	{
		azureId: String;
		connection: AzureConnection;
		internalIdString: String;
		maxDataDiskCount: Number;
		memoryInMB: Number;
		name: String;
		numberOfCores: Number;
		resourceDiskSizeInMB: Number;
		resourceGroup: AzureResourceGroup;

		constructor();
	}

	declare class AzureVirtualNetwork
	{
		addressSpace: String;
		azureId: String;
		connection: AzureConnection;
		displayName: String;
		etag: String;
		internalIdString: String;
		name: String;
		provisioningState: String;
		region: String;
		resourceGroup: AzureResourceGroup;
		resourceGuid: String;
		type: String;

		constructor();
	}

	interface AzureVirtualNetworkManager
	{

		addTag(virtualNetwork?: AzureVirtualNetwork, key?: String, value?: String): void;
		create(resourceGroup?: AzureResourceGroup, region?: AzureRegion, vnetwork?: String, addressSpace?: String, subnetName?: String, subnetAddressSpace?: String): AzureVirtualNetwork;
		delete(virtualNetwork?: AzureVirtualNetwork): void;
		getAllVirtualNetworkByTag(resourceGroup?: AzureResourceGroup, key?: String, value?: String): AzureVirtualNetwork[];
		getVirtualNetworkById(connection?: AzureConnection, azureId?: String): AzureVirtualNetwork;
		getVirtualNetworkByResourceGroup(resourceGroup?: AzureResourceGroup): AzureVirtualNetwork[];
		getVirtualNetworkByResourceGroupAndName(resourceGroup?: AzureResourceGroup, name?: String): AzureVirtualNetwork;
		listTags(virtualNetwork?: AzureVirtualNetwork): String[];
		removeTag(virtualNetwork?: AzureVirtualNetwork, key?: String): void;
	}

	declare const AzureVirtualNetworkManager: AzureVirtualNetworkManager;

	declare class AzureWebApp
	{
		appServerPlanId: String;
		azureId: String;
		clientAffinityEnabled: boolean;
		clientCertEnabled: boolean;
		connection: AzureConnection;
		defaultHostName: String;
		displayName: String;
		internalIdString: String;
		name: String;
		osName: String;
		publishingProfile: String;
		region: String;
		repositorySiteName: String;
		resourceGroup: AzureResourceGroup;
		state: String;
		type: String;

		constructor();
	}

	interface AzureWebAppManager
	{

		delete(webApp?: AzureWebApp): void;
	}

	declare const AzureWebAppManager: AzureWebAppManager;

    
    // Finder objects.
declare namespace Azure {
	interface _folder_AvailabilitySets
	{
		name: any;

		availabilitysets(): AvailabilitySet;
	}

	interface _folder_AvailabilitySetsConstructor {
		new(value?:any): _folder_AvailabilitySets;
		readonly prototype: _folder_AvailabilitySets;
	}

	const _folder_AvailabilitySets: _folder_AvailabilitySetsConstructor;

	interface _folder_CustomImages
	{
		name: any;

		virtualmachinecustomimages(): VirtualMachineCustomImage;
	}

	interface _folder_CustomImagesConstructor {
		new(value?:any): _folder_CustomImages;
		readonly prototype: _folder_CustomImages;
	}

	const _folder_CustomImages: _folder_CustomImagesConstructor;

	interface _folder_Deployments
	{
		name: any;

		Deployments(): Deployment;
	}

	interface _folder_DeploymentsConstructor {
		new(value?:any): _folder_Deployments;
		readonly prototype: _folder_Deployments;
	}

	const _folder_Deployments: _folder_DeploymentsConstructor;

	interface _folder_Disks
	{
		name: any;

		Disks(): Disk;
	}

	interface _folder_DisksConstructor {
		new(value?:any): _folder_Disks;
		readonly prototype: _folder_Disks;
	}

	const _folder_Disks: _folder_DisksConstructor;

	interface _folder_DnsZones
	{
		name: any;

		DnsZones(): DnsZone;
	}

	interface _folder_DnsZonesConstructor {
		new(value?:any): _folder_DnsZones;
		readonly prototype: _folder_DnsZones;
	}

	const _folder_DnsZones: _folder_DnsZonesConstructor;

	interface _folder_LoadBalancers
	{
		name: any;

		loadbalancers(): LoadBalancer;
	}

	interface _folder_LoadBalancersConstructor {
		new(value?:any): _folder_LoadBalancers;
		readonly prototype: _folder_LoadBalancers;
	}

	const _folder_LoadBalancers: _folder_LoadBalancersConstructor;

	interface _folder_NetworkInterfaces
	{
		name: any;

		networkinterfaces(): NetworkInterface;
	}

	interface _folder_NetworkInterfacesConstructor {
		new(value?:any): _folder_NetworkInterfaces;
		readonly prototype: _folder_NetworkInterfaces;
	}

	const _folder_NetworkInterfaces: _folder_NetworkInterfacesConstructor;

	interface _folder_NetworkSecurityGroups
	{
		name: any;

		networkSecurityGroups(): NetworkSecurityGroup;
	}

	interface _folder_NetworkSecurityGroupsConstructor {
		new(value?:any): _folder_NetworkSecurityGroups;
		readonly prototype: _folder_NetworkSecurityGroups;
	}

	const _folder_NetworkSecurityGroups: _folder_NetworkSecurityGroupsConstructor;

	interface _folder_PublicIPAddresses
	{
		name: any;

		publicIPAddresses(): PublicIPAddress;
	}

	interface _folder_PublicIPAddressesConstructor {
		new(value?:any): _folder_PublicIPAddresses;
		readonly prototype: _folder_PublicIPAddresses;
	}

	const _folder_PublicIPAddresses: _folder_PublicIPAddressesConstructor;

	interface _folder_RouteTables
	{
		name: any;

		routetables(): RouteTable;
	}

	interface _folder_RouteTablesConstructor {
		new(value?:any): _folder_RouteTables;
		readonly prototype: _folder_RouteTables;
	}

	const _folder_RouteTables: _folder_RouteTablesConstructor;

	interface _folder_Snapshots
	{
		name: any;

		snapshots(): Snapshot;
	}

	interface _folder_SnapshotsConstructor {
		new(value?:any): _folder_Snapshots;
		readonly prototype: _folder_Snapshots;
	}

	const _folder_Snapshots: _folder_SnapshotsConstructor;

	interface _folder_SqlServer
	{
		name: any;

		SqlServers(): SqlServer;
	}

	interface _folder_SqlServerConstructor {
		new(value?:any): _folder_SqlServer;
		readonly prototype: _folder_SqlServer;
	}

	const _folder_SqlServer: _folder_SqlServerConstructor;

	interface _folder_StorageAccounts
	{
		name: any;

		storageaccounts(): StorageAccount;
	}

	interface _folder_StorageAccountsConstructor {
		new(value?:any): _folder_StorageAccounts;
		readonly prototype: _folder_StorageAccounts;
	}

	const _folder_StorageAccounts: _folder_StorageAccountsConstructor;

	interface _folder_VirtualMachineImages
	{
		name: any;

		virtualmachineimagepublishers(): VirtualMachineImagePublisher;
	}

	interface _folder_VirtualMachineImagesConstructor {
		new(value?:any): _folder_VirtualMachineImages;
		readonly prototype: _folder_VirtualMachineImages;
	}

	const _folder_VirtualMachineImages: _folder_VirtualMachineImagesConstructor;

	interface _folder_VirtualMachines
	{
		name: any;

		virtualmachinesres(): VirtualMachine;
	}

	interface _folder_VirtualMachinesConstructor {
		new(value?:any): _folder_VirtualMachines;
		readonly prototype: _folder_VirtualMachines;
	}

	const _folder_VirtualMachines: _folder_VirtualMachinesConstructor;

	interface _folder_VirtualMachineSizes
	{
		name: any;

		virtualmachinesizes(): VirtualMachineSize;
	}

	interface _folder_VirtualMachineSizesConstructor {
		new(value?:any): _folder_VirtualMachineSizes;
		readonly prototype: _folder_VirtualMachineSizes;
	}

	const _folder_VirtualMachineSizes: _folder_VirtualMachineSizesConstructor;

	interface _folder_VirtualNetworks
	{
		name: any;

		virtualnetworks(): VirtualNetwork;
	}

	interface _folder_VirtualNetworksConstructor {
		new(value?:any): _folder_VirtualNetworks;
		readonly prototype: _folder_VirtualNetworks;
	}

	const _folder_VirtualNetworks: _folder_VirtualNetworksConstructor;

	interface _folder_WebApps
	{
		name: any;

		WebApps(): WebApp;
	}

	interface _folder_WebAppsConstructor {
		new(value?:any): _folder_WebApps;
		readonly prototype: _folder_WebApps;
	}

	const _folder_WebApps: _folder_WebAppsConstructor;

	interface _ROOT
	{

		connections(): Connection;
	}

	interface _ROOTConstructor {
		new(value?:any): _ROOT;
		readonly prototype: _ROOT;
	}

	const _ROOT: _ROOTConstructor;

	interface AvailabilitySet extends AzureAvailabilitySet
	{
		azureId: any;
		displayName: any;
		id: any;
		internalIdString: any;
		name: any;
		platformFaultDomainCount: any;
		platformUpdateDomainCount: any;
		region: any;
		type: any;

	}

	interface AvailabilitySetConstructor {
		new(value?:any): AvailabilitySet;
		readonly prototype: AvailabilitySet;
	}

	const AvailabilitySet: AvailabilitySetConstructor;

	interface Connection extends AzureConnection
	{
		azureEnvironment: any;
		clientId: any;
		customProperties: any;
		displayName: any;
		loginUrl: any;
		name: any;
		proxyHost: any;
		proxyPort: any;
		proxyUsername: any;
		serviceUri: any;
		storageUri: any;
		subscriptionId: any;
		tenantId: any;

		regions(): Region;
		resourcegroups(): ResourceGroup;
	}

	interface ConnectionConstructor {
		new(value?:any): Connection;
		readonly prototype: Connection;
	}

	const Connection: ConnectionConstructor;

	interface Deployment extends AzureDeployment
	{
		azureId: any;
		internalIdString: any;
		name: any;

	}

	interface DeploymentConstructor {
		new(value?:any): Deployment;
		readonly prototype: Deployment;
	}

	const Deployment: DeploymentConstructor;

	interface Disk extends AzureDisk
	{
		attachedToVirtualMachine: any;
		azureId: any;
		internalIdString: any;
		name: any;
		osType: any;
		region: any;
		sizeInGB: any;
		timeCreated: any;
		type: any;

	}

	interface DiskConstructor {
		new(value?:any): Disk;
		readonly prototype: Disk;
	}

	const Disk: DiskConstructor;

	interface DnsZone extends AzureDnsZone
	{
		azureId: any;
		internalIdString: any;
		name: any;
		nameServers: any;
		region: any;
		type: any;

	}

	interface DnsZoneConstructor {
		new(value?:any): DnsZone;
		readonly prototype: DnsZone;
	}

	const DnsZone: DnsZoneConstructor;

	interface LoadBalancer extends AzureLoadBalancer
	{
		azureId: any;
		etag: any;
		internalIdString: any;
		name: any;
		provisioningState: any;
		publicIpAddress: any;
		region: any;
		resourceGuid: any;
		type: any;

	}

	interface LoadBalancerConstructor {
		new(value?:any): LoadBalancer;
		readonly prototype: LoadBalancer;
	}

	const LoadBalancer: LoadBalancerConstructor;

	interface NetworkInterface extends AzureNetworkInterface
	{
		acceleratedNetworkEnabled: any;
		appliedDnsServers: any;
		attachedToVm: any;
		azureId: any;
		displayName: any;
		dnsName: any;
		dnsServerIps: any;
		domainNameSuffix: any;
		fqdn: any;
		internalIdString: any;
		ipForwardingEnabled: any;
		isPrimary: any;
		macAddress: any;
		name: any;
		networkSecurityGroup: any;
		primarySubnet: any;
		primaryVirtualNetworkId: any;
		privateAllocationMethod: any;
		privateIpAddress: any;
		provisioningState: any;
		publicIpAddress: any;
		publicIpAddressName: any;
		regionName: any;
		resourceGroupName: any;
		tags: any;
		type: any;

	}

	interface NetworkInterfaceConstructor {
		new(value?:any): NetworkInterface;
		readonly prototype: NetworkInterface;
	}

	const NetworkInterface: NetworkInterfaceConstructor;

	interface NetworkSecurityGroup extends AzureNetworkSecurityGroup
	{
		azureId: any;
		etag: any;
		internalIdString: any;
		name: any;
		provisioningState: any;
		region: any;
		resourceGuid: any;
		type: any;

		SecurityRules(): SecurityRule;
	}

	interface NetworkSecurityGroupConstructor {
		new(value?:any): NetworkSecurityGroup;
		readonly prototype: NetworkSecurityGroup;
	}

	const NetworkSecurityGroup: NetworkSecurityGroupConstructor;

	interface PublicIPAddress extends AzurePublicIPAddress
	{
		availableToUse: any;
		azureId: any;
		displayName: any;
		fqdn: any;
		idleTimeoutMinutes: any;
		internalIdString: any;
		ipAddress: any;
		ipAllocationType: any;
		ipVersion: any;
		leafDomain: any;
		name: any;
		provisioningState: any;
		regionName: any;
		resourceGroupName: any;
		reverseFqdn: any;
		tags: any;
		type: any;
		zones: any;

	}

	interface PublicIPAddressConstructor {
		new(value?:any): PublicIPAddress;
		readonly prototype: PublicIPAddress;
	}

	const PublicIPAddress: PublicIPAddressConstructor;

	interface Region extends AzureRegion
	{
		azureId: any;
		displayName: any;
		internalIdString: any;
		name: any;

		_folder_rel_virtualmachineimagepublishers(): _folder_VirtualMachineImages;
		_folder_rel_virtualmachinesizes(): _folder_VirtualMachineSizes;
	}

	interface RegionConstructor {
		new(value?:any): Region;
		readonly prototype: Region;
	}

	const Region: RegionConstructor;

	interface ResourceGroup extends AzureResourceGroup
	{
		azureId: any;
		displayName: any;
		internalIdString: any;
		name: any;
		provisiongState: any;
		regionName: any;

		_folder_rel_availabilitysets(): _folder_AvailabilitySets;
		_folder_rel_Deployments(): _folder_Deployments;
		_folder_rel_Disks(): _folder_Disks;
		_folder_rel_DnsZones(): _folder_DnsZones;
		_folder_rel_loadbalancers(): _folder_LoadBalancers;
		_folder_rel_networkinterfaces(): _folder_NetworkInterfaces;
		_folder_rel_networkSecurityGroups(): _folder_NetworkSecurityGroups;
		_folder_rel_publicIPAddresses(): _folder_PublicIPAddresses;
		_folder_rel_routetables(): _folder_RouteTables;
		_folder_rel_snapshots(): _folder_Snapshots;
		_folder_rel_SqlServers(): _folder_SqlServer;
		_folder_rel_storageaccounts(): _folder_StorageAccounts;
		_folder_rel_virtualmachinecustomimages(): _folder_CustomImages;
		_folder_rel_virtualmachinesres(): _folder_VirtualMachines;
		_folder_rel_virtualnetworks(): _folder_VirtualNetworks;
		_folder_rel_WebApps(): _folder_WebApps;
	}

	interface ResourceGroupConstructor {
		new(value?:any): ResourceGroup;
		readonly prototype: ResourceGroup;
	}

	const ResourceGroup: ResourceGroupConstructor;

	interface Route extends AzureRoute
	{
		addressPrefix: any;
		azureId: any;
		internalIdString: any;
		name: any;
		nextHopAddress: any;
		nextHopType: any;
		routeTable: any;

	}

	interface RouteConstructor {
		new(value?:any): Route;
		readonly prototype: Route;
	}

	const Route: RouteConstructor;

	interface RouteTable extends AzureRouteTable
	{
		azureId: any;
		internalIdString: any;
		location: any;
		name: any;
		routes: any;
		subnets: any;
		type: any;

		routes(): Route;
	}

	interface RouteTableConstructor {
		new(value?:any): RouteTable;
		readonly prototype: RouteTable;
	}

	const RouteTable: RouteTableConstructor;

	interface SecurityRule extends AzureSecurityRule
	{
		access: any;
		azureId: any;
		description: any;
		destinationAddressPrefix: any;
		destinationPortRange: any;
		direction: any;
		etag: any;
		internalIdString: any;
		name: any;
		priority: any;
		protocol: any;
		provisioningState: any;
		sourceAddressPrefix: any;
		sourcePortRange: any;

	}

	interface SecurityRuleConstructor {
		new(value?:any): SecurityRule;
		readonly prototype: SecurityRule;
	}

	const SecurityRule: SecurityRuleConstructor;

	interface Snapshot extends AzureSnapshot
	{
		accountType: any;
		azureId: any;
		displayName: any;
		internalIdString: any;
		name: any;
		osType: any;
		region: any;
		sizeInGB: any;
		sourceDisk: any;
		state: any;
		type: any;

	}

	interface SnapshotConstructor {
		new(value?:any): Snapshot;
		readonly prototype: Snapshot;
	}

	const Snapshot: SnapshotConstructor;

	interface SqlDatabase extends AzureSqlDatabase
	{
		azureId: any;
		collation: any;
		databaseId: any;
		displayName: any;
		elasticPoolName: any;
		internalIdString: any;
		name: any;
		regionName: any;
		resourceGroupName: any;
		secondaryLocation: any;
		sqlServerName: any;
		status: any;

	}

	interface SqlDatabaseConstructor {
		new(value?:any): SqlDatabase;
		readonly prototype: SqlDatabase;
	}

	const SqlDatabase: SqlDatabaseConstructor;

	interface SqlServer extends AzureSqlServer
	{
		admin: any;
		azureId: any;
		displayName: any;
		fqdn: any;
		internalIdString: any;
		kind: any;
		name: any;
		regionName: any;
		resourceGroupName: any;
		state: any;
		type: any;
		version: any;

		SqlDatabase(): SqlDatabase;
	}

	interface SqlServerConstructor {
		new(value?:any): SqlServer;
		readonly prototype: SqlServer;
	}

	const SqlServer: SqlServerConstructor;

	interface StorageAccount extends AzureStorageAccount
	{
		accountType: any;
		azureId: any;
		creationTime: any;
		displayName: any;
		internalIdString: any;
		lastGeoFailoverTime: any;
		name: any;
		primaryLocation: any;
		provisioningState: any;
		region: any;
		secondaryLocation: any;
		statusOfPrimary: any;
		statusOfSecondary: any;
		type: any;

	}

	interface StorageAccountConstructor {
		new(value?:any): StorageAccount;
		readonly prototype: StorageAccount;
	}

	const StorageAccount: StorageAccountConstructor;

	interface Subnet extends AzureSubnet
	{
		addressPrefix: any;
		azureId: any;
		displayName: any;
		internalIdString: any;
		name: any;

	}

	interface SubnetConstructor {
		new(value?:any): Subnet;
		readonly prototype: Subnet;
	}

	const Subnet: SubnetConstructor;

	interface VirtualMachine extends AzureVirtualMachine
	{
		azureId: any;
		displayName: any;
		internalIdString: any;
		licenseType: any;
		managedDiskEnabled: any;
		name: any;
		operatingSystem: any;
		osDiskUri: any;
		powerState: any;
		primaryPrivateIP: any;
		provisioningState: any;
		publicIpAddress: any;
		region: any;
		resourceGroupName: any;
		subscriptionId: any;
		type: any;
		virtualMachineMaxDiskCount: any;
		virtualMachineResourceDiskSizeMb: any;
		virtualMachineSize: any;

	}

	interface VirtualMachineConstructor {
		new(value?:any): VirtualMachine;
		readonly prototype: VirtualMachine;
	}

	const VirtualMachine: VirtualMachineConstructor;

	interface VirtualMachineCustomImage extends AzureVirtualMachineCustomImage
	{
		azureId: any;
		internalIdString: any;
		name: any;
		osType: any;
		region: any;
		sourceVirtualMachine: any;

	}

	interface VirtualMachineCustomImageConstructor {
		new(value?:any): VirtualMachineCustomImage;
		readonly prototype: VirtualMachineCustomImage;
	}

	const VirtualMachineCustomImage: VirtualMachineCustomImageConstructor;

	interface VirtualMachineImage extends AzureVirtualMachineImage
	{
		azureId: any;
		displayName: any;
		internalIdString: any;
		name: any;
		offer: any;
		operatingSystem: any;
		product: any;
		publisher: any;
		region: any;
		sku: any;
		version: any;

	}

	interface VirtualMachineImageConstructor {
		new(value?:any): VirtualMachineImage;
		readonly prototype: VirtualMachineImage;
	}

	const VirtualMachineImage: VirtualMachineImageConstructor;

	interface VirtualMachineImageOffer extends AzureVirtualMachineImageOffer
	{
		azureId: any;
		internalIdString: any;
		name: any;
		region: any;

		virtualmachineimageskus(): VirtualMachineImageSku;
	}

	interface VirtualMachineImageOfferConstructor {
		new(value?:any): VirtualMachineImageOffer;
		readonly prototype: VirtualMachineImageOffer;
	}

	const VirtualMachineImageOffer: VirtualMachineImageOfferConstructor;

	interface VirtualMachineImagePublisher extends AzureVirtualMachineImagePublisher
	{
		azureId: any;
		internalIdString: any;
		name: any;
		region: any;

		virtualmachineimageoffers(): VirtualMachineImageOffer;
	}

	interface VirtualMachineImagePublisherConstructor {
		new(value?:any): VirtualMachineImagePublisher;
		readonly prototype: VirtualMachineImagePublisher;
	}

	const VirtualMachineImagePublisher: VirtualMachineImagePublisherConstructor;

	interface VirtualMachineImageSku extends AzureVirtualMachineImageSku
	{
		azureId: any;
		internalIdString: any;
		name: any;
		region: any;

		virtualmachineimages(): VirtualMachineImage;
	}

	interface VirtualMachineImageSkuConstructor {
		new(value?:any): VirtualMachineImageSku;
		readonly prototype: VirtualMachineImageSku;
	}

	const VirtualMachineImageSku: VirtualMachineImageSkuConstructor;

	interface VirtualMachineSize extends AzureVirtualMachineSize
	{
		azureId: any;
		internalIdString: any;
		maxDataDiskCount: any;
		memoryInMB: any;
		name: any;
		numberOfCores: any;
		resourceDiskSizeInMB: any;

	}

	interface VirtualMachineSizeConstructor {
		new(value?:any): VirtualMachineSize;
		readonly prototype: VirtualMachineSize;
	}

	const VirtualMachineSize: VirtualMachineSizeConstructor;

	interface VirtualNetwork extends AzureVirtualNetwork
	{
		addressSpace: any;
		azureId: any;
		displayName: any;
		etag: any;
		internalIdString: any;
		name: any;
		provisioningState: any;
		region: any;
		resourceGuid: any;
		type: any;

		subnets(): Subnet;
	}

	interface VirtualNetworkConstructor {
		new(value?:any): VirtualNetwork;
		readonly prototype: VirtualNetwork;
	}

	const VirtualNetwork: VirtualNetworkConstructor;

	interface WebApp extends AzureWebApp
	{
		appServerPlanId: any;
		azureId: any;
		clientAffinityEnabled: any;
		clientCertEnabled: any;
		defaultHostName: any;
		displayName: any;
		internalIdString: any;
		name: any;
		osName: any;
		publishingProfile: any;
		region: any;
		repositorySiteName: any;
		state: any;
		type: any;

	}

	interface WebAppConstructor {
		new(value?:any): WebApp;
		readonly prototype: WebApp;
	}

	const WebApp: WebAppConstructor;

    }    
