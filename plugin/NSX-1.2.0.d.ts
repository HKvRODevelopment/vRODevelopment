/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
declare module com.vmware.o11n.plugin.sdk.spring
{
	export interface MultipartId
	{

	}


}
declare module com.vmware.o11n.plugins.nsx.model
{
	export interface StatefulQualifierDto
	{

	}


}
declare module com.vmware.vshield.vsm.applianceeventmanager.model
{
	export interface VsmEvent
	{

	}


}
declare module com.vmware.vshield.vsm.auditing.dto
{
	export interface AuditLogPage
	{

	}


}
declare module com.vmware.vshield.vsm.eventing.dto
{
	export interface SystemEventPage
	{

	}


}
declare module com.vmware.vshield.vsm.si.dto
{
	export interface ServiceInstanceResponse
	{

	}


}
declare module com.vmware.vshield.vsm.si.dto
{
	export interface ServiceProfileResponse
	{

	}


}
declare module com.vmware.vshield.vsm.task.dao
{
	export interface JobInstancePage
	{

	}


}
declare module com.vmware.vshield.vsm.vdn.dto
{
	export interface VirtualWireCreateSpecEx
	{

	}


}
	interface Double
	{

	}

	declare const Double: Double;

declare module java.math
{
	export interface BigInteger
	{

	}


}
declare module java.sql
{
	export interface Timestamp
	{

	}


}
declare module java.util
{
	export interface Collection
	{

	}


}
declare module java.util
{
	export interface LinkedHashSet
	{

	}


}
declare module java.util
{
	export interface List
	{

	}


}
declare module java.util
{
	export interface Map
	{

	}


}
declare module java.util
{
	export interface Set
	{

	}


}
	interface long
	{

	}

	declare const long: long;

	interface NSXAccessControlEntryDto
	{
		readonly resources: java.util.List;
		readonly role: String;

	}

	interface NSXAccessControlEntryDtoConstructor {
		new(value?:any): NSXAccessControlEntryDto;
		readonly prototype: NSXAccessControlEntryDto;
	}

	declare const NSXAccessControlEntryDto: NSXAccessControlEntryDtoConstructor;

	interface NSXAccountController
	{

		getAccountV2(connection?: NSXConnection, account?: String): NSXAccountDto;
		removeAccountV2(connection?: NSXConnection, account?: String): void;
		setAccountV2(connection?: NSXConnection, account?: NSXAccountDto): void;
	}

	declare const NSXAccountController: NSXAccountController;

	interface NSXAccountDto
	{
		readonly name: String;
		readonly password: String;
		readonly tags: NSXTagsDto;

	}

	interface NSXAccountDtoConstructor {
		new(value?:any): NSXAccountDto;
		readonly prototype: NSXAccountDto;
	}

	declare const NSXAccountDto: NSXAccountDtoConstructor;

	interface NSXAccountLockoutPolicyDto
	{
		readonly lockoutDuration: Integer;
		readonly retryCount: Integer;
		readonly retryDuration: Integer;

	}

	interface NSXAccountLockoutPolicyDtoConstructor {
		new(value?:any): NSXAccountLockoutPolicyDto;
		readonly prototype: NSXAccountLockoutPolicyDto;
	}

	declare const NSXAccountLockoutPolicyDto: NSXAccountLockoutPolicyDtoConstructor;

	interface NSXAccountsController
	{

		getAccountsV2(connection?: NSXConnection): NSXAccountsDto;
	}

	declare const NSXAccountsController: NSXAccountsController;

	interface NSXAccountsDto
	{
		readonly accounts: java.util.List;

	}

	interface NSXAccountsDtoConstructor {
		new(value?:any): NSXAccountsDto;
		readonly prototype: NSXAccountsDto;
	}

	declare const NSXAccountsDto: NSXAccountsDtoConstructor;

	interface NSXAclController
	{

	}

	declare const NSXAclController: NSXAclController;

	interface NSXACLRule
	{
		readonly action: String;
		readonly destination_ip_prefix: String;
		readonly destination_mac_address: String;
		readonly destination_port_range_max: long;
		readonly destination_port_range_min: long;
		readonly ethertype: String;
		readonly icmp_protocol_code: long;
		readonly icmp_protocol_type: long;
		readonly protocol: long;
		readonly rule_number: long;
		readonly source_ip_prefix: String;
		readonly source_mac_address: String;
		readonly source_port_range_max: long;
		readonly source_port_range_min: long;

	}

	interface NSXACLRuleConstructor {
		new(value?:any): NSXACLRule;
		readonly prototype: NSXACLRule;
	}

	declare const NSXACLRule: NSXACLRuleConstructor;

	interface NSXActiveSessionDto
	{
		readonly clientExternalNatIp: String;
		readonly clientExternalNatPort: String;
		readonly clientHandle: String;
		readonly clientInternalIp: String;
		readonly clientVirtualIP: String;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly idleTime: long;
		readonly inheritanceAllowed: boolean;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly sessionId: String;
		readonly sessionType: String;
		readonly startTime: long;
		readonly totalActiveConnections: String;
		readonly totalConnections: String;
		readonly totalNonTcpBytesReceived: String;
		readonly totalNonTcpBytesSent: String;
		readonly totalTcpBytesReceived: String;
		readonly totalTcpBytesSent: String;
		readonly type: NSXObjectTypeDto;
		readonly upTime: long;
		readonly userId: String;
		readonly vsmUuid: String;

	}

	interface NSXActiveSessionDtoConstructor {
		new(value?:any): NSXActiveSessionDto;
		readonly prototype: NSXActiveSessionDto;
	}

	declare const NSXActiveSessionDto: NSXActiveSessionDtoConstructor;

	interface NSXActiveSessionsController
	{

		disConnectActiveSessionsV3(connection?: NSXConnection, edgeId?: String, id?: String): void;
		getActiveSessionsV3(connection?: NSXConnection, edgeId?: String): NSXActiveSessionsDto;
	}

	declare const NSXActiveSessionsController: NSXActiveSessionsController;

	interface NSXActiveSessionsDto
	{
		readonly activeSessions: java.util.List;

	}

	interface NSXActiveSessionsDtoConstructor {
		new(value?:any): NSXActiveSessionsDto;
		readonly prototype: NSXActiveSessionsDto;
	}

	declare const NSXActiveSessionsDto: NSXActiveSessionsDtoConstructor;

	interface NSXActiveSessionsTrinityController
	{

		disConnectActiveSessionsV4(connection?: NSXConnection, edgeId?: String, id?: String): void;
		getActiveSessionsV4(connection?: NSXConnection, edgeId?: String): NSXActiveSessionsDto;
	}

	declare const NSXActiveSessionsTrinityController: NSXActiveSessionsTrinityController;

	interface NSXAdAuthServerDto
	{
		readonly authServerType: String;
		readonly bindDomainName: String;
		readonly bindPassword: String;
		readonly enabled: boolean;
		readonly enableSsl: boolean;
		readonly ip: String;
		readonly isSecondaryAuthServer: boolean;
		readonly loginAttributeName: String;
		readonly objectId: String;
		readonly order: Integer;
		readonly port: Integer;
		readonly searchBase: String;
		readonly searchFilter: String;
		readonly terminateSessionOnAuthFails: boolean;
		readonly timeOut: Integer;

	}

	interface NSXAdAuthServerDtoConstructor {
		new(value?:any): NSXAdAuthServerDto;
		readonly prototype: NSXAdAuthServerDto;
	}

	declare const NSXAdAuthServerDto: NSXAdAuthServerDtoConstructor;

	interface NSXAddressDto
	{
		readonly containerId: java.util.Set;
		readonly exclude: boolean;
		readonly ipAddress: String;
		readonly macAddress: String;

	}

	interface NSXAddressDtoConstructor {
		new(value?:any): NSXAddressDto;
		readonly prototype: NSXAddressDto;
	}

	declare const NSXAddressDto: NSXAddressDtoConstructor;

	interface NSXAddressGroup
	{
		readonly displayName: String;
		readonly id: String;
		readonly prefixLength: String;
		readonly primaryAddress: String;
		readonly secondaryAddresses: NSXSecondaryAddresses;
		readonly subnetMask: String;

	}

	interface NSXAddressGroupConstructor {
		new(value?:any): NSXAddressGroup;
		readonly prototype: NSXAddressGroup;
	}

	declare const NSXAddressGroup: NSXAddressGroupConstructor;

	interface NSXAddressGroups
	{
		readonly addressGroups: NSXAddressGroup[];

	}

	interface NSXAddressGroupsConstructor {
		new(value?:any): NSXAddressGroups;
		readonly prototype: NSXAddressGroups;
	}

	declare const NSXAddressGroups: NSXAddressGroupsConstructor;

	interface NSXAddressGwemDto
	{
		readonly address: String;
		readonly op: long;

	}

	interface NSXAddressGwemDtoConstructor {
		new(value?:any): NSXAddressGwemDto;
		readonly prototype: NSXAddressGwemDto;
	}

	declare const NSXAddressGwemDto: NSXAddressGwemDtoConstructor;

	interface NSXAddressTrinityDto
	{
		readonly groupingObjectId: java.util.List;
		readonly ipAddress: java.util.List;
		readonly vnicGroupId: java.util.List;

	}

	interface NSXAddressTrinityDtoConstructor {
		new(value?:any): NSXAddressTrinityDto;
		readonly prototype: NSXAddressTrinityDto;
	}

	declare const NSXAddressTrinityDto: NSXAddressTrinityDtoConstructor;

	interface NSXAdvancedConfigurationController
	{

		applyAdvancedConfigurationV3(connection?: NSXConnection, advancedconfigurationdto?: NSXAdvancedConfigurationDto, edgeId?: String): void;
		getAdvancedConfigurationV3(connection?: NSXConnection, edgeId?: String): NSXAdvancedConfigurationDto;
	}

	declare const NSXAdvancedConfigurationController: NSXAdvancedConfigurationController;

	interface NSXAdvancedConfigurationDto
	{
		readonly clientNotification: String;
		readonly enableCompression: boolean;
		readonly enableLogging: boolean;
		readonly enablePublicUrlAccess: boolean;
		readonly forceVirtualKeyboard: boolean;
		readonly preventMultipleLogon: boolean;
		readonly randomizeVirtualkeys: boolean;
		readonly timeout: NSXTimeoutDto;

	}

	interface NSXAdvancedConfigurationDtoConstructor {
		new(value?:any): NSXAdvancedConfigurationDto;
		readonly prototype: NSXAdvancedConfigurationDto;
	}

	declare const NSXAdvancedConfigurationDto: NSXAdvancedConfigurationDtoConstructor;

	interface NSXAdvancedConfigurationTrinityController
	{

		applyAdvancedConfigurationV4(connection?: NSXConnection, advancedconfigurationdto?: NSXAdvancedConfigurationDto, edgeId?: String): void;
		getAdvancedConfigurationV4(connection?: NSXConnection, edgeId?: String): NSXAdvancedConfigurationDto;
	}

	declare const NSXAdvancedConfigurationTrinityController: NSXAdvancedConfigurationTrinityController;

	interface NSXAdvancedEdgeLBManager
	{

		configureGlobalSettingsOfLoadBalancer(connection?: NSXConnection, edge?: NSXEdge, loadBalancer?: NSXLoadBalancer): void;
		createLBApplicationProfile(connection?: NSXConnection, edge?: NSXEdge, appProfile?: NSXApplicationProfile): NSXApplicationProfile;
		createLBAppRule(connection?: NSXConnection, edge?: NSXEdge, appRule?: NSXApplicationRule): NSXApplicationRule;
		createLBMonitor(connection?: NSXConnection, edge?: NSXEdge, monitor?: NSXMonitor): NSXMonitor;
		createLBPool(connection?: NSXConnection, edge?: NSXEdge, pool?: NSXPool): NSXPool;
		createLoadBalancerVirtualServer(connection?: NSXConnection, edge?: NSXEdge, virtualServer?: NSXVirtualServer): NSXVirtualServer;
		deleteLBApplicationProfile(connection?: NSXConnection, edge?: NSXEdge, appProfile?: NSXApplicationProfile): void;
		deleteLBApplicationRule(connection?: NSXConnection, edge?: NSXEdge, appRule?: NSXApplicationRule): void;
		deleteLBMonitor(connection?: NSXConnection, edge?: NSXEdge, monitor?: NSXMonitor): void;
		deleteLBPool(connection?: NSXConnection, edge?: NSXEdge, pool?: NSXPool): void;
		deleteLoadBalancerVirtualServer(connection?: NSXConnection, edge?: NSXEdge, virtualServer?: NSXVirtualServer): void;
		getApplicationProfileForVirtualServer(connection?: NSXConnection, edge?: NSXEdge, virtualServer?: NSXVirtualServer): NSXApplicationProfile;
		getApplicationRulesForVirtualServer(connection?: NSXConnection, edge?: NSXEdge, virtualServer?: NSXVirtualServer): NSXApplicationRule[];
		getLBApplicationProfile(connection?: NSXConnection, edge?: NSXEdge, appProfile?: NSXApplicationProfile): NSXApplicationProfile;
		getLBApplicationProfileFromEdgeIdAppProfileId(connection?: NSXConnection, edgeId?: String, appProfileId?: String): NSXApplicationProfile;
		getLBApplicationProfiles(connection?: NSXConnection, edgeId?: String): NSXApplicationProfile[];
		getLBApplicationRule(connection?: NSXConnection, edge?: NSXEdge, rule?: NSXApplicationRule): NSXApplicationRule;
		getLBApplicationRuleFromEdgeIdAppRuleId(connection?: NSXConnection, edgeId?: String, ruleId?: String): NSXApplicationRule;
		getLBApplicationRules(connection?: NSXConnection, edgeId?: String): NSXApplicationRule[];
		getLBMonitor(connection?: NSXConnection, edge?: NSXEdge, monitor?: NSXMonitor): NSXMonitor;
		getLBMonitorFromEdgeIdMonitorId(connection?: NSXConnection, edgeId?: String, monitorId?: String): NSXMonitor;
		getLBMonitors(connection?: NSXConnection, edgeId?: String): NSXMonitor[];
		getLBPool(connection?: NSXConnection, edge?: NSXEdge, pool?: NSXPool): NSXPool;
		getLBPoolForVirtualServer(connection?: NSXConnection, edge?: NSXEdge, virtualServer?: NSXVirtualServer): NSXPool;
		getLBPoolFromEdgeIdPoolId(connection?: NSXConnection, edgeId?: String, poolId?: String): NSXPool;
		getLBPools(connection?: NSXConnection, edgeId?: String): NSXPool[];
		getLBVirtualServerFromEdgeIdVirtualServerId(connection?: NSXConnection, edgeId?: String, virtualServerId?: String): NSXVirtualServer;
		getLBVirtualServers(connection?: NSXConnection, edgeId?: String): NSXVirtualServer[];
		getLoadBalancerVirtualServer(connection?: NSXConnection, edge?: NSXEdge, virtualServer?: NSXVirtualServer): NSXVirtualServer;
		getMonitorsAttachedToVirtualServer(connection?: NSXConnection, edge?: NSXEdge, virtualServer?: NSXVirtualServer): NSXMonitor[];
		modifyLBApplicationProfile(connection?: NSXConnection, edge?: NSXEdge, appProfile?: NSXApplicationProfile): NSXApplicationProfile;
		modifyLBAppRule(connection?: NSXConnection, edge?: NSXEdge, appRule?: NSXApplicationRule): NSXApplicationRule;
		modifyLBMonitor(connection?: NSXConnection, edge?: NSXEdge, monitor?: NSXMonitor): NSXMonitor;
		updateLBPool(connection?: NSXConnection, edge?: NSXEdge, pool?: NSXPool): NSXPool;
		updateLoadBalancerVirtualServer(connection?: NSXConnection, edge?: NSXEdge, virtualServer?: NSXVirtualServer): NSXVirtualServer;
	}

	declare const NSXAdvancedEdgeLBManager: NSXAdvancedEdgeLBManager;

	interface NSXAgencyInfoDto
	{
		readonly agencyId: String;
		readonly goalState: String;
		readonly status: String;

	}

	interface NSXAgencyInfoDtoConstructor {
		new(value?:any): NSXAgencyInfoDto;
		readonly prototype: NSXAgencyInfoDto;
	}

	declare const NSXAgencyInfoDto: NSXAgencyInfoDtoConstructor;

	interface NSXAgencyOpsController
	{

		getAgencyStateV2(connection?: NSXConnection, agencyId?: String): NSXAgencyInfoDto;
		getAgentRuntimeInfoByHostV2(connection?: NSXConnection, agencyId?: String, hostId?: String): NSXAgentRuntimeInfoDto;
		getAgentRuntimeInfosV2(connection?: NSXConnection, agencyId?: String): NSXAgentRuntimeInfosDto;
	}

	declare const NSXAgencyOpsController: NSXAgencyOpsController;

	interface NSXAgentDto
	{
		readonly agentId: String;
		readonly agentName: String;
		readonly allocatedIpAddress: NSXAllocatedIpAddressDto;
		readonly host: String;
		readonly hostInfo: NSXBasicDomainObjectInfo;
		readonly initialData: String;
		readonly operationalStatus: String;
		readonly progressStatus: String;
		readonly serviceId: String;
		readonly serviceName: String;
		readonly serviceStatus: NSXAgentHealthStatusDto;
		readonly vmId: String;

	}

	interface NSXAgentDtoConstructor {
		new(value?:any): NSXAgentDto;
		readonly prototype: NSXAgentDto;
	}

	declare const NSXAgentDto: NSXAgentDtoConstructor;

	interface NSXAgentHealthStatusDto
	{
		readonly errorDescription: String;
		readonly errorId: String;
		readonly status: String;

	}

	interface NSXAgentHealthStatusDtoConstructor {
		new(value?:any): NSXAgentHealthStatusDto;
		readonly prototype: NSXAgentHealthStatusDto;
	}

	declare const NSXAgentHealthStatusDto: NSXAgentHealthStatusDtoConstructor;

	interface NSXAgentRuntimeInfoDto
	{
		readonly folder: String;
		readonly host: String;
		readonly installedBulletins: java.util.Collection;
		readonly receivingHearBeat: boolean;
		readonly resourcePool: String;
		readonly status: String;
		readonly vm: String;
		readonly vmIp: String;
		readonly vmName: String;
		readonly vmPowerState: String;

	}

	interface NSXAgentRuntimeInfoDtoConstructor {
		new(value?:any): NSXAgentRuntimeInfoDto;
		readonly prototype: NSXAgentRuntimeInfoDto;
	}

	declare const NSXAgentRuntimeInfoDto: NSXAgentRuntimeInfoDtoConstructor;

	interface NSXAgentRuntimeInfosDto
	{
		readonly agentRuntimeInfos: java.util.Collection;

	}

	interface NSXAgentRuntimeInfosDtoConstructor {
		new(value?:any): NSXAgentRuntimeInfosDto;
		readonly prototype: NSXAgentRuntimeInfosDto;
	}

	declare const NSXAgentRuntimeInfosDto: NSXAgentRuntimeInfosDtoConstructor;

	interface NSXAgentsDto
	{
		readonly agents: java.util.List;

	}

	interface NSXAgentsDtoConstructor {
		new(value?:any): NSXAgentsDto;
		readonly prototype: NSXAgentsDto;
	}

	declare const NSXAgentsDto: NSXAgentsDtoConstructor;

	interface NSXAllocatedIpAddressDto
	{
		readonly allocationNote: String;
		readonly dnsServer1: String;
		readonly dnsServer2: String;
		readonly dnsSuffix: String;
		readonly gateway: String;
		readonly id: long;
		readonly ipAddress: String;
		readonly prefixLength: int;
		readonly subnetId: String;

	}

	interface NSXAllocatedIpAddressDtoConstructor {
		new(value?:any): NSXAllocatedIpAddressDto;
		readonly prototype: NSXAllocatedIpAddressDto;
	}

	declare const NSXAllocatedIpAddressDto: NSXAllocatedIpAddressDtoConstructor;

	interface NSXAllocatedIpAddressesDto
	{
		readonly allocatedIpAddresses: java.util.List;

	}

	interface NSXAllocatedIpAddressesDtoConstructor {
		new(value?:any): NSXAllocatedIpAddressesDto;
		readonly prototype: NSXAllocatedIpAddressesDto;
	}

	declare const NSXAllocatedIpAddressesDto: NSXAllocatedIpAddressesDtoConstructor;

	interface NSXAllocationMode
	{
		readonly value: String;

	}

	interface NSXAllocationModeConstructor {
		new(value?:any): NSXAllocationMode;
		readonly prototype: NSXAllocationMode;
	}

	declare const NSXAllocationMode: NSXAllocationModeConstructor;

	interface NSXApiRequestCounts
	{
		readonly failed: long;
		readonly failed_cumulative_ms: long;
		readonly succeeded: long;
		readonly succeeded_cumulative_ms: long;

	}

	interface NSXApiRequestCountsConstructor {
		new(value?:any): NSXApiRequestCounts;
		readonly prototype: NSXApiRequestCounts;
	}

	declare const NSXApiRequestCounts: NSXApiRequestCountsConstructor;

	interface NSXApiRequestSummary
	{
		readonly delete_requests: NSXApiRequestCounts;
		readonly end_epoch_ms: long;
		readonly get_requests: NSXApiRequestCounts;
		readonly post_requests: NSXApiRequestCounts;
		readonly put_requests: NSXApiRequestCounts;
		readonly start_epoch_ms: long;

	}

	interface NSXApiRequestSummaryConstructor {
		new(value?:any): NSXApiRequestSummary;
		readonly prototype: NSXApiRequestSummary;
	}

	declare const NSXApiRequestSummary: NSXApiRequestSummaryConstructor;

	interface NSXAppController
	{

		helloV2(connection?: NSXConnection): String;
	}

	declare const NSXAppController: NSXAppController;

	interface NSXAppFirewallManager
	{

		constructFirewallSectionInvObj(connection?: NSXConnection, appFWDto?: NSXFirewallSectionRESTDto): NSXFirewallSection;
		getAllFirewallSections(connection?: NSXConnection): NSXFirewallSection[];
		getFirewallSectionForInv(connection?: NSXConnection, fwSectionId?: String): NSXFirewallSection;
	}

	declare const NSXAppFirewallManager: NSXAppFirewallManager;

	interface NSXAppFirewallRestControllerHelper
	{

		getFirewallSectionDto(connection?: NSXConnection, dtoResponseEntity?: org.springframework.http.ResponseEntity): NSXFirewallSectionRESTDto;
		getFirewallSectionEtag(connection?: NSXConnection, dtoResponseEntity?: org.springframework.http.ResponseEntity): String;
		getFirewallSectionListDto(connection?: NSXConnection, dtoResponseEntity?: org.springframework.http.ResponseEntity): NSXFirewallSectionListDto;
	}

	declare const NSXAppFirewallRestControllerHelper: NSXAppFirewallRestControllerHelper;

	interface NSXAppFirewallUiFailedpublishinfoDto
	{
		readonly applianceHostInfo: NSXObjectInfo;
		readonly errorDescription: String;
		readonly timestamp: long;

	}

	interface NSXAppFirewallUiFailedpublishinfoDtoConstructor {
		new(value?:any): NSXAppFirewallUiFailedpublishinfoDto;
		readonly prototype: NSXAppFirewallUiFailedpublishinfoDto;
	}

	declare const NSXAppFirewallUiFailedpublishinfoDto: NSXAppFirewallUiFailedpublishinfoDtoConstructor;

	interface NSXAppFirewallUiFirewallconfighistoryinfoDto
	{
		readonly configId: long;
		readonly status: String;
		readonly timestamp: long;
		readonly userId: String;

	}

	interface NSXAppFirewallUiFirewallconfighistoryinfoDtoConstructor {
		new(value?:any): NSXAppFirewallUiFirewallconfighistoryinfoDto;
		readonly prototype: NSXAppFirewallUiFirewallconfighistoryinfoDto;
	}

	declare const NSXAppFirewallUiFirewallconfighistoryinfoDto: NSXAppFirewallUiFirewallconfighistoryinfoDtoConstructor;

	interface NSXAppFirewallUiFirewallconfigurationDto
	{
		readonly generationNumber: String;
		readonly layer2Rules: java.util.List;
		readonly layer3Rules: java.util.List;
		readonly scope: NSXBasicDomainObjectInfo;
		readonly status: NSXStatusDto;

	}

	interface NSXAppFirewallUiFirewallconfigurationDtoConstructor {
		new(value?:any): NSXAppFirewallUiFirewallconfigurationDto;
		readonly prototype: NSXAppFirewallUiFirewallconfigurationDto;
	}

	declare const NSXAppFirewallUiFirewallconfigurationDto: NSXAppFirewallUiFirewallconfigurationDtoConstructor;

	interface NSXAppFirewallUiFirewallruleDto
	{
		readonly action: String;
		readonly comments: String;
		readonly destinationElements: java.util.List;
		readonly enabled: boolean;
		readonly excludeDestination: boolean;
		readonly excludeSource: boolean;
		readonly id: long;
		readonly invalidDestination: boolean;
		readonly invalidService: boolean;
		readonly invalidSource: boolean;
		readonly logging: boolean;
		readonly name: String;
		readonly precedence: String;
		readonly serviceElements: java.util.List;
		readonly sourceElements: java.util.List;
		readonly sourcePort: String;
		readonly type: String;

	}

	interface NSXAppFirewallUiFirewallruleDtoConstructor {
		new(value?:any): NSXAppFirewallUiFirewallruleDto;
		readonly prototype: NSXAppFirewallUiFirewallruleDto;
	}

	declare const NSXAppFirewallUiFirewallruleDto: NSXAppFirewallUiFirewallruleDtoConstructor;

	interface NSXAppFirewallUiStatusDto
	{
		readonly currentState: String;
		readonly failedPublishInfo: java.util.List;
		readonly generationNumber: long;
		readonly scopeId: String;

	}

	interface NSXAppFirewallUiStatusDtoConstructor {
		new(value?:any): NSXAppFirewallUiStatusDto;
		readonly prototype: NSXAppFirewallUiStatusDto;
	}

	declare const NSXAppFirewallUiStatusDto: NSXAppFirewallUiStatusDtoConstructor;

	interface NSXAppliance
	{
		readonly datastoreId: String;
		readonly hostId: String;
		readonly resourcePoolId: String;

	}

	interface NSXApplianceConstructor {
		new(value?:any): NSXAppliance;
		readonly prototype: NSXAppliance;
	}

	declare const NSXAppliance: NSXApplianceConstructor;

	interface NSXApplianceDto
	{
		readonly cpuReservation: NSXReservationInfoDto;
		readonly customFields: java.util.List;
		readonly datastoreId: String;
		readonly datastoreName: String;
		readonly deployed: boolean;
		readonly edgeId: String;
		readonly highAvailabilityIndex: Integer;
		readonly hostId: String;
		readonly hostName: String;
		readonly memoryReservation: NSXReservationInfoDto;
		readonly resourcePoolId: String;
		readonly resourcePoolName: String;
		readonly vcUuid: String;
		readonly vmFolderId: String;
		readonly vmFolderName: String;
		readonly vmHostname: String;
		readonly vmId: String;
		readonly vmName: String;

	}

	interface NSXApplianceDtoConstructor {
		new(value?:any): NSXApplianceDto;
		readonly prototype: NSXApplianceDto;
	}

	declare const NSXApplianceDto: NSXApplianceDtoConstructor;

	interface NSXApplianceEventController
	{

		helloV2(connection?: NSXConnection): String;
		logEventV2(connection?: NSXConnection, clientid?: String, vsmevent?: com.vmware.vshield.vsm.applianceeventmanager.model.VsmEvent): void;
	}

	declare const NSXApplianceEventController: NSXApplianceEventController;

	interface NSXAppliances
	{
		readonly appliances: NSXAppliance[];

	}

	interface NSXAppliancesConstructor {
		new(value?:any): NSXAppliances;
		readonly prototype: NSXAppliances;
	}

	declare const NSXAppliances: NSXAppliancesConstructor;

	interface NSXAppliancesDto
	{
		readonly appliances: java.util.List;
		readonly applianceSize: String;
		readonly deployAppliances: boolean;
		readonly deploymentContainerId: String;
		readonly enableCoreDump: boolean;

	}

	interface NSXAppliancesDtoConstructor {
		new(value?:any): NSXAppliancesDto;
		readonly prototype: NSXAppliancesDto;
	}

	declare const NSXAppliancesDto: NSXAppliancesDtoConstructor;

	interface NSXApplicationController
	{

		createV2(connection?: NSXConnection, applicationdto?: NSXVsmApplicationDto, scopeId?: String): String;
		deleteV2(connection?: NSXConnection, force?: boolean, identifierString?: String): void;
		getV2(connection?: NSXConnection, identifierString?: String): NSXVsmApplicationDto;
		listV2(connection?: NSXConnection, scopeId?: String): NSXApplicationDto[];
		updateV2(connection?: NSXConnection, identifierString?: String, applicationdto?: NSXVsmApplicationDto): void;
	}

	declare const NSXApplicationController: NSXApplicationController;

	interface NSXApplicationDto
	{
		readonly applicationSetId: java.util.Set;
		readonly portInfo: String;
		readonly protocol: Integer;
		readonly protocolName: String;
		readonly subType: Integer;
		readonly subTypeName: String;

	}

	interface NSXApplicationDtoConstructor {
		new(value?:any): NSXApplicationDto;
		readonly prototype: NSXApplicationDto;
	}

	declare const NSXApplicationDto: NSXApplicationDtoConstructor;

	interface NSXApplicationGroupController
	{

		addMemberV2(connection?: NSXConnection, identifierString?: String, memberIdentifier?: String, failIfExists?: boolean): void;
		createV2(connection?: NSXConnection, scopeId?: String, applicationgroupdto?: NSXApplicationGroupDto): String;
		deleteV2(connection?: NSXConnection, force?: boolean, identifierString?: String): void;
		getV2(connection?: NSXConnection, identifierString?: String): NSXApplicationGroupDto;
		listApplicableMembersV2(connection?: NSXConnection, scopeId?: String): NSXBasicDomainObjectInfo[];
		listV2(connection?: NSXConnection, scopeId?: String): NSXApplicationGroupDto[];
		removeMemberV2(connection?: NSXConnection, identifierString?: String, memberIdentifier?: String, failIfAbsent?: boolean): void;
		updateV2(connection?: NSXConnection, identifierString?: String, applicationgroupdto?: NSXApplicationGroupDto): void;
	}

	declare const NSXApplicationGroupController: NSXApplicationGroupController;

	interface NSXApplicationGroupDto
	{
		readonly clientHandle: String;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly inheritanceAllowed: boolean;
		readonly members: java.util.List;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly type: NSXObjectTypeDto;
		readonly vsmUuid: String;

	}

	interface NSXApplicationGroupDtoConstructor {
		new(value?:any): NSXApplicationGroupDto;
		readonly prototype: NSXApplicationGroupDto;
	}

	declare const NSXApplicationGroupDto: NSXApplicationGroupDtoConstructor;

	interface NSXApplicationProfile
	{
		readonly clientSSLPassThrough: boolean;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly insertForwardedFor: boolean;
		readonly name: String;
		readonly objectId: String;
		readonly persistence: NSXPersistence;
		readonly port: String;
		readonly protocol: String;
		readonly type: String;

	}

	interface NSXApplicationProfileConstructor {
		new(value?:any): NSXApplicationProfile;
		readonly prototype: NSXApplicationProfile;
	}

	declare const NSXApplicationProfile: NSXApplicationProfileConstructor;

	interface NSXApplicationProfileInv
	{
		readonly displayName: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;

	}

	interface NSXApplicationProfileInvConstructor {
		new(value?:any): NSXApplicationProfileInv;
		readonly prototype: NSXApplicationProfileInv;
	}

	declare const NSXApplicationProfileInv: NSXApplicationProfileInvConstructor;

	interface NSXApplicationProtocolDto
	{
		readonly broadcast: boolean;
		readonly defaultPort: int;
		readonly dynamicService: boolean;
		readonly multivalue: boolean;
		readonly name: String;
		readonly transportProtocol: String;

	}

	interface NSXApplicationProtocolDtoConstructor {
		new(value?:any): NSXApplicationProtocolDto;
		readonly prototype: NSXApplicationProtocolDto;
	}

	declare const NSXApplicationProtocolDto: NSXApplicationProtocolDtoConstructor;

	interface NSXApplicationRule
	{
		readonly applicationRuleId: String;
		readonly description: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly name: String;
		readonly objectId: String;
		readonly script: String;

	}

	interface NSXApplicationRuleConstructor {
		new(value?:any): NSXApplicationRule;
		readonly prototype: NSXApplicationRule;
	}

	declare const NSXApplicationRule: NSXApplicationRuleConstructor;

	interface NSXApplicationRuleInv
	{
		readonly displayName: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;

	}

	interface NSXApplicationRuleInvConstructor {
		new(value?:any): NSXApplicationRuleInv;
		readonly prototype: NSXApplicationRuleInv;
	}

	declare const NSXApplicationRuleInv: NSXApplicationRuleInvConstructor;

	interface NSXApplicationTrinityDto
	{
		readonly applicationId: java.util.List;
		readonly service: java.util.List;

	}

	interface NSXApplicationTrinityDtoConstructor {
		new(value?:any): NSXApplicationTrinityDto;
		readonly prototype: NSXApplicationTrinityDto;
	}

	declare const NSXApplicationTrinityDto: NSXApplicationTrinityDtoConstructor;

	interface NSXAppliedToListDto
	{
		readonly appliedToList: java.util.List;

	}

	interface NSXAppliedToListDtoConstructor {
		new(value?:any): NSXAppliedToListDto;
		readonly prototype: NSXAppliedToListDto;
	}

	declare const NSXAppliedToListDto: NSXAppliedToListDtoConstructor;

	interface NSXAppVisibilityFilterDto
	{
		readonly allUndefinedServices: boolean;
		readonly destinationIpList: java.util.List;
		readonly destinationList: java.util.List;
		readonly directionList: java.util.List;
		readonly flowIds: java.util.List;
		readonly hidden: boolean;
		readonly port: Integer;
		readonly protocol: String;
		readonly serviceList: java.util.List;
		readonly sourceIpList: java.util.List;
		readonly sourceList: java.util.List;

	}

	interface NSXAppVisibilityFilterDtoConstructor {
		new(value?:any): NSXAppVisibilityFilterDto;
		readonly prototype: NSXAppVisibilityFilterDto;
	}

	declare const NSXAppVisibilityFilterDto: NSXAppVisibilityFilterDtoConstructor;

	interface NSXAppVisibilityFlowDto
	{
		readonly analyzedDestinationList: java.util.List;
		readonly analyzedServiceList: java.util.List;
		readonly analyzedSourceList: java.util.List;
		readonly applicationContext: String;
		readonly approvedDestination: NSXObjectInfoDto;
		readonly approvedService: NSXObjectInfoDto;
		readonly approvedSource: NSXObjectInfoDto;
		readonly destinationReportedAddress: String;
		readonly direction: String;
		readonly flowId: long;
		readonly hidden: boolean;
		readonly numberOfFlows: Integer;
		readonly reportedPort: Integer;
		readonly reportedProtocol: String;
		readonly ruleId: long;
		readonly scope: String;
		readonly sessionId: long;
		readonly sourceReportedAddress: String;

	}

	interface NSXAppVisibilityFlowDtoConstructor {
		new(value?:any): NSXAppVisibilityFlowDto;
		readonly prototype: NSXAppVisibilityFlowDto;
	}

	declare const NSXAppVisibilityFlowDto: NSXAppVisibilityFlowDtoConstructor;

	interface NSXAppVisibilityRulesDto
	{
		readonly id: long;
		readonly lastPublished: long;
		readonly lastUpdated: long;
		readonly rulesDto: java.util.List;
		readonly sectionId: long;
		readonly sectionName: String;
		readonly sessionId: long;

	}

	interface NSXAppVisibilityRulesDtoConstructor {
		new(value?:any): NSXAppVisibilityRulesDto;
		readonly prototype: NSXAppVisibilityRulesDto;
	}

	declare const NSXAppVisibilityRulesDto: NSXAppVisibilityRulesDtoConstructor;

	interface NSXAppVisibilitySessionInfoDto
	{
		readonly currentFlowCount: long;
		readonly description: String;
		readonly endTime: long;
		readonly id: long;
		readonly name: String;
		readonly seed: java.util.List;
		readonly startTime: long;
		readonly status: String;
		readonly userModifiedFlowCount: long;

	}

	interface NSXAppVisibilitySessionInfoDtoConstructor {
		new(value?:any): NSXAppVisibilitySessionInfoDto;
		readonly prototype: NSXAppVisibilitySessionInfoDto;
	}

	declare const NSXAppVisibilitySessionInfoDto: NSXAppVisibilitySessionInfoDtoConstructor;

	interface NSXAttributeDto
	{
		readonly id: long;
		readonly key: String;
		readonly name: String;
		readonly revision: long;
		readonly value: String;

	}

	interface NSXAttributeDtoConstructor {
		new(value?:any): NSXAttributeDto;
		readonly prototype: NSXAttributeDto;
	}

	declare const NSXAttributeDto: NSXAttributeDtoConstructor;

	interface NSXAttributesDto
	{
		readonly attributes: java.util.List;
		readonly id: long;
		readonly revision: long;

	}

	interface NSXAttributesDtoConstructor {
		new(value?:any): NSXAttributesDto;
		readonly prototype: NSXAttributesDto;
	}

	declare const NSXAttributesDto: NSXAttributesDtoConstructor;

	interface NSXAuditLogController
	{

		getV2(connection?: NSXConnection, startIndex?: int, pageSize?: int, sortOrderAscending?: boolean, sortBy?: String): com.vmware.vshield.vsm.auditing.dto.AuditLogPage;
	}

	declare const NSXAuditLogController: NSXAuditLogController;

	interface NSXAuditLogDto
	{
		readonly id: long;
		readonly module: String;
		readonly newValue: String;
		readonly notes: String;
		readonly oldValue: String;
		readonly operation: String;
		readonly operationTags: String;
		readonly resource: String;
		readonly resourceId: String;
		readonly status: String;
		readonly timestamp: String;
		readonly userName: String;

	}

	interface NSXAuditLogDtoConstructor {
		new(value?:any): NSXAuditLogDto;
		readonly prototype: NSXAuditLogDto;
	}

	declare const NSXAuditLogDto: NSXAuditLogDtoConstructor;

	interface NSXAuthConfigDto
	{
		readonly authenticationTimeout: Integer;
		readonly authServers: java.util.List;
		readonly certAuthServer: NSXCertificateAuthenticationDto;
		readonly preventMultipleLogon: boolean;

	}

	interface NSXAuthConfigDtoConstructor {
		new(value?:any): NSXAuthConfigDto;
		readonly prototype: NSXAuthConfigDto;
	}

	declare const NSXAuthConfigDto: NSXAuthConfigDtoConstructor;

	interface NSXAuthController
	{

	}

	declare const NSXAuthController: NSXAuthController;

	interface NSXAuthenticationConfigDto
	{
		readonly certificateAuthenticationDto: NSXCertificateAuthenticationDto;
		readonly passwordAuthenticationDto: NSXPasswordAuthenticationDto;

	}

	interface NSXAuthenticationConfigDtoConstructor {
		new(value?:any): NSXAuthenticationConfigDto;
		readonly prototype: NSXAuthenticationConfigDto;
	}

	declare const NSXAuthenticationConfigDto: NSXAuthenticationConfigDtoConstructor;

	interface NSXAuthenticationConfigurationController
	{

		applyAuthenticationConfigurationV3(connection?: NSXConnection, authenticationconfigurationdto?: NSXAuthenticationConfigurationDto, edgeId?: String): void;
		downloadRsaFileV3(connection?: NSXConnection, edgeId?: String): void;
		getAuthenticationConfigurationV3(connection?: NSXConnection, edgeId?: String): NSXAuthenticationConfigurationDto;
		uploadRsaConfigFileV3(connection?: NSXConnection, file?: org.springframework.web.multipart.MultipartFile, edgeId?: String): void;
	}

	declare const NSXAuthenticationConfigurationController: NSXAuthenticationConfigurationController;

	interface NSXAuthenticationConfigurationDto
	{
		readonly certificateAuthentication: NSXCertificateAuthenticationDto;
		readonly passwordAuthentication: NSXPasswordAuthenticationDto;

	}

	interface NSXAuthenticationConfigurationDtoConstructor {
		new(value?:any): NSXAuthenticationConfigurationDto;
		readonly prototype: NSXAuthenticationConfigurationDto;
	}

	declare const NSXAuthenticationConfigurationDto: NSXAuthenticationConfigurationDtoConstructor;

	interface NSXAuthenticationConfigurationTrinityController
	{

		applyAuthenticationConfigurationV4(connection?: NSXConnection, authenticationconfigurationdto?: NSXAuthenticationConfigurationDto, edgeId?: String): void;
		downloadRsaFileV4(connection?: NSXConnection, edgeId?: String): void;
		getAuthenticationConfigurationV4(connection?: NSXConnection, edgeId?: String): NSXAuthenticationConfigurationDto;
		uploadRsaConfigFileV4(connection?: NSXConnection, file?: org.springframework.web.multipart.MultipartFile, edgeId?: String): void;
	}

	declare const NSXAuthenticationConfigurationTrinityController: NSXAuthenticationConfigurationTrinityController;

	interface NSXAuthenticationDto
	{
		readonly type: String;
		readonly value: String;

	}

	interface NSXAuthenticationDtoConstructor {
		new(value?:any): NSXAuthenticationDto;
		readonly prototype: NSXAuthenticationDto;
	}

	declare const NSXAuthenticationDto: NSXAuthenticationDtoConstructor;

	interface NSXAuthServerController
	{

		addAuthServerV3(connection?: NSXConnection, baseauthserverdto?: NSXBaseAuthServerDto, edgeId?: String): void;
		applyAuthenticationConfigurationV3(connection?: NSXConnection, authconfigdto?: NSXAuthConfigDto, edgeId?: String): void;
		deleteAuthServerV3(connection?: NSXConnection, edgeId?: String, id?: String): void;
		getBaseAuthServerV3(connection?: NSXConnection, edgeId?: String): NSXAuthConfigDto;
		modifyAuthServerV3(connection?: NSXConnection, baseauthserverdto?: NSXBaseAuthServerDto, edgeId?: String, id?: String): void;
	}

	declare const NSXAuthServerController: NSXAuthServerController;

	interface NSXAuthServerDto
	{
		readonly authServerType: String;
		readonly bindDomainName: String;
		readonly bindPassword: String;
		readonly enableSsl: boolean;
		readonly id: String;
		readonly ip: String;
		readonly isSecondaryAuthServer: boolean;
		readonly loginAttributeName: String;
		readonly nasIp: String;
		readonly order: Integer;
		readonly password: String;
		readonly port: Integer;
		readonly retryCount: int;
		readonly searchBase: String;
		readonly searchFilter: String;
		readonly secret: String;
		readonly sourceIp: String;
		readonly terminateSessionOnAuthFails: boolean;
		readonly timeOut: Integer;

	}

	interface NSXAuthServerDtoConstructor {
		new(value?:any): NSXAuthServerDto;
		readonly prototype: NSXAuthServerDto;
	}

	declare const NSXAuthServerDto: NSXAuthServerDtoConstructor;

	interface NSXAutoConfigurationDto
	{
		readonly enabled: boolean;
		readonly rulePriority: String;

	}

	interface NSXAutoConfigurationDtoConstructor {
		new(value?:any): NSXAutoConfigurationDto;
		readonly prototype: NSXAutoConfigurationDto;
	}

	declare const NSXAutoConfigurationDto: NSXAutoConfigurationDtoConstructor;

	interface NSXBaseAuthServerDto
	{
		readonly authServerType: String;
		readonly enabled: boolean;
		readonly isSecondaryAuthServer: boolean;
		readonly objectId: String;
		readonly order: Integer;
		readonly terminateSessionOnAuthFails: boolean;

	}

	interface NSXBaseAuthServerDtoConstructor {
		new(value?:any): NSXBaseAuthServerDto;
		readonly prototype: NSXBaseAuthServerDto;
	}

	declare const NSXBaseAuthServerDto: NSXBaseAuthServerDtoConstructor;

	interface NSXBaseIpAddressPoolDto
	{
		readonly clientHandle: String;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly totalAddressCount: java.math.BigInteger;
		readonly type: NSXObjectTypeDto;
		readonly usedAddressCount: java.math.BigInteger;
		readonly usedPercentage: int;
		readonly vsmUuid: String;

	}

	interface NSXBaseIpAddressPoolDtoConstructor {
		new(value?:any): NSXBaseIpAddressPoolDto;
		readonly prototype: NSXBaseIpAddressPoolDto;
	}

	declare const NSXBaseIpAddressPoolDto: NSXBaseIpAddressPoolDtoConstructor;

	interface NSXBaseRestController
	{

	}

	declare const NSXBaseRestController: NSXBaseRestController;

	interface NSXBasicDomainEntity
	{
		readonly description: String;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: String;

	}

	interface NSXBasicDomainEntityConstructor {
		new(value?:any): NSXBasicDomainEntity;
		readonly prototype: NSXBasicDomainEntity;
	}

	declare const NSXBasicDomainEntity: NSXBasicDomainEntityConstructor;

	interface NSXBasicDomainObjectInfo
	{
		readonly clientHandle: String;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly type: NSXObjectTypeDto;
		readonly vsmUuid: String;

	}

	interface NSXBasicDomainObjectInfoConstructor {
		new(value?:any): NSXBasicDomainObjectInfo;
		readonly prototype: NSXBasicDomainObjectInfo;
	}

	declare const NSXBasicDomainObjectInfo: NSXBasicDomainObjectInfoConstructor;

	interface NSXBasicDomainObjectInfoList
	{
		readonly basicDomainObjects: java.util.List;

	}

	interface NSXBasicDomainObjectInfoListConstructor {
		new(value?:any): NSXBasicDomainObjectInfoList;
		readonly prototype: NSXBasicDomainObjectInfoList;
	}

	declare const NSXBasicDomainObjectInfoList: NSXBasicDomainObjectInfoListConstructor;

	interface NSXBelongingViewsDto
	{
		readonly viewId: java.util.List;

	}

	interface NSXBelongingViewsDtoConstructor {
		new(value?:any): NSXBelongingViewsDto;
		readonly prototype: NSXBelongingViewsDto;
	}

	declare const NSXBelongingViewsDto: NSXBelongingViewsDtoConstructor;

	interface NSXBelongingZoneDto
	{
		readonly enabled: boolean;
		readonly zoneId: String;

	}

	interface NSXBelongingZoneDtoConstructor {
		new(value?:any): NSXBelongingZoneDto;
		readonly prototype: NSXBelongingZoneDto;
	}

	declare const NSXBelongingZoneDto: NSXBelongingZoneDtoConstructor;

	interface NSXBelongingZonesOfViewtDto
	{
		readonly zone: java.util.List;

	}

	interface NSXBelongingZonesOfViewtDtoConstructor {
		new(value?:any): NSXBelongingZonesOfViewtDto;
		readonly prototype: NSXBelongingZonesOfViewtDto;
	}

	declare const NSXBelongingZonesOfViewtDto: NSXBelongingZonesOfViewtDtoConstructor;

	interface NSXBgpConfigDto
	{
		readonly bgpNeighbours: NSXBgpNeighboursDto;
		readonly defaultOriginate: boolean;
		readonly enabled: boolean;
		readonly gracefulRestart: boolean;
		readonly localAS: Integer;
		readonly redistribution: NSXRedistributionDto;

	}

	interface NSXBgpConfigDtoConstructor {
		new(value?:any): NSXBgpConfigDto;
		readonly prototype: NSXBgpConfigDto;
	}

	declare const NSXBgpConfigDto: NSXBgpConfigDtoConstructor;

	interface NSXBgpFilterDto
	{
		readonly action: String;
		readonly direction: String;
		readonly ipPrefixGe: Integer;
		readonly ipPrefixLe: Integer;
		readonly network: String;

	}

	interface NSXBgpFilterDtoConstructor {
		new(value?:any): NSXBgpFilterDto;
		readonly prototype: NSXBgpFilterDto;
	}

	declare const NSXBgpFilterDto: NSXBgpFilterDtoConstructor;

	interface NSXBgpFiltersDto
	{
		readonly bgpFilters: java.util.List;

	}

	interface NSXBgpFiltersDtoConstructor {
		new(value?:any): NSXBgpFiltersDto;
		readonly prototype: NSXBgpFiltersDto;
	}

	declare const NSXBgpFiltersDto: NSXBgpFiltersDtoConstructor;

	interface NSXBgpNeighbourDto
	{
		readonly bgpFilters: NSXBgpFiltersDto;
		readonly forwardingAddress: String;
		readonly holdDownTimer: Integer;
		readonly ipAddress: String;
		readonly keepAliveTimer: Integer;
		readonly password: String;
		readonly protocolAddress: String;
		readonly remoteAS: Integer;
		readonly weight: Integer;

	}

	interface NSXBgpNeighbourDtoConstructor {
		new(value?:any): NSXBgpNeighbourDto;
		readonly prototype: NSXBgpNeighbourDto;
	}

	declare const NSXBgpNeighbourDto: NSXBgpNeighbourDtoConstructor;

	interface NSXBgpNeighboursDto
	{
		readonly bgpNeighbours: java.util.List;

	}

	interface NSXBgpNeighboursDtoConstructor {
		new(value?:any): NSXBgpNeighboursDto;
		readonly prototype: NSXBgpNeighboursDto;
	}

	declare const NSXBgpNeighboursDto: NSXBgpNeighboursDtoConstructor;

	interface NSXBindingStatusDto
	{
		readonly bindingId: String;
		readonly message: String;
		readonly status: String;

	}

	interface NSXBindingStatusDtoConstructor {
		new(value?:any): NSXBindingStatusDto;
		readonly prototype: NSXBindingStatusDto;
	}

	declare const NSXBindingStatusDto: NSXBindingStatusDtoConstructor;

	interface NSXBindingStatusesDto
	{
		readonly statuses: java.util.Set;

	}

	interface NSXBindingStatusesDtoConstructor {
		new(value?:any): NSXBindingStatusesDto;
		readonly prototype: NSXBindingStatusesDto;
	}

	declare const NSXBindingStatusesDto: NSXBindingStatusesDtoConstructor;

	interface NSXBridgeDto
	{
		readonly bridgeId: String;
		readonly dvportGroup: String;
		readonly dvportGroupName: String;
		readonly name: String;
		readonly virtualWire: String;
		readonly virtualWireName: String;

	}

	interface NSXBridgeDtoConstructor {
		new(value?:any): NSXBridgeDto;
		readonly prototype: NSXBridgeDto;
	}

	declare const NSXBridgeDto: NSXBridgeDtoConstructor;

	interface NSXBridgingConfigDto
	{
		readonly bridges: java.util.List;
		readonly enabled: boolean;
		readonly template: String;
		readonly version: long;

	}

	interface NSXBridgingConfigDtoConstructor {
		new(value?:any): NSXBridgingConfigDto;
		readonly prototype: NSXBridgingConfigDto;
	}

	declare const NSXBridgingConfigDto: NSXBridgingConfigDtoConstructor;

	interface NSXBridgingController
	{

		configureBridgingV4(connection?: NSXConnection, edgeId?: String, bridgingconfigdto?: NSXBridgingConfigDto): void;
		deleteBridgingConfigV4(connection?: NSXConnection, edgeId?: String): void;
		getBridgingConfigV4(connection?: NSXConnection, edgeId?: String): NSXBridgingConfigDto;
	}

	declare const NSXBridgingController: NSXBridgingController;

	interface NSXCategoriesDto
	{
		readonly categories: java.util.Set;

	}

	interface NSXCategoriesDtoConstructor {
		new(value?:any): NSXCategoriesDto;
		readonly prototype: NSXCategoriesDto;
	}

	declare const NSXCategoriesDto: NSXCategoriesDtoConstructor;

	interface NSXCategoryController
	{

		getCategoriesV2(connection?: NSXConnection): NSXCategoriesDto;
		getCategoryV2(connection?: NSXConnection, type?: String): NSXCategoryDto;
	}

	declare const NSXCategoryController: NSXCategoryController;

	interface NSXCategoryDto
	{
		readonly implementationType: String;
		readonly requiredProfileAttributes: NSXAttributesDto;
		readonly requiredServiceAttributes: NSXAttributesDto;
		readonly type: String;

	}

	interface NSXCategoryDtoConstructor {
		new(value?:any): NSXCategoryDto;
		readonly prototype: NSXCategoryDto;
	}

	declare const NSXCategoryDto: NSXCategoryDtoConstructor;

	interface NSXCbmController
	{

		getStatisticsForAllInterfacesV3(connection?: NSXConnection, edgeId?: String, startTime?: long, endTime?: long): NSXCbmStatsDto;
		getStatisticsForInternalInterfacesV3(connection?: NSXConnection, edgeId?: String, startTime?: long, endTime?: long): NSXCbmStatsDto;
		getStatisticsForUplinkInterfacesV3(connection?: NSXConnection, edgeId?: String, startTime?: long, endTime?: long): NSXCbmStatsDto;
	}

	declare const NSXCbmController: NSXCbmController;

	interface NSXCbmStatDto
	{
		readonly in: Double;
		readonly out: Double;
		readonly timestamp: long;
		readonly vnic: Integer;

	}

	interface NSXCbmStatDtoConstructor {
		new(value?:any): NSXCbmStatDto;
		readonly prototype: NSXCbmStatDto;
	}

	declare const NSXCbmStatDto: NSXCbmStatDtoConstructor;

	interface NSXCbmStatsDto
	{
		readonly dataDto: NSXDataDto;
		readonly metaDto: NSXMetaDto;

	}

	interface NSXCbmStatsDtoConstructor {
		new(value?:any): NSXCbmStatsDto;
		readonly prototype: NSXCbmStatsDto;
	}

	declare const NSXCbmStatsDto: NSXCbmStatsDtoConstructor;

	interface NSXCbmStatsEntryDto
	{
		readonly timeStamp: long;
		readonly VNic_0_in: Double;
		readonly VNic_0_out: Double;
		readonly VNic_1_in: Double;
		readonly VNic_1_out: Double;
		readonly VNic_2_in: Double;
		readonly VNic_2_out: Double;
		readonly VNic_3_in: Double;
		readonly VNic_3_out: Double;
		readonly VNic_4_in: Double;
		readonly VNic_4_out: Double;
		readonly VNic_5_in: Double;
		readonly VNic_5_out: Double;
		readonly VNic_6_in: Double;
		readonly VNic_6_out: Double;
		readonly VNic_7_in: Double;
		readonly VNic_7_out: Double;
		readonly VNic_8_in: Double;
		readonly VNic_8_out: Double;
		readonly VNic_9_in: Double;
		readonly VNic_9_out: Double;

	}

	interface NSXCbmStatsEntryDtoConstructor {
		new(value?:any): NSXCbmStatsEntryDto;
		readonly prototype: NSXCbmStatsEntryDto;
	}

	declare const NSXCbmStatsEntryDto: NSXCbmStatsEntryDtoConstructor;

	interface NSXCbmStatsEntryListDto
	{
		readonly entries: java.util.List;
		readonly meta: NSXMetaDto;

	}

	interface NSXCbmStatsEntryListDtoConstructor {
		new(value?:any): NSXCbmStatsEntryListDto;
		readonly prototype: NSXCbmStatsEntryListDto;
	}

	declare const NSXCbmStatsEntryListDto: NSXCbmStatsEntryListDtoConstructor;

	interface NSXCentralizedCLIController
	{

		getClustersV4(connection?: NSXConnection, contextId?: String): NSXClustersDto;
		getHostsV4(connection?: NSXConnection, contextId?: String, clusterId?: String): NSXHostsDto;
		getVmsV4(connection?: NSXConnection, contextId?: String, hostId?: String): NSXVmsDto;
		getVnicInfoV4(connection?: NSXConnection, contextId?: String, vnicId?: String): NSXFirewallCentralizedcliVnicsDto;
		getVnicsV4(connection?: NSXConnection, contextId?: String, vmId?: String): NSXFirewallCentralizedcliVnicsDto;
	}

	declare const NSXCentralizedCLIController: NSXCentralizedCLIController;

	interface NSXCertificateAuthenticationDto
	{
		readonly certificateIds: String;

	}

	interface NSXCertificateAuthenticationDtoConstructor {
		new(value?:any): NSXCertificateAuthenticationDto;
		readonly prototype: NSXCertificateAuthenticationDto;
	}

	declare const NSXCertificateAuthenticationDto: NSXCertificateAuthenticationDtoConstructor;

	interface NSXCertificateDto
	{
		readonly certificateType: String;
		readonly clientHandle: String;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly issuerCn: String;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly pemEncoding: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly subjectCn: String;
		readonly type: NSXObjectTypeDto;
		readonly vsmUuid: String;
		readonly x509Certificates: java.util.List;

	}

	interface NSXCertificateDtoConstructor {
		new(value?:any): NSXCertificateDto;
		readonly prototype: NSXCertificateDto;
	}

	declare const NSXCertificateDto: NSXCertificateDtoConstructor;

	interface NSXCertificateKeyPair
	{
		readonly certificate: NSXSecurityCertificate;
		readonly rsa_private_key: String;

	}

	interface NSXCertificateKeyPairConstructor {
		new(value?:any): NSXCertificateKeyPair;
		readonly prototype: NSXCertificateKeyPair;
	}

	declare const NSXCertificateKeyPair: NSXCertificateKeyPairConstructor;

	interface NSXCertificateListDto
	{
		readonly certificates: java.util.List;

	}

	interface NSXCertificateListDtoConstructor {
		new(value?:any): NSXCertificateListDto;
		readonly prototype: NSXCertificateListDto;
	}

	declare const NSXCertificateListDto: NSXCertificateListDtoConstructor;

	interface NSXChangePassword
	{
		readonly changePasswordOnNextLogin: boolean;

	}

	interface NSXChangePasswordConstructor {
		new(value?:any): NSXChangePassword;
		readonly prototype: NSXChangePassword;
	}

	declare const NSXChangePassword: NSXChangePasswordConstructor;

	interface NSXCipherList
	{
		readonly cipher: java.util.List;

	}

	interface NSXCipherListConstructor {
		new(value?:any): NSXCipherList;
		readonly prototype: NSXCipherList;
	}

	declare const NSXCipherList: NSXCipherListConstructor;

	interface NSXClientConfigurationController
	{

		applyClientConfigurationV3(connection?: NSXConnection, clientconfigurationdto?: NSXClientConfigurationDto, edgeId?: String): void;
		getClientConfigurationV3(connection?: NSXConnection, edgeId?: String): NSXClientConfigurationDto;
	}

	declare const NSXClientConfigurationController: NSXClientConfigurationController;

	interface NSXClientConfigurationDto
	{
		readonly autoReconnect: boolean;
		readonly tunnelConfiguration: NSXTunnelConfigurationDto;
		readonly upgradeNotification: boolean;

	}

	interface NSXClientConfigurationDtoConstructor {
		new(value?:any): NSXClientConfigurationDto;
		readonly prototype: NSXClientConfigurationDto;
	}

	declare const NSXClientConfigurationDto: NSXClientConfigurationDtoConstructor;

	interface NSXClientConfigurationTrinityController
	{

		applyClientConfigurationV4(connection?: NSXConnection, clientconfigurationdto?: NSXClientConfigurationDto, edgeId?: String): void;
		getClientConfigurationV4(connection?: NSXConnection, edgeId?: String): NSXClientConfigurationDto;
	}

	declare const NSXClientConfigurationTrinityController: NSXClientConfigurationTrinityController;

	interface NSXClientController
	{

		getClientHeartbeatStatusV2(connection?: NSXConnection, client?: String): NSXClientHeartbeatDataDto;
		performClientRpcTestV2(connection?: NSXConnection, client?: String, timeout?: long, topic?: boolean): String;
		removeClientV2(connection?: NSXConnection, client?: String): void;
		setPeerPermissionsV2(connection?: NSXConnection, client?: String, permissionsdto?: NSXPermissionsDto): void;
	}

	declare const NSXClientController: NSXClientController;

	interface NSXClientDto
	{
		readonly clientId: String;
		readonly clientToken: String;
		readonly heartbeatEnabled: boolean;
		readonly messagingSystemAccount: String;
		readonly messagingSystemAccountEnabled: boolean;
		readonly messagingSystemAccountPassword: String;
		readonly peerName: String;
		readonly topics: NSXTopicsDto;

	}

	interface NSXClientDtoConstructor {
		new(value?:any): NSXClientDto;
		readonly prototype: NSXClientDto;
	}

	declare const NSXClientDto: NSXClientDtoConstructor;

	interface NSXClientHeartbeatDataDto
	{
		readonly active: boolean;
		readonly clientId: String;
		readonly clientToken: String;
		readonly currentHeartbeatId: long;
		readonly lastHeartbeatResponse: NSXHeartbeatResponseDto;
		readonly peerName: String;

	}

	interface NSXClientHeartbeatDataDtoConstructor {
		new(value?:any): NSXClientHeartbeatDataDto;
		readonly prototype: NSXClientHeartbeatDataDto;
	}

	declare const NSXClientHeartbeatDataDto: NSXClientHeartbeatDataDtoConstructor;

	interface NSXClientIconsDto
	{
		readonly clientBanner: byte[];
		readonly clientBannerUri: String;
		readonly connectedClientIcon: byte[];
		readonly connectedClientIconUri: String;
		readonly connectedErrorClientIcon: byte[];
		readonly connectedErrorClientIconUri: String;
		readonly desktopClientIcon: byte[];
		readonly desktopClientIconUri: String;
		readonly disconnectedClientIcon: byte[];
		readonly disconnectedClientIconUri: String;
		readonly encodedClientBanner: String;
		readonly encodedConnectedClientIcon: String;
		readonly encodedConnectedErrorClientIcon: String;
		readonly encodedDesktopClientIcon: String;
		readonly encodedDisconnectedClientIcon: String;

	}

	interface NSXClientIconsDtoConstructor {
		new(value?:any): NSXClientIconsDto;
		readonly prototype: NSXClientIconsDto;
	}

	declare const NSXClientIconsDto: NSXClientIconsDtoConstructor;

	interface NSXClientInstallPackageController
	{

		addInstallationPkgV3(connection?: NSXConnection, clientinstallpackagedto?: NSXClientInstallPackageDto, edgeId?: String): void;
		applyClientInstallPackagesV3(connection?: NSXConnection, clientinstallpackagesdto?: NSXClientInstallPackagesDto, edgeId?: String): void;
		deleteAllClientInstallPackagesV3(connection?: NSXConnection, edgeId?: String): void;
		getAllClientInstallPackagesV3(connection?: NSXConnection, edgeId?: String): NSXClientInstallPackagesDto;
		getClientInstallPackageV3(connection?: NSXConnection, edgeId?: String, id?: String): NSXClientInstallPackageDto;
		modifyInstallationPkgV3(connection?: NSXConnection, clientinstallpackagedto?: NSXClientInstallPackageDto, edgeId?: String, id?: String): void;
		removeInstallationPkgV3(connection?: NSXConnection, edgeId?: String, id?: String): void;
	}

	declare const NSXClientInstallPackageController: NSXClientInstallPackageController;

	interface NSXClientInstallPackageDto
	{
		readonly createDesktopIcon: boolean;
		readonly createLinuxClient: boolean;
		readonly createMacClient: boolean;
		readonly description: String;
		readonly enabled: boolean;
		readonly enforceServerSecurityCertValidation: boolean;
		readonly gatewayList: java.util.List;
		readonly hideNetworkAdaptor: boolean;
		readonly hideSystrayIcon: boolean;
		readonly objectId: String;
		readonly profileName: String;
		readonly rememberPassword: boolean;
		readonly silentModeInstallation: boolean;
		readonly silentModeOperation: boolean;
		readonly startClientOnLogon: boolean;

	}

	interface NSXClientInstallPackageDtoConstructor {
		new(value?:any): NSXClientInstallPackageDto;
		readonly prototype: NSXClientInstallPackageDto;
	}

	declare const NSXClientInstallPackageDto: NSXClientInstallPackageDtoConstructor;

	interface NSXClientInstallPackagesDto
	{
		readonly clientInstallPackages: java.util.List;

	}

	interface NSXClientInstallPackagesDtoConstructor {
		new(value?:any): NSXClientInstallPackagesDto;
		readonly prototype: NSXClientInstallPackagesDto;
	}

	declare const NSXClientInstallPackagesDto: NSXClientInstallPackagesDtoConstructor;

	interface NSXClientInstallPackageTrinityController
	{

		addInstallationPkgV4(connection?: NSXConnection, clientinstallpackagedto?: NSXClientInstallPackageDto, edgeId?: String): void;
		applyClientInstallPackagesV4(connection?: NSXConnection, clientinstallpackagesdto?: NSXClientInstallPackagesDto, edgeId?: String): void;
		deleteAllClientInstallPackagesV4(connection?: NSXConnection, edgeId?: String): void;
		getAllClientInstallPackagesV4(connection?: NSXConnection, edgeId?: String): NSXClientInstallPackagesDto;
		getClientInstallPackageV4(connection?: NSXConnection, edgeId?: String, id?: String): NSXClientInstallPackageDto;
		modifyInstallationPkgV4(connection?: NSXConnection, clientinstallpackagedto?: NSXClientInstallPackageDto, edgeId?: String, id?: String): void;
		removeInstallationPkgV4(connection?: NSXConnection, edgeId?: String, id?: String): void;
	}

	declare const NSXClientInstallPackageTrinityController: NSXClientInstallPackageTrinityController;

	interface NSXClientRegistrationResultDto
	{
		readonly clientId: String;
		readonly messagingServerHost: String;
		readonly messagingServerPort: String;
		readonly messagingServerSslCert: String;
		readonly messagingServerVirtualHost: String;
		readonly peerExchange: String;
		readonly peerRpcInfo: NSXClientRpcInfoDto;
		readonly vsmExchange: String;

	}

	interface NSXClientRegistrationResultDtoConstructor {
		new(value?:any): NSXClientRegistrationResultDto;
		readonly prototype: NSXClientRegistrationResultDto;
	}

	declare const NSXClientRegistrationResultDto: NSXClientRegistrationResultDtoConstructor;

	interface NSXClientRpcInfoDto
	{
		readonly requestQueue: String;
		readonly responseQueue: String;
		readonly vsmRequestQueue: String;

	}

	interface NSXClientRpcInfoDtoConstructor {
		new(value?:any): NSXClientRpcInfoDto;
		readonly prototype: NSXClientRpcInfoDto;
	}

	declare const NSXClientRpcInfoDto: NSXClientRpcInfoDtoConstructor;

	interface NSXClientsController
	{

		getClientsV2(connection?: NSXConnection): NSXClientsDto;
		registerClientV2(connection?: NSXConnection, clientdto?: NSXClientDto): NSXClientRegistrationResultDto;
	}

	declare const NSXClientsController: NSXClientsController;

	interface NSXClientsDto
	{
		readonly clients: java.util.List;

	}

	interface NSXClientsDtoConstructor {
		new(value?:any): NSXClientsDto;
		readonly prototype: NSXClientsDto;
	}

	declare const NSXClientsDto: NSXClientsDtoConstructor;

	interface NSXCluster
	{
		readonly description: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: String;
		readonly scopeId: String;

	}

	interface NSXClusterConstructor {
		new(value?:any): NSXCluster;
		readonly prototype: NSXCluster;
	}

	declare const NSXCluster: NSXClusterConstructor;

	interface NSXClusterDatastoreInfoDto
	{
		readonly clusterId: String;
		readonly datastore: NSXBasicDomainObjectInfo;

	}

	interface NSXClusterDatastoreInfoDtoConstructor {
		new(value?:any): NSXClusterDatastoreInfoDto;
		readonly prototype: NSXClusterDatastoreInfoDto;
	}

	declare const NSXClusterDatastoreInfoDto: NSXClusterDatastoreInfoDtoConstructor;

	interface NSXClusterDeploymentConfigDto
	{
		readonly clusterId: String;
		readonly datastore: String;
		readonly services: java.util.List;

	}

	interface NSXClusterDeploymentConfigDtoConstructor {
		new(value?:any): NSXClusterDeploymentConfigDto;
		readonly prototype: NSXClusterDeploymentConfigDto;
	}

	declare const NSXClusterDeploymentConfigDto: NSXClusterDeploymentConfigDtoConstructor;

	interface NSXClusterDeploymentConfigsDto
	{
		readonly configs: java.util.List;

	}

	interface NSXClusterDeploymentConfigsDtoConstructor {
		new(value?:any): NSXClusterDeploymentConfigsDto;
		readonly prototype: NSXClusterDeploymentConfigsDto;
	}

	declare const NSXClusterDeploymentConfigsDto: NSXClusterDeploymentConfigsDtoConstructor;

	interface NSXClusterDto
	{
		readonly clusterId: String;
		readonly clusterName: String;
		readonly datacenterId: String;
		readonly datacenterName: String;
		readonly firewallStatus: String;

	}

	interface NSXClusterDtoConstructor {
		new(value?:any): NSXClusterDto;
		readonly prototype: NSXClusterDto;
	}

	declare const NSXClusterDto: NSXClusterDtoConstructor;

	interface NSXClusterMappingDto
	{
		readonly cluster: NSXBasicDomainObjectInfo;
		readonly mappingSpec: NSXClusterMappingSpecDto;

	}

	interface NSXClusterMappingDtoConstructor {
		new(value?:any): NSXClusterMappingDto;
		readonly prototype: NSXClusterMappingDto;
	}

	declare const NSXClusterMappingDto: NSXClusterMappingDtoConstructor;

	interface NSXClusterMappingListDto
	{
		readonly mappings: java.util.List;

	}

	interface NSXClusterMappingListDtoConstructor {
		new(value?:any): NSXClusterMappingListDto;
		readonly prototype: NSXClusterMappingListDto;
	}

	declare const NSXClusterMappingListDto: NSXClusterMappingListDtoConstructor;

	interface NSXClusterMappingSpecDto
	{
		readonly ipPoolId: String;
		readonly switchObj: NSXBasicDomainObjectInfo;
		readonly vlanId: int;
		readonly vmknicCount: int;

	}

	interface NSXClusterMappingSpecDtoConstructor {
		new(value?:any): NSXClusterMappingSpecDto;
		readonly prototype: NSXClusterMappingSpecDto;
	}

	declare const NSXClusterMappingSpecDto: NSXClusterMappingSpecDtoConstructor;

	interface NSXClustersDto
	{
		readonly clusters: java.util.Set;

	}

	interface NSXClustersDtoConstructor {
		new(value?:any): NSXClustersDto;
		readonly prototype: NSXClustersDto;
	}

	declare const NSXClustersDto: NSXClustersDtoConstructor;

	interface NSXClusterSummariesDto
	{
		readonly clusterSummaries: java.util.List;

	}

	interface NSXClusterSummariesDtoConstructor {
		new(value?:any): NSXClusterSummariesDto;
		readonly prototype: NSXClusterSummariesDto;
	}

	declare const NSXClusterSummariesDto: NSXClusterSummariesDtoConstructor;

	interface NSXClusterSummaryDto
	{
		readonly cluster: NSXBasicDomainObjectInfo;
		readonly dataStore: java.util.Collection;
		readonly deployedServices: java.util.List;
		readonly newServices: java.util.List;
		readonly upgradeServices: java.util.List;

	}

	interface NSXClusterSummaryDtoConstructor {
		new(value?:any): NSXClusterSummaryDto;
		readonly prototype: NSXClusterSummaryDto;
	}

	declare const NSXClusterSummaryDto: NSXClusterSummaryDtoConstructor;

	interface NSXCMConfigDto
	{
		readonly certificateThumbprint: String;
		readonly componentManagerUrl: String;
		readonly id: String;
		readonly ssoAdminUserName: String;
		readonly ssoAdminUserPasswd: String;

	}

	interface NSXCMConfigDtoConstructor {
		new(value?:any): NSXCMConfigDto;
		readonly prototype: NSXCMConfigDto;
	}

	declare const NSXCMConfigDto: NSXCMConfigDtoConstructor;

	interface NSXCMConfigStatusDto
	{
		readonly message: String;
		readonly status: boolean;

	}

	interface NSXCMConfigStatusDtoConstructor {
		new(value?:any): NSXCMConfigStatusDto;
		readonly prototype: NSXCMConfigStatusDto;
	}

	declare const NSXCMConfigStatusDto: NSXCMConfigStatusDtoConstructor;

	interface NSXConfigDto
	{
		readonly sslEnabled: boolean;

	}

	interface NSXConfigDtoConstructor {
		new(value?:any): NSXConfigDto;
		readonly prototype: NSXConfigDto;
	}

	declare const NSXConfigDto: NSXConfigDtoConstructor;

	interface NSXConfigPermissionsDto
	{
		readonly configurationPermission: boolean;
		readonly installPermission: boolean;
		readonly uninstallPermission: boolean;
		readonly upgradePermission: boolean;

	}

	interface NSXConfigPermissionsDtoConstructor {
		new(value?:any): NSXConfigPermissionsDto;
		readonly prototype: NSXConfigPermissionsDto;
	}

	declare const NSXConfigPermissionsDto: NSXConfigPermissionsDtoConstructor;

	interface NSXConflictResolverInfoDto
	{
		readonly agencyAction: String;
		readonly deploymentUnitAction: String;

	}

	interface NSXConflictResolverInfoDtoConstructor {
		new(value?:any): NSXConflictResolverInfoDto;
		readonly prototype: NSXConflictResolverInfoDto;
	}

	declare const NSXConflictResolverInfoDto: NSXConflictResolverInfoDtoConstructor;

	interface NSXConnection
	{
		readonly connTimeout: int;
		readonly displayName: String;
		readonly id: String;
		readonly name: String;
		readonly relatedNsxManagers: String[];
		readonly retryCount: int;
		readonly role: String;
		readonly url: String;
		readonly username: String;
		readonly version: String;

	}

	interface NSXConnectionConstructor {
		new(value?:any): NSXConnection;
		readonly prototype: NSXConnection;
	}

	declare const NSXConnection: NSXConnectionConstructor;

	interface NSXConnectionManager
	{

		clearAllConnections(): void;
		createNSXConnnection(name?: String, username?: String, password?: String, url?: String, retryCount?: int, connTimeout?: int): NSXConnection;
		findConnectionById(id?: String): NSXConnection;
		findConnectionByName(name?: String): NSXConnection;
		syncNsxConnection(connection?: NSXConnection): NSXConnection;
	}

	declare const NSXConnectionManager: NSXConnectionManager;

	interface NSXConnectionsDto
	{
		readonly value: int;

	}

	interface NSXConnectionsDtoConstructor {
		new(value?:any): NSXConnectionsDto;
		readonly prototype: NSXConnectionsDto;
	}

	declare const NSXConnectionsDto: NSXConnectionsDtoConstructor;

	interface NSXControlController
	{

	}

	declare const NSXControlController: NSXControlController;

	interface NSXController
	{

	}

	declare const NSXController: NSXController;

	interface NSXControllerCreationAdvisor
	{

	}

	declare const NSXControllerCreationAdvisor: NSXControllerCreationAdvisor;

	interface NSXControllerCredentialDto
	{

	}

	declare const NSXControllerCredentialDto: NSXControllerCredentialDto;

	interface NSXControllerDao
	{

	}

	declare const NSXControllerDao: NSXControllerDao;

	interface NSXControllerDeploymentInfo
	{

	}

	declare const NSXControllerDeploymentInfo: NSXControllerDeploymentInfo;

	interface NSXControllerDeploymentInfoDto
	{

	}

	declare const NSXControllerDeploymentInfoDto: NSXControllerDeploymentInfoDto;

	interface NSXControllerDeploymentInfoListDto
	{

	}

	declare const NSXControllerDeploymentInfoListDto: NSXControllerDeploymentInfoListDto;

	interface NSXControllerDeploymentResult
	{

	}

	declare const NSXControllerDeploymentResult: NSXControllerDeploymentResult;

	interface NSXControllerFacadeImpl
	{

	}

	declare const NSXControllerFacadeImpl: NSXControllerFacadeImpl;

	interface NSXControllerInfo
	{

	}

	declare const NSXControllerInfo: NSXControllerInfo;

	interface NSXControllerInfoDto
	{

	}

	declare const NSXControllerInfoDto: NSXControllerInfoDto;

	interface NSXControllerInfoHandler
	{

	}

	declare const NSXControllerInfoHandler: NSXControllerInfoHandler;

	interface NSXControllerInfoListDto
	{

	}

	declare const NSXControllerInfoListDto: NSXControllerInfoListDto;

	interface NSXControllerInfoRequest
	{

	}

	declare const NSXControllerInfoRequest: NSXControllerInfoRequest;

	interface NSXControllerInfoResponse
	{

	}

	declare const NSXControllerInfoResponse: NSXControllerInfoResponse;

	interface NSXControllerLogCache
	{

	}

	declare const NSXControllerLogCache: NSXControllerLogCache;

	interface NSXControllerModuleDto
	{

	}

	declare const NSXControllerModuleDto: NSXControllerModuleDto;

	interface NSXControllerPasswordStrength
	{

	}

	declare const NSXControllerPasswordStrength: NSXControllerPasswordStrength;

	interface NSXControllerPoweronAdvisor
	{

	}

	declare const NSXControllerPoweronAdvisor: NSXControllerPoweronAdvisor;

	interface NSXControllerRefDto
	{

	}

	declare const NSXControllerRefDto: NSXControllerRefDto;

	interface NSXControllerRegistryImpl
	{

	}

	declare const NSXControllerRegistryImpl: NSXControllerRegistryImpl;

	interface NSXControllerServiceImpl
	{

	}

	declare const NSXControllerServiceImpl: NSXControllerServiceImpl;

	interface NSXControllerSpec
	{

	}

	declare const NSXControllerSpec: NSXControllerSpec;

	interface NSXControllerSpecDto
	{

	}

	declare const NSXControllerSpecDto: NSXControllerSpecDto;

	interface NSXControllerStatus
	{

	}

	declare const NSXControllerStatus: NSXControllerStatus;

	interface NSXControllerSyslogServerDto
	{

	}

	declare const NSXControllerSyslogServerDto: NSXControllerSyslogServerDto;

	interface NSXControllerUtils
	{

	}

	declare const NSXControllerUtils: NSXControllerUtils;

	interface NSXControllerValidator
	{

	}

	declare const NSXControllerValidator: NSXControllerValidator;

	interface NSXControllerVersionDto
	{

	}

	declare const NSXControllerVersionDto: NSXControllerVersionDto;

	interface NSXControllerVersionsDto
	{

	}

	declare const NSXControllerVersionsDto: NSXControllerVersionsDto;

	interface NSXControlNodeRoleConfig
	{
		readonly listen_addr: String;
		readonly role: String;

	}

	interface NSXControlNodeRoleConfigConstructor {
		new(value?:any): NSXControlNodeRoleConfig;
		readonly prototype: NSXControlNodeRoleConfig;
	}

	declare const NSXControlNodeRoleConfig: NSXControlNodeRoleConfigConstructor;

	interface NSXConverterUtil
	{

		serialize(obj?: Object, format?: String): String;
	}

	declare const NSXConverterUtil: NSXConverterUtil;

	interface NSXCPUDto
	{
		readonly percentValue: int;

	}

	interface NSXCPUDtoConstructor {
		new(value?:any): NSXCPUDto;
		readonly prototype: NSXCPUDto;
	}

	declare const NSXCPUDto: NSXCPUDtoConstructor;

	interface NSXCrlDto
	{
		readonly clientHandle: String;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly issuerCn: String;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly pemEncoding: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly type: NSXObjectTypeDto;
		readonly vsmUuid: String;
		readonly x509Crl: NSXX509CrlDto;

	}

	interface NSXCrlDtoConstructor {
		new(value?:any): NSXCrlDto;
		readonly prototype: NSXCrlDto;
	}

	declare const NSXCrlDto: NSXCrlDtoConstructor;

	interface NSXCrlListDto
	{
		readonly crls: java.util.List;

	}

	interface NSXCrlListDtoConstructor {
		new(value?:any): NSXCrlListDto;
		readonly prototype: NSXCrlListDto;
	}

	declare const NSXCrlListDto: NSXCrlListDtoConstructor;

	interface NSXCsrDto
	{
		readonly algorithm: String;
		readonly clientHandle: String;
		readonly cn: String;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly keySize: String;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly pemEncoding: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly subject: NSXPrincipalDto;
		readonly type: NSXObjectTypeDto;
		readonly vsmUuid: String;

	}

	interface NSXCsrDtoConstructor {
		new(value?:any): NSXCsrDto;
		readonly prototype: NSXCsrDto;
	}

	declare const NSXCsrDto: NSXCsrDtoConstructor;

	interface NSXCsrListDto
	{
		readonly csrs: java.util.List;

	}

	interface NSXCsrListDtoConstructor {
		new(value?:any): NSXCsrListDto;
		readonly prototype: NSXCsrListDto;
	}

	declare const NSXCsrListDto: NSXCsrListDtoConstructor;

	interface NSXDashboardController
	{

		getDashboardStatisticsForAllServiceV3(connection?: NSXConnection, edgeId?: String, interval?: String): NSXDashboardStatsDto;
		getDashboardStatisticsForFirewallV3(connection?: NSXConnection, edgeId?: String, interval?: String): NSXDashboardStatsDto;
		getDashboardStatisticsForInterfaceV3(connection?: NSXConnection, edgeId?: String, interval?: String): NSXDashboardStatsDto;
		getDashboardStatisticsForIpsecV3(connection?: NSXConnection, edgeId?: String, interval?: String): NSXDashboardStatsDto;
		getDashboardStatisticsForLoadBalancerV3(connection?: NSXConnection, edgeId?: String, interval?: String): NSXDashboardStatsDto;
		getDashboardStatisticsForSslvpnV3(connection?: NSXConnection, edgeId?: String, interval?: String): NSXDashboardStatsDto;
	}

	declare const NSXDashboardController: NSXDashboardController;

	interface NSXDashboardDataDto
	{
		readonly firewall: NSXDashboardFirewallStatDto;
		readonly interfaces: NSXDashboardInterfaceStatDto;
		readonly ipsec: NSXDashboardIpsecStatDto;
		readonly loadBalancer: NSXDashboardLoadBalancerStatDto;
		readonly sslvpn: NSXDashboardSslvpnStatDto;

	}

	interface NSXDashboardDataDtoConstructor {
		new(value?:any): NSXDashboardDataDto;
		readonly prototype: NSXDashboardDataDto;
	}

	declare const NSXDashboardDataDto: NSXDashboardDataDtoConstructor;

	interface NSXDashboardFirewallStatDto
	{
		readonly connections: java.util.List;

	}

	interface NSXDashboardFirewallStatDtoConstructor {
		new(value?:any): NSXDashboardFirewallStatDto;
		readonly prototype: NSXDashboardFirewallStatDto;
	}

	declare const NSXDashboardFirewallStatDto: NSXDashboardFirewallStatDtoConstructor;

	interface NSXDashboardInterfaceStatDto
	{
		readonly VNic_0_in_byte: java.util.List;
		readonly VNic_0_in_pkt: java.util.List;
		readonly VNic_0_out_byte: java.util.List;
		readonly VNic_0_out_pkt: java.util.List;
		readonly VNic_1_in_byte: java.util.List;
		readonly VNic_1_in_pkt: java.util.List;
		readonly VNic_1_out_byte: java.util.List;
		readonly VNic_1_out_pkt: java.util.List;
		readonly VNic_2_in_byte: java.util.List;
		readonly VNic_2_in_pkt: java.util.List;
		readonly VNic_2_out_byte: java.util.List;
		readonly VNic_2_out_pkt: java.util.List;
		readonly VNic_3_in_byte: java.util.List;
		readonly VNic_3_in_pkt: java.util.List;
		readonly VNic_3_out_byte: java.util.List;
		readonly VNic_3_out_pkt: java.util.List;
		readonly VNic_4_in_byte: java.util.List;
		readonly VNic_4_in_pkt: java.util.List;
		readonly VNic_4_out_byte: java.util.List;
		readonly VNic_4_out_pkt: java.util.List;
		readonly VNic_5_in_byte: java.util.List;
		readonly VNic_5_in_pkt: java.util.List;
		readonly VNic_5_out_byte: java.util.List;
		readonly VNic_5_out_pkt: java.util.List;
		readonly VNic_6_in_byte: java.util.List;
		readonly VNic_6_in_pkt: java.util.List;
		readonly VNic_6_out_byte: java.util.List;
		readonly VNic_6_out_pkt: java.util.List;
		readonly VNic_7_in_byte: java.util.List;
		readonly VNic_7_in_pkt: java.util.List;
		readonly VNic_7_out_byte: java.util.List;
		readonly VNic_7_out_pkt: java.util.List;
		readonly VNic_8_in_byte: java.util.List;
		readonly VNic_8_in_pkt: java.util.List;
		readonly VNic_8_out_byte: java.util.List;
		readonly VNic_8_out_pkt: java.util.List;
		readonly VNic_9_in_byte: java.util.List;
		readonly VNic_9_in_pkt: java.util.List;
		readonly VNic_9_out_byte: java.util.List;
		readonly VNic_9_out_pkt: java.util.List;

	}

	interface NSXDashboardInterfaceStatDtoConstructor {
		new(value?:any): NSXDashboardInterfaceStatDto;
		readonly prototype: NSXDashboardInterfaceStatDto;
	}

	declare const NSXDashboardInterfaceStatDto: NSXDashboardInterfaceStatDtoConstructor;

	interface NSXDashboardIpsecStatDto
	{
		readonly ipsecBytesIn: java.util.List;
		readonly ipsecBytesOut: java.util.List;
		readonly ipsecTunnels: java.util.List;

	}

	interface NSXDashboardIpsecStatDtoConstructor {
		new(value?:any): NSXDashboardIpsecStatDto;
		readonly prototype: NSXDashboardIpsecStatDto;
	}

	declare const NSXDashboardIpsecStatDto: NSXDashboardIpsecStatDtoConstructor;

	interface NSXDashboardLoadBalancerStatDto
	{
		readonly lbBpsIn: java.util.List;
		readonly lbBpsOut: java.util.List;
		readonly lbHttpReqs: java.util.List;
		readonly lbSessions: java.util.List;

	}

	interface NSXDashboardLoadBalancerStatDtoConstructor {
		new(value?:any): NSXDashboardLoadBalancerStatDto;
		readonly prototype: NSXDashboardLoadBalancerStatDto;
	}

	declare const NSXDashboardLoadBalancerStatDto: NSXDashboardLoadBalancerStatDtoConstructor;

	interface NSXDashboardSslvpnStatDto
	{
		readonly activeClients: java.util.List;
		readonly authFailures: java.util.List;
		readonly sessionsCreated: java.util.List;
		readonly sslvpnBytesIn: java.util.List;
		readonly sslvpnBytesOut: java.util.List;

	}

	interface NSXDashboardSslvpnStatDtoConstructor {
		new(value?:any): NSXDashboardSslvpnStatDto;
		readonly prototype: NSXDashboardSslvpnStatDto;
	}

	declare const NSXDashboardSslvpnStatDto: NSXDashboardSslvpnStatDtoConstructor;

	interface NSXDashboardStatDto
	{
		readonly timestamp: long;
		readonly value: Double;

	}

	interface NSXDashboardStatDtoConstructor {
		new(value?:any): NSXDashboardStatDto;
		readonly prototype: NSXDashboardStatDto;
	}

	declare const NSXDashboardStatDto: NSXDashboardStatDtoConstructor;

	interface NSXDashboardStatsDto
	{
		readonly dataDto: NSXDashboardDataDto;
		readonly metaDto: NSXMetaDto;

	}

	interface NSXDashboardStatsDtoConstructor {
		new(value?:any): NSXDashboardStatsDto;
		readonly prototype: NSXDashboardStatsDto;
	}

	declare const NSXDashboardStatsDto: NSXDashboardStatsDtoConstructor;

	interface NSXDashboardStatsEntryDto
	{
		readonly activeClients: Double;
		readonly authFailures: Double;
		readonly connections: Double;
		readonly ipsecBytesIn: Double;
		readonly ipsecBytesOut: Double;
		readonly ipsecTunnels: Double;
		readonly lbBpsIn: Double;
		readonly lbBpsOut: Double;
		readonly lbHttpReqs: Double;
		readonly lbSessions: Double;
		readonly sessionsCreated: Double;
		readonly sslvpnBytesIn: Double;
		readonly sslvpnBytesOut: Double;
		readonly timeStamp: long;
		readonly VNic_0_in_byte: Double;
		readonly VNic_0_in_pkt: Double;
		readonly VNic_0_out_byte: Double;
		readonly VNic_0_out_pkt: Double;
		readonly VNic_1_in_byte: Double;
		readonly VNic_1_in_pkt: Double;
		readonly VNic_1_out_byte: Double;
		readonly VNic_1_out_pkt: Double;
		readonly VNic_2_in_byte: Double;
		readonly VNic_2_in_pkt: Double;
		readonly VNic_2_out_byte: Double;
		readonly VNic_2_out_pkt: Double;
		readonly VNic_3_in_byte: Double;
		readonly VNic_3_in_pkt: Double;
		readonly VNic_3_out_byte: Double;
		readonly VNic_3_out_pkt: Double;
		readonly VNic_4_in_byte: Double;
		readonly VNic_4_in_pkt: Double;
		readonly VNic_4_out_byte: Double;
		readonly VNic_4_out_pkt: Double;
		readonly VNic_5_in_byte: Double;
		readonly VNic_5_in_pkt: Double;
		readonly VNic_5_out_byte: Double;
		readonly VNic_5_out_pkt: Double;
		readonly VNic_6_in_byte: Double;
		readonly VNic_6_in_pkt: Double;
		readonly VNic_6_out_byte: Double;
		readonly VNic_6_out_pkt: Double;
		readonly VNic_7_in_byte: Double;
		readonly VNic_7_in_pkt: Double;
		readonly VNic_7_out_byte: Double;
		readonly VNic_7_out_pkt: Double;
		readonly VNic_8_in_byte: Double;
		readonly VNic_8_in_pkt: Double;
		readonly VNic_8_out_byte: Double;
		readonly VNic_8_out_pkt: Double;
		readonly VNic_9_in_byte: Double;
		readonly VNic_9_in_pkt: Double;
		readonly VNic_9_out_byte: Double;
		readonly VNic_9_out_pkt: Double;

	}

	interface NSXDashboardStatsEntryDtoConstructor {
		new(value?:any): NSXDashboardStatsEntryDto;
		readonly prototype: NSXDashboardStatsEntryDto;
	}

	declare const NSXDashboardStatsEntryDto: NSXDashboardStatsEntryDtoConstructor;

	interface NSXDashboardStatsEntryListDto
	{
		readonly entries: java.util.List;
		readonly meta: NSXMetaDto;

	}

	interface NSXDashboardStatsEntryListDtoConstructor {
		new(value?:any): NSXDashboardStatsEntryListDto;
		readonly prototype: NSXDashboardStatsEntryListDto;
	}

	declare const NSXDashboardStatsEntryListDto: NSXDashboardStatsEntryListDtoConstructor;

	interface NSXDatacenterInv
	{
		readonly displayName: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;

	}

	interface NSXDatacenterInvConstructor {
		new(value?:any): NSXDatacenterInv;
		readonly prototype: NSXDatacenterInv;
	}

	declare const NSXDatacenterInv: NSXDatacenterInvConstructor;

	interface NSXDatacenterManager
	{

		getDatacenters(connection?: NSXConnection): NSXResource[];
	}

	declare const NSXDatacenterManager: NSXDatacenterManager;

	interface NSXDatacenterStateDto
	{
		readonly datacenterId: String;
		readonly status: String;
		readonly timestamp: long;
		readonly userId: String;

	}

	interface NSXDatacenterStateDtoConstructor {
		new(value?:any): NSXDatacenterStateDto;
		readonly prototype: NSXDatacenterStateDto;
	}

	declare const NSXDatacenterStateDto: NSXDatacenterStateDtoConstructor;

	interface NSXDataChangeNotificationDto
	{
		readonly properties: java.util.List;
		readonly reference: NSXObjectReference;
		readonly type: String;

	}

	interface NSXDataChangeNotificationDtoConstructor {
		new(value?:any): NSXDataChangeNotificationDto;
		readonly prototype: NSXDataChangeNotificationDto;
	}

	declare const NSXDataChangeNotificationDto: NSXDataChangeNotificationDtoConstructor;

	interface NSXDataChangeNotificationTypeDto
	{

	}

	interface NSXDataChangeNotificationTypeDtoConstructor {
		new(value?:any): NSXDataChangeNotificationTypeDto;
		readonly prototype: NSXDataChangeNotificationTypeDto;
	}

	declare const NSXDataChangeNotificationTypeDto: NSXDataChangeNotificationTypeDtoConstructor;

	interface NSXDataDto
	{
		readonly VNic_0: java.util.List;
		readonly VNic_1: java.util.List;
		readonly VNic_2: java.util.List;
		readonly VNic_3: java.util.List;
		readonly VNic_4: java.util.List;
		readonly VNic_5: java.util.List;
		readonly VNic_6: java.util.List;
		readonly VNic_7: java.util.List;
		readonly VNic_8: java.util.List;
		readonly VNic_9: java.util.List;

	}

	interface NSXDataDtoConstructor {
		new(value?:any): NSXDataDto;
		readonly prototype: NSXDataDto;
	}

	declare const NSXDataDto: NSXDataDtoConstructor;

	interface NSXDataPage
	{
		readonly data: java.util.List;
		readonly pagingInfo: NSXPagingInfo;

	}

	interface NSXDataPageConstructor {
		new(value?:any): NSXDataPage;
		readonly prototype: NSXDataPage;
	}

	declare const NSXDataPage: NSXDataPageConstructor;

	interface NSXDataPermissionsDto
	{
		readonly publishPermission: boolean;
		readonly savePermission: boolean;

	}

	interface NSXDataPermissionsDtoConstructor {
		new(value?:any): NSXDataPermissionsDto;
		readonly prototype: NSXDataPermissionsDto;
	}

	declare const NSXDataPermissionsDto: NSXDataPermissionsDtoConstructor;

	interface NSXDateTimeDto
	{
		readonly ntpServer: String;

	}

	interface NSXDateTimeDtoConstructor {
		new(value?:any): NSXDateTimeDto;
		readonly prototype: NSXDateTimeDto;
	}

	declare const NSXDateTimeDto: NSXDateTimeDtoConstructor;

	interface NSXDefaultPolicyDto
	{
		readonly action: String;
		readonly loggingEnabled: boolean;

	}

	interface NSXDefaultPolicyDtoConstructor {
		new(value?:any): NSXDefaultPolicyDto;
		readonly prototype: NSXDefaultPolicyDto;
	}

	declare const NSXDefaultPolicyDto: NSXDefaultPolicyDtoConstructor;

	interface NSXDefaultRoute
	{
		readonly gatewayIpAddress: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly vNicIndex: String;

	}

	interface NSXDefaultRouteConstructor {
		new(value?:any): NSXDefaultRoute;
		readonly prototype: NSXDefaultRoute;
	}

	declare const NSXDefaultRoute: NSXDefaultRouteConstructor;

	interface NSXDefaultRouteBaseDto
	{
		readonly description: String;
		readonly mtu: Integer;
		readonly vnic: String;

	}

	interface NSXDefaultRouteBaseDtoConstructor {
		new(value?:any): NSXDefaultRouteBaseDto;
		readonly prototype: NSXDefaultRouteBaseDto;
	}

	declare const NSXDefaultRouteBaseDto: NSXDefaultRouteBaseDtoConstructor;

	interface NSXDefaultRouteDto
	{
		readonly description: String;
		readonly gatewayAddress: String;
		readonly mtu: Integer;
		readonly vnic: String;

	}

	interface NSXDefaultRouteDtoConstructor {
		new(value?:any): NSXDefaultRouteDto;
		readonly prototype: NSXDefaultRouteDto;
	}

	declare const NSXDefaultRouteDto: NSXDefaultRouteDtoConstructor;

	interface NSXDefaultRouteTrinityDto
	{
		readonly description: String;
		readonly gatewayAddress: String;
		readonly mtu: Integer;
		readonly vnic: String;

	}

	interface NSXDefaultRouteTrinityDtoConstructor {
		new(value?:any): NSXDefaultRouteTrinityDto;
		readonly prototype: NSXDefaultRouteTrinityDto;
	}

	declare const NSXDefaultRouteTrinityDto: NSXDefaultRouteTrinityDtoConstructor;

	interface NSXDependsOnServicesDto
	{
		readonly services: java.util.List;

	}

	interface NSXDependsOnServicesDtoConstructor {
		new(value?:any): NSXDependsOnServicesDto;
		readonly prototype: NSXDependsOnServicesDto;
	}

	declare const NSXDependsOnServicesDto: NSXDependsOnServicesDtoConstructor;

	interface NSXDeployInfoDto
	{
		readonly controllerId: String;
		readonly exceptionMessage: String;
		readonly progress: Integer;
		readonly status: String;
		readonly vmId: String;

	}

	interface NSXDeployInfoDtoConstructor {
		new(value?:any): NSXDeployInfoDto;
		readonly prototype: NSXDeployInfoDto;
	}

	declare const NSXDeployInfoDto: NSXDeployInfoDtoConstructor;

	interface NSXDeployInfoListDto
	{
		readonly list: java.util.List;

	}

	interface NSXDeployInfoListDtoConstructor {
		new(value?:any): NSXDeployInfoListDto;
		readonly prototype: NSXDeployInfoListDto;
	}

	declare const NSXDeployInfoListDto: NSXDeployInfoListDtoConstructor;

	interface NSXDeploymentConfigController
	{

		acknowledgePartnerNotificationV2(connection?: NSXConnection, deploymentnotificationsdto?: NSXDeploymentNotificationsDto, action?: String): void;
		deployServicesV2(connection?: NSXConnection, startTime?: String, clusterdeploymentconfigsdto?: NSXClusterDeploymentConfigsDto, ignoreDependency?: boolean): String;
		getAllServicesV2(connection?: NSXConnection): NSXDeploymentUnitsDto;
		getDependsOnServiceV2(connection?: NSXConnection, sid?: String): NSXDependsOnServicesDto;
		getDeployedServiceInfoV2(connection?: NSXConnection, id?: String, sid?: String): NSXDeploymentUnitDto;
		getDeployedServicesV2(connection?: NSXConnection, id?: String): NSXDeploymentUnitsDto;
		getServiceStatusV2(connection?: NSXConnection, sid?: String): NSXDeploymentUnitsDto;
		removeServiceFromClustersV2(connection?: NSXConnection, id?: String, startTime?: String, clusters?: String, ignoreDependency?: boolean): void;
		removeServicesV2(connection?: NSXConnection, id?: String, startTime?: String, services?: String, ignoreDependency?: boolean): void;
		upgradeServicesV2(connection?: NSXConnection, startTime?: String, clusterdeploymentconfigsdto?: NSXClusterDeploymentConfigsDto): void;
	}

	declare const NSXDeploymentConfigController: NSXDeploymentConfigController;

	interface NSXDeploymentContainerBasicController
	{

		createDeploymentContainerV4(connection?: NSXConnection, deploymentcontainerdto?: NSXDeploymentContainerDto): String;
	}

	declare const NSXDeploymentContainerBasicController: NSXDeploymentContainerBasicController;

	interface NSXDeploymentContainerController
	{

		createGlobalDeploymentContainerV4(connection?: NSXConnection, deploymentcontainerdto?: NSXDeploymentContainerDto): String;
		deleteDeploymentContainerV4(connection?: NSXConnection, id?: String): void;
		deleteGlobalDeploymentContainerV4(connection?: NSXConnection): void;
		getDeploymentContainerV4(connection?: NSXConnection, id?: String): NSXDeploymentContainerDto;
		getGlobalDeploymentContainerV4(connection?: NSXConnection): NSXDeploymentContainerDto;
		updateDeploymentContainerV4(connection?: NSXConnection, id?: String, deploymentcontainerdto?: NSXDeploymentContainerDto): void;
		updateGlobalDeploymentContainerV4(connection?: NSXConnection, deploymentcontainerdto?: NSXDeploymentContainerDto): void;
	}

	declare const NSXDeploymentContainerController: NSXDeploymentContainerController;

	interface NSXDeploymentContainerDto
	{
		readonly description: String;
		readonly hypervisorType: String;
		readonly id: String;
		readonly keyValue: java.util.List;
		readonly name: String;
		readonly revision: long;

	}

	interface NSXDeploymentContainerDtoConstructor {
		new(value?:any): NSXDeploymentContainerDto;
		readonly prototype: NSXDeploymentContainerDto;
	}

	declare const NSXDeploymentContainerDto: NSXDeploymentContainerDtoConstructor;

	interface NSXDeploymentNotificationDto
	{
		readonly agents: NSXAgentsDto;
		readonly clusterId: String;

	}

	interface NSXDeploymentNotificationDtoConstructor {
		new(value?:any): NSXDeploymentNotificationDto;
		readonly prototype: NSXDeploymentNotificationDto;
	}

	declare const NSXDeploymentNotificationDto: NSXDeploymentNotificationDtoConstructor;

	interface NSXDeploymentNotificationsDto
	{
		readonly notifications: java.util.List;
		readonly serviceId: String;
		readonly serviceInstanceId: String;

	}

	interface NSXDeploymentNotificationsDtoConstructor {
		new(value?:any): NSXDeploymentNotificationsDto;
		readonly prototype: NSXDeploymentNotificationsDto;
	}

	declare const NSXDeploymentNotificationsDto: NSXDeploymentNotificationsDtoConstructor;

	interface NSXDeploymentUnitConflictInfoDto
	{
		readonly cluster: NSXBasicDomainObjectInfo;
		readonly deploymentUnitId: String;
		readonly serviceId: String;
		readonly serviceName: String;

	}

	interface NSXDeploymentUnitConflictInfoDtoConstructor {
		new(value?:any): NSXDeploymentUnitConflictInfoDto;
		readonly prototype: NSXDeploymentUnitConflictInfoDto;
	}

	declare const NSXDeploymentUnitConflictInfoDto: NSXDeploymentUnitConflictInfoDtoConstructor;

	interface NSXDeploymentUnitDto
	{
		readonly cluster: NSXBasicDomainObjectInfo;
		readonly datastore: NSXBasicDomainObjectInfo;
		readonly deploymentUnitId: String;
		readonly dvPortGroup: NSXBasicDomainObjectInfo;
		readonly installedVersion: String;
		readonly internalService: boolean;
		readonly ipPool: NSXBasicDomainObjectInfo;
		readonly operationalStatus: String;
		readonly progressStatus: String;
		readonly serviceId: String;
		readonly serviceName: String;
		readonly serviceStatus: String;
		readonly upgradeAvailable: boolean;
		readonly upgradeNeedsNetworkAndDsSettings: boolean;
		readonly vibOnlyAgency: boolean;
		readonly visibleInFabricUI: boolean;

	}

	interface NSXDeploymentUnitDtoConstructor {
		new(value?:any): NSXDeploymentUnitDto;
		readonly prototype: NSXDeploymentUnitDto;
	}

	declare const NSXDeploymentUnitDto: NSXDeploymentUnitDtoConstructor;

	interface NSXDeploymentUnitsConflictInfoDto
	{
		readonly allowedOperations: java.util.List;
		readonly deploymentUnitsInfo: java.util.List;

	}

	interface NSXDeploymentUnitsConflictInfoDtoConstructor {
		new(value?:any): NSXDeploymentUnitsConflictInfoDto;
		readonly prototype: NSXDeploymentUnitsConflictInfoDto;
	}

	declare const NSXDeploymentUnitsConflictInfoDto: NSXDeploymentUnitsConflictInfoDtoConstructor;

	interface NSXDeploymentUnitsDto
	{
		readonly deploymentUnits: java.util.List;

	}

	interface NSXDeploymentUnitsDtoConstructor {
		new(value?:any): NSXDeploymentUnitsDto;
		readonly prototype: NSXDeploymentUnitsDto;
	}

	declare const NSXDeploymentUnitsDto: NSXDeploymentUnitsDtoConstructor;

	interface NSXDhcpConfigDto
	{
		readonly enabled: boolean;
		readonly ipPools: NSXIPPoolsDto;
		readonly logging: NSXLoggingDto;
		readonly staticBindings: NSXStaticBindingsDto;
		readonly template: String;
		readonly version: long;

	}

	interface NSXDhcpConfigDtoConstructor {
		new(value?:any): NSXDhcpConfigDto;
		readonly prototype: NSXDhcpConfigDto;
	}

	declare const NSXDhcpConfigDto: NSXDhcpConfigDtoConstructor;

	interface NSXDhcpConfigTrinityDto
	{
		readonly enabled: boolean;
		readonly ipPools: NSXIPPoolsTrinityDto;
		readonly logging: NSXLoggingDto;
		readonly relay: NSXDhcpRelayDto;
		readonly staticBindings: NSXStaticBindingsTrinityDto;
		readonly template: String;
		readonly version: long;

	}

	interface NSXDhcpConfigTrinityDtoConstructor {
		new(value?:any): NSXDhcpConfigTrinityDto;
		readonly prototype: NSXDhcpConfigTrinityDto;
	}

	declare const NSXDhcpConfigTrinityDto: NSXDhcpConfigTrinityDtoConstructor;

	interface NSXDhcpConfigTrinityUIDto
	{
		readonly enabled: boolean;
		readonly ipPools: NSXIPPoolsTrinityDto;
		readonly logging: NSXLoggingDto;
		readonly relay: NSXDhcpRelayUIDto;
		readonly staticBindings: NSXStaticBindingsTrinityDto;
		readonly template: String;
		readonly version: long;

	}

	interface NSXDhcpConfigTrinityUIDtoConstructor {
		new(value?:any): NSXDhcpConfigTrinityUIDto;
		readonly prototype: NSXDhcpConfigTrinityUIDto;
	}

	declare const NSXDhcpConfigTrinityUIDto: NSXDhcpConfigTrinityUIDtoConstructor;

	interface NSXDhcpController
	{

		addDhcpIpPoolV3(connection?: NSXConnection, id?: String, ippooldto?: NSXIPPoolDto): void;
		addDhcpStaticBindingV3(connection?: NSXConnection, id?: String, staticbindingdto?: NSXStaticBindingDto): void;
		configureDhcpV3(connection?: NSXConnection, id?: String, dhcpconfigdto?: NSXDhcpConfigDto): void;
		deleteDhcpConfigV3(connection?: NSXConnection, id?: String): void;
		deleteDhcpIpPoolConfigV3(connection?: NSXConnection, id?: String, poolId?: String): void;
		deleteDhcpStaticBindingConfigV3(connection?: NSXConnection, id?: String, bindingId?: String): void;
		getDhcpConfigV3(connection?: NSXConnection, id?: String): NSXDhcpConfigDto;
		getDhcpLeaseInfoV3(connection?: NSXConnection, id?: String): NSXDhcpLeaseInfoDto;
	}

	declare const NSXDhcpController: NSXDhcpController;

	interface NSXDhcpLeaseInfoDto
	{
		readonly hostLeaseInfosDto: NSXHostLeaseInfosDto;
		readonly timeStamp: long;

	}

	interface NSXDhcpLeaseInfoDtoConstructor {
		new(value?:any): NSXDhcpLeaseInfoDto;
		readonly prototype: NSXDhcpLeaseInfoDto;
	}

	declare const NSXDhcpLeaseInfoDto: NSXDhcpLeaseInfoDtoConstructor;

	interface NSXDhcpPool
	{
		readonly autoConfigureDNS: boolean;
		readonly defaultGateway: String;
		readonly dnsType: String;
		readonly domainName: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly ipRange: String;
		readonly leaseTime: String;
		readonly poolId: String;
		readonly primaryNameServer: String;
		readonly secondaryNameServer: String;

	}

	interface NSXDhcpPoolConstructor {
		new(value?:any): NSXDhcpPool;
		readonly prototype: NSXDhcpPool;
	}

	declare const NSXDhcpPool: NSXDhcpPoolConstructor;

	interface NSXDhcpPools
	{
		readonly dhcpPools: NSXDhcpPool[];

	}

	interface NSXDhcpPoolsConstructor {
		new(value?:any): NSXDhcpPools;
		readonly prototype: NSXDhcpPools;
	}

	declare const NSXDhcpPools: NSXDhcpPoolsConstructor;

	interface NSXDhcpRelayDto
	{
		readonly maxHop: Integer;
		readonly relayAgents: NSXRelayAgentsDto;
		readonly relayServer: NSXRelayServerDto;

	}

	interface NSXDhcpRelayDtoConstructor {
		new(value?:any): NSXDhcpRelayDto;
		readonly prototype: NSXDhcpRelayDto;
	}

	declare const NSXDhcpRelayDto: NSXDhcpRelayDtoConstructor;

	interface NSXDhcpRelayUIDto
	{
		readonly maxHop: Integer;
		readonly relayAgents: NSXRelayAgentsUIDto;
		readonly relayServer: NSXRelayServerUIDto;

	}

	interface NSXDhcpRelayUIDtoConstructor {
		new(value?:any): NSXDhcpRelayUIDto;
		readonly prototype: NSXDhcpRelayUIDto;
	}

	declare const NSXDhcpRelayUIDto: NSXDhcpRelayUIDtoConstructor;

	interface NSXDhcpTrinityController
	{

		addDhcpIpPoolV4(connection?: NSXConnection, id?: String, ippooltrinitydto?: NSXIPPoolTrinityDto): void;
		addDhcpStaticBindingV4(connection?: NSXConnection, id?: String, staticbindingtrinitydto?: NSXStaticBindingTrinityDto): void;
		configureDhcpV4(connection?: NSXConnection, id?: String, dhcpconfigtrinitydto?: NSXDhcpConfigTrinityDto): void;
		configureRelayV4(connection?: NSXConnection, id?: String, dhcprelaydto?: NSXDhcpRelayDto): void;
		deleteDhcpConfigV4(connection?: NSXConnection, id?: String): void;
		deleteDhcpIpPoolConfigV4(connection?: NSXConnection, id?: String, poolId?: String): void;
		deleteDhcpRelayV4(connection?: NSXConnection, id?: String): void;
		deleteDhcpStaticBindingConfigV4(connection?: NSXConnection, id?: String, bindingId?: String): void;
		getDhcpConfigV4(connection?: NSXConnection, id?: String): NSXDhcpConfigTrinityDto;
		getDhcpLeaseInfoV4(connection?: NSXConnection, id?: String): NSXDhcpLeaseInfoDto;
		getDhcpRelayV4(connection?: NSXConnection, id?: String): NSXDhcpRelayDto;
	}

	declare const NSXDhcpTrinityController: NSXDhcpTrinityController;

	interface NSXDnsClientDto
	{
		readonly domainName: java.util.List;
		readonly primaryDns: String;
		readonly secondaryDns: String;

	}

	interface NSXDnsClientDtoConstructor {
		new(value?:any): NSXDnsClientDto;
		readonly prototype: NSXDnsClientDto;
	}

	declare const NSXDnsClientDto: NSXDnsClientDtoConstructor;

	interface NSXDnsConfigDto
	{
		readonly cacheSize: long;
		readonly dnsServers: NSXIpAddressesDto;
		readonly dnsViews: NSXDnsViewsDto;
		readonly dnsZones: NSXDnsZonesDto;
		readonly enabled: boolean;
		readonly listeners: NSXDnsListenersDto;
		readonly logging: NSXLoggingDto;
		readonly template: String;
		readonly version: long;

	}

	interface NSXDnsConfigDtoConstructor {
		new(value?:any): NSXDnsConfigDto;
		readonly prototype: NSXDnsConfigDto;
	}

	declare const NSXDnsConfigDto: NSXDnsConfigDtoConstructor;

	interface NSXDnsController
	{

		addRecordV4(connection?: NSXConnection, edgeId?: String, zoneId?: String, dnsrecorddto?: NSXDnsRecordDto): void;
		addViewV4(connection?: NSXConnection, edgeId?: String, dnsviewdto?: NSXDnsViewDto): void;
		addZoneV4(connection?: NSXConnection, edgeId?: String, dnszonedto?: NSXDnsZoneDto): void;
		deleteDnsConfigV3V3(connection?: NSXConnection, edgeId?: String): void;
		deleteDnsConfigV4V4(connection?: NSXConnection, edgeId?: String): void;
		deleteRecordV4(connection?: NSXConnection, edgeId?: String, zoneId?: String, recordId?: String): void;
		deleteViewV4(connection?: NSXConnection, edgeId?: String, viewId?: String): void;
		deleteZoneV4(connection?: NSXConnection, edgeId?: String, zoneId?: String): void;
		enableDnsServiceV4(connection?: NSXConnection, edgeId?: String, enable?: boolean): void;
		enableViewV4(connection?: NSXConnection, edgeId?: String, viewId?: String, enable?: boolean): void;
		enableZoneV4(connection?: NSXConnection, edgeId?: String, zoneId?: String, enable?: boolean): void;
		getDnsServerConfigV3V3(connection?: NSXConnection, edgeId?: String): NSXDnsConfigDto;
		getDnsServerConfigV4V4(connection?: NSXConnection, edgeId?: String): NSXDnsConfigDto;
		getDnsStatsV3V3(connection?: NSXConnection, edgeId?: String): NSXDnsStatsDto;
		getDnsStatsV4V4(connection?: NSXConnection, edgeId?: String): NSXDnsStatsDto;
		getrecordV4(connection?: NSXConnection, edgeId?: String, zoneId?: String, recordId?: String): NSXDnsRecordDto;
		getViewWithoutZonesV4(connection?: NSXConnection, edgeId?: String, viewId?: String): NSXDnsViewDto;
		getZonesOfViewV4(connection?: NSXConnection, edgeId?: String, viewId?: String): NSXBelongingZonesOfViewtDto;
		getZoneV4(connection?: NSXConnection, edgeId?: String, zoneId?: String): NSXDnsZoneDto;
		updateBelongingViewsOfZoneV4(connection?: NSXConnection, edgeId?: String, zoneId?: String, belongingviewsdto?: NSXBelongingViewsDto): void;
		updateDnsConfigV3V3(connection?: NSXConnection, edgeId?: String, dnsconfigdto?: NSXDnsConfigDto): void;
		updateDnsConfigV4V4(connection?: NSXConnection, edgeId?: String, dnsconfigdto?: NSXDnsConfigDto): void;
		updateRecordV4(connection?: NSXConnection, edgeId?: String, zoneId?: String, recordId?: String, dnsrecorddto?: NSXDnsRecordDto): void;
		updateViewV4(connection?: NSXConnection, edgeId?: String, viewId?: String, dnsviewdto?: NSXDnsViewDto): void;
		updateZoneV4(connection?: NSXConnection, edgeId?: String, zoneId?: String, dnszonedto?: NSXDnsZoneDto): void;
	}

	declare const NSXDnsController: NSXDnsController;

	interface NSXDnsForwardersDto
	{
		readonly ipAddress: java.util.List;

	}

	interface NSXDnsForwardersDtoConstructor {
		new(value?:any): NSXDnsForwardersDto;
		readonly prototype: NSXDnsForwardersDto;
	}

	declare const NSXDnsForwardersDto: NSXDnsForwardersDtoConstructor;

	interface NSXDnsListenersDto
	{
		readonly ipAddress: java.util.List;
		readonly vnic: java.util.List;

	}

	interface NSXDnsListenersDtoConstructor {
		new(value?:any): NSXDnsListenersDto;
		readonly prototype: NSXDnsListenersDto;
	}

	declare const NSXDnsListenersDto: NSXDnsListenersDtoConstructor;

	interface NSXDnsRecordDto
	{
		readonly configSource: String;
		readonly description: String;
		readonly name: String;
		readonly recordId: String;
		readonly recordValues: NSXRecordValuesDto;
		readonly ttl: String;
		readonly type: String;

	}

	interface NSXDnsRecordDtoConstructor {
		new(value?:any): NSXDnsRecordDto;
		readonly prototype: NSXDnsRecordDto;
	}

	declare const NSXDnsRecordDto: NSXDnsRecordDtoConstructor;

	interface NSXDnsRecordsDto
	{
		readonly dnsRecord: java.util.List;

	}

	interface NSXDnsRecordsDtoConstructor {
		new(value?:any): NSXDnsRecordsDto;
		readonly prototype: NSXDnsRecordsDto;
	}

	declare const NSXDnsRecordsDto: NSXDnsRecordsDtoConstructor;

	interface NSXDnsServersDto
	{
		readonly primaryDns: String;
		readonly secondaryDns: String;
		readonly tertiaryDns: String;

	}

	interface NSXDnsServersDtoConstructor {
		new(value?:any): NSXDnsServersDto;
		readonly prototype: NSXDnsServersDto;
	}

	declare const NSXDnsServersDto: NSXDnsServersDtoConstructor;

	interface NSXDnsSoaDto
	{
		readonly email: String;
		readonly expire: String;
		readonly minimumTTL: String;
		readonly MName: String;
		readonly refresh: String;
		readonly retry: String;
		readonly serial: String;
		readonly ttl: String;

	}

	interface NSXDnsSoaDtoConstructor {
		new(value?:any): NSXDnsSoaDto;
		readonly prototype: NSXDnsSoaDto;
	}

	declare const NSXDnsSoaDto: NSXDnsSoaDtoConstructor;

	interface NSXDnsStatsDto
	{
		readonly cachedDBRRSet: long;
		readonly requests: NSXRequestStatsDto;
		readonly responses: NSXResponseStatsDto;
		readonly timeStamp: long;

	}

	interface NSXDnsStatsDtoConstructor {
		new(value?:any): NSXDnsStatsDto;
		readonly prototype: NSXDnsStatsDto;
	}

	declare const NSXDnsStatsDto: NSXDnsStatsDtoConstructor;

	interface NSXDnsViewDto
	{
		readonly enabled: boolean;
		readonly forwarders: NSXDnsForwardersDto;
		readonly name: String;
		readonly recursion: boolean;
		readonly viewId: String;
		readonly viewMatch: NSXViewMatchDto;

	}

	interface NSXDnsViewDtoConstructor {
		new(value?:any): NSXDnsViewDto;
		readonly prototype: NSXDnsViewDto;
	}

	declare const NSXDnsViewDto: NSXDnsViewDtoConstructor;

	interface NSXDnsViewsDto
	{
		readonly dnsView: java.util.List;

	}

	interface NSXDnsViewsDtoConstructor {
		new(value?:any): NSXDnsViewsDto;
		readonly prototype: NSXDnsViewsDto;
	}

	declare const NSXDnsViewsDto: NSXDnsViewsDtoConstructor;

	interface NSXDnsZoneDto
	{
		readonly autoGenerateInverseLookupZone: boolean;
		readonly belongingViews: NSXBelongingViewsDto;
		readonly configSource: String;
		readonly description: String;
		readonly dnsRecords: NSXDnsRecordsDto;
		readonly enabled: boolean;
		readonly forwarders: NSXDnsForwardersDto;
		readonly soa: NSXDnsSoaDto;
		readonly type: String;
		readonly zoneId: String;
		readonly zoneName: String;

	}

	interface NSXDnsZoneDtoConstructor {
		new(value?:any): NSXDnsZoneDto;
		readonly prototype: NSXDnsZoneDto;
	}

	declare const NSXDnsZoneDto: NSXDnsZoneDtoConstructor;

	interface NSXDnsZonesDto
	{
		readonly dnsZone: java.util.List;

	}

	interface NSXDnsZonesDtoConstructor {
		new(value?:any): NSXDnsZonesDto;
		readonly prototype: NSXDnsZonesDto;
	}

	declare const NSXDnsZonesDto: NSXDnsZonesDtoConstructor;

	interface NSXDocController
	{

	}

	declare const NSXDocController: NSXDocController;

	interface NSXDynamicCriteriaDto
	{
		readonly criteria: String;
		readonly isValid: boolean;
		readonly key: String;
		readonly object: NSXBasicDomainObjectInfo;
		readonly operator: String;
		readonly value: String;

	}

	interface NSXDynamicCriteriaDtoConstructor {
		new(value?:any): NSXDynamicCriteriaDto;
		readonly prototype: NSXDynamicCriteriaDto;
	}

	declare const NSXDynamicCriteriaDto: NSXDynamicCriteriaDtoConstructor;

	interface NSXDynamicMemberDto
	{
		readonly dynamicSetDtoList: java.util.List;

	}

	interface NSXDynamicMemberDtoConstructor {
		new(value?:any): NSXDynamicMemberDto;
		readonly prototype: NSXDynamicMemberDto;
	}

	declare const NSXDynamicMemberDto: NSXDynamicMemberDtoConstructor;

	interface NSXDynamicServiceGwemDto
	{
		readonly ip: String;
		readonly port: int;
		readonly service: int;

	}

	interface NSXDynamicServiceGwemDtoConstructor {
		new(value?:any): NSXDynamicServiceGwemDto;
		readonly prototype: NSXDynamicServiceGwemDto;
	}

	declare const NSXDynamicServiceGwemDto: NSXDynamicServiceGwemDtoConstructor;

	interface NSXDynamicSetDto
	{
		readonly dynamicCriteria: java.util.Set;
		readonly operator: String;

	}

	interface NSXDynamicSetDtoConstructor {
		new(value?:any): NSXDynamicSetDto;
		readonly prototype: NSXDynamicSetDto;
	}

	declare const NSXDynamicSetDto: NSXDynamicSetDtoConstructor;

	interface NSXEamAgenciesConflictInfoDto
	{
		readonly agenciesInfo: java.util.List;
		readonly allowedOperations: java.util.List;

	}

	interface NSXEamAgenciesConflictInfoDtoConstructor {
		new(value?:any): NSXEamAgenciesConflictInfoDto;
		readonly prototype: NSXEamAgenciesConflictInfoDto;
	}

	declare const NSXEamAgenciesConflictInfoDto: NSXEamAgenciesConflictInfoDtoConstructor;

	interface NSXEamAgencyConflictInfoDto
	{
		readonly agencyId: String;
		readonly agencyName: String;

	}

	interface NSXEamAgencyConflictInfoDtoConstructor {
		new(value?:any): NSXEamAgencyConflictInfoDto;
		readonly prototype: NSXEamAgencyConflictInfoDto;
	}

	declare const NSXEamAgencyConflictInfoDto: NSXEamAgencyConflictInfoDtoConstructor;

	interface NSXEdge
	{
		readonly apiVersion: String;
		readonly datacenterMoid: String;
		readonly datacenterName: String;
		readonly description: String;
		readonly edgeType: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly lbAsJson: String;
		readonly name: String;
		readonly nics: NSXNics;
		readonly nicsAsJson: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: String;
		readonly state: String;
		readonly tenantId: String;
		readonly vcUniqueId: String;
		readonly vmHostName: String;
		readonly vmId: String;
		readonly vmName: String;

	}

	interface NSXEdgeConstructor {
		new(value?:any): NSXEdge;
		readonly prototype: NSXEdge;
	}

	declare const NSXEdge: NSXEdgeConstructor;

	interface NSXEdgeApplianceController
	{

		configureEdgeApplianceV3(connection?: NSXConnection, edgeId?: String, index?: Integer, appliancedto?: NSXApplianceDto): void;
		deleteEdgeApplianceV3(connection?: NSXConnection, edgeId?: String, index?: Integer): void;
		getEdgeApplianceV3(connection?: NSXConnection, edgeId?: String, index?: Integer): NSXApplianceDto;
	}

	declare const NSXEdgeApplianceController: NSXEdgeApplianceController;

	interface NSXEdgeAppliancesSummaryDto
	{
		readonly activeVseHaIndex: Integer;
		readonly applianceSize: String;
		readonly dataStoreMoidOfActiveVse: String;
		readonly dataStoreNameOfActiveVse: String;
		readonly fqdn: String;
		readonly hostMoidOfActiveVse: String;
		readonly hostNameOfActiveVse: String;
		readonly numberOfDeployedVms: Integer;
		readonly resourcePoolMoidOfActiveVse: String;
		readonly resourcePoolNameOfActiveVse: String;
		readonly statusFromVseUpdatedOn: long;
		readonly vmBuildInfo: String;
		readonly vmMoidOfActiveVse: String;
		readonly vmNameOfActiveVse: String;
		readonly vmVersion: String;

	}

	interface NSXEdgeAppliancesSummaryDtoConstructor {
		new(value?:any): NSXEdgeAppliancesSummaryDto;
		readonly prototype: NSXEdgeAppliancesSummaryDto;
	}

	declare const NSXEdgeAppliancesSummaryDto: NSXEdgeAppliancesSummaryDtoConstructor;

	interface NSXEdgeBaseDto
	{
		readonly appliances: NSXAppliancesDto;
		readonly autoConfiguration: NSXAutoConfigurationDto;
		readonly cliSettings: NSXEdgeCliSettingsDto;
		readonly datacenterMoid: String;
		readonly datacenterName: String;
		readonly description: String;
		readonly enableAesni: boolean;
		readonly enableFips: boolean;
		readonly featureConfigs: NSXFeatureConfigsDto;
		readonly fqdn: String;
		readonly id: String;
		readonly name: String;
		readonly status: String;
		readonly tenant: String;
		readonly version: long;
		readonly vnics: NSXVnicsDto;
		readonly vseLogLevel: String;

	}

	interface NSXEdgeBaseDtoConstructor {
		new(value?:any): NSXEdgeBaseDto;
		readonly prototype: NSXEdgeBaseDto;
	}

	declare const NSXEdgeBaseDto: NSXEdgeBaseDtoConstructor;

	interface NSXEdgeBasicController
	{

		createEdgeV3(connection?: NSXConnection, edgedto?: NSXEdgeDto): void;
		getAllEdgeSummariesV3(connection?: NSXConnection, prevEdgeId?: String, startIndex?: int, pageSize?: int, sortOrderAscending?: boolean, sortBy?: String, filter?: String): NSXEdgePageDto;
		getEdgeSummariesOnDataCenterV3(connection?: NSXConnection, datacenter?: String, prevEdgeId?: String, startIndex?: int, pageSize?: int, sortOrderAscending?: boolean, sortBy?: String): NSXEdgePageDto;
		getEdgeSummariesV3(connection?: NSXConnection, pg?: String, tenant?: String): NSXEdgeSummariesDto;
	}

	declare const NSXEdgeBasicController: NSXEdgeBasicController;

	interface NSXEdgeBulkController
	{

		changeAppliancesSizeV3(connection?: NSXConnection, edgeId?: String, size?: String): void;
		configureEdgeAppliancesV3(connection?: NSXConnection, edgeId?: String, appliancesdto?: NSXAppliancesDto): void;
		configureEdgeVnicsV3(connection?: NSXConnection, edgeId?: String, vnicsdto?: NSXVnicsDto): void;
		deleteEdgeVnicsV3(connection?: NSXConnection, edgeId?: String, index?: Integer[]): void;
		getEdgeApplianceV3(connection?: NSXConnection, edgeId?: String): NSXAppliancesDto;
		getEdgeVnicsV3(connection?: NSXConnection, edgeId?: String): NSXVnicsDto;
	}

	declare const NSXEdgeBulkController: NSXEdgeBulkController;

	interface NSXEdgeBulkTrinityController
	{

		changeAppliancesSizeV4(connection?: NSXConnection, edgeId?: String, size?: String): void;
		configureEdgeAppliancesV4(connection?: NSXConnection, edgeId?: String, appliancesdto?: NSXAppliancesDto): void;
		configureEdgeVnicsV4(connection?: NSXConnection, edgeId?: String, vnicsdto?: NSXVnicsDto): void;
		deleteEdgeVnicsV4(connection?: NSXConnection, edgeId?: String, index?: Integer[]): void;
		getEdgeApplianceV4(connection?: NSXConnection, edgeId?: String): NSXAppliancesDto;
		getEdgeVnicsV4(connection?: NSXConnection, edgeId?: String): NSXVnicsDto;
	}

	declare const NSXEdgeBulkTrinityController: NSXEdgeBulkTrinityController;

	interface NSXEdgeCliSettingsDto
	{
		readonly password: String;
		readonly passwordExpiry: String;
		readonly remoteAccess: boolean;
		readonly sshLoginBannerText: String;
		readonly userName: String;

	}

	interface NSXEdgeCliSettingsDtoConstructor {
		new(value?:any): NSXEdgeCliSettingsDto;
		readonly prototype: NSXEdgeCliSettingsDto;
	}

	declare const NSXEdgeCliSettingsDto: NSXEdgeCliSettingsDtoConstructor;

	interface NSXEdgeController
	{

		configureCliRemoteAccessV3(connection?: NSXConnection, id?: String, enable?: boolean): void;
		deleteEdgeV3(connection?: NSXConnection, id?: String): void;
		forceSyncEdgeV3(connection?: NSXConnection, id?: String): void;
		getAutoConfigurationInfoV3(connection?: NSXConnection, id?: String): NSXAutoConfigurationDto;
		getEdgeStatusV3(connection?: NSXConnection, id?: String, getlatest?: boolean, detailed?: boolean): NSXEdgeStatusDto;
		getEdgeSummaryV3(connection?: NSXConnection, id?: String): NSXEdgeSummaryDto;
		getEdgeTechSupportLogsV3(connection?: NSXConnection, id?: String): void;
		getEdgeV3(connection?: NSXConnection, id?: String): NSXEdgeDto;
		redeployEdgeV3(connection?: NSXConnection, id?: String): void;
		setAesniV3(connection?: NSXConnection, id?: String, enable?: boolean): void;
		setAutoConfigurationInfoV3(connection?: NSXConnection, id?: String, autoconfigurationdto?: NSXAutoConfigurationDto): void;
		setFipsV3(connection?: NSXConnection, id?: String, enable?: boolean): void;
		setTcpLooseV3(connection?: NSXConnection, id?: String, enable?: boolean): void;
		setVseLogLevelV3(connection?: NSXConnection, id?: String, level?: String): void;
		updateCliSettingsV3(connection?: NSXConnection, id?: String, edgeclisettingsdto?: NSXEdgeCliSettingsDto): void;
		updateEdgeV3(connection?: NSXConnection, id?: String, edgedto?: NSXEdgeDto): void;
		upgradeEdgeV3(connection?: NSXConnection, id?: String): void;
	}

	declare const NSXEdgeController: NSXEdgeController;

	interface NSXEdgeDto
	{
		readonly appliances: NSXAppliancesDto;
		readonly autoConfiguration: NSXAutoConfigurationDto;
		readonly cliSettings: NSXEdgeCliSettingsDto;
		readonly datacenterMoid: String;
		readonly datacenterName: String;
		readonly description: String;
		readonly enableAesni: boolean;
		readonly enableFips: boolean;
		readonly enableTcpLoose: boolean;
		readonly featureConfigs: NSXFeatureConfigsDto;
		readonly fqdn: String;
		readonly id: String;
		readonly name: String;
		readonly status: String;
		readonly tenant: String;
		readonly version: long;
		readonly vnics: NSXVnicsDto;
		readonly vseLogLevel: String;

	}

	interface NSXEdgeDtoConstructor {
		new(value?:any): NSXEdgeDto;
		readonly prototype: NSXEdgeDto;
	}

	declare const NSXEdgeDto: NSXEdgeDtoConstructor;

	interface NSXEdgeFeatureCapabilitiesDto
	{
		readonly featureCapabilities: java.util.List;
		readonly timestamp: long;

	}

	interface NSXEdgeFeatureCapabilitiesDtoConstructor {
		new(value?:any): NSXEdgeFeatureCapabilitiesDto;
		readonly prototype: NSXEdgeFeatureCapabilitiesDto;
	}

	declare const NSXEdgeFeatureCapabilitiesDto: NSXEdgeFeatureCapabilitiesDtoConstructor;

	interface NSXEdgeFeatureCapabilityDto
	{
		readonly configurationLimits: java.util.List;
		readonly isSupported: boolean;
		readonly permission: NSXPermissionInfoDto;
		readonly service: String;

	}

	interface NSXEdgeFeatureCapabilityDtoConstructor {
		new(value?:any): NSXEdgeFeatureCapabilityDto;
		readonly prototype: NSXEdgeFeatureCapabilityDto;
	}

	declare const NSXEdgeFeatureCapabilityDto: NSXEdgeFeatureCapabilityDtoConstructor;

	interface NSXEdgeFirewallAddressDto
	{
		readonly groupingObjectId: java.util.List;
		readonly ipAddress: java.util.List;
		readonly vnicGroupId: java.util.List;

	}

	interface NSXEdgeFirewallAddressDtoConstructor {
		new(value?:any): NSXEdgeFirewallAddressDto;
		readonly prototype: NSXEdgeFirewallAddressDto;
	}

	declare const NSXEdgeFirewallAddressDto: NSXEdgeFirewallAddressDtoConstructor;

	interface NSXEdgeFirewallApplicationDto
	{
		readonly applicationId: java.util.List;
		readonly service: java.util.List;

	}

	interface NSXEdgeFirewallApplicationDtoConstructor {
		new(value?:any): NSXEdgeFirewallApplicationDto;
		readonly prototype: NSXEdgeFirewallApplicationDto;
	}

	declare const NSXEdgeFirewallApplicationDto: NSXEdgeFirewallApplicationDtoConstructor;

	interface NSXEdgeFirewallFirewallruleDto
	{
		readonly action: String;
		readonly application: NSXEdgeFirewallApplicationDto;
		readonly description: String;
		readonly destination: NSXEdgeFirewallAddressDto;
		readonly direction: String;
		readonly enabled: boolean;
		readonly invalidApplication: boolean;
		readonly invalidDestination: boolean;
		readonly invalidSource: boolean;
		readonly loggingEnabled: boolean;
		readonly matchTranslated: boolean;
		readonly name: String;
		readonly ruleId: long;
		readonly ruleTag: long;
		readonly ruleType: String;
		readonly source: NSXEdgeFirewallAddressDto;
		readonly sourcePort: java.util.List;
		readonly statistics: NSXFirewallRuleStatsDto;

	}

	interface NSXEdgeFirewallFirewallruleDtoConstructor {
		new(value?:any): NSXEdgeFirewallFirewallruleDto;
		readonly prototype: NSXEdgeFirewallFirewallruleDto;
	}

	declare const NSXEdgeFirewallFirewallruleDto: NSXEdgeFirewallFirewallruleDtoConstructor;

	interface NSXEdgeFirewallUiFirewallconfigurationDto
	{
		readonly enabled: boolean;
		readonly layer3Rules: java.util.List;
		readonly scope: NSXBasicDomainObjectInfo;

	}

	interface NSXEdgeFirewallUiFirewallconfigurationDtoConstructor {
		new(value?:any): NSXEdgeFirewallUiFirewallconfigurationDto;
		readonly prototype: NSXEdgeFirewallUiFirewallconfigurationDto;
	}

	declare const NSXEdgeFirewallUiFirewallconfigurationDto: NSXEdgeFirewallUiFirewallconfigurationDtoConstructor;

	interface NSXEdgeFirewallUiFirewallruleDto
	{
		readonly action: String;
		readonly comments: String;
		readonly destinationElements: java.util.List;
		readonly direction: String;
		readonly enabled: boolean;
		readonly id: long;
		readonly invalidDestination: boolean;
		readonly invalidService: boolean;
		readonly invalidSource: boolean;
		readonly logging: boolean;
		readonly matchTranslated: boolean;
		readonly name: String;
		readonly precedence: String;
		readonly ruleTag: long;
		readonly serviceElements: java.util.List;
		readonly sourceElements: java.util.List;
		readonly sourcePort: java.util.List;
		readonly statistics: NSXFirewallRuleStatsDto;

	}

	interface NSXEdgeFirewallUiFirewallruleDtoConstructor {
		new(value?:any): NSXEdgeFirewallUiFirewallruleDto;
		readonly prototype: NSXEdgeFirewallUiFirewallruleDto;
	}

	declare const NSXEdgeFirewallUiFirewallruleDto: NSXEdgeFirewallUiFirewallruleDtoConstructor;

	interface NSXEdgeInstallTaskSummaryDto
	{
		readonly failedInstalls: NSXEdgeSummariesDto;
		readonly runningInstalls: NSXEdgeSummariesDto;

	}

	interface NSXEdgeInstallTaskSummaryDtoConstructor {
		new(value?:any): NSXEdgeInstallTaskSummaryDto;
		readonly prototype: NSXEdgeInstallTaskSummaryDto;
	}

	declare const NSXEdgeInstallTaskSummaryDto: NSXEdgeInstallTaskSummaryDtoConstructor;

	interface NSXEdgeInv
	{
		readonly displayName: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;

	}

	interface NSXEdgeInvConstructor {
		new(value?:any): NSXEdgeInv;
		readonly prototype: NSXEdgeInv;
	}

	declare const NSXEdgeInv: NSXEdgeInvConstructor;

	interface NSXEdgeJobsStatusDto
	{
		readonly edgeJob: java.util.List;

	}

	interface NSXEdgeJobsStatusDtoConstructor {
		new(value?:any): NSXEdgeJobsStatusDto;
		readonly prototype: NSXEdgeJobsStatusDto;
	}

	declare const NSXEdgeJobsStatusDto: NSXEdgeJobsStatusDtoConstructor;

	interface NSXEdgeJobStatusDto
	{
		readonly edgeId: String;
		readonly jobId: String;
		readonly message: String;
		readonly result: java.util.List;
		readonly status: String;

	}

	interface NSXEdgeJobStatusDtoConstructor {
		new(value?:any): NSXEdgeJobStatusDto;
		readonly prototype: NSXEdgeJobStatusDto;
	}

	declare const NSXEdgeJobStatusDto: NSXEdgeJobStatusDtoConstructor;

	interface NSXEdgeManager
	{

		addDhcpIpPool(connection?: NSXConnection, edgeId?: String, dhcpPools?: NSXDhcpPools): void;
		addFwRulesBetweenInterfaces(connection?: NSXConnection, edgeId?: String, firewallRules?: NSXFirewallRules): void;
		addSecondaryIpsToVnic(connection?: NSXConnection, edgeId?: String, vNicIndex?: int, ipAddresses?: String[]): void;
		addStaticRoutes(connection?: NSXConnection, edgeId?: String, staticRoutes?: NSXStaticRoutes): void;
		connectEdgeInterface(connection?: NSXConnection, edgeId?: String, intf?: NSXNic): NSXNic;
		createEdge(connection?: NSXConnection, edge?: NSXEdge): NSXEdge;
		deleteApplicationProfileWithName(connection?: NSXConnection, edgeId?: String, appProfileName?: String): void;
		deleteEdge(connection?: NSXConnection, edgeId?: String): void;
		deleteMonitorWithName(connection?: NSXConnection, edgeId?: String, monitorName?: String): void;
		deletePoolWithName(connection?: NSXConnection, edgeId?: String, poolName?: String): void;
		deleteStaticRoutes(connection?: NSXConnection, edgeId?: String, staticRoutes?: NSXStaticRoutes): void;
		deleteVirtualServerWithName(connection?: NSXConnection, edgeId?: String, virtualServerName?: String): void;
		disconnectEdgeInterface(connection?: NSXConnection, edgeId?: String, index?: String): void;
		getApplicationProfileIdFromName(connection?: NSXConnection, edgeId?: String, appProfileName?: String): String;
		getEdge(connection?: NSXConnection, edgeId?: String): NSXEdge;
		getEdgeVnic(connection?: NSXConnection, edgeId?: String, nicIndex?: String): NSXNic;
		getEdgeVNics(connection?: NSXConnection, edgeId?: String): NSXNics;
		getMonitorIdFromName(connection?: NSXConnection, edgeId?: String, monitorName?: String): String;
		getPoolIdFromName(connection?: NSXConnection, edgeId?: String, poolName?: String): String;
		getVersionofEdge(connection?: NSXConnection, edgeId?: String): String;
		getVirtualServerIdFromName(connection?: NSXConnection, edgeId?: String, virtualServerName?: String): String;
		removeSecondaryIpsFromVnic(connection?: NSXConnection, edgeId?: String, vNicIndex?: int, ipAddresses?: String[]): void;
		setDefaultRoute(connection?: NSXConnection, edgeId?: String, defaultRoute?: NSXDefaultRoute): void;
	}

	declare const NSXEdgeManager: NSXEdgeManager;

	interface NSXEdgePage
	{
		readonly displayName: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly pageSize: int;
		readonly startIndex: int;
		readonly totalCount: long;

	}

	interface NSXEdgePageConstructor {
		new(value?:any): NSXEdgePage;
		readonly prototype: NSXEdgePage;
	}

	declare const NSXEdgePage: NSXEdgePageConstructor;

	interface NSXEdgePageDto
	{
		readonly edgePage: NSXDataPage;

	}

	interface NSXEdgePageDtoConstructor {
		new(value?:any): NSXEdgePageDto;
		readonly prototype: NSXEdgePageDto;
	}

	declare const NSXEdgePageDto: NSXEdgePageDtoConstructor;

	interface NSXEdgeProfileController
	{

		getEdgeProfileSummariesV3(connection?: NSXConnection, tenantId?: String): NSXEdgeProfileSummariesDto;
	}

	declare const NSXEdgeProfileController: NSXEdgeProfileController;

	interface NSXEdgeProfileSummariesDto
	{
		readonly summaries: java.util.List;

	}

	interface NSXEdgeProfileSummariesDtoConstructor {
		new(value?:any): NSXEdgeProfileSummariesDto;
		readonly prototype: NSXEdgeProfileSummariesDto;
	}

	declare const NSXEdgeProfileSummariesDto: NSXEdgeProfileSummariesDtoConstructor;

	interface NSXEdgeProfileSummaryDto
	{

	}

	interface NSXEdgeProfileSummaryDtoConstructor {
		new(value?:any): NSXEdgeProfileSummaryDto;
		readonly prototype: NSXEdgeProfileSummaryDto;
	}

	declare const NSXEdgeProfileSummaryDto: NSXEdgeProfileSummaryDtoConstructor;

	interface NSXEdgeRoutingTrinityGlobalconfigDto
	{
		readonly ecmp: boolean;
		readonly ipPrefixes: NSXIPPrefixesDto;
		readonly logging: NSXLoggingDto;
		readonly routerId: String;

	}

	interface NSXEdgeRoutingTrinityGlobalconfigDtoConstructor {
		new(value?:any): NSXEdgeRoutingTrinityGlobalconfigDto;
		readonly prototype: NSXEdgeRoutingTrinityGlobalconfigDto;
	}

	declare const NSXEdgeRoutingTrinityGlobalconfigDto: NSXEdgeRoutingTrinityGlobalconfigDtoConstructor;

	interface NSXEdgeSslvpnIppoolDto
	{
		readonly description: String;
		readonly dnsSuffix: String;
		readonly enabled: boolean;
		readonly gateway: String;
		readonly ipRange: String;
		readonly netmask: String;
		readonly objectId: String;
		readonly order: Integer;
		readonly primaryDns: String;
		readonly secondaryDns: String;
		readonly winsServer: String;

	}

	interface NSXEdgeSslvpnIppoolDtoConstructor {
		new(value?:any): NSXEdgeSslvpnIppoolDto;
		readonly prototype: NSXEdgeSslvpnIppoolDto;
	}

	declare const NSXEdgeSslvpnIppoolDto: NSXEdgeSslvpnIppoolDtoConstructor;

	interface NSXEdgeSslvpnIppoolsDto
	{
		readonly ipPools: java.util.List;

	}

	interface NSXEdgeSslvpnIppoolsDtoConstructor {
		new(value?:any): NSXEdgeSslvpnIppoolsDto;
		readonly prototype: NSXEdgeSslvpnIppoolsDto;
	}

	declare const NSXEdgeSslvpnIppoolsDto: NSXEdgeSslvpnIppoolsDtoConstructor;

	interface NSXEdgeStatusDto
	{
		readonly activeVseHaIndex: Integer;
		readonly edgeStatus: String;
		readonly edgeVmStatus: java.util.List;
		readonly featureStatuses: java.util.List;
		readonly publishStatus: String;
		readonly systemStatus: String;
		readonly timestamp: long;
		readonly version: long;

	}

	interface NSXEdgeStatusDtoConstructor {
		new(value?:any): NSXEdgeStatusDto;
		readonly prototype: NSXEdgeStatusDto;
	}

	declare const NSXEdgeStatusDto: NSXEdgeStatusDtoConstructor;

	interface NSXEdgeSummariesDto
	{
		readonly summaries: java.util.List;

	}

	interface NSXEdgeSummariesDtoConstructor {
		new(value?:any): NSXEdgeSummariesDto;
		readonly prototype: NSXEdgeSummariesDto;
	}

	declare const NSXEdgeSummariesDto: NSXEdgeSummariesDtoConstructor;

	interface NSXEdgeSummaryDto
	{
		readonly allowedActions: java.util.List;
		readonly apiVersion: String;
		readonly appliancesSummary: NSXEdgeAppliancesSummaryDto;
		readonly clientHandle: String;
		readonly datacenterMoid: String;
		readonly datacenterName: String;
		readonly description: String;
		readonly edgeAssistId: long;
		readonly edgeStatus: String;
		readonly edgeType: String;
		readonly extendedAttributes: java.util.List;
		readonly featureCapabilities: NSXEdgeFeatureCapabilitiesDto;
		readonly hypervisorAssist: boolean;
		readonly id: String;
		readonly isUpgradeAvailable: boolean;
		readonly lrouterUuid: String;
		readonly name: String;
		readonly numberOfConnectedVnics: Integer;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly recentJobInfo: NSXEdgeJobStatusDto;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly state: String;
		readonly tenantId: String;
		readonly type: NSXObjectTypeDto;
		readonly vsmUuid: String;

	}

	interface NSXEdgeSummaryDtoConstructor {
		new(value?:any): NSXEdgeSummaryDto;
		readonly prototype: NSXEdgeSummaryDto;
	}

	declare const NSXEdgeSummaryDto: NSXEdgeSummaryDtoConstructor;

	interface NSXEdgeTrinityApplianceController
	{

		configureEdgeApplianceV4(connection?: NSXConnection, edgeId?: String, index?: Integer, appliancedto?: NSXApplianceDto): void;
		deleteEdgeApplianceV4(connection?: NSXConnection, edgeId?: String, index?: Integer): void;
		getEdgeApplianceV4(connection?: NSXConnection, edgeId?: String, index?: Integer): NSXApplianceDto;
	}

	declare const NSXEdgeTrinityApplianceController: NSXEdgeTrinityApplianceController;

	interface NSXEdgeTrinityBasicController
	{

		createEdgeV4(connection?: NSXConnection, edgetrinitydto?: NSXEdgeTrinityDto): void;
		getAllEdgeSummariesV4(connection?: NSXConnection, prevEdgeId?: String, startIndex?: int, pageSize?: int, sortOrderAscending?: boolean, sortBy?: String, filter?: String): NSXEdgePageDto;
		getEdgeSummariesOnDataCenterV4(connection?: NSXConnection, datacenter?: String, prevEdgeId?: String, startIndex?: int, pageSize?: int, sortOrderAscending?: boolean, sortBy?: String): NSXEdgePageDto;
		getEdgeSummariesV4(connection?: NSXConnection, pg?: String, tenant?: String): NSXEdgeSummariesDto;
	}

	declare const NSXEdgeTrinityBasicController: NSXEdgeTrinityBasicController;

	interface NSXEdgeTrinityController
	{

		configureCliRemoteAccessV4(connection?: NSXConnection, id?: String, enable?: boolean): void;
		configureDnsClientV4(connection?: NSXConnection, id?: String, dnsclientdto?: NSXDnsClientDto): void;
		deleteEdgeV4(connection?: NSXConnection, id?: String): void;
		enableCoreDumpV4(connection?: NSXConnection, id?: String, enable?: boolean): void;
		forceSyncEdgeV4(connection?: NSXConnection, id?: String): void;
		getAutoConfigurationInfoV4(connection?: NSXConnection, id?: String): NSXAutoConfigurationDto;
		getEdgeStatusV4(connection?: NSXConnection, id?: String, getlatest?: boolean, detailed?: boolean): NSXEdgeStatusDto;
		getEdgeSummaryV4(connection?: NSXConnection, id?: String): NSXEdgeSummaryDto;
		getEdgeTechSupportLogsV4(connection?: NSXConnection, id?: String): void;
		getEdgeV4(connection?: NSXConnection, id?: String): NSXEdgeTrinityDto;
		getJobStatusV4(connection?: NSXConnection, jid?: String): NSXEdgeJobStatusDto;
		getJobsV4(connection?: NSXConnection, id?: String, status?: String): NSXEdgeJobsStatusDto;
		redeployEdgeV4(connection?: NSXConnection, id?: String): void;
		setAesniV4(connection?: NSXConnection, id?: String, enable?: boolean): void;
		setAutoConfigurationInfoV4(connection?: NSXConnection, id?: String, autoconfigurationdto?: NSXAutoConfigurationDto): void;
		setFipsV4(connection?: NSXConnection, id?: String, enable?: boolean): void;
		setVseLogLevelV4(connection?: NSXConnection, id?: String, level?: String): void;
		updateCliSettingsV4(connection?: NSXConnection, id?: String, edgeclisettingsdto?: NSXEdgeCliSettingsDto): void;
		updateEdgeV4(connection?: NSXConnection, id?: String, edgetrinitydto?: NSXEdgeTrinityDto): void;
	}

	declare const NSXEdgeTrinityController: NSXEdgeTrinityController;

	interface NSXEdgeTrinityDto
	{
		readonly appliances: NSXAppliancesDto;
		readonly autoConfiguration: NSXAutoConfigurationDto;
		readonly clientHandle: String;
		readonly cliSettings: NSXEdgeCliSettingsDto;
		readonly datacenterMoid: String;
		readonly datacenterName: String;
		readonly description: String;
		readonly dnsClient: NSXDnsClientDto;
		readonly edgeAssistId: long;
		readonly enableAesni: boolean;
		readonly enableFips: boolean;
		readonly featureConfigs: NSXFeatureConfigsDto;
		readonly fqdn: String;
		readonly hypervisorAssist: boolean;
		readonly id: String;
		readonly interfaces: NSXInterfacesDto;
		readonly lrouterUuid: String;
		readonly mgmtInterface: NSXMgmtInterfaceDto;
		readonly name: String;
		readonly queryDaemon: NSXQueryDaemonDto;
		readonly status: String;
		readonly tenant: String;
		readonly type: String;
		readonly version: long;
		readonly vnics: NSXVnicsDto;
		readonly vseLogLevel: String;

	}

	interface NSXEdgeTrinityDtoConstructor {
		new(value?:any): NSXEdgeTrinityDto;
		readonly prototype: NSXEdgeTrinityDto;
	}

	declare const NSXEdgeTrinityDto: NSXEdgeTrinityDtoConstructor;

	interface NSXEdgeVMRuntimeStatusDto
	{
		readonly edgeVMStatus: String;
		readonly haState: String;
		readonly id: String;
		readonly index: int;
		readonly name: String;

	}

	interface NSXEdgeVMRuntimeStatusDtoConstructor {
		new(value?:any): NSXEdgeVMRuntimeStatusDto;
		readonly prototype: NSXEdgeVMRuntimeStatusDto;
	}

	declare const NSXEdgeVMRuntimeStatusDto: NSXEdgeVMRuntimeStatusDtoConstructor;

	interface NSXEdgeVnicAddressGroupDto
	{
		readonly primaryAddress: String;
		readonly secondaryAddresses: NSXIpAddressesDto;
		readonly subnetMask: String;
		readonly subnetPrefixLength: String;

	}

	interface NSXEdgeVnicAddressGroupDtoConstructor {
		new(value?:any): NSXEdgeVnicAddressGroupDto;
		readonly prototype: NSXEdgeVnicAddressGroupDto;
	}

	declare const NSXEdgeVnicAddressGroupDto: NSXEdgeVnicAddressGroupDtoConstructor;

	interface NSXEdgeVnicAddressGroupsDto
	{
		readonly addressGroups: java.util.List;

	}

	interface NSXEdgeVnicAddressGroupsDtoConstructor {
		new(value?:any): NSXEdgeVnicAddressGroupsDto;
		readonly prototype: NSXEdgeVnicAddressGroupsDto;
	}

	declare const NSXEdgeVnicAddressGroupsDto: NSXEdgeVnicAddressGroupsDtoConstructor;

	interface NSXEdgeVnicController
	{

		configureEdgeVnicV3(connection?: NSXConnection, edgeId?: String, index?: Integer, vnicdto?: NSXVnicDto): void;
		deleteEdgeVnicV3(connection?: NSXConnection, edgeId?: String, index?: Integer): void;
		getEdgeVnicV3(connection?: NSXConnection, edgeId?: String, index?: Integer): NSXVnicDto;
	}

	declare const NSXEdgeVnicController: NSXEdgeVnicController;

	interface NSXEdgeVnicTrinityController
	{

		configureEdgeVnicV4(connection?: NSXConnection, edgeId?: String, index?: Integer, vnicdto?: NSXVnicDto): void;
		deleteEdgeVnicV4(connection?: NSXConnection, edgeId?: String, index?: Integer): void;
		getEdgeVnicV4(connection?: NSXConnection, edgeId?: String, index?: Integer): NSXVnicDto;
	}

	declare const NSXEdgeVnicTrinityController: NSXEdgeVnicTrinityController;

	interface NSXEventCodeController
	{

		findEventCodeConfigurationV2(connection?: NSXConnection, eventId?: long): NSXEventCodeDto;
		listEventCodeConfigurationV2(connection?: NSXConnection): NSXEventCodeListDto;
		updateV2(connection?: NSXConnection, eventId?: long, eventcodedto?: NSXEventCodeDto): void;
	}

	declare const NSXEventCodeController: NSXEventCodeController;

	interface NSXEventCodeDto
	{
		readonly description: String;
		readonly id: long;
		readonly severity: String;

	}

	interface NSXEventCodeDtoConstructor {
		new(value?:any): NSXEventCodeDto;
		readonly prototype: NSXEventCodeDto;
	}

	declare const NSXEventCodeDto: NSXEventCodeDtoConstructor;

	interface NSXEventCodeListDto
	{
		readonly eventCodes: java.util.List;

	}

	interface NSXEventCodeListDtoConstructor {
		new(value?:any): NSXEventCodeListDto;
		readonly prototype: NSXEventCodeListDto;
	}

	declare const NSXEventCodeListDto: NSXEventCodeListDtoConstructor;

	interface NSXEventThresholdsDto
	{
		readonly cps: NSXConnectionsDto;
		readonly cpu: NSXCPUDto;
		readonly memory: NSXMemoryDto;

	}

	interface NSXEventThresholdsDtoConstructor {
		new(value?:any): NSXEventThresholdsDto;
		readonly prototype: NSXEventThresholdsDto;
	}

	declare const NSXEventThresholdsDto: NSXEventThresholdsDtoConstructor;

	interface NSXExcludeListConfigurationDto
	{
		readonly clientHandle: String;
		readonly description: String;
		readonly excludeMembers: java.util.List;
		readonly extendedAttributes: java.util.List;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly type: NSXObjectTypeDto;
		readonly vsmUuid: String;

	}

	interface NSXExcludeListConfigurationDtoConstructor {
		new(value?:any): NSXExcludeListConfigurationDto;
		readonly prototype: NSXExcludeListConfigurationDto;
	}

	declare const NSXExcludeListConfigurationDto: NSXExcludeListConfigurationDtoConstructor;

	interface NSXExcludeMemberDto
	{
		readonly member: NSXBasicDomainObjectInfo;

	}

	interface NSXExcludeMemberDtoConstructor {
		new(value?:any): NSXExcludeMemberDto;
		readonly prototype: NSXExcludeMemberDto;
	}

	declare const NSXExcludeMemberDto: NSXExcludeMemberDtoConstructor;

	interface NSXExtendedAttributeDto
	{
		readonly name: String;
		readonly value: String;

	}

	interface NSXExtendedAttributeDtoConstructor {
		new(value?:any): NSXExtendedAttributeDto;
		readonly prototype: NSXExtendedAttributeDto;
	}

	declare const NSXExtendedAttributeDto: NSXExtendedAttributeDtoConstructor;

	interface NSXFabricSyncConflictInfoDto
	{
		readonly agencies: NSXEamAgenciesConflictInfoDto;
		readonly conflictExist: boolean;
		readonly deploymentUnits: NSXDeploymentUnitsConflictInfoDto;

	}

	interface NSXFabricSyncConflictInfoDtoConstructor {
		new(value?:any): NSXFabricSyncConflictInfoDto;
		readonly prototype: NSXFabricSyncConflictInfoDto;
	}

	declare const NSXFabricSyncConflictInfoDto: NSXFabricSyncConflictInfoDtoConstructor;

	interface NSXFabricSyncController
	{

		getConflictsV2(connection?: NSXConnection): NSXFabricSyncConflictInfoDto;
		resolveConflictsV2(connection?: NSXConnection, conflictresolverinfodto?: NSXConflictResolverInfoDto): void;
	}

	declare const NSXFabricSyncController: NSXFabricSyncController;

	interface NSXFailedPublishInfoDto
	{
		readonly applianceIp: String;
		readonly errorDescription: String;
		readonly timestamp: long;

	}

	interface NSXFailedPublishInfoDtoConstructor {
		new(value?:any): NSXFailedPublishInfoDto;
		readonly prototype: NSXFailedPublishInfoDto;
	}

	declare const NSXFailedPublishInfoDto: NSXFailedPublishInfoDtoConstructor;

	interface NSXFailSafeConfiguration
	{
		readonly failSafeMode: String;

	}

	interface NSXFailSafeConfigurationConstructor {
		new(value?:any): NSXFailSafeConfiguration;
		readonly prototype: NSXFailSafeConfiguration;
	}

	declare const NSXFailSafeConfiguration: NSXFailSafeConfigurationConstructor;

	interface NSXFaultPolicyDto
	{
		readonly faultAction: String;
		readonly retryInterval: long;
		readonly retryLimit: int;

	}

	interface NSXFaultPolicyDtoConstructor {
		new(value?:any): NSXFaultPolicyDto;
		readonly prototype: NSXFaultPolicyDto;
	}

	declare const NSXFaultPolicyDto: NSXFaultPolicyDtoConstructor;

	interface NSXFeatureConfigDto
	{
		readonly enabled: boolean;
		readonly template: String;
		readonly version: long;

	}

	interface NSXFeatureConfigDtoConstructor {
		new(value?:any): NSXFeatureConfigDto;
		readonly prototype: NSXFeatureConfigDto;
	}

	declare const NSXFeatureConfigDto: NSXFeatureConfigDtoConstructor;

	interface NSXFeatureConfigsDto
	{
		readonly features: java.util.List;

	}

	interface NSXFeatureConfigsDtoConstructor {
		new(value?:any): NSXFeatureConfigsDto;
		readonly prototype: NSXFeatureConfigsDto;
	}

	declare const NSXFeatureConfigsDto: NSXFeatureConfigsDtoConstructor;

	interface NSXFeatureIdListDto
	{
		readonly features: java.util.List;

	}

	interface NSXFeatureIdListDtoConstructor {
		new(value?:any): NSXFeatureIdListDto;
		readonly prototype: NSXFeatureIdListDto;
	}

	declare const NSXFeatureIdListDto: NSXFeatureIdListDtoConstructor;

	interface NSXFeatureInfoDto
	{
		readonly description: String;
		readonly featureId: String;
		readonly name: String;
		readonly version: String;

	}

	interface NSXFeatureInfoDtoConstructor {
		new(value?:any): NSXFeatureInfoDto;
		readonly prototype: NSXFeatureInfoDto;
	}

	declare const NSXFeatureInfoDto: NSXFeatureInfoDtoConstructor;

	interface NSXFeatureInfoListDto
	{
		readonly infos: java.util.List;

	}

	interface NSXFeatureInfoListDtoConstructor {
		new(value?:any): NSXFeatureInfoListDto;
		readonly prototype: NSXFeatureInfoListDto;
	}

	declare const NSXFeatureInfoListDto: NSXFeatureInfoListDtoConstructor;

	interface NSXFeatureStatusDto
	{
		readonly configured: boolean;
		readonly publishStatus: String;
		readonly serverStatus: String;
		readonly service: String;
		readonly status: String;

	}

	interface NSXFeatureStatusDtoConstructor {
		new(value?:any): NSXFeatureStatusDto;
		readonly prototype: NSXFeatureStatusDto;
	}

	declare const NSXFeatureStatusDto: NSXFeatureStatusDtoConstructor;

	interface NSXFileDataDto
	{
		readonly fileContent: byte[];
		readonly fileExtension: String;

	}

	interface NSXFileDataDtoConstructor {
		new(value?:any): NSXFileDataDto;
		readonly prototype: NSXFileDataDto;
	}

	declare const NSXFileDataDto: NSXFileDataDtoConstructor;

	interface NSXFilesystemStats
	{
		readonly mount_point: String;
		readonly space_total: long;
		readonly space_used: long;

	}

	interface NSXFilesystemStatsConstructor {
		new(value?:any): NSXFilesystemStats;
		readonly prototype: NSXFilesystemStats;
	}

	declare const NSXFilesystemStats: NSXFilesystemStatsConstructor;

	interface NSXFilterDto
	{
		readonly attributeFilter: java.util.List;
		readonly conjunctionOperation: boolean;
		readonly objectType: String;
		readonly pagingInfo: NSXPagingInfo;
		readonly propertyFilter: java.util.List;

	}

	interface NSXFilterDtoConstructor {
		new(value?:any): NSXFilterDto;
		readonly prototype: NSXFilterDto;
	}

	declare const NSXFilterDto: NSXFilterDtoConstructor;

	interface NSXFiltersDto
	{
		readonly filterSet: java.util.Set;

	}

	interface NSXFiltersDtoConstructor {
		new(value?:any): NSXFiltersDto;
		readonly prototype: NSXFiltersDto;
	}

	declare const NSXFiltersDto: NSXFiltersDtoConstructor;

	interface NSXFirewallBaseController
	{

	}

	declare const NSXFirewallBaseController: NSXFirewallBaseController;

	interface NSXFirewallCentralizedcliVnicDto
	{
		readonly filters: NSXFiltersDto;
		readonly macAddress: String;
		readonly portGroupId: String;
		readonly vnicId: String;
		readonly vnicName: String;

	}

	interface NSXFirewallCentralizedcliVnicDtoConstructor {
		new(value?:any): NSXFirewallCentralizedcliVnicDto;
		readonly prototype: NSXFirewallCentralizedcliVnicDto;
	}

	declare const NSXFirewallCentralizedcliVnicDto: NSXFirewallCentralizedcliVnicDtoConstructor;

	interface NSXFirewallCentralizedcliVnicsDto
	{
		readonly clusterId: String;
		readonly clusterName: String;
		readonly datacenterId: String;
		readonly datacenterName: String;
		readonly hostId: String;
		readonly hostName: String;
		readonly vmId: String;
		readonly vmName: String;
		readonly vnics: java.util.Set;

	}

	interface NSXFirewallCentralizedcliVnicsDtoConstructor {
		new(value?:any): NSXFirewallCentralizedcliVnicsDto;
		readonly prototype: NSXFirewallCentralizedcliVnicsDto;
	}

	declare const NSXFirewallCentralizedcliVnicsDto: NSXFirewallCentralizedcliVnicsDtoConstructor;

	interface NSXFirewallConfigDto
	{
		readonly defaultPolicy: NSXDefaultPolicyDto;
		readonly enabled: boolean;
		readonly firewallRules: NSXFirewallRulesDto;
		readonly template: String;
		readonly version: long;

	}

	interface NSXFirewallConfigDtoConstructor {
		new(value?:any): NSXFirewallConfigDto;
		readonly prototype: NSXFirewallConfigDto;
	}

	declare const NSXFirewallConfigDto: NSXFirewallConfigDtoConstructor;

	interface NSXFirewallConfigHistoryInfoDto
	{
		readonly configId: long;
		readonly status: String;
		readonly timestamp: long;
		readonly userId: String;

	}

	interface NSXFirewallConfigHistoryInfoDtoConstructor {
		new(value?:any): NSXFirewallConfigHistoryInfoDto;
		readonly prototype: NSXFirewallConfigHistoryInfoDto;
	}

	declare const NSXFirewallConfigHistoryInfoDto: NSXFirewallConfigHistoryInfoDtoConstructor;

	interface NSXFirewallConfigHistoryInfoListDto
	{
		readonly contextId: String;
		readonly firewallConfigHistoryInfo: java.util.List;

	}

	interface NSXFirewallConfigHistoryInfoListDtoConstructor {
		new(value?:any): NSXFirewallConfigHistoryInfoListDto;
		readonly prototype: NSXFirewallConfigHistoryInfoListDto;
	}

	declare const NSXFirewallConfigHistoryInfoListDto: NSXFirewallConfigHistoryInfoListDtoConstructor;

	interface NSXFirewallConfigTrinityDto
	{
		readonly defaultPolicy: NSXDefaultPolicyDto;
		readonly enabled: boolean;
		readonly firewallRules: NSXFirewallRulesTrinityDto;
		readonly globalConfig: NSXFirewallGlobalConfigDto;
		readonly template: String;
		readonly version: long;

	}

	interface NSXFirewallConfigTrinityDtoConstructor {
		new(value?:any): NSXFirewallConfigTrinityDto;
		readonly prototype: NSXFirewallConfigTrinityDto;
	}

	declare const NSXFirewallConfigTrinityDto: NSXFirewallConfigTrinityDtoConstructor;

	interface NSXFirewallConfigurationDto
	{
		readonly contextId: String;
		readonly generationNumber: long;
		readonly layer2FirewallRule: java.util.List;
		readonly layer3FirewallRule: java.util.List;
		readonly provisioned: boolean;
		readonly timestamp: long;

	}

	interface NSXFirewallConfigurationDtoConstructor {
		new(value?:any): NSXFirewallConfigurationDto;
		readonly prototype: NSXFirewallConfigurationDto;
	}

	declare const NSXFirewallConfigurationDto: NSXFirewallConfigurationDtoConstructor;

	interface NSXFirewallConfigurationRESTDto
	{
		readonly contextId: String;
		readonly generationNumber: String;
		readonly layer2Sections: NSXFirewallLayer2SectionsDto;
		readonly layer3RedirectSections: NSXFirewallLayer3RedirectSectionsDto;
		readonly layer3Sections: NSXFirewallLayer3SectionsDto;
		readonly provisioned: boolean;
		readonly timestamp: long;

	}

	interface NSXFirewallConfigurationRESTDtoConstructor {
		new(value?:any): NSXFirewallConfigurationRESTDto;
		readonly prototype: NSXFirewallConfigurationRESTDto;
	}

	declare const NSXFirewallConfigurationRESTDto: NSXFirewallConfigurationRESTDtoConstructor;

	interface NSXFirewallConfigurationUIDto
	{
		readonly deletedSections: java.util.List;
		readonly generationNumber: String;
		readonly isL2Filtered: boolean;
		readonly isL3Filtered: boolean;
		readonly isL3RedirectFiltered: boolean;
		readonly layer2Rules: java.util.List;
		readonly layer2sections: java.util.List;
		readonly layer3Rules: java.util.List;
		readonly layer3sections: java.util.List;
		readonly layer3TraffSteeringRules: java.util.List;
		readonly layer3TraffSteeringSections: java.util.List;
		readonly newFeaturesEnabled: boolean;
		readonly readyToSwitch: boolean;
		readonly scope: NSXBasicDomainObjectInfo;
		readonly status: NSXStatusDto;

	}

	interface NSXFirewallConfigurationUIDtoConstructor {
		new(value?:any): NSXFirewallConfigurationUIDto;
		readonly prototype: NSXFirewallConfigurationUIDto;
	}

	declare const NSXFirewallConfigurationUIDto: NSXFirewallConfigurationUIDtoConstructor;

	interface NSXFirewallController
	{

		deleteUserCreatedRulesV2(connection?: NSXConnection, contextId?: String): org.springframework.http.ResponseEntity;
		getDatacenterStateV2(connection?: NSXConnection, contextId?: String): org.springframework.http.ResponseEntity;
		getFirewallConfigurationV2(connection?: NSXConnection, contextId?: String, list?: String, precedence?: String, rulesType?: String, configId?: long): org.springframework.http.ResponseEntity;
		getFirewallRuleV2(connection?: NSXConnection, identifier?: long): org.springframework.http.ResponseEntity;
		getProtocolsTypeListV2(connection?: NSXConnection, type?: String): org.springframework.http.ResponseEntity;
		getProtocolsTypeV2(connection?: NSXConnection): org.springframework.http.ResponseEntity;
		saveFirewallConfigurationV2(connection?: NSXConnection, contextId?: String, vshieldappconfigurationdto?: NSXVshieldAppConfigurationDto, IfMatch?: String): org.springframework.http.ResponseEntity;
		switchDatacenterStateV2(connection?: NSXConnection, contextId?: String): org.springframework.http.ResponseEntity;
	}

	declare const NSXFirewallController: NSXFirewallController;

	interface NSXFirewallDestinationsDto
	{
		readonly destinationList: java.util.List;
		readonly excluded: boolean;

	}

	interface NSXFirewallDestinationsDtoConstructor {
		new(value?:any): NSXFirewallDestinationsDto;
		readonly prototype: NSXFirewallDestinationsDto;
	}

	declare const NSXFirewallDestinationsDto: NSXFirewallDestinationsDtoConstructor;

	interface NSXFirewallDraftController
	{

		deleteFirewallDraftV4(connection?: NSXConnection, contextId?: String, draftId?: long): void;
		exportFirewallDraftV4(connection?: NSXConnection, contextId?: String, draftId?: long, getLatestForUniversal?: boolean): org.springframework.http.ResponseEntity;
		getFirewallDraftsV4(connection?: NSXConnection, contextId?: String): org.springframework.http.ResponseEntity;
		getFirewallDraftV4(connection?: NSXConnection, contextId?: String, draftId?: long, getLatestForUniversal?: boolean): org.springframework.http.ResponseEntity;
		importFirewallDraftV4(connection?: NSXConnection, contextId?: String, firewalldraftrestdto?: NSXFirewallDraftRESTDto): org.springframework.http.ResponseEntity;
		saveAsFirewallDraftV4(connection?: NSXConnection, contextId?: String, firewalldraftrestdto?: NSXFirewallDraftRESTDto): org.springframework.http.ResponseEntity;
		saveFirewallDraftV4(connection?: NSXConnection, contextId?: String, draftId?: long, firewalldraftrestdto?: NSXFirewallDraftRESTDto): org.springframework.http.ResponseEntity;
	}

	declare const NSXFirewallDraftController: NSXFirewallDraftController;

	interface NSXFirewallDraftRESTDto
	{
		readonly config: NSXFirewallConfigurationRESTDto;
		readonly description: String;
		readonly id: long;
		readonly mode: String;
		readonly name: String;
		readonly preserve: boolean;
		readonly timestamp: long;
		readonly user: String;

	}

	interface NSXFirewallDraftRESTDtoConstructor {
		new(value?:any): NSXFirewallDraftRESTDto;
		readonly prototype: NSXFirewallDraftRESTDto;
	}

	declare const NSXFirewallDraftRESTDto: NSXFirewallDraftRESTDtoConstructor;

	interface NSXFirewallDraftsRESTDto
	{
		readonly firewallDrafts: java.util.List;

	}

	interface NSXFirewallDraftsRESTDtoConstructor {
		new(value?:any): NSXFirewallDraftsRESTDto;
		readonly prototype: NSXFirewallDraftsRESTDto;
	}

	declare const NSXFirewallDraftsRESTDto: NSXFirewallDraftsRESTDtoConstructor;

	interface NSXFirewallDraftsUIDto
	{
		readonly firewallDrafts: java.util.List;

	}

	interface NSXFirewallDraftsUIDtoConstructor {
		new(value?:any): NSXFirewallDraftsUIDto;
		readonly prototype: NSXFirewallDraftsUIDto;
	}

	declare const NSXFirewallDraftsUIDto: NSXFirewallDraftsUIDtoConstructor;

	interface NSXFirewallDraftUIDto
	{
		readonly config: NSXFirewallConfigurationUIDto;
		readonly description: String;
		readonly id: long;
		readonly mode: String;
		readonly name: String;
		readonly preserve: boolean;
		readonly timestamp: long;
		readonly user: String;

	}

	interface NSXFirewallDraftUIDtoConstructor {
		new(value?:any): NSXFirewallDraftUIDto;
		readonly prototype: NSXFirewallDraftUIDto;
	}

	declare const NSXFirewallDraftUIDto: NSXFirewallDraftUIDtoConstructor;

	interface NSXFirewallEventConfigurationDto
	{
		readonly enabled: String;
		readonly severity: String;

	}

	interface NSXFirewallEventConfigurationDtoConstructor {
		new(value?:any): NSXFirewallEventConfigurationDto;
		readonly prototype: NSXFirewallEventConfigurationDto;
	}

	declare const NSXFirewallEventConfigurationDto: NSXFirewallEventConfigurationDtoConstructor;

	interface NSXFirewallEventsController
	{

		getEventConfigurationV4(connection?: NSXConnection): NSXFirewallEventConfigurationDto;
		setEventConfigurationV4(connection?: NSXConnection, firewalleventconfigurationdto?: NSXFirewallEventConfigurationDto): void;
	}

	declare const NSXFirewallEventsController: NSXFirewallEventsController;

	interface NSXFirewallFailedpublishinfoDto
	{
		readonly applianceHostInfo: NSXObjectInfoDto;
		readonly errorDescription: String;
		readonly timestamp: long;

	}

	interface NSXFirewallFailedpublishinfoDtoConstructor {
		new(value?:any): NSXFirewallFailedpublishinfoDto;
		readonly prototype: NSXFirewallFailedpublishinfoDto;
	}

	declare const NSXFirewallFailedpublishinfoDto: NSXFirewallFailedpublishinfoDtoConstructor;

	interface NSXFirewallFilteredConfigurationRESTDto
	{
		readonly contextId: String;
		readonly generationNumber: String;
		readonly layer2Sections: NSXFirewallLayer2SectionsDto;
		readonly layer3RedirectSections: NSXFirewallLayer3RedirectSectionsDto;
		readonly layer3Sections: NSXFirewallLayer3SectionsDto;
		readonly provisioned: boolean;
		readonly timestamp: long;

	}

	interface NSXFirewallFilteredConfigurationRESTDtoConstructor {
		new(value?:any): NSXFirewallFilteredConfigurationRESTDto;
		readonly prototype: NSXFirewallFilteredConfigurationRESTDto;
	}

	declare const NSXFirewallFilteredConfigurationRESTDto: NSXFirewallFilteredConfigurationRESTDtoConstructor;

	interface NSXFirewallFirewallconfighistoryinfoDto
	{
		readonly configId: long;
		readonly status: String;
		readonly timestamp: long;
		readonly userId: String;

	}

	interface NSXFirewallFirewallconfighistoryinfoDtoConstructor {
		new(value?:any): NSXFirewallFirewallconfighistoryinfoDto;
		readonly prototype: NSXFirewallFirewallconfighistoryinfoDto;
	}

	declare const NSXFirewallFirewallconfighistoryinfoDto: NSXFirewallFirewallconfighistoryinfoDtoConstructor;

	interface NSXFirewallFirewallruleDto
	{
		readonly action: String;
		readonly appliedToList: NSXAppliedToListDto;
		readonly destinations: NSXFirewallDestinationsDto;
		readonly direction: String;
		readonly disabled: boolean;
		readonly displayRuleId: String;
		readonly dlbAlgorithmType: String;
		readonly dscpMarking: String;
		readonly id: long;
		readonly logged: boolean;
		readonly managedBy: String;
		readonly name: String;
		readonly notes: String;
		readonly packetType: String;
		readonly persistenceTimeout: String;
		readonly precedence: String;
		readonly section: NSXFirewallSectionDto;
		readonly sectionId: String;
		readonly services: NSXFirewallServicesDto;
		readonly siProfile: NSXBasicDomainObjectInfo;
		readonly siRuleIdList: NSXFirewallSiRuleDto;
		readonly siVirtualserver: String;
		readonly sources: NSXFirewallSourcesDto;
		readonly stateless: boolean;
		readonly tag: String;
		readonly type: String;

	}

	interface NSXFirewallFirewallruleDtoConstructor {
		new(value?:any): NSXFirewallFirewallruleDto;
		readonly prototype: NSXFirewallFirewallruleDto;
	}

	declare const NSXFirewallFirewallruleDto: NSXFirewallFirewallruleDtoConstructor;

	interface NSXFirewallFirewallrulesDto
	{
		readonly generationNumber: String;
		readonly rules: java.util.List;

	}

	interface NSXFirewallFirewallrulesDtoConstructor {
		new(value?:any): NSXFirewallFirewallrulesDto;
		readonly prototype: NSXFirewallFirewallrulesDto;
	}

	declare const NSXFirewallFirewallrulesDto: NSXFirewallFirewallrulesDtoConstructor;

	interface NSXFirewallFlowfirewallruleinfoDto
	{
		readonly firewallRule: NSXFirewallFirewallruleDto;
		readonly newFeaturesEnabled: boolean;
		readonly readyToSwitch: boolean;
		readonly scope: NSXBasicDomainObjectInfo;
		readonly sections: java.util.List;
		readonly status: String;

	}

	interface NSXFirewallFlowfirewallruleinfoDtoConstructor {
		new(value?:any): NSXFirewallFlowfirewallruleinfoDto;
		readonly prototype: NSXFirewallFlowfirewallruleinfoDto;
	}

	declare const NSXFirewallFlowfirewallruleinfoDto: NSXFirewallFlowfirewallruleinfoDtoConstructor;

	interface NSXFirewallGlobalConfigController
	{

		getGlobalConfigurationV4(connection?: NSXConnection): org.springframework.http.ResponseEntity;
		saveGlobalConfigurationV4(connection?: NSXConnection, globalconfigurationdto?: NSXGlobalConfigurationDto): org.springframework.http.ResponseEntity;
	}

	declare const NSXFirewallGlobalConfigController: NSXFirewallGlobalConfigController;

	interface NSXFirewallGlobalConfigDto
	{
		readonly dropInvalidTraffic: boolean;
		readonly icmp6Timeout: Integer;
		readonly icmpTimeout: Integer;
		readonly ipGenericTimeout: Integer;
		readonly logInvalidTraffic: boolean;
		readonly tcpAllowOutOfWindowPackets: boolean;
		readonly tcpPickOngoingConnections: boolean;
		readonly tcpSendResetForClosedVsePorts: boolean;
		readonly tcpTimeoutClose: Integer;
		readonly tcpTimeoutEstablished: Integer;
		readonly tcpTimeoutOpen: Integer;
		readonly udpTimeout: Integer;

	}

	interface NSXFirewallGlobalConfigDtoConstructor {
		new(value?:any): NSXFirewallGlobalConfigDto;
		readonly prototype: NSXFirewallGlobalConfigDto;
	}

	declare const NSXFirewallGlobalConfigDto: NSXFirewallGlobalConfigDtoConstructor;

	interface NSXFirewallInternalRestController
	{

	}

	declare const NSXFirewallInternalRestController: NSXFirewallInternalRestController;

	interface NSXFirewallIPFixController
	{

		deleteFlowFirewallIpfixConfigV4(connection?: NSXConnection, contextId?: String): void;
		getFlowFirewallIpfixConfigV4(connection?: NSXConnection, contextId?: String): org.springframework.http.ResponseEntity;
		saveFlowFirewallIpfixConfigV4(connection?: NSXConnection, contextId?: String, flowfirewallipfixconfigdto?: NSXFlowFirewallIpfixConfigDto): org.springframework.http.ResponseEntity;
	}

	declare const NSXFirewallIPFixController: NSXFirewallIPFixController;

	interface NSXFirewallLayer2SectionsDto
	{
		readonly layer2Sections: java.util.List;

	}

	interface NSXFirewallLayer2SectionsDtoConstructor {
		new(value?:any): NSXFirewallLayer2SectionsDto;
		readonly prototype: NSXFirewallLayer2SectionsDto;
	}

	declare const NSXFirewallLayer2SectionsDto: NSXFirewallLayer2SectionsDtoConstructor;

	interface NSXFirewallLayer3RedirectSectionsDto
	{
		readonly layer3RedirectSections: java.util.List;

	}

	interface NSXFirewallLayer3RedirectSectionsDtoConstructor {
		new(value?:any): NSXFirewallLayer3RedirectSectionsDto;
		readonly prototype: NSXFirewallLayer3RedirectSectionsDto;
	}

	declare const NSXFirewallLayer3RedirectSectionsDto: NSXFirewallLayer3RedirectSectionsDtoConstructor;

	interface NSXFirewallLayer3SectionsDto
	{
		readonly layer3Sections: java.util.List;

	}

	interface NSXFirewallLayer3SectionsDtoConstructor {
		new(value?:any): NSXFirewallLayer3SectionsDto;
		readonly prototype: NSXFirewallLayer3SectionsDto;
	}

	declare const NSXFirewallLayer3SectionsDto: NSXFirewallLayer3SectionsDtoConstructor;

	interface NSXFirewallMessagingController
	{

		getClientsV4(connection?: NSXConnection, resource?: String): NSXHostInformationDto[];
		getFilterConfigurationV4(connection?: NSXConnection, hostId?: String): org.springframework.http.ResponseEntity;
		getFiltersV4(connection?: NSXConnection, hostId?: String): org.springframework.http.ResponseEntity;
	}

	declare const NSXFirewallMessagingController: NSXFirewallMessagingController;

	interface NSXFirewallPermissionsinfoDto
	{
		readonly accessPermission: NSXInteractionPermissionsDto;
		readonly dataPermission: NSXDataPermissionsDto;
		readonly isAppLicensed: boolean;

	}

	interface NSXFirewallPermissionsinfoDtoConstructor {
		new(value?:any): NSXFirewallPermissionsinfoDto;
		readonly prototype: NSXFirewallPermissionsinfoDto;
	}

	declare const NSXFirewallPermissionsinfoDto: NSXFirewallPermissionsinfoDtoConstructor;

	interface NSXFirewallRestcontrollerFirewallcontroller
	{

		addFirewallConfigLayer2SectionV4(connection?: NSXConnection, contextId?: String, autoSaveDraft?: String, operation?: String, anchorId?: String, firewallsectionrestdto?: NSXFirewallSectionRESTDto): org.springframework.http.ResponseEntity;
		addFirewallConfigLayer3SectionV4(connection?: NSXConnection, contextId?: String, operation?: String, anchorId?: String, autoSaveDraft?: String, firewallsectionrestdto?: NSXFirewallSectionRESTDto): org.springframework.http.ResponseEntity;
		addFirewallConfigTrafficSteeringSectionV4(connection?: NSXConnection, contextId?: String, firewallsectionrestdto?: NSXFirewallSectionRESTDto, operation?: String, anchorId?: String, autoSaveDraft?: String): org.springframework.http.ResponseEntity;
		addFirewallSectionV4(connection?: NSXConnection, autoSaveDraft?: String, token?: String, operation?: String, anchorId?: String, firewallsectionrestdto?: NSXFirewallSectionRESTDto): org.springframework.http.ResponseEntity;
		addLayer2RuleV4(connection?: NSXConnection, autoSaveDraft?: String, contextId?: String, sectionId?: String, firewallruledto?: NSXFirewallFirewallruleDto, IfMatch?: String): org.springframework.http.ResponseEntity;
		addLayer3RuleV4(connection?: NSXConnection, autoSaveDraft?: String, contextId?: String, sectionId?: String, firewallruledto?: NSXFirewallFirewallruleDto, IfMatch?: String): org.springframework.http.ResponseEntity;
		addLayer3TrafficSteeringRuleV4(connection?: NSXConnection, contextId?: String, autoSaveDraft?: String, sectionId?: String, firewallruledto?: NSXFirewallFirewallruleDto, IfMatch?: String): org.springframework.http.ResponseEntity;
		addRuleV4(connection?: NSXConnection, firewallruledto?: NSXFirewallFirewallruleDto, autoSaveDraft?: String, sectionId?: String, IfMatch?: String): org.springframework.http.ResponseEntity;
		deleteFirewallConfigV4(connection?: NSXConnection, contextId?: String, autoSaveDraft?: String): org.springframework.http.ResponseEntity;
		deleteLayer2RuleV4(connection?: NSXConnection, autoSaveDraft?: String, ruleId?: long, contextId?: String, sectionId?: String, IfMatch?: String): org.springframework.http.ResponseEntity;
		deleteLayer2SectionV4(connection?: NSXConnection, contextId?: String, sectionId?: String, autoSaveDraft?: String): void;
		deleteLayer3RuleV4(connection?: NSXConnection, autoSaveDraft?: String, ruleId?: long, contextId?: String, sectionId?: String, IfMatch?: String): org.springframework.http.ResponseEntity;
		deleteLayer3SectionV4(connection?: NSXConnection, contextId?: String, sectionId?: String, autoSaveDraft?: String): void;
		deleteLayer3TrafficSteeringRuleV4(connection?: NSXConnection, autoSaveDraft?: String, ruleId?: long, contextId?: String, sectionId?: String, IfMatch?: String): org.springframework.http.ResponseEntity;
		deleteLayer3TrafficSteeringSectionV4(connection?: NSXConnection, contextId?: String, autoSaveDraft?: String, sectionId?: String): void;
		deleteRuleV4(connection?: NSXConnection, autoSaveDraft?: String, sectionId?: String, ruleId?: long, IfMatch?: String): org.springframework.http.ResponseEntity;
		deleteSectionV4(connection?: NSXConnection, sectionId?: String, token?: String, autoSaveDraft?: String): void;
		enableFirewallV4(connection?: NSXConnection, contextId?: String, enable?: boolean): org.springframework.http.ResponseEntity;
		forcesyncV4(connection?: NSXConnection, contextId?: String): void;
		getAllFirewallRulesForAnEdgeV4(connection?: NSXConnection, contextId?: String, edgeId?: String): org.springframework.http.ResponseEntity;
		getFilterSettingV4(connection?: NSXConnection, contextId?: String): org.springframework.http.ResponseEntity;
		getFirewallConfigLayer2SectionByNameV4(connection?: NSXConnection, name?: String, contextId?: String): org.springframework.http.ResponseEntity;
		getFirewallConfigLayer2SectionV4(connection?: NSXConnection, sectionId?: String, contextId?: String): org.springframework.http.ResponseEntity;
		getFirewallConfigLayer3SectionByNameV4(connection?: NSXConnection, name?: String, contextId?: String): org.springframework.http.ResponseEntity;
		getFirewallConfigLayer3SectionV4(connection?: NSXConnection, sectionId?: String, contextId?: String): org.springframework.http.ResponseEntity;
		getFirewallConfigLayer3TrafficSteeringSectionByNameV4(connection?: NSXConnection, name?: String, contextId?: String): org.springframework.http.ResponseEntity;
		getFirewallConfigLayer3TrafficSteeringSectionV4(connection?: NSXConnection, sectionId?: String, contextId?: String): org.springframework.http.ResponseEntity;
		getFirewallConfigV4(connection?: NSXConnection, contextId?: String): org.springframework.http.ResponseEntity;
		getFirewallRuleLayer2V4(connection?: NSXConnection, ruleId?: long, sectionId?: String, contextId?: String): org.springframework.http.ResponseEntity;
		getFirewallRuleLayer3TrafficSteeringV4(connection?: NSXConnection, ruleId?: long, sectionId?: String, contextId?: String): org.springframework.http.ResponseEntity;
		getFirewallRuleLayer3V4(connection?: NSXConnection, ruleId?: long, sectionId?: String, contextId?: String): org.springframework.http.ResponseEntity;
		getFirewallSectionV4(connection?: NSXConnection, sectionId?: String): org.springframework.http.ResponseEntity;
		getFirewallStatusLayer2SectionV4(connection?: NSXConnection, contextId?: String, sectionId?: String, hostOrClusterId?: String): org.springframework.http.ResponseEntity;
		getFirewallStatusLayer3SectionV4(connection?: NSXConnection, contextId?: String, sectionId?: String, hostOrClusterId?: String): org.springframework.http.ResponseEntity;
		getFirewallStatusSectionV4(connection?: NSXConnection, sectionId?: String, hostOrClusterId?: String): org.springframework.http.ResponseEntity;
		getFirewallStatusV4(connection?: NSXConnection, contextId?: String, hostOrClusterId?: String): org.springframework.http.ResponseEntity;
		getRuleV4(connection?: NSXConnection, ruleId?: long, sectionId?: String): org.springframework.http.ResponseEntity;
		getSectionsV4(connection?: NSXConnection, managedBy?: String, type?: NSXType): org.springframework.http.ResponseEntity;
		getSwitchStateV4(connection?: NSXConnection, contextId?: String): org.springframework.http.ResponseEntity;
		getTrafficSteeringProfilesV4(connection?: NSXConnection): org.springframework.http.ResponseEntity;
		reviseFirewallSectionV4(connection?: NSXConnection, autoSaveDraft?: String, contextId?: String, sectionId?: String, firewallsectionrestdto?: NSXFirewallSectionRESTDto, operation?: String, anchorId?: String, IfMatch?: String): org.springframework.http.ResponseEntity;
		reviseFirewallSectionWithoutContextIdV4(connection?: NSXConnection, autoSaveDraft?: String, sectionId?: String, firewallsectionrestdto?: NSXFirewallSectionRESTDto, operation?: String, anchorId?: String, IfMatch?: String): org.springframework.http.ResponseEntity;
		saveFirewallConfigV4(connection?: NSXConnection, autoSaveDraft?: String, contextId?: String, firewallconfigurationrestdto?: NSXFirewallConfigurationRESTDto, IfMatch?: String): org.springframework.http.ResponseEntity;
		setFilterSettingV4(connection?: NSXConnection, contextId?: String, enabled?: boolean): org.springframework.http.ResponseEntity;
		switchStateV4(connection?: NSXConnection, contextId?: String): org.springframework.http.ResponseEntity;
		updateFirewallConfigLayer2SectionV4(connection?: NSXConnection, autoSaveDraft?: String, contextId?: String, sectionId?: String, firewallsectionrestdto?: NSXFirewallSectionRESTDto, IfMatch?: String): org.springframework.http.ResponseEntity;
		updateFirewallConfigLayer3SectionV4(connection?: NSXConnection, autoSaveDraft?: String, contextId?: String, sectionId?: String, firewallsectionrestdto?: NSXFirewallSectionRESTDto, IfMatch?: String): org.springframework.http.ResponseEntity;
		updateFirewallConfigLayer3TrafficSteeringSectionV4(connection?: NSXConnection, autoSaveDraft?: String, contextId?: String, sectionId?: String, firewallsectionrestdto?: NSXFirewallSectionRESTDto, IfMatch?: String): org.springframework.http.ResponseEntity;
		updateLayer2RuleV4(connection?: NSXConnection, firewallruledto?: NSXFirewallFirewallruleDto, autoSaveDraft?: String, contextId?: String, sectionId?: String, ruleId?: long, IfMatch?: String): org.springframework.http.ResponseEntity;
		updateLayer3RuleV4(connection?: NSXConnection, firewallruledto?: NSXFirewallFirewallruleDto, autoSaveDraft?: String, contextId?: String, sectionId?: String, ruleId?: long, IfMatch?: String): org.springframework.http.ResponseEntity;
		updateLayer3TrafficSteeringRuleV4(connection?: NSXConnection, firewallruledto?: NSXFirewallFirewallruleDto, autoSaveDraft?: String, contextId?: String, sectionId?: String, ruleId?: long, IfMatch?: String): org.springframework.http.ResponseEntity;
		updateRuleV4(connection?: NSXConnection, firewallruledto?: NSXFirewallFirewallruleDto, autoSaveDraft?: String, sectionId?: String, ruleId?: long, IfMatch?: String): org.springframework.http.ResponseEntity;
		updateSectionV4(connection?: NSXConnection, autoSaveDraft?: String, sectionId?: String, token?: String, firewallsectionrestdto?: NSXFirewallSectionRESTDto, IfMatch?: String): org.springframework.http.ResponseEntity;
	}

	declare const NSXFirewallRestcontrollerFirewallcontroller: NSXFirewallRestcontrollerFirewallcontroller;

	interface NSXFirewallRule
	{
		readonly action: String;
		readonly destination: String[];
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly ruleName: String;
		readonly source: String[];

	}

	interface NSXFirewallRuleConstructor {
		new(value?:any): NSXFirewallRule;
		readonly prototype: NSXFirewallRule;
	}

	declare const NSXFirewallRule: NSXFirewallRuleConstructor;

	interface NSXFirewallRuleBaseDto
	{
		readonly action: String;
		readonly description: String;
		readonly direction: String;
		readonly enabled: boolean;
		readonly invalidApplication: boolean;
		readonly invalidDestination: boolean;
		readonly invalidSource: boolean;
		readonly loggingEnabled: boolean;
		readonly matchTranslated: boolean;
		readonly name: String;
		readonly ruleId: long;
		readonly ruleTag: long;
		readonly ruleType: String;
		readonly statistics: NSXFirewallRuleStatsDto;

	}

	interface NSXFirewallRuleBaseDtoConstructor {
		new(value?:any): NSXFirewallRuleBaseDto;
		readonly prototype: NSXFirewallRuleBaseDto;
	}

	declare const NSXFirewallRuleBaseDto: NSXFirewallRuleBaseDtoConstructor;

	interface NSXFirewallRuleflowstatsDto
	{
		readonly bytes: long;
		readonly packets: long;
		readonly ruleId: long;

	}

	interface NSXFirewallRuleflowstatsDtoConstructor {
		new(value?:any): NSXFirewallRuleflowstatsDto;
		readonly prototype: NSXFirewallRuleflowstatsDto;
	}

	declare const NSXFirewallRuleflowstatsDto: NSXFirewallRuleflowstatsDtoConstructor;

	interface NSXFirewallRuleGwemDto
	{
		readonly action: int;
		readonly destination: NSXAddressGwemDto;
		readonly id: long;
		readonly log: boolean;
		readonly op: long;
		readonly protocol: NSXProtocolGwemDto;
		readonly source: NSXAddressGwemDto;

	}

	interface NSXFirewallRuleGwemDtoConstructor {
		new(value?:any): NSXFirewallRuleGwemDto;
		readonly prototype: NSXFirewallRuleGwemDto;
	}

	declare const NSXFirewallRuleGwemDto: NSXFirewallRuleGwemDtoConstructor;

	interface NSXFirewallRuleListGwemDto
	{
		readonly rule: java.util.List;

	}

	interface NSXFirewallRuleListGwemDtoConstructor {
		new(value?:any): NSXFirewallRuleListGwemDto;
		readonly prototype: NSXFirewallRuleListGwemDto;
	}

	declare const NSXFirewallRuleListGwemDto: NSXFirewallRuleListGwemDtoConstructor;

	interface NSXFirewallRuleResponseDto
	{
		readonly generationNumber: String;
		readonly rule: NSXFirewallFirewallruleDto;
		readonly sectionContextId: String;

	}

	interface NSXFirewallRuleResponseDtoConstructor {
		new(value?:any): NSXFirewallRuleResponseDto;
		readonly prototype: NSXFirewallRuleResponseDto;
	}

	declare const NSXFirewallRuleResponseDto: NSXFirewallRuleResponseDtoConstructor;

	interface NSXFirewallRules
	{
		readonly firewallRules: NSXFirewallRule[];

	}

	interface NSXFirewallRulesConstructor {
		new(value?:any): NSXFirewallRules;
		readonly prototype: NSXFirewallRules;
	}

	declare const NSXFirewallRules: NSXFirewallRulesConstructor;

	interface NSXFirewallRulesDto
	{
		readonly firewallRules: java.util.List;

	}

	interface NSXFirewallRulesDtoConstructor {
		new(value?:any): NSXFirewallRulesDto;
		readonly prototype: NSXFirewallRulesDto;
	}

	declare const NSXFirewallRulesDto: NSXFirewallRulesDtoConstructor;

	interface NSXFirewallRuleStatsDto
	{
		readonly byteCount: long;
		readonly connectionCount: long;
		readonly packetCount: long;
		readonly timestamp: long;

	}

	interface NSXFirewallRuleStatsDtoConstructor {
		new(value?:any): NSXFirewallRuleStatsDto;
		readonly prototype: NSXFirewallRuleStatsDto;
	}

	declare const NSXFirewallRuleStatsDto: NSXFirewallRuleStatsDtoConstructor;

	interface NSXFirewallRulesTrinityDto
	{
		readonly firewallRules: java.util.List;

	}

	interface NSXFirewallRulesTrinityDtoConstructor {
		new(value?:any): NSXFirewallRulesTrinityDto;
		readonly prototype: NSXFirewallRulesTrinityDto;
	}

	declare const NSXFirewallRulesTrinityDto: NSXFirewallRulesTrinityDtoConstructor;

	interface NSXFirewallRuleTrinityDto
	{
		readonly action: String;
		readonly application: NSXApplicationTrinityDto;
		readonly description: String;
		readonly destination: NSXAddressTrinityDto;
		readonly direction: String;
		readonly enabled: boolean;
		readonly invalidApplication: boolean;
		readonly invalidDestination: boolean;
		readonly invalidSource: boolean;
		readonly loggingEnabled: boolean;
		readonly matchTranslated: boolean;
		readonly name: String;
		readonly ruleId: long;
		readonly ruleTag: long;
		readonly ruleType: String;
		readonly source: NSXAddressTrinityDto;
		readonly statistics: NSXFirewallRuleStatsDto;

	}

	interface NSXFirewallRuleTrinityDtoConstructor {
		new(value?:any): NSXFirewallRuleTrinityDto;
		readonly prototype: NSXFirewallRuleTrinityDto;
	}

	declare const NSXFirewallRuleTrinityDto: NSXFirewallRuleTrinityDtoConstructor;

	interface NSXFirewallSection
	{
		readonly contextId: String;
		readonly description: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: String;
		readonly ruleNames: String[];
		readonly type: String;

	}

	interface NSXFirewallSectionConstructor {
		new(value?:any): NSXFirewallSection;
		readonly prototype: NSXFirewallSection;
	}

	declare const NSXFirewallSection: NSXFirewallSectionConstructor;

	interface NSXFirewallSectionDto
	{
		readonly contextId: String;
		readonly description: String;
		readonly generationNumber: String;
		readonly id: String;
		readonly managedBy: String;
		readonly modified: boolean;
		readonly name: String;
		readonly position: Integer;
		readonly timestamp: long;
		readonly type: String;

	}

	interface NSXFirewallSectionDtoConstructor {
		new(value?:any): NSXFirewallSectionDto;
		readonly prototype: NSXFirewallSectionDto;
	}

	declare const NSXFirewallSectionDto: NSXFirewallSectionDtoConstructor;

	interface NSXFirewallSectionInv
	{
		readonly displayName: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;

	}

	interface NSXFirewallSectionInvConstructor {
		new(value?:any): NSXFirewallSectionInv;
		readonly prototype: NSXFirewallSectionInv;
	}

	declare const NSXFirewallSectionInv: NSXFirewallSectionInvConstructor;

	interface NSXFirewallSectionListDto
	{
		readonly sectionList: java.util.List;

	}

	interface NSXFirewallSectionListDtoConstructor {
		new(value?:any): NSXFirewallSectionListDto;
		readonly prototype: NSXFirewallSectionListDto;
	}

	declare const NSXFirewallSectionListDto: NSXFirewallSectionListDtoConstructor;

	interface NSXFirewallSectionRESTDto
	{
		readonly contextId: String;
		readonly description: String;
		readonly generationNumber: String;
		readonly id: String;
		readonly managedBy: String;
		readonly modified: boolean;
		readonly name: String;
		readonly position: Integer;
		readonly rules: java.util.List;
		readonly timestamp: long;
		readonly type: String;

	}

	interface NSXFirewallSectionRESTDtoConstructor {
		new(value?:any): NSXFirewallSectionRESTDto;
		readonly prototype: NSXFirewallSectionRESTDto;
	}

	declare const NSXFirewallSectionRESTDto: NSXFirewallSectionRESTDtoConstructor;

	interface NSXFirewallServiceDto
	{
		readonly destinationPort: String;
		readonly icmpCode: Integer;
		readonly ipSetValue: String;
		readonly isGlobal: boolean;
		readonly isValid: boolean;
		readonly name: String;
		readonly protocol: Integer;
		readonly protocolName: String;
		readonly sourcePort: String;
		readonly subProtocol: Integer;
		readonly subProtocolName: String;
		readonly type: String;
		readonly value: String;

	}

	interface NSXFirewallServiceDtoConstructor {
		new(value?:any): NSXFirewallServiceDto;
		readonly prototype: NSXFirewallServiceDto;
	}

	declare const NSXFirewallServiceDto: NSXFirewallServiceDtoConstructor;

	interface NSXFirewallServicesDto
	{
		readonly serviceList: java.util.List;

	}

	interface NSXFirewallServicesDtoConstructor {
		new(value?:any): NSXFirewallServicesDto;
		readonly prototype: NSXFirewallServicesDto;
	}

	declare const NSXFirewallServicesDto: NSXFirewallServicesDtoConstructor;

	interface NSXFirewallSiRuleDto
	{
		readonly siRuleIdList: java.util.List;

	}

	interface NSXFirewallSiRuleDtoConstructor {
		new(value?:any): NSXFirewallSiRuleDto;
		readonly prototype: NSXFirewallSiRuleDto;
	}

	declare const NSXFirewallSiRuleDto: NSXFirewallSiRuleDtoConstructor;

	interface NSXFirewallSourcesDto
	{
		readonly excluded: boolean;
		readonly sourceList: java.util.List;

	}

	interface NSXFirewallSourcesDtoConstructor {
		new(value?:any): NSXFirewallSourcesDto;
		readonly prototype: NSXFirewallSourcesDto;
	}

	declare const NSXFirewallSourcesDto: NSXFirewallSourcesDtoConstructor;

	interface NSXFirewallStaticInfoDto
	{
		readonly applicationProtocolDto: java.util.Collection;
		readonly appliedToTypes: java.util.List;
		readonly isKillSwitchOn: boolean;
		readonly l2ContainerTypes: java.util.List;
		readonly l3ContainerTypes: java.util.List;

	}

	interface NSXFirewallStaticInfoDtoConstructor {
		new(value?:any): NSXFirewallStaticInfoDto;
		readonly prototype: NSXFirewallStaticInfoDto;
	}

	declare const NSXFirewallStaticInfoDto: NSXFirewallStaticInfoDtoConstructor;

	interface NSXFirewallStatusClusterDto
	{
		readonly clusterId: String;
		readonly generationNumber: String;
		readonly generationNumberObjects: String;
		readonly status: String;

	}

	interface NSXFirewallStatusClusterDtoConstructor {
		new(value?:any): NSXFirewallStatusClusterDto;
		readonly prototype: NSXFirewallStatusClusterDto;
	}

	declare const NSXFirewallStatusClusterDto: NSXFirewallStatusClusterDtoConstructor;

	interface NSXFirewallStatusClusterRESTDto
	{
		readonly clusterId: String;
		readonly generationNumber: String;
		readonly generationNumberObjects: String;
		readonly hostStatusList: java.util.List;
		readonly status: String;

	}

	interface NSXFirewallStatusClusterRESTDtoConstructor {
		new(value?:any): NSXFirewallStatusClusterRESTDto;
		readonly prototype: NSXFirewallStatusClusterRESTDto;
	}

	declare const NSXFirewallStatusClusterRESTDto: NSXFirewallStatusClusterRESTDtoConstructor;

	interface NSXFirewallStatusClusterUIDto
	{
		readonly cluster: NSXBasicDomainObjectInfo;
		readonly clusterId: String;
		readonly generationNumber: String;
		readonly generationNumberObjects: String;
		readonly status: String;

	}

	interface NSXFirewallStatusClusterUIDtoConstructor {
		new(value?:any): NSXFirewallStatusClusterUIDto;
		readonly prototype: NSXFirewallStatusClusterUIDto;
	}

	declare const NSXFirewallStatusClusterUIDto: NSXFirewallStatusClusterUIDtoConstructor;

	interface NSXFirewallStatusDto
	{
		readonly currentState: String;
		readonly failedPublishInfo: java.util.List;
		readonly generationNumber: long;
		readonly scopeId: String;

	}

	interface NSXFirewallStatusDtoConstructor {
		new(value?:any): NSXFirewallStatusDto;
		readonly prototype: NSXFirewallStatusDto;
	}

	declare const NSXFirewallStatusDto: NSXFirewallStatusDtoConstructor;

	interface NSXFirewallStatusHostDto
	{
		readonly clusterId: String;
		readonly endTime: long;
		readonly errorCode: int;
		readonly errorMessage: String;
		readonly generationNumber: String;
		readonly generationNumberObjects: String;
		readonly hostId: String;
		readonly hostName: String;
		readonly startTime: long;
		readonly status: String;

	}

	interface NSXFirewallStatusHostDtoConstructor {
		new(value?:any): NSXFirewallStatusHostDto;
		readonly prototype: NSXFirewallStatusHostDto;
	}

	declare const NSXFirewallStatusHostDto: NSXFirewallStatusHostDtoConstructor;

	interface NSXFirewallStatusRESTDto
	{
		readonly clusterList: java.util.List;
		readonly currentState: String;
		readonly failedPublishInfo: java.util.List;
		readonly generationNumber: long;
		readonly scopeId: String;

	}

	interface NSXFirewallStatusRESTDtoConstructor {
		new(value?:any): NSXFirewallStatusRESTDto;
		readonly prototype: NSXFirewallStatusRESTDto;
	}

	declare const NSXFirewallStatusRESTDto: NSXFirewallStatusRESTDtoConstructor;

	interface NSXFirewallStatusUIDto
	{
		readonly clusterStatusList: java.util.List;
		readonly currentState: String;
		readonly failedPublishInfo: java.util.List;
		readonly generationNumber: long;
		readonly hostStatusList: java.util.List;
		readonly scopeId: String;

	}

	interface NSXFirewallStatusUIDtoConstructor {
		new(value?:any): NSXFirewallStatusUIDto;
		readonly prototype: NSXFirewallStatusUIDto;
	}

	declare const NSXFirewallStatusUIDto: NSXFirewallStatusUIDtoConstructor;

	interface NSXFirewallSwitchStateDto
	{
		readonly contextId: String;
		readonly jobId: String;
		readonly state: String;
		readonly timestamp: long;
		readonly userId: String;

	}

	interface NSXFirewallSwitchStateDtoConstructor {
		new(value?:any): NSXFirewallSwitchStateDto;
		readonly prototype: NSXFirewallSwitchStateDto;
	}

	declare const NSXFirewallSwitchStateDto: NSXFirewallSwitchStateDtoConstructor;

	interface NSXFirewallThresholdsController
	{

		getEventThresholdsV4(connection?: NSXConnection): org.springframework.http.ResponseEntity;
		saveEventThresholdsV4(connection?: NSXConnection, eventthresholdsdto?: NSXEventThresholdsDto): org.springframework.http.ResponseEntity;
	}

	declare const NSXFirewallThresholdsController: NSXFirewallThresholdsController;

	interface NSXFirewallTimeoutConfigurationController
	{

		addFirewallTimeoutConfigurationV4(connection?: NSXConnection, contextId?: String, firewalltimeoutconfigurationdto?: NSXFirewallTimeoutConfigurationDto): org.springframework.http.ResponseEntity;
		deleteFirewallTimeoutConfigurationV4(connection?: NSXConnection, contextId?: String, configId?: long): org.springframework.http.ResponseEntity;
		getFirewallTimeoutConfigurationV4(connection?: NSXConnection, contextId?: String, configId?: long): org.springframework.http.ResponseEntity;
		listAllFirewallTimeoutConfigurationV4(connection?: NSXConnection, contextId?: String): org.springframework.http.ResponseEntity;
		updateFirewallTimeoutConfigurationV4(connection?: NSXConnection, contextId?: String, configId?: long, firewalltimeoutconfigurationdto?: NSXFirewallTimeoutConfigurationDto): org.springframework.http.ResponseEntity;
	}

	declare const NSXFirewallTimeoutConfigurationController: NSXFirewallTimeoutConfigurationController;

	interface NSXFirewallTimeoutConfigurationDto
	{
		readonly appliedToList: NSXAppliedToListDto;
		readonly description: String;
		readonly generationNumber: long;
		readonly icmpErrorReply: long;
		readonly icmpFirstPacket: long;
		readonly id: long;
		readonly isDefault: boolean;
		readonly name: String;
		readonly tcpClosed: long;
		readonly tcpClosing: long;
		readonly tcpEstablished: long;
		readonly tcpFinWait: long;
		readonly tcpFirstPacket: long;
		readonly tcpOpen: long;
		readonly udpFirstPacket: long;
		readonly udpMultiple: long;
		readonly udpSingle: long;

	}

	interface NSXFirewallTimeoutConfigurationDtoConstructor {
		new(value?:any): NSXFirewallTimeoutConfigurationDto;
		readonly prototype: NSXFirewallTimeoutConfigurationDto;
	}

	declare const NSXFirewallTimeoutConfigurationDto: NSXFirewallTimeoutConfigurationDtoConstructor;

	interface NSXFirewallTimeoutConfigurationsDto
	{
		readonly timeoutConfigList: java.util.List;

	}

	interface NSXFirewallTimeoutConfigurationsDtoConstructor {
		new(value?:any): NSXFirewallTimeoutConfigurationsDto;
		readonly prototype: NSXFirewallTimeoutConfigurationsDto;
	}

	declare const NSXFirewallTimeoutConfigurationsDto: NSXFirewallTimeoutConfigurationsDtoConstructor;

	interface NSXFirewallTrinityController
	{

		addFirewallRuleV4(connection?: NSXConnection, edgeId?: String, firewallruletrinitydto?: NSXFirewallRuleTrinityDto, aboveRuleId?: long): void;
		appendFirewallRulesV4(connection?: NSXConnection, edgeId?: String, firewallrulestrinitydto?: NSXFirewallRulesTrinityDto): void;
		configureGlobalConfigV4(connection?: NSXConnection, edgeId?: String, firewallglobalconfigdto?: NSXFirewallGlobalConfigDto): void;
		configureV4(connection?: NSXConnection, edgeId?: String, firewallconfigtrinitydto?: NSXFirewallConfigTrinityDto): void;
		deleteFirewallConfigV4(connection?: NSXConnection, edgeId?: String): void;
		deleteFirewallRuleV4(connection?: NSXConnection, edgeId?: String, ruleId?: long): void;
		getDefaultPolicyV4(connection?: NSXConnection, edgeId?: String): NSXDefaultPolicyDto;
		getFirewallConfigV4(connection?: NSXConnection, edgeId?: String, showPreRules?: boolean): NSXFirewallConfigTrinityDto;
		getFirewallGlobalConfigV4(connection?: NSXConnection, edgeId?: String): NSXFirewallGlobalConfigDto;
		getFirewallRuleStatsV4(connection?: NSXConnection, edgeId?: String, ruleId?: long): NSXFirewallRuleStatsDto;
		getFirewallRuleV4(connection?: NSXConnection, edgeId?: String, ruleId?: long): NSXFirewallRuleTrinityDto;
		updateDefaultPolicyV4(connection?: NSXConnection, edgeId?: String, defaultpolicydto?: NSXDefaultPolicyDto): void;
		updateFirewallRuleV4(connection?: NSXConnection, edgeId?: String, ruleId?: long, firewallruletrinitydto?: NSXFirewallRuleTrinityDto): void;
	}

	declare const NSXFirewallTrinityController: NSXFirewallTrinityController;

	interface NSXFlowAttributeDto
	{
		readonly bytes: long;
		readonly packets: long;
		readonly sessions: long;

	}

	interface NSXFlowAttributeDtoConstructor {
		new(value?:any): NSXFlowAttributeDto;
		readonly prototype: NSXFlowAttributeDto;
	}

	declare const NSXFlowAttributeDto: NSXFlowAttributeDtoConstructor;

	interface NSXFlowConfigurationDto
	{
		readonly collectFlows: boolean;
		readonly destinationContainers: java.util.List;
		readonly ignoreBlockedFlows: boolean;
		readonly ignoreDestIPSet: String;
		readonly ignoreLayer2Flows: boolean;
		readonly ignorePortSet: String;
		readonly ignoreSourceIPSet: String;
		readonly serviceContainers: java.util.List;
		readonly sourceContainers: java.util.List;

	}

	interface NSXFlowConfigurationDtoConstructor {
		new(value?:any): NSXFlowConfigurationDto;
		readonly prototype: NSXFlowConfigurationDto;
	}

	declare const NSXFlowConfigurationDto: NSXFlowConfigurationDtoConstructor;

	interface NSXFlowController
	{

	}

	declare const NSXFlowController: NSXFlowController;

	interface NSXFlowDataPointsDto
	{
		readonly data: long;
		readonly timeStamp: long;

	}

	interface NSXFlowDataPointsDtoConstructor {
		new(value?:any): NSXFlowDataPointsDto;
		readonly prototype: NSXFlowDataPointsDto;
	}

	declare const NSXFlowDataPointsDto: NSXFlowDataPointsDtoConstructor;

	interface NSXFlowDetailsDataDto
	{
		readonly bytes: long;
		readonly isService: boolean;
		readonly packets: long;
		readonly serviceId: String;
		readonly serviceName: String;
		readonly sessions: long;

	}

	interface NSXFlowDetailsDataDtoConstructor {
		new(value?:any): NSXFlowDetailsDataDto;
		readonly prototype: NSXFlowDetailsDataDto;
	}

	declare const NSXFlowDetailsDataDto: NSXFlowDetailsDataDtoConstructor;

	interface NSXFlowDetailsDto
	{
		readonly context: NSXBasicDomainObjectInfo;
		readonly endDate: long;
		readonly flowType: String;
		readonly services: java.util.Collection;
		readonly startDate: long;

	}

	interface NSXFlowDetailsDtoConstructor {
		new(value?:any): NSXFlowDetailsDto;
		readonly prototype: NSXFlowDetailsDto;
	}

	declare const NSXFlowDetailsDto: NSXFlowDetailsDtoConstructor;

	interface NSXFlowFirewallIpfixConfigDto
	{
		readonly contextId: String;
		readonly domainId: int;
		readonly ipPortList: java.util.List;
		readonly isIpfixEnabled: boolean;
		readonly timeout: int;

	}

	interface NSXFlowFirewallIpfixConfigDtoConstructor {
		new(value?:any): NSXFlowFirewallIpfixConfigDto;
		readonly prototype: NSXFlowFirewallIpfixConfigDto;
	}

	declare const NSXFlowFirewallIpfixConfigDto: NSXFlowFirewallIpfixConfigDtoConstructor;

	interface NSXFlowFirewallRuleInfoDto
	{
		readonly firewallRule: NSXAppFirewallUiFirewallruleDto;
		readonly scope: NSXBasicDomainObjectInfo;
		readonly status: String;

	}

	interface NSXFlowFirewallRuleInfoDtoConstructor {
		new(value?:any): NSXFlowFirewallRuleInfoDto;
		readonly prototype: NSXFlowFirewallRuleInfoDto;
	}

	declare const NSXFlowFirewallRuleInfoDto: NSXFlowFirewallRuleInfoDtoConstructor;

	interface NSXFlowObjectInfoDto
	{
		readonly ipAddress: String;
		readonly macAddress: String;
		readonly type: String;
		readonly vmId: String;
		readonly vmName: String;

	}

	interface NSXFlowObjectInfoDtoConstructor {
		new(value?:any): NSXFlowObjectInfoDto;
		readonly prototype: NSXFlowObjectInfoDto;
	}

	declare const NSXFlowObjectInfoDto: NSXFlowObjectInfoDtoConstructor;

	interface NSXFlowPagedDetailsDto
	{
		readonly context: NSXBasicDomainObjectInfo;
		readonly endDate: long;
		readonly flowType: String;
		readonly hasMoreRecords: boolean;
		readonly services: java.util.Collection;
		readonly startDate: long;

	}

	interface NSXFlowPagedDetailsDtoConstructor {
		new(value?:any): NSXFlowPagedDetailsDto;
		readonly prototype: NSXFlowPagedDetailsDto;
	}

	declare const NSXFlowPagedDetailsDto: NSXFlowPagedDetailsDtoConstructor;

	interface NSXFlowPagedServiceDetailsDto
	{
		readonly bytes: long;
		readonly flowType: String;
		readonly hasMoreRecords: boolean;
		readonly packets: long;
		readonly serviceId: String;
		readonly serviceName: String;
		readonly sessions: long;
		readonly tableData: java.util.Collection;

	}

	interface NSXFlowPagedServiceDetailsDtoConstructor {
		new(value?:any): NSXFlowPagedServiceDetailsDto;
		readonly prototype: NSXFlowPagedServiceDetailsDto;
	}

	declare const NSXFlowPagedServiceDetailsDto: NSXFlowPagedServiceDetailsDtoConstructor;

	interface NSXFlowPermissionDto
	{
		readonly isAppLicensed: boolean;
		readonly userPermissions: NSXInteractionPermissionsDto;

	}

	interface NSXFlowPermissionDtoConstructor {
		new(value?:any): NSXFlowPermissionDto;
		readonly prototype: NSXFlowPermissionDto;
	}

	declare const NSXFlowPermissionDto: NSXFlowPermissionDtoConstructor;

	interface NSXFlowServiceDataDto
	{
		readonly applicationContext: String;
		readonly bytes: long;
		readonly defaultRule: boolean;
		readonly destinationIdentityGraph: java.util.Map;
		readonly destinationName: String;
		readonly displayRuleId: long;
		readonly endDate: long;
		readonly packets: long;
		readonly ruleId: long;
		readonly sessions: long;
		readonly sourceIdentityGraph: java.util.Map;
		readonly sourceName: String;
		readonly startDate: long;

	}

	interface NSXFlowServiceDataDtoConstructor {
		new(value?:any): NSXFlowServiceDataDto;
		readonly prototype: NSXFlowServiceDataDto;
	}

	declare const NSXFlowServiceDataDto: NSXFlowServiceDataDtoConstructor;

	interface NSXFlowServiceDetailsDto
	{
		readonly bytes: long;
		readonly flowType: String;
		readonly packets: long;
		readonly serviceId: String;
		readonly serviceName: String;
		readonly sessions: long;
		readonly tableData: java.util.Collection;

	}

	interface NSXFlowServiceDetailsDtoConstructor {
		new(value?:any): NSXFlowServiceDetailsDto;
		readonly prototype: NSXFlowServiceDetailsDto;
	}

	declare const NSXFlowServiceDetailsDto: NSXFlowServiceDetailsDtoConstructor;

	interface NSXFlowStatsDto
	{
		readonly applicationContext: String;
		readonly blocked: short;
		readonly controlDestinationIp: String;
		readonly controlDestinationPort: Integer;
		readonly controlDirection: short;
		readonly controlProtocol: String;
		readonly controlSourceIp: String;
		readonly destination: String;
		readonly destinationBytes: long;
		readonly destinationIp: String;
		readonly destinationPackets: long;
		readonly destinationPort: int;
		readonly direction: short;
		readonly endTime: long;
		readonly namespaceId: String;
		readonly protocol: int;
		readonly ruleId: long;
		readonly sessions: long;
		readonly source: String;
		readonly sourceBytes: long;
		readonly sourceIp: String;
		readonly sourcePackets: long;
		readonly startTime: long;

	}

	interface NSXFlowStatsDtoConstructor {
		new(value?:any): NSXFlowStatsDto;
		readonly prototype: NSXFlowStatsDto;
	}

	declare const NSXFlowStatsDto: NSXFlowStatsDtoConstructor;

	interface NSXFlowStatsInfoDto
	{
		readonly flowStatsInfoLayer2: NSXTableInfoDto;
		readonly flowStatsInfoLayer3: NSXTableInfoDto;
		readonly flowStatsInfoTcpUdp: NSXTableInfoDto;

	}

	interface NSXFlowStatsInfoDtoConstructor {
		new(value?:any): NSXFlowStatsInfoDto;
		readonly prototype: NSXFlowStatsInfoDto;
	}

	declare const NSXFlowStatsInfoDto: NSXFlowStatsInfoDtoConstructor;

	interface NSXFlowStatsLayer2Dto
	{
		readonly applicationContext: String;
		readonly blocked: short;
		readonly destination: String;
		readonly destinationBytes: long;
		readonly destinationMac: String;
		readonly destinationPackets: long;
		readonly destinationPort: int;
		readonly direction: short;
		readonly endTime: long;
		readonly namespaceId: String;
		readonly protocol: int;
		readonly ruleId: long;
		readonly sessions: long;
		readonly source: String;
		readonly sourceBytes: long;
		readonly sourceMac: String;
		readonly sourcePackets: long;
		readonly startTime: long;
		readonly subtype: int;

	}

	interface NSXFlowStatsLayer2DtoConstructor {
		new(value?:any): NSXFlowStatsLayer2Dto;
		readonly prototype: NSXFlowStatsLayer2Dto;
	}

	declare const NSXFlowStatsLayer2Dto: NSXFlowStatsLayer2DtoConstructor;

	interface NSXFlowStatsLayer3Dto
	{
		readonly applicationContext: String;
		readonly blocked: short;
		readonly destination: String;
		readonly destinationBytes: long;
		readonly destinationIp: String;
		readonly destinationPackets: long;
		readonly destinationPort: int;
		readonly direction: short;
		readonly endTime: long;
		readonly namespaceId: String;
		readonly protocol: int;
		readonly ruleId: long;
		readonly sessions: long;
		readonly source: String;
		readonly sourceBytes: long;
		readonly sourceIp: String;
		readonly sourcePackets: long;
		readonly startTime: long;
		readonly subtype: int;

	}

	interface NSXFlowStatsLayer3DtoConstructor {
		new(value?:any): NSXFlowStatsLayer3Dto;
		readonly prototype: NSXFlowStatsLayer3Dto;
	}

	declare const NSXFlowStatsLayer3Dto: NSXFlowStatsLayer3DtoConstructor;

	interface NSXFlowStatsPageDto
	{
		readonly flowStatsLayer2: java.util.List;
		readonly flowStatsLayer3: java.util.List;
		readonly flowStatsTcpUdp: java.util.List;
		readonly pagingInfo: NSXPagingInfoDto;

	}

	interface NSXFlowStatsPageDtoConstructor {
		new(value?:any): NSXFlowStatsPageDto;
		readonly prototype: NSXFlowStatsPageDto;
	}

	declare const NSXFlowStatsPageDto: NSXFlowStatsPageDtoConstructor;

	interface NSXFlowSummaryDto
	{
		readonly allowed: long;
		readonly blockedByRule: long;
		readonly blockedBySpoofguard: long;
		readonly context: NSXBasicDomainObjectInfo;
		readonly endDate: long;
		readonly startDate: long;

	}

	interface NSXFlowSummaryDtoConstructor {
		new(value?:any): NSXFlowSummaryDto;
		readonly prototype: NSXFlowSummaryDto;
	}

	declare const NSXFlowSummaryDto: NSXFlowSummaryDtoConstructor;

	interface NSXFlowTableDataDto
	{
		readonly bytes: long;
		readonly dataPoints: java.util.Collection;
		readonly destination: String;
		readonly internalId: String;
		readonly name: String;
		readonly packets: long;
		readonly sessions: long;

	}

	interface NSXFlowTableDataDtoConstructor {
		new(value?:any): NSXFlowTableDataDto;
		readonly prototype: NSXFlowTableDataDto;
	}

	declare const NSXFlowTableDataDto: NSXFlowTableDataDtoConstructor;

	interface NSXFlowTableDto
	{
		readonly context: NSXBasicDomainObjectInfo;
		readonly endDate: long;
		readonly startDate: long;
		readonly tableData: java.util.Collection;
		readonly tableType: String;

	}

	interface NSXFlowTableDtoConstructor {
		new(value?:any): NSXFlowTableDto;
		readonly prototype: NSXFlowTableDto;
	}

	declare const NSXFlowTableDto: NSXFlowTableDtoConstructor;

	interface NSXFunctionalitiesDto
	{
		readonly functionalities: java.util.Set;

	}

	interface NSXFunctionalitiesDtoConstructor {
		new(value?:any): NSXFunctionalitiesDto;
		readonly prototype: NSXFunctionalitiesDto;
	}

	declare const NSXFunctionalitiesDto: NSXFunctionalitiesDtoConstructor;

	interface NSXFunctionalityController
	{

		getFunctionalitiesV2(connection?: NSXConnection): NSXFunctionalitiesDto;
		getFunctionalityV2(connection?: NSXConnection, type?: String): NSXFunctionalityDto;
	}

	declare const NSXFunctionalityController: NSXFunctionalityController;

	interface NSXFunctionalityDto
	{
		readonly description: String;
		readonly revision: long;
		readonly type: String;

	}

	interface NSXFunctionalityDtoConstructor {
		new(value?:any): NSXFunctionalityDto;
		readonly prototype: NSXFunctionalityDto;
	}

	declare const NSXFunctionalityDto: NSXFunctionalityDtoConstructor;

	interface NSXFwController
	{

		addFirewallRuleV3(connection?: NSXConnection, edgeId?: String, firewallruledto?: NSXEdgeFirewallFirewallruleDto, aboveRuleId?: long): void;
		appendFirewallRulesV3(connection?: NSXConnection, edgeId?: String, firewallrulesdto?: NSXFirewallRulesDto): void;
		configureV3(connection?: NSXConnection, edgeId?: String, firewallconfigdto?: NSXFirewallConfigDto): void;
		deleteFirewallConfigV3(connection?: NSXConnection, edgeId?: String): void;
		deleteFirewallRuleV3(connection?: NSXConnection, edgeId?: String, ruleId?: long): void;
		getDefaultPolicyV3(connection?: NSXConnection, edgeId?: String): NSXDefaultPolicyDto;
		getFirewallConfigV3(connection?: NSXConnection, edgeId?: String): NSXFirewallConfigDto;
		getFirewallRuleStatsV3(connection?: NSXConnection, edgeId?: String, ruleId?: long): NSXFirewallRuleStatsDto;
		getFirewallRuleV3(connection?: NSXConnection, edgeId?: String, ruleId?: long): NSXEdgeFirewallFirewallruleDto;
		updateDefaultPolicyV3(connection?: NSXConnection, edgeId?: String, defaultpolicydto?: NSXDefaultPolicyDto): void;
		updateFirewallRuleV3(connection?: NSXConnection, edgeId?: String, ruleId?: long, firewallruledto?: NSXEdgeFirewallFirewallruleDto): void;
	}

	declare const NSXFwController: NSXFwController;

	interface NSXGlobalConfigDto
	{
		readonly caCertificates: NSXIpsecCaCertificatesDto;
		readonly crlCertificates: NSXIpsecCrlCertificatesDto;
		readonly extension: String;
		readonly psk: String;
		readonly serviceCertificate: String;

	}

	interface NSXGlobalConfigDtoConstructor {
		new(value?:any): NSXGlobalConfigDto;
		readonly prototype: NSXGlobalConfigDto;
	}

	declare const NSXGlobalConfigDto: NSXGlobalConfigDtoConstructor;

	interface NSXGlobalConfigurationDto
	{
		readonly autoDraftDisabled: boolean;
		readonly layer2RuleOptimize: boolean;
		readonly layer3RuleOptimize: boolean;
		readonly tcpStrictOption: boolean;

	}

	interface NSXGlobalConfigurationDtoConstructor {
		new(value?:any): NSXGlobalConfigurationDto;
		readonly prototype: NSXGlobalConfigurationDto;
	}

	declare const NSXGlobalConfigurationDto: NSXGlobalConfigurationDtoConstructor;

	interface NSXGlobalIpDto
	{
		readonly algorithm: String;
		readonly description: String;
		readonly enabled: boolean;
		readonly fqdn: String;
		readonly gslbIpId: String;
		readonly name: String;
		readonly persistence: NSXGlobalIpPersistenceDto;
		readonly pool: java.util.List;
		readonly ttl: String;

	}

	interface NSXGlobalIpDtoConstructor {
		new(value?:any): NSXGlobalIpDto;
		readonly prototype: NSXGlobalIpDto;
	}

	declare const NSXGlobalIpDto: NSXGlobalIpDtoConstructor;

	interface NSXGlobalIpPersistenceDto
	{
		readonly enabled: boolean;
		readonly ttl: String;

	}

	interface NSXGlobalIpPersistenceDtoConstructor {
		new(value?:any): NSXGlobalIpPersistenceDto;
		readonly prototype: NSXGlobalIpPersistenceDto;
	}

	declare const NSXGlobalIpPersistenceDto: NSXGlobalIpPersistenceDtoConstructor;

	interface NSXGlobalIpPoolRefDto
	{
		readonly poolId: String;
		readonly weight: String;

	}

	interface NSXGlobalIpPoolRefDtoConstructor {
		new(value?:any): NSXGlobalIpPoolRefDto;
		readonly prototype: NSXGlobalIpPoolRefDto;
	}

	declare const NSXGlobalIpPoolRefDto: NSXGlobalIpPoolRefDtoConstructor;

	interface NSXGlobalIpStatsDto
	{
		readonly dnsMiss: long;
		readonly dnsReq: long;
		readonly dnsResolved: long;
		readonly fqdn: String;
		readonly globalIpId: String;

	}

	interface NSXGlobalIpStatsDtoConstructor {
		new(value?:any): NSXGlobalIpStatsDto;
		readonly prototype: NSXGlobalIpStatsDto;
	}

	declare const NSXGlobalIpStatsDto: NSXGlobalIpStatsDtoConstructor;

	interface NSXGlobalServiceInstanceDto
	{
		readonly description: String;
		readonly instanceTemplateAttributes: NSXAttributesDto;
		readonly instanceTemplateId: String;
		readonly instanceTemplateName: String;
		readonly instanceTemplateTypedAttributes: NSXTypedAttributesDto;
		readonly instanceTemplateUniqueId: long;
		readonly name: String;
		readonly serviceId: String;
		readonly serviceInstanceId: String;
		readonly serviceName: String;

	}

	interface NSXGlobalServiceInstanceDtoConstructor {
		new(value?:any): NSXGlobalServiceInstanceDto;
		readonly prototype: NSXGlobalServiceInstanceDto;
	}

	declare const NSXGlobalServiceInstanceDto: NSXGlobalServiceInstanceDtoConstructor;

	interface NSXGlobalSiteDto
	{
		readonly description: String;
		readonly geoLocation: String;
		readonly globalSiteId: String;
		readonly managementIp: String;
		readonly managementPort: String;
		readonly name: String;
		readonly server: java.util.List;
		readonly type: String;

	}

	interface NSXGlobalSiteDtoConstructor {
		new(value?:any): NSXGlobalSiteDto;
		readonly prototype: NSXGlobalSiteDto;
	}

	declare const NSXGlobalSiteDto: NSXGlobalSiteDtoConstructor;

	interface NSXGlobalSiteServerDto
	{
		readonly ipAddress: String;

	}

	interface NSXGlobalSiteServerDtoConstructor {
		new(value?:any): NSXGlobalSiteServerDto;
		readonly prototype: NSXGlobalSiteServerDto;
	}

	declare const NSXGlobalSiteServerDto: NSXGlobalSiteServerDtoConstructor;

	interface NSXGlobalSiteStatsDto
	{
		readonly cacheHit: long;
		readonly cacheMiss: long;
		readonly cacheQuery: long;
		readonly dnsMiss: long;
		readonly dnsReq: long;
		readonly dnsResolved: long;
		readonly globalSiteId: String;
		readonly msgRate: long;
		readonly msgRecv: long;
		readonly msgSent: long;
		readonly name: String;

	}

	interface NSXGlobalSiteStatsDtoConstructor {
		new(value?:any): NSXGlobalSiteStatsDto;
		readonly prototype: NSXGlobalSiteStatsDto;
	}

	declare const NSXGlobalSiteStatsDto: NSXGlobalSiteStatsDtoConstructor;

	interface NSXGroupableDomainObjectDto
	{
		readonly clientHandle: String;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly type: NSXObjectTypeDto;
		readonly vsmUuid: String;

	}

	interface NSXGroupableDomainObjectDtoConstructor {
		new(value?:any): NSXGroupableDomainObjectDto;
		readonly prototype: NSXGroupableDomainObjectDto;
	}

	declare const NSXGroupableDomainObjectDto: NSXGroupableDomainObjectDtoConstructor;

	interface NSXGslbConfigDto
	{
		readonly enabled: boolean;
		readonly globalIp: java.util.List;
		readonly globalSite: java.util.List;
		readonly gslbMonitor: java.util.List;
		readonly gslbPool: java.util.List;
		readonly gslbSecurity: NSXGslbSecurityDto;
		readonly listeners: NSXIpAddressesDto;
		readonly logging: NSXLoggingDto;
		readonly persistentCache: NSXGslbPersistentCacheDto;
		readonly queryPort: String;
		readonly serviceTimeout: String;
		readonly template: String;
		readonly version: long;

	}

	interface NSXGslbConfigDtoConstructor {
		new(value?:any): NSXGslbConfigDto;
		readonly prototype: NSXGslbConfigDto;
	}

	declare const NSXGslbConfigDto: NSXGslbConfigDtoConstructor;

	interface NSXGslbMonitorDto
	{
		readonly expected: String;
		readonly extension: String;
		readonly interval: long;
		readonly maxRetries: long;
		readonly method: String;
		readonly monitorId: String;
		readonly name: String;
		readonly receive: String;
		readonly send: String;
		readonly timeout: long;
		readonly type: String;
		readonly url: String;

	}

	interface NSXGslbMonitorDtoConstructor {
		new(value?:any): NSXGslbMonitorDto;
		readonly prototype: NSXGslbMonitorDto;
	}

	declare const NSXGslbMonitorDto: NSXGslbMonitorDtoConstructor;

	interface NSXGslbPersistentCacheDto
	{
		readonly maxSize: String;
		readonly ttl: String;

	}

	interface NSXGslbPersistentCacheDtoConstructor {
		new(value?:any): NSXGslbPersistentCacheDto;
		readonly prototype: NSXGslbPersistentCacheDto;
	}

	declare const NSXGslbPersistentCacheDto: NSXGslbPersistentCacheDtoConstructor;

	interface NSXGslbPoolDto
	{
		readonly algorithm: String;
		readonly description: String;
		readonly fallbackAlgorithm: String;
		readonly monitorId: java.util.List;
		readonly name: String;
		readonly poolId: String;
		readonly poolMember: java.util.List;
		readonly ttl: String;

	}

	interface NSXGslbPoolDtoConstructor {
		new(value?:any): NSXGslbPoolDto;
		readonly prototype: NSXGslbPoolDto;
	}

	declare const NSXGslbPoolDto: NSXGslbPoolDtoConstructor;

	interface NSXGslbPoolMemberDto
	{
		readonly condition: String;
		readonly ipAddress: String;
		readonly maxConn: long;
		readonly memberId: String;
		readonly name: String;
		readonly port: long;
		readonly weight: long;

	}

	interface NSXGslbPoolMemberDtoConstructor {
		new(value?:any): NSXGslbPoolMemberDto;
		readonly prototype: NSXGslbPoolMemberDto;
	}

	declare const NSXGslbPoolMemberDto: NSXGslbPoolMemberDtoConstructor;

	interface NSXGslbPoolMemberStatsDto
	{
		readonly cpuUsage: String;
		readonly curConn: long;
		readonly dnsHit: long;
		readonly memberId: String;
		readonly memUsage: String;
		readonly name: String;
		readonly packagesPerSec: long;
		readonly sessions: long;
		readonly sessLimit: long;
		readonly sessRate: long;
		readonly status: String;
		readonly totalThroughput: long;

	}

	interface NSXGslbPoolMemberStatsDtoConstructor {
		new(value?:any): NSXGslbPoolMemberStatsDto;
		readonly prototype: NSXGslbPoolMemberStatsDto;
	}

	declare const NSXGslbPoolMemberStatsDto: NSXGslbPoolMemberStatsDtoConstructor;

	interface NSXGslbPoolStatsDto
	{
		readonly dnsMiss: long;
		readonly dnsReq: long;
		readonly dnsResolved: long;
		readonly member: java.util.List;
		readonly name: String;
		readonly poolId: String;

	}

	interface NSXGslbPoolStatsDtoConstructor {
		new(value?:any): NSXGslbPoolStatsDto;
		readonly prototype: NSXGslbPoolStatsDto;
	}

	declare const NSXGslbPoolStatsDto: NSXGslbPoolStatsDtoConstructor;

	interface NSXGslbSecurityDto
	{
		readonly caCertificate: java.util.List;
		readonly crlCertificate: java.util.List;
		readonly enabled: boolean;
		readonly serviceCertificate: String;

	}

	interface NSXGslbSecurityDtoConstructor {
		new(value?:any): NSXGslbSecurityDto;
		readonly prototype: NSXGslbSecurityDto;
	}

	declare const NSXGslbSecurityDto: NSXGslbSecurityDtoConstructor;

	interface NSXGslbStatusAndStatsDto
	{
		readonly gslbIp: java.util.List;
		readonly gslbPool: java.util.List;
		readonly gslbSite: java.util.List;
		readonly timeStamp: long;

	}

	interface NSXGslbStatusAndStatsDtoConstructor {
		new(value?:any): NSXGslbStatusAndStatsDto;
		readonly prototype: NSXGslbStatusAndStatsDto;
	}

	declare const NSXGslbStatusAndStatsDto: NSXGslbStatusAndStatsDtoConstructor;

	interface NSXGslbTrinityController
	{

		createGlobalIpV4(connection?: NSXConnection, edgeId?: String, globalipdto?: NSXGlobalIpDto): void;
		createGlobalSiteV4(connection?: NSXConnection, edgeId?: String, globalsitedto?: NSXGlobalSiteDto): void;
		createGslbMonitorV4(connection?: NSXConnection, edgeId?: String, gslbmonitordto?: NSXGslbMonitorDto): void;
		createGslbPoolV4(connection?: NSXConnection, edgeId?: String, gslbpooldto?: NSXGslbPoolDto): void;
		createPoolMemberV4(connection?: NSXConnection, edgeId?: String, poolId?: String, gslbpoolmemberdto?: NSXGslbPoolMemberDto): void;
		deleteGlobalIpV4(connection?: NSXConnection, edgeId?: String, gipId?: String): void;
		deleteGlobalSiteV4(connection?: NSXConnection, edgeId?: String, siteId?: String): void;
		deleteGslbConfigV4(connection?: NSXConnection, edgeId?: String): void;
		deleteGslbMonitorV4(connection?: NSXConnection, edgeId?: String, monitorId?: String): void;
		deleteGslbPoolV4(connection?: NSXConnection, edgeId?: String, poolId?: String): void;
		deleteGslbSecurityV4(connection?: NSXConnection, edgeId?: String): void;
		deletePoolMemberV4(connection?: NSXConnection, edgeId?: String, poolId?: String, memberId?: String): void;
		getGlobalIpV4(connection?: NSXConnection, edgeId?: String, gipId?: String): NSXGlobalIpDto;
		getGlobalSiteV4(connection?: NSXConnection, edgeId?: String, siteId?: String): NSXGlobalSiteDto;
		getGslbConfigV4(connection?: NSXConnection, edgeId?: String): NSXGslbConfigDto;
		getGslbMonitorV4(connection?: NSXConnection, edgeId?: String, monitorId?: String): NSXGslbMonitorDto;
		getGslbPoolV4(connection?: NSXConnection, edgeId?: String, poolId?: String): NSXGslbPoolDto;
		getGslbSecurityV4(connection?: NSXConnection, edgeId?: String): NSXGslbSecurityDto;
		getGslbStatisticsV4(connection?: NSXConnection, edgeId?: String): NSXGslbStatusAndStatsDto;
		getPoolMemberV4(connection?: NSXConnection, edgeId?: String, poolId?: String, memberId?: String): NSXGslbPoolMemberDto;
		updateGlobalIpV4(connection?: NSXConnection, edgeId?: String, gipId?: String, globalipdto?: NSXGlobalIpDto): void;
		updateGlobalSiteV4(connection?: NSXConnection, edgeId?: String, siteId?: String, globalsitedto?: NSXGlobalSiteDto): void;
		updateGslbConfigV4(connection?: NSXConnection, edgeId?: String, gslbconfigdto?: NSXGslbConfigDto): void;
		updateGslbMonitorV4(connection?: NSXConnection, edgeId?: String, monitorId?: String, gslbmonitordto?: NSXGslbMonitorDto): void;
		updateGslbPoolV4(connection?: NSXConnection, edgeId?: String, poolId?: String, gslbpooldto?: NSXGslbPoolDto): void;
		updateGslbSecurityV4(connection?: NSXConnection, edgeId?: String, gslbsecuritydto?: NSXGslbSecurityDto): void;
		updatePoolMemberV4(connection?: NSXConnection, edgeId?: String, poolId?: String, memberId?: String, gslbpoolmemberdto?: NSXGslbPoolMemberDto): void;
	}

	declare const NSXGslbTrinityController: NSXGslbTrinityController;

	interface NSXGwsvcController
	{

	}

	declare const NSXGwsvcController: NSXGwsvcController;

	interface NSXHaController
	{

		configureHaV3(connection?: NSXConnection, id?: String, highavailabilityconfigdto?: NSXHighAvailabilityConfigDto): void;
		deleteHaConfigV3(connection?: NSXConnection, id?: String): void;
		getHaConfigV3(connection?: NSXConnection, id?: String): NSXHighAvailabilityConfigDto;
	}

	declare const NSXHaController: NSXHaController;

	interface NSXHaSecurityDto
	{
		readonly enabled: boolean;

	}

	interface NSXHaSecurityDtoConstructor {
		new(value?:any): NSXHaSecurityDto;
		readonly prototype: NSXHaSecurityDto;
	}

	declare const NSXHaSecurityDto: NSXHaSecurityDtoConstructor;

	interface NSXHaTrinityController
	{

		configureHaTrinityV4(connection?: NSXConnection, id?: String, highavailabilityconfigtrinitydto?: NSXHighAvailabilityConfigTrinityDto): void;
		deleteHaConfigV4(connection?: NSXConnection, id?: String): void;
		getHaConfigV4(connection?: NSXConnection, id?: String): NSXHighAvailabilityConfigTrinityDto;
	}

	declare const NSXHaTrinityController: NSXHaTrinityController;

	interface NSXHealthcheck
	{
		readonly displayName: String;
		readonly healthThreshold: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly interval: String;
		readonly mode: String;
		readonly timeout: String;
		readonly unhealthThreshold: String;
		readonly uri: String;

	}

	interface NSXHealthcheckConstructor {
		new(value?:any): NSXHealthcheck;
		readonly prototype: NSXHealthcheck;
	}

	declare const NSXHealthcheck: NSXHealthcheckConstructor;

	interface NSXHeartbeatResponseDto
	{
		readonly heartbeatId: long;
		readonly timestamp: long;

	}

	interface NSXHeartbeatResponseDtoConstructor {
		new(value?:any): NSXHeartbeatResponseDto;
		readonly prototype: NSXHeartbeatResponseDto;
	}

	declare const NSXHeartbeatResponseDto: NSXHeartbeatResponseDtoConstructor;

	interface NSXHighAvailabilityConfigDto
	{
		readonly declareDeadTime: Integer;
		readonly enabled: boolean;
		readonly ipAddresses: NSXIpAddressesDto;
		readonly logging: NSXLoggingDto;
		readonly template: String;
		readonly version: long;
		readonly vnic: String;
		readonly zeroConfiguration: boolean;

	}

	interface NSXHighAvailabilityConfigDtoConstructor {
		new(value?:any): NSXHighAvailabilityConfigDto;
		readonly prototype: NSXHighAvailabilityConfigDto;
	}

	declare const NSXHighAvailabilityConfigDto: NSXHighAvailabilityConfigDtoConstructor;

	interface NSXHighAvailabilityConfigTrinityDto
	{
		readonly declareDeadTime: Integer;
		readonly enabled: boolean;
		readonly ipAddresses: NSXIpAddressesDto;
		readonly logging: NSXLoggingDto;
		readonly security: NSXHaSecurityDto;
		readonly template: String;
		readonly version: long;
		readonly vnic: String;
		readonly zeroConfiguration: boolean;

	}

	interface NSXHighAvailabilityConfigTrinityDtoConstructor {
		new(value?:any): NSXHighAvailabilityConfigTrinityDto;
		readonly prototype: NSXHighAvailabilityConfigTrinityDto;
	}

	declare const NSXHighAvailabilityConfigTrinityDto: NSXHighAvailabilityConfigTrinityDtoConstructor;

	interface NSXHintQuestionAnswerDto
	{
		readonly answer: String;
		readonly question: String;

	}

	interface NSXHintQuestionAnswerDtoConstructor {
		new(value?:any): NSXHintQuestionAnswerDto;
		readonly prototype: NSXHintQuestionAnswerDto;
	}

	declare const NSXHintQuestionAnswerDto: NSXHintQuestionAnswerDtoConstructor;

	interface NSXHostCmdDto
	{
		readonly commandString: String;
		readonly hostId: String;
		readonly loggingArgus: java.util.List;

	}

	interface NSXHostCmdDtoConstructor {
		new(value?:any): NSXHostCmdDto;
		readonly prototype: NSXHostCmdDto;
	}

	declare const NSXHostCmdDto: NSXHostCmdDtoConstructor;

	interface NSXHostDto
	{
		readonly hostId: String;
		readonly hostName: String;
		readonly installationStatus: String;

	}

	interface NSXHostDtoConstructor {
		new(value?:any): NSXHostDto;
		readonly prototype: NSXHostDto;
	}

	declare const NSXHostDto: NSXHostDtoConstructor;

	interface NSXHostInformationDto
	{
		readonly clientId: String;
		readonly datacenterId: String;
		readonly hostId: String;
		readonly hostName: String;
		readonly hostVersion: String;
		readonly id: long;
		readonly status: String;

	}

	interface NSXHostInformationDtoConstructor {
		new(value?:any): NSXHostInformationDto;
		readonly prototype: NSXHostInformationDto;
	}

	declare const NSXHostInformationDto: NSXHostInformationDtoConstructor;

	interface NSXHostLeaseInfoDto
	{
		readonly abandoned: String;
		readonly bindingState: String;
		readonly clientHostname: String;
		readonly cltt: String;
		readonly ends: String;
		readonly hardwareType: String;
		readonly ipAddress: String;
		readonly macAddress: String;
		readonly nextBindingState: String;
		readonly starts: String;
		readonly tsfp: String;
		readonly tstp: String;
		readonly uid: String;

	}

	interface NSXHostLeaseInfoDtoConstructor {
		new(value?:any): NSXHostLeaseInfoDto;
		readonly prototype: NSXHostLeaseInfoDto;
	}

	declare const NSXHostLeaseInfoDto: NSXHostLeaseInfoDtoConstructor;

	interface NSXHostLeaseInfosDto
	{
		readonly hostLeaseInfoDtos: java.util.List;

	}

	interface NSXHostLeaseInfosDtoConstructor {
		new(value?:any): NSXHostLeaseInfosDto;
		readonly prototype: NSXHostLeaseInfosDto;
	}

	declare const NSXHostLeaseInfosDto: NSXHostLeaseInfosDtoConstructor;

	interface NSXHostsDto
	{
		readonly clusterId: String;
		readonly clusterName: String;
		readonly datacenterId: String;
		readonly datacenterName: String;
		readonly hosts: java.util.Set;

	}

	interface NSXHostsDtoConstructor {
		new(value?:any): NSXHostsDto;
		readonly prototype: NSXHostsDto;
	}

	declare const NSXHostsDto: NSXHostsDtoConstructor;

	interface NSXHostSystemDto
	{
		readonly clientHandle: String;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: long;
		readonly runtimeConnectionState: String;
		readonly runtimeInMaintenanceMode: boolean;
		readonly runtimePowerState: String;
		readonly runtimeStandbyMode: String;
		readonly scope: NSXScopeInfoDto;
		readonly type: NSXObjectTypeDto;
		readonly vsmUuid: String;

	}

	interface NSXHostSystemDtoConstructor {
		new(value?:any): NSXHostSystemDto;
		readonly prototype: NSXHostSystemDto;
	}

	declare const NSXHostSystemDto: NSXHostSystemDtoConstructor;

	interface NSXHousekeepingController
	{

		getV2(connection?: NSXConnection, moduleId?: long): NSXHousekeepingModuleDto;
		invokeNowV2(connection?: NSXConnection, moduleId?: long, housekeepingmoduledto?: NSXHousekeepingModuleDto): void;
		listConfigurationV2(connection?: NSXConnection): NSXHousekeepingModulesDto;
		updateV2(connection?: NSXConnection, moduleId?: long, housekeepingmoduledto?: NSXHousekeepingModuleDto): void;
	}

	declare const NSXHousekeepingController: NSXHousekeepingController;

	interface NSXHousekeepingModuleDto
	{
		readonly cronExpression: String;
		readonly description: String;
		readonly housekeepingEnabled: boolean;
		readonly moduleName: String;
		readonly objectId: long;
		readonly scheduleStartTime: String;
		readonly scheduleTimeMillis: long;
		readonly scheduleType: String;

	}

	interface NSXHousekeepingModuleDtoConstructor {
		new(value?:any): NSXHousekeepingModuleDto;
		readonly prototype: NSXHousekeepingModuleDto;
	}

	declare const NSXHousekeepingModuleDto: NSXHousekeepingModuleDtoConstructor;

	interface NSXHousekeepingModulesDto
	{
		readonly housekeepingModule: java.util.List;

	}

	interface NSXHousekeepingModulesDtoConstructor {
		new(value?:any): NSXHousekeepingModulesDto;
		readonly prototype: NSXHousekeepingModulesDto;
	}

	declare const NSXHousekeepingModulesDto: NSXHousekeepingModulesDtoConstructor;

	interface NSXIcmpTypeDto
	{
		readonly enumIdentifier: String;
		readonly name: String;
		readonly number: Integer;

	}

	interface NSXIcmpTypeDtoConstructor {
		new(value?:any): NSXIcmpTypeDto;
		readonly prototype: NSXIcmpTypeDto;
	}

	declare const NSXIcmpTypeDto: NSXIcmpTypeDtoConstructor;

	interface NSXImplementationController
	{

		getImplementationsV2(connection?: NSXConnection): NSXImplementationsDto;
		getImplementationV2(connection?: NSXConnection, type?: String): NSXImplementationDto;
	}

	declare const NSXImplementationController: NSXImplementationController;

	interface NSXImplementationDto
	{
		readonly hostBasedDeployment: boolean;
		readonly requiredProfileAttributes: NSXAttributesDto;
		readonly requiredServiceAttributes: NSXAttributesDto;
		readonly type: String;

	}

	interface NSXImplementationDtoConstructor {
		new(value?:any): NSXImplementationDto;
		readonly prototype: NSXImplementationDto;
	}

	declare const NSXImplementationDto: NSXImplementationDtoConstructor;

	interface NSXImplementationsDto
	{
		readonly implementations: java.util.Set;

	}

	interface NSXImplementationsDtoConstructor {
		new(value?:any): NSXImplementationsDto;
		readonly prototype: NSXImplementationsDto;
	}

	declare const NSXImplementationsDto: NSXImplementationsDtoConstructor;

	interface NSXInteractionPermissionsDto
	{
		readonly managePermission: boolean;
		readonly viewPermission: boolean;

	}

	interface NSXInteractionPermissionsDtoConstructor {
		new(value?:any): NSXInteractionPermissionsDto;
		readonly prototype: NSXInteractionPermissionsDto;
	}

	declare const NSXInteractionPermissionsDto: NSXInteractionPermissionsDtoConstructor;

	interface NSXInterfaceBaseDto
	{
		readonly addressGroups: NSXEdgeVnicAddressGroupsDto;
		readonly label: String;
		readonly mtu: Integer;
		readonly name: String;

	}

	interface NSXInterfaceBaseDtoConstructor {
		new(value?:any): NSXInterfaceBaseDto;
		readonly prototype: NSXInterfaceBaseDto;
	}

	declare const NSXInterfaceBaseDto: NSXInterfaceBaseDtoConstructor;

	interface NSXInterfaceDto
	{
		readonly addressGroups: NSXEdgeVnicAddressGroupsDto;
		readonly connectedToId: String;
		readonly connectedToName: String;
		readonly index: String;
		readonly isConnected: boolean;
		readonly label: String;
		readonly mtu: Integer;
		readonly name: String;
		readonly type: String;

	}

	interface NSXInterfaceDtoConstructor {
		new(value?:any): NSXInterfaceDto;
		readonly prototype: NSXInterfaceDto;
	}

	declare const NSXInterfaceDto: NSXInterfaceDtoConstructor;

	interface NSXInterfacesDto
	{
		readonly interfaces: java.util.List;

	}

	interface NSXInterfacesDtoConstructor {
		new(value?:any): NSXInterfacesDto;
		readonly prototype: NSXInterfacesDto;
	}

	declare const NSXInterfacesDto: NSXInterfacesDtoConstructor;

	interface NSXInventoryController
	{

		getAllVnicsByVMIdV2(connection?: NSXConnection, moId?: String): NSXBasicDomainObjectInfoList;
	}

	declare const NSXInventoryController: NSXInventoryController;

	interface NSXIpAddressesDto
	{
		readonly ipAddress: java.util.List;

	}

	interface NSXIpAddressesDtoConstructor {
		new(value?:any): NSXIpAddressesDto;
		readonly prototype: NSXIpAddressesDto;
	}

	declare const NSXIpAddressesDto: NSXIpAddressesDtoConstructor;

	interface NSXIpAddressPoolDto
	{
		readonly clientHandle: String;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly ipPoolType: String;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly subnets: NSXSubnetListDto;
		readonly totalAddressCount: java.math.BigInteger;
		readonly type: NSXObjectTypeDto;
		readonly usedAddressCount: java.math.BigInteger;
		readonly usedPercentage: int;
		readonly vsmUuid: String;

	}

	interface NSXIpAddressPoolDtoConstructor {
		new(value?:any): NSXIpAddressPoolDto;
		readonly prototype: NSXIpAddressPoolDto;
	}

	declare const NSXIpAddressPoolDto: NSXIpAddressPoolDtoConstructor;

	interface NSXIpAddressPoolsUIDto
	{
		readonly ipAddressPools: java.util.List;

	}

	interface NSXIpAddressPoolsUIDtoConstructor {
		new(value?:any): NSXIpAddressPoolsUIDto;
		readonly prototype: NSXIpAddressPoolsUIDto;
	}

	declare const NSXIpAddressPoolsUIDto: NSXIpAddressPoolsUIDtoConstructor;

	interface NSXIpAddressPoolUIDto
	{
		readonly clientHandle: String;
		readonly description: String;
		readonly dnsServer1: String;
		readonly dnsServer2: String;
		readonly dnsSuffix: String;
		readonly extendedAttributes: java.util.List;
		readonly gateway: String;
		readonly ipPoolType: String;
		readonly ipRanges: java.util.List;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly prefixLength: int;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly subnetId: String;
		readonly totalAddressCount: java.math.BigInteger;
		readonly type: NSXObjectTypeDto;
		readonly usedAddressCount: java.math.BigInteger;
		readonly usedPercentage: int;
		readonly vsmUuid: String;

	}

	interface NSXIpAddressPoolUIDtoConstructor {
		new(value?:any): NSXIpAddressPoolUIDto;
		readonly prototype: NSXIpAddressPoolUIDto;
	}

	declare const NSXIpAddressPoolUIDto: NSXIpAddressPoolUIDtoConstructor;

	interface NSXIpAddressRequestDto
	{
		readonly allocationMode: String;
		readonly ipAddress: String;

	}

	interface NSXIpAddressRequestDtoConstructor {
		new(value?:any): NSXIpAddressRequestDto;
		readonly prototype: NSXIpAddressRequestDto;
	}

	declare const NSXIpAddressRequestDto: NSXIpAddressRequestDtoConstructor;

	interface NSXIpAllocationBase
	{
		readonly autoConfigureDNS: boolean;
		readonly defaultGateway: String;
		readonly dnsType: String;
		readonly domainName: String;
		readonly leaseTime: String;
		readonly primaryNameServer: String;
		readonly secondaryNameServer: String;

	}

	interface NSXIpAllocationBaseConstructor {
		new(value?:any): NSXIpAllocationBase;
		readonly prototype: NSXIpAllocationBase;
	}

	declare const NSXIpAllocationBase: NSXIpAllocationBaseConstructor;

	interface NSXIPAMController
	{

		allocateIpAddressV2(connection?: NSXConnection, poolId?: String, ipaddressrequestdto?: NSXIpAddressRequestDto): NSXAllocatedIpAddressDto;
		createIpPoolV2(connection?: NSXConnection, scopeId?: String, ipaddresspooluidto?: NSXIpAddressPoolUIDto): String;
		deleteIpPoolV2(connection?: NSXConnection, poolId?: String, force?: boolean): void;
		getAllocatedIpAddressesV2(connection?: NSXConnection, poolId?: String): NSXAllocatedIpAddressesDto;
		getIpPoolsV2(connection?: NSXConnection, scopeId?: String): NSXIpAddressPoolsUIDto;
		getIpPoolV2(connection?: NSXConnection, poolId?: String): NSXIpAddressPoolUIDto;
		releaseIpAddressV2(connection?: NSXConnection, poolId?: String, ipAddress?: String): void;
		updateIpPoolV2(connection?: NSXConnection, poolId?: String, ipaddresspooluidto?: NSXIpAddressPoolUIDto): void;
	}

	declare const NSXIPAMController: NSXIPAMController;

	interface NSXIpAndPortDto
	{
		readonly hostName: String;
		readonly port: Integer;

	}

	interface NSXIpAndPortDtoConstructor {
		new(value?:any): NSXIpAndPortDto;
		readonly prototype: NSXIpAndPortDto;
	}

	declare const NSXIpAndPortDto: NSXIpAndPortDtoConstructor;

	interface NSXIpAssignmentStatisticDto
	{
		readonly activeCount: long;
		readonly activeSinceLastPublishedCount: long;
		readonly contextId: String;
		readonly duplicateCount: long;
		readonly inactiveCount: long;
		readonly inSync: boolean;
		readonly requireReviewCount: long;
		readonly unpublishedCount: long;

	}

	interface NSXIpAssignmentStatisticDtoConstructor {
		new(value?:any): NSXIpAssignmentStatisticDto;
		readonly prototype: NSXIpAssignmentStatisticDto;
	}

	declare const NSXIpAssignmentStatisticDto: NSXIpAssignmentStatisticDtoConstructor;

	interface NSXIPDiscoveryConfigDto
	{
		readonly enabled: boolean;

	}

	interface NSXIPDiscoveryConfigDtoConstructor {
		new(value?:any): NSXIPDiscoveryConfigDto;
		readonly prototype: NSXIPDiscoveryConfigDto;
	}

	declare const NSXIPDiscoveryConfigDto: NSXIPDiscoveryConfigDtoConstructor;

	interface NSXIpfixInfoDto
	{
		readonly id: boolean;
		readonly ipValue: String;
		readonly isV6Ip: boolean;
		readonly portValue: int;

	}

	interface NSXIpfixInfoDtoConstructor {
		new(value?:any): NSXIpfixInfoDto;
		readonly prototype: NSXIpfixInfoDto;
	}

	declare const NSXIpfixInfoDto: NSXIpfixInfoDtoConstructor;

	interface NSXIpListsGwemDto
	{
		readonly ipList: java.util.Set;

	}

	interface NSXIpListsGwemDtoConstructor {
		new(value?:any): NSXIpListsGwemDto;
		readonly prototype: NSXIpListsGwemDto;
	}

	declare const NSXIpListsGwemDto: NSXIpListsGwemDtoConstructor;

	interface NSXIpNodeDto
	{
		readonly ipAddresses: java.util.List;

	}

	interface NSXIpNodeDtoConstructor {
		new(value?:any): NSXIpNodeDto;
		readonly prototype: NSXIpNodeDto;
	}

	declare const NSXIpNodeDto: NSXIpNodeDtoConstructor;

	interface NSXIpNodeSetDto
	{
		readonly ipNodes: java.util.Set;

	}

	interface NSXIpNodeSetDtoConstructor {
		new(value?:any): NSXIpNodeSetDto;
		readonly prototype: NSXIpNodeSetDto;
	}

	declare const NSXIpNodeSetDto: NSXIpNodeSetDtoConstructor;

	interface NSXIpPoolController
	{

		addIpPoolV3(connection?: NSXConnection, ippooldto?: NSXEdgeSslvpnIppoolDto, edgeId?: String): void;
		applyIpPoolsV3(connection?: NSXConnection, ippoolsdto?: NSXEdgeSslvpnIppoolsDto, edgeId?: String): void;
		deleteAllIpPoolV3(connection?: NSXConnection, edgeId?: String): void;
		deleteIpPoolV3(connection?: NSXConnection, edgeId?: String, id?: String): void;
		getAllIpPoolsV3(connection?: NSXConnection, edgeId?: String): NSXEdgeSslvpnIppoolsDto;
		getIpPoolV3(connection?: NSXConnection, edgeId?: String, id?: String): NSXEdgeSslvpnIppoolDto;
		modifyIpPoolV3(connection?: NSXConnection, ippooldto?: NSXEdgeSslvpnIppoolDto, edgeId?: String, id?: String): void;
	}

	declare const NSXIpPoolController: NSXIpPoolController;

	interface NSXIPPoolDto
	{
		readonly autoConfigureDNS: boolean;
		readonly defaultGateway: String;
		readonly dnsType: String;
		readonly domainName: String;
		readonly ipRange: String;
		readonly leaseTime: String;
		readonly poolId: String;
		readonly primaryNameServer: String;
		readonly secondaryNameServer: String;

	}

	interface NSXIPPoolDtoConstructor {
		new(value?:any): NSXIPPoolDto;
		readonly prototype: NSXIPPoolDto;
	}

	declare const NSXIPPoolDto: NSXIPPoolDtoConstructor;

	interface NSXIPPoolsDto
	{
		readonly ipPools: java.util.List;

	}

	interface NSXIPPoolsDtoConstructor {
		new(value?:any): NSXIPPoolsDto;
		readonly prototype: NSXIPPoolsDto;
	}

	declare const NSXIPPoolsDto: NSXIPPoolsDtoConstructor;

	interface NSXIPPoolsTrinityDto
	{
		readonly ipPools: java.util.List;

	}

	interface NSXIPPoolsTrinityDtoConstructor {
		new(value?:any): NSXIPPoolsTrinityDto;
		readonly prototype: NSXIPPoolsTrinityDto;
	}

	declare const NSXIPPoolsTrinityDto: NSXIPPoolsTrinityDtoConstructor;

	interface NSXIpPoolTrinityController
	{

		addIpPoolV4(connection?: NSXConnection, ippooldto?: NSXEdgeSslvpnIppoolDto, edgeId?: String): void;
		applyIpPoolsV4(connection?: NSXConnection, ippoolsdto?: NSXEdgeSslvpnIppoolsDto, edgeId?: String): void;
		deleteAllIpPoolV4(connection?: NSXConnection, edgeId?: String): void;
		deleteIpPoolV4(connection?: NSXConnection, edgeId?: String, id?: String): void;
		getAllIpPoolsV4(connection?: NSXConnection, edgeId?: String): NSXEdgeSslvpnIppoolsDto;
		getIpPoolV4(connection?: NSXConnection, edgeId?: String, id?: String): NSXEdgeSslvpnIppoolDto;
		modifyIpPoolV4(connection?: NSXConnection, ippooldto?: NSXEdgeSslvpnIppoolDto, edgeId?: String, id?: String): void;
	}

	declare const NSXIpPoolTrinityController: NSXIpPoolTrinityController;

	interface NSXIPPoolTrinityDto
	{
		readonly autoConfigureDNS: boolean;
		readonly defaultGateway: String;
		readonly dnsType: String;
		readonly domainName: String;
		readonly ipRange: String;
		readonly leaseTime: String;
		readonly poolId: String;
		readonly primaryNameServer: String;
		readonly secondaryNameServer: String;

	}

	interface NSXIPPoolTrinityDtoConstructor {
		new(value?:any): NSXIPPoolTrinityDto;
		readonly prototype: NSXIPPoolTrinityDto;
	}

	declare const NSXIPPoolTrinityDto: NSXIPPoolTrinityDtoConstructor;

	interface NSXIPPrefixDto
	{
		readonly ipAddress: String;
		readonly name: String;

	}

	interface NSXIPPrefixDtoConstructor {
		new(value?:any): NSXIPPrefixDto;
		readonly prototype: NSXIPPrefixDto;
	}

	declare const NSXIPPrefixDto: NSXIPPrefixDtoConstructor;

	interface NSXIPPrefixesDto
	{
		readonly ipPrefixes: java.util.List;

	}

	interface NSXIPPrefixesDtoConstructor {
		new(value?:any): NSXIPPrefixesDto;
		readonly prototype: NSXIPPrefixesDto;
	}

	declare const NSXIPPrefixesDto: NSXIPPrefixesDtoConstructor;

	interface NSXIPProtocolDto
	{
		readonly description: String;
		readonly enumIdentifier: String;
		readonly name: String;
		readonly number: Integer;
		readonly protocolClassification: String;

	}

	interface NSXIPProtocolDtoConstructor {
		new(value?:any): NSXIPProtocolDto;
		readonly prototype: NSXIPProtocolDto;
	}

	declare const NSXIPProtocolDto: NSXIPProtocolDtoConstructor;

	interface NSXIpRangeDto
	{
		readonly endAddress: String;
		readonly id: String;
		readonly ownerId: String;
		readonly startAddress: String;

	}

	interface NSXIpRangeDtoConstructor {
		new(value?:any): NSXIpRangeDto;
		readonly prototype: NSXIpRangeDto;
	}

	declare const NSXIpRangeDto: NSXIpRangeDtoConstructor;

	interface NSXIpsecBaseDto
	{
		readonly enabled: boolean;
		readonly global: NSXGlobalConfigDto;
		readonly logging: NSXLoggingDto;
		readonly sites: NSXSiteConfigsDto;
		readonly template: String;
		readonly version: long;

	}

	interface NSXIpsecBaseDtoConstructor {
		new(value?:any): NSXIpsecBaseDto;
		readonly prototype: NSXIpsecBaseDto;
	}

	declare const NSXIpsecBaseDto: NSXIpsecBaseDtoConstructor;

	interface NSXIpsecCaCertificatesDto
	{
		readonly caCertificate: java.util.List;

	}

	interface NSXIpsecCaCertificatesDtoConstructor {
		new(value?:any): NSXIpsecCaCertificatesDto;
		readonly prototype: NSXIpsecCaCertificatesDto;
	}

	declare const NSXIpsecCaCertificatesDto: NSXIpsecCaCertificatesDtoConstructor;

	interface NSXIpsecConfigDto
	{
		readonly enabled: boolean;
		readonly global: NSXGlobalConfigDto;
		readonly logging: NSXLoggingDto;
		readonly sites: NSXSiteConfigsDto;
		readonly template: String;
		readonly version: long;

	}

	interface NSXIpsecConfigDtoConstructor {
		new(value?:any): NSXIpsecConfigDto;
		readonly prototype: NSXIpsecConfigDto;
	}

	declare const NSXIpsecConfigDto: NSXIpsecConfigDtoConstructor;

	interface NSXIpsecController
	{

		configureIpsecTrinityV4(connection?: NSXConnection, id?: String, ipsectrinitydto?: NSXIPsecTrinityDto): void;
		configureIpsecV3(connection?: NSXConnection, id?: String, ipsecconfigdto?: NSXIpsecConfigDto): void;
		deleteIpsecConfigTrinityV4(connection?: NSXConnection, id?: String): void;
		deleteIpsecConfigV3(connection?: NSXConnection, id?: String): void;
		getIpsecConfigStatisticsTrinityV4(connection?: NSXConnection, id?: String): NSXIpsecStatusAndStatsDto;
		getIpsecConfigStatisticsV3(connection?: NSXConnection, id?: String): NSXIpsecStatusAndStatsDto;
		getIpsecConfigTrinityV4(connection?: NSXConnection, id?: String): NSXIPsecTrinityDto;
		getIpsecConfigV3(connection?: NSXConnection, id?: String): NSXIpsecConfigDto;
		getIpsecVendorConfigTrinityV3(connection?: NSXConnection, id?: String, vendor?: String, platform?: String, software?: String): NSXIpsecVendorConfigDto;
		getIpsecVendorConfigTrinityV4(connection?: NSXConnection, id?: String, vendor?: String, platform?: String, software?: String): NSXIpsecVendorConfigDto;
	}

	declare const NSXIpsecController: NSXIpsecController;

	interface NSXIpsecCrlCertificatesDto
	{
		readonly crlCertificate: java.util.List;

	}

	interface NSXIpsecCrlCertificatesDtoConstructor {
		new(value?:any): NSXIpsecCrlCertificatesDto;
		readonly prototype: NSXIpsecCrlCertificatesDto;
	}

	declare const NSXIpsecCrlCertificatesDto: NSXIpsecCrlCertificatesDtoConstructor;

	interface NSXIpsecSiteIKEStatusDto
	{
		readonly channelState: String;
		readonly channelStatus: String;
		readonly lastInformationalMessage: String;
		readonly localIpAddress: String;
		readonly localSubnets: java.util.List;
		readonly peerId: String;
		readonly peerIpAddress: String;
		readonly peerSubnets: java.util.List;

	}

	interface NSXIpsecSiteIKEStatusDtoConstructor {
		new(value?:any): NSXIpsecSiteIKEStatusDto;
		readonly prototype: NSXIpsecSiteIKEStatusDto;
	}

	declare const NSXIpsecSiteIKEStatusDto: NSXIpsecSiteIKEStatusDtoConstructor;

	interface NSXIpsecSiteStatsDto
	{
		readonly ikeStatus: NSXIpsecSiteIKEStatusDto;
		readonly rxBytesOnSite: java.math.BigInteger;
		readonly siteStatus: String;
		readonly tunnelStats: java.util.List;
		readonly txBytesFromSite: java.math.BigInteger;

	}

	interface NSXIpsecSiteStatsDtoConstructor {
		new(value?:any): NSXIpsecSiteStatsDto;
		readonly prototype: NSXIpsecSiteStatsDto;
	}

	declare const NSXIpsecSiteStatsDto: NSXIpsecSiteStatsDtoConstructor;

	interface NSXIpsecStatusAndStatsDto
	{
		readonly serverStatus: String;
		readonly siteStatistics: java.util.List;
		readonly timeStamp: long;

	}

	interface NSXIpsecStatusAndStatsDtoConstructor {
		new(value?:any): NSXIpsecStatusAndStatsDto;
		readonly prototype: NSXIpsecStatusAndStatsDto;
	}

	declare const NSXIpsecStatusAndStatsDto: NSXIpsecStatusAndStatsDtoConstructor;

	interface NSXIPsecTrinityDto
	{
		readonly enabled: boolean;
		readonly global: NSXGlobalConfigDto;
		readonly logging: NSXLoggingDto;
		readonly sites: NSXSiteConfigsDto;
		readonly template: String;
		readonly version: long;

	}

	interface NSXIPsecTrinityDtoConstructor {
		new(value?:any): NSXIPsecTrinityDto;
		readonly prototype: NSXIPsecTrinityDto;
	}

	declare const NSXIPsecTrinityDto: NSXIPsecTrinityDtoConstructor;

	interface NSXIpsecTunnelStatsDto
	{
		readonly authenticationAlgorithm: String;
		readonly encryptionAlgorithm: String;
		readonly establishedDate: String;
		readonly lastInformationalMessage: String;
		readonly localSPI: String;
		readonly localSubnet: String;
		readonly peerSPI: String;
		readonly peerSubnet: String;
		readonly rxBytesOnLocalSubnet: java.math.BigInteger;
		readonly tunnelState: String;
		readonly tunnelStatus: String;
		readonly txBytesFromLocalSubnet: java.math.BigInteger;

	}

	interface NSXIpsecTunnelStatsDtoConstructor {
		new(value?:any): NSXIpsecTunnelStatsDto;
		readonly prototype: NSXIpsecTunnelStatsDto;
	}

	declare const NSXIpsecTunnelStatsDto: NSXIpsecTunnelStatsDtoConstructor;

	interface NSXIpsecVendorConfigDto
	{
		readonly config: String;
		readonly platform: String;
		readonly software: String;
		readonly vendor: String;

	}

	interface NSXIpsecVendorConfigDtoConstructor {
		new(value?:any): NSXIpsecVendorConfigDto;
		readonly prototype: NSXIpsecVendorConfigDto;
	}

	declare const NSXIpsecVendorConfigDto: NSXIpsecVendorConfigDtoConstructor;

	interface NSXIPSet
	{
		readonly description: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: String;
		readonly universal: boolean;
		readonly value: String;

	}

	interface NSXIPSetConstructor {
		new(value?:any): NSXIPSet;
		readonly prototype: NSXIPSet;
	}

	declare const NSXIPSet: NSXIPSetConstructor;

	interface NSXIPSetController
	{

		createV2(connection?: NSXConnection, ipsetdto?: NSXIPSetDto, scopeId?: String): String;
		deleteV2(connection?: NSXConnection, force?: boolean, identifierString?: String): void;
		getV2(connection?: NSXConnection, identifierString?: String): NSXIPSetDto;
		listV2(connection?: NSXConnection, scopeId?: String): NSXIPSetDto[];
		updateV2(connection?: NSXConnection, identifierString?: String, ipsetdto?: NSXIPSetDto): void;
	}

	declare const NSXIPSetController: NSXIPSetController;

	interface NSXIPSetDto
	{
		readonly clientHandle: String;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly inheritanceAllowed: boolean;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly type: NSXObjectTypeDto;
		readonly value: String;
		readonly vsmUuid: String;

	}

	interface NSXIPSetDtoConstructor {
		new(value?:any): NSXIPSetDto;
		readonly prototype: NSXIPSetDto;
	}

	declare const NSXIPSetDto: NSXIPSetDtoConstructor;

	interface NSXIPSetInv
	{
		readonly displayName: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;

	}

	interface NSXIPSetInvConstructor {
		new(value?:any): NSXIPSetInv;
		readonly prototype: NSXIPSetInv;
	}

	declare const NSXIPSetInv: NSXIPSetInvConstructor;

	interface NSXIPSetManager
	{

		createIpSet(connection?: NSXConnection, ipSet?: NSXIPSet): NSXIPSet;
		deleteIpSet(connection?: NSXConnection, ipSet?: NSXIPSet, force?: boolean): void;
		getIpSet(connection?: NSXConnection, ipSetId?: String): NSXIPSet;
		updateIpSet(connection?: NSXConnection, existingIpSet?: NSXIPSet, modifiedIpSet?: NSXIPSet): NSXIPSet;
	}

	declare const NSXIPSetManager: NSXIPSetManager;

	interface NSXIPSetUIDto
	{
		readonly IPSetAddresses: java.util.List;
		readonly IPSetID: String;
		readonly IPSetName: String;

	}

	interface NSXIPSetUIDtoConstructor {
		new(value?:any): NSXIPSetUIDto;
		readonly prototype: NSXIPSetUIDto;
	}

	declare const NSXIPSetUIDto: NSXIPSetUIDtoConstructor;

	interface NSXIsIsAreaIdsDto
	{
		readonly areaIds: java.util.List;

	}

	interface NSXIsIsAreaIdsDtoConstructor {
		new(value?:any): NSXIsIsAreaIdsDto;
		readonly prototype: NSXIsIsAreaIdsDto;
	}

	declare const NSXIsIsAreaIdsDto: NSXIsIsAreaIdsDtoConstructor;

	interface NSXISISConfigDto
	{
		readonly areaIds: NSXIsIsAreaIdsDto;
		readonly areaPassword: String;
		readonly domainPassword: String;
		readonly enabled: boolean;
		readonly isisInterfaces: NSXIsIsInterfacesDto;
		readonly isType: String;
		readonly redistribution: NSXRedistributionDto;
		readonly systemId: String;

	}

	interface NSXISISConfigDtoConstructor {
		new(value?:any): NSXISISConfigDto;
		readonly prototype: NSXISISConfigDto;
	}

	declare const NSXISISConfigDto: NSXISISConfigDtoConstructor;

	interface NSXIsIsInterfaceDto
	{
		readonly circuitType: String;
		readonly helloInterval: Integer;
		readonly helloMultiplier: Integer;
		readonly lspInterval: Integer;
		readonly meshGroup: long;
		readonly metric: Integer;
		readonly password: String;
		readonly priority: Integer;
		readonly vnic: Integer;

	}

	interface NSXIsIsInterfaceDtoConstructor {
		new(value?:any): NSXIsIsInterfaceDto;
		readonly prototype: NSXIsIsInterfaceDto;
	}

	declare const NSXIsIsInterfaceDto: NSXIsIsInterfaceDtoConstructor;

	interface NSXIsIsInterfacesDto
	{
		readonly isisInterfaces: java.util.List;

	}

	interface NSXIsIsInterfacesDtoConstructor {
		new(value?:any): NSXIsIsInterfacesDto;
		readonly prototype: NSXIsIsInterfacesDto;
	}

	declare const NSXIsIsInterfacesDto: NSXIsIsInterfacesDtoConstructor;

	interface NSXJobDto
	{
		readonly creationTimeMillis: long;
		readonly description: String;
		readonly id: String;
		readonly jobOwner: String;
		readonly name: String;
		readonly nextExecutionTimeMillis: long;
		readonly scope: String;
		readonly taskList: java.util.List;

	}

	interface NSXJobDtoConstructor {
		new(value?:any): NSXJobDto;
		readonly prototype: NSXJobDto;
	}

	declare const NSXJobDto: NSXJobDtoConstructor;

	interface NSXJobIdsListDto
	{
		readonly jobIds: java.util.List;

	}

	interface NSXJobIdsListDtoConstructor {
		new(value?:any): NSXJobIdsListDto;
		readonly prototype: NSXJobIdsListDto;
	}

	declare const NSXJobIdsListDto: NSXJobIdsListDtoConstructor;

	interface NSXJobInstanceDto
	{
		readonly endTimeMillis: long;
		readonly failureRetryCount: int;
		readonly id: String;
		readonly job: NSXJobDto;
		readonly jobOutput: java.util.Map;
		readonly name: String;
		readonly startTimeMillis: long;
		readonly status: String;
		readonly taskInstances: java.util.List;
		readonly timeoutRetryCount: int;
		readonly user: NSXUserInfoDto;

	}

	interface NSXJobInstanceDtoConstructor {
		new(value?:any): NSXJobInstanceDto;
		readonly prototype: NSXJobInstanceDto;
	}

	declare const NSXJobInstanceDto: NSXJobInstanceDtoConstructor;

	interface NSXJobInstanceListDto
	{
		readonly jobInstances: java.util.List;

	}

	interface NSXJobInstanceListDtoConstructor {
		new(value?:any): NSXJobInstanceListDto;
		readonly prototype: NSXJobInstanceListDto;
	}

	declare const NSXJobInstanceListDto: NSXJobInstanceListDtoConstructor;

	interface NSXJobResultDto
	{
		readonly key: String;
		readonly value: String;

	}

	interface NSXJobResultDtoConstructor {
		new(value?:any): NSXJobResultDto;
		readonly prototype: NSXJobResultDto;
	}

	declare const NSXJobResultDto: NSXJobResultDtoConstructor;

	interface NSXKeyCriteriaDto
	{
		readonly criteriaList: java.util.List;
		readonly key: String;

	}

	interface NSXKeyCriteriaDtoConstructor {
		new(value?:any): NSXKeyCriteriaDto;
		readonly prototype: NSXKeyCriteriaDto;
	}

	declare const NSXKeyCriteriaDto: NSXKeyCriteriaDtoConstructor;

	interface NSXKeyCriteriaListDto
	{
		readonly keyCriteriaDtoList: java.util.List;

	}

	interface NSXKeyCriteriaListDtoConstructor {
		new(value?:any): NSXKeyCriteriaListDto;
		readonly prototype: NSXKeyCriteriaListDto;
	}

	declare const NSXKeyCriteriaListDto: NSXKeyCriteriaListDtoConstructor;

	interface NSXKeyValueDto
	{
		readonly key: String;
		readonly value: String;

	}

	interface NSXKeyValueDtoConstructor {
		new(value?:any): NSXKeyValueDto;
		readonly prototype: NSXKeyValueDto;
	}

	declare const NSXKeyValueDto: NSXKeyValueDtoConstructor;

	interface NSXKeyValueFilterDto
	{
		readonly key: String;
		readonly operator: String;
		readonly value: String;

	}

	interface NSXKeyValueFilterDtoConstructor {
		new(value?:any): NSXKeyValueFilterDto;
		readonly prototype: NSXKeyValueFilterDto;
	}

	declare const NSXKeyValueFilterDto: NSXKeyValueFilterDtoConstructor;

	interface NSXKeyValueListDto
	{
		readonly keyValueList: java.util.List;

	}

	interface NSXKeyValueListDtoConstructor {
		new(value?:any): NSXKeyValueListDto;
		readonly prototype: NSXKeyValueListDto;
	}

	declare const NSXKeyValueListDto: NSXKeyValueListDtoConstructor;

	interface NSXL2VpnConfigDto
	{
		readonly enabled: boolean;
		readonly l2VpnSites: NSXL2VpnSitesDto;
		readonly logging: NSXLoggingDto;
		readonly template: String;
		readonly version: long;

	}

	interface NSXL2VpnConfigDtoConstructor {
		new(value?:any): NSXL2VpnConfigDto;
		readonly prototype: NSXL2VpnConfigDto;
	}

	declare const NSXL2VpnConfigDto: NSXL2VpnConfigDtoConstructor;

	interface NSXL2VpnController
	{

		applyL2VpnConfigurationV4(connection?: NSXConnection, l2vpnconfigdto?: NSXL2VpnConfigDto, edgeId?: String): void;
		deleteL2VpnConfigurationV4(connection?: NSXConnection, edgeId?: String): void;
		enableL2VpnServiceV4(connection?: NSXConnection, edgeId?: String, enableService?: boolean): void;
		getL2vpnConfigStatisticsV4(connection?: NSXConnection, edgeId?: String): NSXL2vpnStatusAndStatsDto;
		getL2VpnConfigurationV4(connection?: NSXConnection, edgeId?: String): NSXL2VpnConfigDto;
	}

	declare const NSXL2VpnController: NSXL2VpnController;

	interface NSXL2VpnProxySettingDto
	{
		readonly address: String;
		readonly password: String;
		readonly port: Integer;
		readonly type: String;
		readonly userName: String;

	}

	interface NSXL2VpnProxySettingDtoConstructor {
		new(value?:any): NSXL2VpnProxySettingDto;
		readonly prototype: NSXL2VpnProxySettingDto;
	}

	declare const NSXL2VpnProxySettingDto: NSXL2VpnProxySettingDtoConstructor;

	interface NSXL2VpnSiteClientConfigurationDto
	{
		readonly caCertificate: String;
		readonly l2VpnUser: NSXL2VpnUserDto;
		readonly serverAddress: String;
		readonly serverPort: Integer;
		readonly vnic: Integer;

	}

	interface NSXL2VpnSiteClientConfigurationDtoConstructor {
		new(value?:any): NSXL2VpnSiteClientConfigurationDto;
		readonly prototype: NSXL2VpnSiteClientConfigurationDto;
	}

	declare const NSXL2VpnSiteClientConfigurationDto: NSXL2VpnSiteClientConfigurationDtoConstructor;

	interface NSXL2VpnSiteClientDto
	{
		readonly configuration: NSXL2VpnSiteClientConfigurationDto;
		readonly l2VpnUser: NSXL2VpnUserDto;
		readonly proxySetting: NSXL2VpnProxySettingDto;

	}

	interface NSXL2VpnSiteClientDtoConstructor {
		new(value?:any): NSXL2VpnSiteClientDto;
		readonly prototype: NSXL2VpnSiteClientDto;
	}

	declare const NSXL2VpnSiteClientDto: NSXL2VpnSiteClientDtoConstructor;

	interface NSXL2VpnSiteDto
	{
		readonly client: NSXL2VpnSiteClientDto;
		readonly description: String;
		readonly enabled: boolean;
		readonly name: String;
		readonly server: NSXL2VpnSiteServerDto;

	}

	interface NSXL2VpnSiteDtoConstructor {
		new(value?:any): NSXL2VpnSiteDto;
		readonly prototype: NSXL2VpnSiteDto;
	}

	declare const NSXL2VpnSiteDto: NSXL2VpnSiteDtoConstructor;

	interface NSXL2VpnSitesDto
	{
		readonly l2VpnSites: java.util.List;

	}

	interface NSXL2VpnSitesDtoConstructor {
		new(value?:any): NSXL2VpnSitesDto;
		readonly prototype: NSXL2VpnSitesDto;
	}

	declare const NSXL2VpnSitesDto: NSXL2VpnSitesDtoConstructor;

	interface NSXL2VpnSiteServerConfigurationDto
	{
		readonly encryptionAlgorithm: String;
		readonly listenerIp: String;
		readonly listenerPort: Integer;
		readonly serverCertificate: String;
		readonly vnic: Integer;

	}

	interface NSXL2VpnSiteServerConfigurationDtoConstructor {
		new(value?:any): NSXL2VpnSiteServerConfigurationDto;
		readonly prototype: NSXL2VpnSiteServerConfigurationDto;
	}

	declare const NSXL2VpnSiteServerConfigurationDto: NSXL2VpnSiteServerConfigurationDtoConstructor;

	interface NSXL2VpnSiteServerDto
	{
		readonly configuration: NSXL2VpnSiteServerConfigurationDto;
		readonly l2VpnUsers: NSXL2VpnUsersDto;

	}

	interface NSXL2VpnSiteServerDtoConstructor {
		new(value?:any): NSXL2VpnSiteServerDto;
		readonly prototype: NSXL2VpnSiteServerDto;
	}

	declare const NSXL2VpnSiteServerDto: NSXL2VpnSiteServerDtoConstructor;

	interface NSXL2vpnSiteStatsDto
	{
		readonly establishedDate: String;
		readonly rxBytesOnLocalSubnet: java.math.BigInteger;
		readonly tunnelStatus: String;
		readonly txBytesFromLocalSubnet: java.math.BigInteger;

	}

	interface NSXL2vpnSiteStatsDtoConstructor {
		new(value?:any): NSXL2vpnSiteStatsDto;
		readonly prototype: NSXL2vpnSiteStatsDto;
	}

	declare const NSXL2vpnSiteStatsDto: NSXL2vpnSiteStatsDtoConstructor;

	interface NSXL2vpnStatusAndStatsDto
	{
		readonly serverStatus: String;
		readonly siteStats: java.util.List;
		readonly timeStamp: long;

	}

	interface NSXL2vpnStatusAndStatsDtoConstructor {
		new(value?:any): NSXL2vpnStatusAndStatsDto;
		readonly prototype: NSXL2vpnStatusAndStatsDto;
	}

	declare const NSXL2vpnStatusAndStatsDto: NSXL2vpnStatusAndStatsDtoConstructor;

	interface NSXL2VpnUserDto
	{
		readonly password: String;
		readonly userId: String;

	}

	interface NSXL2VpnUserDtoConstructor {
		new(value?:any): NSXL2VpnUserDto;
		readonly prototype: NSXL2VpnUserDto;
	}

	declare const NSXL2VpnUserDto: NSXL2VpnUserDtoConstructor;

	interface NSXL2VpnUsersDto
	{
		readonly l2VpnUsers: java.util.List;

	}

	interface NSXL2VpnUsersDtoConstructor {
		new(value?:any): NSXL2VpnUsersDto;
		readonly prototype: NSXL2VpnUsersDto;
	}

	declare const NSXL2VpnUsersDto: NSXL2VpnUsersDtoConstructor;

	interface NSXLayer2DestinationDto
	{
		readonly address: NSXAddressDto;
		readonly application: NSXApplicationDto;
		readonly protocol: Integer;
		readonly protocolName: String;

	}

	interface NSXLayer2DestinationDtoConstructor {
		new(value?:any): NSXLayer2DestinationDto;
		readonly prototype: NSXLayer2DestinationDto;
	}

	declare const NSXLayer2DestinationDto: NSXLayer2DestinationDtoConstructor;

	interface NSXLayer2FirewallConfigurationGwemDto
	{
		readonly layer2Lists: NSXLayer2ListsGwemDto;
		readonly layer2RuleList: NSXFirewallRuleListGwemDto;

	}

	interface NSXLayer2FirewallConfigurationGwemDtoConstructor {
		new(value?:any): NSXLayer2FirewallConfigurationGwemDto;
		readonly prototype: NSXLayer2FirewallConfigurationGwemDto;
	}

	declare const NSXLayer2FirewallConfigurationGwemDto: NSXLayer2FirewallConfigurationGwemDtoConstructor;

	interface NSXLayer2FirewallRuleDto
	{
		readonly action: String;
		readonly destination: NSXLayer2DestinationDto;
		readonly disabled: boolean;
		readonly id: long;
		readonly logged: boolean;
		readonly name: String;
		readonly notes: String;
		readonly precedence: String;
		readonly source: NSXAddressDto;

	}

	interface NSXLayer2FirewallRuleDtoConstructor {
		new(value?:any): NSXLayer2FirewallRuleDto;
		readonly prototype: NSXLayer2FirewallRuleDto;
	}

	declare const NSXLayer2FirewallRuleDto: NSXLayer2FirewallRuleDtoConstructor;

	interface NSXLayer2ListsGwemDto
	{
		readonly macLists: NSXMacListsGwemDto;

	}

	interface NSXLayer2ListsGwemDtoConstructor {
		new(value?:any): NSXLayer2ListsGwemDto;
		readonly prototype: NSXLayer2ListsGwemDto;
	}

	declare const NSXLayer2ListsGwemDto: NSXLayer2ListsGwemDtoConstructor;

	interface NSXLayer3DestinationDto
	{
		readonly address: NSXAddressDto;
		readonly application: NSXApplicationDto;

	}

	interface NSXLayer3DestinationDtoConstructor {
		new(value?:any): NSXLayer3DestinationDto;
		readonly prototype: NSXLayer3DestinationDto;
	}

	declare const NSXLayer3DestinationDto: NSXLayer3DestinationDtoConstructor;

	interface NSXLayer3FirewallConfigurationGwemDto
	{
		readonly layer3Lists: NSXLayer3ListsGwemDto;
		readonly layer3RuleList: NSXFirewallRuleListGwemDto;

	}

	interface NSXLayer3FirewallConfigurationGwemDtoConstructor {
		new(value?:any): NSXLayer3FirewallConfigurationGwemDto;
		readonly prototype: NSXLayer3FirewallConfigurationGwemDto;
	}

	declare const NSXLayer3FirewallConfigurationGwemDto: NSXLayer3FirewallConfigurationGwemDtoConstructor;

	interface NSXLayer3FirewallRuleDto
	{
		readonly action: String;
		readonly destination: NSXLayer3DestinationDto;
		readonly disabled: boolean;
		readonly id: long;
		readonly logged: boolean;
		readonly name: String;
		readonly notes: String;
		readonly precedence: String;
		readonly source: NSXLayer3SourceAddressDto;

	}

	interface NSXLayer3FirewallRuleDtoConstructor {
		new(value?:any): NSXLayer3FirewallRuleDto;
		readonly prototype: NSXLayer3FirewallRuleDto;
	}

	declare const NSXLayer3FirewallRuleDto: NSXLayer3FirewallRuleDtoConstructor;

	interface NSXLayer3ListsGwemDto
	{
		readonly ipLists: NSXIpListsGwemDto;

	}

	interface NSXLayer3ListsGwemDtoConstructor {
		new(value?:any): NSXLayer3ListsGwemDto;
		readonly prototype: NSXLayer3ListsGwemDto;
	}

	declare const NSXLayer3ListsGwemDto: NSXLayer3ListsGwemDtoConstructor;

	interface NSXLayer3SourceAddressDto
	{
		readonly address: NSXAddressDto;
		readonly portInfo: String;

	}

	interface NSXLayer3SourceAddressDtoConstructor {
		new(value?:any): NSXLayer3SourceAddressDto;
		readonly prototype: NSXLayer3SourceAddressDto;
	}

	declare const NSXLayer3SourceAddressDto: NSXLayer3SourceAddressDtoConstructor;

	interface NSXLayoutConfigurationController
	{

		applyLayoutConfigurationsV3(connection?: NSXConnection, layoutconfigurationdto?: NSXLayoutConfigurationDto, edgeId?: String): void;
		defaultClientIconsV3(connection?: NSXConnection, edgeId?: String): void;
		defaultLayoutConfigurationV3(connection?: NSXConnection, edgeId?: String): void;
		getClientIconsV3(connection?: NSXConnection, edgeId?: String): NSXClientIconsDto;
		getDesktopIconV3(connection?: NSXConnection, edgeId?: String): void;
		getLayoutConfigurationV3(connection?: NSXConnection, edgeId?: String): NSXLayoutConfigurationDto;
		getPhatBannerV3(connection?: NSXConnection, edgeId?: String): void;
		getPhatConnectIconV3(connection?: NSXConnection, edgeId?: String): void;
		getPhatDisconnectIconV3(connection?: NSXConnection, edgeId?: String): void;
		getPhatErrorIconV3(connection?: NSXConnection, edgeId?: String): void;
		getPortalLogoV3(connection?: NSXConnection, edgeId?: String): void;
		uploadPhatClientBannerV3(connection?: NSXConnection, banner?: org.springframework.web.multipart.MultipartFile, edgeId?: String): void;
		uploadPhatConnectIconV3(connection?: NSXConnection, icon?: org.springframework.web.multipart.MultipartFile, edgeId?: String): void;
		uploadPhatDesktopIconV3(connection?: NSXConnection, icon?: org.springframework.web.multipart.MultipartFile, edgeId?: String): void;
		uploadPhatDisconnectIconV3(connection?: NSXConnection, icon?: org.springframework.web.multipart.MultipartFile, edgeId?: String): void;
		uploadPhatErrorIconV3(connection?: NSXConnection, icon?: org.springframework.web.multipart.MultipartFile, edgeId?: String): void;
		uploadPortalLayoutV3(connection?: NSXConnection, layoutFile?: org.springframework.web.multipart.MultipartFile, edgeId?: String): void;
	}

	declare const NSXLayoutConfigurationController: NSXLayoutConfigurationController;

	interface NSXLayoutConfigurationDto
	{
		readonly bodyColor: String;
		readonly companyName: String;
		readonly encodedLogo: String;
		readonly logoBackgroundColor: String;
		readonly logoExtention: String;
		readonly logoFile: byte[];
		readonly logoUri: String;
		readonly menuBarColor: String;
		readonly portalTitle: String;
		readonly rowAlternativeColor: String;
		readonly rowColor: String;
		readonly titleColor: String;
		readonly topFrameColor: String;

	}

	interface NSXLayoutConfigurationDtoConstructor {
		new(value?:any): NSXLayoutConfigurationDto;
		readonly prototype: NSXLayoutConfigurationDto;
	}

	declare const NSXLayoutConfigurationDto: NSXLayoutConfigurationDtoConstructor;

	interface NSXLayoutConfigurationTrinityController
	{

		applyLayoutConfigurationsV4(connection?: NSXConnection, layoutconfigurationdto?: NSXLayoutConfigurationDto, edgeId?: String): void;
		defaultClientIconsV4(connection?: NSXConnection, edgeId?: String): void;
		defaultLayoutConfigurationV4(connection?: NSXConnection, edgeId?: String): void;
		getClientIconsV4(connection?: NSXConnection, edgeId?: String): NSXClientIconsDto;
		getDesktopIconV4(connection?: NSXConnection, edgeId?: String): void;
		getLayoutConfigurationV4(connection?: NSXConnection, edgeId?: String): NSXLayoutConfigurationDto;
		getPhatBannerV4(connection?: NSXConnection, edgeId?: String): void;
		getPhatConnectIconV4(connection?: NSXConnection, edgeId?: String): void;
		getPhatDisconnectIconV4(connection?: NSXConnection, edgeId?: String): void;
		getPhatErrorIconV4(connection?: NSXConnection, edgeId?: String): void;
		getPortalLogoV4(connection?: NSXConnection, edgeId?: String): void;
		uploadPhatClientBannerV4(connection?: NSXConnection, banner?: org.springframework.web.multipart.MultipartFile, edgeId?: String): void;
		uploadPhatConnectIconV4(connection?: NSXConnection, icon?: org.springframework.web.multipart.MultipartFile, edgeId?: String): void;
		uploadPhatDesktopIconV4(connection?: NSXConnection, icon?: org.springframework.web.multipart.MultipartFile, edgeId?: String): void;
		uploadPhatDisconnectIconV4(connection?: NSXConnection, icon?: org.springframework.web.multipart.MultipartFile, edgeId?: String): void;
		uploadPhatErrorIconV4(connection?: NSXConnection, icon?: org.springframework.web.multipart.MultipartFile, edgeId?: String): void;
		uploadPortalLayoutV4(connection?: NSXConnection, layoutFile?: org.springframework.web.multipart.MultipartFile, edgeId?: String): void;
	}

	declare const NSXLayoutConfigurationTrinityController: NSXLayoutConfigurationTrinityController;

	interface NSXLdapAuthServerDto
	{
		readonly authServerType: String;
		readonly bindDomainName: String;
		readonly bindPassword: String;
		readonly enabled: boolean;
		readonly enableSsl: boolean;
		readonly ip: String;
		readonly isSecondaryAuthServer: boolean;
		readonly loginAttributeName: String;
		readonly objectId: String;
		readonly order: Integer;
		readonly port: Integer;
		readonly searchBase: String;
		readonly searchFilter: String;
		readonly terminateSessionOnAuthFails: boolean;
		readonly timeOut: Integer;

	}

	interface NSXLdapAuthServerDtoConstructor {
		new(value?:any): NSXLdapAuthServerDto;
		readonly prototype: NSXLdapAuthServerDto;
	}

	declare const NSXLdapAuthServerDto: NSXLdapAuthServerDtoConstructor;

	interface NSXLicenseStatusDto
	{
		readonly eval: boolean;
		readonly expiry: long;
		readonly key: String;

	}

	interface NSXLicenseStatusDtoConstructor {
		new(value?:any): NSXLicenseStatusDto;
		readonly prototype: NSXLicenseStatusDto;
	}

	declare const NSXLicenseStatusDto: NSXLicenseStatusDtoConstructor;

	interface NSXLifAttachmentDto
	{
		readonly connection: String;
		readonly dvsUuids: java.util.List;
		readonly lifBridgeId: Integer;
		readonly lifBridgeName: String;
		readonly lifFlag: int;
		readonly lifId: Integer;
		readonly lifName: String;
		readonly lifType: String;
		readonly macAddress: String;
		readonly mtu: Integer;
		readonly multicastIp: String;
		readonly type: String;

	}

	interface NSXLifAttachmentDtoConstructor {
		new(value?:any): NSXLifAttachmentDto;
		readonly prototype: NSXLifAttachmentDto;
	}

	declare const NSXLifAttachmentDto: NSXLifAttachmentDtoConstructor;

	interface NSXListGwemDto
	{
		readonly name: String;
		readonly value: java.util.List;

	}

	interface NSXListGwemDtoConstructor {
		new(value?:any): NSXListGwemDto;
		readonly prototype: NSXListGwemDto;
	}

	declare const NSXListGwemDto: NSXListGwemDtoConstructor;

	interface NSXLiveFlowFilterDto
	{
		readonly destinationIPAddress: String;
		readonly sourceIPAddress: String;

	}

	interface NSXLiveFlowFilterDtoConstructor {
		new(value?:any): NSXLiveFlowFilterDto;
		readonly prototype: NSXLiveFlowFilterDto;
	}

	declare const NSXLiveFlowFilterDto: NSXLiveFlowFilterDtoConstructor;

	interface NSXLiveFlowRecordDto
	{
		readonly applicationContext: String;
		readonly colorCode: String;
		readonly destinationIP: String;
		readonly destinationPort: int;
		readonly direction: String;
		readonly flowType: String;
		readonly incomingBytes: long;
		readonly incomingPackets: long;
		readonly outgoingBytes: long;
		readonly outgoingPackets: long;
		readonly protocolName: String;
		readonly ruleId: long;
		readonly sourceIP: String;
		readonly sourcePort: int;
		readonly state: String;

	}

	interface NSXLiveFlowRecordDtoConstructor {
		new(value?:any): NSXLiveFlowRecordDto;
		readonly prototype: NSXLiveFlowRecordDto;
	}

	declare const NSXLiveFlowRecordDto: NSXLiveFlowRecordDtoConstructor;

	interface NSXLiveFlowRecordsDto
	{
		readonly records: java.util.List;

	}

	interface NSXLiveFlowRecordsDtoConstructor {
		new(value?:any): NSXLiveFlowRecordsDto;
		readonly prototype: NSXLiveFlowRecordsDto;
	}

	declare const NSXLiveFlowRecordsDto: NSXLiveFlowRecordsDtoConstructor;

	interface NSXLoadBalancer
	{
		readonly enableAcceleration: boolean;
		readonly enabled: boolean;
		readonly enableLogging: boolean;
		readonly enableServiceInsertion: boolean;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly logLevel: String;
		readonly pool: NSXLoadBalancerPool;
		readonly virtualServer: NSXLoadBalancerVirtualServer;

	}

	interface NSXLoadBalancerConstructor {
		new(value?:any): NSXLoadBalancer;
		readonly prototype: NSXLoadBalancer;
	}

	declare const NSXLoadBalancer: NSXLoadBalancerConstructor;

	interface NSXLoadBalancerApplicationProfileDtoV4
	{
		readonly applicationProfileId: String;
		readonly clientSsl: NSXLoadBalancerClientSslDto;
		readonly httpRedirect: NSXLoadBalancerHttpRedirectDto;
		readonly insertXForwardedFor: boolean;
		readonly name: String;
		readonly persistence: NSXLoadBalancerPersistenceDtoV4;
		readonly serverSsl: NSXLoadBalancerServerSslDto;
		readonly serverSslEnabled: boolean;
		readonly sslPassthrough: boolean;
		readonly template: String;

	}

	interface NSXLoadBalancerApplicationProfileDtoV4Constructor {
		new(value?:any): NSXLoadBalancerApplicationProfileDtoV4;
		readonly prototype: NSXLoadBalancerApplicationProfileDtoV4;
	}

	declare const NSXLoadBalancerApplicationProfileDtoV4: NSXLoadBalancerApplicationProfileDtoV4Constructor;

	interface NSXLoadBalancerApplicationRuleDto
	{
		readonly applicationRuleId: String;
		readonly name: String;
		readonly script: String;

	}

	interface NSXLoadBalancerApplicationRuleDtoConstructor {
		new(value?:any): NSXLoadBalancerApplicationRuleDto;
		readonly prototype: NSXLoadBalancerApplicationRuleDto;
	}

	declare const NSXLoadBalancerApplicationRuleDto: NSXLoadBalancerApplicationRuleDtoConstructor;

	interface NSXLoadBalancerClientSslDto
	{
		readonly caCertificate: java.util.List;
		readonly ciphers: String;
		readonly clientAuth: String;
		readonly crlCertificate: java.util.List;
		readonly serviceCertificate: java.util.List;

	}

	interface NSXLoadBalancerClientSslDtoConstructor {
		new(value?:any): NSXLoadBalancerClientSslDto;
		readonly prototype: NSXLoadBalancerClientSslDto;
	}

	declare const NSXLoadBalancerClientSslDto: NSXLoadBalancerClientSslDtoConstructor;

	interface NSXLoadBalancerConfigDto
	{
		readonly accelerationEnabled: boolean;
		readonly enabled: boolean;
		readonly enableServiceInsertion: boolean;
		readonly poolList: java.util.List;
		readonly template: String;
		readonly version: long;
		readonly virtualServerList: java.util.List;

	}

	interface NSXLoadBalancerConfigDtoConstructor {
		new(value?:any): NSXLoadBalancerConfigDto;
		readonly prototype: NSXLoadBalancerConfigDto;
	}

	declare const NSXLoadBalancerConfigDto: NSXLoadBalancerConfigDtoConstructor;

	interface NSXLoadBalancerConfigDtoV4
	{
		readonly accelerationEnabled: boolean;
		readonly applicationProfile: java.util.List;
		readonly applicationRule: java.util.List;
		readonly enabled: boolean;
		readonly enableServiceInsertion: boolean;
		readonly globalServiceInstance: NSXGlobalServiceInstanceDto;
		readonly logging: NSXLoggingDto;
		readonly monitor: java.util.List;
		readonly pool: java.util.List;
		readonly template: String;
		readonly version: long;
		readonly virtualServer: java.util.List;

	}

	interface NSXLoadBalancerConfigDtoV4Constructor {
		new(value?:any): NSXLoadBalancerConfigDtoV4;
		readonly prototype: NSXLoadBalancerConfigDtoV4;
	}

	declare const NSXLoadBalancerConfigDtoV4: NSXLoadBalancerConfigDtoV4Constructor;

	interface NSXLoadBalancerController
	{

		createLoadBalancerPoolV3(connection?: NSXConnection, edgeId?: String, loadbalancerpooldto?: NSXLoadBalancerPoolDto): NSXLoadBalancerPoolDto;
		createLoadBalancerVirtualServerV3(connection?: NSXConnection, edgeId?: String, loadbalancervirtualserverdto?: NSXLoadBalancerVirtualServerDto): NSXLoadBalancerVirtualServerDto;
		deleteAllLoadBalancerPoolsV3(connection?: NSXConnection, edgeId?: String): void;
		deleteAllLoadBalancerVirtualServersV3(connection?: NSXConnection, edgeId?: String): void;
		deleteLoadBalancerConfigV3(connection?: NSXConnection, edgeId?: String): void;
		deleteLoadBalancerPoolV3(connection?: NSXConnection, edgeId?: String, poolId?: String): void;
		deleteLoadBalancerVirtualServerV3(connection?: NSXConnection, edgeId?: String, virtualserverId?: String): void;
		getLoadBalancerConfigV3(connection?: NSXConnection, edgeId?: String): NSXLoadBalancerConfigDto;
		getLoadBalancerPoolConfigV3(connection?: NSXConnection, edgeId?: String): NSXLoadBalancerConfigDto;
		getLoadBalancerStatisticsV3(connection?: NSXConnection, edgeId?: String): NSXLoadBalancerStatusAndStatsDto;
		getLoadBalancerVirtualServerConfigV3(connection?: NSXConnection, edgeId?: String): NSXLoadBalancerConfigDto;
		setAccelerationV3(connection?: NSXConnection, edgeId?: String, enable?: boolean): void;
		updateLoadBalancerConfigV3(connection?: NSXConnection, edgeId?: String, loadbalancerconfigdto?: NSXLoadBalancerConfigDto): void;
		updateLoadBalancerPoolV3(connection?: NSXConnection, edgeId?: String, poolId?: String, loadbalancerpooldto?: NSXLoadBalancerPoolDto): void;
		updateLoadBalancerVirtualServerV3(connection?: NSXConnection, edgeId?: String, virtualserverId?: String, loadbalancervirtualserverdto?: NSXLoadBalancerVirtualServerDto): void;
	}

	declare const NSXLoadBalancerController: NSXLoadBalancerController;

	interface NSXLoadBalancerControllerV4
	{

		changeMemberConditionV4(connection?: NSXConnection, edgeId?: String, memberId?: String, enable?: boolean): void;
		createLoadBalancerApplicationProfileV4(connection?: NSXConnection, edgeId?: String, loadbalancerapplicationprofiledtov4?: NSXLoadBalancerApplicationProfileDtoV4): void;
		createLoadBalancerApplicationRuleV4(connection?: NSXConnection, edgeId?: String, loadbalancerapplicationruledto?: NSXLoadBalancerApplicationRuleDto): void;
		createLoadBalancerMonitorV4(connection?: NSXConnection, edgeId?: String, loadbalancermonitordto?: NSXLoadBalancerMonitorDto): void;
		createLoadBalancerPoolV4(connection?: NSXConnection, edgeId?: String, loadbalancerpooldtov4?: NSXLoadBalancerPoolDtoV4): void;
		createLoadBalancerVirtualServerV4(connection?: NSXConnection, edgeId?: String, loadbalancervirtualserverdtov4?: NSXLoadBalancerVirtualServerDtoV4): void;
		deleteAllLoadBalancerApplicationProfilesV4(connection?: NSXConnection, edgeId?: String): void;
		deleteAllLoadBalancerApplicationRulesV4(connection?: NSXConnection, edgeId?: String): void;
		deleteAllLoadBalancerMonitorsV4(connection?: NSXConnection, edgeId?: String): void;
		deleteAllLoadBalancerPoolsV4(connection?: NSXConnection, edgeId?: String): void;
		deleteAllLoadBalancerVirtualServersV4(connection?: NSXConnection, edgeId?: String): void;
		deleteLoadBalancerApplicationProfileV4(connection?: NSXConnection, edgeId?: String, applicationProfileId?: String): void;
		deleteLoadBalancerApplicationRuleV4(connection?: NSXConnection, edgeId?: String, applicationRuleId?: String): void;
		deleteLoadBalancerConfigV4(connection?: NSXConnection, edgeId?: String): void;
		deleteLoadBalancerMonitorV4(connection?: NSXConnection, edgeId?: String, monitorId?: String): void;
		deleteLoadBalancerPoolV4(connection?: NSXConnection, edgeId?: String, poolId?: String): void;
		deleteLoadBalancerVirtualServerV4(connection?: NSXConnection, edgeId?: String, virtualServerId?: String): void;
		getLoadBalancerApplicationProfileConfigV4(connection?: NSXConnection, edgeId?: String, applicationProfileId?: String): NSXLoadBalancerApplicationProfileDtoV4;
		getLoadBalancerApplicationRuleConfigV4(connection?: NSXConnection, edgeId?: String): NSXLoadBalancerConfigDtoV4;
		getLoadBalancerConfigV4(connection?: NSXConnection, edgeId?: String): NSXLoadBalancerConfigDtoV4;
		getLoadBalancerMonitorConfigV4(connection?: NSXConnection, edgeId?: String, monitorId?: String): NSXLoadBalancerMonitorDto;
		getLoadBalancerPoolConfigV4(connection?: NSXConnection, edgeId?: String, poolId?: String): NSXLoadBalancerPoolDtoV4;
		getLoadBalancerStatisticsV4(connection?: NSXConnection, edgeId?: String): NSXLoadBalancerStatusAndStatsDtoV4;
		getLoadBalancerVirtualServerConfigV4(connection?: NSXConnection, edgeId?: String, virtualServerId?: String): NSXLoadBalancerVirtualServerDtoV4;
		installServiceInstanceRuntimesV4(connection?: NSXConnection, edgeId?: String): String;
		setAccelerationV4(connection?: NSXConnection, edgeId?: String, enable?: boolean): void;
		updateLoadBalancerApplicationProfileV4(connection?: NSXConnection, edgeId?: String, applicationProfileId?: String, loadbalancerapplicationprofiledtov4?: NSXLoadBalancerApplicationProfileDtoV4): void;
		updateLoadBalancerApplicationRuleV4(connection?: NSXConnection, edgeId?: String, applicationRuleId?: String, loadbalancerapplicationruledto?: NSXLoadBalancerApplicationRuleDto): void;
		updateLoadBalancerConfigV4(connection?: NSXConnection, edgeId?: String, loadbalancerconfigdtov4?: NSXLoadBalancerConfigDtoV4): void;
		updateLoadBalancerMonitorV4(connection?: NSXConnection, edgeId?: String, monitorId?: String, loadbalancermonitordto?: NSXLoadBalancerMonitorDto): void;
		updateLoadBalancerPoolV4(connection?: NSXConnection, edgeId?: String, poolId?: String, loadbalancerpooldtov4?: NSXLoadBalancerPoolDtoV4): void;
		updateLoadBalancerVirtualServerV4(connection?: NSXConnection, edgeId?: String, virtualServerId?: String, loadbalancervirtualserverdtov4?: NSXLoadBalancerVirtualServerDtoV4): void;
	}

	declare const NSXLoadBalancerControllerV4: NSXLoadBalancerControllerV4;

	interface NSXLoadBalancerHealthcheckDto
	{
		readonly healthThreshold: long;
		readonly interval: long;
		readonly mode: String;
		readonly timeout: long;
		readonly unHealthThreshold: long;
		readonly uri: String;

	}

	interface NSXLoadBalancerHealthcheckDtoConstructor {
		new(value?:any): NSXLoadBalancerHealthcheckDto;
		readonly prototype: NSXLoadBalancerHealthcheckDto;
	}

	declare const NSXLoadBalancerHealthcheckDto: NSXLoadBalancerHealthcheckDtoConstructor;

	interface NSXLoadBalancerHttpRedirectDto
	{
		readonly to: String;

	}

	interface NSXLoadBalancerHttpRedirectDtoConstructor {
		new(value?:any): NSXLoadBalancerHttpRedirectDto;
		readonly prototype: NSXLoadBalancerHttpRedirectDto;
	}

	declare const NSXLoadBalancerHttpRedirectDto: NSXLoadBalancerHttpRedirectDtoConstructor;

	interface NSXLoadBalancerInv
	{
		readonly displayName: String;
		readonly enableAcceleration: boolean;
		readonly enabled: boolean;
		readonly enableLogging: boolean;
		readonly enableServiceInsertion: boolean;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly logLevel: String;

	}

	interface NSXLoadBalancerInvConstructor {
		new(value?:any): NSXLoadBalancerInv;
		readonly prototype: NSXLoadBalancerInv;
	}

	declare const NSXLoadBalancerInv: NSXLoadBalancerInvConstructor;

	interface NSXLoadBalancerMemberDto
	{
		readonly ipAddress: String;
		readonly servicePortList: java.util.List;
		readonly weight: long;

	}

	interface NSXLoadBalancerMemberDtoConstructor {
		new(value?:any): NSXLoadBalancerMemberDto;
		readonly prototype: NSXLoadBalancerMemberDto;
	}

	declare const NSXLoadBalancerMemberDto: NSXLoadBalancerMemberDtoConstructor;

	interface NSXLoadBalancerMemberStatsDto
	{
		readonly ipAddress: String;
		readonly servicePortList: java.util.List;

	}

	interface NSXLoadBalancerMemberStatsDtoConstructor {
		new(value?:any): NSXLoadBalancerMemberStatsDto;
		readonly prototype: NSXLoadBalancerMemberStatsDto;
	}

	declare const NSXLoadBalancerMemberStatsDto: NSXLoadBalancerMemberStatsDtoConstructor;

	interface NSXLoadBalancerMonitorDto
	{
		readonly expected: String;
		readonly extension: String;
		readonly interval: long;
		readonly maxRetries: long;
		readonly method: String;
		readonly monitorId: String;
		readonly name: String;
		readonly receive: String;
		readonly send: String;
		readonly timeout: long;
		readonly type: String;
		readonly url: String;

	}

	interface NSXLoadBalancerMonitorDtoConstructor {
		new(value?:any): NSXLoadBalancerMonitorDto;
		readonly prototype: NSXLoadBalancerMonitorDto;
	}

	declare const NSXLoadBalancerMonitorDto: NSXLoadBalancerMonitorDtoConstructor;

	interface NSXLoadBalancerOutputParameter
	{
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly poolId: String;
		readonly port: long;
		readonly protocol: String;
		readonly virtualServerId: String;

	}

	interface NSXLoadBalancerOutputParameterConstructor {
		new(value?:any): NSXLoadBalancerOutputParameter;
		readonly prototype: NSXLoadBalancerOutputParameter;
	}

	declare const NSXLoadBalancerOutputParameter: NSXLoadBalancerOutputParameterConstructor;

	interface NSXLoadBalancerOutputParameters
	{
		readonly loadBalancerOutputParameters: NSXLoadBalancerOutputParameter[];

	}

	interface NSXLoadBalancerOutputParametersConstructor {
		new(value?:any): NSXLoadBalancerOutputParameters;
		readonly prototype: NSXLoadBalancerOutputParameters;
	}

	declare const NSXLoadBalancerOutputParameters: NSXLoadBalancerOutputParametersConstructor;

	interface NSXLoadBalancerPersistenceDto
	{
		readonly cookieMode: String;
		readonly cookieName: String;
		readonly method: String;

	}

	interface NSXLoadBalancerPersistenceDtoConstructor {
		new(value?:any): NSXLoadBalancerPersistenceDto;
		readonly prototype: NSXLoadBalancerPersistenceDto;
	}

	declare const NSXLoadBalancerPersistenceDto: NSXLoadBalancerPersistenceDtoConstructor;

	interface NSXLoadBalancerPersistenceDtoV4
	{
		readonly cookieMode: String;
		readonly cookieName: String;
		readonly expire: String;
		readonly method: String;

	}

	interface NSXLoadBalancerPersistenceDtoV4Constructor {
		new(value?:any): NSXLoadBalancerPersistenceDtoV4;
		readonly prototype: NSXLoadBalancerPersistenceDtoV4;
	}

	declare const NSXLoadBalancerPersistenceDtoV4: NSXLoadBalancerPersistenceDtoV4Constructor;

	interface NSXLoadBalancerPool
	{
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly loadBalancerPoolMembers: NSXLoadBalancerPoolMembers;
		readonly loadBalancerPoolServicesProfiles: NSXLoadBalancerPoolServicesProfiles;
		readonly name: String;

	}

	interface NSXLoadBalancerPoolConstructor {
		new(value?:any): NSXLoadBalancerPool;
		readonly prototype: NSXLoadBalancerPool;
	}

	declare const NSXLoadBalancerPool: NSXLoadBalancerPoolConstructor;

	interface NSXLoadBalancerPoolDto
	{
		readonly description: String;
		readonly id: long;
		readonly members: java.util.List;
		readonly name: String;
		readonly servicePorts: java.util.List;

	}

	interface NSXLoadBalancerPoolDtoConstructor {
		new(value?:any): NSXLoadBalancerPoolDto;
		readonly prototype: NSXLoadBalancerPoolDto;
	}

	declare const NSXLoadBalancerPoolDto: NSXLoadBalancerPoolDtoConstructor;

	interface NSXLoadBalancerPoolDtoV4
	{
		readonly algorithm: String;
		readonly algorithmParameters: String;
		readonly description: String;
		readonly member: java.util.List;
		readonly monitorId: java.util.List;
		readonly name: String;
		readonly poolId: String;
		readonly transparent: boolean;

	}

	interface NSXLoadBalancerPoolDtoV4Constructor {
		new(value?:any): NSXLoadBalancerPoolDtoV4;
		readonly prototype: NSXLoadBalancerPoolDtoV4;
	}

	declare const NSXLoadBalancerPoolDtoV4: NSXLoadBalancerPoolDtoV4Constructor;

	interface NSXLoadBalancerPoolMember
	{
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly ipAddress: String;
		readonly weight: long;

	}

	interface NSXLoadBalancerPoolMemberConstructor {
		new(value?:any): NSXLoadBalancerPoolMember;
		readonly prototype: NSXLoadBalancerPoolMember;
	}

	declare const NSXLoadBalancerPoolMember: NSXLoadBalancerPoolMemberConstructor;

	interface NSXLoadBalancerPoolMembers
	{

	}

	interface NSXLoadBalancerPoolMembersConstructor {
		new(value?:any): NSXLoadBalancerPoolMembers;
		readonly prototype: NSXLoadBalancerPoolMembers;
	}

	declare const NSXLoadBalancerPoolMembers: NSXLoadBalancerPoolMembersConstructor;

	interface NSXLoadBalancerPoolServicesProfile
	{
		readonly algorithm: String;
		readonly healthcheckPort: long;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly interval: long;
		readonly mode: String;
		readonly port: long;
		readonly protocol: String;
		readonly threshold: long;
		readonly timeout: long;
		readonly unHealthThreshold: long;
		readonly url: String;

	}

	interface NSXLoadBalancerPoolServicesProfileConstructor {
		new(value?:any): NSXLoadBalancerPoolServicesProfile;
		readonly prototype: NSXLoadBalancerPoolServicesProfile;
	}

	declare const NSXLoadBalancerPoolServicesProfile: NSXLoadBalancerPoolServicesProfileConstructor;

	interface NSXLoadBalancerPoolServicesProfiles
	{
		readonly loadBalancerPoolServicesProfiles: NSXLoadBalancerPoolServicesProfile[];

	}

	interface NSXLoadBalancerPoolServicesProfilesConstructor {
		new(value?:any): NSXLoadBalancerPoolServicesProfiles;
		readonly prototype: NSXLoadBalancerPoolServicesProfiles;
	}

	declare const NSXLoadBalancerPoolServicesProfiles: NSXLoadBalancerPoolServicesProfilesConstructor;

	interface NSXLoadBalancerPoolStatsDto
	{
		readonly description: String;
		readonly id: long;
		readonly memberList: java.util.List;
		readonly name: String;
		readonly servicePortList: java.util.List;

	}

	interface NSXLoadBalancerPoolStatsDtoConstructor {
		new(value?:any): NSXLoadBalancerPoolStatsDto;
		readonly prototype: NSXLoadBalancerPoolStatsDto;
	}

	declare const NSXLoadBalancerPoolStatsDto: NSXLoadBalancerPoolStatsDtoConstructor;

	interface NSXLoadBalancerServerSslDto
	{
		readonly caCertificate: java.util.List;
		readonly ciphers: String;
		readonly crlCertificate: java.util.List;
		readonly serviceCertificate: java.util.List;

	}

	interface NSXLoadBalancerServerSslDtoConstructor {
		new(value?:any): NSXLoadBalancerServerSslDto;
		readonly prototype: NSXLoadBalancerServerSslDto;
	}

	declare const NSXLoadBalancerServerSslDto: NSXLoadBalancerServerSslDtoConstructor;

	interface NSXLoadBalancerServicePortDto
	{
		readonly algorithm: String;
		readonly healthcheckPort: long;
		readonly healthchecks: java.util.List;
		readonly port: long;
		readonly protocol: String;

	}

	interface NSXLoadBalancerServicePortDtoConstructor {
		new(value?:any): NSXLoadBalancerServicePortDto;
		readonly prototype: NSXLoadBalancerServicePortDto;
	}

	declare const NSXLoadBalancerServicePortDto: NSXLoadBalancerServicePortDtoConstructor;

	interface NSXLoadBalancerServicePortStatsDto
	{
		readonly bytesIn: java.math.BigInteger;
		readonly bytesOut: java.math.BigInteger;
		readonly curSessions: java.math.BigInteger;
		readonly httpReqRate: java.math.BigInteger;
		readonly httpReqRateMax: java.math.BigInteger;
		readonly httpReqTotal: java.math.BigInteger;
		readonly maxSessions: java.math.BigInteger;
		readonly protocol: String;
		readonly rate: java.math.BigInteger;
		readonly rateLimit: java.math.BigInteger;
		readonly rateMax: java.math.BigInteger;
		readonly status: String;
		readonly totalSessions: java.math.BigInteger;

	}

	interface NSXLoadBalancerServicePortStatsDtoConstructor {
		new(value?:any): NSXLoadBalancerServicePortStatsDto;
		readonly prototype: NSXLoadBalancerServicePortStatsDto;
	}

	declare const NSXLoadBalancerServicePortStatsDto: NSXLoadBalancerServicePortStatsDtoConstructor;

	interface NSXLoadBalancerServiceProfileDto
	{
		readonly persistence: NSXLoadBalancerPersistenceDto;
		readonly port: long;
		readonly protocol: String;

	}

	interface NSXLoadBalancerServiceProfileDtoConstructor {
		new(value?:any): NSXLoadBalancerServiceProfileDto;
		readonly prototype: NSXLoadBalancerServiceProfileDto;
	}

	declare const NSXLoadBalancerServiceProfileDto: NSXLoadBalancerServiceProfileDtoConstructor;

	interface NSXLoadBalancerServiceProfileStatsDto
	{
		readonly bytesIn: java.math.BigInteger;
		readonly bytesOut: java.math.BigInteger;
		readonly curSessions: java.math.BigInteger;
		readonly httpReqRate: java.math.BigInteger;
		readonly httpReqRateMax: java.math.BigInteger;
		readonly httpReqTotal: java.math.BigInteger;
		readonly maxSessions: java.math.BigInteger;
		readonly protocol: String;
		readonly rate: java.math.BigInteger;
		readonly rateLimit: java.math.BigInteger;
		readonly rateMax: java.math.BigInteger;
		readonly status: String;
		readonly totalSessions: java.math.BigInteger;

	}

	interface NSXLoadBalancerServiceProfileStatsDtoConstructor {
		new(value?:any): NSXLoadBalancerServiceProfileStatsDto;
		readonly prototype: NSXLoadBalancerServiceProfileStatsDto;
	}

	declare const NSXLoadBalancerServiceProfileStatsDto: NSXLoadBalancerServiceProfileStatsDtoConstructor;

	interface NSXLoadBalancerStatusAndStatsDto
	{
		readonly poolList: java.util.List;
		readonly serverStatus: String;
		readonly timeStamp: long;
		readonly virtualServerList: java.util.List;

	}

	interface NSXLoadBalancerStatusAndStatsDtoConstructor {
		new(value?:any): NSXLoadBalancerStatusAndStatsDto;
		readonly prototype: NSXLoadBalancerStatusAndStatsDto;
	}

	declare const NSXLoadBalancerStatusAndStatsDto: NSXLoadBalancerStatusAndStatsDtoConstructor;

	interface NSXLoadBalancerStatusAndStatsDtoV4
	{
		readonly pool: java.util.List;
		readonly serverStatus: String;
		readonly timeStamp: long;
		readonly virtualServer: java.util.List;

	}

	interface NSXLoadBalancerStatusAndStatsDtoV4Constructor {
		new(value?:any): NSXLoadBalancerStatusAndStatsDtoV4;
		readonly prototype: NSXLoadBalancerStatusAndStatsDtoV4;
	}

	declare const NSXLoadBalancerStatusAndStatsDtoV4: NSXLoadBalancerStatusAndStatsDtoV4Constructor;

	interface NSXLoadBalancerVendorProfileDto
	{
		readonly attributes: NSXAttributesDto;
		readonly profileAttributes: NSXAttributesDto;
		readonly vendorTables: java.util.List;
		readonly vendorTemplateId: long;
		readonly vendorTemplateName: String;
		readonly vendorTypedAttributes: NSXTypedAttributesDto;

	}

	interface NSXLoadBalancerVendorProfileDtoConstructor {
		new(value?:any): NSXLoadBalancerVendorProfileDto;
		readonly prototype: NSXLoadBalancerVendorProfileDto;
	}

	declare const NSXLoadBalancerVendorProfileDto: NSXLoadBalancerVendorProfileDtoConstructor;

	interface NSXLoadBalancerVirtualServer
	{
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly ipAddress: String;
		readonly name: String;
		readonly vnicIndex: long;

	}

	interface NSXLoadBalancerVirtualServerConstructor {
		new(value?:any): NSXLoadBalancerVirtualServer;
		readonly prototype: NSXLoadBalancerVirtualServer;
	}

	declare const NSXLoadBalancerVirtualServer: NSXLoadBalancerVirtualServerConstructor;

	interface NSXLoadBalancerVirtualServerDto
	{
		readonly description: String;
		readonly enabled: boolean;
		readonly id: long;
		readonly ipAddress: String;
		readonly logging: NSXLoggingDto;
		readonly name: String;
		readonly pool: NSXLoadBalancerPoolDto;
		readonly serviceProfileList: java.util.List;
		readonly vendorProfile: NSXLoadBalancerVendorProfileDto;

	}

	interface NSXLoadBalancerVirtualServerDtoConstructor {
		new(value?:any): NSXLoadBalancerVirtualServerDto;
		readonly prototype: NSXLoadBalancerVirtualServerDto;
	}

	declare const NSXLoadBalancerVirtualServerDto: NSXLoadBalancerVirtualServerDtoConstructor;

	interface NSXLoadBalancerVirtualServerDtoV4
	{
		readonly accelerationEnabled: boolean;
		readonly applicationProfileId: String;
		readonly applicationRuleId: java.util.List;
		readonly connectionLimit: long;
		readonly connectionRateLimit: long;
		readonly defaultPoolId: String;
		readonly description: String;
		readonly enabled: boolean;
		readonly enableServiceInsertion: boolean;
		readonly ipAddress: String;
		readonly ipPoolId: String;
		readonly ipPoolName: String;
		readonly name: String;
		readonly port: String;
		readonly protocol: String;
		readonly vendorProfile: NSXLoadBalancerVendorProfileDto;
		readonly virtualServerId: String;

	}

	interface NSXLoadBalancerVirtualServerDtoV4Constructor {
		new(value?:any): NSXLoadBalancerVirtualServerDtoV4;
		readonly prototype: NSXLoadBalancerVirtualServerDtoV4;
	}

	declare const NSXLoadBalancerVirtualServerDtoV4: NSXLoadBalancerVirtualServerDtoV4Constructor;

	interface NSXLoadBalancerVirtualServerStatsDto
	{
		readonly description: String;
		readonly id: long;
		readonly ipAddress: String;
		readonly name: String;
		readonly serviceProfileList: java.util.List;

	}

	interface NSXLoadBalancerVirtualServerStatsDtoConstructor {
		new(value?:any): NSXLoadBalancerVirtualServerStatsDto;
		readonly prototype: NSXLoadBalancerVirtualServerStatsDto;
	}

	declare const NSXLoadBalancerVirtualServerStatsDto: NSXLoadBalancerVirtualServerStatsDtoConstructor;

	interface NSXLocalAuthServerDto
	{
		readonly accountLockoutPolicy: NSXAccountLockoutPolicyDto;
		readonly authServerType: String;
		readonly enabled: boolean;
		readonly isSecondaryAuthServer: boolean;
		readonly objectId: String;
		readonly order: Integer;
		readonly passwordPolicy: NSXPasswordPolicyDto;
		readonly terminateSessionOnAuthFails: boolean;

	}

	interface NSXLocalAuthServerDtoConstructor {
		new(value?:any): NSXLocalAuthServerDto;
		readonly prototype: NSXLocalAuthServerDto;
	}

	declare const NSXLocalAuthServerDto: NSXLocalAuthServerDtoConstructor;

	interface NSXLoggingDto
	{
		readonly enable: boolean;
		readonly logLevel: String;

	}

	interface NSXLoggingDtoConstructor {
		new(value?:any): NSXLoggingDto;
		readonly prototype: NSXLoggingDto;
	}

	declare const NSXLoggingDto: NSXLoggingDtoConstructor;

	interface NSXLogicalRouterConfigDto
	{
		readonly displayName: String;
		readonly edgeAssistId: int;
		readonly edgeAssistName: String;
		readonly routingConfig: NSXRoutingConfig;
		readonly type: String;

	}

	interface NSXLogicalRouterConfigDtoConstructor {
		new(value?:any): NSXLogicalRouterConfigDto;
		readonly prototype: NSXLogicalRouterConfigDto;
	}

	declare const NSXLogicalRouterConfigDto: NSXLogicalRouterConfigDtoConstructor;

	interface NSXLogicalRouterPortConfigDto
	{
		readonly displayName: String;
		readonly ipAddresses: java.util.Set;
		readonly type: String;

	}

	interface NSXLogicalRouterPortConfigDtoConstructor {
		new(value?:any): NSXLogicalRouterPortConfigDto;
		readonly prototype: NSXLogicalRouterPortConfigDto;
	}

	declare const NSXLogicalRouterPortConfigDto: NSXLogicalRouterPortConfigDtoConstructor;

	interface NSXLogonLogoffScriptDto
	{
		readonly description: String;
		readonly enabled: boolean;
		readonly encodedData: String;
		readonly extension: String;
		readonly objectId: String;
		readonly order: Integer;
		readonly scriptData: byte[];
		readonly scriptFileId: String;
		readonly scriptFileUri: String;
		readonly type: String;

	}

	interface NSXLogonLogoffScriptDtoConstructor {
		new(value?:any): NSXLogonLogoffScriptDto;
		readonly prototype: NSXLogonLogoffScriptDto;
	}

	declare const NSXLogonLogoffScriptDto: NSXLogonLogoffScriptDtoConstructor;

	interface NSXLogonLogoffScritpsDto
	{
		readonly scripts: java.util.List;

	}

	interface NSXLogonLogoffScritpsDtoConstructor {
		new(value?:any): NSXLogonLogoffScritpsDto;
		readonly prototype: NSXLogonLogoffScritpsDto;
	}

	declare const NSXLogonLogoffScritpsDto: NSXLogonLogoffScritpsDtoConstructor;

	interface NSXLportController
	{

	}

	declare const NSXLportController: NSXLportController;

	interface NSXLqueueController
	{

	}

	declare const NSXLqueueController: NSXLqueueController;

	interface NSXLrouterController
	{

	}

	declare const NSXLrouterController: NSXLrouterController;

	interface NSXLrouterportController
	{

	}

	declare const NSXLrouterportController: NSXLrouterportController;

	interface NSXLswitchController
	{

	}

	declare const NSXLswitchController: NSXLswitchController;

	interface NSXLswitchportController
	{

	}

	declare const NSXLswitchportController: NSXLswitchportController;

	interface NSXMacAddressDto
	{
		readonly edgeVmHaIndex: int;
		readonly value: String;

	}

	interface NSXMacAddressDtoConstructor {
		new(value?:any): NSXMacAddressDto;
		readonly prototype: NSXMacAddressDto;
	}

	declare const NSXMacAddressDto: NSXMacAddressDtoConstructor;

	interface NSXMacLearningConfigDto
	{
		readonly enabled: boolean;

	}

	interface NSXMacLearningConfigDtoConstructor {
		new(value?:any): NSXMacLearningConfigDto;
		readonly prototype: NSXMacLearningConfigDto;
	}

	declare const NSXMacLearningConfigDto: NSXMacLearningConfigDtoConstructor;

	interface NSXMacListsGwemDto
	{
		readonly macList: java.util.Set;

	}

	interface NSXMacListsGwemDtoConstructor {
		new(value?:any): NSXMacListsGwemDto;
		readonly prototype: NSXMacListsGwemDto;
	}

	declare const NSXMacListsGwemDto: NSXMacListsGwemDtoConstructor;

	interface NSXMacNodeDto
	{
		readonly macAddress: String;

	}

	interface NSXMacNodeDtoConstructor {
		new(value?:any): NSXMacNodeDto;
		readonly prototype: NSXMacNodeDto;
	}

	declare const NSXMacNodeDto: NSXMacNodeDtoConstructor;

	interface NSXMacNodeSetDto
	{
		readonly macNodes: java.util.Set;

	}

	interface NSXMacNodeSetDtoConstructor {
		new(value?:any): NSXMacNodeSetDto;
		readonly prototype: NSXMacNodeSetDto;
	}

	declare const NSXMacNodeSetDto: NSXMacNodeSetDtoConstructor;

	interface NSXMACSetController
	{

		createV2(connection?: NSXConnection, macsetdto?: NSXMACSetDto, scopeId?: String): String;
		deleteV2(connection?: NSXConnection, force?: boolean, identifierString?: String): void;
		getV2(connection?: NSXConnection, identifierString?: String): NSXMACSetDto;
		listV2(connection?: NSXConnection, scopeId?: String): NSXMACSetDto[];
		updateV2(connection?: NSXConnection, identifierString?: String, macsetdto?: NSXMACSetDto): void;
	}

	declare const NSXMACSetController: NSXMACSetController;

	interface NSXMACSetDto
	{
		readonly clientHandle: String;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly inheritanceAllowed: boolean;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly type: NSXObjectTypeDto;
		readonly value: String;
		readonly vsmUuid: String;

	}

	interface NSXMACSetDtoConstructor {
		new(value?:any): NSXMACSetDto;
		readonly prototype: NSXMACSetDto;
	}

	declare const NSXMACSetDto: NSXMACSetDtoConstructor;

	interface NSXMdiController
	{

	}

	declare const NSXMdiController: NSXMdiController;

	interface NSXMemoryDto
	{
		readonly percentValue: int;

	}

	interface NSXMemoryDtoConstructor {
		new(value?:any): NSXMemoryDto;
		readonly prototype: NSXMemoryDto;
	}

	declare const NSXMemoryDto: NSXMemoryDtoConstructor;

	interface NSXMessageDto
	{
		readonly payload: String;
		readonly topic: String;

	}

	interface NSXMessageDtoConstructor {
		new(value?:any): NSXMessageDto;
		readonly prototype: NSXMessageDto;
	}

	declare const NSXMessageDto: NSXMessageDtoConstructor;

	interface NSXMessagingServerMonitorController
	{

		handleClientRestRequestDeleteV2(connection?: NSXConnection, input?: String): void;
		handleClientRestRequestGetV2(connection?: NSXConnection, input?: String): org.springframework.http.ResponseEntity;
		handleClientRestRequestPostV2(connection?: NSXConnection, input?: String, messagingservermonitordto?: NSXMessagingServerMonitorDto): void;
		handleClientRestRequestPutV2(connection?: NSXConnection, input?: String, messagingservermonitordto?: NSXMessagingServerMonitorDto): void;
	}

	declare const NSXMessagingServerMonitorController: NSXMessagingServerMonitorController;

	interface NSXMessagingServerMonitorDto
	{
		readonly data: String;

	}

	interface NSXMessagingServerMonitorDtoConstructor {
		new(value?:any): NSXMessagingServerMonitorDto;
		readonly prototype: NSXMessagingServerMonitorDto;
	}

	declare const NSXMessagingServerMonitorDto: NSXMessagingServerMonitorDtoConstructor;

	interface NSXMetaDto
	{
		readonly endTime: long;
		readonly interval: Integer;
		readonly startTime: long;
		readonly vnics: java.util.List;

	}

	interface NSXMetaDtoConstructor {
		new(value?:any): NSXMetaDto;
		readonly prototype: NSXMetaDto;
	}

	declare const NSXMetaDto: NSXMetaDtoConstructor;

	interface NSXMethodDto
	{
		readonly data: String;
		readonly name: String;

	}

	interface NSXMethodDtoConstructor {
		new(value?:any): NSXMethodDto;
		readonly prototype: NSXMethodDto;
	}

	declare const NSXMethodDto: NSXMethodDtoConstructor;

	interface NSXMgmtInterfaceDto
	{
		readonly addressGroups: NSXEdgeVnicAddressGroupsDto;
		readonly connectedToId: String;
		readonly connectedToName: String;
		readonly index: String;
		readonly label: String;
		readonly mtu: Integer;
		readonly name: String;

	}

	interface NSXMgmtInterfaceDtoConstructor {
		new(value?:any): NSXMgmtInterfaceDto;
		readonly prototype: NSXMgmtInterfaceDto;
	}

	declare const NSXMgmtInterfaceDto: NSXMgmtInterfaceDtoConstructor;

	interface NSXMonitor
	{
		readonly description: String;
		readonly expected: String;
		readonly extension: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly interval: String;
		readonly maxRetries: String;
		readonly method: String;
		readonly monitorId: String;
		readonly name: String;
		readonly objectId: String;
		readonly receive: String;
		readonly send: String;
		readonly timeout: String;
		readonly type: String;
		readonly url: String;

	}

	interface NSXMonitorConstructor {
		new(value?:any): NSXMonitor;
		readonly prototype: NSXMonitor;
	}

	declare const NSXMonitor: NSXMonitorConstructor;

	interface NSXMonitorInv
	{
		readonly displayName: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;

	}

	interface NSXMonitorInvConstructor {
		new(value?:any): NSXMonitorInv;
		readonly prototype: NSXMonitorInv;
	}

	declare const NSXMonitorInv: NSXMonitorInvConstructor;

	interface NSXMulticastRangeDto
	{
		readonly begin: String;
		readonly desc: String;
		readonly end: String;
		readonly id: int;
		readonly name: String;

	}

	interface NSXMulticastRangeDtoConstructor {
		new(value?:any): NSXMulticastRangeDto;
		readonly prototype: NSXMulticastRangeDto;
	}

	declare const NSXMulticastRangeDto: NSXMulticastRangeDtoConstructor;

	interface NSXMulticastRangesDto
	{
		readonly multicastRanges: java.util.List;

	}

	interface NSXMulticastRangesDtoConstructor {
		new(value?:any): NSXMulticastRangesDto;
		readonly prototype: NSXMulticastRangesDto;
	}

	declare const NSXMulticastRangesDto: NSXMulticastRangesDtoConstructor;

	interface NSXNamespaceDto
	{
		readonly clientHandle: String;
		readonly contextId: String;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly inheritanceAllowed: boolean;
		readonly name: String;
		readonly namespaceType: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly type: NSXObjectTypeDto;
		readonly vsmUuid: String;

	}

	interface NSXNamespaceDtoConstructor {
		new(value?:any): NSXNamespaceDto;
		readonly prototype: NSXNamespaceDto;
	}

	declare const NSXNamespaceDto: NSXNamespaceDtoConstructor;

	interface NSXNatConfigDto
	{
		readonly enabled: boolean;
		readonly rules: NSXNatRules;
		readonly template: String;
		readonly version: long;

	}

	interface NSXNatConfigDtoConstructor {
		new(value?:any): NSXNatConfigDto;
		readonly prototype: NSXNatConfigDto;
	}

	declare const NSXNatConfigDto: NSXNatConfigDtoConstructor;

	interface NSXNatController
	{

		addNatRuleAboveRuleV3(connection?: NSXConnection, id?: String, natruledto?: NSXNatRuleDto, aboveRuleId?: long): void;
		appendNatRulesToExistingListV3(connection?: NSXConnection, id?: String, natrules?: NSXNatRules): void;
		configureNatV3(connection?: NSXConnection, id?: String, natconfigdto?: NSXNatConfigDto): void;
		deleteNatConfigV3(connection?: NSXConnection, id?: String): void;
		deleteNatRuleV3(connection?: NSXConnection, id?: String, ruleId?: long): void;
		getNatConfigV3(connection?: NSXConnection, id?: String): NSXNatConfigDto;
		modifyNatRuleV3(connection?: NSXConnection, id?: String, ruleId?: long, natruledto?: NSXNatRuleDto): void;
	}

	declare const NSXNatController: NSXNatController;

	interface NSXNatManager
	{

		addNatRules(connection?: NSXConnection, edgeId?: String, natRules?: NSXNatRule[]): NSXNatRule[];
		applyNatConfiguration(connection?: NSXConnection, edge?: NSXEdge, natRules?: NSXNatRule[]): NSXNatRule[];
		deleteNatRules(connection?: NSXConnection, edgeId?: String, ruleIds?: long[]): void;
		getNatRules(connection?: NSXConnection, edge?: NSXEdge): NSXNatRule[];
	}

	declare const NSXNatManager: NSXNatManager;

	interface NSXNatRule
	{
		readonly action: String;
		readonly description: String;
		readonly dnatSourceAddress: String;
		readonly dnatSourcePort: String;
		readonly enabled: boolean;
		readonly icmpSubType: String;
		readonly loggingEnabled: boolean;
		readonly originalAddress: String;
		readonly originalPort: String;
		readonly protocol: String;
		readonly ruleId: String;
		readonly ruleTag: String;
		readonly ruleType: String;
		readonly snatDestinationAddress: String;
		readonly snatDestinationPort: String;
		readonly translatedAddress: String;
		readonly translatedPort: String;
		readonly vnicIndex: String;

	}

	interface NSXNatRuleConstructor {
		new(value?:any): NSXNatRule;
		readonly prototype: NSXNatRule;
	}

	declare const NSXNatRule: NSXNatRuleConstructor;

	interface NSXNatRuleDto
	{
		readonly action: String;
		readonly description: String;
		readonly enabled: boolean;
		readonly icmpType: String;
		readonly loggingEnabled: boolean;
		readonly originalAddress: String;
		readonly originalPort: String;
		readonly protocol: String;
		readonly ruleId: long;
		readonly ruleTag: long;
		readonly ruleType: String;
		readonly translatedAddress: String;
		readonly translatedPort: String;
		readonly vnic: String;

	}

	interface NSXNatRuleDtoConstructor {
		new(value?:any): NSXNatRuleDto;
		readonly prototype: NSXNatRuleDto;
	}

	declare const NSXNatRuleDto: NSXNatRuleDtoConstructor;

	interface NSXNatRules
	{
		readonly natRulesDtos: java.util.List;

	}

	interface NSXNatRulesConstructor {
		new(value?:any): NSXNatRules;
		readonly prototype: NSXNatRules;
	}

	declare const NSXNatRules: NSXNatRulesConstructor;

	interface NSXNatTrinityController
	{

		addNatRuleAboveRuleV4(connection?: NSXConnection, id?: String, natruledto?: NSXNatRuleDto, aboveRuleId?: long): void;
		appendNatRulesToExistingListV4(connection?: NSXConnection, id?: String, natrules?: NSXNatRules): void;
		configureNatV4(connection?: NSXConnection, id?: String, natconfigdto?: NSXNatConfigDto): void;
		deleteNatConfigV4(connection?: NSXConnection, id?: String): void;
		deleteNatRuleV4(connection?: NSXConnection, id?: String, ruleId?: long): void;
		getNatConfigV4(connection?: NSXConnection, id?: String): NSXNatConfigDto;
		modifyNatRuleV4(connection?: NSXConnection, id?: String, ruleId?: long, natruledto?: NSXNatRuleDto): void;
	}

	declare const NSXNatTrinityController: NSXNatTrinityController;

	interface NSXNetworkPrepController
	{

		addFeatureV2(connection?: NSXConnection, featureconfigdto?: NSXVsmNwfabricFeatureconfigDto): String;
		getChildStatusV2(connection?: NSXConnection, resource?: String): NSXResourceStatusListDto;
		getEligibleStatusV2(connection?: NSXConnection, resourceType?: String): NSXResourceStatusListDto;
		getFeaturesV2(connection?: NSXConnection): NSXFeatureInfoListDto;
		getStatusV2(connection?: NSXConnection, resource?: String[]): NSXResourceStatusListDto;
		modifyFeatureV2(connection?: NSXConnection, featureconfigdto?: NSXVsmNwfabricFeatureconfigDto): void;
		removeFeatureV2(connection?: NSXConnection, featureconfigdto?: NSXVsmNwfabricFeatureconfigDto): void;
		resolveIssuesV2(connection?: NSXConnection, resource?: String): void;
		syncFeatureV2(connection?: NSXConnection, featureconfigdto?: NSXVsmNwfabricFeatureconfigDto): String;
	}

	declare const NSXNetworkPrepController: NSXNetworkPrepController;

	interface NSXNetworkSpecDto
	{
		readonly description: String;
		readonly mtu: int;
		readonly networkBindingType: String;
		readonly networkName: String;
		readonly networkType: String;
		readonly numberOfPorts: int;
		readonly promiscuousMode: boolean;
		readonly tenantId: String;
		readonly vlanId: int;

	}

	interface NSXNetworkSpecDtoConstructor {
		new(value?:any): NSXNetworkSpecDto;
		readonly prototype: NSXNetworkSpecDto;
	}

	declare const NSXNetworkSpecDto: NSXNetworkSpecDtoConstructor;

	interface NSXNic
	{
		readonly connected: boolean;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly index: String;
		readonly name: String;
		readonly portgroupId: String;
		readonly type: String;

	}

	interface NSXNicConstructor {
		new(value?:any): NSXNic;
		readonly prototype: NSXNic;
	}

	declare const NSXNic: NSXNicConstructor;

	interface NSXNics
	{
		readonly nics: NSXNic[];

	}

	interface NSXNicsConstructor {
		new(value?:any): NSXNics;
		readonly prototype: NSXNics;
	}

	declare const NSXNics: NSXNicsConstructor;

	interface NSXNicsInv
	{
		readonly displayName: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;

	}

	interface NSXNicsInvConstructor {
		new(value?:any): NSXNicsInv;
		readonly prototype: NSXNicsInv;
	}

	declare const NSXNicsInv: NSXNicsInvConstructor;

	interface NSXNodeController
	{

	}

	declare const NSXNodeController: NSXNodeController;

	interface NSXNVPClusterDto
	{
		readonly nvpNodes: java.util.LinkedHashSet;

	}

	interface NSXNVPClusterDtoConstructor {
		new(value?:any): NSXNVPClusterDto;
		readonly prototype: NSXNVPClusterDto;
	}

	declare const NSXNVPClusterDto: NSXNVPClusterDtoConstructor;

	interface NSXNvpControllerException
	{

	}

	declare const NSXNvpControllerException: NSXNvpControllerException;

	interface NSXNvpControllerInfo
	{

	}

	declare const NSXNvpControllerInfo: NSXNvpControllerInfo;

	interface NSXNVPNodeDto
	{
		readonly address: String;
		readonly cert_thumbprint: String;
		readonly password: String;
		readonly role: String;
		readonly user: String;

	}

	interface NSXNVPNodeDtoConstructor {
		new(value?:any): NSXNVPNodeDto;
		readonly prototype: NSXNVPNodeDto;
	}

	declare const NSXNVPNodeDto: NSXNVPNodeDtoConstructor;

	interface NSXNVPRegistrationController
	{

		deleteNVPConfigV2(connection?: NSXConnection): void;
		getAllV2(connection?: NSXConnection): NSXNVPClusterDto;
		registerV2(connection?: NSXConnection, client_token?: String, nvpnodedto?: NSXNVPNodeDto): NSXNVPClusterDto;
	}

	declare const NSXNVPRegistrationController: NSXNVPRegistrationController;

	interface NSXObjectInfo
	{
		readonly id: String;
		readonly name: String;
		readonly type: String;
		readonly value: String;

	}

	interface NSXObjectInfoConstructor {
		new(value?:any): NSXObjectInfo;
		readonly prototype: NSXObjectInfo;
	}

	declare const NSXObjectInfo: NSXObjectInfoConstructor;

	interface NSXObjectInfoDto
	{
		readonly ipSetValue: String;
		readonly isGlobal: boolean;
		readonly isValid: boolean;
		readonly name: String;
		readonly type: String;
		readonly value: String;

	}

	interface NSXObjectInfoDtoConstructor {
		new(value?:any): NSXObjectInfoDto;
		readonly prototype: NSXObjectInfoDto;
	}

	declare const NSXObjectInfoDto: NSXObjectInfoDtoConstructor;

	interface NSXObjectInfoFlowFilterDto
	{
		readonly id: String;
		readonly name: String;
		readonly type: String;

	}

	interface NSXObjectInfoFlowFilterDtoConstructor {
		new(value?:any): NSXObjectInfoFlowFilterDto;
		readonly prototype: NSXObjectInfoFlowFilterDto;
	}

	declare const NSXObjectInfoFlowFilterDto: NSXObjectInfoFlowFilterDtoConstructor;

	interface NSXObjectLibraryPermissionDto
	{
		readonly applicationsPermissions: NSXInteractionPermissionsDto;
		readonly groupingObjectsPermissions: NSXInteractionPermissionsDto;
		readonly hasLicenseForApplicationObjects: boolean;
		readonly hasLicenseForGroupingObjects: boolean;

	}

	interface NSXObjectLibraryPermissionDtoConstructor {
		new(value?:any): NSXObjectLibraryPermissionDto;
		readonly prototype: NSXObjectLibraryPermissionDto;
	}

	declare const NSXObjectLibraryPermissionDto: NSXObjectLibraryPermissionDtoConstructor;

	interface NSXObjectReference
	{
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: long;
		readonly vsmUuid: String;

	}

	interface NSXObjectReferenceConstructor {
		new(value?:any): NSXObjectReference;
		readonly prototype: NSXObjectReference;
	}

	declare const NSXObjectReference: NSXObjectReferenceConstructor;

	interface NSXObjectTypeDto
	{
		readonly typeName: String;

	}

	interface NSXObjectTypeDtoConstructor {
		new(value?:any): NSXObjectTypeDto;
		readonly prototype: NSXObjectTypeDto;
	}

	declare const NSXObjectTypeDto: NSXObjectTypeDtoConstructor;

	interface NSXOspfAreaDto
	{
		readonly areaId: long;
		readonly authentication: NSXAuthenticationDto;
		readonly type: String;

	}

	interface NSXOspfAreaDtoConstructor {
		new(value?:any): NSXOspfAreaDto;
		readonly prototype: NSXOspfAreaDto;
	}

	declare const NSXOspfAreaDto: NSXOspfAreaDtoConstructor;

	interface NSXOspfAreasDto
	{
		readonly ospfAreas: java.util.List;

	}

	interface NSXOspfAreasDtoConstructor {
		new(value?:any): NSXOspfAreasDto;
		readonly prototype: NSXOspfAreasDto;
	}

	declare const NSXOspfAreasDto: NSXOspfAreasDtoConstructor;

	interface NSXOspfConfigDto
	{
		readonly defaultOriginate: boolean;
		readonly enabled: boolean;
		readonly forwardingAddress: String;
		readonly gracefulRestart: boolean;
		readonly ospfAreas: NSXOspfAreasDto;
		readonly ospfInterfaces: NSXOspfInterfacesDto;
		readonly protocolAddress: String;
		readonly redistribution: NSXRedistributionDto;

	}

	interface NSXOspfConfigDtoConstructor {
		new(value?:any): NSXOspfConfigDto;
		readonly prototype: NSXOspfConfigDto;
	}

	declare const NSXOspfConfigDto: NSXOspfConfigDtoConstructor;

	interface NSXOspfInterfaceDto
	{
		readonly areaId: long;
		readonly cost: Integer;
		readonly deadInterval: Integer;
		readonly helloInterval: Integer;
		readonly mtuIgnore: boolean;
		readonly priority: Integer;
		readonly vnic: Integer;

	}

	interface NSXOspfInterfaceDtoConstructor {
		new(value?:any): NSXOspfInterfaceDto;
		readonly prototype: NSXOspfInterfaceDto;
	}

	declare const NSXOspfInterfaceDto: NSXOspfInterfaceDtoConstructor;

	interface NSXOspfInterfacesDto
	{
		readonly ospfInterfaces: java.util.List;

	}

	interface NSXOspfInterfacesDtoConstructor {
		new(value?:any): NSXOspfInterfacesDto;
		readonly prototype: NSXOspfInterfacesDto;
	}

	declare const NSXOspfInterfacesDto: NSXOspfInterfacesDtoConstructor;

	interface NSXPagingInfo
	{
		readonly pageSize: int;
		readonly sortBy: String;
		readonly sortOrderAscending: boolean;
		readonly startIndex: int;
		readonly totalCount: long;

	}

	interface NSXPagingInfoConstructor {
		new(value?:any): NSXPagingInfo;
		readonly prototype: NSXPagingInfo;
	}

	declare const NSXPagingInfo: NSXPagingInfoConstructor;

	interface NSXPagingInfoDto
	{
		readonly action: String;
		readonly contextId: String;
		readonly endTime: long;
		readonly flowType: String;
		readonly pageSize: int;
		readonly startIndex: int;
		readonly startTime: long;
		readonly totalCount: long;

	}

	interface NSXPagingInfoDtoConstructor {
		new(value?:any): NSXPagingInfoDto;
		readonly prototype: NSXPagingInfoDto;
	}

	declare const NSXPagingInfoDto: NSXPagingInfoDtoConstructor;

	interface NSXPartnerTestController
	{

		createServiceInstanceV2(connection?: NSXConnection, serviceinstancedto?: NSXServiceInstanceDto): com.vmware.vshield.vsm.si.dto.ServiceInstanceResponse;
		createServiceProfileV2(connection?: NSXConnection, serviceprofiledto?: NSXServiceProfileDto): com.vmware.vshield.vsm.si.dto.ServiceProfileResponse;
		deleteServiceInstanceV2(connection?: NSXConnection, sinstId?: String): void;
		deleteServiceProfileV2(connection?: NSXConnection, spId?: String): void;
		updateContainerSetForServiceProfileV2(connection?: NSXConnection, spId?: String, statefulcontainersetdto?: NSXStatefulContainerSetDto): void;
		updateServiceInstanceV2(connection?: NSXConnection, sinstId?: String, serviceinstancedto?: NSXServiceInstanceDto): void;
		updateServiceProfileV2(connection?: NSXConnection, spId?: String, serviceprofiledto?: NSXServiceProfileDto): void;
	}

	declare const NSXPartnerTestController: NSXPartnerTestController;

	interface NSXPasswordAuthenticationDto
	{
		readonly authenticationTimeout: Integer;
		readonly preventMultipleLogon: boolean;
		readonly primaryAuthServers: NSXPrimaryAuthServersDto;
		readonly secondaryAuthServer: NSXSecondaryAuthServerDto;

	}

	interface NSXPasswordAuthenticationDtoConstructor {
		new(value?:any): NSXPasswordAuthenticationDto;
		readonly prototype: NSXPasswordAuthenticationDto;
	}

	declare const NSXPasswordAuthenticationDto: NSXPasswordAuthenticationDtoConstructor;

	interface NSXPasswordPolicyDto
	{
		readonly allowUserIdWithinPassword: boolean;
		readonly expiryNotification: Integer;
		readonly maxLength: Integer;
		readonly minAlphabets: Integer;
		readonly minDigits: Integer;
		readonly minLength: Integer;
		readonly minSpecialChar: Integer;
		readonly passwordLifeTime: Integer;

	}

	interface NSXPasswordPolicyDtoConstructor {
		new(value?:any): NSXPasswordPolicyDto;
		readonly prototype: NSXPasswordPolicyDto;
	}

	declare const NSXPasswordPolicyDto: NSXPasswordPolicyDtoConstructor;

	interface NSXPerformanceTestConfigDto
	{
		readonly key: String;
		readonly value: String;

	}

	interface NSXPerformanceTestConfigDtoConstructor {
		new(value?:any): NSXPerformanceTestConfigDto;
		readonly prototype: NSXPerformanceTestConfigDto;
	}

	declare const NSXPerformanceTestConfigDto: NSXPerformanceTestConfigDtoConstructor;

	interface NSXPerformanceTestController
	{

		setConfigKeyValueV2(connection?: NSXConnection, performancetestconfigdto?: NSXPerformanceTestConfigDto): void;
	}

	declare const NSXPerformanceTestController: NSXPerformanceTestController;

	interface NSXPermissionInfoDto
	{
		readonly accessPermission: NSXInteractionPermissionsDto;
		readonly dataPermission: NSXDataPermissionsDto;
		readonly isLicensed: boolean;

	}

	interface NSXPermissionInfoDtoConstructor {
		new(value?:any): NSXPermissionInfoDto;
		readonly prototype: NSXPermissionInfoDto;
	}

	declare const NSXPermissionInfoDto: NSXPermissionInfoDtoConstructor;

	interface NSXPermissionsDto
	{
		readonly configure: String;
		readonly read: String;
		readonly write: String;

	}

	interface NSXPermissionsDtoConstructor {
		new(value?:any): NSXPermissionsDto;
		readonly prototype: NSXPermissionsDto;
	}

	declare const NSXPermissionsDto: NSXPermissionsDtoConstructor;

	interface NSXPermissionsInfoDto
	{
		readonly accessPermission: NSXInteractionPermissionsDto;
		readonly dataPermission: NSXDataPermissionsDto;
		readonly isAppLicensed: boolean;

	}

	interface NSXPermissionsInfoDtoConstructor {
		new(value?:any): NSXPermissionsInfoDto;
		readonly prototype: NSXPermissionsInfoDto;
	}

	declare const NSXPermissionsInfoDto: NSXPermissionsInfoDtoConstructor;

	interface NSXPersistence
	{
		readonly cookieMode: String;
		readonly cookieName: String;
		readonly expiresIn: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly method: String;

	}

	interface NSXPersistenceConstructor {
		new(value?:any): NSXPersistence;
		readonly prototype: NSXPersistence;
	}

	declare const NSXPersistence: NSXPersistenceConstructor;

	interface NSXPktCapCLIController
	{

		deleteRequestV4(connection?: NSXConnection, sessionId?: String): void;
		getHelpRequestV4(connection?: NSXConnection, hostId?: String): NSXPktCapQueryReplyDto;
		queryAllRequestsV4(connection?: NSXConnection): NSXPktCapSessionsDto;
		queryRequestV4(connection?: NSXConnection, sessionId?: String): NSXPktCapSessionDto;
		startRequestV4(connection?: NSXConnection, pktcaprequestdto?: NSXPktCapRequestDto): NSXPktCapSessionDto;
		stopRequestV4(connection?: NSXConnection, sessionId?: String, pktcapsessiondto?: NSXPktCapSessionDto): void;
	}

	declare const NSXPktCapCLIController: NSXPktCapCLIController;

	interface NSXPktCapQueryReplyDto
	{
		readonly errMessage: String;
		readonly helpInfo: String;

	}

	interface NSXPktCapQueryReplyDtoConstructor {
		new(value?:any): NSXPktCapQueryReplyDto;
		readonly prototype: NSXPktCapQueryReplyDto;
	}

	declare const NSXPktCapQueryReplyDto: NSXPktCapQueryReplyDtoConstructor;

	interface NSXPktCapRequestDto
	{
		readonly cappoint: String;
		readonly dir: String;
		readonly hostid: String;
		readonly options: String;
		readonly vmknic: String;
		readonly vmnic: String;
		readonly vnic: String;

	}

	interface NSXPktCapRequestDtoConstructor {
		new(value?:any): NSXPktCapRequestDto;
		readonly prototype: NSXPktCapRequestDto;
	}

	declare const NSXPktCapRequestDto: NSXPktCapRequestDtoConstructor;

	interface NSXPktCapSessionDto
	{
		readonly fileDirectory: String;
		readonly filename: String;
		readonly message: String;
		readonly request: NSXPktCapRequestDto;
		readonly sessionId: String;
		readonly status: String;

	}

	interface NSXPktCapSessionDtoConstructor {
		new(value?:any): NSXPktCapSessionDto;
		readonly prototype: NSXPktCapSessionDto;
	}

	declare const NSXPktCapSessionDto: NSXPktCapSessionDtoConstructor;

	interface NSXPktCapSessionsDto
	{
		readonly errorSession: int;
		readonly finishedSession: int;
		readonly sessions: java.util.List;
		readonly startedSession: int;
		readonly stoppedSession: int;

	}

	interface NSXPktCapSessionsDtoConstructor {
		new(value?:any): NSXPktCapSessionsDto;
		readonly prototype: NSXPktCapSessionsDto;
	}

	declare const NSXPktCapSessionsDto: NSXPktCapSessionsDtoConstructor;

	interface NSXPool
	{
		readonly algorithm: String;
		readonly algorithmParameters: String;
		readonly description: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly listMonitors: NSXMonitor[];
		readonly members: NSXPoolMember[];
		readonly name: String;
		readonly objectId: String;
		readonly poolId: String;
		readonly servicePorts: NSXServicePort[];
		readonly transparent: boolean;

	}

	interface NSXPoolConstructor {
		new(value?:any): NSXPool;
		readonly prototype: NSXPool;
	}

	declare const NSXPool: NSXPoolConstructor;

	interface NSXPoolInv
	{
		readonly displayName: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;

	}

	interface NSXPoolInvConstructor {
		new(value?:any): NSXPoolInv;
		readonly prototype: NSXPoolInv;
	}

	declare const NSXPoolInv: NSXPoolInvConstructor;

	interface NSXPoolMember
	{
		readonly displayName: String;
		readonly groupingObjectId: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly ipAddress: String;
		readonly maxConn: String;
		readonly memberId: String;
		readonly minConn: String;
		readonly monitorPort: String;
		readonly name: String;
		readonly objectId: String;
		readonly port: String;
		readonly servicePortList: NSXServicePort[];
		readonly weight: String;

	}

	interface NSXPoolMemberConstructor {
		new(value?:any): NSXPoolMember;
		readonly prototype: NSXPoolMember;
	}

	declare const NSXPoolMember: NSXPoolMemberConstructor;

	interface NSXPortalCustomizationDto
	{
		readonly clientIconsDto: NSXClientIconsDto;
		readonly layoutConfigurationDto: NSXLayoutConfigurationDto;

	}

	interface NSXPortalCustomizationDtoConstructor {
		new(value?:any): NSXPortalCustomizationDto;
		readonly prototype: NSXPortalCustomizationDto;
	}

	declare const NSXPortalCustomizationDto: NSXPortalCustomizationDtoConstructor;

	interface NSXPrimaryAuthServersDto
	{
		readonly authServers: java.util.List;

	}

	interface NSXPrimaryAuthServersDtoConstructor {
		new(value?:any): NSXPrimaryAuthServersDto;
		readonly prototype: NSXPrimaryAuthServersDto;
	}

	declare const NSXPrimaryAuthServersDto: NSXPrimaryAuthServersDtoConstructor;

	interface NSXPrincipalDto
	{
		readonly attributes: java.util.List;

	}

	interface NSXPrincipalDtoConstructor {
		new(value?:any): NSXPrincipalDto;
		readonly prototype: NSXPrincipalDto;
	}

	declare const NSXPrincipalDto: NSXPrincipalDtoConstructor;

	interface NSXPrivateNetworkController
	{

		addPrivateNetworkV3(connection?: NSXConnection, privatenetworkdto?: NSXPrivateNetworkDto, edgeId?: String): void;
		applyPrivateNetworksV3(connection?: NSXConnection, privatenetworksdto?: NSXPrivateNetworksDto, edgeId?: String): void;
		deleteAllPrivateNetworksV3(connection?: NSXConnection, edgeId?: String): void;
		getAllPrivateNetworksV3(connection?: NSXConnection, edgeId?: String): NSXPrivateNetworksDto;
		getPrivateNetworkV3(connection?: NSXConnection, edgeId?: String, id?: String): NSXPrivateNetworkDto;
		modifyPrivateNetworkV3(connection?: NSXConnection, edgeId?: String, id?: String, privatenetworkdto?: NSXPrivateNetworkDto): void;
		removePrivateNetworkV3(connection?: NSXConnection, edgeId?: String, id?: String): void;
	}

	declare const NSXPrivateNetworkController: NSXPrivateNetworkController;

	interface NSXPrivateNetworkDto
	{
		readonly description: String;
		readonly enabled: boolean;
		readonly network: String;
		readonly objectId: String;
		readonly order: Integer;
		readonly sendOverTunnel: NSXSendOverTunnel;

	}

	interface NSXPrivateNetworkDtoConstructor {
		new(value?:any): NSXPrivateNetworkDto;
		readonly prototype: NSXPrivateNetworkDto;
	}

	declare const NSXPrivateNetworkDto: NSXPrivateNetworkDtoConstructor;

	interface NSXPrivateNetworksDto
	{
		readonly privateNetworks: java.util.List;

	}

	interface NSXPrivateNetworksDtoConstructor {
		new(value?:any): NSXPrivateNetworksDto;
		readonly prototype: NSXPrivateNetworksDto;
	}

	declare const NSXPrivateNetworksDto: NSXPrivateNetworksDtoConstructor;

	interface NSXPrivateNetworkTrinityController
	{

		addPrivateNetworkV4(connection?: NSXConnection, privatenetworkdto?: NSXPrivateNetworkDto, edgeId?: String): void;
		applyPrivateNetworksV4(connection?: NSXConnection, privatenetworksdto?: NSXPrivateNetworksDto, edgeId?: String): void;
		deleteAllPrivateNetworksV4(connection?: NSXConnection, edgeId?: String): void;
		getAllPrivateNetworksV4(connection?: NSXConnection, edgeId?: String): NSXPrivateNetworksDto;
		getPrivateNetworkV4(connection?: NSXConnection, edgeId?: String, id?: String): NSXPrivateNetworkDto;
		modifyPrivateNetworkV4(connection?: NSXConnection, edgeId?: String, id?: String, privatenetworkdto?: NSXPrivateNetworkDto): void;
		removePrivateNetworkV4(connection?: NSXConnection, edgeId?: String, id?: String): void;
	}

	declare const NSXPrivateNetworkTrinityController: NSXPrivateNetworkTrinityController;

	interface NSXProcessStats
	{
		readonly cputime: long;
		readonly mem_resident: long;
		readonly mem_used: long;
		readonly monitor_uptime: long;
		readonly process_name: String;
		readonly restarts: long;
		readonly uptime: long;

	}

	interface NSXProcessStatsConstructor {
		new(value?:any): NSXProcessStats;
		readonly prototype: NSXProcessStats;
	}

	declare const NSXProcessStats: NSXProcessStatsConstructor;

	interface NSXProtocolDto
	{
		readonly allowDestinationPorts: boolean;
		readonly allowSourcePorts: boolean;
		readonly name: String;
		readonly subProtocols: java.util.List;
		readonly value: int;

	}

	interface NSXProtocolDtoConstructor {
		new(value?:any): NSXProtocolDto;
		readonly prototype: NSXProtocolDto;
	}

	declare const NSXProtocolDto: NSXProtocolDtoConstructor;

	interface NSXProtocolGwemDto
	{
		readonly destinationPort: String;
		readonly protocol: int;
		readonly sourcePort: String;
		readonly subProtocol: Integer;

	}

	interface NSXProtocolGwemDtoConstructor {
		new(value?:any): NSXProtocolGwemDto;
		readonly prototype: NSXProtocolGwemDto;
	}

	declare const NSXProtocolGwemDto: NSXProtocolGwemDtoConstructor;

	interface NSXProtocolListDto
	{
		readonly applicableOnFirewallLayer: String;
		readonly protocol: java.util.List;
		readonly protocolsType: String;
		readonly subProtocolOfTypeName: String;
		readonly subProtocolOfTypeValue: Integer;

	}

	interface NSXProtocolListDtoConstructor {
		new(value?:any): NSXProtocolListDto;
		readonly prototype: NSXProtocolListDto;
	}

	declare const NSXProtocolListDto: NSXProtocolListDtoConstructor;

	interface NSXPublisherController
	{

		publishMessageV2(connection?: NSXConnection, messagedto?: NSXMessageDto, useBson?: boolean): void;
	}

	declare const NSXPublisherController: NSXPublisherController;

	interface NSXQueryDaemonDto
	{
		readonly enabled: boolean;
		readonly port: String;

	}

	interface NSXQueryDaemonDtoConstructor {
		new(value?:any): NSXQueryDaemonDto;
		readonly prototype: NSXQueryDaemonDto;
	}

	declare const NSXQueryDaemonDto: NSXQueryDaemonDtoConstructor;

	interface NSXQueryServiceController
	{

		getV2(connection?: NSXConnection, filterdto?: NSXFilterDto): NSXDataPage;
	}

	declare const NSXQueryServiceController: NSXQueryServiceController;

	interface NSXRadiusAuthServerDto
	{
		readonly authServerType: String;
		readonly enabled: boolean;
		readonly ip: String;
		readonly isSecondaryAuthServer: boolean;
		readonly nasIp: String;
		readonly objectId: String;
		readonly order: Integer;
		readonly port: Integer;
		readonly retryCount: Integer;
		readonly secret: String;
		readonly terminateSessionOnAuthFails: boolean;
		readonly timeOut: Integer;

	}

	interface NSXRadiusAuthServerDtoConstructor {
		new(value?:any): NSXRadiusAuthServerDto;
		readonly prototype: NSXRadiusAuthServerDto;
	}

	declare const NSXRadiusAuthServerDto: NSXRadiusAuthServerDtoConstructor;

	interface NSXRangeDto
	{
		readonly begin: long;
		readonly desc: String;
		readonly end: long;
		readonly id: int;
		readonly name: String;
		readonly resType: int;

	}

	interface NSXRangeDtoConstructor {
		new(value?:any): NSXRangeDto;
		readonly prototype: NSXRangeDto;
	}

	declare const NSXRangeDto: NSXRangeDtoConstructor;

	interface NSXRealmInfoController
	{

	}

	declare const NSXRealmInfoController: NSXRealmInfoController;

	interface NSXReconfigureVMTaskResultDto
	{
		readonly jobId: String;
		readonly taskMap: java.util.Map;

	}

	interface NSXReconfigureVMTaskResultDtoConstructor {
		new(value?:any): NSXReconfigureVMTaskResultDto;
		readonly prototype: NSXReconfigureVMTaskResultDto;
	}

	declare const NSXReconfigureVMTaskResultDto: NSXReconfigureVMTaskResultDtoConstructor;

	interface NSXRecordValuesDto
	{
		readonly value: java.util.List;

	}

	interface NSXRecordValuesDtoConstructor {
		new(value?:any): NSXRecordValuesDto;
		readonly prototype: NSXRecordValuesDto;
	}

	declare const NSXRecordValuesDto: NSXRecordValuesDtoConstructor;

	interface NSXRedistributionDto
	{
		readonly enabled: boolean;
		readonly rules: NSXRedistributionRulesDto;

	}

	interface NSXRedistributionDtoConstructor {
		new(value?:any): NSXRedistributionDto;
		readonly prototype: NSXRedistributionDto;
	}

	declare const NSXRedistributionDto: NSXRedistributionDtoConstructor;

	interface NSXRedistributionRuleDto
	{
		readonly action: String;
		readonly from: NSXRedistributionRuleFromDto;
		readonly id: long;
		readonly prefixName: String;

	}

	interface NSXRedistributionRuleDtoConstructor {
		new(value?:any): NSXRedistributionRuleDto;
		readonly prototype: NSXRedistributionRuleDto;
	}

	declare const NSXRedistributionRuleDto: NSXRedistributionRuleDtoConstructor;

	interface NSXRedistributionRuleFromDto
	{
		readonly bgp: boolean;
		readonly connected: boolean;
		readonly fromStatic: boolean;
		readonly isis: boolean;
		readonly ospf: boolean;

	}

	interface NSXRedistributionRuleFromDtoConstructor {
		new(value?:any): NSXRedistributionRuleFromDto;
		readonly prototype: NSXRedistributionRuleFromDto;
	}

	declare const NSXRedistributionRuleFromDto: NSXRedistributionRuleFromDtoConstructor;

	interface NSXRedistributionRulesDto
	{
		readonly rules: java.util.List;

	}

	interface NSXRedistributionRulesDtoConstructor {
		new(value?:any): NSXRedistributionRulesDto;
		readonly prototype: NSXRedistributionRulesDto;
	}

	declare const NSXRedistributionRulesDto: NSXRedistributionRulesDtoConstructor;

	interface NSXRelayAgentDto
	{
		readonly giAddress: String;
		readonly relayServer: NSXRelayServerDto;
		readonly vnicIndex: Integer;

	}

	interface NSXRelayAgentDtoConstructor {
		new(value?:any): NSXRelayAgentDto;
		readonly prototype: NSXRelayAgentDto;
	}

	declare const NSXRelayAgentDto: NSXRelayAgentDtoConstructor;

	interface NSXRelayAgentsDto
	{
		readonly relayAgents: java.util.List;

	}

	interface NSXRelayAgentsDtoConstructor {
		new(value?:any): NSXRelayAgentsDto;
		readonly prototype: NSXRelayAgentsDto;
	}

	declare const NSXRelayAgentsDto: NSXRelayAgentsDtoConstructor;

	interface NSXRelayAgentsUIDto
	{
		readonly relayAgents: java.util.List;

	}

	interface NSXRelayAgentsUIDtoConstructor {
		new(value?:any): NSXRelayAgentsUIDto;
		readonly prototype: NSXRelayAgentsUIDto;
	}

	declare const NSXRelayAgentsUIDto: NSXRelayAgentsUIDtoConstructor;

	interface NSXRelayAgentUIDto
	{
		readonly giAddress: String;
		readonly interfaceDto: NSXInterfaceDto;
		readonly relayServer: NSXRelayServerUIDto;
		readonly vnicInfoDto: NSXVnicDto;

	}

	interface NSXRelayAgentUIDtoConstructor {
		new(value?:any): NSXRelayAgentUIDto;
		readonly prototype: NSXRelayAgentUIDto;
	}

	declare const NSXRelayAgentUIDto: NSXRelayAgentUIDtoConstructor;

	interface NSXRelayServerDto
	{
		readonly fqdns: java.util.List;
		readonly groupingObjectIds: java.util.List;
		readonly ipAddresses: java.util.List;

	}

	interface NSXRelayServerDtoConstructor {
		new(value?:any): NSXRelayServerDto;
		readonly prototype: NSXRelayServerDto;
	}

	declare const NSXRelayServerDto: NSXRelayServerDtoConstructor;

	interface NSXRelayServerUIDto
	{
		readonly fqdns: java.util.List;
		readonly groupingObjectIds: java.util.List;
		readonly ipAddresses: java.util.List;

	}

	interface NSXRelayServerUIDtoConstructor {
		new(value?:any): NSXRelayServerUIDto;
		readonly prototype: NSXRelayServerUIDto;
	}

	declare const NSXRelayServerUIDto: NSXRelayServerUIDtoConstructor;

	interface NSXRequestQueryParameters
	{

	}

	interface NSXRequestQueryParametersConstructor {
		new(value?:any): NSXRequestQueryParameters;
		readonly prototype: NSXRequestQueryParameters;
	}

	declare const NSXRequestQueryParameters: NSXRequestQueryParametersConstructor;

	interface NSXRequestStatsDto
	{
		readonly queries: long;
		readonly total: long;

	}

	interface NSXRequestStatsDtoConstructor {
		new(value?:any): NSXRequestStatsDto;
		readonly prototype: NSXRequestStatsDto;
	}

	declare const NSXRequestStatsDto: NSXRequestStatsDtoConstructor;

	interface NSXReservationInfoDto
	{
		readonly limit: long;
		readonly reservation: long;
		readonly shares: Integer;

	}

	interface NSXReservationInfoDtoConstructor {
		new(value?:any): NSXReservationInfoDto;
		readonly prototype: NSXReservationInfoDto;
	}

	declare const NSXReservationInfoDto: NSXReservationInfoDtoConstructor;

	interface NSXResolveObjectDto
	{
		readonly replaceAll: boolean;
		readonly ruleId: long;
		readonly sourceObject: NSXBasicDomainObjectInfo;
		readonly targetObject: NSXBasicDomainObjectInfo;

	}

	interface NSXResolveObjectDtoConstructor {
		new(value?:any): NSXResolveObjectDto;
		readonly prototype: NSXResolveObjectDto;
	}

	declare const NSXResolveObjectDto: NSXResolveObjectDtoConstructor;

	interface NSXResource
	{
		readonly description: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: String;

	}

	interface NSXResourceConstructor {
		new(value?:any): NSXResource;
		readonly prototype: NSXResource;
	}

	declare const NSXResource: NSXResourceConstructor;

	interface NSXResourceConfigDto
	{
		readonly configSpec: Object;
		readonly resourceId: String;

	}

	interface NSXResourceConfigDtoConstructor {
		new(value?:any): NSXResourceConfigDto;
		readonly prototype: NSXResourceConfigDto;
	}

	declare const NSXResourceConfigDto: NSXResourceConfigDtoConstructor;

	interface NSXResourceDto
	{
		readonly clientHandle: String;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly resourceId: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly type: NSXObjectTypeDto;
		readonly vsmUuid: String;

	}

	interface NSXResourceDtoConstructor {
		new(value?:any): NSXResourceDto;
		readonly prototype: NSXResourceDto;
	}

	declare const NSXResourceDto: NSXResourceDtoConstructor;

	interface NSXResourceIdListDto
	{
		readonly resourceIds: java.util.List;

	}

	interface NSXResourceIdListDtoConstructor {
		new(value?:any): NSXResourceIdListDto;
		readonly prototype: NSXResourceIdListDto;
	}

	declare const NSXResourceIdListDto: NSXResourceIdListDtoConstructor;

	interface NSXResourceListDto
	{
		readonly resources: java.util.Set;

	}

	interface NSXResourceListDtoConstructor {
		new(value?:any): NSXResourceListDto;
		readonly prototype: NSXResourceListDto;
	}

	declare const NSXResourceListDto: NSXResourceListDtoConstructor;

	interface NSXResourceStats
	{
		readonly active_count: long;
		readonly error_state_count: long;
		readonly registered_count: long;

	}

	interface NSXResourceStatsConstructor {
		new(value?:any): NSXResourceStats;
		readonly prototype: NSXResourceStats;
	}

	declare const NSXResourceStats: NSXResourceStatsConstructor;

	interface NSXResourceStatusDto
	{
		readonly childResource: NSXResourceStatusListDto;
		readonly featureStatuses: java.util.List;
		readonly resource: NSXBasicDomainObjectInfo;

	}

	interface NSXResourceStatusDtoConstructor {
		new(value?:any): NSXResourceStatusDto;
		readonly prototype: NSXResourceStatusDto;
	}

	declare const NSXResourceStatusDto: NSXResourceStatusDtoConstructor;

	interface NSXResourceStatusListDto
	{
		readonly statuses: java.util.List;

	}

	interface NSXResourceStatusListDtoConstructor {
		new(value?:any): NSXResourceStatusListDto;
		readonly prototype: NSXResourceStatusListDto;
	}

	declare const NSXResourceStatusListDto: NSXResourceStatusListDtoConstructor;

	interface NSXResourceTypeDto
	{
		readonly value: String;

	}

	interface NSXResourceTypeDtoConstructor {
		new(value?:any): NSXResourceTypeDto;
		readonly prototype: NSXResourceTypeDto;
	}

	declare const NSXResourceTypeDto: NSXResourceTypeDtoConstructor;

	interface NSXResponseStatsDto
	{
		readonly formErr: long;
		readonly nxDomain: long;
		readonly nxrrset: long;
		readonly others: long;
		readonly serverFail: long;
		readonly success: long;
		readonly total: long;

	}

	interface NSXResponseStatsDtoConstructor {
		new(value?:any): NSXResponseStatsDto;
		readonly prototype: NSXResponseStatsDto;
	}

	declare const NSXResponseStatsDto: NSXResponseStatsDtoConstructor;

	interface NSXRestVersionController
	{

	}

	declare const NSXRestVersionController: NSXRestVersionController;

	interface NSXRoutingConfig
	{
		readonly type: String;

	}

	interface NSXRoutingConfigConstructor {
		new(value?:any): NSXRoutingConfig;
		readonly prototype: NSXRoutingConfig;
	}

	declare const NSXRoutingConfig: NSXRoutingConfigConstructor;

	interface NSXRoutingConfigDto
	{
		readonly bgp: NSXBgpConfigDto;
		readonly enabled: boolean;
		readonly isis: NSXISISConfigDto;
		readonly ospf: NSXOspfConfigDto;
		readonly routingGlobalConfig: NSXEdgeRoutingTrinityGlobalconfigDto;
		readonly staticRouting: NSXStaticRoutingConfigTrinityDto;
		readonly template: String;
		readonly version: long;

	}

	interface NSXRoutingConfigDtoConstructor {
		new(value?:any): NSXRoutingConfigDto;
		readonly prototype: NSXRoutingConfigDto;
	}

	declare const NSXRoutingConfigDto: NSXRoutingConfigDtoConstructor;

	interface NSXRoutingController
	{

		configureBgpV4(connection?: NSXConnection, id?: String, bgpconfigdto?: NSXBgpConfigDto): void;
		configureGlobalRoutingV4(connection?: NSXConnection, id?: String, globalconfigdto?: NSXEdgeRoutingTrinityGlobalconfigDto): void;
		configureIsisV4(connection?: NSXConnection, id?: String, isisconfigdto?: NSXISISConfigDto): void;
		configureOspfV4(connection?: NSXConnection, id?: String, ospfconfigdto?: NSXOspfConfigDto): void;
		configureRoutingV4(connection?: NSXConnection, id?: String, routingconfigdto?: NSXRoutingConfigDto): void;
		configureStaticRoutingV4(connection?: NSXConnection, id?: String, staticroutingconfigtrinitydto?: NSXStaticRoutingConfigTrinityDto): void;
		deleteBgpConfigV4(connection?: NSXConnection, id?: String): void;
		deleteIsisConfigV4(connection?: NSXConnection, id?: String): void;
		deleteOspfConfigV4(connection?: NSXConnection, id?: String): void;
		deleteRoutingConfigV4(connection?: NSXConnection, id?: String): void;
		deleteStaticRoutingConfigV4(connection?: NSXConnection, id?: String): void;
		getBgpConfigV4(connection?: NSXConnection, id?: String): NSXBgpConfigDto;
		getIsisConfigV4(connection?: NSXConnection, id?: String): NSXISISConfigDto;
		getOspfConfigV4(connection?: NSXConnection, id?: String): NSXOspfConfigDto;
		getRoutingConfigV4(connection?: NSXConnection, id?: String): NSXRoutingConfigDto;
		getRoutingGlobalConfigV4(connection?: NSXConnection, id?: String): NSXEdgeRoutingTrinityGlobalconfigDto;
		getStaticRoutingV4(connection?: NSXConnection, id?: String): NSXStaticRoutingConfigTrinityDto;
	}

	declare const NSXRoutingController: NSXRoutingController;

	interface NSXRsaAuthServerDto
	{
		readonly authServerType: String;
		readonly configFile: byte[];
		readonly configFileData: String;
		readonly configFileName: String;
		readonly enabled: boolean;
		readonly isSecondaryAuthServer: boolean;
		readonly nodeSecret: byte[];
		readonly nodeSecretData: String;
		readonly nodeSecretFileName: String;
		readonly objectId: String;
		readonly order: Integer;
		readonly password: String;
		readonly sourceIp: String;
		readonly terminateSessionOnAuthFails: boolean;
		readonly timeOut: Integer;

	}

	interface NSXRsaAuthServerDtoConstructor {
		new(value?:any): NSXRsaAuthServerDto;
		readonly prototype: NSXRsaAuthServerDto;
	}

	declare const NSXRsaAuthServerDto: NSXRsaAuthServerDtoConstructor;

	interface NSXRuleDto
	{
		readonly attributes: java.util.List;
		readonly id: long;
		readonly revision: long;

	}

	interface NSXRuleDtoConstructor {
		new(value?:any): NSXRuleDto;
		readonly prototype: NSXRuleDto;
	}

	declare const NSXRuleDto: NSXRuleDtoConstructor;

	interface NSXRuleFlowStatsDto
	{
		readonly bytes: long;
		readonly packets: long;
		readonly ruleId: long;

	}

	interface NSXRuleFlowStatsDtoConstructor {
		new(value?:any): NSXRuleFlowStatsDto;
		readonly prototype: NSXRuleFlowStatsDto;
	}

	declare const NSXRuleFlowStatsDto: NSXRuleFlowStatsDtoConstructor;

	interface NSXRuleSetDto
	{
		readonly rules: java.util.Collection;

	}

	interface NSXRuleSetDtoConstructor {
		new(value?:any): NSXRuleSetDto;
		readonly prototype: NSXRuleSetDto;
	}

	declare const NSXRuleSetDto: NSXRuleSetDtoConstructor;

	interface NSXSamlTokenController
	{

		generateSamlTokenV2(connection?: NSXConnection, action?: String, username?: String, password?: String, isHoKToken?: boolean, isDelegable?: boolean, isRenewable?: boolean, delegateToUser?: String, delegateToDomain?: String, lifetime?: long): String;
	}

	declare const NSXSamlTokenController: NSXSamlTokenController;

	interface NSXScopeInfoDto
	{
		readonly id: String;
		readonly name: String;
		readonly objectTypeName: String;

	}

	interface NSXScopeInfoDtoConstructor {
		new(value?:any): NSXScopeInfoDto;
		readonly prototype: NSXScopeInfoDto;
	}

	declare const NSXScopeInfoDto: NSXScopeInfoDtoConstructor;

	interface NSXScriptMgmtController
	{

		addLogonLogoffScriptV3(connection?: NSXConnection, logonlogoffscriptdto?: NSXLogonLogoffScriptDto, edgeId?: String): void;
		applyLogonLogoffScriptsV3(connection?: NSXConnection, logonlogoffscritpsdto?: NSXLogonLogoffScritpsDto, edgeId?: String): void;
		deleteAllLogonLogoffScriptsV3(connection?: NSXConnection, edgeId?: String): void;
		deleteLogonLogoffScriptV3(connection?: NSXConnection, edgeId?: String, id?: String): void;
		deleteUnusedLogonLogoffScriptFilesV3(connection?: NSXConnection, edgeId?: String): void;
		getAllLogonLogoffScriptsV3(connection?: NSXConnection, edgeId?: String): NSXLogonLogoffScritpsDto;
		getLogonLogoffScriptV3(connection?: NSXConnection, edgeId?: String, id?: String): NSXLogonLogoffScriptDto;
		modifyLogonLogoffScriptV3(connection?: NSXConnection, logonlogoffscriptdto?: NSXLogonLogoffScriptDto, edgeId?: String, id?: String): void;
		uploadScriptFileV3(connection?: NSXConnection, file?: org.springframework.web.multipart.MultipartFile, edgeId?: String): void;
	}

	declare const NSXScriptMgmtController: NSXScriptMgmtController;

	interface NSXScriptMgmtTrinityController
	{

		addLogonLogoffScriptV4(connection?: NSXConnection, logonlogoffscriptdto?: NSXLogonLogoffScriptDto, edgeId?: String): void;
		applyLogonLogoffScriptsV4(connection?: NSXConnection, logonlogoffscritpsdto?: NSXLogonLogoffScritpsDto, edgeId?: String): void;
		deleteAllLogonLogoffScriptsV4(connection?: NSXConnection, edgeId?: String): void;
		deleteLogonLogoffScriptV4(connection?: NSXConnection, edgeId?: String, id?: String): void;
		deleteUnusedLogonLogoffScriptFilesV4(connection?: NSXConnection, edgeId?: String): void;
		getAllLogonLogoffScriptsV4(connection?: NSXConnection, edgeId?: String): NSXLogonLogoffScritpsDto;
		getLogonLogoffScriptV4(connection?: NSXConnection, edgeId?: String, id?: String): NSXLogonLogoffScriptDto;
		modifyLogonLogoffScriptV4(connection?: NSXConnection, logonlogoffscriptdto?: NSXLogonLogoffScriptDto, edgeId?: String, id?: String): void;
		uploadScriptFileV4(connection?: NSXConnection, file?: org.springframework.web.multipart.MultipartFile, edgeId?: String): void;
	}

	declare const NSXScriptMgmtTrinityController: NSXScriptMgmtTrinityController;

	interface NSXSecondaryAddresses
	{
		readonly ipAddresses: String[];

	}

	interface NSXSecondaryAddressesConstructor {
		new(value?:any): NSXSecondaryAddresses;
		readonly prototype: NSXSecondaryAddresses;
	}

	declare const NSXSecondaryAddresses: NSXSecondaryAddressesConstructor;

	interface NSXSecondaryAuthServerDto
	{
		readonly authServer: java.util.List;

	}

	interface NSXSecondaryAuthServerDtoConstructor {
		new(value?:any): NSXSecondaryAuthServerDto;
		readonly prototype: NSXSecondaryAuthServerDto;
	}

	declare const NSXSecondaryAuthServerDto: NSXSecondaryAuthServerDtoConstructor;

	interface NSXSecurityActionListDto
	{
		readonly actionList: java.util.List;
		readonly executionOrderCategory: String;

	}

	interface NSXSecurityActionListDtoConstructor {
		new(value?:any): NSXSecurityActionListDto;
		readonly prototype: NSXSecurityActionListDto;
	}

	declare const NSXSecurityActionListDto: NSXSecurityActionListDtoConstructor;

	interface NSXSecurityActionMapDto
	{
		readonly actionsByCategory: java.util.List;

	}

	interface NSXSecurityActionMapDtoConstructor {
		new(value?:any): NSXSecurityActionMapDto;
		readonly prototype: NSXSecurityActionMapDto;
	}

	declare const NSXSecurityActionMapDto: NSXSecurityActionMapDtoConstructor;

	interface NSXSecurityCertificate
	{
		readonly pem_encoded: String;
		readonly ssh_public_key: String;
		readonly valid_from: String;
		readonly valid_to: String;

	}

	interface NSXSecurityCertificateConstructor {
		new(value?:any): NSXSecurityCertificate;
		readonly prototype: NSXSecurityCertificate;
	}

	declare const NSXSecurityCertificate: NSXSecurityCertificateConstructor;

	interface NSXSecurityGroup
	{
		readonly description: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: String;
		readonly scopeId: String;

	}

	interface NSXSecurityGroupConstructor {
		new(value?:any): NSXSecurityGroup;
		readonly prototype: NSXSecurityGroup;
	}

	declare const NSXSecurityGroup: NSXSecurityGroupConstructor;

	interface NSXSecurityGroupController
	{

		addMemberV2(connection?: NSXConnection, identifierString?: String, memberIdentifier?: String, failIfExists?: boolean): void;
		createBulkV2(connection?: NSXConnection, scopeId?: String, securitygroupdto?: NSXSecurityGroupDto): String;
		createV2(connection?: NSXConnection, scopeId?: String, securitygroupdto?: NSXSecurityGroupDto): String;
		deleteV2(connection?: NSXConnection, force?: boolean, identifierString?: String): void;
		getMembersV2(connection?: NSXConnection, identifierString?: String): String[];
		getSecurityGroupsV2(connection?: NSXConnection, memberIdentifier?: String): String[];
		getV2(connection?: NSXConnection, identifierString?: String): NSXSecurityGroupDto;
		listApplicableMembersByTypeV2(connection?: NSXConnection, scopeId?: String, memberType?: String): NSXBasicDomainObjectInfo[];
		listApplicableMembersV2(connection?: NSXConnection, scopeId?: String): NSXBasicDomainObjectInfo[];
		listApplicableMemberTypesV2(connection?: NSXConnection, scopeId?: String): NSXObjectTypeDto[];
		listHiddenV2(connection?: NSXConnection, scopeId?: String): NSXSecurityGroupDto[];
		listV2(connection?: NSXConnection, scopeId?: String): NSXSecurityGroupDto[];
		removeMemberV2(connection?: NSXConnection, identifierString?: String, memberIdentifier?: String, failIfAbsent?: boolean): void;
		updateBulkV2(connection?: NSXConnection, identifierString?: String, securitygroupdto?: NSXSecurityGroupDto): void;
		updateV2(connection?: NSXConnection, identifierString?: String, securitygroupdto?: NSXSecurityGroupDto): void;
	}

	declare const NSXSecurityGroupController: NSXSecurityGroupController;

	interface NSXSecurityGroupDto
	{
		readonly clientHandle: String;
		readonly description: String;
		readonly dynamicMemberDefinition: NSXDynamicMemberDto;
		readonly excludeMembers: java.util.Set;
		readonly extendedAttributes: java.util.List;
		readonly inheritanceAllowed: boolean;
		readonly members: java.util.Set;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly type: NSXObjectTypeDto;
		readonly vsmUuid: String;

	}

	interface NSXSecurityGroupDtoConstructor {
		new(value?:any): NSXSecurityGroupDto;
		readonly prototype: NSXSecurityGroupDto;
	}

	declare const NSXSecurityGroupDto: NSXSecurityGroupDtoConstructor;

	interface NSXSecurityGroupInv
	{
		readonly displayName: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;

	}

	interface NSXSecurityGroupInvConstructor {
		new(value?:any): NSXSecurityGroupInv;
		readonly prototype: NSXSecurityGroupInv;
	}

	declare const NSXSecurityGroupInv: NSXSecurityGroupInvConstructor;

	interface NSXSecurityGroupPage
	{
		readonly displayName: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly pageSize: int;
		readonly startIndex: int;
		readonly totalCount: long;

	}

	interface NSXSecurityGroupPageConstructor {
		new(value?:any): NSXSecurityGroupPage;
		readonly prototype: NSXSecurityGroupPage;
	}

	declare const NSXSecurityGroupPage: NSXSecurityGroupPageConstructor;

	interface NSXSecurityGroupsDto
	{
		readonly securityGroups: java.util.List;

	}

	interface NSXSecurityGroupsDtoConstructor {
		new(value?:any): NSXSecurityGroupsDto;
		readonly prototype: NSXSecurityGroupsDto;
	}

	declare const NSXSecurityGroupsDto: NSXSecurityGroupsDtoConstructor;

	interface NSXSecurityGroupsManager
	{

		createSecurityGroup(connection?: NSXConnection, vmMorefs?: String[], ips?: String[], securitygroup?: NSXSecurityGroup): NSXSecurityGroup;
		getGlobalSecurityGroups(connection?: NSXConnection, startIndex?: int): NSXSecurityGroup[];
		getSecurityGroupMembers(connection?: NSXConnection, group?: NSXSecurityGroup): NSXBasicDomainEntity[];
		getSecurityGroupsByScope(connection?: NSXConnection, scopeId?: String): NSXSecurityGroup[];
		removeMembersFromSecurityGroups(connection?: NSXConnection, securityGroups?: NSXSecurityGroup[], vmMorefs?: String[], ipSets?: NSXIPSet[]): void;
		updateSecurityGroup(connection?: NSXConnection, securityGroupId?: String, vmMorefs?: String[], ips?: String[]): void;
		updateSecurityGroups(connection?: NSXConnection, securityGroups?: NSXSecurityGroup[], vmMorefs?: String[], ipSets?: NSXIPSet[]): void;
	}

	declare const NSXSecurityGroupsManager: NSXSecurityGroupsManager;

	interface NSXSecurityPolicy
	{
		readonly description: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: String;

	}

	interface NSXSecurityPolicyConstructor {
		new(value?:any): NSXSecurityPolicy;
		readonly prototype: NSXSecurityPolicy;
	}

	declare const NSXSecurityPolicy: NSXSecurityPolicyConstructor;

	interface NSXSecurityPolicyController
	{

		createPolicyV2(connection?: NSXConnection, securitypolicydto?: NSXSecurityPolicyDto): String;
		deletePolicyV2(connection?: NSXConnection, policyId?: String, force?: boolean): void;
		exportPolicyHierarchyV2(connection?: NSXConnection, policyIds?: String, prefix?: String): NSXSecurityPolicyHierarchyDto;
		getAllActionsForPolicyV2(connection?: NSXConnection, policyId?: String): NSXSecurityActionMapDto;
		getAllActionsForSecurityGroupV2(connection?: NSXConnection, sgId?: String): NSXSecurityActionMapDto;
		getAllActionsForVirtualMachineV2(connection?: NSXConnection, vmId?: String): NSXSecurityActionMapDto;
		getAllPoliciesForSecurityGroupV2(connection?: NSXConnection, sgId?: String): NSXSecurityPolicyListDto;
		getAllVirtualMachinesForActionV2(connection?: NSXConnection, category?: String, attributeKey?: String, attributeValue?: String): NSXVmNodeSetDto;
		getPoliciesOnScopeV2(connection?: NSXConnection): NSXSecurityPolicyListDto;
		getPolicyV2(connection?: NSXConnection, policyId?: String): NSXSecurityPolicyDto;
		importPolicyHierarchyV2(connection?: NSXConnection, securitypolicyhierarchydto?: NSXSecurityPolicyHierarchyDto, suffix?: String): void;
		processKeyValueParametersV2(connection?: NSXConnection, keyvaluelistdto?: NSXKeyValueListDto, category?: String): Object;
		updatePolicyV2(connection?: NSXConnection, securitypolicydto?: NSXSecurityPolicyDto, policyId?: String): void;
	}

	declare const NSXSecurityPolicyController: NSXSecurityPolicyController;

	interface NSXSecurityPolicyDto
	{
		readonly children: java.util.List;
		readonly clientHandle: String;
		readonly description: String;
		readonly executionOrderCategoryToActionsList: java.util.List;
		readonly extendedAttributes: java.util.List;
		readonly inheritanceAllowed: boolean;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly parent: NSXBasicDomainObjectInfo;
		readonly precedence: int;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly securityGroupBindings: java.util.List;
		readonly type: NSXObjectTypeDto;
		readonly vsmUuid: String;

	}

	interface NSXSecurityPolicyDtoConstructor {
		new(value?:any): NSXSecurityPolicyDto;
		readonly prototype: NSXSecurityPolicyDto;
	}

	declare const NSXSecurityPolicyDto: NSXSecurityPolicyDtoConstructor;

	interface NSXSecurityPolicyHierarchyDto
	{
		readonly description: String;
		readonly name: String;
		readonly securityGroups: java.util.Set;
		readonly securityPolicies: java.util.List;

	}

	interface NSXSecurityPolicyHierarchyDtoConstructor {
		new(value?:any): NSXSecurityPolicyHierarchyDto;
		readonly prototype: NSXSecurityPolicyHierarchyDto;
	}

	declare const NSXSecurityPolicyHierarchyDto: NSXSecurityPolicyHierarchyDtoConstructor;

	interface NSXSecurityPolicyInv
	{
		readonly displayName: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;

	}

	interface NSXSecurityPolicyInvConstructor {
		new(value?:any): NSXSecurityPolicyInv;
		readonly prototype: NSXSecurityPolicyInv;
	}

	declare const NSXSecurityPolicyInv: NSXSecurityPolicyInvConstructor;

	interface NSXSecurityPolicyListDto
	{
		readonly policies: java.util.List;

	}

	interface NSXSecurityPolicyListDtoConstructor {
		new(value?:any): NSXSecurityPolicyListDto;
		readonly prototype: NSXSecurityPolicyListDto;
	}

	declare const NSXSecurityPolicyListDto: NSXSecurityPolicyListDtoConstructor;

	interface NSXSecurityPolicyManager
	{

		applyPoliciesOnSecurityGroup(connection?: NSXConnection, securityGroupId?: String, policyIds?: String[]): void;
		applyPolicyOnSecurityGroup(connection?: NSXConnection, securityGroupId?: String, policyId?: String): void;
		createAppIsolationPolicy(connection?: NSXConnection, endPointId?: String): NSXSecurityPolicy;
		enableSupportForOverlappingSubnets(connection?: NSXConnection): void;
	}

	declare const NSXSecurityPolicyManager: NSXSecurityPolicyManager;

	interface NSXSecurityprofileController
	{

	}

	declare const NSXSecurityprofileController: NSXSecurityprofileController;

	interface NSXSecurityProfileDto
	{
		readonly newPassword: String;
		readonly passwordHintQuestionAnswers: java.util.List;

	}

	interface NSXSecurityProfileDtoConstructor {
		new(value?:any): NSXSecurityProfileDto;
		readonly prototype: NSXSecurityProfileDto;
	}

	declare const NSXSecurityProfileDto: NSXSecurityProfileDtoConstructor;

	interface NSXSecurityStatusDto
	{
		readonly clusterId: String;
		readonly clusterName: String;
		readonly hostId: String;
		readonly hostName: String;
		readonly reason: String;
		readonly securityGroupId: String;
		readonly securityGroupName: String;
		readonly serviceId: String;
		readonly serviceName: String;
		readonly vmId: String;
		readonly vmName: String;

	}

	interface NSXSecurityStatusDtoConstructor {
		new(value?:any): NSXSecurityStatusDto;
		readonly prototype: NSXSecurityStatusDto;
	}

	declare const NSXSecurityStatusDto: NSXSecurityStatusDtoConstructor;

	interface NSXSecurityStatusesDto
	{
		readonly securityStatuses: java.util.List;

	}

	interface NSXSecurityStatusesDtoConstructor {
		new(value?:any): NSXSecurityStatusesDto;
		readonly prototype: NSXSecurityStatusesDto;
	}

	declare const NSXSecurityStatusesDto: NSXSecurityStatusesDtoConstructor;

	interface NSXSecurityTag
	{
		readonly description: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly isUniversal: boolean;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: String;

	}

	interface NSXSecurityTagConstructor {
		new(value?:any): NSXSecurityTag;
		readonly prototype: NSXSecurityTag;
	}

	declare const NSXSecurityTag: NSXSecurityTagConstructor;

	interface NSXSecurityTagController
	{

		attachVMV2(connection?: NSXConnection, identifierString?: String, vmMoid?: String): void;
		createV2(connection?: NSXConnection, securitytagdto?: NSXSecurityTagDto): String;
		deleteV2(connection?: NSXConnection, force?: boolean, identifierString?: String): void;
		detachVMV2(connection?: NSXConnection, identifierString?: String, vmMoid?: String): void;
		getTagsOnVMV2(connection?: NSXConnection, vmMoid?: String): NSXSecurityTagListDto;
		getV2(connection?: NSXConnection, identifierString?: String): NSXSecurityTagDto;
		getVMsForTagV2(connection?: NSXConnection, identifierString?: String): NSXBasicDomainObjectInfoList;
		listV2(connection?: NSXConnection): NSXSecurityTagListDto;
		updateV2(connection?: NSXConnection, identifierString?: String, securitytagdto?: NSXSecurityTagDto): void;
	}

	declare const NSXSecurityTagController: NSXSecurityTagController;

	interface NSXSecurityTagDto
	{
		readonly clientHandle: String;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly systemResource: boolean;
		readonly type: NSXObjectTypeDto;
		readonly vmList: NSXBasicDomainObjectInfoList;
		readonly vsmUuid: String;

	}

	interface NSXSecurityTagDtoConstructor {
		new(value?:any): NSXSecurityTagDto;
		readonly prototype: NSXSecurityTagDto;
	}

	declare const NSXSecurityTagDto: NSXSecurityTagDtoConstructor;

	interface NSXSecurityTagListDto
	{
		readonly securityTagDtoList: java.util.List;

	}

	interface NSXSecurityTagListDtoConstructor {
		new(value?:any): NSXSecurityTagListDto;
		readonly prototype: NSXSecurityTagListDto;
	}

	declare const NSXSecurityTagListDto: NSXSecurityTagListDtoConstructor;

	interface NSXSecurityTagManager
	{

		applySecurityTagOnVMs(connection?: NSXConnection, vmMoref?: String, tagIds?: String[]): void;
		detachSecurityTagsOnVm(connection?: NSXConnection, securityTags?: NSXSecurityTag[], vmMoref?: String): void;
		getSecurityTag(connection?: NSXConnection, tagId?: String): NSXSecurityTag;
		getSecurityTags(connection?: NSXConnection): NSXSecurityTag[];
		getTaggedVms(connection?: NSXConnection, tag?: NSXSecurityTag): NSXBasicDomainEntity[];
	}

	declare const NSXSecurityTagManager: NSXSecurityTagManager;

	interface NSXSecurityTagsInv
	{
		readonly displayName: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;

	}

	interface NSXSecurityTagsInvConstructor {
		new(value?:any): NSXSecurityTagsInv;
		readonly prototype: NSXSecurityTagsInv;
	}

	declare const NSXSecurityTagsInv: NSXSecurityTagsInvConstructor;

	interface NSXSegmentRangeDto
	{
		readonly begin: long;
		readonly desc: String;
		readonly end: long;
		readonly id: int;
		readonly name: String;

	}

	interface NSXSegmentRangeDtoConstructor {
		new(value?:any): NSXSegmentRangeDto;
		readonly prototype: NSXSegmentRangeDto;
	}

	declare const NSXSegmentRangeDto: NSXSegmentRangeDtoConstructor;

	interface NSXSegmentRangesDto
	{
		readonly segmentRanges: java.util.List;

	}

	interface NSXSegmentRangesDtoConstructor {
		new(value?:any): NSXSegmentRangesDto;
		readonly prototype: NSXSegmentRangesDto;
	}

	declare const NSXSegmentRangesDto: NSXSegmentRangesDtoConstructor;

	interface NSXSendOverTunnel
	{
		readonly optimize: boolean;
		readonly ports: String;

	}

	interface NSXSendOverTunnelConstructor {
		new(value?:any): NSXSendOverTunnel;
		readonly prototype: NSXSendOverTunnel;
	}

	declare const NSXSendOverTunnel: NSXSendOverTunnelConstructor;

	interface NSXServerSettingsController
	{

		applyServerSettingsV3(connection?: NSXConnection, serversettingsdto?: NSXServerSettingsDto, edgeId?: String): void;
		getServerSettingsV3(connection?: NSXConnection, edgeId?: String): NSXServerSettingsDto;
	}

	declare const NSXServerSettingsController: NSXServerSettingsController;

	interface NSXServerSettingsDto
	{
		readonly certificateId: String;
		readonly cipherList: NSXCipherList;
		readonly ip: String;
		readonly port: Integer;

	}

	interface NSXServerSettingsDtoConstructor {
		new(value?:any): NSXServerSettingsDto;
		readonly prototype: NSXServerSettingsDto;
	}

	declare const NSXServerSettingsDto: NSXServerSettingsDtoConstructor;

	interface NSXServerSettingsTrinityController
	{

		applyLoggingV4(connection?: NSXConnection, loggingdto?: NSXLoggingDto, edgeId?: String): void;
		applyTrinityServerSettingsV4(connection?: NSXConnection, serversettingstrinitydto?: NSXServerSettingsTrinityDto, edgeId?: String): void;
		getLoggingV4(connection?: NSXConnection, edgeId?: String): NSXLoggingDto;
		getTrinityServerSettingsV4(connection?: NSXConnection, edgeId?: String): NSXServerSettingsTrinityDto;
	}

	declare const NSXServerSettingsTrinityController: NSXServerSettingsTrinityController;

	interface NSXServerSettingsTrinityDto
	{
		readonly certificateId: String;
		readonly cipherList: NSXCipherList;
		readonly port: Integer;
		readonly serverAddresses: NSXIpAddressesDto;

	}

	interface NSXServerSettingsTrinityDtoConstructor {
		new(value?:any): NSXServerSettingsTrinityDto;
		readonly prototype: NSXServerSettingsTrinityDto;
	}

	declare const NSXServerSettingsTrinityDto: NSXServerSettingsTrinityDtoConstructor;

	interface NSXServiceDeploymentConfigDto
	{
		readonly datastores: java.util.List;
		readonly dvPortGroup: String;
		readonly ipPool: String;
		readonly serviceId: String;
		readonly serviceInstanceId: String;

	}

	interface NSXServiceDeploymentConfigDtoConstructor {
		new(value?:any): NSXServiceDeploymentConfigDto;
		readonly prototype: NSXServiceDeploymentConfigDto;
	}

	declare const NSXServiceDeploymentConfigDto: NSXServiceDeploymentConfigDtoConstructor;

	interface NSXServiceDeploymentSpecDto
	{
		readonly agencyId: String;
		readonly deploymentScope: java.util.Set;
		readonly description: String;
		readonly id: long;
		readonly name: String;
		readonly revision: long;
		readonly versionedSpecs: java.util.Set;

	}

	interface NSXServiceDeploymentSpecDtoConstructor {
		new(value?:any): NSXServiceDeploymentSpecDto;
		readonly prototype: NSXServiceDeploymentSpecDto;
	}

	declare const NSXServiceDeploymentSpecDto: NSXServiceDeploymentSpecDtoConstructor;

	interface NSXServiceDto
	{
		readonly icmpType: String;
		readonly port: java.util.List;
		readonly protocol: String;

	}

	interface NSXServiceDtoConstructor {
		new(value?:any): NSXServiceDto;
		readonly prototype: NSXServiceDto;
	}

	declare const NSXServiceDto: NSXServiceDtoConstructor;

	interface NSXServiceFlowDataDetailDto
	{
		readonly applicationContext: String;
		readonly defaultRule: boolean;
		readonly destination: java.util.List;
		readonly destinationIdentityGraph: java.util.Map;
		readonly endDate: long;
		readonly flowAttribute: NSXFlowAttributeDto;
		readonly ruleId: long;
		readonly source: java.util.List;
		readonly sourceIdentityGraph: java.util.Map;
		readonly startDate: long;

	}

	interface NSXServiceFlowDataDetailDtoConstructor {
		new(value?:any): NSXServiceFlowDataDetailDto;
		readonly prototype: NSXServiceFlowDataDetailDto;
	}

	declare const NSXServiceFlowDataDetailDto: NSXServiceFlowDataDetailDtoConstructor;

	interface NSXServiceFlowDataDto
	{
		readonly destinationPort: int;
		readonly existingService: boolean;
		readonly flowAttribute: NSXFlowAttributeDto;
		readonly flowType: String;
		readonly protocolName: String;
		readonly serviceId: String;
		readonly serviceName: String;
		readonly sourcePort: int;
		readonly subProtocolName: String;

	}

	interface NSXServiceFlowDataDtoConstructor {
		new(value?:any): NSXServiceFlowDataDto;
		readonly prototype: NSXServiceFlowDataDto;
	}

	declare const NSXServiceFlowDataDto: NSXServiceFlowDataDtoConstructor;

	interface NSXServiceInsertionController
	{

		addServiceInstanceTemplateV2(connection?: NSXConnection, id?: String, serviceinstancetemplatedto?: NSXServiceInstanceTemplateDto): String;
		addUsedByV2(connection?: NSXConnection, id?: String): String[];
		addVendorTemplateV2(connection?: NSXConnection, id?: String, vendortemplatedto?: NSXVendorTemplateDto): String;
		addVersionedDeploymentSpecV2(connection?: NSXConnection, id?: String, versioneddeploymentspecdto?: NSXVersionedDeploymentSpecDto): String;
		cleanupServiceV2(connection?: NSXConnection, id?: String): String;
		clearV2(connection?: NSXConnection): String;
		deleteVersionedDeploymentSpecV2(connection?: NSXConnection, id?: String, vSpecId?: long): void;
		disableV2(connection?: NSXConnection, id?: String): String;
		enableV2(connection?: NSXConnection, id?: String): String;
		getFunctionalitiesV2(connection?: NSXConnection, id?: String): NSXFunctionalitiesDto;
		getImplementationsV2(connection?: NSXConnection, id?: String): NSXImplementationsDto;
		getServiceDeploymentSpecV2(connection?: NSXConnection, id?: String): NSXServiceDeploymentSpecDto;
		getServiceInstanceTemplatesV2(connection?: NSXConnection, id?: String): NSXServiceInstanceTemplatesDto;
		getServiceInstanceTemplateV2(connection?: NSXConnection, id?: String, vtId?: long): NSXServiceInstanceTemplateDto;
		getServicesByClustersV2(connection?: NSXConnection, set?: java.util.Set): NSXServicesDto;
		getServicesByDvpgV2(connection?: NSXConnection, set?: java.util.Set): NSXServicesDto;
		getServicesByDvsV2(connection?: NSXConnection, set?: java.util.Set): NSXServicesDto;
		getServicesByVdnScopeV2(connection?: NSXConnection, string?: String): NSXServicesDto;
		getServicesV2(connection?: NSXConnection): NSXServicesDto;
		getServiceV2(connection?: NSXConnection, id?: String): NSXVsmSiServiceDto;
		getServiceVendorPreferencesV2(connection?: NSXConnection, id?: String): NSXServiceVendorPreferencesDto;
		getTransportsV2(connection?: NSXConnection, id?: String): NSXTransportsDto;
		getVendorTemplatesV2(connection?: NSXConnection, id?: String): NSXVendorTemplatesDto;
		getVendorTemplateV2(connection?: NSXConnection, id?: String, vtId?: long): NSXVendorTemplateDto;
		installV2(connection?: NSXConnection, id?: String): String;
		registerV2(connection?: NSXConnection, servicedto?: NSXVsmSiServiceDto): String;
		removeServiceInstanceTemplateV2(connection?: NSXConnection, id?: String, vtId?: long): void;
		removeUsedByV2(connection?: NSXConnection, id?: String, usedByStr?: String): void;
		removeVendorTemplateV2(connection?: NSXConnection, id?: String, vtId?: long): void;
		resyncHostV2(connection?: NSXConnection, hostId?: String): void;
		setFunctionalitiesV2(connection?: NSXConnection, id?: String, set?: java.util.Set): void;
		setImplementationsV2(connection?: NSXConnection, id?: String, set?: java.util.Set): void;
		setStatusV2(connection?: NSXConnection, id?: String, servicestatusdto?: NSXServiceStatusDto): void;
		setTransportsV2(connection?: NSXConnection, id?: String, set?: java.util.Set): void;
		setupServiceV2(connection?: NSXConnection, id?: String): String;
		uninstallV2(connection?: NSXConnection, id?: String): String;
		unregisterV2(connection?: NSXConnection, id?: String): void;
		updateDeploymentScopeV2(connection?: NSXConnection, id?: String, set?: java.util.Set): void;
		updateServiceV2(connection?: NSXConnection, id?: String): String;
		updateServiceVendorPreferencesV2(connection?: NSXConnection, id?: String, servicevendorpreferencesdto?: NSXServiceVendorPreferencesDto): void;
		updateV2(connection?: NSXConnection, id?: String, servicedto?: NSXVsmSiServiceDto): void;
		updateVendorTemplateV2(connection?: NSXConnection, id?: String, vendortemplatedto?: NSXVendorTemplateDto): void;
		updateVersionedDeploymentSpecV2(connection?: NSXConnection, id?: String, vSpecId?: long, versioneddeploymentspecdto?: NSXVersionedDeploymentSpecDto): void;
	}

	declare const NSXServiceInsertionController: NSXServiceInsertionController;

	interface NSXServiceInstanceConfigDto
	{
		readonly baseConfig: Object;
		readonly baseRuntimeConfig: NSXServiceInstanceRuntimeInfoDto;
		readonly deploymentScopes: java.util.List;
		readonly id: long;
		readonly implementation: NSXImplementationDto;
		readonly implementationAttributes: NSXAttributesDto;
		readonly instanceTemplate: NSXServiceInstanceTemplateDto;
		readonly instanceTemplateAttributes: NSXAttributesDto;
		readonly instanceTemplateTypedAttributes: NSXTypedAttributesDto;
		readonly precedence: int;
		readonly revision: long;
		readonly serviceInstanceAttributes: NSXAttributesDto;
		readonly transport: NSXTransportDto;
		readonly transportAttributes: NSXAttributesDto;

	}

	interface NSXServiceInstanceConfigDtoConstructor {
		new(value?:any): NSXServiceInstanceConfigDto;
		readonly prototype: NSXServiceInstanceConfigDto;
	}

	declare const NSXServiceInstanceConfigDto: NSXServiceInstanceConfigDtoConstructor;

	interface NSXServiceInstanceController
	{

		addServiceInstanceRuntimeInfoV2(connection?: NSXConnection, siId?: String, serviceinstanceruntimeinfodto?: NSXServiceInstanceRuntimeInfoDto): String;
		applyServiceInstanceV2(connection?: NSXConnection, id?: String): void;
		createV2(connection?: NSXConnection, serviceinstancedto?: NSXServiceInstanceDto): String;
		deleteServiceInstanceRuntimeInfoV2(connection?: NSXConnection, siId?: String, sirId?: long): void;
		deleteV2(connection?: NSXConnection, siId?: String): void;
		disableV2(connection?: NSXConnection, id?: String, sirId?: long): String;
		enableV2(connection?: NSXConnection, id?: String, sirId?: long): String;
		getByServiceV2(connection?: NSXConnection, serviceId?: String): NSXServiceInstancesDto;
		getServiceInstanceRuntimeInfosV2(connection?: NSXConnection, siId?: String): NSXServiceInstanceRuntimeInfosDto;
		getServiceInstanceRuntimeInfoV2(connection?: NSXConnection, siId?: String, sirId?: long): NSXServiceInstanceRuntimeInfoDto;
		getServiceInstancesV2(connection?: NSXConnection): NSXServiceInstancesDto;
		getServiceInstanceV2(connection?: NSXConnection, siId?: String): NSXServiceInstanceDto;
		installV2(connection?: NSXConnection, id?: String, sirId?: long): String;
		uninstallV2(connection?: NSXConnection, id?: String, sirId?: long): String;
		updateServiceInstanceRuntimeInfoV2(connection?: NSXConnection, siId?: String, sirId?: long, serviceinstanceruntimeinfodto?: NSXServiceInstanceRuntimeInfoDto): void;
		updateV2(connection?: NSXConnection, siId?: String, serviceinstancedto?: NSXServiceInstanceDto): void;
	}

	declare const NSXServiceInstanceController: NSXServiceInstanceController;

	interface NSXServiceInstanceDeploymentScopeDto
	{
		readonly clusters: java.util.Set;
		readonly dataNetworks: java.util.Set;
		readonly datastore: String;
		readonly id: long;
		readonly mgmtNetwork: String;
		readonly nics: java.util.List;
		readonly resourcePool: String;
		readonly revision: long;

	}

	interface NSXServiceInstanceDeploymentScopeDtoConstructor {
		new(value?:any): NSXServiceInstanceDeploymentScopeDto;
		readonly prototype: NSXServiceInstanceDeploymentScopeDto;
	}

	declare const NSXServiceInstanceDeploymentScopeDto: NSXServiceInstanceDeploymentScopeDtoConstructor;

	interface NSXServiceInstanceDeploymentScopesDto
	{
		readonly serviceInstanceDeploymentScopes: java.util.Collection;

	}

	interface NSXServiceInstanceDeploymentScopesDtoConstructor {
		new(value?:any): NSXServiceInstanceDeploymentScopesDto;
		readonly prototype: NSXServiceInstanceDeploymentScopesDto;
	}

	declare const NSXServiceInstanceDeploymentScopesDto: NSXServiceInstanceDeploymentScopesDtoConstructor;

	interface NSXServiceInstanceDto
	{
		readonly clientHandle: String;
		readonly config: NSXServiceInstanceConfigDto;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: long;
		readonly runtimeInfos: java.util.List;
		readonly scope: NSXScopeInfoDto;
		readonly service: NSXBasicDomainObjectInfo;
		readonly serviceProfileCount: int;
		readonly type: NSXObjectTypeDto;
		readonly vsmUuid: String;

	}

	interface NSXServiceInstanceDtoConstructor {
		new(value?:any): NSXServiceInstanceDto;
		readonly prototype: NSXServiceInstanceDto;
	}

	declare const NSXServiceInstanceDto: NSXServiceInstanceDtoConstructor;

	interface NSXServiceInstanceRuntimeInfoDto
	{
		readonly deloymentScope: NSXServiceInstanceDeploymentScopeDto;
		readonly id: long;
		readonly installState: String;
		readonly revision: long;
		readonly runtimeInstanceId: String;
		readonly serviceInstance: NSXBasicDomainObjectInfo;
		readonly status: String;
		readonly versionedDeploymentSpecId: long;

	}

	interface NSXServiceInstanceRuntimeInfoDtoConstructor {
		new(value?:any): NSXServiceInstanceRuntimeInfoDto;
		readonly prototype: NSXServiceInstanceRuntimeInfoDto;
	}

	declare const NSXServiceInstanceRuntimeInfoDto: NSXServiceInstanceRuntimeInfoDtoConstructor;

	interface NSXServiceInstanceRuntimeInfosDto
	{
		readonly serviceInstanceRuntimeInfos: java.util.Collection;

	}

	interface NSXServiceInstanceRuntimeInfosDtoConstructor {
		new(value?:any): NSXServiceInstanceRuntimeInfosDto;
		readonly prototype: NSXServiceInstanceRuntimeInfosDto;
	}

	declare const NSXServiceInstanceRuntimeInfosDto: NSXServiceInstanceRuntimeInfosDtoConstructor;

	interface NSXServiceInstanceRuntimeNicInfoDto
	{
		readonly allocatedIpAddressId: long;
		readonly connectivityType: String;
		readonly description: String;
		readonly gatewayAddress: String;
		readonly id: long;
		readonly index: int;
		readonly ipAddress: String;
		readonly ipAllocationType: String;
		readonly ipPool: NSXBasicDomainObjectInfo;
		readonly label: String;
		readonly macAddress: String;
		readonly network: NSXBasicDomainObjectInfo;
		readonly revision: long;
		readonly subnetMask: String;
		readonly vlanId: int;
		readonly vxlanId: int;

	}

	interface NSXServiceInstanceRuntimeNicInfoDtoConstructor {
		new(value?:any): NSXServiceInstanceRuntimeNicInfoDto;
		readonly prototype: NSXServiceInstanceRuntimeNicInfoDto;
	}

	declare const NSXServiceInstanceRuntimeNicInfoDto: NSXServiceInstanceRuntimeNicInfoDtoConstructor;

	interface NSXServiceInstancesDto
	{
		readonly serviceInstances: java.util.Collection;

	}

	interface NSXServiceInstancesDtoConstructor {
		new(value?:any): NSXServiceInstancesDto;
		readonly prototype: NSXServiceInstancesDto;
	}

	declare const NSXServiceInstancesDto: NSXServiceInstancesDtoConstructor;

	interface NSXServiceInstanceTemplateDto
	{
		readonly description: String;
		readonly id: long;
		readonly instanceTemplateId: String;
		readonly name: String;
		readonly requiredInstanceAttributes: NSXAttributesDto;
		readonly revision: long;
		readonly typedAttributes: NSXTypedAttributesDto;

	}

	interface NSXServiceInstanceTemplateDtoConstructor {
		new(value?:any): NSXServiceInstanceTemplateDto;
		readonly prototype: NSXServiceInstanceTemplateDto;
	}

	declare const NSXServiceInstanceTemplateDto: NSXServiceInstanceTemplateDtoConstructor;

	interface NSXServiceInstanceTemplatesDto
	{
		readonly serviceInstanceTemplates: java.util.Collection;

	}

	interface NSXServiceInstanceTemplatesDtoConstructor {
		new(value?:any): NSXServiceInstanceTemplatesDto;
		readonly prototype: NSXServiceInstanceTemplatesDto;
	}

	declare const NSXServiceInstanceTemplatesDto: NSXServiceInstanceTemplatesDtoConstructor;

	interface NSXServiceManagerController
	{

		createV2(connection?: NSXConnection, servicemanagerdto?: NSXServiceManagerDto): String;
		deleteV2(connection?: NSXConnection, smId?: String): void;
		getServiceDeploymentSpecV2(connection?: NSXConnection, id?: String): NSXServiceDeploymentSpecDto;
		getServiceManagersV2(connection?: NSXConnection): NSXServiceManagersDto;
		getServiceManagerV2(connection?: NSXConnection, smId?: String): NSXServiceManagerDto;
		setStatusV2(connection?: NSXConnection, smId?: String, servicemanagerstatusdto?: NSXServiceManagerStatusDto): void;
		updateV2(connection?: NSXConnection, smId?: String, servicemanagerdto?: NSXServiceManagerDto): void;
	}

	declare const NSXServiceManagerController: NSXServiceManagerController;

	interface NSXServiceManagerDto
	{
		readonly clientHandle: String;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly login: String;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly password: String;
		readonly restUrl: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly services: java.util.Set;
		readonly status: String;
		readonly thumbprint: String;
		readonly type: NSXObjectTypeDto;
		readonly url: String;
		readonly vendorId: String;
		readonly vendorName: String;
		readonly verifyPassword: String;
		readonly vsmUuid: String;

	}

	interface NSXServiceManagerDtoConstructor {
		new(value?:any): NSXServiceManagerDto;
		readonly prototype: NSXServiceManagerDto;
	}

	declare const NSXServiceManagerDto: NSXServiceManagerDtoConstructor;

	interface NSXServiceManagersDto
	{
		readonly serviceManagers: java.util.Collection;

	}

	interface NSXServiceManagersDtoConstructor {
		new(value?:any): NSXServiceManagersDto;
		readonly prototype: NSXServiceManagersDto;
	}

	declare const NSXServiceManagersDto: NSXServiceManagersDtoConstructor;

	interface NSXServiceManagerStatusDto
	{
		readonly status: String;

	}

	interface NSXServiceManagerStatusDtoConstructor {
		new(value?:any): NSXServiceManagerStatusDto;
		readonly prototype: NSXServiceManagerStatusDto;
	}

	declare const NSXServiceManagerStatusDto: NSXServiceManagerStatusDtoConstructor;

	interface NSXServicePermissionsDto
	{
		readonly manageServicePermission: boolean;
		readonly viewServicePermission: boolean;

	}

	interface NSXServicePermissionsDtoConstructor {
		new(value?:any): NSXServicePermissionsDto;
		readonly prototype: NSXServicePermissionsDto;
	}

	declare const NSXServicePermissionsDto: NSXServicePermissionsDtoConstructor;

	interface NSXServicePort
	{
		readonly algorithm: String;
		readonly displayName: String;
		readonly healthcheckPort: String;
		readonly healthchecks: NSXHealthcheck[];
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly port: String;
		readonly protocol: String;

	}

	interface NSXServicePortConstructor {
		new(value?:any): NSXServicePort;
		readonly prototype: NSXServicePort;
	}

	declare const NSXServicePort: NSXServicePortConstructor;

	interface NSXServiceProfileBindingDto
	{
		readonly distributedVirtualPortGroups: java.util.Set;
		readonly excludedVnics: java.util.Set;
		readonly virtualServerDefinition: Object;
		readonly virtualServers: java.util.Set;
		readonly virtualWires: java.util.Set;

	}

	interface NSXServiceProfileBindingDtoConstructor {
		new(value?:any): NSXServiceProfileBindingDto;
		readonly prototype: NSXServiceProfileBindingDto;
	}

	declare const NSXServiceProfileBindingDto: NSXServiceProfileBindingDtoConstructor;

	interface NSXServiceProfileController
	{

		addBindingStatusV2(connection?: NSXConnection, spId?: String, bindingstatusdto?: NSXBindingStatusDto): String;
		addRuleV2(connection?: NSXConnection, id?: String, ruledto?: NSXRuleDto): String;
		addStatefulRuleSetV2(connection?: NSXConnection, id?: String, statefulrulesetdto?: NSXStatefulRuleSetDto): String;
		addStatefulRuleV2(connection?: NSXConnection, id?: String, ruleSetId?: long, statefulruledto?: NSXStatefulRuleDto): String;
		addToBindingV2(connection?: NSXConnection, spId?: String, serviceprofilebindingdto?: NSXServiceProfileBindingDto): String;
		applyRuleSetV2(connection?: NSXConnection, id?: String): void;
		applyStatefulPolicyV2(connection?: NSXConnection, id?: String): void;
		createV2(connection?: NSXConnection, serviceprofiledto?: NSXServiceProfileDto): String;
		deleteBindingStatusV2(connection?: NSXConnection, spId?: String, bindingId?: String): void;
		deleteServiceRuleV2(connection?: NSXConnection, id?: String, ruleId?: long): void;
		deleteStatefulRuleSetV2(connection?: NSXConnection, id?: String, ruleSetId?: long): void;
		deleteStatefulRuleV2(connection?: NSXConnection, id?: String, ruleSetId?: long, ruleId?: long): void;
		deleteV2(connection?: NSXConnection, spId?: String): void;
		doComplianceCheckV2(connection?: NSXConnection): String;
		doComplianceRectifyV2(connection?: NSXConnection): String;
		doEntityCheckV2(connection?: NSXConnection, entityId?: String): String;
		getBindingStatusV2(connection?: NSXConnection, spId?: String): NSXBindingStatusesDto;
		getByServiceV2(connection?: NSXConnection, serviceId?: String): NSXServiceProfilesDto;
		getContainerSetV2(connection?: NSXConnection, id?: String): NSXStatefulContainerSetDto;
		getRuleSetV2(connection?: NSXConnection, id?: String): NSXRuleSetDto;
		getServiceProfilesByIpContainerV2(connection?: NSXConnection, containerId?: String): NSXServiceProfilesDto;
		getServiceProfilesByMacContainerV2(connection?: NSXConnection, containerId?: String): NSXServiceProfilesDto;
		getServiceProfilesV2(connection?: NSXConnection): NSXServiceProfilesDto;
		getServiceProfileV2(connection?: NSXConnection, spId?: String): NSXServiceProfileDto;
		getStatefulPolicyV2(connection?: NSXConnection, id?: String): NSXStatefulPolicyDto;
		getStatefulRuleSetV2(connection?: NSXConnection, id?: String, ruleSetId?: long): NSXStatefulRuleSetDto;
		setBindingV2(connection?: NSXConnection, spId?: String, serviceprofilebindingdto?: NSXServiceProfileBindingDto): void;
		updateBindingStatusV2(connection?: NSXConnection, spId?: String, bindingId?: String, bindingstatusdto?: NSXBindingStatusDto): void;
		updateStatefulRuleSetV2(connection?: NSXConnection, id?: String, ruleSetId?: long, statefulrulesetdto?: NSXStatefulRuleSetDto): void;
		updateStatusV2(connection?: NSXConnection, spId?: String, serviceprofilestatusdto?: NSXServiceProfileStatusDto): void;
		updateV2(connection?: NSXConnection, spId?: String, serviceprofiledto?: NSXServiceProfileDto): void;
	}

	declare const NSXServiceProfileController: NSXServiceProfileController;

	interface NSXServiceProfileDto
	{
		readonly baseProfile: Object;
		readonly category: String;
		readonly clientHandle: String;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly profileAttributes: NSXAttributesDto;
		readonly revision: long;
		readonly runtime: NSXServiceProfileRuntimeDto;
		readonly scope: NSXScopeInfoDto;
		readonly service: NSXBasicDomainObjectInfo;
		readonly serviceInstance: NSXBasicDomainObjectInfo;
		readonly servicePolicy: NSXStatefulPolicyDto;
		readonly serviceProfileBinding: NSXServiceProfileBindingDto;
		readonly status: String;
		readonly type: NSXObjectTypeDto;
		readonly vendorAttributes: NSXAttributesDto;
		readonly vendorSections: java.util.List;
		readonly vendorTables: java.util.List;
		readonly vendorTemplate: NSXVendorTemplateDto;
		readonly vendorTypedAttributes: NSXTypedAttributesDto;
		readonly vsmUuid: String;

	}

	interface NSXServiceProfileDtoConstructor {
		new(value?:any): NSXServiceProfileDto;
		readonly prototype: NSXServiceProfileDto;
	}

	declare const NSXServiceProfileDto: NSXServiceProfileDtoConstructor;

	interface NSXServiceProfileRuntimeDto
	{
		readonly nonCompliantDvpg: java.util.Set;
		readonly nonCompliantVwire: java.util.Set;

	}

	interface NSXServiceProfileRuntimeDtoConstructor {
		new(value?:any): NSXServiceProfileRuntimeDto;
		readonly prototype: NSXServiceProfileRuntimeDto;
	}

	declare const NSXServiceProfileRuntimeDto: NSXServiceProfileRuntimeDtoConstructor;

	interface NSXServiceProfilesDto
	{
		readonly serviceProfiles: java.util.Collection;

	}

	interface NSXServiceProfilesDtoConstructor {
		new(value?:any): NSXServiceProfilesDto;
		readonly prototype: NSXServiceProfilesDto;
	}

	declare const NSXServiceProfilesDto: NSXServiceProfilesDtoConstructor;

	interface NSXServiceProfileStatusDto
	{
		readonly status: String;
		readonly statusMessage: String;

	}

	interface NSXServiceProfileStatusDtoConstructor {
		new(value?:any): NSXServiceProfileStatusDto;
		readonly prototype: NSXServiceProfileStatusDto;
	}

	declare const NSXServiceProfileStatusDto: NSXServiceProfileStatusDtoConstructor;

	interface NSXServicesDto
	{
		readonly services: java.util.List;

	}

	interface NSXServicesDtoConstructor {
		new(value?:any): NSXServicesDto;
		readonly prototype: NSXServicesDto;
	}

	declare const NSXServicesDto: NSXServicesDtoConstructor;

	interface NSXServiceStatusDto
	{
		readonly status: String;

	}

	interface NSXServiceStatusDtoConstructor {
		new(value?:any): NSXServiceStatusDto;
		readonly prototype: NSXServiceStatusDto;
	}

	declare const NSXServiceStatusDto: NSXServiceStatusDtoConstructor;

	interface NSXServiceTrinityDto
	{
		readonly icmpType: String;
		readonly port: java.util.List;
		readonly protocol: String;
		readonly sourcePort: java.util.List;

	}

	interface NSXServiceTrinityDtoConstructor {
		new(value?:any): NSXServiceTrinityDto;
		readonly prototype: NSXServiceTrinityDto;
	}

	declare const NSXServiceTrinityDto: NSXServiceTrinityDtoConstructor;

	interface NSXServiceVendorPreferencesDto
	{
		readonly preferences: java.util.Map;

	}

	interface NSXServiceVendorPreferencesDtoConstructor {
		new(value?:any): NSXServiceVendorPreferencesDto;
		readonly prototype: NSXServiceVendorPreferencesDto;
	}

	declare const NSXServiceVendorPreferencesDto: NSXServiceVendorPreferencesDtoConstructor;

	interface NSXSiteConfigDto
	{
		readonly authenticationMode: String;
		readonly certificate: String;
		readonly description: String;
		readonly dhGroup: String;
		readonly enabled: boolean;
		readonly enablePfs: boolean;
		readonly encryptionAlgorithm: String;
		readonly extension: String;
		readonly localId: String;
		readonly localIp: String;
		readonly localSubnets: NSXSubnetsDto;
		readonly mtu: Integer;
		readonly name: String;
		readonly peerId: String;
		readonly peerIp: String;
		readonly peerSubnets: NSXSubnetsDto;
		readonly psk: String;

	}

	interface NSXSiteConfigDtoConstructor {
		new(value?:any): NSXSiteConfigDto;
		readonly prototype: NSXSiteConfigDto;
	}

	declare const NSXSiteConfigDto: NSXSiteConfigDtoConstructor;

	interface NSXSiteConfigsDto
	{
		readonly sites: java.util.List;

	}

	interface NSXSiteConfigsDtoConstructor {
		new(value?:any): NSXSiteConfigsDto;
		readonly prototype: NSXSiteConfigsDto;
	}

	declare const NSXSiteConfigsDto: NSXSiteConfigsDtoConstructor;

	interface NSXSpoofGuardController
	{

		createSettingV2(connection?: NSXConnection, spoofguardsettingdto?: NSXSpoofGuardSettingDto, contextId?: String): String;
		createV2(connection?: NSXConnection, spoofguarddto?: NSXSpoofGuardDto, contextId?: String): String;
		deleteV2(connection?: NSXConnection, force?: boolean, identifierString?: String): void;
		getSettingV2(connection?: NSXConnection, contextId?: String): NSXSpoofGuardSettingDto;
		listV2(connection?: NSXConnection, contextId?: String, filter?: String, list?: NSXSpoofGuardStatus): NSXSpoofGuardDto[];
		postContextOperationsV2(connection?: NSXConnection, list?: java.util.List, contextId?: String, action?: String): void;
	}

	declare const NSXSpoofGuardController: NSXSpoofGuardController;

	interface NSXSpoofGuardDto
	{
		readonly approvedBy: String;
		readonly approvedIpAddress: String;
		readonly approvedMacAddress: String;
		readonly approvedOn: java.sql.Timestamp;
		readonly detectedIpAddress: String;
		readonly detectedMacAddress: String;
		readonly id: String;
		readonly newApprovedIpAddress: String;
		readonly nicName: String;
		readonly oldApprovedIpAddress: String;
		readonly portGroupId: String;
		readonly publishedBy: String;
		readonly publishedIpAddress: String;
		readonly publishedMacAddress: String;
		readonly publishedOn: java.sql.Timestamp;
		readonly state: int;
		readonly vmMoId: String;
		readonly vmName: String;
		readonly vnicUuid: String;

	}

	interface NSXSpoofGuardDtoConstructor {
		new(value?:any): NSXSpoofGuardDto;
		readonly prototype: NSXSpoofGuardDto;
	}

	declare const NSXSpoofGuardDto: NSXSpoofGuardDtoConstructor;

	interface NSXSpoofGuardObjectsDto
	{
		readonly spoofguardList: java.util.List;

	}

	interface NSXSpoofGuardObjectsDtoConstructor {
		new(value?:any): NSXSpoofGuardObjectsDto;
		readonly prototype: NSXSpoofGuardObjectsDto;
	}

	declare const NSXSpoofGuardObjectsDto: NSXSpoofGuardObjectsDtoConstructor;

	interface NSXSpoofGuardPermissionDto
	{
		readonly dataPermissions: NSXDataPermissionsDto;
		readonly spoofguardLicensed: boolean;
		readonly userPermissions: NSXInteractionPermissionsDto;

	}

	interface NSXSpoofGuardPermissionDtoConstructor {
		new(value?:any): NSXSpoofGuardPermissionDto;
		readonly prototype: NSXSpoofGuardPermissionDto;
	}

	declare const NSXSpoofGuardPermissionDto: NSXSpoofGuardPermissionDtoConstructor;

	interface NSXSpoofGuardPoliciesDto
	{
		readonly policies: java.util.List;

	}

	interface NSXSpoofGuardPoliciesDtoConstructor {
		new(value?:any): NSXSpoofGuardPoliciesDto;
		readonly prototype: NSXSpoofGuardPoliciesDto;
	}

	declare const NSXSpoofGuardPoliciesDto: NSXSpoofGuardPoliciesDtoConstructor;

	interface NSXSpoofGuardPolicyDto
	{
		readonly allowLocalIPs: boolean;
		readonly defaultPolicy: boolean;
		readonly description: String;
		readonly enforcementPoints: java.util.List;
		readonly name: String;
		readonly operationMode: String;
		readonly policyId: String;
		readonly publishedBy: String;
		readonly publishedOn: java.sql.Timestamp;
		readonly publishPending: boolean;
		readonly statistics: NSXIpAssignmentStatisticDto;

	}

	interface NSXSpoofGuardPolicyDtoConstructor {
		new(value?:any): NSXSpoofGuardPolicyDto;
		readonly prototype: NSXSpoofGuardPolicyDto;
	}

	declare const NSXSpoofGuardPolicyDto: NSXSpoofGuardPolicyDtoConstructor;

	interface NSXSpoofGuardSettingDto
	{
		readonly allowLocalIPs: boolean;
		readonly contextId: String;
		readonly domainObject: NSXBasicDomainObjectInfo;
		readonly objectId: String;
		readonly operationMode: String;
		readonly publishedBy: String;
		readonly publishedOn: java.sql.Timestamp;
		readonly publishPending: boolean;

	}

	interface NSXSpoofGuardSettingDtoConstructor {
		new(value?:any): NSXSpoofGuardSettingDto;
		readonly prototype: NSXSpoofGuardSettingDto;
	}

	declare const NSXSpoofGuardSettingDto: NSXSpoofGuardSettingDtoConstructor;

	interface NSXSpoofGuardStatus
	{

	}

	interface NSXSpoofGuardStatusConstructor {
		new(value?:any): NSXSpoofGuardStatus;
		readonly prototype: NSXSpoofGuardStatus;
	}

	declare const NSXSpoofGuardStatus: NSXSpoofGuardStatusConstructor;

	interface NSXSpoofGuardTrinityController
	{

		approveV4(connection?: NSXConnection, spoofguardobjectsdto?: NSXSpoofGuardObjectsDto, policyId?: String): void;
		createPolicyV4(connection?: NSXConnection, spoofguardpolicydto?: NSXSpoofGuardPolicyDto): String;
		deletePolicyV4(connection?: NSXConnection, policyId?: String): void;
		getPoliciesV4(connection?: NSXConnection): NSXSpoofGuardPoliciesDto;
		getPolicyV4(connection?: NSXConnection, policyId?: String): NSXSpoofGuardPolicyDto;
		listV4(connection?: NSXConnection, policyId?: String, filter?: String, list?: NSXSpoofGuardStatus): NSXSpoofGuardObjectsDto;
		publishV4(connection?: NSXConnection, policyId?: String): void;
		updatePolicyV4(connection?: NSXConnection, spoofguardpolicydto?: NSXSpoofGuardPolicyDto, policyId?: String): void;
	}

	declare const NSXSpoofGuardTrinityController: NSXSpoofGuardTrinityController;

	interface NSXSslvpnConfigBaseDto
	{
		readonly advancedConfig: NSXAdvancedConfigurationDto;
		readonly authenticationConfiguration: NSXAuthenticationConfigurationDto;
		readonly clientConfiguration: NSXClientConfigurationDto;
		readonly clientInstallPackages: NSXClientInstallPackagesDto;
		readonly enabled: boolean;
		readonly ipPools: NSXEdgeSslvpnIppoolsDto;
		readonly layoutConfiguration: NSXLayoutConfigurationDto;
		readonly logging: NSXLoggingDto;
		readonly privateNetworks: NSXPrivateNetworksDto;
		readonly template: String;
		readonly users: NSXUsersDto;
		readonly version: long;
		readonly webResources: NSXWebResourcesDto;

	}

	interface NSXSslvpnConfigBaseDtoConstructor {
		new(value?:any): NSXSslvpnConfigBaseDto;
		readonly prototype: NSXSslvpnConfigBaseDto;
	}

	declare const NSXSslvpnConfigBaseDto: NSXSslvpnConfigBaseDtoConstructor;

	interface NSXSslvpnConfigController
	{

		applySslvpnConfigurationV3(connection?: NSXConnection, sslvpnconfigdto?: NSXSslvpnConfigDto, edgeId?: String): void;
		deleteSslvpnConfigV3(connection?: NSXConnection, edgeId?: String): void;
		enableSslvpnServiceV3(connection?: NSXConnection, edgeId?: String, enableService?: boolean): void;
		getSslvpnConfigurationV3(connection?: NSXConnection, edgeId?: String): NSXSslvpnConfigDto;
	}

	declare const NSXSslvpnConfigController: NSXSslvpnConfigController;

	interface NSXSslvpnConfigDto
	{
		readonly advancedConfig: NSXAdvancedConfigurationDto;
		readonly authenticationConfiguration: NSXAuthenticationConfigurationDto;
		readonly clientConfiguration: NSXClientConfigurationDto;
		readonly clientInstallPackages: NSXClientInstallPackagesDto;
		readonly enabled: boolean;
		readonly ipPools: NSXEdgeSslvpnIppoolsDto;
		readonly layoutConfiguration: NSXLayoutConfigurationDto;
		readonly logging: NSXLoggingDto;
		readonly privateNetworks: NSXPrivateNetworksDto;
		readonly serverSettings: NSXServerSettingsDto;
		readonly template: String;
		readonly users: NSXUsersDto;
		readonly version: long;
		readonly webResources: NSXWebResourcesDto;

	}

	interface NSXSslvpnConfigDtoConstructor {
		new(value?:any): NSXSslvpnConfigDto;
		readonly prototype: NSXSslvpnConfigDto;
	}

	declare const NSXSslvpnConfigDto: NSXSslvpnConfigDtoConstructor;

	interface NSXSslvpnConfigTrinityController
	{

		applyTrinitySslvpnConfigurationV4(connection?: NSXConnection, sslvpnconfigtrinitydto?: NSXSslvpnConfigTrinityDto, edgeId?: String): void;
		deleteSslvpnServiceV4(connection?: NSXConnection, edgeId?: String): void;
		enableSslvpnServiceV4(connection?: NSXConnection, edgeId?: String, enableService?: boolean): void;
		getTrintySslvpnConfigurationV4(connection?: NSXConnection, edgeId?: String): NSXSslvpnConfigTrinityDto;
	}

	declare const NSXSslvpnConfigTrinityController: NSXSslvpnConfigTrinityController;

	interface NSXSslvpnConfigTrinityDto
	{
		readonly advancedConfig: NSXAdvancedConfigurationDto;
		readonly authenticationConfiguration: NSXAuthenticationConfigurationDto;
		readonly clientConfiguration: NSXClientConfigurationDto;
		readonly clientInstallPackages: NSXClientInstallPackagesDto;
		readonly enabled: boolean;
		readonly ipPools: NSXEdgeSslvpnIppoolsDto;
		readonly layoutConfiguration: NSXLayoutConfigurationDto;
		readonly logging: NSXLoggingDto;
		readonly privateNetworks: NSXPrivateNetworksDto;
		readonly serverSettings: NSXServerSettingsTrinityDto;
		readonly template: String;
		readonly users: NSXUsersDto;
		readonly version: long;
		readonly webResources: NSXWebResourcesDto;

	}

	interface NSXSslvpnConfigTrinityDtoConstructor {
		new(value?:any): NSXSslvpnConfigTrinityDto;
		readonly prototype: NSXSslvpnConfigTrinityDto;
	}

	declare const NSXSslvpnConfigTrinityDto: NSXSslvpnConfigTrinityDtoConstructor;

	interface NSXSSOConfigController
	{

		configureLookupServiceV2(connection?: NSXConnection, ssoconfigdto?: NSXSSOConfigDto): NSXSSOConfigStatusDto;
		getLookupServiceDetailsV2(connection?: NSXConnection): NSXSSOConfigDto;
		getLookupServiceStatusV2(connection?: NSXConnection): boolean;
		unconfigureLookupServiceV2(connection?: NSXConnection): void;
	}

	declare const NSXSSOConfigController: NSXSSOConfigController;

	interface NSXSSOConfigDto
	{
		readonly certificateThumbprint: String;
		readonly ssoAdminUsername: String;
		readonly ssoAdminUserpassword: String;
		readonly ssoLookupServiceUrl: String;
		readonly vsmSolutionName: String;

	}

	interface NSXSSOConfigDtoConstructor {
		new(value?:any): NSXSSOConfigDto;
		readonly prototype: NSXSSOConfigDto;
	}

	declare const NSXSSOConfigDto: NSXSSOConfigDtoConstructor;

	interface NSXSSOConfigStatusDto
	{
		readonly message: String;
		readonly status: boolean;

	}

	interface NSXSSOConfigStatusDtoConstructor {
		new(value?:any): NSXSSOConfigStatusDto;
		readonly prototype: NSXSSOConfigStatusDto;
	}

	declare const NSXSSOConfigStatusDto: NSXSSOConfigStatusDtoConstructor;

	interface NSXStatefulContainerDto
	{
		readonly address: java.util.Set;
		readonly description: String;
		readonly id: String;
		readonly name: String;
		readonly revision: long;
		readonly type: String;

	}

	interface NSXStatefulContainerDtoConstructor {
		new(value?:any): NSXStatefulContainerDto;
		readonly prototype: NSXStatefulContainerDto;
	}

	declare const NSXStatefulContainerDto: NSXStatefulContainerDtoConstructor;

	interface NSXStatefulContainerSetDto
	{
		readonly container: java.util.Set;

	}

	interface NSXStatefulContainerSetDtoConstructor {
		new(value?:any): NSXStatefulContainerSetDto;
		readonly prototype: NSXStatefulContainerSetDto;
	}

	declare const NSXStatefulContainerSetDto: NSXStatefulContainerSetDtoConstructor;

	interface NSXStatefulIpAddressDto
	{
		readonly addresses: java.util.Set;
		readonly containerIds: java.util.Set;
		readonly mask: int;
		readonly networkAddress: String;

	}

	interface NSXStatefulIpAddressDtoConstructor {
		new(value?:any): NSXStatefulIpAddressDto;
		readonly prototype: NSXStatefulIpAddressDto;
	}

	declare const NSXStatefulIpAddressDto: NSXStatefulIpAddressDtoConstructor;

	interface NSXStatefulIpPortDto
	{
		readonly containerIds: java.util.Set;
		readonly endPortNumber: int;
		readonly ports: java.util.Set;
		readonly startPortNumber: int;

	}

	interface NSXStatefulIpPortDtoConstructor {
		new(value?:any): NSXStatefulIpPortDto;
		readonly prototype: NSXStatefulIpPortDto;
	}

	declare const NSXStatefulIpPortDto: NSXStatefulIpPortDtoConstructor;

	interface NSXStatefulIpQualifierDto
	{
		readonly destinationAddress: NSXStatefulIpAddressDto;
		readonly destinationPort: NSXStatefulIpPortDto;
		readonly id: long;
		readonly notDestinationAddress: boolean;
		readonly notDestinationPort: boolean;
		readonly notProtocol: boolean;
		readonly notSourceAddress: boolean;
		readonly notSourcePort: boolean;
		readonly notTcpFlags: boolean;
		readonly notTcpOptions: boolean;
		readonly protocol: int;
		readonly revision: long;
		readonly sourceAddress: NSXStatefulIpAddressDto;
		readonly sourcePort: NSXStatefulIpPortDto;
		readonly tcpFlags: int;
		readonly tcpOptions: java.util.List;

	}

	interface NSXStatefulIpQualifierDtoConstructor {
		new(value?:any): NSXStatefulIpQualifierDto;
		readonly prototype: NSXStatefulIpQualifierDto;
	}

	declare const NSXStatefulIpQualifierDto: NSXStatefulIpQualifierDtoConstructor;

	interface NSXStatefulMacDto
	{
		readonly addresses: java.util.Set;
		readonly containerIds: java.util.Set;
		readonly mask: String;
		readonly rangeAddress: String;

	}

	interface NSXStatefulMacDtoConstructor {
		new(value?:any): NSXStatefulMacDto;
		readonly prototype: NSXStatefulMacDto;
	}

	declare const NSXStatefulMacDto: NSXStatefulMacDtoConstructor;

	interface NSXStatefulMacQualifierDto
	{
		readonly destinationMac: NSXStatefulMacDto;
		readonly id: long;
		readonly notDestinationMac: boolean;
		readonly notProtocol: boolean;
		readonly notSourceMac: boolean;
		readonly protocol: int;
		readonly revision: long;
		readonly sourceMac: NSXStatefulMacDto;

	}

	interface NSXStatefulMacQualifierDtoConstructor {
		new(value?:any): NSXStatefulMacQualifierDto;
		readonly prototype: NSXStatefulMacQualifierDto;
	}

	declare const NSXStatefulMacQualifierDto: NSXStatefulMacQualifierDtoConstructor;

	interface NSXStatefulPolicyDto
	{
		readonly description: String;
		readonly id: long;
		readonly name: String;
		readonly revision: long;
		readonly ruleSets: java.util.List;

	}

	interface NSXStatefulPolicyDtoConstructor {
		new(value?:any): NSXStatefulPolicyDto;
		readonly prototype: NSXStatefulPolicyDto;
	}

	declare const NSXStatefulPolicyDto: NSXStatefulPolicyDtoConstructor;

	interface NSXStatefulRuleDto
	{
		readonly action: String;
		readonly algFlags: int;
		readonly copy: boolean;
		readonly description: String;
		readonly direction: String;
		readonly enabled: boolean;
		readonly id: long;
		readonly keepStateEnabled: boolean;
		readonly log: boolean;
		readonly name: String;
		readonly protocolName: String;
		readonly qualifier: com.vmware.o11n.plugins.nsx.model.StatefulQualifierDto;
		readonly revision: long;
		readonly ruleOrder: long;

	}

	interface NSXStatefulRuleDtoConstructor {
		new(value?:any): NSXStatefulRuleDto;
		readonly prototype: NSXStatefulRuleDto;
	}

	declare const NSXStatefulRuleDto: NSXStatefulRuleDtoConstructor;

	interface NSXStatefulRuleSetDto
	{
		readonly description: String;
		readonly enabled: boolean;
		readonly id: long;
		readonly name: String;
		readonly revision: long;
		readonly rules: java.util.List;
		readonly ruleSetOrder: int;

	}

	interface NSXStatefulRuleSetDtoConstructor {
		new(value?:any): NSXStatefulRuleSetDto;
		readonly prototype: NSXStatefulRuleSetDto;
	}

	declare const NSXStatefulRuleSetDto: NSXStatefulRuleSetDtoConstructor;

	interface NSXStatefulTcpOptionDto
	{
		readonly id: long;
		readonly length: int;
		readonly revision: long;
		readonly type: int;
		readonly value: String;

	}

	interface NSXStatefulTcpOptionDtoConstructor {
		new(value?:any): NSXStatefulTcpOptionDto;
		readonly prototype: NSXStatefulTcpOptionDto;
	}

	declare const NSXStatefulTcpOptionDto: NSXStatefulTcpOptionDtoConstructor;

	interface NSXStaticBindingDto
	{
		readonly autoConfigureDNS: boolean;
		readonly bindingId: String;
		readonly defaultGateway: String;
		readonly dnsType: String;
		readonly domainName: String;
		readonly hostname: String;
		readonly ipAddress: String;
		readonly leaseTime: String;
		readonly primaryNameServer: String;
		readonly secondaryNameServer: String;
		readonly vmId: String;
		readonly vnicId: Integer;

	}

	interface NSXStaticBindingDtoConstructor {
		new(value?:any): NSXStaticBindingDto;
		readonly prototype: NSXStaticBindingDto;
	}

	declare const NSXStaticBindingDto: NSXStaticBindingDtoConstructor;

	interface NSXStaticBindingsDto
	{
		readonly staticBindings: java.util.List;

	}

	interface NSXStaticBindingsDtoConstructor {
		new(value?:any): NSXStaticBindingsDto;
		readonly prototype: NSXStaticBindingsDto;
	}

	declare const NSXStaticBindingsDto: NSXStaticBindingsDtoConstructor;

	interface NSXStaticBindingsTrinityDto
	{
		readonly staticBindings: java.util.List;

	}

	interface NSXStaticBindingsTrinityDtoConstructor {
		new(value?:any): NSXStaticBindingsTrinityDto;
		readonly prototype: NSXStaticBindingsTrinityDto;
	}

	declare const NSXStaticBindingsTrinityDto: NSXStaticBindingsTrinityDtoConstructor;

	interface NSXStaticBindingTrinityDto
	{
		readonly autoConfigureDNS: boolean;
		readonly bindingId: String;
		readonly defaultGateway: String;
		readonly dnsType: String;
		readonly domainName: String;
		readonly hostname: String;
		readonly ipAddress: String;
		readonly leaseTime: String;
		readonly macAddress: String;
		readonly primaryNameServer: String;
		readonly secondaryNameServer: String;
		readonly vmId: String;
		readonly vnicId: Integer;

	}

	interface NSXStaticBindingTrinityDtoConstructor {
		new(value?:any): NSXStaticBindingTrinityDto;
		readonly prototype: NSXStaticBindingTrinityDto;
	}

	declare const NSXStaticBindingTrinityDto: NSXStaticBindingTrinityDtoConstructor;

	interface NSXStaticRoute
	{
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly mtu: int;
		readonly network: String;
		readonly nextHop: String;
		readonly vNicIndex: String;

	}

	interface NSXStaticRouteConstructor {
		new(value?:any): NSXStaticRoute;
		readonly prototype: NSXStaticRoute;
	}

	declare const NSXStaticRoute: NSXStaticRouteConstructor;

	interface NSXStaticRouteBaseDto
	{
		readonly description: String;
		readonly mtu: Integer;
		readonly type: String;

	}

	interface NSXStaticRouteBaseDtoConstructor {
		new(value?:any): NSXStaticRouteBaseDto;
		readonly prototype: NSXStaticRouteBaseDto;
	}

	declare const NSXStaticRouteBaseDto: NSXStaticRouteBaseDtoConstructor;

	interface NSXStaticRouteDto
	{
		readonly description: String;
		readonly mtu: Integer;
		readonly network: String;
		readonly nextHop: String;
		readonly type: String;
		readonly vnic: String;

	}

	interface NSXStaticRouteDtoConstructor {
		new(value?:any): NSXStaticRouteDto;
		readonly prototype: NSXStaticRouteDto;
	}

	declare const NSXStaticRouteDto: NSXStaticRouteDtoConstructor;

	interface NSXStaticRoutes
	{
		readonly staticRoutes: NSXStaticRoute[];

	}

	interface NSXStaticRoutesConstructor {
		new(value?:any): NSXStaticRoutes;
		readonly prototype: NSXStaticRoutes;
	}

	declare const NSXStaticRoutes: NSXStaticRoutesConstructor;

	interface NSXStaticRoutesDto
	{
		readonly staticRoutes: java.util.List;

	}

	interface NSXStaticRoutesDtoConstructor {
		new(value?:any): NSXStaticRoutesDto;
		readonly prototype: NSXStaticRoutesDto;
	}

	declare const NSXStaticRoutesDto: NSXStaticRoutesDtoConstructor;

	interface NSXStaticRoutesTrinityDto
	{
		readonly staticRoutes: java.util.List;

	}

	interface NSXStaticRoutesTrinityDtoConstructor {
		new(value?:any): NSXStaticRoutesTrinityDto;
		readonly prototype: NSXStaticRoutesTrinityDto;
	}

	declare const NSXStaticRoutesTrinityDto: NSXStaticRoutesTrinityDtoConstructor;

	interface NSXStaticRoutesTrinityUIDto
	{
		readonly staticRoutes: java.util.List;

	}

	interface NSXStaticRoutesTrinityUIDtoConstructor {
		new(value?:any): NSXStaticRoutesTrinityUIDto;
		readonly prototype: NSXStaticRoutesTrinityUIDto;
	}

	declare const NSXStaticRoutesTrinityUIDto: NSXStaticRoutesTrinityUIDtoConstructor;

	interface NSXStaticRouteTrinityDto
	{
		readonly description: String;
		readonly mtu: Integer;
		readonly network: String;
		readonly nextHop: String;
		readonly type: String;
		readonly vnic: String;

	}

	interface NSXStaticRouteTrinityDtoConstructor {
		new(value?:any): NSXStaticRouteTrinityDto;
		readonly prototype: NSXStaticRouteTrinityDto;
	}

	declare const NSXStaticRouteTrinityDto: NSXStaticRouteTrinityDtoConstructor;

	interface NSXStaticRouteTrinityUIDto
	{
		readonly description: String;
		readonly mtu: Integer;
		readonly network: String;
		readonly nextHop: java.util.List;
		readonly type: String;
		readonly vnic: String;

	}

	interface NSXStaticRouteTrinityUIDtoConstructor {
		new(value?:any): NSXStaticRouteTrinityUIDto;
		readonly prototype: NSXStaticRouteTrinityUIDto;
	}

	declare const NSXStaticRouteTrinityUIDto: NSXStaticRouteTrinityUIDtoConstructor;

	interface NSXStaticRoutingConfigDto
	{
		readonly defaultRoute: NSXDefaultRouteDto;
		readonly enabled: boolean;
		readonly staticRoutes: NSXStaticRoutesDto;
		readonly template: String;
		readonly version: long;

	}

	interface NSXStaticRoutingConfigDtoConstructor {
		new(value?:any): NSXStaticRoutingConfigDto;
		readonly prototype: NSXStaticRoutingConfigDto;
	}

	declare const NSXStaticRoutingConfigDto: NSXStaticRoutingConfigDtoConstructor;

	interface NSXStaticRoutingConfigTrinityDto
	{
		readonly defaultRoute: NSXDefaultRouteTrinityDto;
		readonly staticRoutes: NSXStaticRoutesTrinityDto;

	}

	interface NSXStaticRoutingConfigTrinityDtoConstructor {
		new(value?:any): NSXStaticRoutingConfigTrinityDto;
		readonly prototype: NSXStaticRoutingConfigTrinityDto;
	}

	declare const NSXStaticRoutingConfigTrinityDto: NSXStaticRoutingConfigTrinityDtoConstructor;

	interface NSXStaticRoutingConfigTrinityUIDto
	{
		readonly defaultRoute: NSXDefaultRouteTrinityDto;
		readonly staticRoutes: NSXStaticRoutesTrinityUIDto;

	}

	interface NSXStaticRoutingConfigTrinityUIDtoConstructor {
		new(value?:any): NSXStaticRoutingConfigTrinityUIDto;
		readonly prototype: NSXStaticRoutingConfigTrinityUIDto;
	}

	declare const NSXStaticRoutingConfigTrinityUIDto: NSXStaticRoutingConfigTrinityUIDtoConstructor;

	interface NSXStaticRoutingController
	{

		appendNatRulesToExistingListV3(connection?: NSXConnection, id?: String, staticroutesdto?: NSXStaticRoutesDto): void;
		configureDefaultRouteV3(connection?: NSXConnection, id?: String, defaultroutedto?: NSXDefaultRouteDto): void;
		configureStaticRoutesV3(connection?: NSXConnection, id?: String, staticroutesdto?: NSXStaticRoutesDto): void;
		configureStaticRoutingV3(connection?: NSXConnection, id?: String, staticroutingconfigdto?: NSXStaticRoutingConfigDto): void;
		deleteDefaultRouteConfigV3(connection?: NSXConnection, id?: String): void;
		deleteStaticRoutesConfigV3(connection?: NSXConnection, id?: String): void;
		deleteStaticRoutingConfigV3(connection?: NSXConnection, id?: String): void;
		getStaticRoutingV3(connection?: NSXConnection, id?: String): NSXStaticRoutingConfigDto;
	}

	declare const NSXStaticRoutingController: NSXStaticRoutingController;

	interface NSXStats_elements_configController
	{

	}

	declare const NSXStats_elements_configController: NSXStats_elements_configController;

	interface NSXStatusDto
	{
		readonly contextId: String;
		readonly currentState: String;
		readonly failedPublishInfo: java.util.List;
		readonly generationNumber: long;

	}

	interface NSXStatusDtoConstructor {
		new(value?:any): NSXStatusDto;
		readonly prototype: NSXStatusDto;
	}

	declare const NSXStatusDto: NSXStatusDtoConstructor;

	interface NSXSubnetDto
	{
		readonly clientHandle: String;
		readonly description: String;
		readonly dnsServer1: String;
		readonly dnsServer2: String;
		readonly dnsSuffix: String;
		readonly extendedAttributes: java.util.List;
		readonly gateway: String;
		readonly ipPoolId: String;
		readonly ipRanges: java.util.List;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly prefixLength: int;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly subnetType: String;
		readonly type: NSXObjectTypeDto;
		readonly vsmUuid: String;

	}

	interface NSXSubnetDtoConstructor {
		new(value?:any): NSXSubnetDto;
		readonly prototype: NSXSubnetDto;
	}

	declare const NSXSubnetDto: NSXSubnetDtoConstructor;

	interface NSXSubnetListDto
	{
		readonly subnets: java.util.List;

	}

	interface NSXSubnetListDtoConstructor {
		new(value?:any): NSXSubnetListDto;
		readonly prototype: NSXSubnetListDto;
	}

	declare const NSXSubnetListDto: NSXSubnetListDtoConstructor;

	interface NSXSubnetsDto
	{
		readonly subnets: java.util.Set;

	}

	interface NSXSubnetsDtoConstructor {
		new(value?:any): NSXSubnetsDto;
		readonly prototype: NSXSubnetsDto;
	}

	declare const NSXSubnetsDto: NSXSubnetsDtoConstructor;

	interface NSXSyncConflictResolverOperations
	{

	}

	interface NSXSyncConflictResolverOperationsConstructor {
		new(value?:any): NSXSyncConflictResolverOperations;
		readonly prototype: NSXSyncConflictResolverOperations;
	}

	declare const NSXSyncConflictResolverOperations: NSXSyncConflictResolverOperationsConstructor;

	interface NSXSyslogConfigDto
	{
		readonly enabled: boolean;
		readonly protocol: String;
		readonly serverAddresses: NSXIpAddressesDto;
		readonly template: String;
		readonly version: long;

	}

	interface NSXSyslogConfigDtoConstructor {
		new(value?:any): NSXSyslogConfigDto;
		readonly prototype: NSXSyslogConfigDto;
	}

	declare const NSXSyslogConfigDto: NSXSyslogConfigDtoConstructor;

	interface NSXSyslogController
	{

		configSyslogV3(connection?: NSXConnection, edgeId?: String, syslogconfigdto?: NSXSyslogConfigDto): void;
		configSyslogV4V4(connection?: NSXConnection, edgeId?: String, syslogconfigdto?: NSXSyslogConfigDto): void;
		deleteSyslogConfigV3(connection?: NSXConnection, edgeId?: String): void;
		deleteSyslogConfigV4V4(connection?: NSXConnection, edgeId?: String): void;
		getSyslogConfigV3(connection?: NSXConnection, edgeId?: String): NSXSyslogConfigDto;
		getSyslogConfigV4(connection?: NSXConnection, edgeId?: String): NSXSyslogConfigDto;
	}

	declare const NSXSyslogController: NSXSyslogController;

	interface NSXSyslogServerConfigDto
	{
		readonly serverInfo: String;

	}

	interface NSXSyslogServerConfigDtoConstructor {
		new(value?:any): NSXSyslogServerConfigDto;
		readonly prototype: NSXSyslogServerConfigDto;
	}

	declare const NSXSyslogServerConfigDto: NSXSyslogServerConfigDtoConstructor;

	interface NSXSyslogServerController
	{

		deleteV2(connection?: NSXConnection): void;
		getV2(connection?: NSXConnection): NSXSyslogServerConfigDto;
		saveV2(connection?: NSXConnection, syslogserverconfigdto?: NSXSyslogServerConfigDto): void;
	}

	declare const NSXSyslogServerController: NSXSyslogServerController;

	interface NSXSystemAlarmController
	{

		getAlarmsResursivelyV2(connection?: NSXConnection, objectId?: String): NSXSystemAlarmsDto;
		resolveAlarmsV2(connection?: NSXConnection, action?: String, systemalarmsdto?: NSXSystemAlarmsDto): String;
	}

	declare const NSXSystemAlarmController: NSXSystemAlarmController;

	interface NSXSystemAlarmDto
	{
		readonly alarmBeingResolved: boolean;
		readonly alarmCode: int;
		readonly alarmId: long;
		readonly alarmMetadata: java.util.Map;
		readonly alarmSource: String;
		readonly displayName: String;
		readonly eventCode: int;
		readonly eventId: long;
		readonly eventMetadata: java.util.Map;
		readonly eventSource: String;
		readonly message: String;
		readonly messageParams: java.util.List;
		readonly module: String;
		readonly objectId: String;
		readonly reporterName: String;
		readonly reporterType: int;
		readonly resolutionAttempted: boolean;
		readonly resolvable: boolean;
		readonly severity: String;
		readonly sourceType: int;
		readonly target: NSXBasicDomainObjectInfo;
		readonly timestamp: String;

	}

	interface NSXSystemAlarmDtoConstructor {
		new(value?:any): NSXSystemAlarmDto;
		readonly prototype: NSXSystemAlarmDto;
	}

	declare const NSXSystemAlarmDto: NSXSystemAlarmDtoConstructor;

	interface NSXSystemAlarmsDto
	{
		readonly alarms: java.util.List;

	}

	interface NSXSystemAlarmsDtoConstructor {
		new(value?:any): NSXSystemAlarmsDto;
		readonly prototype: NSXSystemAlarmsDto;
	}

	declare const NSXSystemAlarmsDto: NSXSystemAlarmsDtoConstructor;

	interface NSXSystemControlConfigDto
	{
		readonly enabled: boolean;
		readonly property: java.util.List;
		readonly template: String;
		readonly version: long;

	}

	interface NSXSystemControlConfigDtoConstructor {
		new(value?:any): NSXSystemControlConfigDto;
		readonly prototype: NSXSystemControlConfigDto;
	}

	declare const NSXSystemControlConfigDto: NSXSystemControlConfigDtoConstructor;

	interface NSXSystemControlController
	{

		configV3(connection?: NSXConnection, edgeId?: String, systemcontrolconfigdto?: NSXSystemControlConfigDto): void;
		configV4V4(connection?: NSXConnection, edgeId?: String, systemcontrolconfigdto?: NSXSystemControlConfigDto): void;
	}

	declare const NSXSystemControlController: NSXSystemControlController;

	interface NSXSystemEventConfigController
	{

		getKeepAliveTimeoutIntervalV2(connection?: NSXConnection): String;
	}

	declare const NSXSystemEventConfigController: NSXSystemEventConfigController;

	interface NSXSystemEventController
	{

		getV2(connection?: NSXConnection, startIndex?: int, pageSize?: int, sortOrderAscending?: boolean, sortBy?: String): com.vmware.vshield.vsm.eventing.dto.SystemEventPage;
		publishSystemEventV2(connection?: NSXConnection, systemeventdto?: NSXSystemEventDto): String;
	}

	declare const NSXSystemEventController: NSXSystemEventController;

	interface NSXSystemEventDto
	{
		readonly displayName: String;
		readonly eventCode: int;
		readonly eventId: long;
		readonly eventMetadata: java.util.Map;
		readonly eventSource: String;
		readonly message: String;
		readonly messageParams: java.util.List;
		readonly module: String;
		readonly objectId: String;
		readonly reporterName: String;
		readonly reporterType: int;
		readonly severity: String;
		readonly sourceType: int;
		readonly timestamp: String;

	}

	interface NSXSystemEventDtoConstructor {
		new(value?:any): NSXSystemEventDto;
		readonly prototype: NSXSystemEventDto;
	}

	declare const NSXSystemEventDto: NSXSystemEventDtoConstructor;

	interface NSXSystemStats
	{
		readonly cpu_cores: long;
		readonly load_average: Double[];
		readonly mem_cache: long;
		readonly mem_total: long;
		readonly mem_used: long;
		readonly swap_total: long;
		readonly swap_used: long;

	}

	interface NSXSystemStatsConstructor {
		new(value?:any): NSXSystemStats;
		readonly prototype: NSXSystemStats;
	}

	declare const NSXSystemStats: NSXSystemStatsConstructor;

	interface NSXTableInfoDto
	{
		readonly maximumEndTime: long;
		readonly minimumStartTime: long;
		readonly totalCount: long;

	}

	interface NSXTableInfoDtoConstructor {
		new(value?:any): NSXTableInfoDto;
		readonly prototype: NSXTableInfoDto;
	}

	declare const NSXTableInfoDto: NSXTableInfoDtoConstructor;

	interface NSXTag
	{
		readonly scope: String;
		readonly tag: String;

	}

	interface NSXTagConstructor {
		new(value?:any): NSXTag;
		readonly prototype: NSXTag;
	}

	declare const NSXTag: NSXTagConstructor;

	interface NSXTagsDto
	{
		readonly tags: java.util.List;

	}

	interface NSXTagsDtoConstructor {
		new(value?:any): NSXTagsDto;
		readonly prototype: NSXTagsDto;
	}

	declare const NSXTagsDto: NSXTagsDtoConstructor;

	interface NSXTaskController
	{

		getAllJobInstancesV2(connection?: NSXConnection): NSXJobInstanceListDto;
		getJobInstancesForJobV2(connection?: NSXConnection, waitForComplete?: boolean, latest?: boolean, identifierString?: String): NSXJobInstanceListDto;
		getV2(connection?: NSXConnection, startIndex?: int, pageSize?: int, sortOrderAscending?: boolean, sortBy?: String): com.vmware.vshield.vsm.task.dao.JobInstancePage;
	}

	declare const NSXTaskController: NSXTaskController;

	interface NSXTaskDto
	{
		readonly creationTimeMillis: long;
		readonly description: String;
		readonly failurePolicy: NSXFaultPolicyDto;
		readonly id: String;
		readonly jobId: String;
		readonly name: String;
		readonly nextExecutionTime: long;
		readonly priority: int;
		readonly systemTask: boolean;
		readonly target: NSXTaskTargetDto;
		readonly taskClass: String;
		readonly taskData: java.util.Map;
		readonly timeoutMillis: long;
		readonly timeoutPolicy: NSXFaultPolicyDto;
		readonly title: String;
		readonly user: NSXUserInfoDto;
		readonly visible: boolean;

	}

	interface NSXTaskDtoConstructor {
		new(value?:any): NSXTaskDto;
		readonly prototype: NSXTaskDto;
	}

	declare const NSXTaskDto: NSXTaskDtoConstructor;

	interface NSXTaskInstanceDto
	{
		readonly endTimeMillis: long;
		readonly failureRetryCount: int;
		readonly id: String;
		readonly name: String;
		readonly startTimeMillis: long;
		readonly statusMessage: String;
		readonly taskData: java.util.Map;
		readonly taskOutput: java.util.Map;
		readonly taskStatus: String;
		readonly timeoutRetryCount: int;

	}

	interface NSXTaskInstanceDtoConstructor {
		new(value?:any): NSXTaskInstanceDto;
		readonly prototype: NSXTaskInstanceDto;
	}

	declare const NSXTaskInstanceDto: NSXTaskInstanceDtoConstructor;

	interface NSXTaskStatusDto
	{
		readonly status: String;

	}

	interface NSXTaskStatusDtoConstructor {
		new(value?:any): NSXTaskStatusDto;
		readonly prototype: NSXTaskStatusDto;
	}

	declare const NSXTaskStatusDto: NSXTaskStatusDtoConstructor;

	interface NSXTaskTargetDto
	{
		readonly name: String;
		readonly objectId: String;
		readonly type: String;

	}

	interface NSXTaskTargetDtoConstructor {
		new(value?:any): NSXTaskTargetDto;
		readonly prototype: NSXTaskTargetDto;
	}

	declare const NSXTaskTargetDto: NSXTaskTargetDtoConstructor;

	interface NSXTimeoutDto
	{
		readonly forcedTimeout: Integer;
		readonly sessionIdleTimeout: Integer;

	}

	interface NSXTimeoutDtoConstructor {
		new(value?:any): NSXTimeoutDto;
		readonly prototype: NSXTimeoutDto;
	}

	declare const NSXTimeoutDto: NSXTimeoutDtoConstructor;

	interface NSXTopicsDto
	{
		readonly topics: java.util.List;

	}

	interface NSXTopicsDtoConstructor {
		new(value?:any): NSXTopicsDto;
		readonly prototype: NSXTopicsDto;
	}

	declare const NSXTopicsDto: NSXTopicsDtoConstructor;

	interface NSXTrafficShapingPolicyDto
	{
		readonly averageBandwidth: long;
		readonly burstSize: long;
		readonly enabled: boolean;
		readonly inherited: boolean;
		readonly peakBandwidth: long;

	}

	interface NSXTrafficShapingPolicyDtoConstructor {
		new(value?:any): NSXTrafficShapingPolicyDto;
		readonly prototype: NSXTrafficShapingPolicyDto;
	}

	declare const NSXTrafficShapingPolicyDto: NSXTrafficShapingPolicyDtoConstructor;

	interface NSXTranslatedEntityDto
	{

	}

	interface NSXTranslatedEntityDtoConstructor {
		new(value?:any): NSXTranslatedEntityDto;
		readonly prototype: NSXTranslatedEntityDto;
	}

	declare const NSXTranslatedEntityDto: NSXTranslatedEntityDtoConstructor;

	interface NSXTranslationController
	{

		getIpTranslationsV2(connection?: NSXConnection, securityGroupId?: String): NSXIpNodeSetDto;
		getMacTranslationsV2(connection?: NSXConnection, securityGroupId?: String): NSXMacNodeSetDto;
		getSecurityGroupsForIPAddressesV2(connection?: NSXConnection, ipAddress?: String): NSXSecurityGroupsDto;
		getSecurityGroupsForVirtualMachineV2(connection?: NSXConnection, vmId?: String): NSXSecurityGroupsDto;
		getVmTranslationsV2(connection?: NSXConnection, securityGroupId?: String): NSXVmNodeSetDto;
		getVnicTranslationsV2(connection?: NSXConnection, securityGroupId?: String): NSXVnicNodeSetDto;
	}

	declare const NSXTranslationController: NSXTranslationController;

	interface NSXTransportController
	{

		getTransportsByImplmentationV2(connection?: NSXConnection, implType?: String): NSXTransportsDto;
		getTransportsV2(connection?: NSXConnection): NSXTransportsDto;
		getTransportV2(connection?: NSXConnection, type?: String): NSXTransportDto;
	}

	declare const NSXTransportController: NSXTransportController;

	interface NSXTransportDto
	{
		readonly revision: long;
		readonly transportAttributes: NSXAttributesDto;
		readonly type: String;

	}

	interface NSXTransportDtoConstructor {
		new(value?:any): NSXTransportDto;
		readonly prototype: NSXTransportDto;
	}

	declare const NSXTransportDto: NSXTransportDtoConstructor;

	interface NSXTransportElementDto
	{
		readonly applicationProtocol: String;
		readonly sourcePort: String;
		readonly value: String;

	}

	interface NSXTransportElementDtoConstructor {
		new(value?:any): NSXTransportElementDto;
		readonly prototype: NSXTransportElementDto;
	}

	declare const NSXTransportElementDto: NSXTransportElementDtoConstructor;

	interface NSXTransportsDto
	{
		readonly transports: java.util.Set;

	}

	interface NSXTransportsDtoConstructor {
		new(value?:any): NSXTransportsDto;
		readonly prototype: NSXTransportsDto;
	}

	declare const NSXTransportsDto: NSXTransportsDtoConstructor;

	interface NSXTrinitySpoofGuardDto
	{
		readonly approvedBy: String;
		readonly approvedIpAddress: NSXVsmSpoofguardIpaddressesDto;
		readonly approvedMacAddress: String;
		readonly approvedOn: java.sql.Timestamp;
		readonly detectedIpAddress: NSXVsmSpoofguardIpaddressesDto;
		readonly detectedMacAddress: String;
		readonly id: String;
		readonly newApprovedIpAddress: NSXVsmSpoofguardIpaddressesDto;
		readonly nicName: String;
		readonly oldApprovedIpAddress: NSXVsmSpoofguardIpaddressesDto;
		readonly portGroupId: String;
		readonly publishedBy: String;
		readonly publishedIpAddress: NSXVsmSpoofguardIpaddressesDto;
		readonly publishedMacAddress: String;
		readonly publishedOn: java.sql.Timestamp;
		readonly vmMoId: String;
		readonly vmName: String;
		readonly vnicUuid: String;

	}

	interface NSXTrinitySpoofGuardDtoConstructor {
		new(value?:any): NSXTrinitySpoofGuardDto;
		readonly prototype: NSXTrinitySpoofGuardDto;
	}

	declare const NSXTrinitySpoofGuardDto: NSXTrinitySpoofGuardDtoConstructor;

	interface NSXTrustObjectDataDto
	{
		readonly clientHandle: String;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly passphrase: String;
		readonly pemEncoding: String;
		readonly privateKey: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly type: NSXObjectTypeDto;
		readonly vsmUuid: String;

	}

	interface NSXTrustObjectDataDtoConstructor {
		new(value?:any): NSXTrustObjectDataDto;
		readonly prototype: NSXTrustObjectDataDto;
	}

	declare const NSXTrustObjectDataDto: NSXTrustObjectDataDtoConstructor;

	interface NSXTrustStoreController
	{

		addCertificateV2(connection?: NSXConnection, trustobjectdatadto?: NSXTrustObjectDataDto, scopeId?: String): NSXCertificateListDto;
		addCrlV2(connection?: NSXConnection, trustobjectdatadto?: NSXTrustObjectDataDto, scopeId?: String): NSXCrlListDto;
		deleteCertificateV2(connection?: NSXConnection, force?: boolean, certificateId?: String): void;
		deleteCsrV2(connection?: NSXConnection, force?: boolean, csrId?: String): void;
		deleteV2(connection?: NSXConnection, force?: boolean, crlId?: String): void;
		generateCsrV2(connection?: NSXConnection, csrdto?: NSXCsrDto, scopeId?: String): NSXCsrDto;
		getCertificatesV2(connection?: NSXConnection, scopeId?: String): NSXCertificateListDto;
		getCertificateV2(connection?: NSXConnection, certificateId?: String): NSXCertificateDto;
		getCrlsV2(connection?: NSXConnection, scopeId?: String): NSXCrlListDto;
		getCrlV2(connection?: NSXConnection, crlId?: String): NSXCrlDto;
		getCsrsV2(connection?: NSXConnection, scopeId?: String): NSXCsrListDto;
		getCsrV2(connection?: NSXConnection, csrId?: String): NSXCsrDto;
		importCertificateV2(connection?: NSXConnection, trustobjectdatadto?: NSXTrustObjectDataDto, csrId?: String): NSXCertificateListDto;
		selfSignCsrV2(connection?: NSXConnection, csrId?: String, noOfDays?: String): void;
		updateCrlV2(connection?: NSXConnection, crldto?: NSXCrlDto, crlId?: String): void;
	}

	declare const NSXTrustStoreController: NSXTrustStoreController;

	interface NSXTunnelConfigurationDto
	{
		readonly excludeLocalSubnets: boolean;
		readonly gatewayIp: String;

	}

	interface NSXTunnelConfigurationDtoConstructor {
		new(value?:any): NSXTunnelConfigurationDto;
		readonly prototype: NSXTunnelConfigurationDto;
	}

	declare const NSXTunnelConfigurationDto: NSXTunnelConfigurationDtoConstructor;

	interface NSXType
	{

	}

	interface NSXTypeConstructor {
		new(value?:any): NSXType;
		readonly prototype: NSXType;
	}

	declare const NSXType: NSXTypeConstructor;

	interface NSXTypedAttributeDto
	{
		readonly id: long;
		readonly key: String;
		readonly name: String;
		readonly revision: long;
		readonly supportedValues: String;
		readonly type: String;
		readonly value: String;

	}

	interface NSXTypedAttributeDtoConstructor {
		new(value?:any): NSXTypedAttributeDto;
		readonly prototype: NSXTypedAttributeDto;
	}

	declare const NSXTypedAttributeDto: NSXTypedAttributeDtoConstructor;

	interface NSXTypedAttributesDto
	{
		readonly id: long;
		readonly revision: long;
		readonly typedAttributes: java.util.List;

	}

	interface NSXTypedAttributesDtoConstructor {
		new(value?:any): NSXTypedAttributesDto;
		readonly prototype: NSXTypedAttributesDto;
	}

	declare const NSXTypedAttributesDto: NSXTypedAttributesDtoConstructor;

	interface NSXTypedAttributeTableDto
	{
		readonly description: String;
		readonly header: NSXTypedAttributesDto;
		readonly id: long;
		readonly key: String;
		readonly name: String;
		readonly revision: long;
		readonly rows: java.util.List;

	}

	interface NSXTypedAttributeTableDtoConstructor {
		new(value?:any): NSXTypedAttributeTableDto;
		readonly prototype: NSXTypedAttributeTableDto;
	}

	declare const NSXTypedAttributeTableDto: NSXTypedAttributeTableDtoConstructor;

	interface NSXUiClusterDto
	{
		readonly cluster: NSXBasicDomainObjectInfo;
		readonly eligible: boolean;
		readonly errorMessage: String;
		readonly hosts: java.util.List;
		readonly ipPool: NSXIpAddressPoolUIDto;
		readonly issueExists: boolean;
		readonly mapped: boolean;
		readonly selectedSwitches: java.util.List;
		readonly state: boolean;
		readonly switches: java.util.List;
		readonly vlanId: int;
		readonly vmknicCount: int;
		readonly vxlanVersion: String;

	}

	interface NSXUiClusterDtoConstructor {
		new(value?:any): NSXUiClusterDto;
		readonly prototype: NSXUiClusterDto;
	}

	declare const NSXUiClusterDto: NSXUiClusterDtoConstructor;

	interface NSXUiHostDto
	{
		readonly host: NSXBasicDomainObjectInfo;
		readonly status: NSXVdnHostStatusDto;
		readonly vmCount: int;
		readonly vmknics: java.util.List;

	}

	interface NSXUiHostDtoConstructor {
		new(value?:any): NSXUiHostDto;
		readonly prototype: NSXUiHostDto;
	}

	declare const NSXUiHostDto: NSXUiHostDtoConstructor;

	interface NSXUiJobResultDto
	{
		readonly exception: String;
		readonly jobId: String;
		readonly key: NSXBasicDomainObjectInfo;

	}

	interface NSXUiJobResultDtoConstructor {
		new(value?:any): NSXUiJobResultDto;
		readonly prototype: NSXUiJobResultDto;
	}

	declare const NSXUiJobResultDto: NSXUiJobResultDtoConstructor;

	interface NSXUiServiceDto
	{
		readonly appliedProfiles: java.util.List;
		readonly availableProfiles: NSXServiceProfilesDto;
		readonly availableService: NSXVsmSiServiceDto;
		readonly enabled: boolean;
		readonly vendor: String;

	}

	interface NSXUiServiceDtoConstructor {
		new(value?:any): NSXUiServiceDto;
		readonly prototype: NSXUiServiceDto;
	}

	declare const NSXUiServiceDto: NSXUiServiceDtoConstructor;

	interface NSXUiServiceInstanceDeploymentScopeDto
	{
		readonly cluster: NSXBasicDomainObjectInfo;
		readonly datastore: NSXBasicDomainObjectInfo;
		readonly id: long;
		readonly network: NSXBasicDomainObjectInfo;
		readonly revision: long;

	}

	interface NSXUiServiceInstanceDeploymentScopeDtoConstructor {
		new(value?:any): NSXUiServiceInstanceDeploymentScopeDto;
		readonly prototype: NSXUiServiceInstanceDeploymentScopeDto;
	}

	declare const NSXUiServiceInstanceDeploymentScopeDto: NSXUiServiceInstanceDeploymentScopeDtoConstructor;

	interface NSXUiServiceInstanceDto
	{
		readonly enabled: boolean;
		readonly functionalitiesCount: int;
		readonly serviceInstances: java.util.List;

	}

	interface NSXUiServiceInstanceDtoConstructor {
		new(value?:any): NSXUiServiceInstanceDto;
		readonly prototype: NSXUiServiceInstanceDto;
	}

	declare const NSXUiServiceInstanceDto: NSXUiServiceInstanceDtoConstructor;

	interface NSXUiSwitchDto
	{
		readonly defaultVmknicCount: int;
		readonly failoverUplinkPortNames: java.util.List;
		readonly mtu: int;
		readonly prepared: boolean;
		readonly promiscuousMode: boolean;
		readonly supportedTeamingPolicies: java.util.List;
		readonly switchObj: NSXBasicDomainObjectInfo;
		readonly teamingPolicy: String;
		readonly vds: boolean;

	}

	interface NSXUiSwitchDtoConstructor {
		new(value?:any): NSXUiSwitchDto;
		readonly prototype: NSXUiSwitchDto;
	}

	declare const NSXUiSwitchDto: NSXUiSwitchDtoConstructor;

	interface NSXUiTransportZoneServiceDto
	{
		readonly noOffunctionalities: Integer;
		readonly profiles: String;
		readonly serviceName: String;
		readonly status: String;
		readonly version: String;

	}

	interface NSXUiTransportZoneServiceDtoConstructor {
		new(value?:any): NSXUiTransportZoneServiceDto;
		readonly prototype: NSXUiTransportZoneServiceDto;
	}

	declare const NSXUiTransportZoneServiceDto: NSXUiTransportZoneServiceDtoConstructor;

	interface NSXUiVirtualMachineDto
	{
		readonly parentHost: NSXBasicDomainObjectInfo;
		readonly poweredOn: boolean;
		readonly virtualMachine: NSXBasicDomainObjectInfo;
		readonly vnics: java.util.List;

	}

	interface NSXUiVirtualMachineDtoConstructor {
		new(value?:any): NSXUiVirtualMachineDto;
		readonly prototype: NSXUiVirtualMachineDto;
	}

	declare const NSXUiVirtualMachineDto: NSXUiVirtualMachineDtoConstructor;

	interface NSXUiVirtualWireDto
	{
		readonly activeHosts: int;
		readonly backing: java.util.List;
		readonly clientHandle: String;
		readonly connectedVmCount: int;
		readonly controlPlaneMode: String;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly guestVlanAllowed: boolean;
		readonly multicastAddr: String;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly status: String;
		readonly tenantId: String;
		readonly totalHosts: int;
		readonly type: NSXObjectTypeDto;
		readonly vdnId: int;
		readonly vdnScope: NSXBasicDomainObjectInfo;
		readonly vdnScopeId: String;
		readonly vsmUuid: String;

	}

	interface NSXUiVirtualWireDtoConstructor {
		new(value?:any): NSXUiVirtualWireDto;
		readonly prototype: NSXUiVirtualWireDto;
	}

	declare const NSXUiVirtualWireDto: NSXUiVirtualWireDtoConstructor;

	interface NSXUiVnicDto
	{
		readonly network: NSXBasicDomainObjectInfo;
		readonly parentVirtualMachine: NSXBasicDomainObjectInfo;
		readonly vnic: NSXBasicDomainObjectInfo;

	}

	interface NSXUiVnicDtoConstructor {
		new(value?:any): NSXUiVnicDto;
		readonly prototype: NSXUiVnicDto;
	}

	declare const NSXUiVnicDto: NSXUiVnicDtoConstructor;

	interface NSXUiVxlanPropertiesDto
	{
		readonly controllerCount: int;
		readonly multicastRanges: NSXMulticastRangesDto;
		readonly segmentRanges: NSXSegmentRangesDto;

	}

	interface NSXUiVxlanPropertiesDtoConstructor {
		new(value?:any): NSXUiVxlanPropertiesDto;
		readonly prototype: NSXUiVxlanPropertiesDto;
	}

	declare const NSXUiVxlanPropertiesDto: NSXUiVxlanPropertiesDtoConstructor;

	interface NSXUpdateControllerList
	{

	}

	declare const NSXUpdateControllerList: NSXUpdateControllerList;

	interface NSXUserController
	{

		ApplyUsersV3(connection?: NSXConnection, usersdto?: NSXUsersDto, edgeId?: String): void;
		createV3(connection?: NSXConnection, userdto?: NSXUserDto, edgeId?: String): void;
		deleteAllUsersV3(connection?: NSXConnection, edgeId?: String): void;
		deleteUserV3(connection?: NSXConnection, edgeId?: String, id?: String): void;
		getAllUsersV3(connection?: NSXConnection, edgeId?: String): NSXUsersDto;
		getUserV3(connection?: NSXConnection, edgeId?: String, id?: String): NSXUserDto;
		modifyUserV3(connection?: NSXConnection, edgeId?: String, id?: String, userdto?: NSXUserDto): void;
	}

	declare const NSXUserController: NSXUserController;

	interface NSXUserDto
	{
		readonly changePassword: NSXChangePassword;
		readonly description: String;
		readonly disableUserAccount: boolean;
		readonly firstName: String;
		readonly lastName: String;
		readonly objectId: String;
		readonly password: String;
		readonly passwordNeverExpires: boolean;
		readonly userId: String;

	}

	interface NSXUserDtoConstructor {
		new(value?:any): NSXUserDto;
		readonly prototype: NSXUserDto;
	}

	declare const NSXUserDto: NSXUserDtoConstructor;

	interface NSXUserInfoDto
	{
		readonly accessControlEntry: NSXAccessControlEntryDto;
		readonly clientHandle: String;
		readonly description: String;
		readonly email: String;
		readonly extendedAttributes: java.util.List;
		readonly fullname: String;
		readonly hasGlobalObjectAccess: boolean;
		readonly isEnabled: boolean;
		readonly isGroup: boolean;
		readonly isLocal: boolean;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly password: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly securityProfile: NSXSecurityProfileDto;
		readonly type: NSXObjectTypeDto;
		readonly userId: String;
		readonly vsmUuid: String;

	}

	interface NSXUserInfoDtoConstructor {
		new(value?:any): NSXUserInfoDto;
		readonly prototype: NSXUserInfoDto;
	}

	declare const NSXUserInfoDto: NSXUserInfoDtoConstructor;

	interface NSXUserInfoListDto
	{
		readonly users: java.util.List;

	}

	interface NSXUserInfoListDtoConstructor {
		new(value?:any): NSXUserInfoListDto;
		readonly prototype: NSXUserInfoListDto;
	}

	declare const NSXUserInfoListDto: NSXUserInfoListDtoConstructor;

	interface NSXUserMgmtController
	{

		addUserRoleV2(connection?: NSXConnection, accesscontrolentrydto?: NSXAccessControlEntryDto, userId?: String, isGroup?: boolean): void;
		createLocalUserV2(connection?: NSXConnection, userinfodto?: NSXUserInfoDto): void;
		deleteLocalUserV2(connection?: NSXConnection, userId?: String): void;
		deleteUserRoleV2(connection?: NSXConnection, userId?: String): void;
		getAccessScopingObjectsV2(connection?: NSXConnection): NSXResourceListDto;
		getPasswordHintV2(connection?: NSXConnection, userId?: String): NSXSecurityProfileDto;
		getSecurityProfileV2(connection?: NSXConnection): NSXSecurityProfileDto;
		getUserInfoV2(connection?: NSXConnection, userId?: String): NSXUserInfoDto;
		getUserRoleV2(connection?: NSXConnection, userId?: String): NSXAccessControlEntryDto;
		getVsmRolesV2(connection?: NSXConnection): String[];
		getVsmUsersV2(connection?: NSXConnection): NSXUserInfoListDto;
		resetPasswordV2(connection?: NSXConnection, userId?: String, securityprofiledto?: NSXSecurityProfileDto): void;
		setUserStateV2(connection?: NSXConnection, userId?: String, value?: String): void;
		updateLocalUserInfoV2(connection?: NSXConnection, userId?: String, userinfodto?: NSXUserInfoDto): void;
		updateSecurityProfileV2(connection?: NSXConnection, securityprofiledto?: NSXSecurityProfileDto): void;
		updateUserRoleV2(connection?: NSXConnection, accesscontrolentrydto?: NSXAccessControlEntryDto, userId?: String): void;
	}

	declare const NSXUserMgmtController: NSXUserMgmtController;

	interface NSXUserMgmtPermissionDto
	{
		readonly localUserPermissions: NSXInteractionPermissionsDto;
		readonly vcUserPermissions: NSXInteractionPermissionsDto;

	}

	interface NSXUserMgmtPermissionDtoConstructor {
		new(value?:any): NSXUserMgmtPermissionDto;
		readonly prototype: NSXUserMgmtPermissionDto;
	}

	declare const NSXUserMgmtPermissionDto: NSXUserMgmtPermissionDtoConstructor;

	interface NSXUsersDto
	{
		readonly users: java.util.List;

	}

	interface NSXUsersDtoConstructor {
		new(value?:any): NSXUsersDto;
		readonly prototype: NSXUsersDto;
	}

	declare const NSXUsersDto: NSXUsersDtoConstructor;

	interface NSXUserTrinityController
	{

		ApplyUsersV4(connection?: NSXConnection, usersdto?: NSXUsersDto, edgeId?: String): void;
		createV4(connection?: NSXConnection, userdto?: NSXUserDto, edgeId?: String): void;
		deleteAllUsersV4(connection?: NSXConnection, edgeId?: String): void;
		deleteUserV4(connection?: NSXConnection, edgeId?: String, id?: String): void;
		getAllUsersV4(connection?: NSXConnection, edgeId?: String): NSXUsersDto;
		getUserV4(connection?: NSXConnection, edgeId?: String, id?: String): NSXUserDto;
		modifyUserV4(connection?: NSXConnection, edgeId?: String, id?: String, userdto?: NSXUserDto): void;
	}

	declare const NSXUserTrinityController: NSXUserTrinityController;

	interface NSXValueRange
	{
		readonly begin: long;
		readonly end: long;

	}

	interface NSXValueRangeConstructor {
		new(value?:any): NSXValueRange;
		readonly prototype: NSXValueRange;
	}

	declare const NSXValueRange: NSXValueRangeConstructor;

	interface NSXVcConfigController
	{

		createV2(connection?: NSXConnection, vcconfigdto?: NSXVcConfigDto): void;
		getVcConfigurationStatusV2(connection?: NSXConnection): NSXVcConfigStatusDto;
		getVcConfigurationV2(connection?: NSXConnection): NSXVcConfigDto;
	}

	declare const NSXVcConfigController: NSXVcConfigController;

	interface NSXVcConfigDto
	{
		readonly assignRoleToUser: boolean;
		readonly certificateThumbprint: String;
		readonly ipAddress: String;
		readonly password: String;
		readonly pluginDownloadPort: String;
		readonly pluginDownloadServer: String;
		readonly userName: String;
		readonly vcInventoryLastUpdateTime: long;

	}

	interface NSXVcConfigDtoConstructor {
		new(value?:any): NSXVcConfigDto;
		readonly prototype: NSXVcConfigDto;
	}

	declare const NSXVcConfigDto: NSXVcConfigDtoConstructor;

	interface NSXVcConfigStatusDto
	{
		readonly connected: boolean;
		readonly lastInventorySyncTime: long;

	}

	interface NSXVcConfigStatusDtoConstructor {
		new(value?:any): NSXVcConfigStatusDto;
		readonly prototype: NSXVcConfigStatusDto;
	}

	declare const NSXVcConfigStatusDto: NSXVcConfigStatusDtoConstructor;

	interface NSXVCNSDomainObject
	{
		readonly description: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: String;

	}

	interface NSXVCNSDomainObjectConstructor {
		new(value?:any): NSXVCNSDomainObject;
		readonly prototype: NSXVCNSDomainObject;
	}

	declare const NSXVCNSDomainObject: NSXVCNSDomainObjectConstructor;

	interface NSXVcUuidController
	{

		getVcUuidV2(connection?: NSXConnection): String;
	}

	declare const NSXVcUuidController: NSXVcUuidController;

	interface NSXVdnClusterDto
	{
		readonly cluster: NSXBasicDomainObjectInfo;

	}

	interface NSXVdnClusterDtoConstructor {
		new(value?:any): NSXVdnClusterDto;
		readonly prototype: NSXVdnClusterDto;
	}

	declare const NSXVdnClusterDto: NSXVdnClusterDtoConstructor;

	interface NSXVdnClusterListDto
	{
		readonly clusters: java.util.List;

	}

	interface NSXVdnClusterListDtoConstructor {
		new(value?:any): NSXVdnClusterListDto;
		readonly prototype: NSXVdnClusterListDto;
	}

	declare const NSXVdnClusterListDto: NSXVdnClusterListDtoConstructor;

	interface NSXVdnConfigController
	{

		addMulticastAddressRangeV2(connection?: NSXConnection, multicastrangedto?: NSXMulticastRangeDto): NSXMulticastRangeDto;
		addSegmentRangeV2(connection?: NSXConnection, segmentrangedto?: NSXSegmentRangeDto): NSXSegmentRangeDto;
		deleteMulticastAddressRangeV2(connection?: NSXConnection, rangeId?: int): void;
		deleteSegmentRangeV2(connection?: NSXConnection, rangeId?: int): void;
		getConsumedVxlanResourcesV2(connection?: NSXConnection, type?: String, pagesize?: int, startindex?: int): String[];
		getMulticastRangesV2(connection?: NSXConnection): NSXMulticastRangesDto;
		getMulticastRangeV2(connection?: NSXConnection, rangeId?: int): NSXMulticastRangeDto;
		getSegmentRangesV2(connection?: NSXConnection): NSXSegmentRangesDto;
		getSegmentRangeV2(connection?: NSXConnection, rangeId?: int): NSXSegmentRangeDto;
		getVxlanUdpPortV2(connection?: NSXConnection): Integer;
		setVxlanUdpPortV2(connection?: NSXConnection, port?: int): void;
		updateMulticastRangeV2(connection?: NSXConnection, rangeId?: int, multicastrangedto?: NSXMulticastRangeDto): void;
		updateSegmentRangeV2(connection?: NSXConnection, rangeId?: int, segmentrangedto?: NSXSegmentRangeDto): void;
	}

	declare const NSXVdnConfigController: NSXVdnConfigController;

	interface NSXVdnHostDto
	{
		readonly host: NSXBasicDomainObjectInfo;
		readonly status: NSXVdnHostStatusDto;
		readonly vmknics: java.util.List;

	}

	interface NSXVdnHostDtoConstructor {
		new(value?:any): NSXVdnHostDto;
		readonly prototype: NSXVdnHostDto;
	}

	declare const NSXVdnHostDto: NSXVdnHostDtoConstructor;

	interface NSXVdnHostListDto
	{
		readonly hosts: java.util.List;

	}

	interface NSXVdnHostListDtoConstructor {
		new(value?:any): NSXVdnHostListDto;
		readonly prototype: NSXVdnHostListDto;
	}

	declare const NSXVdnHostListDto: NSXVdnHostListDtoConstructor;

	interface NSXVdnHostStatusDto
	{
		readonly readiness: String;

	}

	interface NSXVdnHostStatusDtoConstructor {
		new(value?:any): NSXVdnHostStatusDto;
		readonly prototype: NSXVdnHostStatusDto;
	}

	declare const NSXVdnHostStatusDto: NSXVdnHostStatusDtoConstructor;

	interface NSXVdnInventoryController
	{

		findVMsByPatternV2(connection?: NSXConnection, pattern?: String, vw?: String): NSXUiVirtualMachineDto[];
		findVMsByVwireV2(connection?: NSXConnection, vw?: String): NSXUiVirtualMachineDto[];
		getAllClustersV2(connection?: NSXConnection): NSXUiClusterDto[];
		getAllUiWiresV2(connection?: NSXConnection, scope?: String, pagesize?: int, startindex?: int, extendedAttributes?: String): NSXDataPage;
		getClusterByDatacenterV2(connection?: NSXConnection, datacenter?: String): NSXUiClusterDto[];
		getHostByClusterV2(connection?: NSXConnection, cluster?: String): NSXVdnHostDto[];
		getHostByVdnScopeV2(connection?: NSXConnection, scope?: String): NSXVdnHostDto[];
		getHostByVwireV2(connection?: NSXConnection, vwire?: String): NSXUiHostDto[];
		reconfigureVMsV2(connection?: NSXConnection, list?: java.util.List): NSXReconfigureVMTaskResultDto;
		reconfigureVmVnicV2(connection?: NSXConnection, vnicdto?: NSXVsmInventoryVnicDto): NSXReconfigureVMTaskResultDto;
	}

	declare const NSXVdnInventoryController: NSXVdnInventoryController;

	interface NSXVdnMappingController
	{

		deleteSwitchInfoV2(connection?: NSXConnection, switchId?: String): void;
		getAllClusterMappingsV2(connection?: NSXConnection): NSXClusterMappingListDto;
		getMappingByClusterV2(connection?: NSXConnection, clusterId?: String): NSXClusterMappingDto;
		getMappingBySwitchV2(connection?: NSXConnection, switchId?: String): NSXClusterMappingListDto;
		getSwitchByIdV2(connection?: NSXConnection, switchId?: String): NSXVdsContextDto;
		getSwitchesByDatacenterV2(connection?: NSXConnection, datacenterId?: String): NSXVdsContextListDto;
		getSwitchesV2(connection?: NSXConnection): NSXVdsContextListDto;
		mapClusterSwitchV2(connection?: NSXConnection, clusterId?: String, clustermappingspecdto?: NSXClusterMappingSpecDto): String;
		setSwitchInfoV2(connection?: NSXConnection, vdscontextdto?: NSXVdsContextDto): void;
		unmapClusterSwitchV2(connection?: NSXConnection, clusterId?: String, switchId?: String): void;
		updateSwitchInfoV2(connection?: NSXConnection, vdscontextdto?: NSXVdsContextDto): void;
	}

	declare const NSXVdnMappingController: NSXVdnMappingController;

	interface NSXVdnScope
	{
		readonly clustersAsJson: String;
		readonly description: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: String;

	}

	interface NSXVdnScopeConstructor {
		new(value?:any): NSXVdnScope;
		readonly prototype: NSXVdnScope;
	}

	declare const NSXVdnScope: NSXVdnScopeConstructor;

	interface NSXVdnScopeController
	{

		createInternalWireV2(connection?: NSXConnection, id?: String, virtualwirecreatespecex?: com.vmware.vshield.vsm.vdn.dto.VirtualWireCreateSpecEx): String;
		createVdnscopeV2(connection?: NSXConnection, vdnscopedto?: NSXVdnScopeDto): String;
		createWireV2(connection?: NSXConnection, id?: String, virtualwirecreatespecdto?: NSXVirtualWireCreateSpecDto): String;
		deleteVdnscopeV2(connection?: NSXConnection, id?: String): void;
		getAllVdnscopesV2(connection?: NSXConnection): NSXVdnScopesDto;
		getAllWiresOnVdnScopeV2(connection?: NSXConnection, id?: String, pagesize?: int, startindex?: int): NSXVirtualWiresDto;
		getVdnscopeV2(connection?: NSXConnection, id?: String): NSXVdnScopeDto;
		modifyScopeV2(connection?: NSXConnection, id?: String, action?: String, vdnscopedto?: NSXVdnScopeDto): String;
		repairScopeV2(connection?: NSXConnection, id?: String, action?: String): String;
		updateControlModeV2(connection?: NSXConnection, id?: String, batchsize?: int, vdnscopedto?: NSXVdnScopeDto): String;
		updateVdnScopeAttributesV2(connection?: NSXConnection, id?: String, vdnscopedto?: NSXVdnScopeDto): void;
		updateVdnScopeV2(connection?: NSXConnection, id?: String, vdnscopedto?: NSXVdnScopeDto): String;
	}

	declare const NSXVdnScopeController: NSXVdnScopeController;

	interface NSXVdnScopeDto
	{
		readonly clientHandle: String;
		readonly clusters: NSXVdnClusterListDto;
		readonly controlPlaneMode: String;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly id: String;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly type: NSXObjectTypeDto;
		readonly virtualWireCount: int;
		readonly vsmUuid: String;

	}

	interface NSXVdnScopeDtoConstructor {
		new(value?:any): NSXVdnScopeDto;
		readonly prototype: NSXVdnScopeDto;
	}

	declare const NSXVdnScopeDto: NSXVdnScopeDtoConstructor;

	interface NSXVdnScopeInv
	{
		readonly displayName: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;

	}

	interface NSXVdnScopeInvConstructor {
		new(value?:any): NSXVdnScopeInv;
		readonly prototype: NSXVdnScopeInv;
	}

	declare const NSXVdnScopeInv: NSXVdnScopeInvConstructor;

	interface NSXVdnScopeManager
	{

		getVdnScope(connection?: NSXConnection, scopeId?: String): NSXVdnScope;
		getVdnScopes(connection?: NSXConnection): NSXVdnScope[];
	}

	declare const NSXVdnScopeManager: NSXVdnScopeManager;

	interface NSXVdnScopeOperationDto
	{
		readonly value: String;

	}

	interface NSXVdnScopeOperationDtoConstructor {
		new(value?:any): NSXVdnScopeOperationDto;
		readonly prototype: NSXVdnScopeOperationDto;
	}

	declare const NSXVdnScopeOperationDto: NSXVdnScopeOperationDtoConstructor;

	interface NSXVdnScopesDto
	{
		readonly allScopes: java.util.Set;

	}

	interface NSXVdnScopesDtoConstructor {
		new(value?:any): NSXVdnScopesDto;
		readonly prototype: NSXVdnScopesDto;
	}

	declare const NSXVdnScopesDto: NSXVdnScopesDtoConstructor;

	interface NSXVdnSegmentDto
	{
		readonly id: int;
		readonly multicastAddr: String;
		readonly tenantId: String;
		readonly ts: java.sql.Timestamp;
		readonly vdnId: int;

	}

	interface NSXVdnSegmentDtoConstructor {
		new(value?:any): NSXVdnSegmentDto;
		readonly prototype: NSXVdnSegmentDto;
	}

	declare const NSXVdnSegmentDto: NSXVdnSegmentDtoConstructor;

	interface NSXVdnVmknicDto
	{
		readonly deviceId: String;
		readonly dhcp: boolean;
		readonly ipAddress: String;
		readonly validIp: boolean;

	}

	interface NSXVdnVmknicDtoConstructor {
		new(value?:any): NSXVdnVmknicDto;
		readonly prototype: NSXVdnVmknicDto;
	}

	declare const NSXVdnVmknicDto: NSXVdnVmknicDtoConstructor;

	interface NSXVdrInterfaceController
	{

		configureEdgeInterfaceV4(connection?: NSXConnection, id?: String, index?: Integer, interfacedto?: NSXInterfaceDto): void;
		configureLIFInterfacesAsyncV4(connection?: NSXConnection, id?: String, interfacesdto?: NSXInterfacesDto): void;
		configureLIFInterfacesV4(connection?: NSXConnection, id?: String, interfacesdto?: NSXInterfacesDto): NSXInterfacesDto;
		configureMgmtInterfacesV4(connection?: NSXConnection, id?: String, mgmtinterfacedto?: NSXMgmtInterfaceDto): void;
		deleteAllEdgeInterfacesV4(connection?: NSXConnection, id?: String): void;
		deleteEdgeInterfacesV4(connection?: NSXConnection, id?: String, index?: Integer[]): void;
		deleteLIFV4(connection?: NSXConnection, id?: String, index?: Integer): void;
		getEdgeInterfacesV4(connection?: NSXConnection, id?: String): NSXInterfacesDto;
		getEdgeInterfaceV4(connection?: NSXConnection, id?: String, index?: Integer): NSXInterfaceDto;
		getMgmtInterfacesV4(connection?: NSXConnection, id?: String): NSXMgmtInterfaceDto;
	}

	declare const NSXVdrInterfaceController: NSXVdrInterfaceController;

	interface NSXVdsContextDto
	{
		readonly failoverUplinkPortNames: java.util.List;
		readonly mtu: int;
		readonly promiscuousMode: boolean;
		readonly switchObj: NSXBasicDomainObjectInfo;
		readonly teamingPolicy: String;

	}

	interface NSXVdsContextDtoConstructor {
		new(value?:any): NSXVdsContextDto;
		readonly prototype: NSXVdsContextDto;
	}

	declare const NSXVdsContextDto: NSXVdsContextDtoConstructor;

	interface NSXVdsContextListDto
	{
		readonly switches: java.util.List;

	}

	interface NSXVdsContextListDtoConstructor {
		new(value?:any): NSXVdsContextListDto;
		readonly prototype: NSXVdsContextListDto;
	}

	declare const NSXVdsContextListDto: NSXVdsContextListDtoConstructor;

	interface NSXVdsContextWithBackingDto
	{
		readonly backingStatus: String;
		readonly backingType: String;
		readonly backingValue: String;
		readonly failoverUplinkPortNames: java.util.List;
		readonly mtu: int;
		readonly promiscuousMode: boolean;
		readonly switchObj: NSXBasicDomainObjectInfo;
		readonly teamingPolicy: String;

	}

	interface NSXVdsContextWithBackingDtoConstructor {
		new(value?:any): NSXVdsContextWithBackingDto;
		readonly prototype: NSXVdsContextWithBackingDto;
	}

	declare const NSXVdsContextWithBackingDto: NSXVdsContextWithBackingDtoConstructor;

	interface NSXVendorSectionDto
	{
		readonly description: String;
		readonly id: long;
		readonly key: String;
		readonly name: String;
		readonly revision: long;
		readonly typedAttributes: NSXTypedAttributesDto;
		readonly typedAttributeTables: java.util.List;

	}

	interface NSXVendorSectionDtoConstructor {
		new(value?:any): NSXVendorSectionDto;
		readonly prototype: NSXVendorSectionDto;
	}

	declare const NSXVendorSectionDto: NSXVendorSectionDtoConstructor;

	interface NSXVendorTemplateDto
	{
		readonly description: String;
		readonly id: long;
		readonly idFromVendor: String;
		readonly name: String;
		readonly revision: long;
		readonly typedAttributes: NSXTypedAttributesDto;
		readonly typedAttributeTables: java.util.List;
		readonly vendorAttributes: NSXAttributesDto;
		readonly vendorSections: java.util.List;

	}

	interface NSXVendorTemplateDtoConstructor {
		new(value?:any): NSXVendorTemplateDto;
		readonly prototype: NSXVendorTemplateDto;
	}

	declare const NSXVendorTemplateDto: NSXVendorTemplateDtoConstructor;

	interface NSXVendorTemplatesDto
	{
		readonly vendorTemplates: java.util.Collection;

	}

	interface NSXVendorTemplatesDtoConstructor {
		new(value?:any): NSXVendorTemplatesDto;
		readonly prototype: NSXVendorTemplatesDto;
	}

	declare const NSXVendorTemplatesDto: NSXVendorTemplatesDtoConstructor;

	interface NSXVersionedDeploymentSpecDto
	{
		readonly hostVersion: String;
		readonly id: long;
		readonly ovfUrl: String;
		readonly revision: long;
		readonly vmciEnabled: boolean;

	}

	interface NSXVersionedDeploymentSpecDtoConstructor {
		new(value?:any): NSXVersionedDeploymentSpecDto;
		readonly prototype: NSXVersionedDeploymentSpecDto;
	}

	declare const NSXVersionedDeploymentSpecDto: NSXVersionedDeploymentSpecDtoConstructor;

	interface NSXViewMatchDto
	{
		readonly ipAddress: java.util.List;
		readonly ipset: java.util.List;
		readonly vnic: java.util.List;

	}

	interface NSXViewMatchDtoConstructor {
		new(value?:any): NSXViewMatchDto;
		readonly prototype: NSXViewMatchDto;
	}

	declare const NSXViewMatchDto: NSXViewMatchDtoConstructor;

	interface NSXVifController
	{

	}

	declare const NSXVifController: NSXVifController;

	interface NSXVirtualServer
	{
		readonly accelerationEnabled: boolean;
		readonly applicationProfile: NSXApplicationProfile;
		readonly applicationRules: NSXApplicationRule[];
		readonly connectionLimit: String;
		readonly connectionRateLimit: String;
		readonly defaultPool: NSXPool;
		readonly description: String;
		readonly enabled: boolean;
		readonly enableServiceInsertion: boolean;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly ipAddress: String;
		readonly name: String;
		readonly objectId: String;
		readonly poolId: String;
		readonly port: String;
		readonly protocol: String;
		readonly serviceProfileList: NSXApplicationProfile[];
		readonly virtualServerId: String;

	}

	interface NSXVirtualServerConstructor {
		new(value?:any): NSXVirtualServer;
		readonly prototype: NSXVirtualServer;
	}

	declare const NSXVirtualServer: NSXVirtualServerConstructor;

	interface NSXVirtualServerInv
	{
		readonly displayName: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;

	}

	interface NSXVirtualServerInvConstructor {
		new(value?:any): NSXVirtualServerInv;
		readonly prototype: NSXVirtualServerInv;
	}

	declare const NSXVirtualServerInv: NSXVirtualServerInvConstructor;

	interface NSXVirtualWire
	{
		readonly description: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly portGroupBackingValues: String[];
		readonly revision: String;
		readonly tenantId: String;
		readonly vdnScopeId: String;

	}

	interface NSXVirtualWireConstructor {
		new(value?:any): NSXVirtualWire;
		readonly prototype: NSXVirtualWire;
	}

	declare const NSXVirtualWire: NSXVirtualWireConstructor;

	interface NSXVirtualWireController
	{

		deleteVirtualWireV2(connection?: NSXConnection, id?: String, validate?: boolean): void;
		getAllWiresV2(connection?: NSXConnection, pagesize?: int, startindex?: int): NSXVirtualWiresDto;
		getVirtualWireV2(connection?: NSXConnection, id?: String): NSXVirtualWireDto;
		reconfigureVmVnicV2(connection?: NSXConnection, vnicdto?: NSXVsmInventoryVnicDto): NSXReconfigureVMTaskResultDto;
		updateVirtualWireV2(connection?: NSXConnection, id?: String, virtualwiredto?: NSXVirtualWireDto): void;
	}

	declare const NSXVirtualWireController: NSXVirtualWireController;

	interface NSXVirtualWireCreateSpec
	{
		readonly description: String;
		readonly name: String;
		readonly tenantId: String;

	}

	interface NSXVirtualWireCreateSpecConstructor {
		new(value?:any): NSXVirtualWireCreateSpec;
		readonly prototype: NSXVirtualWireCreateSpec;
	}

	declare const NSXVirtualWireCreateSpec: NSXVirtualWireCreateSpecConstructor;

	interface NSXVirtualWireCreateSpecDto
	{
		readonly controlPlaneMode: String;
		readonly description: String;
		readonly guestVlanAllowed: boolean;
		readonly name: String;
		readonly tenantId: String;

	}

	interface NSXVirtualWireCreateSpecDtoConstructor {
		new(value?:any): NSXVirtualWireCreateSpecDto;
		readonly prototype: NSXVirtualWireCreateSpecDto;
	}

	declare const NSXVirtualWireCreateSpecDto: NSXVirtualWireCreateSpecDtoConstructor;

	interface NSXVirtualWireDto
	{
		readonly backing: java.util.List;
		readonly clientHandle: String;
		readonly controlPlaneMode: String;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly guestVlanAllowed: boolean;
		readonly multicastAddr: String;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly tenantId: String;
		readonly type: NSXObjectTypeDto;
		readonly vdnId: int;
		readonly vdnScopeId: String;
		readonly vsmUuid: String;

	}

	interface NSXVirtualWireDtoConstructor {
		new(value?:any): NSXVirtualWireDto;
		readonly prototype: NSXVirtualWireDto;
	}

	declare const NSXVirtualWireDto: NSXVirtualWireDtoConstructor;

	interface NSXVirtualWireInv
	{
		readonly displayName: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;

	}

	interface NSXVirtualWireInvConstructor {
		new(value?:any): NSXVirtualWireInv;
		readonly prototype: NSXVirtualWireInv;
	}

	declare const NSXVirtualWireInv: NSXVirtualWireInvConstructor;

	interface NSXVirtualWireManager
	{

		createVirtualWire(connection?: NSXConnection, scopeId?: String, spec?: NSXVirtualWireCreateSpec): NSXVirtualWire;
		deleteVirtualWire(connection?: NSXConnection, virtualWireId?: String): void;
		getVirtualWire(connection?: NSXConnection, virtualWireId?: String): NSXVirtualWire;
	}

	declare const NSXVirtualWireManager: NSXVirtualWireManager;

	interface NSXVirtualWirePage
	{
		readonly displayName: String;
		readonly id: com.vmware.o11n.plugin.sdk.spring.MultipartId;
		readonly pageSize: int;
		readonly startIndex: int;
		readonly totalCount: long;

	}

	interface NSXVirtualWirePageConstructor {
		new(value?:any): NSXVirtualWirePage;
		readonly prototype: NSXVirtualWirePage;
	}

	declare const NSXVirtualWirePage: NSXVirtualWirePageConstructor;

	interface NSXVirtualWiresDto
	{
		readonly dataPage: NSXDataPage;

	}

	interface NSXVirtualWiresDtoConstructor {
		new(value?:any): NSXVirtualWiresDto;
		readonly prototype: NSXVirtualWiresDto;
	}

	declare const NSXVirtualWiresDto: NSXVirtualWiresDtoConstructor;

	interface NSXVmDto
	{
		readonly powerStatus: String;
		readonly vmId: String;
		readonly vmName: String;

	}

	interface NSXVmDtoConstructor {
		new(value?:any): NSXVmDto;
		readonly prototype: NSXVmDto;
	}

	declare const NSXVmDto: NSXVmDtoConstructor;

	interface NSXVmNodeDto
	{
		readonly vmId: String;
		readonly vmName: String;

	}

	interface NSXVmNodeDtoConstructor {
		new(value?:any): NSXVmNodeDto;
		readonly prototype: NSXVmNodeDto;
	}

	declare const NSXVmNodeDto: NSXVmNodeDtoConstructor;

	interface NSXVmNodeSetDto
	{
		readonly vmNodes: java.util.Set;

	}

	interface NSXVmNodeSetDtoConstructor {
		new(value?:any): NSXVmNodeSetDto;
		readonly prototype: NSXVmNodeSetDto;
	}

	declare const NSXVmNodeSetDto: NSXVmNodeSetDtoConstructor;

	interface NSXVmsDto
	{
		readonly clusterId: String;
		readonly clusterName: String;
		readonly datacenterId: String;
		readonly datacenterName: String;
		readonly hostId: String;
		readonly hostName: String;
		readonly vms: java.util.Set;

	}

	interface NSXVmsDtoConstructor {
		new(value?:any): NSXVmsDto;
		readonly prototype: NSXVmsDto;
	}

	declare const NSXVmsDto: NSXVmsDtoConstructor;

	interface NSXVnicDto
	{
		readonly addressGroups: NSXEdgeVnicAddressGroupsDto;
		readonly enableBridgeMode: boolean;
		readonly enableProxyArp: boolean;
		readonly enableSendRedirects: boolean;
		readonly fenceParameters: java.util.List;
		readonly index: Integer;
		readonly inShapingPolicy: NSXTrafficShapingPolicyDto;
		readonly isConnected: boolean;
		readonly label: String;
		readonly macAddresses: java.util.Set;
		readonly mtu: Integer;
		readonly name: String;
		readonly outShapingPolicy: NSXTrafficShapingPolicyDto;
		readonly portgroupId: String;
		readonly portgroupName: String;
		readonly type: String;

	}

	interface NSXVnicDtoConstructor {
		new(value?:any): NSXVnicDto;
		readonly prototype: NSXVnicDto;
	}

	declare const NSXVnicDto: NSXVnicDtoConstructor;

	interface NSXVnicNodeDto
	{
		readonly ipAddresses: java.util.List;
		readonly macAddress: String;
		readonly uuid: String;

	}

	interface NSXVnicNodeDtoConstructor {
		new(value?:any): NSXVnicNodeDto;
		readonly prototype: NSXVnicNodeDto;
	}

	declare const NSXVnicNodeDto: NSXVnicNodeDtoConstructor;

	interface NSXVnicNodeSetDto
	{
		readonly vnicNodes: java.util.Set;

	}

	interface NSXVnicNodeSetDtoConstructor {
		new(value?:any): NSXVnicNodeSetDto;
		readonly prototype: NSXVnicNodeSetDto;
	}

	declare const NSXVnicNodeSetDto: NSXVnicNodeSetDtoConstructor;

	interface NSXVnicsDto
	{
		readonly vnics: java.util.List;

	}

	interface NSXVnicsDtoConstructor {
		new(value?:any): NSXVnicsDto;
		readonly prototype: NSXVnicsDto;
	}

	declare const NSXVnicsDto: NSXVnicsDtoConstructor;

	interface NSXVnvpController
	{

		addExternalControllerReferenceV2(connection?: NSXConnection, controllerrefdto?: NSXControllerRefDto): void;
		changeControllerAPIPasswordV2(connection?: NSXConnection, controllercredentialdto?: NSXControllerCredentialDto): void;
		configControllersV2(connection?: NSXConnection, configdto?: NSXConfigDto): void;
		configureSyslogV2(connection?: NSXConnection, controllerId?: String, controllersyslogserverdto?: NSXControllerSyslogServerDto): void;
		createControllerV2(connection?: NSXConnection, controllerspecdto?: NSXControllerSpecDto): String;
		deleteControllerV2(connection?: NSXConnection, controllerId?: String, forceRemoval?: boolean): void;
		getControllerConfigsV2(connection?: NSXConnection): NSXConfigDto;
		getControllerOperationProgressListV2(connection?: NSXConnection): NSXDeployInfoListDto;
		getControllerOperationProgressV2(connection?: NSXConnection, jobId?: String): NSXDeployInfoDto;
		getControllersV2(connection?: NSXConnection): NSXControllerInfoListDto;
		getControllerTechSupportLogsV2(connection?: NSXConnection, controllerId?: String): void;
		getDeployInfoForControllersV2(connection?: NSXConnection, status?: String): NSXControllerDeploymentInfoListDto;
		getSyslogV2(connection?: NSXConnection, controllerId?: String): NSXControllerSyslogServerDto;
		removeExternalControllerReferenceV2(connection?: NSXConnection): void;
		syncHostV2(connection?: NSXConnection, moid?: String, action?: String): void;
		unconfigureSyslogV2(connection?: NSXConnection, controllerId?: String): void;
	}

	declare const NSXVnvpController: NSXVnvpController;

	interface NSXVshieldAppConfigurationDto
	{
		readonly consolidatedConfiguration: java.util.List;
		readonly datacenterState: NSXDatacenterStateDto;
		readonly excludeListConfigurationDto: NSXExcludeListConfigurationDto;
		readonly failSafeConfiguration: NSXFailSafeConfiguration;
		readonly firewallConfiguration: NSXFirewallConfigurationDto;
		readonly firewallConfigurationHistoryList: NSXFirewallConfigHistoryInfoListDto;
		readonly protocolsList: NSXProtocolListDto;
		readonly protocolTypes: java.util.List;
		readonly status: NSXStatusDto;

	}

	interface NSXVshieldAppConfigurationDtoConstructor {
		new(value?:any): NSXVshieldAppConfigurationDto;
		readonly prototype: NSXVshieldAppConfigurationDto;
	}

	declare const NSXVshieldAppConfigurationDto: NSXVshieldAppConfigurationDtoConstructor;

	interface NSXVshieldAppGlobalController
	{

	}

	declare const NSXVshieldAppGlobalController: NSXVshieldAppGlobalController;

	interface NSXVShieldBaseRestController
	{

	}

	declare const NSXVShieldBaseRestController: NSXVShieldBaseRestController;

	interface NSXVsipioctlDto
	{
		readonly addrsets: String;
		readonly command: String;
		readonly filterId: String;
		readonly hostId: String;
		readonly ipaddr: String;
		readonly ruleId: int;
		readonly stats: String;
		readonly subCommand: String;
		readonly vnicId: String;

	}

	interface NSXVsipioctlDtoConstructor {
		new(value?:any): NSXVsipioctlDto;
		readonly prototype: NSXVsipioctlDto;
	}

	declare const NSXVsipioctlDto: NSXVsipioctlDtoConstructor;

	interface NSXVsmAgentController
	{

		getAgentInfoV2(connection?: NSXConnection, id?: String): NSXAgentDto;
		getAgentsForDeploymentUnitV2(connection?: NSXConnection, id?: String): NSXAgentsDto;
		getAgentsOnHostV2(connection?: NSXConnection, id?: String): NSXAgentsDto;
		getStatusV2(connection?: NSXConnection, id?: String): NSXAgentHealthStatusDto;
		setStatusV2(connection?: NSXConnection, id?: String, agenthealthstatusdto?: NSXAgentHealthStatusDto): void;
	}

	declare const NSXVsmAgentController: NSXVsmAgentController;

	interface NSXVsmApplicationDto
	{
		readonly clientHandle: String;
		readonly description: String;
		readonly element: NSXTransportElementDto;
		readonly extendedAttributes: java.util.List;
		readonly inheritanceAllowed: boolean;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly type: NSXObjectTypeDto;
		readonly vsmUuid: String;

	}

	interface NSXVsmApplicationDtoConstructor {
		new(value?:any): NSXVsmApplicationDto;
		readonly prototype: NSXVsmApplicationDto;
	}

	declare const NSXVsmApplicationDto: NSXVsmApplicationDtoConstructor;

	interface NSXVsmContainerDto
	{
		readonly clientHandle: String;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly inheritanceAllowed: boolean;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly type: NSXObjectTypeDto;
		readonly vsmUuid: String;

	}

	interface NSXVsmContainerDtoConstructor {
		new(value?:any): NSXVsmContainerDto;
		readonly prototype: NSXVsmContainerDto;
	}

	declare const NSXVsmContainerDto: NSXVsmContainerDtoConstructor;

	interface NSXVsmDebugController
	{

		executeBeanShellScriptV2(connection?: NSXConnection, string?: String): Object;
		generateThreadDumpV2(connection?: NSXConnection): String;
		setLegacyLogLevelV2(connection?: NSXConnection, context?: String, level?: String, persist?: boolean): String;
		setLogLevelV2(connection?: NSXConnection, context?: String, level?: String, persist?: boolean): String;
	}

	declare const NSXVsmDebugController: NSXVsmDebugController;

	interface NSXVsmInventoryVnicDto
	{
		readonly clientHandle: String;
		readonly description: String;
		readonly deviceKey: String;
		readonly extendedAttributes: java.util.List;
		readonly label: String;
		readonly macAddress: String;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly portgroupId: String;
		readonly portKey: String;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly type: NSXObjectTypeDto;
		readonly vnicUuid: String;
		readonly vsmUuid: String;

	}

	interface NSXVsmInventoryVnicDtoConstructor {
		new(value?:any): NSXVsmInventoryVnicDto;
		readonly prototype: NSXVsmInventoryVnicDto;
	}

	declare const NSXVsmInventoryVnicDto: NSXVsmInventoryVnicDtoConstructor;

	interface NSXVsmKeyvalueDto
	{
		readonly key: String;
		readonly value: String;

	}

	interface NSXVsmKeyvalueDtoConstructor {
		new(value?:any): NSXVsmKeyvalueDto;
		readonly prototype: NSXVsmKeyvalueDto;
	}

	declare const NSXVsmKeyvalueDto: NSXVsmKeyvalueDtoConstructor;

	interface NSXVsmNwfabricFeatureconfigDto
	{
		readonly featureId: String;
		readonly featureVersion: String;
		readonly resourceConfigs: java.util.List;

	}

	interface NSXVsmNwfabricFeatureconfigDtoConstructor {
		new(value?:any): NSXVsmNwfabricFeatureconfigDto;
		readonly prototype: NSXVsmNwfabricFeatureconfigDto;
	}

	declare const NSXVsmNwfabricFeatureconfigDto: NSXVsmNwfabricFeatureconfigDtoConstructor;

	interface NSXVsmNwfabricFeaturestatusDto
	{
		readonly enabled: boolean;
		readonly featureId: String;
		readonly featureVersion: String;
		readonly installed: boolean;
		readonly message: String;
		readonly status: String;
		readonly updateAvailable: boolean;

	}

	interface NSXVsmNwfabricFeaturestatusDtoConstructor {
		new(value?:any): NSXVsmNwfabricFeaturestatusDto;
		readonly prototype: NSXVsmNwfabricFeaturestatusDto;
	}

	declare const NSXVsmNwfabricFeaturestatusDto: NSXVsmNwfabricFeaturestatusDtoConstructor;

	interface NSXVsmRestoreInfoController
	{

	}

	declare const NSXVsmRestoreInfoController: NSXVsmRestoreInfoController;

	interface NSXVsmSiServiceDto
	{
		readonly category: String;
		readonly clientHandle: String;
		readonly description: String;
		readonly extendedAttributes: java.util.List;
		readonly functionalities: java.util.List;
		readonly implementations: java.util.List;
		readonly internalService: boolean;
		readonly name: String;
		readonly objectId: String;
		readonly objectTypeName: String;
		readonly precedence: int;
		readonly revision: long;
		readonly scope: NSXScopeInfoDto;
		readonly serviceAttributes: NSXAttributesDto;
		readonly serviceInstances: java.util.List;
		readonly serviceInstanceTemplates: java.util.List;
		readonly serviceManager: NSXBasicDomainObjectInfo;
		readonly state: String;
		readonly status: String;
		readonly transports: java.util.List;
		readonly type: NSXObjectTypeDto;
		readonly usedBy: java.util.Set;
		readonly vendorTemplates: java.util.List;
		readonly version: String;
		readonly vsmUuid: String;

	}

	interface NSXVsmSiServiceDtoConstructor {
		new(value?:any): NSXVsmSiServiceDto;
		readonly prototype: NSXVsmSiServiceDto;
	}

	declare const NSXVsmSiServiceDto: NSXVsmSiServiceDtoConstructor;

	interface NSXVsmSpoofguardIpaddressesDto
	{
		readonly ipAddresses: java.util.Set;

	}

	interface NSXVsmSpoofguardIpaddressesDtoConstructor {
		new(value?:any): NSXVsmSpoofguardIpaddressesDto;
		readonly prototype: NSXVsmSpoofguardIpaddressesDto;
	}

	declare const NSXVsmSpoofguardIpaddressesDto: NSXVsmSpoofguardIpaddressesDtoConstructor;

	interface NSXVsmSpoofguardObjectinfoDto
	{
		readonly id: String;
		readonly name: String;
		readonly type: String;

	}

	interface NSXVsmSpoofguardObjectinfoDtoConstructor {
		new(value?:any): NSXVsmSpoofguardObjectinfoDto;
		readonly prototype: NSXVsmSpoofguardObjectinfoDto;
	}

	declare const NSXVsmSpoofguardObjectinfoDto: NSXVsmSpoofguardObjectinfoDtoConstructor;

	interface NSXVsmVdnFeatureconfigDto
	{
		readonly ipDiscoveryConfig: NSXIPDiscoveryConfigDto;
		readonly macLearningConfig: NSXMacLearningConfigDto;

	}

	interface NSXVsmVdnFeatureconfigDtoConstructor {
		new(value?:any): NSXVsmVdnFeatureconfigDto;
		readonly prototype: NSXVsmVdnFeatureconfigDto;
	}

	declare const NSXVsmVdnFeatureconfigDto: NSXVsmVdnFeatureconfigDtoConstructor;

	interface NSXVsmVdnNvpcontrollerModelControllerinfo
	{

	}

	declare const NSXVsmVdnNvpcontrollerModelControllerinfo: NSXVsmVdnNvpcontrollerModelControllerinfo;

	interface NSXWebResourceController
	{

		addWebResourceV3(connection?: NSXConnection, webresourcedto?: NSXWebResourceDto, edgeId?: String): void;
		applyWebResourcesV3(connection?: NSXConnection, webresourcesdto?: NSXWebResourcesDto, edgeId?: String): void;
		deleteAllWebResourcesV3(connection?: NSXConnection, edgeId?: String): void;
		getAllWebResourcesV3(connection?: NSXConnection, edgeId?: String): NSXWebResourcesDto;
		getWebResourceV3(connection?: NSXConnection, edgeId?: String, id?: String): NSXWebResourceDto;
		modifyWebResourceV3(connection?: NSXConnection, edgeId?: String, id?: String, webresourcedto?: NSXWebResourceDto): void;
		removeWebResourceV3(connection?: NSXConnection, edgeId?: String, id?: String): void;
	}

	declare const NSXWebResourceController: NSXWebResourceController;

	interface NSXWebResourceDto
	{
		readonly description: String;
		readonly enabled: boolean;
		readonly methodInfo: NSXMethodDto;
		readonly name: String;
		readonly objectId: String;
		readonly url: String;

	}

	interface NSXWebResourceDtoConstructor {
		new(value?:any): NSXWebResourceDto;
		readonly prototype: NSXWebResourceDto;
	}

	declare const NSXWebResourceDto: NSXWebResourceDtoConstructor;

	interface NSXWebResourcesDto
	{
		readonly webResources: java.util.List;

	}

	interface NSXWebResourcesDtoConstructor {
		new(value?:any): NSXWebResourcesDto;
		readonly prototype: NSXWebResourcesDto;
	}

	declare const NSXWebResourcesDto: NSXWebResourcesDtoConstructor;

	interface NSXWebResourceTrinityController
	{

		addWebResourceV4(connection?: NSXConnection, webresourcedto?: NSXWebResourceDto, edgeId?: String): void;
		applyWebResourcesV4(connection?: NSXConnection, webresourcesdto?: NSXWebResourcesDto, edgeId?: String): void;
		deleteAllWebResourcesV4(connection?: NSXConnection, edgeId?: String): void;
		getAllWebResourcesV4(connection?: NSXConnection, edgeId?: String): NSXWebResourcesDto;
		getWebResourceV4(connection?: NSXConnection, edgeId?: String, id?: String): NSXWebResourceDto;
		modifyWebResourceV4(connection?: NSXConnection, edgeId?: String, id?: String, webresourcedto?: NSXWebResourceDto): void;
		removeWebResourceV4(connection?: NSXConnection, edgeId?: String, id?: String): void;
	}

	declare const NSXWebResourceTrinityController: NSXWebResourceTrinityController;

	interface NSXX509CertificateDto
	{
		readonly dsaPublicKeyG: String;
		readonly dsaPublicKeyP: String;
		readonly dsaPublicKeyQ: String;
		readonly dsaPublicKeyY: String;
		readonly isCa: boolean;
		readonly issuer: String;
		readonly issuerCn: String;
		readonly isValid: boolean;
		readonly md5Hash: String;
		readonly notAfter: String;
		readonly notBefore: String;
		readonly publicKeyAlgo: String;
		readonly publicKeyLength: String;
		readonly rsaPublicKeyExponent: String;
		readonly rsaPublicKeyModulus: String;
		readonly serialNumber: String;
		readonly sha1Hash: String;
		readonly signature: String;
		readonly signatureAlgo: String;
		readonly subject: String;
		readonly subjectCn: String;
		readonly version: String;

	}

	interface NSXX509CertificateDtoConstructor {
		new(value?:any): NSXX509CertificateDto;
		readonly prototype: NSXX509CertificateDto;
	}

	declare const NSXX509CertificateDto: NSXX509CertificateDtoConstructor;

	interface NSXX509CrlDto
	{
		readonly issuer: String;
		readonly nextUpdate: String;
		readonly version: String;
		readonly x509CrlEntries: java.util.List;

	}

	interface NSXX509CrlDtoConstructor {
		new(value?:any): NSXX509CrlDto;
		readonly prototype: NSXX509CrlDto;
	}

	declare const NSXX509CrlDto: NSXX509CrlDtoConstructor;

	interface NSXX509CrlEntryDto
	{
		readonly revocationDate: String;
		readonly serialNumber: String;

	}

	interface NSXX509CrlEntryDtoConstructor {
		new(value?:any): NSXX509CrlEntryDto;
		readonly prototype: NSXX509CrlEntryDto;
	}

	declare const NSXX509CrlEntryDto: NSXX509CrlEntryDtoConstructor;

	interface NSXXvsController
	{

		configNetworkFeaturesV2(connection?: NSXConnection, networkRef?: String, featureconfigdto?: NSXVsmVdnFeatureconfigDto): void;
		createNetworkV2(connection?: NSXConnection, switchRef?: String, networkspecdto?: NSXNetworkSpecDto): String;
		deleteNetworkV2(connection?: NSXConnection, switchRef?: String, networkRef?: String): void;
		getAllXvsDriversV2(connection?: NSXConnection): NSXXvsDriverDto[];
		getNetworkFeaturesV2(connection?: NSXConnection, networkRef?: String): NSXVsmVdnFeatureconfigDto;
		testV2(connection?: NSXConnection): String;
	}

	declare const NSXXvsController: NSXXvsController;

	interface NSXXvsDriverDto
	{
		readonly name: String;
		readonly supportedSwitchType: String;

	}

	interface NSXXvsDriverDtoConstructor {
		new(value?:any): NSXXvsDriverDto;
		readonly prototype: NSXXvsDriverDto;
	}

	declare const NSXXvsDriverDto: NSXXvsDriverDtoConstructor;

	interface NSXZoneController
	{

	}

	declare const NSXZoneController: NSXZoneController;

declare module org.springframework.http
{
	export interface ResponseEntity
	{

	}


}
declare module org.springframework.web.multipart
{
	export interface MultipartFile
	{

	}


}
	interface short
	{

	}

	declare const short: short;

    
    // Finder objects.
declare namespace NSX {
	interface AccessControlEntryDto extends NSXAccessControlEntryDto
	{
		readonly resources: any;
		readonly role: any;

	}

	interface AccessControlEntryDtoConstructor {
		new(value?:any): AccessControlEntryDto;
		readonly prototype: AccessControlEntryDto;
	}

	const AccessControlEntryDto: AccessControlEntryDtoConstructor;

	interface AccountDto extends NSXAccountDto
	{
		readonly name: any;
		readonly password: any;
		readonly tags: any;

	}

	interface AccountDtoConstructor {
		new(value?:any): AccountDto;
		readonly prototype: AccountDto;
	}

	const AccountDto: AccountDtoConstructor;

	interface AccountLockoutPolicyDto extends NSXAccountLockoutPolicyDto
	{
		readonly lockoutDuration: any;
		readonly retryCount: any;
		readonly retryDuration: any;

	}

	interface AccountLockoutPolicyDtoConstructor {
		new(value?:any): AccountLockoutPolicyDto;
		readonly prototype: AccountLockoutPolicyDto;
	}

	const AccountLockoutPolicyDto: AccountLockoutPolicyDtoConstructor;

	interface AccountsDto extends NSXAccountsDto
	{
		readonly accounts: any;

	}

	interface AccountsDtoConstructor {
		new(value?:any): AccountsDto;
		readonly prototype: AccountsDto;
	}

	const AccountsDto: AccountsDtoConstructor;

	interface ACLRule extends NSXACLRule
	{
		readonly action: any;
		readonly destination_ip_prefix: any;
		readonly destination_mac_address: any;
		readonly destination_port_range_max: any;
		readonly destination_port_range_min: any;
		readonly ethertype: any;
		readonly icmp_protocol_code: any;
		readonly icmp_protocol_type: any;
		readonly protocol: any;
		readonly rule_number: any;
		readonly source_ip_prefix: any;
		readonly source_mac_address: any;
		readonly source_port_range_max: any;
		readonly source_port_range_min: any;

	}

	interface ACLRuleConstructor {
		new(value?:any): ACLRule;
		readonly prototype: ACLRule;
	}

	const ACLRule: ACLRuleConstructor;

	interface ActiveSessionDto extends NSXActiveSessionDto
	{
		readonly clientExternalNatIp: any;
		readonly clientExternalNatPort: any;
		clientHandle: any;
		readonly clientInternalIp: any;
		readonly clientVirtualIP: any;
		description: any;
		extendedAttributes: any;
		readonly idleTime: any;
		inheritanceAllowed: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		scope: any;
		readonly sessionId: any;
		readonly sessionType: any;
		readonly startTime: any;
		readonly totalActiveConnections: any;
		readonly totalConnections: any;
		readonly totalNonTcpBytesReceived: any;
		readonly totalNonTcpBytesSent: any;
		readonly totalTcpBytesReceived: any;
		readonly totalTcpBytesSent: any;
		type: any;
		readonly upTime: any;
		readonly userId: any;
		vsmUuid: any;

	}

	interface ActiveSessionDtoConstructor {
		new(value?:any): ActiveSessionDto;
		readonly prototype: ActiveSessionDto;
	}

	const ActiveSessionDto: ActiveSessionDtoConstructor;

	interface ActiveSessionsDto extends NSXActiveSessionsDto
	{
		readonly activeSessions: any;

	}

	interface ActiveSessionsDtoConstructor {
		new(value?:any): ActiveSessionsDto;
		readonly prototype: ActiveSessionsDto;
	}

	const ActiveSessionsDto: ActiveSessionsDtoConstructor;

	interface AdAuthServerDto extends NSXAdAuthServerDto
	{
		authServerType: any;
		readonly bindDomainName: any;
		readonly bindPassword: any;
		enabled: any;
		readonly enableSsl: any;
		readonly ip: any;
		isSecondaryAuthServer: any;
		readonly loginAttributeName: any;
		objectId: any;
		order: any;
		readonly port: any;
		readonly searchBase: any;
		readonly searchFilter: any;
		terminateSessionOnAuthFails: any;
		readonly timeOut: any;

	}

	interface AdAuthServerDtoConstructor {
		new(value?:any): AdAuthServerDto;
		readonly prototype: AdAuthServerDto;
	}

	const AdAuthServerDto: AdAuthServerDtoConstructor;

	interface AddressDto extends NSXAddressDto
	{
		readonly containerId: any;
		readonly exclude: any;
		readonly ipAddress: any;
		readonly macAddress: any;

	}

	interface AddressDtoConstructor {
		new(value?:any): AddressDto;
		readonly prototype: AddressDto;
	}

	const AddressDto: AddressDtoConstructor;

	interface AddressGroup extends NSXAddressGroup
	{
		readonly displayName: any;
		readonly id: any;
		readonly prefixLength: any;
		readonly primaryAddress: any;
		readonly secondaryAddresses: any;
		readonly subnetMask: any;

	}

	interface AddressGroupConstructor {
		new(value?:any): AddressGroup;
		readonly prototype: AddressGroup;
	}

	const AddressGroup: AddressGroupConstructor;

	interface AddressGwemDto extends NSXAddressGwemDto
	{
		readonly address: any;
		readonly op: any;

	}

	interface AddressGwemDtoConstructor {
		new(value?:any): AddressGwemDto;
		readonly prototype: AddressGwemDto;
	}

	const AddressGwemDto: AddressGwemDtoConstructor;

	interface AddressTrinityDto extends NSXAddressTrinityDto
	{
		readonly groupingObjectId: any;
		readonly ipAddress: any;
		readonly vnicGroupId: any;

	}

	interface AddressTrinityDtoConstructor {
		new(value?:any): AddressTrinityDto;
		readonly prototype: AddressTrinityDto;
	}

	const AddressTrinityDto: AddressTrinityDtoConstructor;

	interface AdvancedConfigurationDto extends NSXAdvancedConfigurationDto
	{
		readonly clientNotification: any;
		readonly enableCompression: any;
		readonly enableLogging: any;
		readonly enablePublicUrlAccess: any;
		readonly forceVirtualKeyboard: any;
		readonly preventMultipleLogon: any;
		readonly randomizeVirtualkeys: any;
		readonly timeout: any;

	}

	interface AdvancedConfigurationDtoConstructor {
		new(value?:any): AdvancedConfigurationDto;
		readonly prototype: AdvancedConfigurationDto;
	}

	const AdvancedConfigurationDto: AdvancedConfigurationDtoConstructor;

	interface AgencyInfoDto extends NSXAgencyInfoDto
	{
		readonly agencyId: any;
		readonly goalState: any;
		readonly status: any;

	}

	interface AgencyInfoDtoConstructor {
		new(value?:any): AgencyInfoDto;
		readonly prototype: AgencyInfoDto;
	}

	const AgencyInfoDto: AgencyInfoDtoConstructor;

	interface AgentDto extends NSXAgentDto
	{
		readonly agentId: any;
		readonly agentName: any;
		readonly allocatedIpAddress: any;
		readonly host: any;
		readonly hostInfo: any;
		readonly initialData: any;
		readonly operationalStatus: any;
		readonly progressStatus: any;
		readonly serviceId: any;
		readonly serviceName: any;
		readonly serviceStatus: any;
		readonly vmId: any;

	}

	interface AgentDtoConstructor {
		new(value?:any): AgentDto;
		readonly prototype: AgentDto;
	}

	const AgentDto: AgentDtoConstructor;

	interface AgentHealthStatusDto extends NSXAgentHealthStatusDto
	{
		readonly errorDescription: any;
		readonly errorId: any;
		readonly status: any;

	}

	interface AgentHealthStatusDtoConstructor {
		new(value?:any): AgentHealthStatusDto;
		readonly prototype: AgentHealthStatusDto;
	}

	const AgentHealthStatusDto: AgentHealthStatusDtoConstructor;

	interface AgentRuntimeInfoDto extends NSXAgentRuntimeInfoDto
	{
		readonly folder: any;
		readonly host: any;
		readonly installedBulletins: any;
		readonly receivingHearBeat: any;
		readonly resourcePool: any;
		readonly status: any;
		readonly vm: any;
		readonly vmIp: any;
		readonly vmName: any;
		readonly vmPowerState: any;

	}

	interface AgentRuntimeInfoDtoConstructor {
		new(value?:any): AgentRuntimeInfoDto;
		readonly prototype: AgentRuntimeInfoDto;
	}

	const AgentRuntimeInfoDto: AgentRuntimeInfoDtoConstructor;

	interface AgentRuntimeInfosDto extends NSXAgentRuntimeInfosDto
	{
		readonly agentRuntimeInfos: any;

	}

	interface AgentRuntimeInfosDtoConstructor {
		new(value?:any): AgentRuntimeInfosDto;
		readonly prototype: AgentRuntimeInfosDto;
	}

	const AgentRuntimeInfosDto: AgentRuntimeInfosDtoConstructor;

	interface AgentsDto extends NSXAgentsDto
	{
		readonly agents: any;

	}

	interface AgentsDtoConstructor {
		new(value?:any): AgentsDto;
		readonly prototype: AgentsDto;
	}

	const AgentsDto: AgentsDtoConstructor;

	interface AllocatedIpAddressDto extends NSXAllocatedIpAddressDto
	{
		readonly allocationNote: any;
		readonly dnsServer1: any;
		readonly dnsServer2: any;
		readonly dnsSuffix: any;
		readonly gateway: any;
		readonly id: any;
		readonly ipAddress: any;
		readonly prefixLength: any;
		readonly subnetId: any;

	}

	interface AllocatedIpAddressDtoConstructor {
		new(value?:any): AllocatedIpAddressDto;
		readonly prototype: AllocatedIpAddressDto;
	}

	const AllocatedIpAddressDto: AllocatedIpAddressDtoConstructor;

	interface AllocatedIpAddressesDto extends NSXAllocatedIpAddressesDto
	{
		readonly allocatedIpAddresses: any;

	}

	interface AllocatedIpAddressesDtoConstructor {
		new(value?:any): AllocatedIpAddressesDto;
		readonly prototype: AllocatedIpAddressesDto;
	}

	const AllocatedIpAddressesDto: AllocatedIpAddressesDtoConstructor;

	interface AllocationMode extends NSXAllocationMode
	{
		readonly value: any;

	}

	interface AllocationModeConstructor {
		new(value?:any): AllocationMode;
		readonly prototype: AllocationMode;
	}

	const AllocationMode: AllocationModeConstructor;

	interface ApiRequestCounts extends NSXApiRequestCounts
	{
		readonly failed: any;
		readonly failed_cumulative_ms: any;
		readonly succeeded: any;
		readonly succeeded_cumulative_ms: any;

	}

	interface ApiRequestCountsConstructor {
		new(value?:any): ApiRequestCounts;
		readonly prototype: ApiRequestCounts;
	}

	const ApiRequestCounts: ApiRequestCountsConstructor;

	interface ApiRequestSummary extends NSXApiRequestSummary
	{
		readonly delete_requests: any;
		readonly end_epoch_ms: any;
		readonly get_requests: any;
		readonly post_requests: any;
		readonly put_requests: any;
		readonly start_epoch_ms: any;

	}

	interface ApiRequestSummaryConstructor {
		new(value?:any): ApiRequestSummary;
		readonly prototype: ApiRequestSummary;
	}

	const ApiRequestSummary: ApiRequestSummaryConstructor;

	interface AppFirewallUiFailedpublishinfoDto extends NSXAppFirewallUiFailedpublishinfoDto
	{
		readonly applianceHostInfo: any;
		readonly errorDescription: any;
		readonly timestamp: any;

	}

	interface AppFirewallUiFailedpublishinfoDtoConstructor {
		new(value?:any): AppFirewallUiFailedpublishinfoDto;
		readonly prototype: AppFirewallUiFailedpublishinfoDto;
	}

	const AppFirewallUiFailedpublishinfoDto: AppFirewallUiFailedpublishinfoDtoConstructor;

	interface AppFirewallUiFirewallconfighistoryinfoDto extends NSXAppFirewallUiFirewallconfighistoryinfoDto
	{
		readonly configId: any;
		readonly status: any;
		readonly timestamp: any;
		readonly userId: any;

	}

	interface AppFirewallUiFirewallconfighistoryinfoDtoConstructor {
		new(value?:any): AppFirewallUiFirewallconfighistoryinfoDto;
		readonly prototype: AppFirewallUiFirewallconfighistoryinfoDto;
	}

	const AppFirewallUiFirewallconfighistoryinfoDto: AppFirewallUiFirewallconfighistoryinfoDtoConstructor;

	interface AppFirewallUiFirewallconfigurationDto extends NSXAppFirewallUiFirewallconfigurationDto
	{
		readonly generationNumber: any;
		readonly layer2Rules: any;
		readonly layer3Rules: any;
		readonly scope: any;
		readonly status: any;

	}

	interface AppFirewallUiFirewallconfigurationDtoConstructor {
		new(value?:any): AppFirewallUiFirewallconfigurationDto;
		readonly prototype: AppFirewallUiFirewallconfigurationDto;
	}

	const AppFirewallUiFirewallconfigurationDto: AppFirewallUiFirewallconfigurationDtoConstructor;

	interface AppFirewallUiFirewallruleDto extends NSXAppFirewallUiFirewallruleDto
	{
		readonly action: any;
		readonly comments: any;
		readonly destinationElements: any;
		readonly enabled: any;
		readonly excludeDestination: any;
		readonly excludeSource: any;
		readonly id: any;
		readonly invalidDestination: any;
		readonly invalidService: any;
		readonly invalidSource: any;
		readonly logging: any;
		readonly name: any;
		readonly precedence: any;
		readonly serviceElements: any;
		readonly sourceElements: any;
		readonly sourcePort: any;
		readonly type: any;

	}

	interface AppFirewallUiFirewallruleDtoConstructor {
		new(value?:any): AppFirewallUiFirewallruleDto;
		readonly prototype: AppFirewallUiFirewallruleDto;
	}

	const AppFirewallUiFirewallruleDto: AppFirewallUiFirewallruleDtoConstructor;

	interface AppFirewallUiStatusDto extends NSXAppFirewallUiStatusDto
	{
		readonly currentState: any;
		readonly failedPublishInfo: any;
		readonly generationNumber: any;
		readonly scopeId: any;

	}

	interface AppFirewallUiStatusDtoConstructor {
		new(value?:any): AppFirewallUiStatusDto;
		readonly prototype: AppFirewallUiStatusDto;
	}

	const AppFirewallUiStatusDto: AppFirewallUiStatusDtoConstructor;

	interface Appliance extends NSXAppliance
	{
		readonly datastoreId: any;
		readonly hostId: any;
		readonly resourcePoolId: any;

	}

	interface ApplianceConstructor {
		new(value?:any): Appliance;
		readonly prototype: Appliance;
	}

	const Appliance: ApplianceConstructor;

	interface ApplianceDto extends NSXApplianceDto
	{
		readonly cpuReservation: any;
		readonly customFields: any;
		readonly datastoreId: any;
		readonly datastoreName: any;
		readonly deployed: any;
		readonly edgeId: any;
		readonly highAvailabilityIndex: any;
		readonly hostId: any;
		readonly hostName: any;
		readonly memoryReservation: any;
		readonly resourcePoolId: any;
		readonly resourcePoolName: any;
		readonly vcUuid: any;
		readonly vmFolderId: any;
		readonly vmFolderName: any;
		readonly vmHostname: any;
		readonly vmId: any;
		readonly vmName: any;

	}

	interface ApplianceDtoConstructor {
		new(value?:any): ApplianceDto;
		readonly prototype: ApplianceDto;
	}

	const ApplianceDto: ApplianceDtoConstructor;

	interface AppliancesDto extends NSXAppliancesDto
	{
		readonly appliances: any;
		readonly applianceSize: any;
		readonly deployAppliances: any;
		readonly deploymentContainerId: any;
		readonly enableCoreDump: any;

	}

	interface AppliancesDtoConstructor {
		new(value?:any): AppliancesDto;
		readonly prototype: AppliancesDto;
	}

	const AppliancesDto: AppliancesDtoConstructor;

	interface ApplicationDto extends NSXApplicationDto
	{
		readonly applicationSetId: any;
		readonly portInfo: any;
		readonly protocol: any;
		readonly protocolName: any;
		readonly subType: any;
		readonly subTypeName: any;

	}

	interface ApplicationDtoConstructor {
		new(value?:any): ApplicationDto;
		readonly prototype: ApplicationDto;
	}

	const ApplicationDto: ApplicationDtoConstructor;

	interface ApplicationGroupDto extends NSXApplicationGroupDto
	{
		clientHandle: any;
		description: any;
		extendedAttributes: any;
		inheritanceAllowed: any;
		readonly members: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		scope: any;
		type: any;
		vsmUuid: any;

	}

	interface ApplicationGroupDtoConstructor {
		new(value?:any): ApplicationGroupDto;
		readonly prototype: ApplicationGroupDto;
	}

	const ApplicationGroupDto: ApplicationGroupDtoConstructor;

	interface ApplicationProfile extends NSXApplicationProfile
	{
		readonly clientSSLPassThrough: any;
		id: any;
		insertForwardedFor: any;
		readonly name: any;
		readonly objectId: any;
		readonly persistence: any;
		readonly port: any;
		readonly protocol: any;
		readonly type: any;

	}

	interface ApplicationProfileConstructor {
		new(value?:any): ApplicationProfile;
		readonly prototype: ApplicationProfile;
	}

	const ApplicationProfile: ApplicationProfileConstructor;

	interface ApplicationProfileInv extends NSXApplicationProfileInv
	{
		readonly displayName: any;
		id: any;

		applicationProfiles(): ApplicationProfile;
	}

	interface ApplicationProfileInvConstructor {
		new(value?:any): ApplicationProfileInv;
		readonly prototype: ApplicationProfileInv;
	}

	const ApplicationProfileInv: ApplicationProfileInvConstructor;

	interface ApplicationProtocolDto extends NSXApplicationProtocolDto
	{
		readonly broadcast: any;
		readonly defaultPort: any;
		readonly dynamicService: any;
		readonly multivalue: any;
		readonly name: any;
		readonly transportProtocol: any;

	}

	interface ApplicationProtocolDtoConstructor {
		new(value?:any): ApplicationProtocolDto;
		readonly prototype: ApplicationProtocolDto;
	}

	const ApplicationProtocolDto: ApplicationProtocolDtoConstructor;

	interface ApplicationRule extends NSXApplicationRule
	{
		readonly applicationRuleId: any;
		readonly description: any;
		id: any;
		readonly name: any;
		readonly objectId: any;
		readonly script: any;

	}

	interface ApplicationRuleConstructor {
		new(value?:any): ApplicationRule;
		readonly prototype: ApplicationRule;
	}

	const ApplicationRule: ApplicationRuleConstructor;

	interface ApplicationRuleInv extends NSXApplicationRuleInv
	{
		readonly displayName: any;
		id: any;

		applicationRules(): ApplicationRule;
	}

	interface ApplicationRuleInvConstructor {
		new(value?:any): ApplicationRuleInv;
		readonly prototype: ApplicationRuleInv;
	}

	const ApplicationRuleInv: ApplicationRuleInvConstructor;

	interface ApplicationTrinityDto extends NSXApplicationTrinityDto
	{
		readonly applicationId: any;
		readonly service: any;

	}

	interface ApplicationTrinityDtoConstructor {
		new(value?:any): ApplicationTrinityDto;
		readonly prototype: ApplicationTrinityDto;
	}

	const ApplicationTrinityDto: ApplicationTrinityDtoConstructor;

	interface AppliedToListDto extends NSXAppliedToListDto
	{
		readonly appliedToList: any;

	}

	interface AppliedToListDtoConstructor {
		new(value?:any): AppliedToListDto;
		readonly prototype: AppliedToListDto;
	}

	const AppliedToListDto: AppliedToListDtoConstructor;

	interface AppVisibilityFilterDto extends NSXAppVisibilityFilterDto
	{
		readonly allUndefinedServices: any;
		readonly destinationIpList: any;
		readonly destinationList: any;
		readonly directionList: any;
		readonly flowIds: any;
		readonly hidden: any;
		readonly port: any;
		readonly protocol: any;
		readonly serviceList: any;
		readonly sourceIpList: any;
		readonly sourceList: any;

	}

	interface AppVisibilityFilterDtoConstructor {
		new(value?:any): AppVisibilityFilterDto;
		readonly prototype: AppVisibilityFilterDto;
	}

	const AppVisibilityFilterDto: AppVisibilityFilterDtoConstructor;

	interface AppVisibilityFlowDto extends NSXAppVisibilityFlowDto
	{
		readonly analyzedDestinationList: any;
		readonly analyzedServiceList: any;
		readonly analyzedSourceList: any;
		readonly applicationContext: any;
		readonly approvedDestination: any;
		readonly approvedService: any;
		readonly approvedSource: any;
		readonly destinationReportedAddress: any;
		readonly direction: any;
		readonly flowId: any;
		readonly hidden: any;
		readonly numberOfFlows: any;
		readonly reportedPort: any;
		readonly reportedProtocol: any;
		readonly ruleId: any;
		readonly scope: any;
		readonly sessionId: any;
		readonly sourceReportedAddress: any;

	}

	interface AppVisibilityFlowDtoConstructor {
		new(value?:any): AppVisibilityFlowDto;
		readonly prototype: AppVisibilityFlowDto;
	}

	const AppVisibilityFlowDto: AppVisibilityFlowDtoConstructor;

	interface AppVisibilityRulesDto extends NSXAppVisibilityRulesDto
	{
		readonly id: any;
		readonly lastPublished: any;
		readonly lastUpdated: any;
		readonly rulesDto: any;
		readonly sectionId: any;
		readonly sectionName: any;
		readonly sessionId: any;

	}

	interface AppVisibilityRulesDtoConstructor {
		new(value?:any): AppVisibilityRulesDto;
		readonly prototype: AppVisibilityRulesDto;
	}

	const AppVisibilityRulesDto: AppVisibilityRulesDtoConstructor;

	interface AppVisibilitySessionInfoDto extends NSXAppVisibilitySessionInfoDto
	{
		readonly currentFlowCount: any;
		readonly description: any;
		readonly endTime: any;
		readonly id: any;
		readonly name: any;
		readonly seed: any;
		readonly startTime: any;
		readonly status: any;
		readonly userModifiedFlowCount: any;

	}

	interface AppVisibilitySessionInfoDtoConstructor {
		new(value?:any): AppVisibilitySessionInfoDto;
		readonly prototype: AppVisibilitySessionInfoDto;
	}

	const AppVisibilitySessionInfoDto: AppVisibilitySessionInfoDtoConstructor;

	interface AttributeDto extends NSXAttributeDto
	{
		readonly id: any;
		readonly key: any;
		readonly name: any;
		readonly revision: any;
		readonly value: any;

	}

	interface AttributeDtoConstructor {
		new(value?:any): AttributeDto;
		readonly prototype: AttributeDto;
	}

	const AttributeDto: AttributeDtoConstructor;

	interface AttributesDto extends NSXAttributesDto
	{
		readonly attributes: any;
		readonly id: any;
		readonly revision: any;

	}

	interface AttributesDtoConstructor {
		new(value?:any): AttributesDto;
		readonly prototype: AttributesDto;
	}

	const AttributesDto: AttributesDtoConstructor;

	interface AuditLogDto extends NSXAuditLogDto
	{
		readonly id: any;
		readonly module: any;
		readonly newValue: any;
		readonly notes: any;
		readonly oldValue: any;
		readonly operation: any;
		readonly operationTags: any;
		readonly resource: any;
		readonly resourceId: any;
		readonly status: any;
		readonly timestamp: any;
		readonly userName: any;

	}

	interface AuditLogDtoConstructor {
		new(value?:any): AuditLogDto;
		readonly prototype: AuditLogDto;
	}

	const AuditLogDto: AuditLogDtoConstructor;

	interface AuthConfigDto extends NSXAuthConfigDto
	{
		readonly authenticationTimeout: any;
		readonly authServers: any;
		readonly certAuthServer: any;
		readonly preventMultipleLogon: any;

	}

	interface AuthConfigDtoConstructor {
		new(value?:any): AuthConfigDto;
		readonly prototype: AuthConfigDto;
	}

	const AuthConfigDto: AuthConfigDtoConstructor;

	interface AuthenticationConfigDto extends NSXAuthenticationConfigDto
	{
		readonly certificateAuthenticationDto: any;
		readonly passwordAuthenticationDto: any;

	}

	interface AuthenticationConfigDtoConstructor {
		new(value?:any): AuthenticationConfigDto;
		readonly prototype: AuthenticationConfigDto;
	}

	const AuthenticationConfigDto: AuthenticationConfigDtoConstructor;

	interface AuthenticationConfigurationDto extends NSXAuthenticationConfigurationDto
	{
		readonly certificateAuthentication: any;
		readonly passwordAuthentication: any;

	}

	interface AuthenticationConfigurationDtoConstructor {
		new(value?:any): AuthenticationConfigurationDto;
		readonly prototype: AuthenticationConfigurationDto;
	}

	const AuthenticationConfigurationDto: AuthenticationConfigurationDtoConstructor;

	interface AuthenticationDto extends NSXAuthenticationDto
	{
		readonly type: any;
		readonly value: any;

	}

	interface AuthenticationDtoConstructor {
		new(value?:any): AuthenticationDto;
		readonly prototype: AuthenticationDto;
	}

	const AuthenticationDto: AuthenticationDtoConstructor;

	interface AuthServerDto extends NSXAuthServerDto
	{
		readonly authServerType: any;
		readonly bindDomainName: any;
		readonly bindPassword: any;
		readonly enableSsl: any;
		readonly id: any;
		readonly ip: any;
		readonly isSecondaryAuthServer: any;
		readonly loginAttributeName: any;
		readonly nasIp: any;
		readonly order: any;
		readonly password: any;
		readonly port: any;
		readonly retryCount: any;
		readonly searchBase: any;
		readonly searchFilter: any;
		readonly secret: any;
		readonly sourceIp: any;
		readonly terminateSessionOnAuthFails: any;
		readonly timeOut: any;

	}

	interface AuthServerDtoConstructor {
		new(value?:any): AuthServerDto;
		readonly prototype: AuthServerDto;
	}

	const AuthServerDto: AuthServerDtoConstructor;

	interface AutoConfigurationDto extends NSXAutoConfigurationDto
	{
		readonly enabled: any;
		readonly rulePriority: any;

	}

	interface AutoConfigurationDtoConstructor {
		new(value?:any): AutoConfigurationDto;
		readonly prototype: AutoConfigurationDto;
	}

	const AutoConfigurationDto: AutoConfigurationDtoConstructor;

	interface BaseAuthServerDto extends NSXBaseAuthServerDto
	{
		readonly authServerType: any;
		readonly enabled: any;
		readonly isSecondaryAuthServer: any;
		readonly objectId: any;
		readonly order: any;
		readonly terminateSessionOnAuthFails: any;

	}

	interface BaseAuthServerDtoConstructor {
		new(value?:any): BaseAuthServerDto;
		readonly prototype: BaseAuthServerDto;
	}

	const BaseAuthServerDto: BaseAuthServerDtoConstructor;

	interface BaseIpAddressPoolDto extends NSXBaseIpAddressPoolDto
	{
		clientHandle: any;
		description: any;
		extendedAttributes: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		scope: any;
		readonly totalAddressCount: any;
		type: any;
		readonly usedAddressCount: any;
		readonly usedPercentage: any;
		vsmUuid: any;

	}

	interface BaseIpAddressPoolDtoConstructor {
		new(value?:any): BaseIpAddressPoolDto;
		readonly prototype: BaseIpAddressPoolDto;
	}

	const BaseIpAddressPoolDto: BaseIpAddressPoolDtoConstructor;

	interface BasicDomainObjectInfo extends NSXBasicDomainObjectInfo
	{
		readonly clientHandle: any;
		readonly description: any;
		readonly extendedAttributes: any;
		readonly name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		readonly scope: any;
		readonly type: any;
		vsmUuid: any;

	}

	interface BasicDomainObjectInfoConstructor {
		new(value?:any): BasicDomainObjectInfo;
		readonly prototype: BasicDomainObjectInfo;
	}

	const BasicDomainObjectInfo: BasicDomainObjectInfoConstructor;

	interface BasicDomainObjectInfoList extends NSXBasicDomainObjectInfoList
	{
		readonly basicDomainObjects: any;

	}

	interface BasicDomainObjectInfoListConstructor {
		new(value?:any): BasicDomainObjectInfoList;
		readonly prototype: BasicDomainObjectInfoList;
	}

	const BasicDomainObjectInfoList: BasicDomainObjectInfoListConstructor;

	interface BelongingViewsDto extends NSXBelongingViewsDto
	{
		readonly viewId: any;

	}

	interface BelongingViewsDtoConstructor {
		new(value?:any): BelongingViewsDto;
		readonly prototype: BelongingViewsDto;
	}

	const BelongingViewsDto: BelongingViewsDtoConstructor;

	interface BelongingZoneDto extends NSXBelongingZoneDto
	{
		readonly enabled: any;
		readonly zoneId: any;

	}

	interface BelongingZoneDtoConstructor {
		new(value?:any): BelongingZoneDto;
		readonly prototype: BelongingZoneDto;
	}

	const BelongingZoneDto: BelongingZoneDtoConstructor;

	interface BelongingZonesOfViewtDto extends NSXBelongingZonesOfViewtDto
	{
		readonly zone: any;

	}

	interface BelongingZonesOfViewtDtoConstructor {
		new(value?:any): BelongingZonesOfViewtDto;
		readonly prototype: BelongingZonesOfViewtDto;
	}

	const BelongingZonesOfViewtDto: BelongingZonesOfViewtDtoConstructor;

	interface BgpConfigDto extends NSXBgpConfigDto
	{
		readonly bgpNeighbours: any;
		readonly defaultOriginate: any;
		readonly enabled: any;
		readonly gracefulRestart: any;
		readonly localAS: any;
		readonly redistribution: any;

	}

	interface BgpConfigDtoConstructor {
		new(value?:any): BgpConfigDto;
		readonly prototype: BgpConfigDto;
	}

	const BgpConfigDto: BgpConfigDtoConstructor;

	interface BgpFilterDto extends NSXBgpFilterDto
	{
		readonly action: any;
		readonly direction: any;
		readonly ipPrefixGe: any;
		readonly ipPrefixLe: any;
		readonly network: any;

	}

	interface BgpFilterDtoConstructor {
		new(value?:any): BgpFilterDto;
		readonly prototype: BgpFilterDto;
	}

	const BgpFilterDto: BgpFilterDtoConstructor;

	interface BgpFiltersDto extends NSXBgpFiltersDto
	{
		readonly bgpFilters: any;

	}

	interface BgpFiltersDtoConstructor {
		new(value?:any): BgpFiltersDto;
		readonly prototype: BgpFiltersDto;
	}

	const BgpFiltersDto: BgpFiltersDtoConstructor;

	interface BgpNeighbourDto extends NSXBgpNeighbourDto
	{
		readonly bgpFilters: any;
		readonly forwardingAddress: any;
		readonly holdDownTimer: any;
		readonly ipAddress: any;
		readonly keepAliveTimer: any;
		readonly password: any;
		readonly protocolAddress: any;
		readonly remoteAS: any;
		readonly weight: any;

	}

	interface BgpNeighbourDtoConstructor {
		new(value?:any): BgpNeighbourDto;
		readonly prototype: BgpNeighbourDto;
	}

	const BgpNeighbourDto: BgpNeighbourDtoConstructor;

	interface BgpNeighboursDto extends NSXBgpNeighboursDto
	{
		readonly bgpNeighbours: any;

	}

	interface BgpNeighboursDtoConstructor {
		new(value?:any): BgpNeighboursDto;
		readonly prototype: BgpNeighboursDto;
	}

	const BgpNeighboursDto: BgpNeighboursDtoConstructor;

	interface BindingStatusDto extends NSXBindingStatusDto
	{
		readonly bindingId: any;
		readonly message: any;
		readonly status: any;

	}

	interface BindingStatusDtoConstructor {
		new(value?:any): BindingStatusDto;
		readonly prototype: BindingStatusDto;
	}

	const BindingStatusDto: BindingStatusDtoConstructor;

	interface BindingStatusesDto extends NSXBindingStatusesDto
	{
		readonly statuses: any;

	}

	interface BindingStatusesDtoConstructor {
		new(value?:any): BindingStatusesDto;
		readonly prototype: BindingStatusesDto;
	}

	const BindingStatusesDto: BindingStatusesDtoConstructor;

	interface BridgeDto extends NSXBridgeDto
	{
		readonly bridgeId: any;
		readonly dvportGroup: any;
		readonly dvportGroupName: any;
		readonly name: any;
		readonly virtualWire: any;
		readonly virtualWireName: any;

	}

	interface BridgeDtoConstructor {
		new(value?:any): BridgeDto;
		readonly prototype: BridgeDto;
	}

	const BridgeDto: BridgeDtoConstructor;

	interface BridgingConfigDto extends NSXBridgingConfigDto
	{
		readonly bridges: any;
		enabled: any;
		template: any;
		version: any;

	}

	interface BridgingConfigDtoConstructor {
		new(value?:any): BridgingConfigDto;
		readonly prototype: BridgingConfigDto;
	}

	const BridgingConfigDto: BridgingConfigDtoConstructor;

	interface CategoriesDto extends NSXCategoriesDto
	{
		readonly categories: any;

	}

	interface CategoriesDtoConstructor {
		new(value?:any): CategoriesDto;
		readonly prototype: CategoriesDto;
	}

	const CategoriesDto: CategoriesDtoConstructor;

	interface CategoryDto extends NSXCategoryDto
	{
		readonly implementationType: any;
		readonly requiredProfileAttributes: any;
		readonly requiredServiceAttributes: any;
		readonly type: any;

	}

	interface CategoryDtoConstructor {
		new(value?:any): CategoryDto;
		readonly prototype: CategoryDto;
	}

	const CategoryDto: CategoryDtoConstructor;

	interface CbmStatDto extends NSXCbmStatDto
	{
		readonly in: any;
		readonly out: any;
		readonly timestamp: any;
		readonly vnic: any;

	}

	interface CbmStatDtoConstructor {
		new(value?:any): CbmStatDto;
		readonly prototype: CbmStatDto;
	}

	const CbmStatDto: CbmStatDtoConstructor;

	interface CbmStatsDto extends NSXCbmStatsDto
	{
		readonly dataDto: any;
		readonly metaDto: any;

	}

	interface CbmStatsDtoConstructor {
		new(value?:any): CbmStatsDto;
		readonly prototype: CbmStatsDto;
	}

	const CbmStatsDto: CbmStatsDtoConstructor;

	interface CbmStatsEntryDto extends NSXCbmStatsEntryDto
	{
		readonly timeStamp: any;
		readonly VNic_0_in: any;
		readonly VNic_0_out: any;
		readonly VNic_1_in: any;
		readonly VNic_1_out: any;
		readonly VNic_2_in: any;
		readonly VNic_2_out: any;
		readonly VNic_3_in: any;
		readonly VNic_3_out: any;
		readonly VNic_4_in: any;
		readonly VNic_4_out: any;
		readonly VNic_5_in: any;
		readonly VNic_5_out: any;
		readonly VNic_6_in: any;
		readonly VNic_6_out: any;
		readonly VNic_7_in: any;
		readonly VNic_7_out: any;
		readonly VNic_8_in: any;
		readonly VNic_8_out: any;
		readonly VNic_9_in: any;
		readonly VNic_9_out: any;

	}

	interface CbmStatsEntryDtoConstructor {
		new(value?:any): CbmStatsEntryDto;
		readonly prototype: CbmStatsEntryDto;
	}

	const CbmStatsEntryDto: CbmStatsEntryDtoConstructor;

	interface CbmStatsEntryListDto extends NSXCbmStatsEntryListDto
	{
		readonly entries: any;
		readonly meta: any;

	}

	interface CbmStatsEntryListDtoConstructor {
		new(value?:any): CbmStatsEntryListDto;
		readonly prototype: CbmStatsEntryListDto;
	}

	const CbmStatsEntryListDto: CbmStatsEntryListDtoConstructor;

	interface CertificateAuthenticationDto extends NSXCertificateAuthenticationDto
	{
		readonly certificateIds: any;

	}

	interface CertificateAuthenticationDtoConstructor {
		new(value?:any): CertificateAuthenticationDto;
		readonly prototype: CertificateAuthenticationDto;
	}

	const CertificateAuthenticationDto: CertificateAuthenticationDtoConstructor;

	interface CertificateDto extends NSXCertificateDto
	{
		readonly certificateType: any;
		clientHandle: any;
		description: any;
		extendedAttributes: any;
		readonly issuerCn: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		readonly pemEncoding: any;
		revision: any;
		scope: any;
		readonly subjectCn: any;
		type: any;
		vsmUuid: any;
		readonly x509Certificates: any;

	}

	interface CertificateDtoConstructor {
		new(value?:any): CertificateDto;
		readonly prototype: CertificateDto;
	}

	const CertificateDto: CertificateDtoConstructor;

	interface CertificateKeyPair extends NSXCertificateKeyPair
	{
		readonly certificate: any;
		readonly rsa_private_key: any;

	}

	interface CertificateKeyPairConstructor {
		new(value?:any): CertificateKeyPair;
		readonly prototype: CertificateKeyPair;
	}

	const CertificateKeyPair: CertificateKeyPairConstructor;

	interface CertificateListDto extends NSXCertificateListDto
	{
		readonly certificates: any;

	}

	interface CertificateListDtoConstructor {
		new(value?:any): CertificateListDto;
		readonly prototype: CertificateListDto;
	}

	const CertificateListDto: CertificateListDtoConstructor;

	interface ChangePassword extends NSXChangePassword
	{
		readonly changePasswordOnNextLogin: any;

	}

	interface ChangePasswordConstructor {
		new(value?:any): ChangePassword;
		readonly prototype: ChangePassword;
	}

	const ChangePassword: ChangePasswordConstructor;

	interface CipherList extends NSXCipherList
	{
		readonly cipher: any;

	}

	interface CipherListConstructor {
		new(value?:any): CipherList;
		readonly prototype: CipherList;
	}

	const CipherList: CipherListConstructor;

	interface ClientConfigurationDto extends NSXClientConfigurationDto
	{
		readonly autoReconnect: any;
		readonly tunnelConfiguration: any;
		readonly upgradeNotification: any;

	}

	interface ClientConfigurationDtoConstructor {
		new(value?:any): ClientConfigurationDto;
		readonly prototype: ClientConfigurationDto;
	}

	const ClientConfigurationDto: ClientConfigurationDtoConstructor;

	interface ClientDto extends NSXClientDto
	{
		readonly clientId: any;
		readonly clientToken: any;
		readonly heartbeatEnabled: any;
		readonly messagingSystemAccount: any;
		readonly messagingSystemAccountEnabled: any;
		readonly messagingSystemAccountPassword: any;
		readonly peerName: any;
		readonly topics: any;

	}

	interface ClientDtoConstructor {
		new(value?:any): ClientDto;
		readonly prototype: ClientDto;
	}

	const ClientDto: ClientDtoConstructor;

	interface ClientHeartbeatDataDto extends NSXClientHeartbeatDataDto
	{
		readonly active: any;
		readonly clientId: any;
		readonly clientToken: any;
		readonly currentHeartbeatId: any;
		readonly lastHeartbeatResponse: any;
		readonly peerName: any;

	}

	interface ClientHeartbeatDataDtoConstructor {
		new(value?:any): ClientHeartbeatDataDto;
		readonly prototype: ClientHeartbeatDataDto;
	}

	const ClientHeartbeatDataDto: ClientHeartbeatDataDtoConstructor;

	interface ClientIconsDto extends NSXClientIconsDto
	{
		readonly clientBanner: any;
		readonly clientBannerUri: any;
		readonly connectedClientIcon: any;
		readonly connectedClientIconUri: any;
		readonly connectedErrorClientIcon: any;
		readonly connectedErrorClientIconUri: any;
		readonly desktopClientIcon: any;
		readonly desktopClientIconUri: any;
		readonly disconnectedClientIcon: any;
		readonly disconnectedClientIconUri: any;
		readonly encodedClientBanner: any;
		readonly encodedConnectedClientIcon: any;
		readonly encodedConnectedErrorClientIcon: any;
		readonly encodedDesktopClientIcon: any;
		readonly encodedDisconnectedClientIcon: any;

	}

	interface ClientIconsDtoConstructor {
		new(value?:any): ClientIconsDto;
		readonly prototype: ClientIconsDto;
	}

	const ClientIconsDto: ClientIconsDtoConstructor;

	interface ClientInstallPackageDto extends NSXClientInstallPackageDto
	{
		readonly createDesktopIcon: any;
		readonly createLinuxClient: any;
		readonly createMacClient: any;
		readonly description: any;
		readonly enabled: any;
		readonly enforceServerSecurityCertValidation: any;
		readonly gatewayList: any;
		readonly hideNetworkAdaptor: any;
		readonly hideSystrayIcon: any;
		readonly objectId: any;
		readonly profileName: any;
		readonly rememberPassword: any;
		readonly silentModeInstallation: any;
		readonly silentModeOperation: any;
		readonly startClientOnLogon: any;

	}

	interface ClientInstallPackageDtoConstructor {
		new(value?:any): ClientInstallPackageDto;
		readonly prototype: ClientInstallPackageDto;
	}

	const ClientInstallPackageDto: ClientInstallPackageDtoConstructor;

	interface ClientInstallPackagesDto extends NSXClientInstallPackagesDto
	{
		readonly clientInstallPackages: any;

	}

	interface ClientInstallPackagesDtoConstructor {
		new(value?:any): ClientInstallPackagesDto;
		readonly prototype: ClientInstallPackagesDto;
	}

	const ClientInstallPackagesDto: ClientInstallPackagesDtoConstructor;

	interface ClientRegistrationResultDto extends NSXClientRegistrationResultDto
	{
		readonly clientId: any;
		readonly messagingServerHost: any;
		readonly messagingServerPort: any;
		readonly messagingServerSslCert: any;
		readonly messagingServerVirtualHost: any;
		readonly peerExchange: any;
		readonly peerRpcInfo: any;
		readonly vsmExchange: any;

	}

	interface ClientRegistrationResultDtoConstructor {
		new(value?:any): ClientRegistrationResultDto;
		readonly prototype: ClientRegistrationResultDto;
	}

	const ClientRegistrationResultDto: ClientRegistrationResultDtoConstructor;

	interface ClientRpcInfoDto extends NSXClientRpcInfoDto
	{
		readonly requestQueue: any;
		readonly responseQueue: any;
		readonly vsmRequestQueue: any;

	}

	interface ClientRpcInfoDtoConstructor {
		new(value?:any): ClientRpcInfoDto;
		readonly prototype: ClientRpcInfoDto;
	}

	const ClientRpcInfoDto: ClientRpcInfoDtoConstructor;

	interface ClientsDto extends NSXClientsDto
	{
		readonly clients: any;

	}

	interface ClientsDtoConstructor {
		new(value?:any): ClientsDto;
		readonly prototype: ClientsDto;
	}

	const ClientsDto: ClientsDtoConstructor;

	interface Cluster extends NSXCluster
	{
		description: any;
		id: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		readonly scopeId: any;

	}

	interface ClusterConstructor {
		new(value?:any): Cluster;
		readonly prototype: Cluster;
	}

	const Cluster: ClusterConstructor;

	interface ClusterDatastoreInfoDto extends NSXClusterDatastoreInfoDto
	{
		readonly clusterId: any;
		readonly datastore: any;

	}

	interface ClusterDatastoreInfoDtoConstructor {
		new(value?:any): ClusterDatastoreInfoDto;
		readonly prototype: ClusterDatastoreInfoDto;
	}

	const ClusterDatastoreInfoDto: ClusterDatastoreInfoDtoConstructor;

	interface ClusterDeploymentConfigDto extends NSXClusterDeploymentConfigDto
	{
		readonly clusterId: any;
		readonly datastore: any;
		readonly services: any;

	}

	interface ClusterDeploymentConfigDtoConstructor {
		new(value?:any): ClusterDeploymentConfigDto;
		readonly prototype: ClusterDeploymentConfigDto;
	}

	const ClusterDeploymentConfigDto: ClusterDeploymentConfigDtoConstructor;

	interface ClusterDeploymentConfigsDto extends NSXClusterDeploymentConfigsDto
	{
		readonly configs: any;

	}

	interface ClusterDeploymentConfigsDtoConstructor {
		new(value?:any): ClusterDeploymentConfigsDto;
		readonly prototype: ClusterDeploymentConfigsDto;
	}

	const ClusterDeploymentConfigsDto: ClusterDeploymentConfigsDtoConstructor;

	interface ClusterDto extends NSXClusterDto
	{
		readonly clusterId: any;
		readonly clusterName: any;
		readonly datacenterId: any;
		readonly datacenterName: any;
		readonly firewallStatus: any;

	}

	interface ClusterDtoConstructor {
		new(value?:any): ClusterDto;
		readonly prototype: ClusterDto;
	}

	const ClusterDto: ClusterDtoConstructor;

	interface ClusterMappingDto extends NSXClusterMappingDto
	{
		readonly cluster: any;
		readonly mappingSpec: any;

	}

	interface ClusterMappingDtoConstructor {
		new(value?:any): ClusterMappingDto;
		readonly prototype: ClusterMappingDto;
	}

	const ClusterMappingDto: ClusterMappingDtoConstructor;

	interface ClusterMappingListDto extends NSXClusterMappingListDto
	{
		readonly mappings: any;

	}

	interface ClusterMappingListDtoConstructor {
		new(value?:any): ClusterMappingListDto;
		readonly prototype: ClusterMappingListDto;
	}

	const ClusterMappingListDto: ClusterMappingListDtoConstructor;

	interface ClusterMappingSpecDto extends NSXClusterMappingSpecDto
	{
		readonly ipPoolId: any;
		readonly switchObj: any;
		readonly vlanId: any;
		readonly vmknicCount: any;

	}

	interface ClusterMappingSpecDtoConstructor {
		new(value?:any): ClusterMappingSpecDto;
		readonly prototype: ClusterMappingSpecDto;
	}

	const ClusterMappingSpecDto: ClusterMappingSpecDtoConstructor;

	interface ClustersDto extends NSXClustersDto
	{
		readonly clusters: any;

	}

	interface ClustersDtoConstructor {
		new(value?:any): ClustersDto;
		readonly prototype: ClustersDto;
	}

	const ClustersDto: ClustersDtoConstructor;

	interface ClusterSummariesDto extends NSXClusterSummariesDto
	{
		readonly clusterSummaries: any;

	}

	interface ClusterSummariesDtoConstructor {
		new(value?:any): ClusterSummariesDto;
		readonly prototype: ClusterSummariesDto;
	}

	const ClusterSummariesDto: ClusterSummariesDtoConstructor;

	interface ClusterSummaryDto extends NSXClusterSummaryDto
	{
		readonly cluster: any;
		readonly dataStore: any;
		readonly deployedServices: any;
		readonly newServices: any;
		readonly upgradeServices: any;

	}

	interface ClusterSummaryDtoConstructor {
		new(value?:any): ClusterSummaryDto;
		readonly prototype: ClusterSummaryDto;
	}

	const ClusterSummaryDto: ClusterSummaryDtoConstructor;

	interface CMConfigDto extends NSXCMConfigDto
	{
		readonly certificateThumbprint: any;
		readonly componentManagerUrl: any;
		readonly id: any;
		readonly ssoAdminUserName: any;
		readonly ssoAdminUserPasswd: any;

	}

	interface CMConfigDtoConstructor {
		new(value?:any): CMConfigDto;
		readonly prototype: CMConfigDto;
	}

	const CMConfigDto: CMConfigDtoConstructor;

	interface CMConfigStatusDto extends NSXCMConfigStatusDto
	{
		readonly message: any;
		readonly status: any;

	}

	interface CMConfigStatusDtoConstructor {
		new(value?:any): CMConfigStatusDto;
		readonly prototype: CMConfigStatusDto;
	}

	const CMConfigStatusDto: CMConfigStatusDtoConstructor;

	interface ConfigDto extends NSXConfigDto
	{
		readonly sslEnabled: any;

	}

	interface ConfigDtoConstructor {
		new(value?:any): ConfigDto;
		readonly prototype: ConfigDto;
	}

	const ConfigDto: ConfigDtoConstructor;

	interface ConfigPermissionsDto extends NSXConfigPermissionsDto
	{
		readonly configurationPermission: any;
		readonly installPermission: any;
		readonly uninstallPermission: any;
		readonly upgradePermission: any;

	}

	interface ConfigPermissionsDtoConstructor {
		new(value?:any): ConfigPermissionsDto;
		readonly prototype: ConfigPermissionsDto;
	}

	const ConfigPermissionsDto: ConfigPermissionsDtoConstructor;

	interface ConflictResolverInfoDto extends NSXConflictResolverInfoDto
	{
		readonly agencyAction: any;
		readonly deploymentUnitAction: any;

	}

	interface ConflictResolverInfoDtoConstructor {
		new(value?:any): ConflictResolverInfoDto;
		readonly prototype: ConflictResolverInfoDto;
	}

	const ConflictResolverInfoDto: ConflictResolverInfoDtoConstructor;

	interface Connection extends NSXConnection
	{
		readonly connTimeout: any;
		readonly displayName: any;
		readonly id: any;
		readonly name: any;
		readonly relatedNsxManagers: any;
		readonly retryCount: any;
		readonly role: any;
		readonly url: any;
		readonly username: any;
		readonly version: any;

		datacentersInv(): DatacenterInv;
		edgeInv(): EdgeInv;
		FirewallSectionInvRel(): FirewallSectionInv;
		IPSetInvRel(): IPSetInv;
		securitygroupInv(): SecurityGroupInv;
		SecurityPolicyInvRel(): SecurityPoilcyInv;
		SecurityTagInvRel(): SecurityTagInv;
		vdnScopeInv(): VdnScopeInv;
		virtualWireInv(): VirtualWireInv;
	}

	interface ConnectionConstructor {
		new(value?:any): Connection;
		readonly prototype: Connection;
	}

	const Connection: ConnectionConstructor;

	interface ConnectionsDto extends NSXConnectionsDto
	{
		readonly value: any;

	}

	interface ConnectionsDtoConstructor {
		new(value?:any): ConnectionsDto;
		readonly prototype: ConnectionsDto;
	}

	const ConnectionsDto: ConnectionsDtoConstructor;

	interface ControlNodeRoleConfig extends NSXControlNodeRoleConfig
	{
		readonly listen_addr: any;
		readonly role: any;

	}

	interface ControlNodeRoleConfigConstructor {
		new(value?:any): ControlNodeRoleConfig;
		readonly prototype: ControlNodeRoleConfig;
	}

	const ControlNodeRoleConfig: ControlNodeRoleConfigConstructor;

	interface CPUDto extends NSXCPUDto
	{
		readonly percentValue: any;

	}

	interface CPUDtoConstructor {
		new(value?:any): CPUDto;
		readonly prototype: CPUDto;
	}

	const CPUDto: CPUDtoConstructor;

	interface CrlDto extends NSXCrlDto
	{
		clientHandle: any;
		description: any;
		extendedAttributes: any;
		readonly issuerCn: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		readonly pemEncoding: any;
		revision: any;
		scope: any;
		type: any;
		vsmUuid: any;
		readonly x509Crl: any;

	}

	interface CrlDtoConstructor {
		new(value?:any): CrlDto;
		readonly prototype: CrlDto;
	}

	const CrlDto: CrlDtoConstructor;

	interface CrlListDto extends NSXCrlListDto
	{
		readonly crls: any;

	}

	interface CrlListDtoConstructor {
		new(value?:any): CrlListDto;
		readonly prototype: CrlListDto;
	}

	const CrlListDto: CrlListDtoConstructor;

	interface CsrDto extends NSXCsrDto
	{
		readonly algorithm: any;
		clientHandle: any;
		readonly cn: any;
		description: any;
		extendedAttributes: any;
		readonly keySize: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		readonly pemEncoding: any;
		revision: any;
		scope: any;
		readonly subject: any;
		type: any;
		vsmUuid: any;

	}

	interface CsrDtoConstructor {
		new(value?:any): CsrDto;
		readonly prototype: CsrDto;
	}

	const CsrDto: CsrDtoConstructor;

	interface CsrListDto extends NSXCsrListDto
	{
		readonly csrs: any;

	}

	interface CsrListDtoConstructor {
		new(value?:any): CsrListDto;
		readonly prototype: CsrListDto;
	}

	const CsrListDto: CsrListDtoConstructor;

	interface DashboardDataDto extends NSXDashboardDataDto
	{
		readonly firewall: any;
		readonly interfaces: any;
		readonly ipsec: any;
		readonly loadBalancer: any;
		readonly sslvpn: any;

	}

	interface DashboardDataDtoConstructor {
		new(value?:any): DashboardDataDto;
		readonly prototype: DashboardDataDto;
	}

	const DashboardDataDto: DashboardDataDtoConstructor;

	interface DashboardFirewallStatDto extends NSXDashboardFirewallStatDto
	{
		readonly connections: any;

	}

	interface DashboardFirewallStatDtoConstructor {
		new(value?:any): DashboardFirewallStatDto;
		readonly prototype: DashboardFirewallStatDto;
	}

	const DashboardFirewallStatDto: DashboardFirewallStatDtoConstructor;

	interface DashboardInterfaceStatDto extends NSXDashboardInterfaceStatDto
	{
		readonly VNic_0_in_byte: any;
		readonly VNic_0_in_pkt: any;
		readonly VNic_0_out_byte: any;
		readonly VNic_0_out_pkt: any;
		readonly VNic_1_in_byte: any;
		readonly VNic_1_in_pkt: any;
		readonly VNic_1_out_byte: any;
		readonly VNic_1_out_pkt: any;
		readonly VNic_2_in_byte: any;
		readonly VNic_2_in_pkt: any;
		readonly VNic_2_out_byte: any;
		readonly VNic_2_out_pkt: any;
		readonly VNic_3_in_byte: any;
		readonly VNic_3_in_pkt: any;
		readonly VNic_3_out_byte: any;
		readonly VNic_3_out_pkt: any;
		readonly VNic_4_in_byte: any;
		readonly VNic_4_in_pkt: any;
		readonly VNic_4_out_byte: any;
		readonly VNic_4_out_pkt: any;
		readonly VNic_5_in_byte: any;
		readonly VNic_5_in_pkt: any;
		readonly VNic_5_out_byte: any;
		readonly VNic_5_out_pkt: any;
		readonly VNic_6_in_byte: any;
		readonly VNic_6_in_pkt: any;
		readonly VNic_6_out_byte: any;
		readonly VNic_6_out_pkt: any;
		readonly VNic_7_in_byte: any;
		readonly VNic_7_in_pkt: any;
		readonly VNic_7_out_byte: any;
		readonly VNic_7_out_pkt: any;
		readonly VNic_8_in_byte: any;
		readonly VNic_8_in_pkt: any;
		readonly VNic_8_out_byte: any;
		readonly VNic_8_out_pkt: any;
		readonly VNic_9_in_byte: any;
		readonly VNic_9_in_pkt: any;
		readonly VNic_9_out_byte: any;
		readonly VNic_9_out_pkt: any;

	}

	interface DashboardInterfaceStatDtoConstructor {
		new(value?:any): DashboardInterfaceStatDto;
		readonly prototype: DashboardInterfaceStatDto;
	}

	const DashboardInterfaceStatDto: DashboardInterfaceStatDtoConstructor;

	interface DashboardIpsecStatDto extends NSXDashboardIpsecStatDto
	{
		readonly ipsecBytesIn: any;
		readonly ipsecBytesOut: any;
		readonly ipsecTunnels: any;

	}

	interface DashboardIpsecStatDtoConstructor {
		new(value?:any): DashboardIpsecStatDto;
		readonly prototype: DashboardIpsecStatDto;
	}

	const DashboardIpsecStatDto: DashboardIpsecStatDtoConstructor;

	interface DashboardLoadBalancerStatDto extends NSXDashboardLoadBalancerStatDto
	{
		readonly lbBpsIn: any;
		readonly lbBpsOut: any;
		readonly lbHttpReqs: any;
		readonly lbSessions: any;

	}

	interface DashboardLoadBalancerStatDtoConstructor {
		new(value?:any): DashboardLoadBalancerStatDto;
		readonly prototype: DashboardLoadBalancerStatDto;
	}

	const DashboardLoadBalancerStatDto: DashboardLoadBalancerStatDtoConstructor;

	interface DashboardSslvpnStatDto extends NSXDashboardSslvpnStatDto
	{
		readonly activeClients: any;
		readonly authFailures: any;
		readonly sessionsCreated: any;
		readonly sslvpnBytesIn: any;
		readonly sslvpnBytesOut: any;

	}

	interface DashboardSslvpnStatDtoConstructor {
		new(value?:any): DashboardSslvpnStatDto;
		readonly prototype: DashboardSslvpnStatDto;
	}

	const DashboardSslvpnStatDto: DashboardSslvpnStatDtoConstructor;

	interface DashboardStatDto extends NSXDashboardStatDto
	{
		readonly timestamp: any;
		readonly value: any;

	}

	interface DashboardStatDtoConstructor {
		new(value?:any): DashboardStatDto;
		readonly prototype: DashboardStatDto;
	}

	const DashboardStatDto: DashboardStatDtoConstructor;

	interface DashboardStatsDto extends NSXDashboardStatsDto
	{
		readonly dataDto: any;
		readonly metaDto: any;

	}

	interface DashboardStatsDtoConstructor {
		new(value?:any): DashboardStatsDto;
		readonly prototype: DashboardStatsDto;
	}

	const DashboardStatsDto: DashboardStatsDtoConstructor;

	interface DashboardStatsEntryDto extends NSXDashboardStatsEntryDto
	{
		readonly activeClients: any;
		readonly authFailures: any;
		readonly connections: any;
		readonly ipsecBytesIn: any;
		readonly ipsecBytesOut: any;
		readonly ipsecTunnels: any;
		readonly lbBpsIn: any;
		readonly lbBpsOut: any;
		readonly lbHttpReqs: any;
		readonly lbSessions: any;
		readonly sessionsCreated: any;
		readonly sslvpnBytesIn: any;
		readonly sslvpnBytesOut: any;
		readonly timeStamp: any;
		readonly VNic_0_in_byte: any;
		readonly VNic_0_in_pkt: any;
		readonly VNic_0_out_byte: any;
		readonly VNic_0_out_pkt: any;
		readonly VNic_1_in_byte: any;
		readonly VNic_1_in_pkt: any;
		readonly VNic_1_out_byte: any;
		readonly VNic_1_out_pkt: any;
		readonly VNic_2_in_byte: any;
		readonly VNic_2_in_pkt: any;
		readonly VNic_2_out_byte: any;
		readonly VNic_2_out_pkt: any;
		readonly VNic_3_in_byte: any;
		readonly VNic_3_in_pkt: any;
		readonly VNic_3_out_byte: any;
		readonly VNic_3_out_pkt: any;
		readonly VNic_4_in_byte: any;
		readonly VNic_4_in_pkt: any;
		readonly VNic_4_out_byte: any;
		readonly VNic_4_out_pkt: any;
		readonly VNic_5_in_byte: any;
		readonly VNic_5_in_pkt: any;
		readonly VNic_5_out_byte: any;
		readonly VNic_5_out_pkt: any;
		readonly VNic_6_in_byte: any;
		readonly VNic_6_in_pkt: any;
		readonly VNic_6_out_byte: any;
		readonly VNic_6_out_pkt: any;
		readonly VNic_7_in_byte: any;
		readonly VNic_7_in_pkt: any;
		readonly VNic_7_out_byte: any;
		readonly VNic_7_out_pkt: any;
		readonly VNic_8_in_byte: any;
		readonly VNic_8_in_pkt: any;
		readonly VNic_8_out_byte: any;
		readonly VNic_8_out_pkt: any;
		readonly VNic_9_in_byte: any;
		readonly VNic_9_in_pkt: any;
		readonly VNic_9_out_byte: any;
		readonly VNic_9_out_pkt: any;

	}

	interface DashboardStatsEntryDtoConstructor {
		new(value?:any): DashboardStatsEntryDto;
		readonly prototype: DashboardStatsEntryDto;
	}

	const DashboardStatsEntryDto: DashboardStatsEntryDtoConstructor;

	interface DashboardStatsEntryListDto extends NSXDashboardStatsEntryListDto
	{
		readonly entries: any;
		readonly meta: any;

	}

	interface DashboardStatsEntryListDtoConstructor {
		new(value?:any): DashboardStatsEntryListDto;
		readonly prototype: DashboardStatsEntryListDto;
	}

	const DashboardStatsEntryListDto: DashboardStatsEntryListDtoConstructor;

	interface DatacenterInv extends NSXDatacenterInv
	{
		readonly displayName: any;
		id: any;

		datacenters(): Resource;
	}

	interface DatacenterInvConstructor {
		new(value?:any): DatacenterInv;
		readonly prototype: DatacenterInv;
	}

	const DatacenterInv: DatacenterInvConstructor;

	interface DatacenterStateDto extends NSXDatacenterStateDto
	{
		readonly datacenterId: any;
		readonly status: any;
		readonly timestamp: any;
		readonly userId: any;

	}

	interface DatacenterStateDtoConstructor {
		new(value?:any): DatacenterStateDto;
		readonly prototype: DatacenterStateDto;
	}

	const DatacenterStateDto: DatacenterStateDtoConstructor;

	interface DataChangeNotificationDto extends NSXDataChangeNotificationDto
	{
		readonly properties: any;
		readonly reference: any;
		readonly type: any;

	}

	interface DataChangeNotificationDtoConstructor {
		new(value?:any): DataChangeNotificationDto;
		readonly prototype: DataChangeNotificationDto;
	}

	const DataChangeNotificationDto: DataChangeNotificationDtoConstructor;

	interface DataChangeNotificationTypeDto extends NSXDataChangeNotificationTypeDto
	{

	}

	interface DataChangeNotificationTypeDtoConstructor {
		new(value?:any): DataChangeNotificationTypeDto;
		readonly prototype: DataChangeNotificationTypeDto;
	}

	const DataChangeNotificationTypeDto: DataChangeNotificationTypeDtoConstructor;

	interface DataDto extends NSXDataDto
	{
		readonly VNic_0: any;
		readonly VNic_1: any;
		readonly VNic_2: any;
		readonly VNic_3: any;
		readonly VNic_4: any;
		readonly VNic_5: any;
		readonly VNic_6: any;
		readonly VNic_7: any;
		readonly VNic_8: any;
		readonly VNic_9: any;

	}

	interface DataDtoConstructor {
		new(value?:any): DataDto;
		readonly prototype: DataDto;
	}

	const DataDto: DataDtoConstructor;

	interface DataPage extends NSXDataPage
	{
		readonly data: any;
		readonly pagingInfo: any;

	}

	interface DataPageConstructor {
		new(value?:any): DataPage;
		readonly prototype: DataPage;
	}

	const DataPage: DataPageConstructor;

	interface DataPermissionsDto extends NSXDataPermissionsDto
	{
		readonly publishPermission: any;
		readonly savePermission: any;

	}

	interface DataPermissionsDtoConstructor {
		new(value?:any): DataPermissionsDto;
		readonly prototype: DataPermissionsDto;
	}

	const DataPermissionsDto: DataPermissionsDtoConstructor;

	interface DateTimeDto extends NSXDateTimeDto
	{
		readonly ntpServer: any;

	}

	interface DateTimeDtoConstructor {
		new(value?:any): DateTimeDto;
		readonly prototype: DateTimeDto;
	}

	const DateTimeDto: DateTimeDtoConstructor;

	interface DefaultPolicyDto extends NSXDefaultPolicyDto
	{
		readonly action: any;
		readonly loggingEnabled: any;

	}

	interface DefaultPolicyDtoConstructor {
		new(value?:any): DefaultPolicyDto;
		readonly prototype: DefaultPolicyDto;
	}

	const DefaultPolicyDto: DefaultPolicyDtoConstructor;

	interface DefaultRoute extends NSXDefaultRoute
	{
		readonly gatewayIpAddress: any;
		id: any;
		readonly vNicIndex: any;

	}

	interface DefaultRouteConstructor {
		new(value?:any): DefaultRoute;
		readonly prototype: DefaultRoute;
	}

	const DefaultRoute: DefaultRouteConstructor;

	interface DefaultRouteBaseDto extends NSXDefaultRouteBaseDto
	{
		readonly description: any;
		readonly mtu: any;
		readonly vnic: any;

	}

	interface DefaultRouteBaseDtoConstructor {
		new(value?:any): DefaultRouteBaseDto;
		readonly prototype: DefaultRouteBaseDto;
	}

	const DefaultRouteBaseDto: DefaultRouteBaseDtoConstructor;

	interface DefaultRouteDto extends NSXDefaultRouteDto
	{
		description: any;
		readonly gatewayAddress: any;
		mtu: any;
		vnic: any;

	}

	interface DefaultRouteDtoConstructor {
		new(value?:any): DefaultRouteDto;
		readonly prototype: DefaultRouteDto;
	}

	const DefaultRouteDto: DefaultRouteDtoConstructor;

	interface DefaultRouteTrinityDto extends NSXDefaultRouteTrinityDto
	{
		description: any;
		readonly gatewayAddress: any;
		mtu: any;
		vnic: any;

	}

	interface DefaultRouteTrinityDtoConstructor {
		new(value?:any): DefaultRouteTrinityDto;
		readonly prototype: DefaultRouteTrinityDto;
	}

	const DefaultRouteTrinityDto: DefaultRouteTrinityDtoConstructor;

	interface DependsOnServicesDto extends NSXDependsOnServicesDto
	{
		readonly services: any;

	}

	interface DependsOnServicesDtoConstructor {
		new(value?:any): DependsOnServicesDto;
		readonly prototype: DependsOnServicesDto;
	}

	const DependsOnServicesDto: DependsOnServicesDtoConstructor;

	interface DeployInfoDto extends NSXDeployInfoDto
	{
		readonly controllerId: any;
		readonly exceptionMessage: any;
		readonly progress: any;
		readonly status: any;
		readonly vmId: any;

	}

	interface DeployInfoDtoConstructor {
		new(value?:any): DeployInfoDto;
		readonly prototype: DeployInfoDto;
	}

	const DeployInfoDto: DeployInfoDtoConstructor;

	interface DeployInfoListDto extends NSXDeployInfoListDto
	{
		readonly list: any;

	}

	interface DeployInfoListDtoConstructor {
		new(value?:any): DeployInfoListDto;
		readonly prototype: DeployInfoListDto;
	}

	const DeployInfoListDto: DeployInfoListDtoConstructor;

	interface DeploymentContainerDto extends NSXDeploymentContainerDto
	{
		readonly description: any;
		readonly hypervisorType: any;
		readonly id: any;
		readonly keyValue: any;
		readonly name: any;
		readonly revision: any;

	}

	interface DeploymentContainerDtoConstructor {
		new(value?:any): DeploymentContainerDto;
		readonly prototype: DeploymentContainerDto;
	}

	const DeploymentContainerDto: DeploymentContainerDtoConstructor;

	interface DeploymentNotificationDto extends NSXDeploymentNotificationDto
	{
		readonly agents: any;
		readonly clusterId: any;

	}

	interface DeploymentNotificationDtoConstructor {
		new(value?:any): DeploymentNotificationDto;
		readonly prototype: DeploymentNotificationDto;
	}

	const DeploymentNotificationDto: DeploymentNotificationDtoConstructor;

	interface DeploymentNotificationsDto extends NSXDeploymentNotificationsDto
	{
		readonly notifications: any;
		readonly serviceId: any;
		readonly serviceInstanceId: any;

	}

	interface DeploymentNotificationsDtoConstructor {
		new(value?:any): DeploymentNotificationsDto;
		readonly prototype: DeploymentNotificationsDto;
	}

	const DeploymentNotificationsDto: DeploymentNotificationsDtoConstructor;

	interface DeploymentUnitConflictInfoDto extends NSXDeploymentUnitConflictInfoDto
	{
		readonly cluster: any;
		readonly deploymentUnitId: any;
		readonly serviceId: any;
		readonly serviceName: any;

	}

	interface DeploymentUnitConflictInfoDtoConstructor {
		new(value?:any): DeploymentUnitConflictInfoDto;
		readonly prototype: DeploymentUnitConflictInfoDto;
	}

	const DeploymentUnitConflictInfoDto: DeploymentUnitConflictInfoDtoConstructor;

	interface DeploymentUnitDto extends NSXDeploymentUnitDto
	{
		readonly cluster: any;
		readonly datastore: any;
		readonly deploymentUnitId: any;
		readonly dvPortGroup: any;
		readonly installedVersion: any;
		readonly internalService: any;
		readonly ipPool: any;
		readonly operationalStatus: any;
		readonly progressStatus: any;
		readonly serviceId: any;
		readonly serviceName: any;
		readonly serviceStatus: any;
		readonly upgradeAvailable: any;
		readonly upgradeNeedsNetworkAndDsSettings: any;
		readonly vibOnlyAgency: any;
		readonly visibleInFabricUI: any;

	}

	interface DeploymentUnitDtoConstructor {
		new(value?:any): DeploymentUnitDto;
		readonly prototype: DeploymentUnitDto;
	}

	const DeploymentUnitDto: DeploymentUnitDtoConstructor;

	interface DeploymentUnitsConflictInfoDto extends NSXDeploymentUnitsConflictInfoDto
	{
		readonly allowedOperations: any;
		readonly deploymentUnitsInfo: any;

	}

	interface DeploymentUnitsConflictInfoDtoConstructor {
		new(value?:any): DeploymentUnitsConflictInfoDto;
		readonly prototype: DeploymentUnitsConflictInfoDto;
	}

	const DeploymentUnitsConflictInfoDto: DeploymentUnitsConflictInfoDtoConstructor;

	interface DeploymentUnitsDto extends NSXDeploymentUnitsDto
	{
		readonly deploymentUnits: any;

	}

	interface DeploymentUnitsDtoConstructor {
		new(value?:any): DeploymentUnitsDto;
		readonly prototype: DeploymentUnitsDto;
	}

	const DeploymentUnitsDto: DeploymentUnitsDtoConstructor;

	interface DhcpConfigDto extends NSXDhcpConfigDto
	{
		enabled: any;
		readonly ipPools: any;
		readonly logging: any;
		readonly staticBindings: any;
		template: any;
		version: any;

	}

	interface DhcpConfigDtoConstructor {
		new(value?:any): DhcpConfigDto;
		readonly prototype: DhcpConfigDto;
	}

	const DhcpConfigDto: DhcpConfigDtoConstructor;

	interface DhcpConfigTrinityDto extends NSXDhcpConfigTrinityDto
	{
		enabled: any;
		readonly ipPools: any;
		readonly logging: any;
		readonly relay: any;
		readonly staticBindings: any;
		template: any;
		version: any;

	}

	interface DhcpConfigTrinityDtoConstructor {
		new(value?:any): DhcpConfigTrinityDto;
		readonly prototype: DhcpConfigTrinityDto;
	}

	const DhcpConfigTrinityDto: DhcpConfigTrinityDtoConstructor;

	interface DhcpConfigTrinityUIDto extends NSXDhcpConfigTrinityUIDto
	{
		enabled: any;
		readonly ipPools: any;
		readonly logging: any;
		readonly relay: any;
		readonly staticBindings: any;
		template: any;
		version: any;

	}

	interface DhcpConfigTrinityUIDtoConstructor {
		new(value?:any): DhcpConfigTrinityUIDto;
		readonly prototype: DhcpConfigTrinityUIDto;
	}

	const DhcpConfigTrinityUIDto: DhcpConfigTrinityUIDtoConstructor;

	interface DhcpLeaseInfoDto extends NSXDhcpLeaseInfoDto
	{
		readonly hostLeaseInfosDto: any;
		readonly timeStamp: any;

	}

	interface DhcpLeaseInfoDtoConstructor {
		new(value?:any): DhcpLeaseInfoDto;
		readonly prototype: DhcpLeaseInfoDto;
	}

	const DhcpLeaseInfoDto: DhcpLeaseInfoDtoConstructor;

	interface DhcpPool extends NSXDhcpPool
	{
		autoConfigureDNS: any;
		readonly defaultGateway: any;
		readonly dnsType: any;
		readonly domainName: any;
		id: any;
		readonly ipRange: any;
		readonly leaseTime: any;
		readonly poolId: any;
		readonly primaryNameServer: any;
		readonly secondaryNameServer: any;

	}

	interface DhcpPoolConstructor {
		new(value?:any): DhcpPool;
		readonly prototype: DhcpPool;
	}

	const DhcpPool: DhcpPoolConstructor;

	interface DhcpRelayDto extends NSXDhcpRelayDto
	{
		readonly maxHop: any;
		readonly relayAgents: any;
		readonly relayServer: any;

	}

	interface DhcpRelayDtoConstructor {
		new(value?:any): DhcpRelayDto;
		readonly prototype: DhcpRelayDto;
	}

	const DhcpRelayDto: DhcpRelayDtoConstructor;

	interface DhcpRelayUIDto extends NSXDhcpRelayUIDto
	{
		readonly maxHop: any;
		readonly relayAgents: any;
		readonly relayServer: any;

	}

	interface DhcpRelayUIDtoConstructor {
		new(value?:any): DhcpRelayUIDto;
		readonly prototype: DhcpRelayUIDto;
	}

	const DhcpRelayUIDto: DhcpRelayUIDtoConstructor;

	interface DnsClientDto extends NSXDnsClientDto
	{
		readonly domainName: any;
		readonly primaryDns: any;
		readonly secondaryDns: any;

	}

	interface DnsClientDtoConstructor {
		new(value?:any): DnsClientDto;
		readonly prototype: DnsClientDto;
	}

	const DnsClientDto: DnsClientDtoConstructor;

	interface DnsConfigDto extends NSXDnsConfigDto
	{
		readonly cacheSize: any;
		readonly dnsServers: any;
		readonly dnsViews: any;
		readonly dnsZones: any;
		enabled: any;
		readonly listeners: any;
		readonly logging: any;
		template: any;
		version: any;

	}

	interface DnsConfigDtoConstructor {
		new(value?:any): DnsConfigDto;
		readonly prototype: DnsConfigDto;
	}

	const DnsConfigDto: DnsConfigDtoConstructor;

	interface DnsForwardersDto extends NSXDnsForwardersDto
	{
		readonly ipAddress: any;

	}

	interface DnsForwardersDtoConstructor {
		new(value?:any): DnsForwardersDto;
		readonly prototype: DnsForwardersDto;
	}

	const DnsForwardersDto: DnsForwardersDtoConstructor;

	interface DnsListenersDto extends NSXDnsListenersDto
	{
		ipAddress: any;
		readonly vnic: any;

	}

	interface DnsListenersDtoConstructor {
		new(value?:any): DnsListenersDto;
		readonly prototype: DnsListenersDto;
	}

	const DnsListenersDto: DnsListenersDtoConstructor;

	interface DnsRecordDto extends NSXDnsRecordDto
	{
		readonly configSource: any;
		readonly description: any;
		readonly name: any;
		readonly recordId: any;
		readonly recordValues: any;
		readonly ttl: any;
		readonly type: any;

	}

	interface DnsRecordDtoConstructor {
		new(value?:any): DnsRecordDto;
		readonly prototype: DnsRecordDto;
	}

	const DnsRecordDto: DnsRecordDtoConstructor;

	interface DnsRecordsDto extends NSXDnsRecordsDto
	{
		readonly dnsRecord: any;

	}

	interface DnsRecordsDtoConstructor {
		new(value?:any): DnsRecordsDto;
		readonly prototype: DnsRecordsDto;
	}

	const DnsRecordsDto: DnsRecordsDtoConstructor;

	interface DnsServersDto extends NSXDnsServersDto
	{
		readonly primaryDns: any;
		readonly secondaryDns: any;
		readonly tertiaryDns: any;

	}

	interface DnsServersDtoConstructor {
		new(value?:any): DnsServersDto;
		readonly prototype: DnsServersDto;
	}

	const DnsServersDto: DnsServersDtoConstructor;

	interface DnsSoaDto extends NSXDnsSoaDto
	{
		readonly email: any;
		readonly expire: any;
		readonly minimumTTL: any;
		readonly MName: any;
		readonly refresh: any;
		readonly retry: any;
		readonly serial: any;
		readonly ttl: any;

	}

	interface DnsSoaDtoConstructor {
		new(value?:any): DnsSoaDto;
		readonly prototype: DnsSoaDto;
	}

	const DnsSoaDto: DnsSoaDtoConstructor;

	interface DnsStatsDto extends NSXDnsStatsDto
	{
		readonly cachedDBRRSet: any;
		readonly requests: any;
		readonly responses: any;
		readonly timeStamp: any;

	}

	interface DnsStatsDtoConstructor {
		new(value?:any): DnsStatsDto;
		readonly prototype: DnsStatsDto;
	}

	const DnsStatsDto: DnsStatsDtoConstructor;

	interface DnsViewDto extends NSXDnsViewDto
	{
		readonly enabled: any;
		readonly forwarders: any;
		readonly name: any;
		readonly recursion: any;
		readonly viewId: any;
		readonly viewMatch: any;

	}

	interface DnsViewDtoConstructor {
		new(value?:any): DnsViewDto;
		readonly prototype: DnsViewDto;
	}

	const DnsViewDto: DnsViewDtoConstructor;

	interface DnsViewsDto extends NSXDnsViewsDto
	{
		readonly dnsView: any;

	}

	interface DnsViewsDtoConstructor {
		new(value?:any): DnsViewsDto;
		readonly prototype: DnsViewsDto;
	}

	const DnsViewsDto: DnsViewsDtoConstructor;

	interface DnsZoneDto extends NSXDnsZoneDto
	{
		readonly autoGenerateInverseLookupZone: any;
		readonly belongingViews: any;
		readonly configSource: any;
		readonly description: any;
		readonly dnsRecords: any;
		readonly enabled: any;
		readonly forwarders: any;
		readonly soa: any;
		readonly type: any;
		readonly zoneId: any;
		readonly zoneName: any;

	}

	interface DnsZoneDtoConstructor {
		new(value?:any): DnsZoneDto;
		readonly prototype: DnsZoneDto;
	}

	const DnsZoneDto: DnsZoneDtoConstructor;

	interface DnsZonesDto extends NSXDnsZonesDto
	{
		readonly dnsZone: any;

	}

	interface DnsZonesDtoConstructor {
		new(value?:any): DnsZonesDto;
		readonly prototype: DnsZonesDto;
	}

	const DnsZonesDto: DnsZonesDtoConstructor;

	interface DynamicCriteriaDto extends NSXDynamicCriteriaDto
	{
		readonly criteria: any;
		readonly isValid: any;
		readonly key: any;
		readonly object: any;
		readonly operator: any;
		readonly value: any;

	}

	interface DynamicCriteriaDtoConstructor {
		new(value?:any): DynamicCriteriaDto;
		readonly prototype: DynamicCriteriaDto;
	}

	const DynamicCriteriaDto: DynamicCriteriaDtoConstructor;

	interface DynamicMemberDto extends NSXDynamicMemberDto
	{
		readonly dynamicSetDtoList: any;

	}

	interface DynamicMemberDtoConstructor {
		new(value?:any): DynamicMemberDto;
		readonly prototype: DynamicMemberDto;
	}

	const DynamicMemberDto: DynamicMemberDtoConstructor;

	interface DynamicServiceGwemDto extends NSXDynamicServiceGwemDto
	{
		readonly ip: any;
		readonly port: any;
		readonly service: any;

	}

	interface DynamicServiceGwemDtoConstructor {
		new(value?:any): DynamicServiceGwemDto;
		readonly prototype: DynamicServiceGwemDto;
	}

	const DynamicServiceGwemDto: DynamicServiceGwemDtoConstructor;

	interface DynamicSetDto extends NSXDynamicSetDto
	{
		readonly dynamicCriteria: any;
		readonly operator: any;

	}

	interface DynamicSetDtoConstructor {
		new(value?:any): DynamicSetDto;
		readonly prototype: DynamicSetDto;
	}

	const DynamicSetDto: DynamicSetDtoConstructor;

	interface EamAgenciesConflictInfoDto extends NSXEamAgenciesConflictInfoDto
	{
		readonly agenciesInfo: any;
		readonly allowedOperations: any;

	}

	interface EamAgenciesConflictInfoDtoConstructor {
		new(value?:any): EamAgenciesConflictInfoDto;
		readonly prototype: EamAgenciesConflictInfoDto;
	}

	const EamAgenciesConflictInfoDto: EamAgenciesConflictInfoDtoConstructor;

	interface EamAgencyConflictInfoDto extends NSXEamAgencyConflictInfoDto
	{
		readonly agencyId: any;
		readonly agencyName: any;

	}

	interface EamAgencyConflictInfoDtoConstructor {
		new(value?:any): EamAgencyConflictInfoDto;
		readonly prototype: EamAgencyConflictInfoDto;
	}

	const EamAgencyConflictInfoDto: EamAgencyConflictInfoDtoConstructor;

	interface Edge extends NSXEdge
	{
		readonly apiVersion: any;
		readonly datacenterMoid: any;
		readonly datacenterName: any;
		description: any;
		readonly edgeType: any;
		id: any;
		readonly lbAsJson: any;
		name: any;
		readonly nics: any;
		readonly nicsAsJson: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		readonly state: any;
		readonly tenantId: any;
		readonly vcUniqueId: any;
		readonly vmHostName: any;
		readonly vmId: any;
		readonly vmName: any;

		lb(): LoadBalancerInv;
		nics(): NicsInv;
	}

	interface EdgeConstructor {
		new(value?:any): Edge;
		readonly prototype: Edge;
	}

	const Edge: EdgeConstructor;

	interface EdgeAppliancesSummaryDto extends NSXEdgeAppliancesSummaryDto
	{
		readonly activeVseHaIndex: any;
		readonly applianceSize: any;
		readonly dataStoreMoidOfActiveVse: any;
		readonly dataStoreNameOfActiveVse: any;
		readonly fqdn: any;
		readonly hostMoidOfActiveVse: any;
		readonly hostNameOfActiveVse: any;
		readonly numberOfDeployedVms: any;
		readonly resourcePoolMoidOfActiveVse: any;
		readonly resourcePoolNameOfActiveVse: any;
		readonly statusFromVseUpdatedOn: any;
		readonly vmBuildInfo: any;
		readonly vmMoidOfActiveVse: any;
		readonly vmNameOfActiveVse: any;
		readonly vmVersion: any;

	}

	interface EdgeAppliancesSummaryDtoConstructor {
		new(value?:any): EdgeAppliancesSummaryDto;
		readonly prototype: EdgeAppliancesSummaryDto;
	}

	const EdgeAppliancesSummaryDto: EdgeAppliancesSummaryDtoConstructor;

	interface EdgeBaseDto extends NSXEdgeBaseDto
	{
		readonly appliances: any;
		readonly autoConfiguration: any;
		readonly cliSettings: any;
		readonly datacenterMoid: any;
		readonly datacenterName: any;
		readonly description: any;
		readonly enableAesni: any;
		readonly enableFips: any;
		readonly featureConfigs: any;
		readonly fqdn: any;
		readonly id: any;
		readonly name: any;
		readonly status: any;
		readonly tenant: any;
		readonly version: any;
		readonly vnics: any;
		readonly vseLogLevel: any;

	}

	interface EdgeBaseDtoConstructor {
		new(value?:any): EdgeBaseDto;
		readonly prototype: EdgeBaseDto;
	}

	const EdgeBaseDto: EdgeBaseDtoConstructor;

	interface EdgeCliSettingsDto extends NSXEdgeCliSettingsDto
	{
		readonly password: any;
		readonly passwordExpiry: any;
		readonly remoteAccess: any;
		readonly sshLoginBannerText: any;
		readonly userName: any;

	}

	interface EdgeCliSettingsDtoConstructor {
		new(value?:any): EdgeCliSettingsDto;
		readonly prototype: EdgeCliSettingsDto;
	}

	const EdgeCliSettingsDto: EdgeCliSettingsDtoConstructor;

	interface EdgeDto extends NSXEdgeDto
	{
		appliances: any;
		autoConfiguration: any;
		cliSettings: any;
		datacenterMoid: any;
		datacenterName: any;
		description: any;
		enableAesni: any;
		enableFips: any;
		readonly enableTcpLoose: any;
		featureConfigs: any;
		fqdn: any;
		id: any;
		name: any;
		status: any;
		tenant: any;
		version: any;
		vnics: any;
		vseLogLevel: any;

	}

	interface EdgeDtoConstructor {
		new(value?:any): EdgeDto;
		readonly prototype: EdgeDto;
	}

	const EdgeDto: EdgeDtoConstructor;

	interface EdgeFeatureCapabilitiesDto extends NSXEdgeFeatureCapabilitiesDto
	{
		readonly featureCapabilities: any;
		readonly timestamp: any;

	}

	interface EdgeFeatureCapabilitiesDtoConstructor {
		new(value?:any): EdgeFeatureCapabilitiesDto;
		readonly prototype: EdgeFeatureCapabilitiesDto;
	}

	const EdgeFeatureCapabilitiesDto: EdgeFeatureCapabilitiesDtoConstructor;

	interface EdgeFeatureCapabilityDto extends NSXEdgeFeatureCapabilityDto
	{
		readonly configurationLimits: any;
		readonly isSupported: any;
		readonly permission: any;
		readonly service: any;

	}

	interface EdgeFeatureCapabilityDtoConstructor {
		new(value?:any): EdgeFeatureCapabilityDto;
		readonly prototype: EdgeFeatureCapabilityDto;
	}

	const EdgeFeatureCapabilityDto: EdgeFeatureCapabilityDtoConstructor;

	interface EdgeFirewallAddressDto extends NSXEdgeFirewallAddressDto
	{
		readonly groupingObjectId: any;
		readonly ipAddress: any;
		readonly vnicGroupId: any;

	}

	interface EdgeFirewallAddressDtoConstructor {
		new(value?:any): EdgeFirewallAddressDto;
		readonly prototype: EdgeFirewallAddressDto;
	}

	const EdgeFirewallAddressDto: EdgeFirewallAddressDtoConstructor;

	interface EdgeFirewallApplicationDto extends NSXEdgeFirewallApplicationDto
	{
		readonly applicationId: any;
		readonly service: any;

	}

	interface EdgeFirewallApplicationDtoConstructor {
		new(value?:any): EdgeFirewallApplicationDto;
		readonly prototype: EdgeFirewallApplicationDto;
	}

	const EdgeFirewallApplicationDto: EdgeFirewallApplicationDtoConstructor;

	interface EdgeFirewallFirewallruleDto extends NSXEdgeFirewallFirewallruleDto
	{
		action: any;
		readonly application: any;
		description: any;
		readonly destination: any;
		direction: any;
		enabled: any;
		invalidApplication: any;
		invalidDestination: any;
		invalidSource: any;
		loggingEnabled: any;
		matchTranslated: any;
		name: any;
		ruleId: any;
		ruleTag: any;
		ruleType: any;
		readonly source: any;
		readonly sourcePort: any;
		statistics: any;

	}

	interface EdgeFirewallFirewallruleDtoConstructor {
		new(value?:any): EdgeFirewallFirewallruleDto;
		readonly prototype: EdgeFirewallFirewallruleDto;
	}

	const EdgeFirewallFirewallruleDto: EdgeFirewallFirewallruleDtoConstructor;

	interface EdgeFirewallUiFirewallconfigurationDto extends NSXEdgeFirewallUiFirewallconfigurationDto
	{
		readonly enabled: any;
		readonly layer3Rules: any;
		readonly scope: any;

	}

	interface EdgeFirewallUiFirewallconfigurationDtoConstructor {
		new(value?:any): EdgeFirewallUiFirewallconfigurationDto;
		readonly prototype: EdgeFirewallUiFirewallconfigurationDto;
	}

	const EdgeFirewallUiFirewallconfigurationDto: EdgeFirewallUiFirewallconfigurationDtoConstructor;

	interface EdgeFirewallUiFirewallruleDto extends NSXEdgeFirewallUiFirewallruleDto
	{
		readonly action: any;
		readonly comments: any;
		readonly destinationElements: any;
		readonly direction: any;
		readonly enabled: any;
		readonly id: any;
		readonly invalidDestination: any;
		readonly invalidService: any;
		readonly invalidSource: any;
		readonly logging: any;
		readonly matchTranslated: any;
		readonly name: any;
		readonly precedence: any;
		readonly ruleTag: any;
		readonly serviceElements: any;
		readonly sourceElements: any;
		readonly sourcePort: any;
		readonly statistics: any;

	}

	interface EdgeFirewallUiFirewallruleDtoConstructor {
		new(value?:any): EdgeFirewallUiFirewallruleDto;
		readonly prototype: EdgeFirewallUiFirewallruleDto;
	}

	const EdgeFirewallUiFirewallruleDto: EdgeFirewallUiFirewallruleDtoConstructor;

	interface EdgeInstallTaskSummaryDto extends NSXEdgeInstallTaskSummaryDto
	{
		readonly failedInstalls: any;
		readonly runningInstalls: any;

	}

	interface EdgeInstallTaskSummaryDtoConstructor {
		new(value?:any): EdgeInstallTaskSummaryDto;
		readonly prototype: EdgeInstallTaskSummaryDto;
	}

	const EdgeInstallTaskSummaryDto: EdgeInstallTaskSummaryDtoConstructor;

	interface EdgeInv extends NSXEdgeInv
	{
		readonly displayName: any;
		id: any;

		edgePages(): EdgePage;
	}

	interface EdgeInvConstructor {
		new(value?:any): EdgeInv;
		readonly prototype: EdgeInv;
	}

	const EdgeInv: EdgeInvConstructor;

	interface EdgeJobsStatusDto extends NSXEdgeJobsStatusDto
	{
		readonly edgeJob: any;

	}

	interface EdgeJobsStatusDtoConstructor {
		new(value?:any): EdgeJobsStatusDto;
		readonly prototype: EdgeJobsStatusDto;
	}

	const EdgeJobsStatusDto: EdgeJobsStatusDtoConstructor;

	interface EdgeJobStatusDto extends NSXEdgeJobStatusDto
	{
		readonly edgeId: any;
		readonly jobId: any;
		readonly message: any;
		readonly result: any;
		readonly status: any;

	}

	interface EdgeJobStatusDtoConstructor {
		new(value?:any): EdgeJobStatusDto;
		readonly prototype: EdgeJobStatusDto;
	}

	const EdgeJobStatusDto: EdgeJobStatusDtoConstructor;

	interface EdgePage extends NSXEdgePage
	{
		displayName: any;
		id: any;
		pageSize: any;
		startIndex: any;
		totalCount: any;

		edges(): Edge;
	}

	interface EdgePageConstructor {
		new(value?:any): EdgePage;
		readonly prototype: EdgePage;
	}

	const EdgePage: EdgePageConstructor;

	interface EdgePageDto extends NSXEdgePageDto
	{
		readonly edgePage: any;

	}

	interface EdgePageDtoConstructor {
		new(value?:any): EdgePageDto;
		readonly prototype: EdgePageDto;
	}

	const EdgePageDto: EdgePageDtoConstructor;

	interface EdgeProfileSummariesDto extends NSXEdgeProfileSummariesDto
	{
		readonly summaries: any;

	}

	interface EdgeProfileSummariesDtoConstructor {
		new(value?:any): EdgeProfileSummariesDto;
		readonly prototype: EdgeProfileSummariesDto;
	}

	const EdgeProfileSummariesDto: EdgeProfileSummariesDtoConstructor;

	interface EdgeProfileSummaryDto extends NSXEdgeProfileSummaryDto
	{

	}

	interface EdgeProfileSummaryDtoConstructor {
		new(value?:any): EdgeProfileSummaryDto;
		readonly prototype: EdgeProfileSummaryDto;
	}

	const EdgeProfileSummaryDto: EdgeProfileSummaryDtoConstructor;

	interface EdgeRoutingTrinityGlobalconfigDto extends NSXEdgeRoutingTrinityGlobalconfigDto
	{
		readonly ecmp: any;
		readonly ipPrefixes: any;
		readonly logging: any;
		readonly routerId: any;

	}

	interface EdgeRoutingTrinityGlobalconfigDtoConstructor {
		new(value?:any): EdgeRoutingTrinityGlobalconfigDto;
		readonly prototype: EdgeRoutingTrinityGlobalconfigDto;
	}

	const EdgeRoutingTrinityGlobalconfigDto: EdgeRoutingTrinityGlobalconfigDtoConstructor;

	interface EdgeSslvpnIppoolDto extends NSXEdgeSslvpnIppoolDto
	{
		readonly description: any;
		readonly dnsSuffix: any;
		readonly enabled: any;
		readonly gateway: any;
		readonly ipRange: any;
		readonly netmask: any;
		readonly objectId: any;
		readonly order: any;
		readonly primaryDns: any;
		readonly secondaryDns: any;
		readonly winsServer: any;

	}

	interface EdgeSslvpnIppoolDtoConstructor {
		new(value?:any): EdgeSslvpnIppoolDto;
		readonly prototype: EdgeSslvpnIppoolDto;
	}

	const EdgeSslvpnIppoolDto: EdgeSslvpnIppoolDtoConstructor;

	interface EdgeSslvpnIppoolsDto extends NSXEdgeSslvpnIppoolsDto
	{
		readonly ipPools: any;

	}

	interface EdgeSslvpnIppoolsDtoConstructor {
		new(value?:any): EdgeSslvpnIppoolsDto;
		readonly prototype: EdgeSslvpnIppoolsDto;
	}

	const EdgeSslvpnIppoolsDto: EdgeSslvpnIppoolsDtoConstructor;

	interface EdgeStatusDto extends NSXEdgeStatusDto
	{
		readonly activeVseHaIndex: any;
		readonly edgeStatus: any;
		readonly edgeVmStatus: any;
		readonly featureStatuses: any;
		readonly publishStatus: any;
		readonly systemStatus: any;
		readonly timestamp: any;
		readonly version: any;

	}

	interface EdgeStatusDtoConstructor {
		new(value?:any): EdgeStatusDto;
		readonly prototype: EdgeStatusDto;
	}

	const EdgeStatusDto: EdgeStatusDtoConstructor;

	interface EdgeSummariesDto extends NSXEdgeSummariesDto
	{
		readonly summaries: any;

	}

	interface EdgeSummariesDtoConstructor {
		new(value?:any): EdgeSummariesDto;
		readonly prototype: EdgeSummariesDto;
	}

	const EdgeSummariesDto: EdgeSummariesDtoConstructor;

	interface EdgeSummaryDto extends NSXEdgeSummaryDto
	{
		readonly allowedActions: any;
		readonly apiVersion: any;
		readonly appliancesSummary: any;
		clientHandle: any;
		readonly datacenterMoid: any;
		readonly datacenterName: any;
		description: any;
		readonly edgeAssistId: any;
		readonly edgeStatus: any;
		readonly edgeType: any;
		extendedAttributes: any;
		readonly featureCapabilities: any;
		readonly hypervisorAssist: any;
		readonly id: any;
		readonly isUpgradeAvailable: any;
		readonly lrouterUuid: any;
		name: any;
		readonly numberOfConnectedVnics: any;
		objectId: any;
		objectTypeName: any;
		readonly recentJobInfo: any;
		revision: any;
		scope: any;
		readonly state: any;
		readonly tenantId: any;
		type: any;
		vsmUuid: any;

	}

	interface EdgeSummaryDtoConstructor {
		new(value?:any): EdgeSummaryDto;
		readonly prototype: EdgeSummaryDto;
	}

	const EdgeSummaryDto: EdgeSummaryDtoConstructor;

	interface EdgeTrinityDto extends NSXEdgeTrinityDto
	{
		appliances: any;
		autoConfiguration: any;
		readonly clientHandle: any;
		cliSettings: any;
		datacenterMoid: any;
		datacenterName: any;
		description: any;
		readonly dnsClient: any;
		readonly edgeAssistId: any;
		enableAesni: any;
		enableFips: any;
		featureConfigs: any;
		fqdn: any;
		readonly hypervisorAssist: any;
		id: any;
		readonly interfaces: any;
		readonly lrouterUuid: any;
		readonly mgmtInterface: any;
		name: any;
		readonly queryDaemon: any;
		status: any;
		tenant: any;
		readonly type: any;
		version: any;
		vnics: any;
		vseLogLevel: any;

	}

	interface EdgeTrinityDtoConstructor {
		new(value?:any): EdgeTrinityDto;
		readonly prototype: EdgeTrinityDto;
	}

	const EdgeTrinityDto: EdgeTrinityDtoConstructor;

	interface EdgeVMRuntimeStatusDto extends NSXEdgeVMRuntimeStatusDto
	{
		readonly edgeVMStatus: any;
		readonly haState: any;
		readonly id: any;
		readonly index: any;
		readonly name: any;

	}

	interface EdgeVMRuntimeStatusDtoConstructor {
		new(value?:any): EdgeVMRuntimeStatusDto;
		readonly prototype: EdgeVMRuntimeStatusDto;
	}

	const EdgeVMRuntimeStatusDto: EdgeVMRuntimeStatusDtoConstructor;

	interface EdgeVnicAddressGroupDto extends NSXEdgeVnicAddressGroupDto
	{
		readonly primaryAddress: any;
		readonly secondaryAddresses: any;
		readonly subnetMask: any;
		readonly subnetPrefixLength: any;

	}

	interface EdgeVnicAddressGroupDtoConstructor {
		new(value?:any): EdgeVnicAddressGroupDto;
		readonly prototype: EdgeVnicAddressGroupDto;
	}

	const EdgeVnicAddressGroupDto: EdgeVnicAddressGroupDtoConstructor;

	interface EdgeVnicAddressGroupsDto extends NSXEdgeVnicAddressGroupsDto
	{
		readonly addressGroups: any;

	}

	interface EdgeVnicAddressGroupsDtoConstructor {
		new(value?:any): EdgeVnicAddressGroupsDto;
		readonly prototype: EdgeVnicAddressGroupsDto;
	}

	const EdgeVnicAddressGroupsDto: EdgeVnicAddressGroupsDtoConstructor;

	interface EventCodeDto extends NSXEventCodeDto
	{
		readonly description: any;
		readonly id: any;
		readonly severity: any;

	}

	interface EventCodeDtoConstructor {
		new(value?:any): EventCodeDto;
		readonly prototype: EventCodeDto;
	}

	const EventCodeDto: EventCodeDtoConstructor;

	interface EventCodeListDto extends NSXEventCodeListDto
	{
		readonly eventCodes: any;

	}

	interface EventCodeListDtoConstructor {
		new(value?:any): EventCodeListDto;
		readonly prototype: EventCodeListDto;
	}

	const EventCodeListDto: EventCodeListDtoConstructor;

	interface EventThresholdsDto extends NSXEventThresholdsDto
	{
		readonly cps: any;
		readonly cpu: any;
		readonly memory: any;

	}

	interface EventThresholdsDtoConstructor {
		new(value?:any): EventThresholdsDto;
		readonly prototype: EventThresholdsDto;
	}

	const EventThresholdsDto: EventThresholdsDtoConstructor;

	interface ExcludeListConfigurationDto extends NSXExcludeListConfigurationDto
	{
		clientHandle: any;
		description: any;
		readonly excludeMembers: any;
		extendedAttributes: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		scope: any;
		type: any;
		vsmUuid: any;

	}

	interface ExcludeListConfigurationDtoConstructor {
		new(value?:any): ExcludeListConfigurationDto;
		readonly prototype: ExcludeListConfigurationDto;
	}

	const ExcludeListConfigurationDto: ExcludeListConfigurationDtoConstructor;

	interface ExcludeMemberDto extends NSXExcludeMemberDto
	{
		readonly member: any;

	}

	interface ExcludeMemberDtoConstructor {
		new(value?:any): ExcludeMemberDto;
		readonly prototype: ExcludeMemberDto;
	}

	const ExcludeMemberDto: ExcludeMemberDtoConstructor;

	interface ExtendedAttributeDto extends NSXExtendedAttributeDto
	{
		readonly name: any;
		readonly value: any;

	}

	interface ExtendedAttributeDtoConstructor {
		new(value?:any): ExtendedAttributeDto;
		readonly prototype: ExtendedAttributeDto;
	}

	const ExtendedAttributeDto: ExtendedAttributeDtoConstructor;

	interface FabricSyncConflictInfoDto extends NSXFabricSyncConflictInfoDto
	{
		readonly agencies: any;
		readonly conflictExist: any;
		readonly deploymentUnits: any;

	}

	interface FabricSyncConflictInfoDtoConstructor {
		new(value?:any): FabricSyncConflictInfoDto;
		readonly prototype: FabricSyncConflictInfoDto;
	}

	const FabricSyncConflictInfoDto: FabricSyncConflictInfoDtoConstructor;

	interface FailedPublishInfoDto extends NSXFailedPublishInfoDto
	{
		readonly applianceIp: any;
		readonly errorDescription: any;
		readonly timestamp: any;

	}

	interface FailedPublishInfoDtoConstructor {
		new(value?:any): FailedPublishInfoDto;
		readonly prototype: FailedPublishInfoDto;
	}

	const FailedPublishInfoDto: FailedPublishInfoDtoConstructor;

	interface FailSafeConfiguration extends NSXFailSafeConfiguration
	{
		readonly failSafeMode: any;

	}

	interface FailSafeConfigurationConstructor {
		new(value?:any): FailSafeConfiguration;
		readonly prototype: FailSafeConfiguration;
	}

	const FailSafeConfiguration: FailSafeConfigurationConstructor;

	interface FaultPolicyDto extends NSXFaultPolicyDto
	{
		readonly faultAction: any;
		readonly retryInterval: any;
		readonly retryLimit: any;

	}

	interface FaultPolicyDtoConstructor {
		new(value?:any): FaultPolicyDto;
		readonly prototype: FaultPolicyDto;
	}

	const FaultPolicyDto: FaultPolicyDtoConstructor;

	interface FeatureConfigDto extends NSXFeatureConfigDto
	{
		readonly enabled: any;
		readonly template: any;
		readonly version: any;

	}

	interface FeatureConfigDtoConstructor {
		new(value?:any): FeatureConfigDto;
		readonly prototype: FeatureConfigDto;
	}

	const FeatureConfigDto: FeatureConfigDtoConstructor;

	interface FeatureConfigsDto extends NSXFeatureConfigsDto
	{
		readonly features: any;

	}

	interface FeatureConfigsDtoConstructor {
		new(value?:any): FeatureConfigsDto;
		readonly prototype: FeatureConfigsDto;
	}

	const FeatureConfigsDto: FeatureConfigsDtoConstructor;

	interface FeatureIdListDto extends NSXFeatureIdListDto
	{
		readonly features: any;

	}

	interface FeatureIdListDtoConstructor {
		new(value?:any): FeatureIdListDto;
		readonly prototype: FeatureIdListDto;
	}

	const FeatureIdListDto: FeatureIdListDtoConstructor;

	interface FeatureInfoDto extends NSXFeatureInfoDto
	{
		readonly description: any;
		readonly featureId: any;
		readonly name: any;
		readonly version: any;

	}

	interface FeatureInfoDtoConstructor {
		new(value?:any): FeatureInfoDto;
		readonly prototype: FeatureInfoDto;
	}

	const FeatureInfoDto: FeatureInfoDtoConstructor;

	interface FeatureInfoListDto extends NSXFeatureInfoListDto
	{
		readonly infos: any;

	}

	interface FeatureInfoListDtoConstructor {
		new(value?:any): FeatureInfoListDto;
		readonly prototype: FeatureInfoListDto;
	}

	const FeatureInfoListDto: FeatureInfoListDtoConstructor;

	interface FeatureStatusDto extends NSXFeatureStatusDto
	{
		readonly configured: any;
		readonly publishStatus: any;
		readonly serverStatus: any;
		readonly service: any;
		readonly status: any;

	}

	interface FeatureStatusDtoConstructor {
		new(value?:any): FeatureStatusDto;
		readonly prototype: FeatureStatusDto;
	}

	const FeatureStatusDto: FeatureStatusDtoConstructor;

	interface FileDataDto extends NSXFileDataDto
	{
		readonly fileContent: any;
		readonly fileExtension: any;

	}

	interface FileDataDtoConstructor {
		new(value?:any): FileDataDto;
		readonly prototype: FileDataDto;
	}

	const FileDataDto: FileDataDtoConstructor;

	interface FilesystemStats extends NSXFilesystemStats
	{
		readonly mount_point: any;
		readonly space_total: any;
		readonly space_used: any;

	}

	interface FilesystemStatsConstructor {
		new(value?:any): FilesystemStats;
		readonly prototype: FilesystemStats;
	}

	const FilesystemStats: FilesystemStatsConstructor;

	interface FilterDto extends NSXFilterDto
	{
		readonly attributeFilter: any;
		readonly conjunctionOperation: any;
		readonly objectType: any;
		readonly pagingInfo: any;
		readonly propertyFilter: any;

	}

	interface FilterDtoConstructor {
		new(value?:any): FilterDto;
		readonly prototype: FilterDto;
	}

	const FilterDto: FilterDtoConstructor;

	interface FiltersDto extends NSXFiltersDto
	{
		readonly filterSet: any;

	}

	interface FiltersDtoConstructor {
		new(value?:any): FiltersDto;
		readonly prototype: FiltersDto;
	}

	const FiltersDto: FiltersDtoConstructor;

	interface FirewallCentralizedcliVnicDto extends NSXFirewallCentralizedcliVnicDto
	{
		readonly filters: any;
		readonly macAddress: any;
		readonly portGroupId: any;
		readonly vnicId: any;
		readonly vnicName: any;

	}

	interface FirewallCentralizedcliVnicDtoConstructor {
		new(value?:any): FirewallCentralizedcliVnicDto;
		readonly prototype: FirewallCentralizedcliVnicDto;
	}

	const FirewallCentralizedcliVnicDto: FirewallCentralizedcliVnicDtoConstructor;

	interface FirewallCentralizedcliVnicsDto extends NSXFirewallCentralizedcliVnicsDto
	{
		readonly clusterId: any;
		readonly clusterName: any;
		readonly datacenterId: any;
		readonly datacenterName: any;
		readonly hostId: any;
		readonly hostName: any;
		readonly vmId: any;
		readonly vmName: any;
		readonly vnics: any;

	}

	interface FirewallCentralizedcliVnicsDtoConstructor {
		new(value?:any): FirewallCentralizedcliVnicsDto;
		readonly prototype: FirewallCentralizedcliVnicsDto;
	}

	const FirewallCentralizedcliVnicsDto: FirewallCentralizedcliVnicsDtoConstructor;

	interface FirewallConfigDto extends NSXFirewallConfigDto
	{
		readonly defaultPolicy: any;
		enabled: any;
		readonly firewallRules: any;
		template: any;
		version: any;

	}

	interface FirewallConfigDtoConstructor {
		new(value?:any): FirewallConfigDto;
		readonly prototype: FirewallConfigDto;
	}

	const FirewallConfigDto: FirewallConfigDtoConstructor;

	interface FirewallConfigHistoryInfoDto extends NSXFirewallConfigHistoryInfoDto
	{
		readonly configId: any;
		readonly status: any;
		readonly timestamp: any;
		readonly userId: any;

	}

	interface FirewallConfigHistoryInfoDtoConstructor {
		new(value?:any): FirewallConfigHistoryInfoDto;
		readonly prototype: FirewallConfigHistoryInfoDto;
	}

	const FirewallConfigHistoryInfoDto: FirewallConfigHistoryInfoDtoConstructor;

	interface FirewallConfigHistoryInfoListDto extends NSXFirewallConfigHistoryInfoListDto
	{
		readonly contextId: any;
		readonly firewallConfigHistoryInfo: any;

	}

	interface FirewallConfigHistoryInfoListDtoConstructor {
		new(value?:any): FirewallConfigHistoryInfoListDto;
		readonly prototype: FirewallConfigHistoryInfoListDto;
	}

	const FirewallConfigHistoryInfoListDto: FirewallConfigHistoryInfoListDtoConstructor;

	interface FirewallConfigTrinityDto extends NSXFirewallConfigTrinityDto
	{
		readonly defaultPolicy: any;
		enabled: any;
		readonly firewallRules: any;
		readonly globalConfig: any;
		template: any;
		version: any;

	}

	interface FirewallConfigTrinityDtoConstructor {
		new(value?:any): FirewallConfigTrinityDto;
		readonly prototype: FirewallConfigTrinityDto;
	}

	const FirewallConfigTrinityDto: FirewallConfigTrinityDtoConstructor;

	interface FirewallConfigurationDto extends NSXFirewallConfigurationDto
	{
		readonly contextId: any;
		readonly generationNumber: any;
		readonly layer2FirewallRule: any;
		readonly layer3FirewallRule: any;
		readonly provisioned: any;
		readonly timestamp: any;

	}

	interface FirewallConfigurationDtoConstructor {
		new(value?:any): FirewallConfigurationDto;
		readonly prototype: FirewallConfigurationDto;
	}

	const FirewallConfigurationDto: FirewallConfigurationDtoConstructor;

	interface FirewallConfigurationRESTDto extends NSXFirewallConfigurationRESTDto
	{
		readonly contextId: any;
		readonly generationNumber: any;
		readonly layer2Sections: any;
		readonly layer3RedirectSections: any;
		readonly layer3Sections: any;
		readonly provisioned: any;
		readonly timestamp: any;

	}

	interface FirewallConfigurationRESTDtoConstructor {
		new(value?:any): FirewallConfigurationRESTDto;
		readonly prototype: FirewallConfigurationRESTDto;
	}

	const FirewallConfigurationRESTDto: FirewallConfigurationRESTDtoConstructor;

	interface FirewallConfigurationUIDto extends NSXFirewallConfigurationUIDto
	{
		readonly deletedSections: any;
		readonly generationNumber: any;
		readonly isL2Filtered: any;
		readonly isL3Filtered: any;
		readonly isL3RedirectFiltered: any;
		readonly layer2Rules: any;
		readonly layer2sections: any;
		readonly layer3Rules: any;
		readonly layer3sections: any;
		readonly layer3TraffSteeringRules: any;
		readonly layer3TraffSteeringSections: any;
		readonly newFeaturesEnabled: any;
		readonly readyToSwitch: any;
		readonly scope: any;
		readonly status: any;

	}

	interface FirewallConfigurationUIDtoConstructor {
		new(value?:any): FirewallConfigurationUIDto;
		readonly prototype: FirewallConfigurationUIDto;
	}

	const FirewallConfigurationUIDto: FirewallConfigurationUIDtoConstructor;

	interface FirewallDestinationsDto extends NSXFirewallDestinationsDto
	{
		readonly destinationList: any;
		readonly excluded: any;

	}

	interface FirewallDestinationsDtoConstructor {
		new(value?:any): FirewallDestinationsDto;
		readonly prototype: FirewallDestinationsDto;
	}

	const FirewallDestinationsDto: FirewallDestinationsDtoConstructor;

	interface FirewallDraftRESTDto extends NSXFirewallDraftRESTDto
	{
		readonly config: any;
		readonly description: any;
		readonly id: any;
		readonly mode: any;
		readonly name: any;
		readonly preserve: any;
		readonly timestamp: any;
		readonly user: any;

	}

	interface FirewallDraftRESTDtoConstructor {
		new(value?:any): FirewallDraftRESTDto;
		readonly prototype: FirewallDraftRESTDto;
	}

	const FirewallDraftRESTDto: FirewallDraftRESTDtoConstructor;

	interface FirewallDraftsRESTDto extends NSXFirewallDraftsRESTDto
	{
		readonly firewallDrafts: any;

	}

	interface FirewallDraftsRESTDtoConstructor {
		new(value?:any): FirewallDraftsRESTDto;
		readonly prototype: FirewallDraftsRESTDto;
	}

	const FirewallDraftsRESTDto: FirewallDraftsRESTDtoConstructor;

	interface FirewallDraftsUIDto extends NSXFirewallDraftsUIDto
	{
		readonly firewallDrafts: any;

	}

	interface FirewallDraftsUIDtoConstructor {
		new(value?:any): FirewallDraftsUIDto;
		readonly prototype: FirewallDraftsUIDto;
	}

	const FirewallDraftsUIDto: FirewallDraftsUIDtoConstructor;

	interface FirewallDraftUIDto extends NSXFirewallDraftUIDto
	{
		readonly config: any;
		readonly description: any;
		readonly id: any;
		readonly mode: any;
		readonly name: any;
		readonly preserve: any;
		readonly timestamp: any;
		readonly user: any;

	}

	interface FirewallDraftUIDtoConstructor {
		new(value?:any): FirewallDraftUIDto;
		readonly prototype: FirewallDraftUIDto;
	}

	const FirewallDraftUIDto: FirewallDraftUIDtoConstructor;

	interface FirewallEventConfigurationDto extends NSXFirewallEventConfigurationDto
	{
		readonly enabled: any;
		readonly severity: any;

	}

	interface FirewallEventConfigurationDtoConstructor {
		new(value?:any): FirewallEventConfigurationDto;
		readonly prototype: FirewallEventConfigurationDto;
	}

	const FirewallEventConfigurationDto: FirewallEventConfigurationDtoConstructor;

	interface FirewallFailedpublishinfoDto extends NSXFirewallFailedpublishinfoDto
	{
		readonly applianceHostInfo: any;
		readonly errorDescription: any;
		readonly timestamp: any;

	}

	interface FirewallFailedpublishinfoDtoConstructor {
		new(value?:any): FirewallFailedpublishinfoDto;
		readonly prototype: FirewallFailedpublishinfoDto;
	}

	const FirewallFailedpublishinfoDto: FirewallFailedpublishinfoDtoConstructor;

	interface FirewallFilteredConfigurationRESTDto extends NSXFirewallFilteredConfigurationRESTDto
	{
		contextId: any;
		generationNumber: any;
		layer2Sections: any;
		layer3RedirectSections: any;
		layer3Sections: any;
		provisioned: any;
		timestamp: any;

	}

	interface FirewallFilteredConfigurationRESTDtoConstructor {
		new(value?:any): FirewallFilteredConfigurationRESTDto;
		readonly prototype: FirewallFilteredConfigurationRESTDto;
	}

	const FirewallFilteredConfigurationRESTDto: FirewallFilteredConfigurationRESTDtoConstructor;

	interface FirewallFirewallconfighistoryinfoDto extends NSXFirewallFirewallconfighistoryinfoDto
	{
		readonly configId: any;
		readonly status: any;
		readonly timestamp: any;
		readonly userId: any;

	}

	interface FirewallFirewallconfighistoryinfoDtoConstructor {
		new(value?:any): FirewallFirewallconfighistoryinfoDto;
		readonly prototype: FirewallFirewallconfighistoryinfoDto;
	}

	const FirewallFirewallconfighistoryinfoDto: FirewallFirewallconfighistoryinfoDtoConstructor;

	interface FirewallFirewallruleDto extends NSXFirewallFirewallruleDto
	{
		readonly action: any;
		readonly appliedToList: any;
		readonly destinations: any;
		readonly direction: any;
		readonly disabled: any;
		readonly displayRuleId: any;
		readonly dlbAlgorithmType: any;
		readonly dscpMarking: any;
		readonly id: any;
		readonly logged: any;
		readonly managedBy: any;
		readonly name: any;
		readonly notes: any;
		readonly packetType: any;
		readonly persistenceTimeout: any;
		readonly precedence: any;
		readonly section: any;
		readonly sectionId: any;
		readonly services: any;
		readonly siProfile: any;
		readonly siRuleIdList: any;
		readonly siVirtualserver: any;
		readonly sources: any;
		readonly stateless: any;
		readonly tag: any;
		readonly type: any;

	}

	interface FirewallFirewallruleDtoConstructor {
		new(value?:any): FirewallFirewallruleDto;
		readonly prototype: FirewallFirewallruleDto;
	}

	const FirewallFirewallruleDto: FirewallFirewallruleDtoConstructor;

	interface FirewallFirewallrulesDto extends NSXFirewallFirewallrulesDto
	{
		readonly generationNumber: any;
		readonly rules: any;

	}

	interface FirewallFirewallrulesDtoConstructor {
		new(value?:any): FirewallFirewallrulesDto;
		readonly prototype: FirewallFirewallrulesDto;
	}

	const FirewallFirewallrulesDto: FirewallFirewallrulesDtoConstructor;

	interface FirewallFlowfirewallruleinfoDto extends NSXFirewallFlowfirewallruleinfoDto
	{
		readonly firewallRule: any;
		readonly newFeaturesEnabled: any;
		readonly readyToSwitch: any;
		readonly scope: any;
		readonly sections: any;
		readonly status: any;

	}

	interface FirewallFlowfirewallruleinfoDtoConstructor {
		new(value?:any): FirewallFlowfirewallruleinfoDto;
		readonly prototype: FirewallFlowfirewallruleinfoDto;
	}

	const FirewallFlowfirewallruleinfoDto: FirewallFlowfirewallruleinfoDtoConstructor;

	interface FirewallGlobalConfigDto extends NSXFirewallGlobalConfigDto
	{
		readonly dropInvalidTraffic: any;
		readonly icmp6Timeout: any;
		readonly icmpTimeout: any;
		readonly ipGenericTimeout: any;
		readonly logInvalidTraffic: any;
		readonly tcpAllowOutOfWindowPackets: any;
		readonly tcpPickOngoingConnections: any;
		readonly tcpSendResetForClosedVsePorts: any;
		readonly tcpTimeoutClose: any;
		readonly tcpTimeoutEstablished: any;
		readonly tcpTimeoutOpen: any;
		readonly udpTimeout: any;

	}

	interface FirewallGlobalConfigDtoConstructor {
		new(value?:any): FirewallGlobalConfigDto;
		readonly prototype: FirewallGlobalConfigDto;
	}

	const FirewallGlobalConfigDto: FirewallGlobalConfigDtoConstructor;

	interface FirewallLayer2SectionsDto extends NSXFirewallLayer2SectionsDto
	{
		readonly layer2Sections: any;

	}

	interface FirewallLayer2SectionsDtoConstructor {
		new(value?:any): FirewallLayer2SectionsDto;
		readonly prototype: FirewallLayer2SectionsDto;
	}

	const FirewallLayer2SectionsDto: FirewallLayer2SectionsDtoConstructor;

	interface FirewallLayer3RedirectSectionsDto extends NSXFirewallLayer3RedirectSectionsDto
	{
		readonly layer3RedirectSections: any;

	}

	interface FirewallLayer3RedirectSectionsDtoConstructor {
		new(value?:any): FirewallLayer3RedirectSectionsDto;
		readonly prototype: FirewallLayer3RedirectSectionsDto;
	}

	const FirewallLayer3RedirectSectionsDto: FirewallLayer3RedirectSectionsDtoConstructor;

	interface FirewallLayer3SectionsDto extends NSXFirewallLayer3SectionsDto
	{
		readonly layer3Sections: any;

	}

	interface FirewallLayer3SectionsDtoConstructor {
		new(value?:any): FirewallLayer3SectionsDto;
		readonly prototype: FirewallLayer3SectionsDto;
	}

	const FirewallLayer3SectionsDto: FirewallLayer3SectionsDtoConstructor;

	interface FirewallPermissionsinfoDto extends NSXFirewallPermissionsinfoDto
	{
		readonly accessPermission: any;
		readonly dataPermission: any;
		readonly isAppLicensed: any;

	}

	interface FirewallPermissionsinfoDtoConstructor {
		new(value?:any): FirewallPermissionsinfoDto;
		readonly prototype: FirewallPermissionsinfoDto;
	}

	const FirewallPermissionsinfoDto: FirewallPermissionsinfoDtoConstructor;

	interface FirewallRule extends NSXFirewallRule
	{
		readonly action: any;
		readonly destination: any;
		id: any;
		readonly ruleName: any;
		readonly source: any;

	}

	interface FirewallRuleConstructor {
		new(value?:any): FirewallRule;
		readonly prototype: FirewallRule;
	}

	const FirewallRule: FirewallRuleConstructor;

	interface FirewallRuleBaseDto extends NSXFirewallRuleBaseDto
	{
		readonly action: any;
		readonly description: any;
		readonly direction: any;
		readonly enabled: any;
		readonly invalidApplication: any;
		readonly invalidDestination: any;
		readonly invalidSource: any;
		readonly loggingEnabled: any;
		readonly matchTranslated: any;
		readonly name: any;
		readonly ruleId: any;
		readonly ruleTag: any;
		readonly ruleType: any;
		readonly statistics: any;

	}

	interface FirewallRuleBaseDtoConstructor {
		new(value?:any): FirewallRuleBaseDto;
		readonly prototype: FirewallRuleBaseDto;
	}

	const FirewallRuleBaseDto: FirewallRuleBaseDtoConstructor;

	interface FirewallRuleflowstatsDto extends NSXFirewallRuleflowstatsDto
	{
		readonly bytes: any;
		readonly packets: any;
		readonly ruleId: any;

	}

	interface FirewallRuleflowstatsDtoConstructor {
		new(value?:any): FirewallRuleflowstatsDto;
		readonly prototype: FirewallRuleflowstatsDto;
	}

	const FirewallRuleflowstatsDto: FirewallRuleflowstatsDtoConstructor;

	interface FirewallRuleGwemDto extends NSXFirewallRuleGwemDto
	{
		readonly action: any;
		readonly destination: any;
		readonly id: any;
		readonly log: any;
		readonly op: any;
		readonly protocol: any;
		readonly source: any;

	}

	interface FirewallRuleGwemDtoConstructor {
		new(value?:any): FirewallRuleGwemDto;
		readonly prototype: FirewallRuleGwemDto;
	}

	const FirewallRuleGwemDto: FirewallRuleGwemDtoConstructor;

	interface FirewallRuleListGwemDto extends NSXFirewallRuleListGwemDto
	{
		readonly rule: any;

	}

	interface FirewallRuleListGwemDtoConstructor {
		new(value?:any): FirewallRuleListGwemDto;
		readonly prototype: FirewallRuleListGwemDto;
	}

	const FirewallRuleListGwemDto: FirewallRuleListGwemDtoConstructor;

	interface FirewallRuleResponseDto extends NSXFirewallRuleResponseDto
	{
		readonly generationNumber: any;
		readonly rule: any;
		readonly sectionContextId: any;

	}

	interface FirewallRuleResponseDtoConstructor {
		new(value?:any): FirewallRuleResponseDto;
		readonly prototype: FirewallRuleResponseDto;
	}

	const FirewallRuleResponseDto: FirewallRuleResponseDtoConstructor;

	interface FirewallRulesDto extends NSXFirewallRulesDto
	{
		readonly firewallRules: any;

	}

	interface FirewallRulesDtoConstructor {
		new(value?:any): FirewallRulesDto;
		readonly prototype: FirewallRulesDto;
	}

	const FirewallRulesDto: FirewallRulesDtoConstructor;

	interface FirewallRuleStatsDto extends NSXFirewallRuleStatsDto
	{
		readonly byteCount: any;
		readonly connectionCount: any;
		readonly packetCount: any;
		readonly timestamp: any;

	}

	interface FirewallRuleStatsDtoConstructor {
		new(value?:any): FirewallRuleStatsDto;
		readonly prototype: FirewallRuleStatsDto;
	}

	const FirewallRuleStatsDto: FirewallRuleStatsDtoConstructor;

	interface FirewallRulesTrinityDto extends NSXFirewallRulesTrinityDto
	{
		readonly firewallRules: any;

	}

	interface FirewallRulesTrinityDtoConstructor {
		new(value?:any): FirewallRulesTrinityDto;
		readonly prototype: FirewallRulesTrinityDto;
	}

	const FirewallRulesTrinityDto: FirewallRulesTrinityDtoConstructor;

	interface FirewallRuleTrinityDto extends NSXFirewallRuleTrinityDto
	{
		action: any;
		readonly application: any;
		description: any;
		readonly destination: any;
		direction: any;
		enabled: any;
		invalidApplication: any;
		invalidDestination: any;
		invalidSource: any;
		loggingEnabled: any;
		matchTranslated: any;
		name: any;
		ruleId: any;
		ruleTag: any;
		ruleType: any;
		readonly source: any;
		statistics: any;

	}

	interface FirewallRuleTrinityDtoConstructor {
		new(value?:any): FirewallRuleTrinityDto;
		readonly prototype: FirewallRuleTrinityDto;
	}

	const FirewallRuleTrinityDto: FirewallRuleTrinityDtoConstructor;

	interface FirewallSection extends NSXFirewallSection
	{
		readonly contextId: any;
		readonly description: any;
		id: any;
		readonly name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		readonly ruleNames: any;
		readonly type: any;

	}

	interface FirewallSectionConstructor {
		new(value?:any): FirewallSection;
		readonly prototype: FirewallSection;
	}

	const FirewallSection: FirewallSectionConstructor;

	interface FirewallSectionDto extends NSXFirewallSectionDto
	{
		readonly contextId: any;
		readonly description: any;
		readonly generationNumber: any;
		readonly id: any;
		readonly managedBy: any;
		readonly modified: any;
		readonly name: any;
		readonly position: any;
		readonly timestamp: any;
		readonly type: any;

	}

	interface FirewallSectionDtoConstructor {
		new(value?:any): FirewallSectionDto;
		readonly prototype: FirewallSectionDto;
	}

	const FirewallSectionDto: FirewallSectionDtoConstructor;

	interface FirewallSectionInv extends NSXFirewallSectionInv
	{
		readonly displayName: any;
		id: any;

		FirewallSectionRel(): FirewallSection;
	}

	interface FirewallSectionInvConstructor {
		new(value?:any): FirewallSectionInv;
		readonly prototype: FirewallSectionInv;
	}

	const FirewallSectionInv: FirewallSectionInvConstructor;

	interface FirewallSectionListDto extends NSXFirewallSectionListDto
	{
		readonly sectionList: any;

	}

	interface FirewallSectionListDtoConstructor {
		new(value?:any): FirewallSectionListDto;
		readonly prototype: FirewallSectionListDto;
	}

	const FirewallSectionListDto: FirewallSectionListDtoConstructor;

	interface FirewallSectionRESTDto extends NSXFirewallSectionRESTDto
	{
		contextId: any;
		description: any;
		generationNumber: any;
		id: any;
		managedBy: any;
		modified: any;
		name: any;
		position: any;
		readonly rules: any;
		timestamp: any;
		type: any;

	}

	interface FirewallSectionRESTDtoConstructor {
		new(value?:any): FirewallSectionRESTDto;
		readonly prototype: FirewallSectionRESTDto;
	}

	const FirewallSectionRESTDto: FirewallSectionRESTDtoConstructor;

	interface FirewallServiceDto extends NSXFirewallServiceDto
	{
		readonly destinationPort: any;
		readonly icmpCode: any;
		ipSetValue: any;
		isGlobal: any;
		isValid: any;
		name: any;
		readonly protocol: any;
		readonly protocolName: any;
		readonly sourcePort: any;
		readonly subProtocol: any;
		readonly subProtocolName: any;
		type: any;
		value: any;

	}

	interface FirewallServiceDtoConstructor {
		new(value?:any): FirewallServiceDto;
		readonly prototype: FirewallServiceDto;
	}

	const FirewallServiceDto: FirewallServiceDtoConstructor;

	interface FirewallServicesDto extends NSXFirewallServicesDto
	{
		readonly serviceList: any;

	}

	interface FirewallServicesDtoConstructor {
		new(value?:any): FirewallServicesDto;
		readonly prototype: FirewallServicesDto;
	}

	const FirewallServicesDto: FirewallServicesDtoConstructor;

	interface FirewallSiRuleDto extends NSXFirewallSiRuleDto
	{
		readonly siRuleIdList: any;

	}

	interface FirewallSiRuleDtoConstructor {
		new(value?:any): FirewallSiRuleDto;
		readonly prototype: FirewallSiRuleDto;
	}

	const FirewallSiRuleDto: FirewallSiRuleDtoConstructor;

	interface FirewallSourcesDto extends NSXFirewallSourcesDto
	{
		readonly excluded: any;
		readonly sourceList: any;

	}

	interface FirewallSourcesDtoConstructor {
		new(value?:any): FirewallSourcesDto;
		readonly prototype: FirewallSourcesDto;
	}

	const FirewallSourcesDto: FirewallSourcesDtoConstructor;

	interface FirewallStaticInfoDto extends NSXFirewallStaticInfoDto
	{
		readonly applicationProtocolDto: any;
		readonly appliedToTypes: any;
		readonly isKillSwitchOn: any;
		readonly l2ContainerTypes: any;
		readonly l3ContainerTypes: any;

	}

	interface FirewallStaticInfoDtoConstructor {
		new(value?:any): FirewallStaticInfoDto;
		readonly prototype: FirewallStaticInfoDto;
	}

	const FirewallStaticInfoDto: FirewallStaticInfoDtoConstructor;

	interface FirewallStatusClusterDto extends NSXFirewallStatusClusterDto
	{
		readonly clusterId: any;
		readonly generationNumber: any;
		readonly generationNumberObjects: any;
		readonly status: any;

	}

	interface FirewallStatusClusterDtoConstructor {
		new(value?:any): FirewallStatusClusterDto;
		readonly prototype: FirewallStatusClusterDto;
	}

	const FirewallStatusClusterDto: FirewallStatusClusterDtoConstructor;

	interface FirewallStatusClusterRESTDto extends NSXFirewallStatusClusterRESTDto
	{
		clusterId: any;
		generationNumber: any;
		generationNumberObjects: any;
		readonly hostStatusList: any;
		status: any;

	}

	interface FirewallStatusClusterRESTDtoConstructor {
		new(value?:any): FirewallStatusClusterRESTDto;
		readonly prototype: FirewallStatusClusterRESTDto;
	}

	const FirewallStatusClusterRESTDto: FirewallStatusClusterRESTDtoConstructor;

	interface FirewallStatusClusterUIDto extends NSXFirewallStatusClusterUIDto
	{
		readonly cluster: any;
		clusterId: any;
		generationNumber: any;
		generationNumberObjects: any;
		status: any;

	}

	interface FirewallStatusClusterUIDtoConstructor {
		new(value?:any): FirewallStatusClusterUIDto;
		readonly prototype: FirewallStatusClusterUIDto;
	}

	const FirewallStatusClusterUIDto: FirewallStatusClusterUIDtoConstructor;

	interface FirewallStatusDto extends NSXFirewallStatusDto
	{
		readonly currentState: any;
		readonly failedPublishInfo: any;
		readonly generationNumber: any;
		readonly scopeId: any;

	}

	interface FirewallStatusDtoConstructor {
		new(value?:any): FirewallStatusDto;
		readonly prototype: FirewallStatusDto;
	}

	const FirewallStatusDto: FirewallStatusDtoConstructor;

	interface FirewallStatusHostDto extends NSXFirewallStatusHostDto
	{
		readonly clusterId: any;
		readonly endTime: any;
		readonly errorCode: any;
		readonly errorMessage: any;
		readonly generationNumber: any;
		readonly generationNumberObjects: any;
		readonly hostId: any;
		readonly hostName: any;
		readonly startTime: any;
		readonly status: any;

	}

	interface FirewallStatusHostDtoConstructor {
		new(value?:any): FirewallStatusHostDto;
		readonly prototype: FirewallStatusHostDto;
	}

	const FirewallStatusHostDto: FirewallStatusHostDtoConstructor;

	interface FirewallStatusRESTDto extends NSXFirewallStatusRESTDto
	{
		readonly clusterList: any;
		currentState: any;
		failedPublishInfo: any;
		generationNumber: any;
		scopeId: any;

	}

	interface FirewallStatusRESTDtoConstructor {
		new(value?:any): FirewallStatusRESTDto;
		readonly prototype: FirewallStatusRESTDto;
	}

	const FirewallStatusRESTDto: FirewallStatusRESTDtoConstructor;

	interface FirewallStatusUIDto extends NSXFirewallStatusUIDto
	{
		readonly clusterStatusList: any;
		currentState: any;
		failedPublishInfo: any;
		generationNumber: any;
		readonly hostStatusList: any;
		scopeId: any;

	}

	interface FirewallStatusUIDtoConstructor {
		new(value?:any): FirewallStatusUIDto;
		readonly prototype: FirewallStatusUIDto;
	}

	const FirewallStatusUIDto: FirewallStatusUIDtoConstructor;

	interface FirewallSwitchStateDto extends NSXFirewallSwitchStateDto
	{
		readonly contextId: any;
		readonly jobId: any;
		readonly state: any;
		readonly timestamp: any;
		readonly userId: any;

	}

	interface FirewallSwitchStateDtoConstructor {
		new(value?:any): FirewallSwitchStateDto;
		readonly prototype: FirewallSwitchStateDto;
	}

	const FirewallSwitchStateDto: FirewallSwitchStateDtoConstructor;

	interface FirewallTimeoutConfigurationDto extends NSXFirewallTimeoutConfigurationDto
	{
		readonly appliedToList: any;
		readonly description: any;
		readonly generationNumber: any;
		readonly icmpErrorReply: any;
		readonly icmpFirstPacket: any;
		readonly id: any;
		readonly isDefault: any;
		readonly name: any;
		readonly tcpClosed: any;
		readonly tcpClosing: any;
		readonly tcpEstablished: any;
		readonly tcpFinWait: any;
		readonly tcpFirstPacket: any;
		readonly tcpOpen: any;
		readonly udpFirstPacket: any;
		readonly udpMultiple: any;
		readonly udpSingle: any;

	}

	interface FirewallTimeoutConfigurationDtoConstructor {
		new(value?:any): FirewallTimeoutConfigurationDto;
		readonly prototype: FirewallTimeoutConfigurationDto;
	}

	const FirewallTimeoutConfigurationDto: FirewallTimeoutConfigurationDtoConstructor;

	interface FirewallTimeoutConfigurationsDto extends NSXFirewallTimeoutConfigurationsDto
	{
		readonly timeoutConfigList: any;

	}

	interface FirewallTimeoutConfigurationsDtoConstructor {
		new(value?:any): FirewallTimeoutConfigurationsDto;
		readonly prototype: FirewallTimeoutConfigurationsDto;
	}

	const FirewallTimeoutConfigurationsDto: FirewallTimeoutConfigurationsDtoConstructor;

	interface FlowAttributeDto extends NSXFlowAttributeDto
	{
		readonly bytes: any;
		readonly packets: any;
		readonly sessions: any;

	}

	interface FlowAttributeDtoConstructor {
		new(value?:any): FlowAttributeDto;
		readonly prototype: FlowAttributeDto;
	}

	const FlowAttributeDto: FlowAttributeDtoConstructor;

	interface FlowConfigurationDto extends NSXFlowConfigurationDto
	{
		readonly collectFlows: any;
		readonly destinationContainers: any;
		readonly ignoreBlockedFlows: any;
		readonly ignoreDestIPSet: any;
		readonly ignoreLayer2Flows: any;
		readonly ignorePortSet: any;
		readonly ignoreSourceIPSet: any;
		readonly serviceContainers: any;
		readonly sourceContainers: any;

	}

	interface FlowConfigurationDtoConstructor {
		new(value?:any): FlowConfigurationDto;
		readonly prototype: FlowConfigurationDto;
	}

	const FlowConfigurationDto: FlowConfigurationDtoConstructor;

	interface FlowDataPointsDto extends NSXFlowDataPointsDto
	{
		readonly data: any;
		readonly timeStamp: any;

	}

	interface FlowDataPointsDtoConstructor {
		new(value?:any): FlowDataPointsDto;
		readonly prototype: FlowDataPointsDto;
	}

	const FlowDataPointsDto: FlowDataPointsDtoConstructor;

	interface FlowDetailsDataDto extends NSXFlowDetailsDataDto
	{
		readonly bytes: any;
		readonly isService: any;
		readonly packets: any;
		readonly serviceId: any;
		readonly serviceName: any;
		readonly sessions: any;

	}

	interface FlowDetailsDataDtoConstructor {
		new(value?:any): FlowDetailsDataDto;
		readonly prototype: FlowDetailsDataDto;
	}

	const FlowDetailsDataDto: FlowDetailsDataDtoConstructor;

	interface FlowDetailsDto extends NSXFlowDetailsDto
	{
		readonly context: any;
		readonly endDate: any;
		readonly flowType: any;
		readonly services: any;
		readonly startDate: any;

	}

	interface FlowDetailsDtoConstructor {
		new(value?:any): FlowDetailsDto;
		readonly prototype: FlowDetailsDto;
	}

	const FlowDetailsDto: FlowDetailsDtoConstructor;

	interface FlowFirewallIpfixConfigDto extends NSXFlowFirewallIpfixConfigDto
	{
		readonly contextId: any;
		readonly domainId: any;
		readonly ipPortList: any;
		readonly isIpfixEnabled: any;
		readonly timeout: any;

	}

	interface FlowFirewallIpfixConfigDtoConstructor {
		new(value?:any): FlowFirewallIpfixConfigDto;
		readonly prototype: FlowFirewallIpfixConfigDto;
	}

	const FlowFirewallIpfixConfigDto: FlowFirewallIpfixConfigDtoConstructor;

	interface FlowFirewallRuleInfoDto extends NSXFlowFirewallRuleInfoDto
	{
		readonly firewallRule: any;
		readonly scope: any;
		readonly status: any;

	}

	interface FlowFirewallRuleInfoDtoConstructor {
		new(value?:any): FlowFirewallRuleInfoDto;
		readonly prototype: FlowFirewallRuleInfoDto;
	}

	const FlowFirewallRuleInfoDto: FlowFirewallRuleInfoDtoConstructor;

	interface FlowObjectInfoDto extends NSXFlowObjectInfoDto
	{
		readonly ipAddress: any;
		readonly macAddress: any;
		readonly type: any;
		readonly vmId: any;
		readonly vmName: any;

	}

	interface FlowObjectInfoDtoConstructor {
		new(value?:any): FlowObjectInfoDto;
		readonly prototype: FlowObjectInfoDto;
	}

	const FlowObjectInfoDto: FlowObjectInfoDtoConstructor;

	interface FlowPagedDetailsDto extends NSXFlowPagedDetailsDto
	{
		readonly context: any;
		readonly endDate: any;
		readonly flowType: any;
		readonly hasMoreRecords: any;
		readonly services: any;
		readonly startDate: any;

	}

	interface FlowPagedDetailsDtoConstructor {
		new(value?:any): FlowPagedDetailsDto;
		readonly prototype: FlowPagedDetailsDto;
	}

	const FlowPagedDetailsDto: FlowPagedDetailsDtoConstructor;

	interface FlowPagedServiceDetailsDto extends NSXFlowPagedServiceDetailsDto
	{
		readonly bytes: any;
		readonly flowType: any;
		readonly hasMoreRecords: any;
		readonly packets: any;
		readonly serviceId: any;
		readonly serviceName: any;
		readonly sessions: any;
		readonly tableData: any;

	}

	interface FlowPagedServiceDetailsDtoConstructor {
		new(value?:any): FlowPagedServiceDetailsDto;
		readonly prototype: FlowPagedServiceDetailsDto;
	}

	const FlowPagedServiceDetailsDto: FlowPagedServiceDetailsDtoConstructor;

	interface FlowPermissionDto extends NSXFlowPermissionDto
	{
		readonly isAppLicensed: any;
		readonly userPermissions: any;

	}

	interface FlowPermissionDtoConstructor {
		new(value?:any): FlowPermissionDto;
		readonly prototype: FlowPermissionDto;
	}

	const FlowPermissionDto: FlowPermissionDtoConstructor;

	interface FlowServiceDataDto extends NSXFlowServiceDataDto
	{
		readonly applicationContext: any;
		readonly bytes: any;
		readonly defaultRule: any;
		readonly destinationIdentityGraph: any;
		readonly destinationName: any;
		readonly displayRuleId: any;
		readonly endDate: any;
		readonly packets: any;
		readonly ruleId: any;
		readonly sessions: any;
		readonly sourceIdentityGraph: any;
		readonly sourceName: any;
		readonly startDate: any;

	}

	interface FlowServiceDataDtoConstructor {
		new(value?:any): FlowServiceDataDto;
		readonly prototype: FlowServiceDataDto;
	}

	const FlowServiceDataDto: FlowServiceDataDtoConstructor;

	interface FlowServiceDetailsDto extends NSXFlowServiceDetailsDto
	{
		readonly bytes: any;
		readonly flowType: any;
		readonly packets: any;
		readonly serviceId: any;
		readonly serviceName: any;
		readonly sessions: any;
		readonly tableData: any;

	}

	interface FlowServiceDetailsDtoConstructor {
		new(value?:any): FlowServiceDetailsDto;
		readonly prototype: FlowServiceDetailsDto;
	}

	const FlowServiceDetailsDto: FlowServiceDetailsDtoConstructor;

	interface FlowStatsDto extends NSXFlowStatsDto
	{
		applicationContext: any;
		blocked: any;
		readonly controlDestinationIp: any;
		readonly controlDestinationPort: any;
		readonly controlDirection: any;
		readonly controlProtocol: any;
		readonly controlSourceIp: any;
		destination: any;
		destinationBytes: any;
		readonly destinationIp: any;
		destinationPackets: any;
		destinationPort: any;
		direction: any;
		endTime: any;
		namespaceId: any;
		protocol: any;
		ruleId: any;
		sessions: any;
		source: any;
		sourceBytes: any;
		readonly sourceIp: any;
		sourcePackets: any;
		startTime: any;

	}

	interface FlowStatsDtoConstructor {
		new(value?:any): FlowStatsDto;
		readonly prototype: FlowStatsDto;
	}

	const FlowStatsDto: FlowStatsDtoConstructor;

	interface FlowStatsInfoDto extends NSXFlowStatsInfoDto
	{
		readonly flowStatsInfoLayer2: any;
		readonly flowStatsInfoLayer3: any;
		readonly flowStatsInfoTcpUdp: any;

	}

	interface FlowStatsInfoDtoConstructor {
		new(value?:any): FlowStatsInfoDto;
		readonly prototype: FlowStatsInfoDto;
	}

	const FlowStatsInfoDto: FlowStatsInfoDtoConstructor;

	interface FlowStatsLayer2Dto extends NSXFlowStatsLayer2Dto
	{
		applicationContext: any;
		blocked: any;
		destination: any;
		destinationBytes: any;
		readonly destinationMac: any;
		destinationPackets: any;
		destinationPort: any;
		direction: any;
		endTime: any;
		namespaceId: any;
		protocol: any;
		ruleId: any;
		sessions: any;
		source: any;
		sourceBytes: any;
		readonly sourceMac: any;
		sourcePackets: any;
		startTime: any;
		readonly subtype: any;

	}

	interface FlowStatsLayer2DtoConstructor {
		new(value?:any): FlowStatsLayer2Dto;
		readonly prototype: FlowStatsLayer2Dto;
	}

	const FlowStatsLayer2Dto: FlowStatsLayer2DtoConstructor;

	interface FlowStatsLayer3Dto extends NSXFlowStatsLayer3Dto
	{
		applicationContext: any;
		blocked: any;
		destination: any;
		destinationBytes: any;
		readonly destinationIp: any;
		destinationPackets: any;
		destinationPort: any;
		direction: any;
		endTime: any;
		namespaceId: any;
		protocol: any;
		ruleId: any;
		sessions: any;
		source: any;
		sourceBytes: any;
		readonly sourceIp: any;
		sourcePackets: any;
		startTime: any;
		readonly subtype: any;

	}

	interface FlowStatsLayer3DtoConstructor {
		new(value?:any): FlowStatsLayer3Dto;
		readonly prototype: FlowStatsLayer3Dto;
	}

	const FlowStatsLayer3Dto: FlowStatsLayer3DtoConstructor;

	interface FlowStatsPageDto extends NSXFlowStatsPageDto
	{
		readonly flowStatsLayer2: any;
		readonly flowStatsLayer3: any;
		readonly flowStatsTcpUdp: any;
		readonly pagingInfo: any;

	}

	interface FlowStatsPageDtoConstructor {
		new(value?:any): FlowStatsPageDto;
		readonly prototype: FlowStatsPageDto;
	}

	const FlowStatsPageDto: FlowStatsPageDtoConstructor;

	interface FlowSummaryDto extends NSXFlowSummaryDto
	{
		readonly allowed: any;
		readonly blockedByRule: any;
		readonly blockedBySpoofguard: any;
		readonly context: any;
		readonly endDate: any;
		readonly startDate: any;

	}

	interface FlowSummaryDtoConstructor {
		new(value?:any): FlowSummaryDto;
		readonly prototype: FlowSummaryDto;
	}

	const FlowSummaryDto: FlowSummaryDtoConstructor;

	interface FlowTableDataDto extends NSXFlowTableDataDto
	{
		readonly bytes: any;
		readonly dataPoints: any;
		readonly destination: any;
		readonly internalId: any;
		readonly name: any;
		readonly packets: any;
		readonly sessions: any;

	}

	interface FlowTableDataDtoConstructor {
		new(value?:any): FlowTableDataDto;
		readonly prototype: FlowTableDataDto;
	}

	const FlowTableDataDto: FlowTableDataDtoConstructor;

	interface FlowTableDto extends NSXFlowTableDto
	{
		readonly context: any;
		readonly endDate: any;
		readonly startDate: any;
		readonly tableData: any;
		readonly tableType: any;

	}

	interface FlowTableDtoConstructor {
		new(value?:any): FlowTableDto;
		readonly prototype: FlowTableDto;
	}

	const FlowTableDto: FlowTableDtoConstructor;

	interface FunctionalitiesDto extends NSXFunctionalitiesDto
	{
		readonly functionalities: any;

	}

	interface FunctionalitiesDtoConstructor {
		new(value?:any): FunctionalitiesDto;
		readonly prototype: FunctionalitiesDto;
	}

	const FunctionalitiesDto: FunctionalitiesDtoConstructor;

	interface FunctionalityDto extends NSXFunctionalityDto
	{
		readonly description: any;
		readonly revision: any;
		readonly type: any;

	}

	interface FunctionalityDtoConstructor {
		new(value?:any): FunctionalityDto;
		readonly prototype: FunctionalityDto;
	}

	const FunctionalityDto: FunctionalityDtoConstructor;

	interface GlobalConfigDto extends NSXGlobalConfigDto
	{
		readonly caCertificates: any;
		readonly crlCertificates: any;
		readonly extension: any;
		readonly psk: any;
		readonly serviceCertificate: any;

	}

	interface GlobalConfigDtoConstructor {
		new(value?:any): GlobalConfigDto;
		readonly prototype: GlobalConfigDto;
	}

	const GlobalConfigDto: GlobalConfigDtoConstructor;

	interface GlobalConfigurationDto extends NSXGlobalConfigurationDto
	{
		readonly autoDraftDisabled: any;
		readonly layer2RuleOptimize: any;
		readonly layer3RuleOptimize: any;
		readonly tcpStrictOption: any;

	}

	interface GlobalConfigurationDtoConstructor {
		new(value?:any): GlobalConfigurationDto;
		readonly prototype: GlobalConfigurationDto;
	}

	const GlobalConfigurationDto: GlobalConfigurationDtoConstructor;

	interface GlobalIpDto extends NSXGlobalIpDto
	{
		readonly algorithm: any;
		readonly description: any;
		readonly enabled: any;
		readonly fqdn: any;
		readonly gslbIpId: any;
		readonly name: any;
		readonly persistence: any;
		readonly pool: any;
		readonly ttl: any;

	}

	interface GlobalIpDtoConstructor {
		new(value?:any): GlobalIpDto;
		readonly prototype: GlobalIpDto;
	}

	const GlobalIpDto: GlobalIpDtoConstructor;

	interface GlobalIpPersistenceDto extends NSXGlobalIpPersistenceDto
	{
		readonly enabled: any;
		readonly ttl: any;

	}

	interface GlobalIpPersistenceDtoConstructor {
		new(value?:any): GlobalIpPersistenceDto;
		readonly prototype: GlobalIpPersistenceDto;
	}

	const GlobalIpPersistenceDto: GlobalIpPersistenceDtoConstructor;

	interface GlobalIpPoolRefDto extends NSXGlobalIpPoolRefDto
	{
		readonly poolId: any;
		readonly weight: any;

	}

	interface GlobalIpPoolRefDtoConstructor {
		new(value?:any): GlobalIpPoolRefDto;
		readonly prototype: GlobalIpPoolRefDto;
	}

	const GlobalIpPoolRefDto: GlobalIpPoolRefDtoConstructor;

	interface GlobalIpStatsDto extends NSXGlobalIpStatsDto
	{
		readonly dnsMiss: any;
		readonly dnsReq: any;
		readonly dnsResolved: any;
		readonly fqdn: any;
		readonly globalIpId: any;

	}

	interface GlobalIpStatsDtoConstructor {
		new(value?:any): GlobalIpStatsDto;
		readonly prototype: GlobalIpStatsDto;
	}

	const GlobalIpStatsDto: GlobalIpStatsDtoConstructor;

	interface GlobalServiceInstanceDto extends NSXGlobalServiceInstanceDto
	{
		readonly description: any;
		readonly instanceTemplateAttributes: any;
		readonly instanceTemplateId: any;
		readonly instanceTemplateName: any;
		readonly instanceTemplateTypedAttributes: any;
		readonly instanceTemplateUniqueId: any;
		readonly name: any;
		readonly serviceId: any;
		readonly serviceInstanceId: any;
		readonly serviceName: any;

	}

	interface GlobalServiceInstanceDtoConstructor {
		new(value?:any): GlobalServiceInstanceDto;
		readonly prototype: GlobalServiceInstanceDto;
	}

	const GlobalServiceInstanceDto: GlobalServiceInstanceDtoConstructor;

	interface GlobalSiteDto extends NSXGlobalSiteDto
	{
		readonly description: any;
		readonly geoLocation: any;
		readonly globalSiteId: any;
		readonly managementIp: any;
		readonly managementPort: any;
		readonly name: any;
		readonly server: any;
		readonly type: any;

	}

	interface GlobalSiteDtoConstructor {
		new(value?:any): GlobalSiteDto;
		readonly prototype: GlobalSiteDto;
	}

	const GlobalSiteDto: GlobalSiteDtoConstructor;

	interface GlobalSiteServerDto extends NSXGlobalSiteServerDto
	{
		readonly ipAddress: any;

	}

	interface GlobalSiteServerDtoConstructor {
		new(value?:any): GlobalSiteServerDto;
		readonly prototype: GlobalSiteServerDto;
	}

	const GlobalSiteServerDto: GlobalSiteServerDtoConstructor;

	interface GlobalSiteStatsDto extends NSXGlobalSiteStatsDto
	{
		readonly cacheHit: any;
		readonly cacheMiss: any;
		readonly cacheQuery: any;
		readonly dnsMiss: any;
		readonly dnsReq: any;
		readonly dnsResolved: any;
		readonly globalSiteId: any;
		readonly msgRate: any;
		readonly msgRecv: any;
		readonly msgSent: any;
		readonly name: any;

	}

	interface GlobalSiteStatsDtoConstructor {
		new(value?:any): GlobalSiteStatsDto;
		readonly prototype: GlobalSiteStatsDto;
	}

	const GlobalSiteStatsDto: GlobalSiteStatsDtoConstructor;

	interface GroupableDomainObjectDto extends NSXGroupableDomainObjectDto
	{
		clientHandle: any;
		description: any;
		extendedAttributes: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		scope: any;
		type: any;
		vsmUuid: any;

	}

	interface GroupableDomainObjectDtoConstructor {
		new(value?:any): GroupableDomainObjectDto;
		readonly prototype: GroupableDomainObjectDto;
	}

	const GroupableDomainObjectDto: GroupableDomainObjectDtoConstructor;

	interface GslbConfigDto extends NSXGslbConfigDto
	{
		enabled: any;
		readonly globalIp: any;
		readonly globalSite: any;
		readonly gslbMonitor: any;
		readonly gslbPool: any;
		readonly gslbSecurity: any;
		readonly listeners: any;
		readonly logging: any;
		readonly persistentCache: any;
		readonly queryPort: any;
		readonly serviceTimeout: any;
		template: any;
		version: any;

	}

	interface GslbConfigDtoConstructor {
		new(value?:any): GslbConfigDto;
		readonly prototype: GslbConfigDto;
	}

	const GslbConfigDto: GslbConfigDtoConstructor;

	interface GslbMonitorDto extends NSXGslbMonitorDto
	{
		readonly expected: any;
		readonly extension: any;
		readonly interval: any;
		readonly maxRetries: any;
		readonly method: any;
		readonly monitorId: any;
		readonly name: any;
		readonly receive: any;
		readonly send: any;
		readonly timeout: any;
		readonly type: any;
		readonly url: any;

	}

	interface GslbMonitorDtoConstructor {
		new(value?:any): GslbMonitorDto;
		readonly prototype: GslbMonitorDto;
	}

	const GslbMonitorDto: GslbMonitorDtoConstructor;

	interface GslbPersistentCacheDto extends NSXGslbPersistentCacheDto
	{
		readonly maxSize: any;
		readonly ttl: any;

	}

	interface GslbPersistentCacheDtoConstructor {
		new(value?:any): GslbPersistentCacheDto;
		readonly prototype: GslbPersistentCacheDto;
	}

	const GslbPersistentCacheDto: GslbPersistentCacheDtoConstructor;

	interface GslbPoolDto extends NSXGslbPoolDto
	{
		readonly algorithm: any;
		readonly description: any;
		readonly fallbackAlgorithm: any;
		readonly monitorId: any;
		readonly name: any;
		readonly poolId: any;
		readonly poolMember: any;
		readonly ttl: any;

	}

	interface GslbPoolDtoConstructor {
		new(value?:any): GslbPoolDto;
		readonly prototype: GslbPoolDto;
	}

	const GslbPoolDto: GslbPoolDtoConstructor;

	interface GslbPoolMemberDto extends NSXGslbPoolMemberDto
	{
		readonly condition: any;
		readonly ipAddress: any;
		readonly maxConn: any;
		readonly memberId: any;
		readonly name: any;
		readonly port: any;
		readonly weight: any;

	}

	interface GslbPoolMemberDtoConstructor {
		new(value?:any): GslbPoolMemberDto;
		readonly prototype: GslbPoolMemberDto;
	}

	const GslbPoolMemberDto: GslbPoolMemberDtoConstructor;

	interface GslbPoolMemberStatsDto extends NSXGslbPoolMemberStatsDto
	{
		readonly cpuUsage: any;
		readonly curConn: any;
		readonly dnsHit: any;
		readonly memberId: any;
		readonly memUsage: any;
		readonly name: any;
		readonly packagesPerSec: any;
		readonly sessions: any;
		readonly sessLimit: any;
		readonly sessRate: any;
		readonly status: any;
		readonly totalThroughput: any;

	}

	interface GslbPoolMemberStatsDtoConstructor {
		new(value?:any): GslbPoolMemberStatsDto;
		readonly prototype: GslbPoolMemberStatsDto;
	}

	const GslbPoolMemberStatsDto: GslbPoolMemberStatsDtoConstructor;

	interface GslbPoolStatsDto extends NSXGslbPoolStatsDto
	{
		readonly dnsMiss: any;
		readonly dnsReq: any;
		readonly dnsResolved: any;
		readonly member: any;
		readonly name: any;
		readonly poolId: any;

	}

	interface GslbPoolStatsDtoConstructor {
		new(value?:any): GslbPoolStatsDto;
		readonly prototype: GslbPoolStatsDto;
	}

	const GslbPoolStatsDto: GslbPoolStatsDtoConstructor;

	interface GslbSecurityDto extends NSXGslbSecurityDto
	{
		readonly caCertificate: any;
		readonly crlCertificate: any;
		readonly enabled: any;
		readonly serviceCertificate: any;

	}

	interface GslbSecurityDtoConstructor {
		new(value?:any): GslbSecurityDto;
		readonly prototype: GslbSecurityDto;
	}

	const GslbSecurityDto: GslbSecurityDtoConstructor;

	interface GslbStatusAndStatsDto extends NSXGslbStatusAndStatsDto
	{
		readonly gslbIp: any;
		readonly gslbPool: any;
		readonly gslbSite: any;
		readonly timeStamp: any;

	}

	interface GslbStatusAndStatsDtoConstructor {
		new(value?:any): GslbStatusAndStatsDto;
		readonly prototype: GslbStatusAndStatsDto;
	}

	const GslbStatusAndStatsDto: GslbStatusAndStatsDtoConstructor;

	interface HaSecurityDto extends NSXHaSecurityDto
	{
		readonly enabled: any;

	}

	interface HaSecurityDtoConstructor {
		new(value?:any): HaSecurityDto;
		readonly prototype: HaSecurityDto;
	}

	const HaSecurityDto: HaSecurityDtoConstructor;

	interface Healthcheck extends NSXHealthcheck
	{
		readonly displayName: any;
		readonly healthThreshold: any;
		id: any;
		readonly interval: any;
		readonly mode: any;
		readonly timeout: any;
		readonly unhealthThreshold: any;
		readonly uri: any;

	}

	interface HealthcheckConstructor {
		new(value?:any): Healthcheck;
		readonly prototype: Healthcheck;
	}

	const Healthcheck: HealthcheckConstructor;

	interface HeartbeatResponseDto extends NSXHeartbeatResponseDto
	{
		readonly heartbeatId: any;
		readonly timestamp: any;

	}

	interface HeartbeatResponseDtoConstructor {
		new(value?:any): HeartbeatResponseDto;
		readonly prototype: HeartbeatResponseDto;
	}

	const HeartbeatResponseDto: HeartbeatResponseDtoConstructor;

	interface HighAvailabilityConfigDto extends NSXHighAvailabilityConfigDto
	{
		readonly declareDeadTime: any;
		enabled: any;
		readonly ipAddresses: any;
		readonly logging: any;
		template: any;
		version: any;
		readonly vnic: any;
		readonly zeroConfiguration: any;

	}

	interface HighAvailabilityConfigDtoConstructor {
		new(value?:any): HighAvailabilityConfigDto;
		readonly prototype: HighAvailabilityConfigDto;
	}

	const HighAvailabilityConfigDto: HighAvailabilityConfigDtoConstructor;

	interface HighAvailabilityConfigTrinityDto extends NSXHighAvailabilityConfigTrinityDto
	{
		readonly declareDeadTime: any;
		enabled: any;
		readonly ipAddresses: any;
		readonly logging: any;
		readonly security: any;
		template: any;
		version: any;
		readonly vnic: any;
		readonly zeroConfiguration: any;

	}

	interface HighAvailabilityConfigTrinityDtoConstructor {
		new(value?:any): HighAvailabilityConfigTrinityDto;
		readonly prototype: HighAvailabilityConfigTrinityDto;
	}

	const HighAvailabilityConfigTrinityDto: HighAvailabilityConfigTrinityDtoConstructor;

	interface HintQuestionAnswerDto extends NSXHintQuestionAnswerDto
	{
		readonly answer: any;
		readonly question: any;

	}

	interface HintQuestionAnswerDtoConstructor {
		new(value?:any): HintQuestionAnswerDto;
		readonly prototype: HintQuestionAnswerDto;
	}

	const HintQuestionAnswerDto: HintQuestionAnswerDtoConstructor;

	interface HostCmdDto extends NSXHostCmdDto
	{
		readonly commandString: any;
		readonly hostId: any;
		readonly loggingArgus: any;

	}

	interface HostCmdDtoConstructor {
		new(value?:any): HostCmdDto;
		readonly prototype: HostCmdDto;
	}

	const HostCmdDto: HostCmdDtoConstructor;

	interface HostDto extends NSXHostDto
	{
		readonly hostId: any;
		readonly hostName: any;
		readonly installationStatus: any;

	}

	interface HostDtoConstructor {
		new(value?:any): HostDto;
		readonly prototype: HostDto;
	}

	const HostDto: HostDtoConstructor;

	interface HostInformationDto extends NSXHostInformationDto
	{
		readonly clientId: any;
		readonly datacenterId: any;
		readonly hostId: any;
		readonly hostName: any;
		readonly hostVersion: any;
		readonly id: any;
		readonly status: any;

	}

	interface HostInformationDtoConstructor {
		new(value?:any): HostInformationDto;
		readonly prototype: HostInformationDto;
	}

	const HostInformationDto: HostInformationDtoConstructor;

	interface HostLeaseInfoDto extends NSXHostLeaseInfoDto
	{
		readonly abandoned: any;
		readonly bindingState: any;
		readonly clientHostname: any;
		readonly cltt: any;
		readonly ends: any;
		readonly hardwareType: any;
		readonly ipAddress: any;
		readonly macAddress: any;
		readonly nextBindingState: any;
		readonly starts: any;
		readonly tsfp: any;
		readonly tstp: any;
		readonly uid: any;

	}

	interface HostLeaseInfoDtoConstructor {
		new(value?:any): HostLeaseInfoDto;
		readonly prototype: HostLeaseInfoDto;
	}

	const HostLeaseInfoDto: HostLeaseInfoDtoConstructor;

	interface HostLeaseInfosDto extends NSXHostLeaseInfosDto
	{
		readonly hostLeaseInfoDtos: any;

	}

	interface HostLeaseInfosDtoConstructor {
		new(value?:any): HostLeaseInfosDto;
		readonly prototype: HostLeaseInfosDto;
	}

	const HostLeaseInfosDto: HostLeaseInfosDtoConstructor;

	interface HostsDto extends NSXHostsDto
	{
		readonly clusterId: any;
		readonly clusterName: any;
		readonly datacenterId: any;
		readonly datacenterName: any;
		readonly hosts: any;

	}

	interface HostsDtoConstructor {
		new(value?:any): HostsDto;
		readonly prototype: HostsDto;
	}

	const HostsDto: HostsDtoConstructor;

	interface HostSystemDto extends NSXHostSystemDto
	{
		clientHandle: any;
		description: any;
		extendedAttributes: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		readonly runtimeConnectionState: any;
		readonly runtimeInMaintenanceMode: any;
		readonly runtimePowerState: any;
		readonly runtimeStandbyMode: any;
		scope: any;
		type: any;
		vsmUuid: any;

	}

	interface HostSystemDtoConstructor {
		new(value?:any): HostSystemDto;
		readonly prototype: HostSystemDto;
	}

	const HostSystemDto: HostSystemDtoConstructor;

	interface HousekeepingModuleDto extends NSXHousekeepingModuleDto
	{
		readonly cronExpression: any;
		readonly description: any;
		readonly housekeepingEnabled: any;
		readonly moduleName: any;
		readonly objectId: any;
		readonly scheduleStartTime: any;
		readonly scheduleTimeMillis: any;
		readonly scheduleType: any;

	}

	interface HousekeepingModuleDtoConstructor {
		new(value?:any): HousekeepingModuleDto;
		readonly prototype: HousekeepingModuleDto;
	}

	const HousekeepingModuleDto: HousekeepingModuleDtoConstructor;

	interface HousekeepingModulesDto extends NSXHousekeepingModulesDto
	{
		readonly housekeepingModule: any;

	}

	interface HousekeepingModulesDtoConstructor {
		new(value?:any): HousekeepingModulesDto;
		readonly prototype: HousekeepingModulesDto;
	}

	const HousekeepingModulesDto: HousekeepingModulesDtoConstructor;

	interface IcmpTypeDto extends NSXIcmpTypeDto
	{
		readonly enumIdentifier: any;
		readonly name: any;
		readonly number: any;

	}

	interface IcmpTypeDtoConstructor {
		new(value?:any): IcmpTypeDto;
		readonly prototype: IcmpTypeDto;
	}

	const IcmpTypeDto: IcmpTypeDtoConstructor;

	interface ImplementationDto extends NSXImplementationDto
	{
		readonly hostBasedDeployment: any;
		readonly requiredProfileAttributes: any;
		readonly requiredServiceAttributes: any;
		readonly type: any;

	}

	interface ImplementationDtoConstructor {
		new(value?:any): ImplementationDto;
		readonly prototype: ImplementationDto;
	}

	const ImplementationDto: ImplementationDtoConstructor;

	interface ImplementationsDto extends NSXImplementationsDto
	{
		readonly implementations: any;

	}

	interface ImplementationsDtoConstructor {
		new(value?:any): ImplementationsDto;
		readonly prototype: ImplementationsDto;
	}

	const ImplementationsDto: ImplementationsDtoConstructor;

	interface InteractionPermissionsDto extends NSXInteractionPermissionsDto
	{
		readonly managePermission: any;
		readonly viewPermission: any;

	}

	interface InteractionPermissionsDtoConstructor {
		new(value?:any): InteractionPermissionsDto;
		readonly prototype: InteractionPermissionsDto;
	}

	const InteractionPermissionsDto: InteractionPermissionsDtoConstructor;

	interface InterfaceBaseDto extends NSXInterfaceBaseDto
	{
		readonly addressGroups: any;
		readonly label: any;
		readonly mtu: any;
		readonly name: any;

	}

	interface InterfaceBaseDtoConstructor {
		new(value?:any): InterfaceBaseDto;
		readonly prototype: InterfaceBaseDto;
	}

	const InterfaceBaseDto: InterfaceBaseDtoConstructor;

	interface InterfaceDto extends NSXInterfaceDto
	{
		addressGroups: any;
		readonly connectedToId: any;
		readonly connectedToName: any;
		readonly index: any;
		readonly isConnected: any;
		label: any;
		mtu: any;
		name: any;
		readonly type: any;

	}

	interface InterfaceDtoConstructor {
		new(value?:any): InterfaceDto;
		readonly prototype: InterfaceDto;
	}

	const InterfaceDto: InterfaceDtoConstructor;

	interface InterfacesDto extends NSXInterfacesDto
	{
		readonly interfaces: any;

	}

	interface InterfacesDtoConstructor {
		new(value?:any): InterfacesDto;
		readonly prototype: InterfacesDto;
	}

	const InterfacesDto: InterfacesDtoConstructor;

	interface IpAddressesDto extends NSXIpAddressesDto
	{
		readonly ipAddress: any;

	}

	interface IpAddressesDtoConstructor {
		new(value?:any): IpAddressesDto;
		readonly prototype: IpAddressesDto;
	}

	const IpAddressesDto: IpAddressesDtoConstructor;

	interface IpAddressPoolDto extends NSXIpAddressPoolDto
	{
		clientHandle: any;
		description: any;
		extendedAttributes: any;
		readonly ipPoolType: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		scope: any;
		readonly subnets: any;
		totalAddressCount: any;
		type: any;
		usedAddressCount: any;
		usedPercentage: any;
		vsmUuid: any;

	}

	interface IpAddressPoolDtoConstructor {
		new(value?:any): IpAddressPoolDto;
		readonly prototype: IpAddressPoolDto;
	}

	const IpAddressPoolDto: IpAddressPoolDtoConstructor;

	interface IpAddressPoolsUIDto extends NSXIpAddressPoolsUIDto
	{
		readonly ipAddressPools: any;

	}

	interface IpAddressPoolsUIDtoConstructor {
		new(value?:any): IpAddressPoolsUIDto;
		readonly prototype: IpAddressPoolsUIDto;
	}

	const IpAddressPoolsUIDto: IpAddressPoolsUIDtoConstructor;

	interface IpAddressPoolUIDto extends NSXIpAddressPoolUIDto
	{
		clientHandle: any;
		description: any;
		readonly dnsServer1: any;
		readonly dnsServer2: any;
		readonly dnsSuffix: any;
		extendedAttributes: any;
		readonly gateway: any;
		readonly ipPoolType: any;
		readonly ipRanges: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		readonly prefixLength: any;
		revision: any;
		scope: any;
		readonly subnetId: any;
		totalAddressCount: any;
		type: any;
		usedAddressCount: any;
		usedPercentage: any;
		vsmUuid: any;

	}

	interface IpAddressPoolUIDtoConstructor {
		new(value?:any): IpAddressPoolUIDto;
		readonly prototype: IpAddressPoolUIDto;
	}

	const IpAddressPoolUIDto: IpAddressPoolUIDtoConstructor;

	interface IpAddressRequestDto extends NSXIpAddressRequestDto
	{
		readonly allocationMode: any;
		readonly ipAddress: any;

	}

	interface IpAddressRequestDtoConstructor {
		new(value?:any): IpAddressRequestDto;
		readonly prototype: IpAddressRequestDto;
	}

	const IpAddressRequestDto: IpAddressRequestDtoConstructor;

	interface IpAllocationBase extends NSXIpAllocationBase
	{
		readonly autoConfigureDNS: any;
		readonly defaultGateway: any;
		readonly dnsType: any;
		readonly domainName: any;
		readonly leaseTime: any;
		readonly primaryNameServer: any;
		readonly secondaryNameServer: any;

	}

	interface IpAllocationBaseConstructor {
		new(value?:any): IpAllocationBase;
		readonly prototype: IpAllocationBase;
	}

	const IpAllocationBase: IpAllocationBaseConstructor;

	interface IpAndPortDto extends NSXIpAndPortDto
	{
		readonly hostName: any;
		readonly port: any;

	}

	interface IpAndPortDtoConstructor {
		new(value?:any): IpAndPortDto;
		readonly prototype: IpAndPortDto;
	}

	const IpAndPortDto: IpAndPortDtoConstructor;

	interface IpAssignmentStatisticDto extends NSXIpAssignmentStatisticDto
	{
		readonly activeCount: any;
		readonly activeSinceLastPublishedCount: any;
		readonly contextId: any;
		readonly duplicateCount: any;
		readonly inactiveCount: any;
		readonly inSync: any;
		readonly requireReviewCount: any;
		readonly unpublishedCount: any;

	}

	interface IpAssignmentStatisticDtoConstructor {
		new(value?:any): IpAssignmentStatisticDto;
		readonly prototype: IpAssignmentStatisticDto;
	}

	const IpAssignmentStatisticDto: IpAssignmentStatisticDtoConstructor;

	interface IPDiscoveryConfigDto extends NSXIPDiscoveryConfigDto
	{
		readonly enabled: any;

	}

	interface IPDiscoveryConfigDtoConstructor {
		new(value?:any): IPDiscoveryConfigDto;
		readonly prototype: IPDiscoveryConfigDto;
	}

	const IPDiscoveryConfigDto: IPDiscoveryConfigDtoConstructor;

	interface IpfixInfoDto extends NSXIpfixInfoDto
	{
		readonly id: any;
		readonly ipValue: any;
		readonly isV6Ip: any;
		readonly portValue: any;

	}

	interface IpfixInfoDtoConstructor {
		new(value?:any): IpfixInfoDto;
		readonly prototype: IpfixInfoDto;
	}

	const IpfixInfoDto: IpfixInfoDtoConstructor;

	interface IpListsGwemDto extends NSXIpListsGwemDto
	{
		readonly ipList: any;

	}

	interface IpListsGwemDtoConstructor {
		new(value?:any): IpListsGwemDto;
		readonly prototype: IpListsGwemDto;
	}

	const IpListsGwemDto: IpListsGwemDtoConstructor;

	interface IpNodeDto extends NSXIpNodeDto
	{
		readonly ipAddresses: any;

	}

	interface IpNodeDtoConstructor {
		new(value?:any): IpNodeDto;
		readonly prototype: IpNodeDto;
	}

	const IpNodeDto: IpNodeDtoConstructor;

	interface IpNodeSetDto extends NSXIpNodeSetDto
	{
		readonly ipNodes: any;

	}

	interface IpNodeSetDtoConstructor {
		new(value?:any): IpNodeSetDto;
		readonly prototype: IpNodeSetDto;
	}

	const IpNodeSetDto: IpNodeSetDtoConstructor;

	interface IPPoolDto extends NSXIPPoolDto
	{
		readonly autoConfigureDNS: any;
		readonly defaultGateway: any;
		readonly dnsType: any;
		readonly domainName: any;
		readonly ipRange: any;
		readonly leaseTime: any;
		readonly poolId: any;
		readonly primaryNameServer: any;
		readonly secondaryNameServer: any;

	}

	interface IPPoolDtoConstructor {
		new(value?:any): IPPoolDto;
		readonly prototype: IPPoolDto;
	}

	const IPPoolDto: IPPoolDtoConstructor;

	interface IPPoolsDto extends NSXIPPoolsDto
	{
		readonly ipPools: any;

	}

	interface IPPoolsDtoConstructor {
		new(value?:any): IPPoolsDto;
		readonly prototype: IPPoolsDto;
	}

	const IPPoolsDto: IPPoolsDtoConstructor;

	interface IPPoolsTrinityDto extends NSXIPPoolsTrinityDto
	{
		readonly ipPools: any;

	}

	interface IPPoolsTrinityDtoConstructor {
		new(value?:any): IPPoolsTrinityDto;
		readonly prototype: IPPoolsTrinityDto;
	}

	const IPPoolsTrinityDto: IPPoolsTrinityDtoConstructor;

	interface IPPoolTrinityDto extends NSXIPPoolTrinityDto
	{
		autoConfigureDNS: any;
		defaultGateway: any;
		dnsType: any;
		domainName: any;
		readonly ipRange: any;
		leaseTime: any;
		readonly poolId: any;
		primaryNameServer: any;
		secondaryNameServer: any;

	}

	interface IPPoolTrinityDtoConstructor {
		new(value?:any): IPPoolTrinityDto;
		readonly prototype: IPPoolTrinityDto;
	}

	const IPPoolTrinityDto: IPPoolTrinityDtoConstructor;

	interface IPPrefixDto extends NSXIPPrefixDto
	{
		readonly ipAddress: any;
		readonly name: any;

	}

	interface IPPrefixDtoConstructor {
		new(value?:any): IPPrefixDto;
		readonly prototype: IPPrefixDto;
	}

	const IPPrefixDto: IPPrefixDtoConstructor;

	interface IPPrefixesDto extends NSXIPPrefixesDto
	{
		readonly ipPrefixes: any;

	}

	interface IPPrefixesDtoConstructor {
		new(value?:any): IPPrefixesDto;
		readonly prototype: IPPrefixesDto;
	}

	const IPPrefixesDto: IPPrefixesDtoConstructor;

	interface IPProtocolDto extends NSXIPProtocolDto
	{
		readonly description: any;
		readonly enumIdentifier: any;
		readonly name: any;
		readonly number: any;
		readonly protocolClassification: any;

	}

	interface IPProtocolDtoConstructor {
		new(value?:any): IPProtocolDto;
		readonly prototype: IPProtocolDto;
	}

	const IPProtocolDto: IPProtocolDtoConstructor;

	interface IpRangeDto extends NSXIpRangeDto
	{
		readonly endAddress: any;
		readonly id: any;
		readonly ownerId: any;
		readonly startAddress: any;

	}

	interface IpRangeDtoConstructor {
		new(value?:any): IpRangeDto;
		readonly prototype: IpRangeDto;
	}

	const IpRangeDto: IpRangeDtoConstructor;

	interface IpsecBaseDto extends NSXIpsecBaseDto
	{
		enabled: any;
		readonly global: any;
		readonly logging: any;
		readonly sites: any;
		template: any;
		version: any;

	}

	interface IpsecBaseDtoConstructor {
		new(value?:any): IpsecBaseDto;
		readonly prototype: IpsecBaseDto;
	}

	const IpsecBaseDto: IpsecBaseDtoConstructor;

	interface IpsecCaCertificatesDto extends NSXIpsecCaCertificatesDto
	{
		readonly caCertificate: any;

	}

	interface IpsecCaCertificatesDtoConstructor {
		new(value?:any): IpsecCaCertificatesDto;
		readonly prototype: IpsecCaCertificatesDto;
	}

	const IpsecCaCertificatesDto: IpsecCaCertificatesDtoConstructor;

	interface IpsecConfigDto extends NSXIpsecConfigDto
	{
		enabled: any;
		global: any;
		logging: any;
		sites: any;
		template: any;
		version: any;

	}

	interface IpsecConfigDtoConstructor {
		new(value?:any): IpsecConfigDto;
		readonly prototype: IpsecConfigDto;
	}

	const IpsecConfigDto: IpsecConfigDtoConstructor;

	interface IpsecCrlCertificatesDto extends NSXIpsecCrlCertificatesDto
	{
		readonly crlCertificate: any;

	}

	interface IpsecCrlCertificatesDtoConstructor {
		new(value?:any): IpsecCrlCertificatesDto;
		readonly prototype: IpsecCrlCertificatesDto;
	}

	const IpsecCrlCertificatesDto: IpsecCrlCertificatesDtoConstructor;

	interface IpsecSiteIKEStatusDto extends NSXIpsecSiteIKEStatusDto
	{
		readonly channelState: any;
		readonly channelStatus: any;
		readonly lastInformationalMessage: any;
		readonly localIpAddress: any;
		readonly localSubnets: any;
		readonly peerId: any;
		readonly peerIpAddress: any;
		readonly peerSubnets: any;

	}

	interface IpsecSiteIKEStatusDtoConstructor {
		new(value?:any): IpsecSiteIKEStatusDto;
		readonly prototype: IpsecSiteIKEStatusDto;
	}

	const IpsecSiteIKEStatusDto: IpsecSiteIKEStatusDtoConstructor;

	interface IpsecSiteStatsDto extends NSXIpsecSiteStatsDto
	{
		readonly ikeStatus: any;
		readonly rxBytesOnSite: any;
		readonly siteStatus: any;
		readonly tunnelStats: any;
		readonly txBytesFromSite: any;

	}

	interface IpsecSiteStatsDtoConstructor {
		new(value?:any): IpsecSiteStatsDto;
		readonly prototype: IpsecSiteStatsDto;
	}

	const IpsecSiteStatsDto: IpsecSiteStatsDtoConstructor;

	interface IpsecStatusAndStatsDto extends NSXIpsecStatusAndStatsDto
	{
		readonly serverStatus: any;
		readonly siteStatistics: any;
		readonly timeStamp: any;

	}

	interface IpsecStatusAndStatsDtoConstructor {
		new(value?:any): IpsecStatusAndStatsDto;
		readonly prototype: IpsecStatusAndStatsDto;
	}

	const IpsecStatusAndStatsDto: IpsecStatusAndStatsDtoConstructor;

	interface IPsecTrinityDto extends NSXIPsecTrinityDto
	{
		enabled: any;
		global: any;
		logging: any;
		sites: any;
		template: any;
		version: any;

	}

	interface IPsecTrinityDtoConstructor {
		new(value?:any): IPsecTrinityDto;
		readonly prototype: IPsecTrinityDto;
	}

	const IPsecTrinityDto: IPsecTrinityDtoConstructor;

	interface IpsecTunnelStatsDto extends NSXIpsecTunnelStatsDto
	{
		readonly authenticationAlgorithm: any;
		readonly encryptionAlgorithm: any;
		readonly establishedDate: any;
		readonly lastInformationalMessage: any;
		readonly localSPI: any;
		readonly localSubnet: any;
		readonly peerSPI: any;
		readonly peerSubnet: any;
		readonly rxBytesOnLocalSubnet: any;
		readonly tunnelState: any;
		readonly tunnelStatus: any;
		readonly txBytesFromLocalSubnet: any;

	}

	interface IpsecTunnelStatsDtoConstructor {
		new(value?:any): IpsecTunnelStatsDto;
		readonly prototype: IpsecTunnelStatsDto;
	}

	const IpsecTunnelStatsDto: IpsecTunnelStatsDtoConstructor;

	interface IpsecVendorConfigDto extends NSXIpsecVendorConfigDto
	{
		readonly config: any;
		readonly platform: any;
		readonly software: any;
		readonly vendor: any;

	}

	interface IpsecVendorConfigDtoConstructor {
		new(value?:any): IpsecVendorConfigDto;
		readonly prototype: IpsecVendorConfigDto;
	}

	const IpsecVendorConfigDto: IpsecVendorConfigDtoConstructor;

	interface IPSet extends NSXIPSet
	{
		description: any;
		id: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		universal: any;
		readonly value: any;

	}

	interface IPSetConstructor {
		new(value?:any): IPSet;
		readonly prototype: IPSet;
	}

	const IPSet: IPSetConstructor;

	interface IPSetDto extends NSXIPSetDto
	{
		clientHandle: any;
		description: any;
		extendedAttributes: any;
		inheritanceAllowed: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		scope: any;
		type: any;
		readonly value: any;
		vsmUuid: any;

	}

	interface IPSetDtoConstructor {
		new(value?:any): IPSetDto;
		readonly prototype: IPSetDto;
	}

	const IPSetDto: IPSetDtoConstructor;

	interface IPSetInv extends NSXIPSetInv
	{
		readonly displayName: any;
		id: any;

		IPSetRel(): IPSet;
	}

	interface IPSetInvConstructor {
		new(value?:any): IPSetInv;
		readonly prototype: IPSetInv;
	}

	const IPSetInv: IPSetInvConstructor;

	interface IPSetUIDto extends NSXIPSetUIDto
	{
		readonly IPSetAddresses: any;
		readonly IPSetID: any;
		readonly IPSetName: any;

	}

	interface IPSetUIDtoConstructor {
		new(value?:any): IPSetUIDto;
		readonly prototype: IPSetUIDto;
	}

	const IPSetUIDto: IPSetUIDtoConstructor;

	interface IsIsAreaIdsDto extends NSXIsIsAreaIdsDto
	{
		readonly areaIds: any;

	}

	interface IsIsAreaIdsDtoConstructor {
		new(value?:any): IsIsAreaIdsDto;
		readonly prototype: IsIsAreaIdsDto;
	}

	const IsIsAreaIdsDto: IsIsAreaIdsDtoConstructor;

	interface ISISConfigDto extends NSXISISConfigDto
	{
		readonly areaIds: any;
		readonly areaPassword: any;
		readonly domainPassword: any;
		readonly enabled: any;
		readonly isisInterfaces: any;
		readonly isType: any;
		readonly redistribution: any;
		readonly systemId: any;

	}

	interface ISISConfigDtoConstructor {
		new(value?:any): ISISConfigDto;
		readonly prototype: ISISConfigDto;
	}

	const ISISConfigDto: ISISConfigDtoConstructor;

	interface IsIsInterfaceDto extends NSXIsIsInterfaceDto
	{
		readonly circuitType: any;
		readonly helloInterval: any;
		readonly helloMultiplier: any;
		readonly lspInterval: any;
		readonly meshGroup: any;
		readonly metric: any;
		readonly password: any;
		readonly priority: any;
		readonly vnic: any;

	}

	interface IsIsInterfaceDtoConstructor {
		new(value?:any): IsIsInterfaceDto;
		readonly prototype: IsIsInterfaceDto;
	}

	const IsIsInterfaceDto: IsIsInterfaceDtoConstructor;

	interface IsIsInterfacesDto extends NSXIsIsInterfacesDto
	{
		readonly isisInterfaces: any;

	}

	interface IsIsInterfacesDtoConstructor {
		new(value?:any): IsIsInterfacesDto;
		readonly prototype: IsIsInterfacesDto;
	}

	const IsIsInterfacesDto: IsIsInterfacesDtoConstructor;

	interface JobDto extends NSXJobDto
	{
		readonly creationTimeMillis: any;
		readonly description: any;
		readonly id: any;
		readonly jobOwner: any;
		readonly name: any;
		readonly nextExecutionTimeMillis: any;
		readonly scope: any;
		readonly taskList: any;

	}

	interface JobDtoConstructor {
		new(value?:any): JobDto;
		readonly prototype: JobDto;
	}

	const JobDto: JobDtoConstructor;

	interface JobIdsListDto extends NSXJobIdsListDto
	{
		readonly jobIds: any;

	}

	interface JobIdsListDtoConstructor {
		new(value?:any): JobIdsListDto;
		readonly prototype: JobIdsListDto;
	}

	const JobIdsListDto: JobIdsListDtoConstructor;

	interface JobInstanceDto extends NSXJobInstanceDto
	{
		readonly endTimeMillis: any;
		readonly failureRetryCount: any;
		readonly id: any;
		readonly job: any;
		readonly jobOutput: any;
		readonly name: any;
		readonly startTimeMillis: any;
		readonly status: any;
		readonly taskInstances: any;
		readonly timeoutRetryCount: any;
		readonly user: any;

	}

	interface JobInstanceDtoConstructor {
		new(value?:any): JobInstanceDto;
		readonly prototype: JobInstanceDto;
	}

	const JobInstanceDto: JobInstanceDtoConstructor;

	interface JobInstanceListDto extends NSXJobInstanceListDto
	{
		readonly jobInstances: any;

	}

	interface JobInstanceListDtoConstructor {
		new(value?:any): JobInstanceListDto;
		readonly prototype: JobInstanceListDto;
	}

	const JobInstanceListDto: JobInstanceListDtoConstructor;

	interface JobResultDto extends NSXJobResultDto
	{
		readonly key: any;
		readonly value: any;

	}

	interface JobResultDtoConstructor {
		new(value?:any): JobResultDto;
		readonly prototype: JobResultDto;
	}

	const JobResultDto: JobResultDtoConstructor;

	interface KeyCriteriaDto extends NSXKeyCriteriaDto
	{
		readonly criteriaList: any;
		readonly key: any;

	}

	interface KeyCriteriaDtoConstructor {
		new(value?:any): KeyCriteriaDto;
		readonly prototype: KeyCriteriaDto;
	}

	const KeyCriteriaDto: KeyCriteriaDtoConstructor;

	interface KeyCriteriaListDto extends NSXKeyCriteriaListDto
	{
		readonly keyCriteriaDtoList: any;

	}

	interface KeyCriteriaListDtoConstructor {
		new(value?:any): KeyCriteriaListDto;
		readonly prototype: KeyCriteriaListDto;
	}

	const KeyCriteriaListDto: KeyCriteriaListDtoConstructor;

	interface KeyValueDto extends NSXKeyValueDto
	{
		readonly key: any;
		readonly value: any;

	}

	interface KeyValueDtoConstructor {
		new(value?:any): KeyValueDto;
		readonly prototype: KeyValueDto;
	}

	const KeyValueDto: KeyValueDtoConstructor;

	interface KeyValueFilterDto extends NSXKeyValueFilterDto
	{
		readonly key: any;
		readonly operator: any;
		readonly value: any;

	}

	interface KeyValueFilterDtoConstructor {
		new(value?:any): KeyValueFilterDto;
		readonly prototype: KeyValueFilterDto;
	}

	const KeyValueFilterDto: KeyValueFilterDtoConstructor;

	interface KeyValueListDto extends NSXKeyValueListDto
	{
		readonly keyValueList: any;

	}

	interface KeyValueListDtoConstructor {
		new(value?:any): KeyValueListDto;
		readonly prototype: KeyValueListDto;
	}

	const KeyValueListDto: KeyValueListDtoConstructor;

	interface L2VpnConfigDto extends NSXL2VpnConfigDto
	{
		enabled: any;
		readonly l2VpnSites: any;
		readonly logging: any;
		template: any;
		version: any;

	}

	interface L2VpnConfigDtoConstructor {
		new(value?:any): L2VpnConfigDto;
		readonly prototype: L2VpnConfigDto;
	}

	const L2VpnConfigDto: L2VpnConfigDtoConstructor;

	interface L2VpnProxySettingDto extends NSXL2VpnProxySettingDto
	{
		readonly address: any;
		readonly password: any;
		readonly port: any;
		readonly type: any;
		readonly userName: any;

	}

	interface L2VpnProxySettingDtoConstructor {
		new(value?:any): L2VpnProxySettingDto;
		readonly prototype: L2VpnProxySettingDto;
	}

	const L2VpnProxySettingDto: L2VpnProxySettingDtoConstructor;

	interface L2VpnSiteClientConfigurationDto extends NSXL2VpnSiteClientConfigurationDto
	{
		readonly caCertificate: any;
		readonly l2VpnUser: any;
		readonly serverAddress: any;
		readonly serverPort: any;
		readonly vnic: any;

	}

	interface L2VpnSiteClientConfigurationDtoConstructor {
		new(value?:any): L2VpnSiteClientConfigurationDto;
		readonly prototype: L2VpnSiteClientConfigurationDto;
	}

	const L2VpnSiteClientConfigurationDto: L2VpnSiteClientConfigurationDtoConstructor;

	interface L2VpnSiteClientDto extends NSXL2VpnSiteClientDto
	{
		readonly configuration: any;
		readonly l2VpnUser: any;
		readonly proxySetting: any;

	}

	interface L2VpnSiteClientDtoConstructor {
		new(value?:any): L2VpnSiteClientDto;
		readonly prototype: L2VpnSiteClientDto;
	}

	const L2VpnSiteClientDto: L2VpnSiteClientDtoConstructor;

	interface L2VpnSiteDto extends NSXL2VpnSiteDto
	{
		readonly client: any;
		readonly description: any;
		readonly enabled: any;
		readonly name: any;
		readonly server: any;

	}

	interface L2VpnSiteDtoConstructor {
		new(value?:any): L2VpnSiteDto;
		readonly prototype: L2VpnSiteDto;
	}

	const L2VpnSiteDto: L2VpnSiteDtoConstructor;

	interface L2VpnSitesDto extends NSXL2VpnSitesDto
	{
		readonly l2VpnSites: any;

	}

	interface L2VpnSitesDtoConstructor {
		new(value?:any): L2VpnSitesDto;
		readonly prototype: L2VpnSitesDto;
	}

	const L2VpnSitesDto: L2VpnSitesDtoConstructor;

	interface L2VpnSiteServerConfigurationDto extends NSXL2VpnSiteServerConfigurationDto
	{
		readonly encryptionAlgorithm: any;
		readonly listenerIp: any;
		readonly listenerPort: any;
		readonly serverCertificate: any;
		readonly vnic: any;

	}

	interface L2VpnSiteServerConfigurationDtoConstructor {
		new(value?:any): L2VpnSiteServerConfigurationDto;
		readonly prototype: L2VpnSiteServerConfigurationDto;
	}

	const L2VpnSiteServerConfigurationDto: L2VpnSiteServerConfigurationDtoConstructor;

	interface L2VpnSiteServerDto extends NSXL2VpnSiteServerDto
	{
		readonly configuration: any;
		readonly l2VpnUsers: any;

	}

	interface L2VpnSiteServerDtoConstructor {
		new(value?:any): L2VpnSiteServerDto;
		readonly prototype: L2VpnSiteServerDto;
	}

	const L2VpnSiteServerDto: L2VpnSiteServerDtoConstructor;

	interface L2vpnSiteStatsDto extends NSXL2vpnSiteStatsDto
	{
		readonly establishedDate: any;
		readonly rxBytesOnLocalSubnet: any;
		readonly tunnelStatus: any;
		readonly txBytesFromLocalSubnet: any;

	}

	interface L2vpnSiteStatsDtoConstructor {
		new(value?:any): L2vpnSiteStatsDto;
		readonly prototype: L2vpnSiteStatsDto;
	}

	const L2vpnSiteStatsDto: L2vpnSiteStatsDtoConstructor;

	interface L2vpnStatusAndStatsDto extends NSXL2vpnStatusAndStatsDto
	{
		readonly serverStatus: any;
		readonly siteStats: any;
		readonly timeStamp: any;

	}

	interface L2vpnStatusAndStatsDtoConstructor {
		new(value?:any): L2vpnStatusAndStatsDto;
		readonly prototype: L2vpnStatusAndStatsDto;
	}

	const L2vpnStatusAndStatsDto: L2vpnStatusAndStatsDtoConstructor;

	interface L2VpnUserDto extends NSXL2VpnUserDto
	{
		readonly password: any;
		readonly userId: any;

	}

	interface L2VpnUserDtoConstructor {
		new(value?:any): L2VpnUserDto;
		readonly prototype: L2VpnUserDto;
	}

	const L2VpnUserDto: L2VpnUserDtoConstructor;

	interface L2VpnUsersDto extends NSXL2VpnUsersDto
	{
		readonly l2VpnUsers: any;

	}

	interface L2VpnUsersDtoConstructor {
		new(value?:any): L2VpnUsersDto;
		readonly prototype: L2VpnUsersDto;
	}

	const L2VpnUsersDto: L2VpnUsersDtoConstructor;

	interface Layer2DestinationDto extends NSXLayer2DestinationDto
	{
		address: any;
		readonly application: any;
		protocol: any;
		protocolName: any;

	}

	interface Layer2DestinationDtoConstructor {
		new(value?:any): Layer2DestinationDto;
		readonly prototype: Layer2DestinationDto;
	}

	const Layer2DestinationDto: Layer2DestinationDtoConstructor;

	interface Layer2FirewallConfigurationGwemDto extends NSXLayer2FirewallConfigurationGwemDto
	{
		readonly layer2Lists: any;
		readonly layer2RuleList: any;

	}

	interface Layer2FirewallConfigurationGwemDtoConstructor {
		new(value?:any): Layer2FirewallConfigurationGwemDto;
		readonly prototype: Layer2FirewallConfigurationGwemDto;
	}

	const Layer2FirewallConfigurationGwemDto: Layer2FirewallConfigurationGwemDtoConstructor;

	interface Layer2FirewallRuleDto extends NSXLayer2FirewallRuleDto
	{
		action: any;
		readonly destination: any;
		disabled: any;
		id: any;
		logged: any;
		name: any;
		notes: any;
		precedence: any;
		readonly source: any;

	}

	interface Layer2FirewallRuleDtoConstructor {
		new(value?:any): Layer2FirewallRuleDto;
		readonly prototype: Layer2FirewallRuleDto;
	}

	const Layer2FirewallRuleDto: Layer2FirewallRuleDtoConstructor;

	interface Layer2ListsGwemDto extends NSXLayer2ListsGwemDto
	{
		readonly macLists: any;

	}

	interface Layer2ListsGwemDtoConstructor {
		new(value?:any): Layer2ListsGwemDto;
		readonly prototype: Layer2ListsGwemDto;
	}

	const Layer2ListsGwemDto: Layer2ListsGwemDtoConstructor;

	interface Layer3DestinationDto extends NSXLayer3DestinationDto
	{
		readonly address: any;
		readonly application: any;

	}

	interface Layer3DestinationDtoConstructor {
		new(value?:any): Layer3DestinationDto;
		readonly prototype: Layer3DestinationDto;
	}

	const Layer3DestinationDto: Layer3DestinationDtoConstructor;

	interface Layer3FirewallConfigurationGwemDto extends NSXLayer3FirewallConfigurationGwemDto
	{
		readonly layer3Lists: any;
		readonly layer3RuleList: any;

	}

	interface Layer3FirewallConfigurationGwemDtoConstructor {
		new(value?:any): Layer3FirewallConfigurationGwemDto;
		readonly prototype: Layer3FirewallConfigurationGwemDto;
	}

	const Layer3FirewallConfigurationGwemDto: Layer3FirewallConfigurationGwemDtoConstructor;

	interface Layer3FirewallRuleDto extends NSXLayer3FirewallRuleDto
	{
		action: any;
		readonly destination: any;
		disabled: any;
		id: any;
		logged: any;
		name: any;
		notes: any;
		precedence: any;
		readonly source: any;

	}

	interface Layer3FirewallRuleDtoConstructor {
		new(value?:any): Layer3FirewallRuleDto;
		readonly prototype: Layer3FirewallRuleDto;
	}

	const Layer3FirewallRuleDto: Layer3FirewallRuleDtoConstructor;

	interface Layer3ListsGwemDto extends NSXLayer3ListsGwemDto
	{
		readonly ipLists: any;

	}

	interface Layer3ListsGwemDtoConstructor {
		new(value?:any): Layer3ListsGwemDto;
		readonly prototype: Layer3ListsGwemDto;
	}

	const Layer3ListsGwemDto: Layer3ListsGwemDtoConstructor;

	interface Layer3SourceAddressDto extends NSXLayer3SourceAddressDto
	{
		readonly address: any;
		readonly portInfo: any;

	}

	interface Layer3SourceAddressDtoConstructor {
		new(value?:any): Layer3SourceAddressDto;
		readonly prototype: Layer3SourceAddressDto;
	}

	const Layer3SourceAddressDto: Layer3SourceAddressDtoConstructor;

	interface LayoutConfigurationDto extends NSXLayoutConfigurationDto
	{
		readonly bodyColor: any;
		readonly companyName: any;
		readonly encodedLogo: any;
		readonly logoBackgroundColor: any;
		readonly logoExtention: any;
		readonly logoFile: any;
		readonly logoUri: any;
		readonly menuBarColor: any;
		readonly portalTitle: any;
		readonly rowAlternativeColor: any;
		readonly rowColor: any;
		readonly titleColor: any;
		readonly topFrameColor: any;

	}

	interface LayoutConfigurationDtoConstructor {
		new(value?:any): LayoutConfigurationDto;
		readonly prototype: LayoutConfigurationDto;
	}

	const LayoutConfigurationDto: LayoutConfigurationDtoConstructor;

	interface LdapAuthServerDto extends NSXLdapAuthServerDto
	{
		authServerType: any;
		readonly bindDomainName: any;
		readonly bindPassword: any;
		enabled: any;
		readonly enableSsl: any;
		readonly ip: any;
		isSecondaryAuthServer: any;
		readonly loginAttributeName: any;
		objectId: any;
		order: any;
		readonly port: any;
		readonly searchBase: any;
		readonly searchFilter: any;
		terminateSessionOnAuthFails: any;
		readonly timeOut: any;

	}

	interface LdapAuthServerDtoConstructor {
		new(value?:any): LdapAuthServerDto;
		readonly prototype: LdapAuthServerDto;
	}

	const LdapAuthServerDto: LdapAuthServerDtoConstructor;

	interface LicenseStatusDto extends NSXLicenseStatusDto
	{
		readonly eval: any;
		readonly expiry: any;
		readonly key: any;

	}

	interface LicenseStatusDtoConstructor {
		new(value?:any): LicenseStatusDto;
		readonly prototype: LicenseStatusDto;
	}

	const LicenseStatusDto: LicenseStatusDtoConstructor;

	interface LifAttachmentDto extends NSXLifAttachmentDto
	{
		readonly connection: any;
		readonly dvsUuids: any;
		readonly lifBridgeId: any;
		readonly lifBridgeName: any;
		readonly lifFlag: any;
		readonly lifId: any;
		readonly lifName: any;
		readonly lifType: any;
		readonly macAddress: any;
		readonly mtu: any;
		readonly multicastIp: any;
		readonly type: any;

	}

	interface LifAttachmentDtoConstructor {
		new(value?:any): LifAttachmentDto;
		readonly prototype: LifAttachmentDto;
	}

	const LifAttachmentDto: LifAttachmentDtoConstructor;

	interface ListGwemDto extends NSXListGwemDto
	{
		readonly name: any;
		readonly value: any;

	}

	interface ListGwemDtoConstructor {
		new(value?:any): ListGwemDto;
		readonly prototype: ListGwemDto;
	}

	const ListGwemDto: ListGwemDtoConstructor;

	interface LiveFlowFilterDto extends NSXLiveFlowFilterDto
	{
		readonly destinationIPAddress: any;
		readonly sourceIPAddress: any;

	}

	interface LiveFlowFilterDtoConstructor {
		new(value?:any): LiveFlowFilterDto;
		readonly prototype: LiveFlowFilterDto;
	}

	const LiveFlowFilterDto: LiveFlowFilterDtoConstructor;

	interface LiveFlowRecordDto extends NSXLiveFlowRecordDto
	{
		readonly applicationContext: any;
		readonly colorCode: any;
		readonly destinationIP: any;
		readonly destinationPort: any;
		readonly direction: any;
		readonly flowType: any;
		readonly incomingBytes: any;
		readonly incomingPackets: any;
		readonly outgoingBytes: any;
		readonly outgoingPackets: any;
		readonly protocolName: any;
		readonly ruleId: any;
		readonly sourceIP: any;
		readonly sourcePort: any;
		readonly state: any;

	}

	interface LiveFlowRecordDtoConstructor {
		new(value?:any): LiveFlowRecordDto;
		readonly prototype: LiveFlowRecordDto;
	}

	const LiveFlowRecordDto: LiveFlowRecordDtoConstructor;

	interface LiveFlowRecordsDto extends NSXLiveFlowRecordsDto
	{
		readonly records: any;

	}

	interface LiveFlowRecordsDtoConstructor {
		new(value?:any): LiveFlowRecordsDto;
		readonly prototype: LiveFlowRecordsDto;
	}

	const LiveFlowRecordsDto: LiveFlowRecordsDtoConstructor;

	interface LoadBalancer extends NSXLoadBalancer
	{
		enableAcceleration: any;
		enabled: any;
		enableLogging: any;
		enableServiceInsertion: any;
		id: any;
		readonly logLevel: any;
		readonly pool: any;
		readonly virtualServer: any;

	}

	interface LoadBalancerConstructor {
		new(value?:any): LoadBalancer;
		readonly prototype: LoadBalancer;
	}

	const LoadBalancer: LoadBalancerConstructor;

	interface LoadBalancerApplicationProfileDtoV4 extends NSXLoadBalancerApplicationProfileDtoV4
	{
		readonly applicationProfileId: any;
		readonly clientSsl: any;
		readonly httpRedirect: any;
		readonly insertXForwardedFor: any;
		readonly name: any;
		readonly persistence: any;
		readonly serverSsl: any;
		readonly serverSslEnabled: any;
		readonly sslPassthrough: any;
		readonly template: any;

	}

	interface LoadBalancerApplicationProfileDtoV4Constructor {
		new(value?:any): LoadBalancerApplicationProfileDtoV4;
		readonly prototype: LoadBalancerApplicationProfileDtoV4;
	}

	const LoadBalancerApplicationProfileDtoV4: LoadBalancerApplicationProfileDtoV4Constructor;

	interface LoadBalancerApplicationRuleDto extends NSXLoadBalancerApplicationRuleDto
	{
		readonly applicationRuleId: any;
		readonly name: any;
		readonly script: any;

	}

	interface LoadBalancerApplicationRuleDtoConstructor {
		new(value?:any): LoadBalancerApplicationRuleDto;
		readonly prototype: LoadBalancerApplicationRuleDto;
	}

	const LoadBalancerApplicationRuleDto: LoadBalancerApplicationRuleDtoConstructor;

	interface LoadBalancerClientSslDto extends NSXLoadBalancerClientSslDto
	{
		readonly caCertificate: any;
		readonly ciphers: any;
		readonly clientAuth: any;
		readonly crlCertificate: any;
		readonly serviceCertificate: any;

	}

	interface LoadBalancerClientSslDtoConstructor {
		new(value?:any): LoadBalancerClientSslDto;
		readonly prototype: LoadBalancerClientSslDto;
	}

	const LoadBalancerClientSslDto: LoadBalancerClientSslDtoConstructor;

	interface LoadBalancerConfigDto extends NSXLoadBalancerConfigDto
	{
		readonly accelerationEnabled: any;
		enabled: any;
		readonly enableServiceInsertion: any;
		readonly poolList: any;
		template: any;
		version: any;
		readonly virtualServerList: any;

	}

	interface LoadBalancerConfigDtoConstructor {
		new(value?:any): LoadBalancerConfigDto;
		readonly prototype: LoadBalancerConfigDto;
	}

	const LoadBalancerConfigDto: LoadBalancerConfigDtoConstructor;

	interface LoadBalancerConfigDtoV4 extends NSXLoadBalancerConfigDtoV4
	{
		readonly accelerationEnabled: any;
		readonly applicationProfile: any;
		readonly applicationRule: any;
		enabled: any;
		readonly enableServiceInsertion: any;
		readonly globalServiceInstance: any;
		readonly logging: any;
		readonly monitor: any;
		readonly pool: any;
		template: any;
		version: any;
		readonly virtualServer: any;

	}

	interface LoadBalancerConfigDtoV4Constructor {
		new(value?:any): LoadBalancerConfigDtoV4;
		readonly prototype: LoadBalancerConfigDtoV4;
	}

	const LoadBalancerConfigDtoV4: LoadBalancerConfigDtoV4Constructor;

	interface LoadBalancerHealthcheckDto extends NSXLoadBalancerHealthcheckDto
	{
		readonly healthThreshold: any;
		readonly interval: any;
		readonly mode: any;
		readonly timeout: any;
		readonly unHealthThreshold: any;
		readonly uri: any;

	}

	interface LoadBalancerHealthcheckDtoConstructor {
		new(value?:any): LoadBalancerHealthcheckDto;
		readonly prototype: LoadBalancerHealthcheckDto;
	}

	const LoadBalancerHealthcheckDto: LoadBalancerHealthcheckDtoConstructor;

	interface LoadBalancerHttpRedirectDto extends NSXLoadBalancerHttpRedirectDto
	{
		readonly to: any;

	}

	interface LoadBalancerHttpRedirectDtoConstructor {
		new(value?:any): LoadBalancerHttpRedirectDto;
		readonly prototype: LoadBalancerHttpRedirectDto;
	}

	const LoadBalancerHttpRedirectDto: LoadBalancerHttpRedirectDtoConstructor;

	interface LoadBalancerInv extends NSXLoadBalancerInv
	{
		readonly displayName: any;
		enableAcceleration: any;
		enabled: any;
		enableLogging: any;
		enableServiceInsertion: any;
		id: any;
		readonly logLevel: any;

		applicationProfilesInv(): ApplicationProfileInv;
		applicationRulesInv(): ApplicationRuleInv;
		monitorsInv(): MonitorInv;
		poolsInv(): PoolInv;
		virtualServersInv(): VirtualServerInv;
	}

	interface LoadBalancerInvConstructor {
		new(value?:any): LoadBalancerInv;
		readonly prototype: LoadBalancerInv;
	}

	const LoadBalancerInv: LoadBalancerInvConstructor;

	interface LoadBalancerMemberDto extends NSXLoadBalancerMemberDto
	{
		readonly ipAddress: any;
		readonly servicePortList: any;
		readonly weight: any;

	}

	interface LoadBalancerMemberDtoConstructor {
		new(value?:any): LoadBalancerMemberDto;
		readonly prototype: LoadBalancerMemberDto;
	}

	const LoadBalancerMemberDto: LoadBalancerMemberDtoConstructor;

	interface LoadBalancerMemberStatsDto extends NSXLoadBalancerMemberStatsDto
	{
		readonly ipAddress: any;
		readonly servicePortList: any;

	}

	interface LoadBalancerMemberStatsDtoConstructor {
		new(value?:any): LoadBalancerMemberStatsDto;
		readonly prototype: LoadBalancerMemberStatsDto;
	}

	const LoadBalancerMemberStatsDto: LoadBalancerMemberStatsDtoConstructor;

	interface LoadBalancerMonitorDto extends NSXLoadBalancerMonitorDto
	{
		readonly expected: any;
		readonly extension: any;
		readonly interval: any;
		readonly maxRetries: any;
		readonly method: any;
		readonly monitorId: any;
		readonly name: any;
		readonly receive: any;
		readonly send: any;
		readonly timeout: any;
		readonly type: any;
		readonly url: any;

	}

	interface LoadBalancerMonitorDtoConstructor {
		new(value?:any): LoadBalancerMonitorDto;
		readonly prototype: LoadBalancerMonitorDto;
	}

	const LoadBalancerMonitorDto: LoadBalancerMonitorDtoConstructor;

	interface LoadBalancerOutputParameter extends NSXLoadBalancerOutputParameter
	{
		id: any;
		readonly poolId: any;
		readonly port: any;
		readonly protocol: any;
		readonly virtualServerId: any;

	}

	interface LoadBalancerOutputParameterConstructor {
		new(value?:any): LoadBalancerOutputParameter;
		readonly prototype: LoadBalancerOutputParameter;
	}

	const LoadBalancerOutputParameter: LoadBalancerOutputParameterConstructor;

	interface LoadBalancerPersistenceDto extends NSXLoadBalancerPersistenceDto
	{
		readonly cookieMode: any;
		readonly cookieName: any;
		readonly method: any;

	}

	interface LoadBalancerPersistenceDtoConstructor {
		new(value?:any): LoadBalancerPersistenceDto;
		readonly prototype: LoadBalancerPersistenceDto;
	}

	const LoadBalancerPersistenceDto: LoadBalancerPersistenceDtoConstructor;

	interface LoadBalancerPersistenceDtoV4 extends NSXLoadBalancerPersistenceDtoV4
	{
		readonly cookieMode: any;
		readonly cookieName: any;
		readonly expire: any;
		readonly method: any;

	}

	interface LoadBalancerPersistenceDtoV4Constructor {
		new(value?:any): LoadBalancerPersistenceDtoV4;
		readonly prototype: LoadBalancerPersistenceDtoV4;
	}

	const LoadBalancerPersistenceDtoV4: LoadBalancerPersistenceDtoV4Constructor;

	interface LoadBalancerPool extends NSXLoadBalancerPool
	{
		id: any;
		readonly loadBalancerPoolMembers: any;
		readonly loadBalancerPoolServicesProfiles: any;
		readonly name: any;

	}

	interface LoadBalancerPoolConstructor {
		new(value?:any): LoadBalancerPool;
		readonly prototype: LoadBalancerPool;
	}

	const LoadBalancerPool: LoadBalancerPoolConstructor;

	interface LoadBalancerPoolDto extends NSXLoadBalancerPoolDto
	{
		readonly description: any;
		readonly id: any;
		readonly members: any;
		readonly name: any;
		readonly servicePorts: any;

	}

	interface LoadBalancerPoolDtoConstructor {
		new(value?:any): LoadBalancerPoolDto;
		readonly prototype: LoadBalancerPoolDto;
	}

	const LoadBalancerPoolDto: LoadBalancerPoolDtoConstructor;

	interface LoadBalancerPoolDtoV4 extends NSXLoadBalancerPoolDtoV4
	{
		readonly algorithm: any;
		readonly algorithmParameters: any;
		readonly description: any;
		readonly member: any;
		readonly monitorId: any;
		readonly name: any;
		readonly poolId: any;
		readonly transparent: any;

	}

	interface LoadBalancerPoolDtoV4Constructor {
		new(value?:any): LoadBalancerPoolDtoV4;
		readonly prototype: LoadBalancerPoolDtoV4;
	}

	const LoadBalancerPoolDtoV4: LoadBalancerPoolDtoV4Constructor;

	interface LoadBalancerPoolMember extends NSXLoadBalancerPoolMember
	{
		id: any;
		readonly ipAddress: any;
		readonly weight: any;

	}

	interface LoadBalancerPoolMemberConstructor {
		new(value?:any): LoadBalancerPoolMember;
		readonly prototype: LoadBalancerPoolMember;
	}

	const LoadBalancerPoolMember: LoadBalancerPoolMemberConstructor;

	interface LoadBalancerPoolServicesProfile extends NSXLoadBalancerPoolServicesProfile
	{
		readonly algorithm: any;
		readonly healthcheckPort: any;
		id: any;
		readonly interval: any;
		readonly mode: any;
		readonly port: any;
		readonly protocol: any;
		readonly threshold: any;
		readonly timeout: any;
		readonly unHealthThreshold: any;
		readonly url: any;

	}

	interface LoadBalancerPoolServicesProfileConstructor {
		new(value?:any): LoadBalancerPoolServicesProfile;
		readonly prototype: LoadBalancerPoolServicesProfile;
	}

	const LoadBalancerPoolServicesProfile: LoadBalancerPoolServicesProfileConstructor;

	interface LoadBalancerPoolStatsDto extends NSXLoadBalancerPoolStatsDto
	{
		readonly description: any;
		readonly id: any;
		readonly memberList: any;
		readonly name: any;
		readonly servicePortList: any;

	}

	interface LoadBalancerPoolStatsDtoConstructor {
		new(value?:any): LoadBalancerPoolStatsDto;
		readonly prototype: LoadBalancerPoolStatsDto;
	}

	const LoadBalancerPoolStatsDto: LoadBalancerPoolStatsDtoConstructor;

	interface LoadBalancerServerSslDto extends NSXLoadBalancerServerSslDto
	{
		readonly caCertificate: any;
		readonly ciphers: any;
		readonly crlCertificate: any;
		readonly serviceCertificate: any;

	}

	interface LoadBalancerServerSslDtoConstructor {
		new(value?:any): LoadBalancerServerSslDto;
		readonly prototype: LoadBalancerServerSslDto;
	}

	const LoadBalancerServerSslDto: LoadBalancerServerSslDtoConstructor;

	interface LoadBalancerServicePortDto extends NSXLoadBalancerServicePortDto
	{
		readonly algorithm: any;
		readonly healthcheckPort: any;
		readonly healthchecks: any;
		readonly port: any;
		readonly protocol: any;

	}

	interface LoadBalancerServicePortDtoConstructor {
		new(value?:any): LoadBalancerServicePortDto;
		readonly prototype: LoadBalancerServicePortDto;
	}

	const LoadBalancerServicePortDto: LoadBalancerServicePortDtoConstructor;

	interface LoadBalancerServicePortStatsDto extends NSXLoadBalancerServicePortStatsDto
	{
		readonly bytesIn: any;
		readonly bytesOut: any;
		readonly curSessions: any;
		readonly httpReqRate: any;
		readonly httpReqRateMax: any;
		readonly httpReqTotal: any;
		readonly maxSessions: any;
		readonly protocol: any;
		readonly rate: any;
		readonly rateLimit: any;
		readonly rateMax: any;
		readonly status: any;
		readonly totalSessions: any;

	}

	interface LoadBalancerServicePortStatsDtoConstructor {
		new(value?:any): LoadBalancerServicePortStatsDto;
		readonly prototype: LoadBalancerServicePortStatsDto;
	}

	const LoadBalancerServicePortStatsDto: LoadBalancerServicePortStatsDtoConstructor;

	interface LoadBalancerServiceProfileDto extends NSXLoadBalancerServiceProfileDto
	{
		readonly persistence: any;
		readonly port: any;
		readonly protocol: any;

	}

	interface LoadBalancerServiceProfileDtoConstructor {
		new(value?:any): LoadBalancerServiceProfileDto;
		readonly prototype: LoadBalancerServiceProfileDto;
	}

	const LoadBalancerServiceProfileDto: LoadBalancerServiceProfileDtoConstructor;

	interface LoadBalancerServiceProfileStatsDto extends NSXLoadBalancerServiceProfileStatsDto
	{
		readonly bytesIn: any;
		readonly bytesOut: any;
		readonly curSessions: any;
		readonly httpReqRate: any;
		readonly httpReqRateMax: any;
		readonly httpReqTotal: any;
		readonly maxSessions: any;
		readonly protocol: any;
		readonly rate: any;
		readonly rateLimit: any;
		readonly rateMax: any;
		readonly status: any;
		readonly totalSessions: any;

	}

	interface LoadBalancerServiceProfileStatsDtoConstructor {
		new(value?:any): LoadBalancerServiceProfileStatsDto;
		readonly prototype: LoadBalancerServiceProfileStatsDto;
	}

	const LoadBalancerServiceProfileStatsDto: LoadBalancerServiceProfileStatsDtoConstructor;

	interface LoadBalancerStatusAndStatsDto extends NSXLoadBalancerStatusAndStatsDto
	{
		readonly poolList: any;
		readonly serverStatus: any;
		readonly timeStamp: any;
		readonly virtualServerList: any;

	}

	interface LoadBalancerStatusAndStatsDtoConstructor {
		new(value?:any): LoadBalancerStatusAndStatsDto;
		readonly prototype: LoadBalancerStatusAndStatsDto;
	}

	const LoadBalancerStatusAndStatsDto: LoadBalancerStatusAndStatsDtoConstructor;

	interface LoadBalancerStatusAndStatsDtoV4 extends NSXLoadBalancerStatusAndStatsDtoV4
	{
		readonly pool: any;
		readonly serverStatus: any;
		readonly timeStamp: any;
		readonly virtualServer: any;

	}

	interface LoadBalancerStatusAndStatsDtoV4Constructor {
		new(value?:any): LoadBalancerStatusAndStatsDtoV4;
		readonly prototype: LoadBalancerStatusAndStatsDtoV4;
	}

	const LoadBalancerStatusAndStatsDtoV4: LoadBalancerStatusAndStatsDtoV4Constructor;

	interface LoadBalancerVendorProfileDto extends NSXLoadBalancerVendorProfileDto
	{
		readonly attributes: any;
		readonly profileAttributes: any;
		readonly vendorTables: any;
		readonly vendorTemplateId: any;
		readonly vendorTemplateName: any;
		readonly vendorTypedAttributes: any;

	}

	interface LoadBalancerVendorProfileDtoConstructor {
		new(value?:any): LoadBalancerVendorProfileDto;
		readonly prototype: LoadBalancerVendorProfileDto;
	}

	const LoadBalancerVendorProfileDto: LoadBalancerVendorProfileDtoConstructor;

	interface LoadBalancerVirtualServer extends NSXLoadBalancerVirtualServer
	{
		id: any;
		readonly ipAddress: any;
		readonly name: any;
		readonly vnicIndex: any;

	}

	interface LoadBalancerVirtualServerConstructor {
		new(value?:any): LoadBalancerVirtualServer;
		readonly prototype: LoadBalancerVirtualServer;
	}

	const LoadBalancerVirtualServer: LoadBalancerVirtualServerConstructor;

	interface LoadBalancerVirtualServerDto extends NSXLoadBalancerVirtualServerDto
	{
		readonly description: any;
		readonly enabled: any;
		readonly id: any;
		readonly ipAddress: any;
		readonly logging: any;
		readonly name: any;
		readonly pool: any;
		readonly serviceProfileList: any;
		readonly vendorProfile: any;

	}

	interface LoadBalancerVirtualServerDtoConstructor {
		new(value?:any): LoadBalancerVirtualServerDto;
		readonly prototype: LoadBalancerVirtualServerDto;
	}

	const LoadBalancerVirtualServerDto: LoadBalancerVirtualServerDtoConstructor;

	interface LoadBalancerVirtualServerDtoV4 extends NSXLoadBalancerVirtualServerDtoV4
	{
		readonly accelerationEnabled: any;
		readonly applicationProfileId: any;
		readonly applicationRuleId: any;
		readonly connectionLimit: any;
		readonly connectionRateLimit: any;
		readonly defaultPoolId: any;
		readonly description: any;
		readonly enabled: any;
		readonly enableServiceInsertion: any;
		readonly ipAddress: any;
		readonly ipPoolId: any;
		readonly ipPoolName: any;
		readonly name: any;
		readonly port: any;
		readonly protocol: any;
		readonly vendorProfile: any;
		readonly virtualServerId: any;

	}

	interface LoadBalancerVirtualServerDtoV4Constructor {
		new(value?:any): LoadBalancerVirtualServerDtoV4;
		readonly prototype: LoadBalancerVirtualServerDtoV4;
	}

	const LoadBalancerVirtualServerDtoV4: LoadBalancerVirtualServerDtoV4Constructor;

	interface LoadBalancerVirtualServerStatsDto extends NSXLoadBalancerVirtualServerStatsDto
	{
		readonly description: any;
		readonly id: any;
		readonly ipAddress: any;
		readonly name: any;
		readonly serviceProfileList: any;

	}

	interface LoadBalancerVirtualServerStatsDtoConstructor {
		new(value?:any): LoadBalancerVirtualServerStatsDto;
		readonly prototype: LoadBalancerVirtualServerStatsDto;
	}

	const LoadBalancerVirtualServerStatsDto: LoadBalancerVirtualServerStatsDtoConstructor;

	interface LocalAuthServerDto extends NSXLocalAuthServerDto
	{
		readonly accountLockoutPolicy: any;
		authServerType: any;
		enabled: any;
		isSecondaryAuthServer: any;
		objectId: any;
		order: any;
		readonly passwordPolicy: any;
		terminateSessionOnAuthFails: any;

	}

	interface LocalAuthServerDtoConstructor {
		new(value?:any): LocalAuthServerDto;
		readonly prototype: LocalAuthServerDto;
	}

	const LocalAuthServerDto: LocalAuthServerDtoConstructor;

	interface LoggingDto extends NSXLoggingDto
	{
		readonly enable: any;
		readonly logLevel: any;

	}

	interface LoggingDtoConstructor {
		new(value?:any): LoggingDto;
		readonly prototype: LoggingDto;
	}

	const LoggingDto: LoggingDtoConstructor;

	interface LogicalRouterConfigDto extends NSXLogicalRouterConfigDto
	{
		readonly displayName: any;
		readonly edgeAssistId: any;
		readonly edgeAssistName: any;
		readonly routingConfig: any;
		readonly type: any;

	}

	interface LogicalRouterConfigDtoConstructor {
		new(value?:any): LogicalRouterConfigDto;
		readonly prototype: LogicalRouterConfigDto;
	}

	const LogicalRouterConfigDto: LogicalRouterConfigDtoConstructor;

	interface LogicalRouterPortConfigDto extends NSXLogicalRouterPortConfigDto
	{
		readonly displayName: any;
		readonly ipAddresses: any;
		readonly type: any;

	}

	interface LogicalRouterPortConfigDtoConstructor {
		new(value?:any): LogicalRouterPortConfigDto;
		readonly prototype: LogicalRouterPortConfigDto;
	}

	const LogicalRouterPortConfigDto: LogicalRouterPortConfigDtoConstructor;

	interface LogonLogoffScriptDto extends NSXLogonLogoffScriptDto
	{
		readonly description: any;
		readonly enabled: any;
		readonly encodedData: any;
		readonly extension: any;
		readonly objectId: any;
		readonly order: any;
		readonly scriptData: any;
		readonly scriptFileId: any;
		readonly scriptFileUri: any;
		readonly type: any;

	}

	interface LogonLogoffScriptDtoConstructor {
		new(value?:any): LogonLogoffScriptDto;
		readonly prototype: LogonLogoffScriptDto;
	}

	const LogonLogoffScriptDto: LogonLogoffScriptDtoConstructor;

	interface LogonLogoffScritpsDto extends NSXLogonLogoffScritpsDto
	{
		readonly scripts: any;

	}

	interface LogonLogoffScritpsDtoConstructor {
		new(value?:any): LogonLogoffScritpsDto;
		readonly prototype: LogonLogoffScritpsDto;
	}

	const LogonLogoffScritpsDto: LogonLogoffScritpsDtoConstructor;

	interface MacAddressDto extends NSXMacAddressDto
	{
		readonly edgeVmHaIndex: any;
		readonly value: any;

	}

	interface MacAddressDtoConstructor {
		new(value?:any): MacAddressDto;
		readonly prototype: MacAddressDto;
	}

	const MacAddressDto: MacAddressDtoConstructor;

	interface MacLearningConfigDto extends NSXMacLearningConfigDto
	{
		readonly enabled: any;

	}

	interface MacLearningConfigDtoConstructor {
		new(value?:any): MacLearningConfigDto;
		readonly prototype: MacLearningConfigDto;
	}

	const MacLearningConfigDto: MacLearningConfigDtoConstructor;

	interface MacListsGwemDto extends NSXMacListsGwemDto
	{
		readonly macList: any;

	}

	interface MacListsGwemDtoConstructor {
		new(value?:any): MacListsGwemDto;
		readonly prototype: MacListsGwemDto;
	}

	const MacListsGwemDto: MacListsGwemDtoConstructor;

	interface MacNodeDto extends NSXMacNodeDto
	{
		readonly macAddress: any;

	}

	interface MacNodeDtoConstructor {
		new(value?:any): MacNodeDto;
		readonly prototype: MacNodeDto;
	}

	const MacNodeDto: MacNodeDtoConstructor;

	interface MacNodeSetDto extends NSXMacNodeSetDto
	{
		readonly macNodes: any;

	}

	interface MacNodeSetDtoConstructor {
		new(value?:any): MacNodeSetDto;
		readonly prototype: MacNodeSetDto;
	}

	const MacNodeSetDto: MacNodeSetDtoConstructor;

	interface MACSetDto extends NSXMACSetDto
	{
		clientHandle: any;
		description: any;
		extendedAttributes: any;
		inheritanceAllowed: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		scope: any;
		type: any;
		readonly value: any;
		vsmUuid: any;

	}

	interface MACSetDtoConstructor {
		new(value?:any): MACSetDto;
		readonly prototype: MACSetDto;
	}

	const MACSetDto: MACSetDtoConstructor;

	interface MemoryDto extends NSXMemoryDto
	{
		readonly percentValue: any;

	}

	interface MemoryDtoConstructor {
		new(value?:any): MemoryDto;
		readonly prototype: MemoryDto;
	}

	const MemoryDto: MemoryDtoConstructor;

	interface MessageDto extends NSXMessageDto
	{
		readonly payload: any;
		readonly topic: any;

	}

	interface MessageDtoConstructor {
		new(value?:any): MessageDto;
		readonly prototype: MessageDto;
	}

	const MessageDto: MessageDtoConstructor;

	interface MessagingServerMonitorDto extends NSXMessagingServerMonitorDto
	{
		readonly data: any;

	}

	interface MessagingServerMonitorDtoConstructor {
		new(value?:any): MessagingServerMonitorDto;
		readonly prototype: MessagingServerMonitorDto;
	}

	const MessagingServerMonitorDto: MessagingServerMonitorDtoConstructor;

	interface MetaDto extends NSXMetaDto
	{
		readonly endTime: any;
		readonly interval: any;
		readonly startTime: any;
		readonly vnics: any;

	}

	interface MetaDtoConstructor {
		new(value?:any): MetaDto;
		readonly prototype: MetaDto;
	}

	const MetaDto: MetaDtoConstructor;

	interface MethodDto extends NSXMethodDto
	{
		readonly data: any;
		readonly name: any;

	}

	interface MethodDtoConstructor {
		new(value?:any): MethodDto;
		readonly prototype: MethodDto;
	}

	const MethodDto: MethodDtoConstructor;

	interface MgmtInterfaceDto extends NSXMgmtInterfaceDto
	{
		addressGroups: any;
		readonly connectedToId: any;
		readonly connectedToName: any;
		readonly index: any;
		label: any;
		mtu: any;
		name: any;

	}

	interface MgmtInterfaceDtoConstructor {
		new(value?:any): MgmtInterfaceDto;
		readonly prototype: MgmtInterfaceDto;
	}

	const MgmtInterfaceDto: MgmtInterfaceDtoConstructor;

	interface Monitor extends NSXMonitor
	{
		readonly description: any;
		readonly expected: any;
		readonly extension: any;
		id: any;
		readonly interval: any;
		readonly maxRetries: any;
		readonly method: any;
		readonly monitorId: any;
		readonly name: any;
		readonly objectId: any;
		readonly receive: any;
		readonly send: any;
		readonly timeout: any;
		readonly type: any;
		readonly url: any;

	}

	interface MonitorConstructor {
		new(value?:any): Monitor;
		readonly prototype: Monitor;
	}

	const Monitor: MonitorConstructor;

	interface MonitorInv extends NSXMonitorInv
	{
		readonly displayName: any;
		id: any;

		monitors(): Monitor;
	}

	interface MonitorInvConstructor {
		new(value?:any): MonitorInv;
		readonly prototype: MonitorInv;
	}

	const MonitorInv: MonitorInvConstructor;

	interface MulticastRangeDto extends NSXMulticastRangeDto
	{
		readonly begin: any;
		readonly desc: any;
		readonly end: any;
		readonly id: any;
		readonly name: any;

	}

	interface MulticastRangeDtoConstructor {
		new(value?:any): MulticastRangeDto;
		readonly prototype: MulticastRangeDto;
	}

	const MulticastRangeDto: MulticastRangeDtoConstructor;

	interface MulticastRangesDto extends NSXMulticastRangesDto
	{
		readonly multicastRanges: any;

	}

	interface MulticastRangesDtoConstructor {
		new(value?:any): MulticastRangesDto;
		readonly prototype: MulticastRangesDto;
	}

	const MulticastRangesDto: MulticastRangesDtoConstructor;

	interface NamespaceDto extends NSXNamespaceDto
	{
		clientHandle: any;
		readonly contextId: any;
		description: any;
		extendedAttributes: any;
		inheritanceAllowed: any;
		name: any;
		readonly namespaceType: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		scope: any;
		type: any;
		vsmUuid: any;

	}

	interface NamespaceDtoConstructor {
		new(value?:any): NamespaceDto;
		readonly prototype: NamespaceDto;
	}

	const NamespaceDto: NamespaceDtoConstructor;

	interface NatConfigDto extends NSXNatConfigDto
	{
		enabled: any;
		readonly rules: any;
		template: any;
		version: any;

	}

	interface NatConfigDtoConstructor {
		new(value?:any): NatConfigDto;
		readonly prototype: NatConfigDto;
	}

	const NatConfigDto: NatConfigDtoConstructor;

	interface NatRuleDto extends NSXNatRuleDto
	{
		readonly action: any;
		readonly description: any;
		readonly enabled: any;
		readonly icmpType: any;
		readonly loggingEnabled: any;
		readonly originalAddress: any;
		readonly originalPort: any;
		readonly protocol: any;
		readonly ruleId: any;
		readonly ruleTag: any;
		readonly ruleType: any;
		readonly translatedAddress: any;
		readonly translatedPort: any;
		readonly vnic: any;

	}

	interface NatRuleDtoConstructor {
		new(value?:any): NatRuleDto;
		readonly prototype: NatRuleDto;
	}

	const NatRuleDto: NatRuleDtoConstructor;

	interface NatRules extends NSXNatRules
	{
		readonly natRulesDtos: any;

	}

	interface NatRulesConstructor {
		new(value?:any): NatRules;
		readonly prototype: NatRules;
	}

	const NatRules: NatRulesConstructor;

	interface NetworkSpecDto extends NSXNetworkSpecDto
	{
		readonly description: any;
		readonly mtu: any;
		readonly networkBindingType: any;
		readonly networkName: any;
		readonly networkType: any;
		readonly numberOfPorts: any;
		readonly promiscuousMode: any;
		readonly tenantId: any;
		readonly vlanId: any;

	}

	interface NetworkSpecDtoConstructor {
		new(value?:any): NetworkSpecDto;
		readonly prototype: NetworkSpecDto;
	}

	const NetworkSpecDto: NetworkSpecDtoConstructor;

	interface Nic extends NSXNic
	{
		connected: any;
		id: any;
		readonly index: any;
		readonly name: any;
		readonly portgroupId: any;
		readonly type: any;

		addressGroups(): AddressGroup;
	}

	interface NicConstructor {
		new(value?:any): Nic;
		readonly prototype: Nic;
	}

	const Nic: NicConstructor;

	interface NicsInv extends NSXNicsInv
	{
		readonly displayName: any;
		id: any;

		nics(): Nic;
	}

	interface NicsInvConstructor {
		new(value?:any): NicsInv;
		readonly prototype: NicsInv;
	}

	const NicsInv: NicsInvConstructor;

	interface NVPClusterDto extends NSXNVPClusterDto
	{
		readonly nvpNodes: any;

	}

	interface NVPClusterDtoConstructor {
		new(value?:any): NVPClusterDto;
		readonly prototype: NVPClusterDto;
	}

	const NVPClusterDto: NVPClusterDtoConstructor;

	interface NVPNodeDto extends NSXNVPNodeDto
	{
		readonly address: any;
		readonly cert_thumbprint: any;
		readonly password: any;
		readonly role: any;
		readonly user: any;

	}

	interface NVPNodeDtoConstructor {
		new(value?:any): NVPNodeDto;
		readonly prototype: NVPNodeDto;
	}

	const NVPNodeDto: NVPNodeDtoConstructor;

	interface ObjectInfo extends NSXObjectInfo
	{
		readonly id: any;
		readonly name: any;
		readonly type: any;
		readonly value: any;

	}

	interface ObjectInfoConstructor {
		new(value?:any): ObjectInfo;
		readonly prototype: ObjectInfo;
	}

	const ObjectInfo: ObjectInfoConstructor;

	interface ObjectInfoDto extends NSXObjectInfoDto
	{
		readonly ipSetValue: any;
		readonly isGlobal: any;
		readonly isValid: any;
		readonly name: any;
		readonly type: any;
		readonly value: any;

	}

	interface ObjectInfoDtoConstructor {
		new(value?:any): ObjectInfoDto;
		readonly prototype: ObjectInfoDto;
	}

	const ObjectInfoDto: ObjectInfoDtoConstructor;

	interface ObjectInfoFlowFilterDto extends NSXObjectInfoFlowFilterDto
	{
		readonly id: any;
		readonly name: any;
		readonly type: any;

	}

	interface ObjectInfoFlowFilterDtoConstructor {
		new(value?:any): ObjectInfoFlowFilterDto;
		readonly prototype: ObjectInfoFlowFilterDto;
	}

	const ObjectInfoFlowFilterDto: ObjectInfoFlowFilterDtoConstructor;

	interface ObjectLibraryPermissionDto extends NSXObjectLibraryPermissionDto
	{
		readonly applicationsPermissions: any;
		readonly groupingObjectsPermissions: any;
		readonly hasLicenseForApplicationObjects: any;
		readonly hasLicenseForGroupingObjects: any;

	}

	interface ObjectLibraryPermissionDtoConstructor {
		new(value?:any): ObjectLibraryPermissionDto;
		readonly prototype: ObjectLibraryPermissionDto;
	}

	const ObjectLibraryPermissionDto: ObjectLibraryPermissionDtoConstructor;

	interface ObjectReference extends NSXObjectReference
	{
		readonly objectId: any;
		readonly objectTypeName: any;
		readonly revision: any;
		readonly vsmUuid: any;

	}

	interface ObjectReferenceConstructor {
		new(value?:any): ObjectReference;
		readonly prototype: ObjectReference;
	}

	const ObjectReference: ObjectReferenceConstructor;

	interface ObjectTypeDto extends NSXObjectTypeDto
	{
		readonly typeName: any;

	}

	interface ObjectTypeDtoConstructor {
		new(value?:any): ObjectTypeDto;
		readonly prototype: ObjectTypeDto;
	}

	const ObjectTypeDto: ObjectTypeDtoConstructor;

	interface OspfAreaDto extends NSXOspfAreaDto
	{
		readonly areaId: any;
		readonly authentication: any;
		readonly type: any;

	}

	interface OspfAreaDtoConstructor {
		new(value?:any): OspfAreaDto;
		readonly prototype: OspfAreaDto;
	}

	const OspfAreaDto: OspfAreaDtoConstructor;

	interface OspfAreasDto extends NSXOspfAreasDto
	{
		readonly ospfAreas: any;

	}

	interface OspfAreasDtoConstructor {
		new(value?:any): OspfAreasDto;
		readonly prototype: OspfAreasDto;
	}

	const OspfAreasDto: OspfAreasDtoConstructor;

	interface OspfConfigDto extends NSXOspfConfigDto
	{
		readonly defaultOriginate: any;
		readonly enabled: any;
		readonly forwardingAddress: any;
		readonly gracefulRestart: any;
		readonly ospfAreas: any;
		readonly ospfInterfaces: any;
		readonly protocolAddress: any;
		readonly redistribution: any;

	}

	interface OspfConfigDtoConstructor {
		new(value?:any): OspfConfigDto;
		readonly prototype: OspfConfigDto;
	}

	const OspfConfigDto: OspfConfigDtoConstructor;

	interface OspfInterfaceDto extends NSXOspfInterfaceDto
	{
		readonly areaId: any;
		readonly cost: any;
		readonly deadInterval: any;
		readonly helloInterval: any;
		readonly mtuIgnore: any;
		readonly priority: any;
		readonly vnic: any;

	}

	interface OspfInterfaceDtoConstructor {
		new(value?:any): OspfInterfaceDto;
		readonly prototype: OspfInterfaceDto;
	}

	const OspfInterfaceDto: OspfInterfaceDtoConstructor;

	interface OspfInterfacesDto extends NSXOspfInterfacesDto
	{
		readonly ospfInterfaces: any;

	}

	interface OspfInterfacesDtoConstructor {
		new(value?:any): OspfInterfacesDto;
		readonly prototype: OspfInterfacesDto;
	}

	const OspfInterfacesDto: OspfInterfacesDtoConstructor;

	interface PagingInfo extends NSXPagingInfo
	{
		readonly pageSize: any;
		readonly sortBy: any;
		readonly sortOrderAscending: any;
		readonly startIndex: any;
		readonly totalCount: any;

	}

	interface PagingInfoConstructor {
		new(value?:any): PagingInfo;
		readonly prototype: PagingInfo;
	}

	const PagingInfo: PagingInfoConstructor;

	interface PagingInfoDto extends NSXPagingInfoDto
	{
		readonly action: any;
		readonly contextId: any;
		readonly endTime: any;
		readonly flowType: any;
		readonly pageSize: any;
		readonly startIndex: any;
		readonly startTime: any;
		readonly totalCount: any;

	}

	interface PagingInfoDtoConstructor {
		new(value?:any): PagingInfoDto;
		readonly prototype: PagingInfoDto;
	}

	const PagingInfoDto: PagingInfoDtoConstructor;

	interface PasswordAuthenticationDto extends NSXPasswordAuthenticationDto
	{
		readonly authenticationTimeout: any;
		readonly preventMultipleLogon: any;
		readonly primaryAuthServers: any;
		readonly secondaryAuthServer: any;

	}

	interface PasswordAuthenticationDtoConstructor {
		new(value?:any): PasswordAuthenticationDto;
		readonly prototype: PasswordAuthenticationDto;
	}

	const PasswordAuthenticationDto: PasswordAuthenticationDtoConstructor;

	interface PasswordPolicyDto extends NSXPasswordPolicyDto
	{
		readonly allowUserIdWithinPassword: any;
		readonly expiryNotification: any;
		readonly maxLength: any;
		readonly minAlphabets: any;
		readonly minDigits: any;
		readonly minLength: any;
		readonly minSpecialChar: any;
		readonly passwordLifeTime: any;

	}

	interface PasswordPolicyDtoConstructor {
		new(value?:any): PasswordPolicyDto;
		readonly prototype: PasswordPolicyDto;
	}

	const PasswordPolicyDto: PasswordPolicyDtoConstructor;

	interface PerformanceTestConfigDto extends NSXPerformanceTestConfigDto
	{
		readonly key: any;
		readonly value: any;

	}

	interface PerformanceTestConfigDtoConstructor {
		new(value?:any): PerformanceTestConfigDto;
		readonly prototype: PerformanceTestConfigDto;
	}

	const PerformanceTestConfigDto: PerformanceTestConfigDtoConstructor;

	interface PermissionInfoDto extends NSXPermissionInfoDto
	{
		readonly accessPermission: any;
		readonly dataPermission: any;
		readonly isLicensed: any;

	}

	interface PermissionInfoDtoConstructor {
		new(value?:any): PermissionInfoDto;
		readonly prototype: PermissionInfoDto;
	}

	const PermissionInfoDto: PermissionInfoDtoConstructor;

	interface PermissionsDto extends NSXPermissionsDto
	{
		readonly configure: any;
		readonly read: any;
		readonly write: any;

	}

	interface PermissionsDtoConstructor {
		new(value?:any): PermissionsDto;
		readonly prototype: PermissionsDto;
	}

	const PermissionsDto: PermissionsDtoConstructor;

	interface PermissionsInfoDto extends NSXPermissionsInfoDto
	{
		readonly accessPermission: any;
		readonly dataPermission: any;
		readonly isAppLicensed: any;

	}

	interface PermissionsInfoDtoConstructor {
		new(value?:any): PermissionsInfoDto;
		readonly prototype: PermissionsInfoDto;
	}

	const PermissionsInfoDto: PermissionsInfoDtoConstructor;

	interface Persistence extends NSXPersistence
	{
		readonly cookieMode: any;
		readonly cookieName: any;
		readonly expiresIn: any;
		id: any;
		readonly method: any;

	}

	interface PersistenceConstructor {
		new(value?:any): Persistence;
		readonly prototype: Persistence;
	}

	const Persistence: PersistenceConstructor;

	interface PktCapQueryReplyDto extends NSXPktCapQueryReplyDto
	{
		readonly errMessage: any;
		readonly helpInfo: any;

	}

	interface PktCapQueryReplyDtoConstructor {
		new(value?:any): PktCapQueryReplyDto;
		readonly prototype: PktCapQueryReplyDto;
	}

	const PktCapQueryReplyDto: PktCapQueryReplyDtoConstructor;

	interface PktCapRequestDto extends NSXPktCapRequestDto
	{
		readonly cappoint: any;
		readonly dir: any;
		readonly hostid: any;
		readonly options: any;
		readonly vmknic: any;
		readonly vmnic: any;
		readonly vnic: any;

	}

	interface PktCapRequestDtoConstructor {
		new(value?:any): PktCapRequestDto;
		readonly prototype: PktCapRequestDto;
	}

	const PktCapRequestDto: PktCapRequestDtoConstructor;

	interface PktCapSessionDto extends NSXPktCapSessionDto
	{
		readonly fileDirectory: any;
		readonly filename: any;
		readonly message: any;
		readonly request: any;
		readonly sessionId: any;
		readonly status: any;

	}

	interface PktCapSessionDtoConstructor {
		new(value?:any): PktCapSessionDto;
		readonly prototype: PktCapSessionDto;
	}

	const PktCapSessionDto: PktCapSessionDtoConstructor;

	interface PktCapSessionsDto extends NSXPktCapSessionsDto
	{
		readonly errorSession: any;
		readonly finishedSession: any;
		readonly sessions: any;
		readonly startedSession: any;
		readonly stoppedSession: any;

	}

	interface PktCapSessionsDtoConstructor {
		new(value?:any): PktCapSessionsDto;
		readonly prototype: PktCapSessionsDto;
	}

	const PktCapSessionsDto: PktCapSessionsDtoConstructor;

	interface Pool extends NSXPool
	{
		readonly algorithm: any;
		readonly algorithmParameters: any;
		readonly description: any;
		id: any;
		readonly listMonitors: any;
		readonly members: any;
		readonly name: any;
		readonly objectId: any;
		readonly poolId: any;
		readonly servicePorts: any;
		transparent: any;

		poolMembers(): PoolMember;
		servicePorts(): ServicePort;
	}

	interface PoolConstructor {
		new(value?:any): Pool;
		readonly prototype: Pool;
	}

	const Pool: PoolConstructor;

	interface PoolInv extends NSXPoolInv
	{
		readonly displayName: any;
		id: any;

		pools(): Pool;
	}

	interface PoolInvConstructor {
		new(value?:any): PoolInv;
		readonly prototype: PoolInv;
	}

	const PoolInv: PoolInvConstructor;

	interface PoolMember extends NSXPoolMember
	{
		readonly displayName: any;
		readonly groupingObjectId: any;
		id: any;
		readonly ipAddress: any;
		readonly maxConn: any;
		readonly memberId: any;
		readonly minConn: any;
		readonly monitorPort: any;
		readonly name: any;
		readonly objectId: any;
		readonly port: any;
		readonly servicePortList: any;
		readonly weight: any;

		servicePorts(): ServicePort;
	}

	interface PoolMemberConstructor {
		new(value?:any): PoolMember;
		readonly prototype: PoolMember;
	}

	const PoolMember: PoolMemberConstructor;

	interface PortalCustomizationDto extends NSXPortalCustomizationDto
	{
		readonly clientIconsDto: any;
		readonly layoutConfigurationDto: any;

	}

	interface PortalCustomizationDtoConstructor {
		new(value?:any): PortalCustomizationDto;
		readonly prototype: PortalCustomizationDto;
	}

	const PortalCustomizationDto: PortalCustomizationDtoConstructor;

	interface PrimaryAuthServersDto extends NSXPrimaryAuthServersDto
	{
		readonly authServers: any;

	}

	interface PrimaryAuthServersDtoConstructor {
		new(value?:any): PrimaryAuthServersDto;
		readonly prototype: PrimaryAuthServersDto;
	}

	const PrimaryAuthServersDto: PrimaryAuthServersDtoConstructor;

	interface PrincipalDto extends NSXPrincipalDto
	{
		readonly attributes: any;

	}

	interface PrincipalDtoConstructor {
		new(value?:any): PrincipalDto;
		readonly prototype: PrincipalDto;
	}

	const PrincipalDto: PrincipalDtoConstructor;

	interface PrivateNetworkDto extends NSXPrivateNetworkDto
	{
		readonly description: any;
		readonly enabled: any;
		readonly network: any;
		readonly objectId: any;
		readonly order: any;
		readonly sendOverTunnel: any;

	}

	interface PrivateNetworkDtoConstructor {
		new(value?:any): PrivateNetworkDto;
		readonly prototype: PrivateNetworkDto;
	}

	const PrivateNetworkDto: PrivateNetworkDtoConstructor;

	interface PrivateNetworksDto extends NSXPrivateNetworksDto
	{
		readonly privateNetworks: any;

	}

	interface PrivateNetworksDtoConstructor {
		new(value?:any): PrivateNetworksDto;
		readonly prototype: PrivateNetworksDto;
	}

	const PrivateNetworksDto: PrivateNetworksDtoConstructor;

	interface ProcessStats extends NSXProcessStats
	{
		readonly cputime: any;
		readonly mem_resident: any;
		readonly mem_used: any;
		readonly monitor_uptime: any;
		readonly process_name: any;
		readonly restarts: any;
		readonly uptime: any;

	}

	interface ProcessStatsConstructor {
		new(value?:any): ProcessStats;
		readonly prototype: ProcessStats;
	}

	const ProcessStats: ProcessStatsConstructor;

	interface ProtocolDto extends NSXProtocolDto
	{
		readonly allowDestinationPorts: any;
		readonly allowSourcePorts: any;
		readonly name: any;
		readonly subProtocols: any;
		readonly value: any;

	}

	interface ProtocolDtoConstructor {
		new(value?:any): ProtocolDto;
		readonly prototype: ProtocolDto;
	}

	const ProtocolDto: ProtocolDtoConstructor;

	interface ProtocolGwemDto extends NSXProtocolGwemDto
	{
		readonly destinationPort: any;
		readonly protocol: any;
		readonly sourcePort: any;
		readonly subProtocol: any;

	}

	interface ProtocolGwemDtoConstructor {
		new(value?:any): ProtocolGwemDto;
		readonly prototype: ProtocolGwemDto;
	}

	const ProtocolGwemDto: ProtocolGwemDtoConstructor;

	interface ProtocolListDto extends NSXProtocolListDto
	{
		readonly applicableOnFirewallLayer: any;
		readonly protocol: any;
		readonly protocolsType: any;
		readonly subProtocolOfTypeName: any;
		readonly subProtocolOfTypeValue: any;

	}

	interface ProtocolListDtoConstructor {
		new(value?:any): ProtocolListDto;
		readonly prototype: ProtocolListDto;
	}

	const ProtocolListDto: ProtocolListDtoConstructor;

	interface QueryDaemonDto extends NSXQueryDaemonDto
	{
		readonly enabled: any;
		readonly port: any;

	}

	interface QueryDaemonDtoConstructor {
		new(value?:any): QueryDaemonDto;
		readonly prototype: QueryDaemonDto;
	}

	const QueryDaemonDto: QueryDaemonDtoConstructor;

	interface RadiusAuthServerDto extends NSXRadiusAuthServerDto
	{
		authServerType: any;
		enabled: any;
		readonly ip: any;
		isSecondaryAuthServer: any;
		readonly nasIp: any;
		objectId: any;
		order: any;
		readonly port: any;
		readonly retryCount: any;
		readonly secret: any;
		terminateSessionOnAuthFails: any;
		readonly timeOut: any;

	}

	interface RadiusAuthServerDtoConstructor {
		new(value?:any): RadiusAuthServerDto;
		readonly prototype: RadiusAuthServerDto;
	}

	const RadiusAuthServerDto: RadiusAuthServerDtoConstructor;

	interface RangeDto extends NSXRangeDto
	{
		begin: any;
		readonly desc: any;
		end: any;
		readonly id: any;
		readonly name: any;
		readonly resType: any;

	}

	interface RangeDtoConstructor {
		new(value?:any): RangeDto;
		readonly prototype: RangeDto;
	}

	const RangeDto: RangeDtoConstructor;

	interface ReconfigureVMTaskResultDto extends NSXReconfigureVMTaskResultDto
	{
		readonly jobId: any;
		readonly taskMap: any;

	}

	interface ReconfigureVMTaskResultDtoConstructor {
		new(value?:any): ReconfigureVMTaskResultDto;
		readonly prototype: ReconfigureVMTaskResultDto;
	}

	const ReconfigureVMTaskResultDto: ReconfigureVMTaskResultDtoConstructor;

	interface RecordValuesDto extends NSXRecordValuesDto
	{
		readonly value: any;

	}

	interface RecordValuesDtoConstructor {
		new(value?:any): RecordValuesDto;
		readonly prototype: RecordValuesDto;
	}

	const RecordValuesDto: RecordValuesDtoConstructor;

	interface RedistributionDto extends NSXRedistributionDto
	{
		readonly enabled: any;
		readonly rules: any;

	}

	interface RedistributionDtoConstructor {
		new(value?:any): RedistributionDto;
		readonly prototype: RedistributionDto;
	}

	const RedistributionDto: RedistributionDtoConstructor;

	interface RedistributionRuleDto extends NSXRedistributionRuleDto
	{
		readonly action: any;
		readonly from: any;
		readonly id: any;
		readonly prefixName: any;

	}

	interface RedistributionRuleDtoConstructor {
		new(value?:any): RedistributionRuleDto;
		readonly prototype: RedistributionRuleDto;
	}

	const RedistributionRuleDto: RedistributionRuleDtoConstructor;

	interface RedistributionRuleFromDto extends NSXRedistributionRuleFromDto
	{
		readonly bgp: any;
		readonly connected: any;
		readonly fromStatic: any;
		readonly isis: any;
		readonly ospf: any;

	}

	interface RedistributionRuleFromDtoConstructor {
		new(value?:any): RedistributionRuleFromDto;
		readonly prototype: RedistributionRuleFromDto;
	}

	const RedistributionRuleFromDto: RedistributionRuleFromDtoConstructor;

	interface RedistributionRulesDto extends NSXRedistributionRulesDto
	{
		readonly rules: any;

	}

	interface RedistributionRulesDtoConstructor {
		new(value?:any): RedistributionRulesDto;
		readonly prototype: RedistributionRulesDto;
	}

	const RedistributionRulesDto: RedistributionRulesDtoConstructor;

	interface RelayAgentDto extends NSXRelayAgentDto
	{
		readonly giAddress: any;
		readonly relayServer: any;
		readonly vnicIndex: any;

	}

	interface RelayAgentDtoConstructor {
		new(value?:any): RelayAgentDto;
		readonly prototype: RelayAgentDto;
	}

	const RelayAgentDto: RelayAgentDtoConstructor;

	interface RelayAgentsDto extends NSXRelayAgentsDto
	{
		readonly relayAgents: any;

	}

	interface RelayAgentsDtoConstructor {
		new(value?:any): RelayAgentsDto;
		readonly prototype: RelayAgentsDto;
	}

	const RelayAgentsDto: RelayAgentsDtoConstructor;

	interface RelayAgentsUIDto extends NSXRelayAgentsUIDto
	{
		readonly relayAgents: any;

	}

	interface RelayAgentsUIDtoConstructor {
		new(value?:any): RelayAgentsUIDto;
		readonly prototype: RelayAgentsUIDto;
	}

	const RelayAgentsUIDto: RelayAgentsUIDtoConstructor;

	interface RelayAgentUIDto extends NSXRelayAgentUIDto
	{
		readonly giAddress: any;
		readonly interfaceDto: any;
		readonly relayServer: any;
		readonly vnicInfoDto: any;

	}

	interface RelayAgentUIDtoConstructor {
		new(value?:any): RelayAgentUIDto;
		readonly prototype: RelayAgentUIDto;
	}

	const RelayAgentUIDto: RelayAgentUIDtoConstructor;

	interface RelayServerDto extends NSXRelayServerDto
	{
		readonly fqdns: any;
		readonly groupingObjectIds: any;
		readonly ipAddresses: any;

	}

	interface RelayServerDtoConstructor {
		new(value?:any): RelayServerDto;
		readonly prototype: RelayServerDto;
	}

	const RelayServerDto: RelayServerDtoConstructor;

	interface RelayServerUIDto extends NSXRelayServerUIDto
	{
		readonly fqdns: any;
		readonly groupingObjectIds: any;
		readonly ipAddresses: any;

	}

	interface RelayServerUIDtoConstructor {
		new(value?:any): RelayServerUIDto;
		readonly prototype: RelayServerUIDto;
	}

	const RelayServerUIDto: RelayServerUIDtoConstructor;

	interface RequestQueryParameters extends NSXRequestQueryParameters
	{

	}

	interface RequestQueryParametersConstructor {
		new(value?:any): RequestQueryParameters;
		readonly prototype: RequestQueryParameters;
	}

	const RequestQueryParameters: RequestQueryParametersConstructor;

	interface RequestStatsDto extends NSXRequestStatsDto
	{
		readonly queries: any;
		readonly total: any;

	}

	interface RequestStatsDtoConstructor {
		new(value?:any): RequestStatsDto;
		readonly prototype: RequestStatsDto;
	}

	const RequestStatsDto: RequestStatsDtoConstructor;

	interface ReservationInfoDto extends NSXReservationInfoDto
	{
		readonly limit: any;
		readonly reservation: any;
		readonly shares: any;

	}

	interface ReservationInfoDtoConstructor {
		new(value?:any): ReservationInfoDto;
		readonly prototype: ReservationInfoDto;
	}

	const ReservationInfoDto: ReservationInfoDtoConstructor;

	interface ResolveObjectDto extends NSXResolveObjectDto
	{
		readonly replaceAll: any;
		readonly ruleId: any;
		readonly sourceObject: any;
		readonly targetObject: any;

	}

	interface ResolveObjectDtoConstructor {
		new(value?:any): ResolveObjectDto;
		readonly prototype: ResolveObjectDto;
	}

	const ResolveObjectDto: ResolveObjectDtoConstructor;

	interface Resource extends NSXResource
	{
		description: any;
		id: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;

		securityGroups(): SecurityGroup;
	}

	interface ResourceConstructor {
		new(value?:any): Resource;
		readonly prototype: Resource;
	}

	const Resource: ResourceConstructor;

	interface ResourceConfigDto extends NSXResourceConfigDto
	{
		readonly configSpec: any;
		readonly resourceId: any;

	}

	interface ResourceConfigDtoConstructor {
		new(value?:any): ResourceConfigDto;
		readonly prototype: ResourceConfigDto;
	}

	const ResourceConfigDto: ResourceConfigDtoConstructor;

	interface ResourceDto extends NSXResourceDto
	{
		clientHandle: any;
		description: any;
		extendedAttributes: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		readonly resourceId: any;
		revision: any;
		scope: any;
		type: any;
		vsmUuid: any;

	}

	interface ResourceDtoConstructor {
		new(value?:any): ResourceDto;
		readonly prototype: ResourceDto;
	}

	const ResourceDto: ResourceDtoConstructor;

	interface ResourceIdListDto extends NSXResourceIdListDto
	{
		readonly resourceIds: any;

	}

	interface ResourceIdListDtoConstructor {
		new(value?:any): ResourceIdListDto;
		readonly prototype: ResourceIdListDto;
	}

	const ResourceIdListDto: ResourceIdListDtoConstructor;

	interface ResourceListDto extends NSXResourceListDto
	{
		readonly resources: any;

	}

	interface ResourceListDtoConstructor {
		new(value?:any): ResourceListDto;
		readonly prototype: ResourceListDto;
	}

	const ResourceListDto: ResourceListDtoConstructor;

	interface ResourceStats extends NSXResourceStats
	{
		readonly active_count: any;
		readonly error_state_count: any;
		readonly registered_count: any;

	}

	interface ResourceStatsConstructor {
		new(value?:any): ResourceStats;
		readonly prototype: ResourceStats;
	}

	const ResourceStats: ResourceStatsConstructor;

	interface ResourceStatusDto extends NSXResourceStatusDto
	{
		readonly childResource: any;
		readonly featureStatuses: any;
		readonly resource: any;

	}

	interface ResourceStatusDtoConstructor {
		new(value?:any): ResourceStatusDto;
		readonly prototype: ResourceStatusDto;
	}

	const ResourceStatusDto: ResourceStatusDtoConstructor;

	interface ResourceStatusListDto extends NSXResourceStatusListDto
	{
		readonly statuses: any;

	}

	interface ResourceStatusListDtoConstructor {
		new(value?:any): ResourceStatusListDto;
		readonly prototype: ResourceStatusListDto;
	}

	const ResourceStatusListDto: ResourceStatusListDtoConstructor;

	interface ResourceTypeDto extends NSXResourceTypeDto
	{
		readonly value: any;

	}

	interface ResourceTypeDtoConstructor {
		new(value?:any): ResourceTypeDto;
		readonly prototype: ResourceTypeDto;
	}

	const ResourceTypeDto: ResourceTypeDtoConstructor;

	interface ResponseStatsDto extends NSXResponseStatsDto
	{
		readonly formErr: any;
		readonly nxDomain: any;
		readonly nxrrset: any;
		readonly others: any;
		readonly serverFail: any;
		readonly success: any;
		readonly total: any;

	}

	interface ResponseStatsDtoConstructor {
		new(value?:any): ResponseStatsDto;
		readonly prototype: ResponseStatsDto;
	}

	const ResponseStatsDto: ResponseStatsDtoConstructor;

	interface ROOT
	{

		vcns_connections(): Connection;
	}

	interface ROOTConstructor {
		new(value?:any): ROOT;
		readonly prototype: ROOT;
	}

	const ROOT: ROOTConstructor;

	interface RoutingConfig extends NSXRoutingConfig
	{
		readonly type: any;

	}

	interface RoutingConfigConstructor {
		new(value?:any): RoutingConfig;
		readonly prototype: RoutingConfig;
	}

	const RoutingConfig: RoutingConfigConstructor;

	interface RoutingConfigDto extends NSXRoutingConfigDto
	{
		readonly bgp: any;
		enabled: any;
		readonly isis: any;
		readonly ospf: any;
		readonly routingGlobalConfig: any;
		readonly staticRouting: any;
		template: any;
		version: any;

	}

	interface RoutingConfigDtoConstructor {
		new(value?:any): RoutingConfigDto;
		readonly prototype: RoutingConfigDto;
	}

	const RoutingConfigDto: RoutingConfigDtoConstructor;

	interface RsaAuthServerDto extends NSXRsaAuthServerDto
	{
		authServerType: any;
		readonly configFile: any;
		readonly configFileData: any;
		readonly configFileName: any;
		enabled: any;
		isSecondaryAuthServer: any;
		readonly nodeSecret: any;
		readonly nodeSecretData: any;
		readonly nodeSecretFileName: any;
		objectId: any;
		order: any;
		readonly password: any;
		readonly sourceIp: any;
		terminateSessionOnAuthFails: any;
		readonly timeOut: any;

	}

	interface RsaAuthServerDtoConstructor {
		new(value?:any): RsaAuthServerDto;
		readonly prototype: RsaAuthServerDto;
	}

	const RsaAuthServerDto: RsaAuthServerDtoConstructor;

	interface RuleDto extends NSXRuleDto
	{
		attributes: any;
		id: any;
		revision: any;

	}

	interface RuleDtoConstructor {
		new(value?:any): RuleDto;
		readonly prototype: RuleDto;
	}

	const RuleDto: RuleDtoConstructor;

	interface RuleFlowStatsDto extends NSXRuleFlowStatsDto
	{
		readonly bytes: any;
		readonly packets: any;
		readonly ruleId: any;

	}

	interface RuleFlowStatsDtoConstructor {
		new(value?:any): RuleFlowStatsDto;
		readonly prototype: RuleFlowStatsDto;
	}

	const RuleFlowStatsDto: RuleFlowStatsDtoConstructor;

	interface RuleSetDto extends NSXRuleSetDto
	{
		readonly rules: any;

	}

	interface RuleSetDtoConstructor {
		new(value?:any): RuleSetDto;
		readonly prototype: RuleSetDto;
	}

	const RuleSetDto: RuleSetDtoConstructor;

	interface ScopeInfoDto extends NSXScopeInfoDto
	{
		readonly id: any;
		readonly name: any;
		readonly objectTypeName: any;

	}

	interface ScopeInfoDtoConstructor {
		new(value?:any): ScopeInfoDto;
		readonly prototype: ScopeInfoDto;
	}

	const ScopeInfoDto: ScopeInfoDtoConstructor;

	interface SecondaryAuthServerDto extends NSXSecondaryAuthServerDto
	{
		readonly authServer: any;

	}

	interface SecondaryAuthServerDtoConstructor {
		new(value?:any): SecondaryAuthServerDto;
		readonly prototype: SecondaryAuthServerDto;
	}

	const SecondaryAuthServerDto: SecondaryAuthServerDtoConstructor;

	interface SecurityActionListDto extends NSXSecurityActionListDto
	{
		readonly actionList: any;
		readonly executionOrderCategory: any;

	}

	interface SecurityActionListDtoConstructor {
		new(value?:any): SecurityActionListDto;
		readonly prototype: SecurityActionListDto;
	}

	const SecurityActionListDto: SecurityActionListDtoConstructor;

	interface SecurityActionMapDto extends NSXSecurityActionMapDto
	{
		readonly actionsByCategory: any;

	}

	interface SecurityActionMapDtoConstructor {
		new(value?:any): SecurityActionMapDto;
		readonly prototype: SecurityActionMapDto;
	}

	const SecurityActionMapDto: SecurityActionMapDtoConstructor;

	interface SecurityCertificate extends NSXSecurityCertificate
	{
		readonly pem_encoded: any;
		readonly ssh_public_key: any;
		readonly valid_from: any;
		readonly valid_to: any;

	}

	interface SecurityCertificateConstructor {
		new(value?:any): SecurityCertificate;
		readonly prototype: SecurityCertificate;
	}

	const SecurityCertificate: SecurityCertificateConstructor;

	interface SecurityGroup extends NSXSecurityGroup
	{
		description: any;
		id: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		readonly scopeId: any;

		members(): VCNSDomainObject;
	}

	interface SecurityGroupConstructor {
		new(value?:any): SecurityGroup;
		readonly prototype: SecurityGroup;
	}

	const SecurityGroup: SecurityGroupConstructor;

	interface SecurityGroupDto extends NSXSecurityGroupDto
	{
		clientHandle: any;
		description: any;
		readonly dynamicMemberDefinition: any;
		readonly excludeMembers: any;
		extendedAttributes: any;
		inheritanceAllowed: any;
		readonly members: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		scope: any;
		type: any;
		vsmUuid: any;

	}

	interface SecurityGroupDtoConstructor {
		new(value?:any): SecurityGroupDto;
		readonly prototype: SecurityGroupDto;
	}

	const SecurityGroupDto: SecurityGroupDtoConstructor;

	interface SecurityGroupInv extends NSXSecurityGroupInv
	{
		readonly displayName: any;
		id: any;

		securityGroupPage(): SecurityGroupPage;
	}

	interface SecurityGroupInvConstructor {
		new(value?:any): SecurityGroupInv;
		readonly prototype: SecurityGroupInv;
	}

	const SecurityGroupInv: SecurityGroupInvConstructor;

	interface SecurityGroupPage extends NSXSecurityGroupPage
	{
		displayName: any;
		id: any;
		pageSize: any;
		startIndex: any;
		totalCount: any;

		securityGroups(): SecurityGroup;
	}

	interface SecurityGroupPageConstructor {
		new(value?:any): SecurityGroupPage;
		readonly prototype: SecurityGroupPage;
	}

	const SecurityGroupPage: SecurityGroupPageConstructor;

	interface SecurityGroupsDto extends NSXSecurityGroupsDto
	{
		readonly securityGroups: any;

	}

	interface SecurityGroupsDtoConstructor {
		new(value?:any): SecurityGroupsDto;
		readonly prototype: SecurityGroupsDto;
	}

	const SecurityGroupsDto: SecurityGroupsDtoConstructor;

	interface SecurityPoilcyInv extends NSXSecurityPolicyInv
	{
		readonly displayName: any;
		id: any;

		SecurityPoilcyRel(): SecurityPolicy;
	}

	interface SecurityPoilcyInvConstructor {
		new(value?:any): SecurityPoilcyInv;
		readonly prototype: SecurityPoilcyInv;
	}

	const SecurityPoilcyInv: SecurityPoilcyInvConstructor;

	interface SecurityPolicy extends NSXSecurityPolicy
	{
		readonly description: any;
		id: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;

	}

	interface SecurityPolicyConstructor {
		new(value?:any): SecurityPolicy;
		readonly prototype: SecurityPolicy;
	}

	const SecurityPolicy: SecurityPolicyConstructor;

	interface SecurityPolicyDto extends NSXSecurityPolicyDto
	{
		readonly children: any;
		clientHandle: any;
		description: any;
		readonly executionOrderCategoryToActionsList: any;
		extendedAttributes: any;
		inheritanceAllowed: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		readonly parent: any;
		readonly precedence: any;
		revision: any;
		scope: any;
		readonly securityGroupBindings: any;
		type: any;
		vsmUuid: any;

	}

	interface SecurityPolicyDtoConstructor {
		new(value?:any): SecurityPolicyDto;
		readonly prototype: SecurityPolicyDto;
	}

	const SecurityPolicyDto: SecurityPolicyDtoConstructor;

	interface SecurityPolicyHierarchyDto extends NSXSecurityPolicyHierarchyDto
	{
		readonly description: any;
		readonly name: any;
		readonly securityGroups: any;
		readonly securityPolicies: any;

	}

	interface SecurityPolicyHierarchyDtoConstructor {
		new(value?:any): SecurityPolicyHierarchyDto;
		readonly prototype: SecurityPolicyHierarchyDto;
	}

	const SecurityPolicyHierarchyDto: SecurityPolicyHierarchyDtoConstructor;

	interface SecurityPolicyListDto extends NSXSecurityPolicyListDto
	{
		readonly policies: any;

	}

	interface SecurityPolicyListDtoConstructor {
		new(value?:any): SecurityPolicyListDto;
		readonly prototype: SecurityPolicyListDto;
	}

	const SecurityPolicyListDto: SecurityPolicyListDtoConstructor;

	interface SecurityProfileDto extends NSXSecurityProfileDto
	{
		readonly newPassword: any;
		readonly passwordHintQuestionAnswers: any;

	}

	interface SecurityProfileDtoConstructor {
		new(value?:any): SecurityProfileDto;
		readonly prototype: SecurityProfileDto;
	}

	const SecurityProfileDto: SecurityProfileDtoConstructor;

	interface SecurityStatusDto extends NSXSecurityStatusDto
	{
		readonly clusterId: any;
		readonly clusterName: any;
		readonly hostId: any;
		readonly hostName: any;
		readonly reason: any;
		readonly securityGroupId: any;
		readonly securityGroupName: any;
		readonly serviceId: any;
		readonly serviceName: any;
		readonly vmId: any;
		readonly vmName: any;

	}

	interface SecurityStatusDtoConstructor {
		new(value?:any): SecurityStatusDto;
		readonly prototype: SecurityStatusDto;
	}

	const SecurityStatusDto: SecurityStatusDtoConstructor;

	interface SecurityStatusesDto extends NSXSecurityStatusesDto
	{
		readonly securityStatuses: any;

	}

	interface SecurityStatusesDtoConstructor {
		new(value?:any): SecurityStatusesDto;
		readonly prototype: SecurityStatusesDto;
	}

	const SecurityStatusesDto: SecurityStatusesDtoConstructor;

	interface SecurityTag extends NSXSecurityTag
	{
		readonly description: any;
		id: any;
		readonly isUniversal: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;

		TagMembers(): VCNSDomainObject;
	}

	interface SecurityTagConstructor {
		new(value?:any): SecurityTag;
		readonly prototype: SecurityTag;
	}

	const SecurityTag: SecurityTagConstructor;

	interface SecurityTagDto extends NSXSecurityTagDto
	{
		clientHandle: any;
		description: any;
		extendedAttributes: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		scope: any;
		readonly systemResource: any;
		type: any;
		readonly vmList: any;
		vsmUuid: any;

	}

	interface SecurityTagDtoConstructor {
		new(value?:any): SecurityTagDto;
		readonly prototype: SecurityTagDto;
	}

	const SecurityTagDto: SecurityTagDtoConstructor;

	interface SecurityTagInv extends NSXSecurityTagsInv
	{
		readonly displayName: any;
		id: any;

		SecurityTagRel(): SecurityTag;
	}

	interface SecurityTagInvConstructor {
		new(value?:any): SecurityTagInv;
		readonly prototype: SecurityTagInv;
	}

	const SecurityTagInv: SecurityTagInvConstructor;

	interface SecurityTagListDto extends NSXSecurityTagListDto
	{
		readonly securityTagDtoList: any;

	}

	interface SecurityTagListDtoConstructor {
		new(value?:any): SecurityTagListDto;
		readonly prototype: SecurityTagListDto;
	}

	const SecurityTagListDto: SecurityTagListDtoConstructor;

	interface SegmentRangeDto extends NSXSegmentRangeDto
	{
		readonly begin: any;
		readonly desc: any;
		readonly end: any;
		readonly id: any;
		readonly name: any;

	}

	interface SegmentRangeDtoConstructor {
		new(value?:any): SegmentRangeDto;
		readonly prototype: SegmentRangeDto;
	}

	const SegmentRangeDto: SegmentRangeDtoConstructor;

	interface SegmentRangesDto extends NSXSegmentRangesDto
	{
		readonly segmentRanges: any;

	}

	interface SegmentRangesDtoConstructor {
		new(value?:any): SegmentRangesDto;
		readonly prototype: SegmentRangesDto;
	}

	const SegmentRangesDto: SegmentRangesDtoConstructor;

	interface SendOverTunnel extends NSXSendOverTunnel
	{
		readonly optimize: any;
		readonly ports: any;

	}

	interface SendOverTunnelConstructor {
		new(value?:any): SendOverTunnel;
		readonly prototype: SendOverTunnel;
	}

	const SendOverTunnel: SendOverTunnelConstructor;

	interface ServerSettingsDto extends NSXServerSettingsDto
	{
		readonly certificateId: any;
		readonly cipherList: any;
		readonly ip: any;
		readonly port: any;

	}

	interface ServerSettingsDtoConstructor {
		new(value?:any): ServerSettingsDto;
		readonly prototype: ServerSettingsDto;
	}

	const ServerSettingsDto: ServerSettingsDtoConstructor;

	interface ServerSettingsTrinityDto extends NSXServerSettingsTrinityDto
	{
		readonly certificateId: any;
		readonly cipherList: any;
		readonly port: any;
		readonly serverAddresses: any;

	}

	interface ServerSettingsTrinityDtoConstructor {
		new(value?:any): ServerSettingsTrinityDto;
		readonly prototype: ServerSettingsTrinityDto;
	}

	const ServerSettingsTrinityDto: ServerSettingsTrinityDtoConstructor;

	interface ServiceDeploymentConfigDto extends NSXServiceDeploymentConfigDto
	{
		readonly datastores: any;
		readonly dvPortGroup: any;
		readonly ipPool: any;
		readonly serviceId: any;
		readonly serviceInstanceId: any;

	}

	interface ServiceDeploymentConfigDtoConstructor {
		new(value?:any): ServiceDeploymentConfigDto;
		readonly prototype: ServiceDeploymentConfigDto;
	}

	const ServiceDeploymentConfigDto: ServiceDeploymentConfigDtoConstructor;

	interface ServiceDeploymentSpecDto extends NSXServiceDeploymentSpecDto
	{
		readonly agencyId: any;
		readonly deploymentScope: any;
		readonly description: any;
		readonly id: any;
		readonly name: any;
		readonly revision: any;
		readonly versionedSpecs: any;

	}

	interface ServiceDeploymentSpecDtoConstructor {
		new(value?:any): ServiceDeploymentSpecDto;
		readonly prototype: ServiceDeploymentSpecDto;
	}

	const ServiceDeploymentSpecDto: ServiceDeploymentSpecDtoConstructor;

	interface ServiceDto extends NSXServiceDto
	{
		readonly icmpType: any;
		readonly port: any;
		readonly protocol: any;

	}

	interface ServiceDtoConstructor {
		new(value?:any): ServiceDto;
		readonly prototype: ServiceDto;
	}

	const ServiceDto: ServiceDtoConstructor;

	interface ServiceFlowDataDetailDto extends NSXServiceFlowDataDetailDto
	{
		readonly applicationContext: any;
		readonly defaultRule: any;
		readonly destination: any;
		readonly destinationIdentityGraph: any;
		readonly endDate: any;
		readonly flowAttribute: any;
		readonly ruleId: any;
		readonly source: any;
		readonly sourceIdentityGraph: any;
		readonly startDate: any;

	}

	interface ServiceFlowDataDetailDtoConstructor {
		new(value?:any): ServiceFlowDataDetailDto;
		readonly prototype: ServiceFlowDataDetailDto;
	}

	const ServiceFlowDataDetailDto: ServiceFlowDataDetailDtoConstructor;

	interface ServiceFlowDataDto extends NSXServiceFlowDataDto
	{
		readonly destinationPort: any;
		readonly existingService: any;
		readonly flowAttribute: any;
		readonly flowType: any;
		readonly protocolName: any;
		readonly serviceId: any;
		readonly serviceName: any;
		readonly sourcePort: any;
		readonly subProtocolName: any;

	}

	interface ServiceFlowDataDtoConstructor {
		new(value?:any): ServiceFlowDataDto;
		readonly prototype: ServiceFlowDataDto;
	}

	const ServiceFlowDataDto: ServiceFlowDataDtoConstructor;

	interface ServiceInstanceConfigDto extends NSXServiceInstanceConfigDto
	{
		readonly baseConfig: any;
		readonly baseRuntimeConfig: any;
		readonly deploymentScopes: any;
		readonly id: any;
		readonly implementation: any;
		readonly implementationAttributes: any;
		readonly instanceTemplate: any;
		readonly instanceTemplateAttributes: any;
		readonly instanceTemplateTypedAttributes: any;
		readonly precedence: any;
		readonly revision: any;
		readonly serviceInstanceAttributes: any;
		readonly transport: any;
		readonly transportAttributes: any;

	}

	interface ServiceInstanceConfigDtoConstructor {
		new(value?:any): ServiceInstanceConfigDto;
		readonly prototype: ServiceInstanceConfigDto;
	}

	const ServiceInstanceConfigDto: ServiceInstanceConfigDtoConstructor;

	interface ServiceInstanceDeploymentScopeDto extends NSXServiceInstanceDeploymentScopeDto
	{
		readonly clusters: any;
		readonly dataNetworks: any;
		readonly datastore: any;
		readonly id: any;
		readonly mgmtNetwork: any;
		readonly nics: any;
		readonly resourcePool: any;
		readonly revision: any;

	}

	interface ServiceInstanceDeploymentScopeDtoConstructor {
		new(value?:any): ServiceInstanceDeploymentScopeDto;
		readonly prototype: ServiceInstanceDeploymentScopeDto;
	}

	const ServiceInstanceDeploymentScopeDto: ServiceInstanceDeploymentScopeDtoConstructor;

	interface ServiceInstanceDeploymentScopesDto extends NSXServiceInstanceDeploymentScopesDto
	{
		readonly serviceInstanceDeploymentScopes: any;

	}

	interface ServiceInstanceDeploymentScopesDtoConstructor {
		new(value?:any): ServiceInstanceDeploymentScopesDto;
		readonly prototype: ServiceInstanceDeploymentScopesDto;
	}

	const ServiceInstanceDeploymentScopesDto: ServiceInstanceDeploymentScopesDtoConstructor;

	interface ServiceInstanceDto extends NSXServiceInstanceDto
	{
		clientHandle: any;
		readonly config: any;
		description: any;
		extendedAttributes: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		readonly runtimeInfos: any;
		scope: any;
		readonly service: any;
		readonly serviceProfileCount: any;
		type: any;
		vsmUuid: any;

	}

	interface ServiceInstanceDtoConstructor {
		new(value?:any): ServiceInstanceDto;
		readonly prototype: ServiceInstanceDto;
	}

	const ServiceInstanceDto: ServiceInstanceDtoConstructor;

	interface ServiceInstanceRuntimeInfoDto extends NSXServiceInstanceRuntimeInfoDto
	{
		readonly deloymentScope: any;
		readonly id: any;
		readonly installState: any;
		readonly revision: any;
		readonly runtimeInstanceId: any;
		readonly serviceInstance: any;
		readonly status: any;
		readonly versionedDeploymentSpecId: any;

	}

	interface ServiceInstanceRuntimeInfoDtoConstructor {
		new(value?:any): ServiceInstanceRuntimeInfoDto;
		readonly prototype: ServiceInstanceRuntimeInfoDto;
	}

	const ServiceInstanceRuntimeInfoDto: ServiceInstanceRuntimeInfoDtoConstructor;

	interface ServiceInstanceRuntimeInfosDto extends NSXServiceInstanceRuntimeInfosDto
	{
		readonly serviceInstanceRuntimeInfos: any;

	}

	interface ServiceInstanceRuntimeInfosDtoConstructor {
		new(value?:any): ServiceInstanceRuntimeInfosDto;
		readonly prototype: ServiceInstanceRuntimeInfosDto;
	}

	const ServiceInstanceRuntimeInfosDto: ServiceInstanceRuntimeInfosDtoConstructor;

	interface ServiceInstanceRuntimeNicInfoDto extends NSXServiceInstanceRuntimeNicInfoDto
	{
		readonly allocatedIpAddressId: any;
		readonly connectivityType: any;
		readonly description: any;
		readonly gatewayAddress: any;
		readonly id: any;
		readonly index: any;
		readonly ipAddress: any;
		readonly ipAllocationType: any;
		readonly ipPool: any;
		readonly label: any;
		readonly macAddress: any;
		readonly network: any;
		readonly revision: any;
		readonly subnetMask: any;
		readonly vlanId: any;
		readonly vxlanId: any;

	}

	interface ServiceInstanceRuntimeNicInfoDtoConstructor {
		new(value?:any): ServiceInstanceRuntimeNicInfoDto;
		readonly prototype: ServiceInstanceRuntimeNicInfoDto;
	}

	const ServiceInstanceRuntimeNicInfoDto: ServiceInstanceRuntimeNicInfoDtoConstructor;

	interface ServiceInstancesDto extends NSXServiceInstancesDto
	{
		readonly serviceInstances: any;

	}

	interface ServiceInstancesDtoConstructor {
		new(value?:any): ServiceInstancesDto;
		readonly prototype: ServiceInstancesDto;
	}

	const ServiceInstancesDto: ServiceInstancesDtoConstructor;

	interface ServiceInstanceTemplateDto extends NSXServiceInstanceTemplateDto
	{
		readonly description: any;
		readonly id: any;
		readonly instanceTemplateId: any;
		readonly name: any;
		readonly requiredInstanceAttributes: any;
		readonly revision: any;
		readonly typedAttributes: any;

	}

	interface ServiceInstanceTemplateDtoConstructor {
		new(value?:any): ServiceInstanceTemplateDto;
		readonly prototype: ServiceInstanceTemplateDto;
	}

	const ServiceInstanceTemplateDto: ServiceInstanceTemplateDtoConstructor;

	interface ServiceInstanceTemplatesDto extends NSXServiceInstanceTemplatesDto
	{
		readonly serviceInstanceTemplates: any;

	}

	interface ServiceInstanceTemplatesDtoConstructor {
		new(value?:any): ServiceInstanceTemplatesDto;
		readonly prototype: ServiceInstanceTemplatesDto;
	}

	const ServiceInstanceTemplatesDto: ServiceInstanceTemplatesDtoConstructor;

	interface ServiceManagerDto extends NSXServiceManagerDto
	{
		clientHandle: any;
		description: any;
		extendedAttributes: any;
		readonly login: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		readonly password: any;
		readonly restUrl: any;
		revision: any;
		scope: any;
		readonly services: any;
		readonly status: any;
		readonly thumbprint: any;
		type: any;
		readonly url: any;
		readonly vendorId: any;
		readonly vendorName: any;
		readonly verifyPassword: any;
		vsmUuid: any;

	}

	interface ServiceManagerDtoConstructor {
		new(value?:any): ServiceManagerDto;
		readonly prototype: ServiceManagerDto;
	}

	const ServiceManagerDto: ServiceManagerDtoConstructor;

	interface ServiceManagersDto extends NSXServiceManagersDto
	{
		readonly serviceManagers: any;

	}

	interface ServiceManagersDtoConstructor {
		new(value?:any): ServiceManagersDto;
		readonly prototype: ServiceManagersDto;
	}

	const ServiceManagersDto: ServiceManagersDtoConstructor;

	interface ServiceManagerStatusDto extends NSXServiceManagerStatusDto
	{
		readonly status: any;

	}

	interface ServiceManagerStatusDtoConstructor {
		new(value?:any): ServiceManagerStatusDto;
		readonly prototype: ServiceManagerStatusDto;
	}

	const ServiceManagerStatusDto: ServiceManagerStatusDtoConstructor;

	interface ServicePermissionsDto extends NSXServicePermissionsDto
	{
		readonly manageServicePermission: any;
		readonly viewServicePermission: any;

	}

	interface ServicePermissionsDtoConstructor {
		new(value?:any): ServicePermissionsDto;
		readonly prototype: ServicePermissionsDto;
	}

	const ServicePermissionsDto: ServicePermissionsDtoConstructor;

	interface ServicePort extends NSXServicePort
	{
		readonly algorithm: any;
		readonly displayName: any;
		readonly healthcheckPort: any;
		readonly healthchecks: any;
		id: any;
		readonly port: any;
		readonly protocol: any;

		healthchecks(): Healthcheck;
	}

	interface ServicePortConstructor {
		new(value?:any): ServicePort;
		readonly prototype: ServicePort;
	}

	const ServicePort: ServicePortConstructor;

	interface ServiceProfileBindingDto extends NSXServiceProfileBindingDto
	{
		readonly distributedVirtualPortGroups: any;
		readonly excludedVnics: any;
		readonly virtualServerDefinition: any;
		readonly virtualServers: any;
		readonly virtualWires: any;

	}

	interface ServiceProfileBindingDtoConstructor {
		new(value?:any): ServiceProfileBindingDto;
		readonly prototype: ServiceProfileBindingDto;
	}

	const ServiceProfileBindingDto: ServiceProfileBindingDtoConstructor;

	interface ServiceProfileDto extends NSXServiceProfileDto
	{
		readonly baseProfile: any;
		readonly category: any;
		clientHandle: any;
		description: any;
		extendedAttributes: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		readonly profileAttributes: any;
		revision: any;
		readonly runtime: any;
		scope: any;
		readonly service: any;
		readonly serviceInstance: any;
		readonly servicePolicy: any;
		readonly serviceProfileBinding: any;
		readonly status: any;
		type: any;
		readonly vendorAttributes: any;
		readonly vendorSections: any;
		readonly vendorTables: any;
		readonly vendorTemplate: any;
		readonly vendorTypedAttributes: any;
		vsmUuid: any;

	}

	interface ServiceProfileDtoConstructor {
		new(value?:any): ServiceProfileDto;
		readonly prototype: ServiceProfileDto;
	}

	const ServiceProfileDto: ServiceProfileDtoConstructor;

	interface ServiceProfileRuntimeDto extends NSXServiceProfileRuntimeDto
	{
		readonly nonCompliantDvpg: any;
		readonly nonCompliantVwire: any;

	}

	interface ServiceProfileRuntimeDtoConstructor {
		new(value?:any): ServiceProfileRuntimeDto;
		readonly prototype: ServiceProfileRuntimeDto;
	}

	const ServiceProfileRuntimeDto: ServiceProfileRuntimeDtoConstructor;

	interface ServiceProfilesDto extends NSXServiceProfilesDto
	{
		readonly serviceProfiles: any;

	}

	interface ServiceProfilesDtoConstructor {
		new(value?:any): ServiceProfilesDto;
		readonly prototype: ServiceProfilesDto;
	}

	const ServiceProfilesDto: ServiceProfilesDtoConstructor;

	interface ServiceProfileStatusDto extends NSXServiceProfileStatusDto
	{
		readonly status: any;
		readonly statusMessage: any;

	}

	interface ServiceProfileStatusDtoConstructor {
		new(value?:any): ServiceProfileStatusDto;
		readonly prototype: ServiceProfileStatusDto;
	}

	const ServiceProfileStatusDto: ServiceProfileStatusDtoConstructor;

	interface ServicesDto extends NSXServicesDto
	{
		readonly services: any;

	}

	interface ServicesDtoConstructor {
		new(value?:any): ServicesDto;
		readonly prototype: ServicesDto;
	}

	const ServicesDto: ServicesDtoConstructor;

	interface ServiceStatusDto extends NSXServiceStatusDto
	{
		readonly status: any;

	}

	interface ServiceStatusDtoConstructor {
		new(value?:any): ServiceStatusDto;
		readonly prototype: ServiceStatusDto;
	}

	const ServiceStatusDto: ServiceStatusDtoConstructor;

	interface ServiceTrinityDto extends NSXServiceTrinityDto
	{
		readonly icmpType: any;
		readonly port: any;
		readonly protocol: any;
		readonly sourcePort: any;

	}

	interface ServiceTrinityDtoConstructor {
		new(value?:any): ServiceTrinityDto;
		readonly prototype: ServiceTrinityDto;
	}

	const ServiceTrinityDto: ServiceTrinityDtoConstructor;

	interface ServiceVendorPreferencesDto extends NSXServiceVendorPreferencesDto
	{
		readonly preferences: any;

	}

	interface ServiceVendorPreferencesDtoConstructor {
		new(value?:any): ServiceVendorPreferencesDto;
		readonly prototype: ServiceVendorPreferencesDto;
	}

	const ServiceVendorPreferencesDto: ServiceVendorPreferencesDtoConstructor;

	interface SiteConfigDto extends NSXSiteConfigDto
	{
		readonly authenticationMode: any;
		readonly certificate: any;
		readonly description: any;
		readonly dhGroup: any;
		readonly enabled: any;
		readonly enablePfs: any;
		readonly encryptionAlgorithm: any;
		readonly extension: any;
		readonly localId: any;
		readonly localIp: any;
		readonly localSubnets: any;
		readonly mtu: any;
		readonly name: any;
		readonly peerId: any;
		readonly peerIp: any;
		readonly peerSubnets: any;
		readonly psk: any;

	}

	interface SiteConfigDtoConstructor {
		new(value?:any): SiteConfigDto;
		readonly prototype: SiteConfigDto;
	}

	const SiteConfigDto: SiteConfigDtoConstructor;

	interface SiteConfigsDto extends NSXSiteConfigsDto
	{
		readonly sites: any;

	}

	interface SiteConfigsDtoConstructor {
		new(value?:any): SiteConfigsDto;
		readonly prototype: SiteConfigsDto;
	}

	const SiteConfigsDto: SiteConfigsDtoConstructor;

	interface SpoofGuardDto extends NSXSpoofGuardDto
	{
		readonly approvedBy: any;
		readonly approvedIpAddress: any;
		readonly approvedMacAddress: any;
		readonly approvedOn: any;
		readonly detectedIpAddress: any;
		readonly detectedMacAddress: any;
		readonly id: any;
		readonly newApprovedIpAddress: any;
		readonly nicName: any;
		readonly oldApprovedIpAddress: any;
		readonly portGroupId: any;
		readonly publishedBy: any;
		readonly publishedIpAddress: any;
		readonly publishedMacAddress: any;
		readonly publishedOn: any;
		readonly state: any;
		readonly vmMoId: any;
		readonly vmName: any;
		readonly vnicUuid: any;

	}

	interface SpoofGuardDtoConstructor {
		new(value?:any): SpoofGuardDto;
		readonly prototype: SpoofGuardDto;
	}

	const SpoofGuardDto: SpoofGuardDtoConstructor;

	interface SpoofGuardObjectsDto extends NSXSpoofGuardObjectsDto
	{
		readonly spoofguardList: any;

	}

	interface SpoofGuardObjectsDtoConstructor {
		new(value?:any): SpoofGuardObjectsDto;
		readonly prototype: SpoofGuardObjectsDto;
	}

	const SpoofGuardObjectsDto: SpoofGuardObjectsDtoConstructor;

	interface SpoofGuardPermissionDto extends NSXSpoofGuardPermissionDto
	{
		readonly dataPermissions: any;
		readonly spoofguardLicensed: any;
		readonly userPermissions: any;

	}

	interface SpoofGuardPermissionDtoConstructor {
		new(value?:any): SpoofGuardPermissionDto;
		readonly prototype: SpoofGuardPermissionDto;
	}

	const SpoofGuardPermissionDto: SpoofGuardPermissionDtoConstructor;

	interface SpoofGuardPoliciesDto extends NSXSpoofGuardPoliciesDto
	{
		readonly policies: any;

	}

	interface SpoofGuardPoliciesDtoConstructor {
		new(value?:any): SpoofGuardPoliciesDto;
		readonly prototype: SpoofGuardPoliciesDto;
	}

	const SpoofGuardPoliciesDto: SpoofGuardPoliciesDtoConstructor;

	interface SpoofGuardPolicyDto extends NSXSpoofGuardPolicyDto
	{
		readonly allowLocalIPs: any;
		readonly defaultPolicy: any;
		readonly description: any;
		readonly enforcementPoints: any;
		readonly name: any;
		readonly operationMode: any;
		readonly policyId: any;
		readonly publishedBy: any;
		readonly publishedOn: any;
		readonly publishPending: any;
		readonly statistics: any;

	}

	interface SpoofGuardPolicyDtoConstructor {
		new(value?:any): SpoofGuardPolicyDto;
		readonly prototype: SpoofGuardPolicyDto;
	}

	const SpoofGuardPolicyDto: SpoofGuardPolicyDtoConstructor;

	interface SpoofGuardSettingDto extends NSXSpoofGuardSettingDto
	{
		readonly allowLocalIPs: any;
		readonly contextId: any;
		readonly domainObject: any;
		readonly objectId: any;
		readonly operationMode: any;
		readonly publishedBy: any;
		readonly publishedOn: any;
		readonly publishPending: any;

	}

	interface SpoofGuardSettingDtoConstructor {
		new(value?:any): SpoofGuardSettingDto;
		readonly prototype: SpoofGuardSettingDto;
	}

	const SpoofGuardSettingDto: SpoofGuardSettingDtoConstructor;

	interface SpoofGuardStatus extends NSXSpoofGuardStatus
	{

	}

	interface SpoofGuardStatusConstructor {
		new(value?:any): SpoofGuardStatus;
		readonly prototype: SpoofGuardStatus;
	}

	const SpoofGuardStatus: SpoofGuardStatusConstructor;

	interface SslvpnConfigBaseDto extends NSXSslvpnConfigBaseDto
	{
		readonly advancedConfig: any;
		readonly authenticationConfiguration: any;
		readonly clientConfiguration: any;
		readonly clientInstallPackages: any;
		readonly enabled: any;
		readonly ipPools: any;
		readonly layoutConfiguration: any;
		readonly logging: any;
		readonly privateNetworks: any;
		template: any;
		readonly users: any;
		version: any;
		readonly webResources: any;

	}

	interface SslvpnConfigBaseDtoConstructor {
		new(value?:any): SslvpnConfigBaseDto;
		readonly prototype: SslvpnConfigBaseDto;
	}

	const SslvpnConfigBaseDto: SslvpnConfigBaseDtoConstructor;

	interface SslvpnConfigDto extends NSXSslvpnConfigDto
	{
		advancedConfig: any;
		authenticationConfiguration: any;
		clientConfiguration: any;
		clientInstallPackages: any;
		enabled: any;
		ipPools: any;
		layoutConfiguration: any;
		logging: any;
		privateNetworks: any;
		readonly serverSettings: any;
		template: any;
		users: any;
		version: any;
		webResources: any;

	}

	interface SslvpnConfigDtoConstructor {
		new(value?:any): SslvpnConfigDto;
		readonly prototype: SslvpnConfigDto;
	}

	const SslvpnConfigDto: SslvpnConfigDtoConstructor;

	interface SslvpnConfigTrinityDto extends NSXSslvpnConfigTrinityDto
	{
		advancedConfig: any;
		authenticationConfiguration: any;
		clientConfiguration: any;
		clientInstallPackages: any;
		enabled: any;
		ipPools: any;
		layoutConfiguration: any;
		logging: any;
		privateNetworks: any;
		readonly serverSettings: any;
		template: any;
		users: any;
		version: any;
		webResources: any;

	}

	interface SslvpnConfigTrinityDtoConstructor {
		new(value?:any): SslvpnConfigTrinityDto;
		readonly prototype: SslvpnConfigTrinityDto;
	}

	const SslvpnConfigTrinityDto: SslvpnConfigTrinityDtoConstructor;

	interface SSOConfigDto extends NSXSSOConfigDto
	{
		readonly certificateThumbprint: any;
		readonly ssoAdminUsername: any;
		readonly ssoAdminUserpassword: any;
		readonly ssoLookupServiceUrl: any;
		readonly vsmSolutionName: any;

	}

	interface SSOConfigDtoConstructor {
		new(value?:any): SSOConfigDto;
		readonly prototype: SSOConfigDto;
	}

	const SSOConfigDto: SSOConfigDtoConstructor;

	interface SSOConfigStatusDto extends NSXSSOConfigStatusDto
	{
		readonly message: any;
		readonly status: any;

	}

	interface SSOConfigStatusDtoConstructor {
		new(value?:any): SSOConfigStatusDto;
		readonly prototype: SSOConfigStatusDto;
	}

	const SSOConfigStatusDto: SSOConfigStatusDtoConstructor;

	interface StatefulContainerDto extends NSXStatefulContainerDto
	{
		readonly address: any;
		readonly description: any;
		readonly id: any;
		readonly name: any;
		readonly revision: any;
		readonly type: any;

	}

	interface StatefulContainerDtoConstructor {
		new(value?:any): StatefulContainerDto;
		readonly prototype: StatefulContainerDto;
	}

	const StatefulContainerDto: StatefulContainerDtoConstructor;

	interface StatefulContainerSetDto extends NSXStatefulContainerSetDto
	{
		readonly container: any;

	}

	interface StatefulContainerSetDtoConstructor {
		new(value?:any): StatefulContainerSetDto;
		readonly prototype: StatefulContainerSetDto;
	}

	const StatefulContainerSetDto: StatefulContainerSetDtoConstructor;

	interface StatefulIpAddressDto extends NSXStatefulIpAddressDto
	{
		readonly addresses: any;
		readonly containerIds: any;
		readonly mask: any;
		readonly networkAddress: any;

	}

	interface StatefulIpAddressDtoConstructor {
		new(value?:any): StatefulIpAddressDto;
		readonly prototype: StatefulIpAddressDto;
	}

	const StatefulIpAddressDto: StatefulIpAddressDtoConstructor;

	interface StatefulIpPortDto extends NSXStatefulIpPortDto
	{
		readonly containerIds: any;
		readonly endPortNumber: any;
		readonly ports: any;
		readonly startPortNumber: any;

	}

	interface StatefulIpPortDtoConstructor {
		new(value?:any): StatefulIpPortDto;
		readonly prototype: StatefulIpPortDto;
	}

	const StatefulIpPortDto: StatefulIpPortDtoConstructor;

	interface StatefulIpQualifierDto extends NSXStatefulIpQualifierDto
	{
		readonly destinationAddress: any;
		readonly destinationPort: any;
		id: any;
		readonly notDestinationAddress: any;
		readonly notDestinationPort: any;
		readonly notProtocol: any;
		readonly notSourceAddress: any;
		readonly notSourcePort: any;
		readonly notTcpFlags: any;
		readonly notTcpOptions: any;
		readonly protocol: any;
		revision: any;
		readonly sourceAddress: any;
		readonly sourcePort: any;
		readonly tcpFlags: any;
		readonly tcpOptions: any;

	}

	interface StatefulIpQualifierDtoConstructor {
		new(value?:any): StatefulIpQualifierDto;
		readonly prototype: StatefulIpQualifierDto;
	}

	const StatefulIpQualifierDto: StatefulIpQualifierDtoConstructor;

	interface StatefulMacDto extends NSXStatefulMacDto
	{
		readonly addresses: any;
		readonly containerIds: any;
		readonly mask: any;
		readonly rangeAddress: any;

	}

	interface StatefulMacDtoConstructor {
		new(value?:any): StatefulMacDto;
		readonly prototype: StatefulMacDto;
	}

	const StatefulMacDto: StatefulMacDtoConstructor;

	interface StatefulMacQualifierDto extends NSXStatefulMacQualifierDto
	{
		readonly destinationMac: any;
		id: any;
		readonly notDestinationMac: any;
		readonly notProtocol: any;
		readonly notSourceMac: any;
		readonly protocol: any;
		revision: any;
		readonly sourceMac: any;

	}

	interface StatefulMacQualifierDtoConstructor {
		new(value?:any): StatefulMacQualifierDto;
		readonly prototype: StatefulMacQualifierDto;
	}

	const StatefulMacQualifierDto: StatefulMacQualifierDtoConstructor;

	interface StatefulPolicyDto extends NSXStatefulPolicyDto
	{
		readonly description: any;
		readonly id: any;
		readonly name: any;
		readonly revision: any;
		readonly ruleSets: any;

	}

	interface StatefulPolicyDtoConstructor {
		new(value?:any): StatefulPolicyDto;
		readonly prototype: StatefulPolicyDto;
	}

	const StatefulPolicyDto: StatefulPolicyDtoConstructor;

	interface StatefulRuleDto extends NSXStatefulRuleDto
	{
		readonly action: any;
		readonly algFlags: any;
		readonly copy: any;
		readonly description: any;
		readonly direction: any;
		readonly enabled: any;
		readonly id: any;
		readonly keepStateEnabled: any;
		readonly log: any;
		readonly name: any;
		readonly protocolName: any;
		readonly qualifier: any;
		readonly revision: any;
		readonly ruleOrder: any;

	}

	interface StatefulRuleDtoConstructor {
		new(value?:any): StatefulRuleDto;
		readonly prototype: StatefulRuleDto;
	}

	const StatefulRuleDto: StatefulRuleDtoConstructor;

	interface StatefulRuleSetDto extends NSXStatefulRuleSetDto
	{
		readonly description: any;
		readonly enabled: any;
		readonly id: any;
		readonly name: any;
		readonly revision: any;
		readonly rules: any;
		readonly ruleSetOrder: any;

	}

	interface StatefulRuleSetDtoConstructor {
		new(value?:any): StatefulRuleSetDto;
		readonly prototype: StatefulRuleSetDto;
	}

	const StatefulRuleSetDto: StatefulRuleSetDtoConstructor;

	interface StatefulTcpOptionDto extends NSXStatefulTcpOptionDto
	{
		readonly id: any;
		readonly length: any;
		readonly revision: any;
		readonly type: any;
		readonly value: any;

	}

	interface StatefulTcpOptionDtoConstructor {
		new(value?:any): StatefulTcpOptionDto;
		readonly prototype: StatefulTcpOptionDto;
	}

	const StatefulTcpOptionDto: StatefulTcpOptionDtoConstructor;

	interface StaticBindingDto extends NSXStaticBindingDto
	{
		readonly autoConfigureDNS: any;
		readonly bindingId: any;
		readonly defaultGateway: any;
		readonly dnsType: any;
		readonly domainName: any;
		readonly hostname: any;
		readonly ipAddress: any;
		readonly leaseTime: any;
		readonly primaryNameServer: any;
		readonly secondaryNameServer: any;
		readonly vmId: any;
		readonly vnicId: any;

	}

	interface StaticBindingDtoConstructor {
		new(value?:any): StaticBindingDto;
		readonly prototype: StaticBindingDto;
	}

	const StaticBindingDto: StaticBindingDtoConstructor;

	interface StaticBindingsDto extends NSXStaticBindingsDto
	{
		readonly staticBindings: any;

	}

	interface StaticBindingsDtoConstructor {
		new(value?:any): StaticBindingsDto;
		readonly prototype: StaticBindingsDto;
	}

	const StaticBindingsDto: StaticBindingsDtoConstructor;

	interface StaticBindingsTrinityDto extends NSXStaticBindingsTrinityDto
	{
		readonly staticBindings: any;

	}

	interface StaticBindingsTrinityDtoConstructor {
		new(value?:any): StaticBindingsTrinityDto;
		readonly prototype: StaticBindingsTrinityDto;
	}

	const StaticBindingsTrinityDto: StaticBindingsTrinityDtoConstructor;

	interface StaticBindingTrinityDto extends NSXStaticBindingTrinityDto
	{
		autoConfigureDNS: any;
		readonly bindingId: any;
		defaultGateway: any;
		dnsType: any;
		domainName: any;
		readonly hostname: any;
		readonly ipAddress: any;
		leaseTime: any;
		readonly macAddress: any;
		primaryNameServer: any;
		secondaryNameServer: any;
		readonly vmId: any;
		readonly vnicId: any;

	}

	interface StaticBindingTrinityDtoConstructor {
		new(value?:any): StaticBindingTrinityDto;
		readonly prototype: StaticBindingTrinityDto;
	}

	const StaticBindingTrinityDto: StaticBindingTrinityDtoConstructor;

	interface StaticRoute extends NSXStaticRoute
	{
		id: any;
		readonly mtu: any;
		readonly network: any;
		readonly nextHop: any;
		readonly vNicIndex: any;

	}

	interface StaticRouteConstructor {
		new(value?:any): StaticRoute;
		readonly prototype: StaticRoute;
	}

	const StaticRoute: StaticRouteConstructor;

	interface StaticRouteBaseDto extends NSXStaticRouteBaseDto
	{
		readonly description: any;
		readonly mtu: any;
		readonly type: any;

	}

	interface StaticRouteBaseDtoConstructor {
		new(value?:any): StaticRouteBaseDto;
		readonly prototype: StaticRouteBaseDto;
	}

	const StaticRouteBaseDto: StaticRouteBaseDtoConstructor;

	interface StaticRouteDto extends NSXStaticRouteDto
	{
		description: any;
		mtu: any;
		readonly network: any;
		readonly nextHop: any;
		type: any;
		readonly vnic: any;

	}

	interface StaticRouteDtoConstructor {
		new(value?:any): StaticRouteDto;
		readonly prototype: StaticRouteDto;
	}

	const StaticRouteDto: StaticRouteDtoConstructor;

	interface StaticRoutesDto extends NSXStaticRoutesDto
	{
		readonly staticRoutes: any;

	}

	interface StaticRoutesDtoConstructor {
		new(value?:any): StaticRoutesDto;
		readonly prototype: StaticRoutesDto;
	}

	const StaticRoutesDto: StaticRoutesDtoConstructor;

	interface StaticRoutesTrinityDto extends NSXStaticRoutesTrinityDto
	{
		readonly staticRoutes: any;

	}

	interface StaticRoutesTrinityDtoConstructor {
		new(value?:any): StaticRoutesTrinityDto;
		readonly prototype: StaticRoutesTrinityDto;
	}

	const StaticRoutesTrinityDto: StaticRoutesTrinityDtoConstructor;

	interface StaticRoutesTrinityUIDto extends NSXStaticRoutesTrinityUIDto
	{
		readonly staticRoutes: any;

	}

	interface StaticRoutesTrinityUIDtoConstructor {
		new(value?:any): StaticRoutesTrinityUIDto;
		readonly prototype: StaticRoutesTrinityUIDto;
	}

	const StaticRoutesTrinityUIDto: StaticRoutesTrinityUIDtoConstructor;

	interface StaticRouteTrinityDto extends NSXStaticRouteTrinityDto
	{
		description: any;
		mtu: any;
		readonly network: any;
		readonly nextHop: any;
		type: any;
		readonly vnic: any;

	}

	interface StaticRouteTrinityDtoConstructor {
		new(value?:any): StaticRouteTrinityDto;
		readonly prototype: StaticRouteTrinityDto;
	}

	const StaticRouteTrinityDto: StaticRouteTrinityDtoConstructor;

	interface StaticRouteTrinityUIDto extends NSXStaticRouteTrinityUIDto
	{
		description: any;
		mtu: any;
		readonly network: any;
		readonly nextHop: any;
		type: any;
		readonly vnic: any;

	}

	interface StaticRouteTrinityUIDtoConstructor {
		new(value?:any): StaticRouteTrinityUIDto;
		readonly prototype: StaticRouteTrinityUIDto;
	}

	const StaticRouteTrinityUIDto: StaticRouteTrinityUIDtoConstructor;

	interface StaticRoutingConfigDto extends NSXStaticRoutingConfigDto
	{
		readonly defaultRoute: any;
		enabled: any;
		readonly staticRoutes: any;
		template: any;
		version: any;

	}

	interface StaticRoutingConfigDtoConstructor {
		new(value?:any): StaticRoutingConfigDto;
		readonly prototype: StaticRoutingConfigDto;
	}

	const StaticRoutingConfigDto: StaticRoutingConfigDtoConstructor;

	interface StaticRoutingConfigTrinityDto extends NSXStaticRoutingConfigTrinityDto
	{
		readonly defaultRoute: any;
		readonly staticRoutes: any;

	}

	interface StaticRoutingConfigTrinityDtoConstructor {
		new(value?:any): StaticRoutingConfigTrinityDto;
		readonly prototype: StaticRoutingConfigTrinityDto;
	}

	const StaticRoutingConfigTrinityDto: StaticRoutingConfigTrinityDtoConstructor;

	interface StaticRoutingConfigTrinityUIDto extends NSXStaticRoutingConfigTrinityUIDto
	{
		readonly defaultRoute: any;
		readonly staticRoutes: any;

	}

	interface StaticRoutingConfigTrinityUIDtoConstructor {
		new(value?:any): StaticRoutingConfigTrinityUIDto;
		readonly prototype: StaticRoutingConfigTrinityUIDto;
	}

	const StaticRoutingConfigTrinityUIDto: StaticRoutingConfigTrinityUIDtoConstructor;

	interface StatusDto extends NSXStatusDto
	{
		readonly contextId: any;
		readonly currentState: any;
		readonly failedPublishInfo: any;
		readonly generationNumber: any;

	}

	interface StatusDtoConstructor {
		new(value?:any): StatusDto;
		readonly prototype: StatusDto;
	}

	const StatusDto: StatusDtoConstructor;

	interface SubnetDto extends NSXSubnetDto
	{
		clientHandle: any;
		description: any;
		readonly dnsServer1: any;
		readonly dnsServer2: any;
		readonly dnsSuffix: any;
		extendedAttributes: any;
		readonly gateway: any;
		readonly ipPoolId: any;
		readonly ipRanges: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		readonly prefixLength: any;
		revision: any;
		scope: any;
		readonly subnetType: any;
		type: any;
		vsmUuid: any;

	}

	interface SubnetDtoConstructor {
		new(value?:any): SubnetDto;
		readonly prototype: SubnetDto;
	}

	const SubnetDto: SubnetDtoConstructor;

	interface SubnetListDto extends NSXSubnetListDto
	{
		readonly subnets: any;

	}

	interface SubnetListDtoConstructor {
		new(value?:any): SubnetListDto;
		readonly prototype: SubnetListDto;
	}

	const SubnetListDto: SubnetListDtoConstructor;

	interface SubnetsDto extends NSXSubnetsDto
	{
		readonly subnets: any;

	}

	interface SubnetsDtoConstructor {
		new(value?:any): SubnetsDto;
		readonly prototype: SubnetsDto;
	}

	const SubnetsDto: SubnetsDtoConstructor;

	interface SyncConflictResolverOperations extends NSXSyncConflictResolverOperations
	{

	}

	interface SyncConflictResolverOperationsConstructor {
		new(value?:any): SyncConflictResolverOperations;
		readonly prototype: SyncConflictResolverOperations;
	}

	const SyncConflictResolverOperations: SyncConflictResolverOperationsConstructor;

	interface SyslogConfigDto extends NSXSyslogConfigDto
	{
		enabled: any;
		readonly protocol: any;
		readonly serverAddresses: any;
		template: any;
		version: any;

	}

	interface SyslogConfigDtoConstructor {
		new(value?:any): SyslogConfigDto;
		readonly prototype: SyslogConfigDto;
	}

	const SyslogConfigDto: SyslogConfigDtoConstructor;

	interface SyslogServerConfigDto extends NSXSyslogServerConfigDto
	{
		readonly serverInfo: any;

	}

	interface SyslogServerConfigDtoConstructor {
		new(value?:any): SyslogServerConfigDto;
		readonly prototype: SyslogServerConfigDto;
	}

	const SyslogServerConfigDto: SyslogServerConfigDtoConstructor;

	interface SystemAlarmDto extends NSXSystemAlarmDto
	{
		readonly alarmBeingResolved: any;
		readonly alarmCode: any;
		readonly alarmId: any;
		readonly alarmMetadata: any;
		readonly alarmSource: any;
		displayName: any;
		eventCode: any;
		eventId: any;
		eventMetadata: any;
		eventSource: any;
		message: any;
		messageParams: any;
		module: any;
		objectId: any;
		reporterName: any;
		reporterType: any;
		readonly resolutionAttempted: any;
		readonly resolvable: any;
		severity: any;
		sourceType: any;
		readonly target: any;
		timestamp: any;

	}

	interface SystemAlarmDtoConstructor {
		new(value?:any): SystemAlarmDto;
		readonly prototype: SystemAlarmDto;
	}

	const SystemAlarmDto: SystemAlarmDtoConstructor;

	interface SystemAlarmsDto extends NSXSystemAlarmsDto
	{
		readonly alarms: any;

	}

	interface SystemAlarmsDtoConstructor {
		new(value?:any): SystemAlarmsDto;
		readonly prototype: SystemAlarmsDto;
	}

	const SystemAlarmsDto: SystemAlarmsDtoConstructor;

	interface SystemControlConfigDto extends NSXSystemControlConfigDto
	{
		enabled: any;
		readonly property: any;
		template: any;
		version: any;

	}

	interface SystemControlConfigDtoConstructor {
		new(value?:any): SystemControlConfigDto;
		readonly prototype: SystemControlConfigDto;
	}

	const SystemControlConfigDto: SystemControlConfigDtoConstructor;

	interface SystemEventDto extends NSXSystemEventDto
	{
		readonly displayName: any;
		readonly eventCode: any;
		readonly eventId: any;
		readonly eventMetadata: any;
		readonly eventSource: any;
		readonly message: any;
		readonly messageParams: any;
		readonly module: any;
		readonly objectId: any;
		readonly reporterName: any;
		readonly reporterType: any;
		readonly severity: any;
		readonly sourceType: any;
		readonly timestamp: any;

	}

	interface SystemEventDtoConstructor {
		new(value?:any): SystemEventDto;
		readonly prototype: SystemEventDto;
	}

	const SystemEventDto: SystemEventDtoConstructor;

	interface SystemStats extends NSXSystemStats
	{
		readonly cpu_cores: any;
		readonly load_average: any;
		readonly mem_cache: any;
		readonly mem_total: any;
		readonly mem_used: any;
		readonly swap_total: any;
		readonly swap_used: any;

	}

	interface SystemStatsConstructor {
		new(value?:any): SystemStats;
		readonly prototype: SystemStats;
	}

	const SystemStats: SystemStatsConstructor;

	interface TableInfoDto extends NSXTableInfoDto
	{
		readonly maximumEndTime: any;
		readonly minimumStartTime: any;
		readonly totalCount: any;

	}

	interface TableInfoDtoConstructor {
		new(value?:any): TableInfoDto;
		readonly prototype: TableInfoDto;
	}

	const TableInfoDto: TableInfoDtoConstructor;

	interface Tag extends NSXTag
	{
		readonly scope: any;
		readonly tag: any;

	}

	interface TagConstructor {
		new(value?:any): Tag;
		readonly prototype: Tag;
	}

	const Tag: TagConstructor;

	interface TagsDto extends NSXTagsDto
	{
		readonly tags: any;

	}

	interface TagsDtoConstructor {
		new(value?:any): TagsDto;
		readonly prototype: TagsDto;
	}

	const TagsDto: TagsDtoConstructor;

	interface TaskDto extends NSXTaskDto
	{
		readonly creationTimeMillis: any;
		readonly description: any;
		readonly failurePolicy: any;
		readonly id: any;
		readonly jobId: any;
		readonly name: any;
		readonly nextExecutionTime: any;
		readonly priority: any;
		readonly systemTask: any;
		readonly target: any;
		readonly taskClass: any;
		readonly taskData: any;
		readonly timeoutMillis: any;
		readonly timeoutPolicy: any;
		readonly title: any;
		readonly user: any;
		readonly visible: any;

	}

	interface TaskDtoConstructor {
		new(value?:any): TaskDto;
		readonly prototype: TaskDto;
	}

	const TaskDto: TaskDtoConstructor;

	interface TaskInstanceDto extends NSXTaskInstanceDto
	{
		readonly endTimeMillis: any;
		readonly failureRetryCount: any;
		readonly id: any;
		readonly name: any;
		readonly startTimeMillis: any;
		readonly statusMessage: any;
		readonly taskData: any;
		readonly taskOutput: any;
		readonly taskStatus: any;
		readonly timeoutRetryCount: any;

	}

	interface TaskInstanceDtoConstructor {
		new(value?:any): TaskInstanceDto;
		readonly prototype: TaskInstanceDto;
	}

	const TaskInstanceDto: TaskInstanceDtoConstructor;

	interface TaskStatusDto extends NSXTaskStatusDto
	{
		readonly status: any;

	}

	interface TaskStatusDtoConstructor {
		new(value?:any): TaskStatusDto;
		readonly prototype: TaskStatusDto;
	}

	const TaskStatusDto: TaskStatusDtoConstructor;

	interface TaskTargetDto extends NSXTaskTargetDto
	{
		readonly name: any;
		readonly objectId: any;
		readonly type: any;

	}

	interface TaskTargetDtoConstructor {
		new(value?:any): TaskTargetDto;
		readonly prototype: TaskTargetDto;
	}

	const TaskTargetDto: TaskTargetDtoConstructor;

	interface TimeoutDto extends NSXTimeoutDto
	{
		readonly forcedTimeout: any;
		readonly sessionIdleTimeout: any;

	}

	interface TimeoutDtoConstructor {
		new(value?:any): TimeoutDto;
		readonly prototype: TimeoutDto;
	}

	const TimeoutDto: TimeoutDtoConstructor;

	interface TopicsDto extends NSXTopicsDto
	{
		readonly topics: any;

	}

	interface TopicsDtoConstructor {
		new(value?:any): TopicsDto;
		readonly prototype: TopicsDto;
	}

	const TopicsDto: TopicsDtoConstructor;

	interface TrafficShapingPolicyDto extends NSXTrafficShapingPolicyDto
	{
		readonly averageBandwidth: any;
		readonly burstSize: any;
		readonly enabled: any;
		readonly inherited: any;
		readonly peakBandwidth: any;

	}

	interface TrafficShapingPolicyDtoConstructor {
		new(value?:any): TrafficShapingPolicyDto;
		readonly prototype: TrafficShapingPolicyDto;
	}

	const TrafficShapingPolicyDto: TrafficShapingPolicyDtoConstructor;

	interface TranslatedEntityDto extends NSXTranslatedEntityDto
	{

	}

	interface TranslatedEntityDtoConstructor {
		new(value?:any): TranslatedEntityDto;
		readonly prototype: TranslatedEntityDto;
	}

	const TranslatedEntityDto: TranslatedEntityDtoConstructor;

	interface TransportDto extends NSXTransportDto
	{
		readonly revision: any;
		readonly transportAttributes: any;
		readonly type: any;

	}

	interface TransportDtoConstructor {
		new(value?:any): TransportDto;
		readonly prototype: TransportDto;
	}

	const TransportDto: TransportDtoConstructor;

	interface TransportElementDto extends NSXTransportElementDto
	{
		readonly applicationProtocol: any;
		readonly sourcePort: any;
		readonly value: any;

	}

	interface TransportElementDtoConstructor {
		new(value?:any): TransportElementDto;
		readonly prototype: TransportElementDto;
	}

	const TransportElementDto: TransportElementDtoConstructor;

	interface TransportsDto extends NSXTransportsDto
	{
		readonly transports: any;

	}

	interface TransportsDtoConstructor {
		new(value?:any): TransportsDto;
		readonly prototype: TransportsDto;
	}

	const TransportsDto: TransportsDtoConstructor;

	interface TrinitySpoofGuardDto extends NSXTrinitySpoofGuardDto
	{
		readonly approvedBy: any;
		readonly approvedIpAddress: any;
		readonly approvedMacAddress: any;
		readonly approvedOn: any;
		readonly detectedIpAddress: any;
		readonly detectedMacAddress: any;
		readonly id: any;
		readonly newApprovedIpAddress: any;
		readonly nicName: any;
		readonly oldApprovedIpAddress: any;
		readonly portGroupId: any;
		readonly publishedBy: any;
		readonly publishedIpAddress: any;
		readonly publishedMacAddress: any;
		readonly publishedOn: any;
		readonly vmMoId: any;
		readonly vmName: any;
		readonly vnicUuid: any;

	}

	interface TrinitySpoofGuardDtoConstructor {
		new(value?:any): TrinitySpoofGuardDto;
		readonly prototype: TrinitySpoofGuardDto;
	}

	const TrinitySpoofGuardDto: TrinitySpoofGuardDtoConstructor;

	interface TrustObjectDataDto extends NSXTrustObjectDataDto
	{
		clientHandle: any;
		description: any;
		extendedAttributes: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		readonly passphrase: any;
		readonly pemEncoding: any;
		readonly privateKey: any;
		revision: any;
		scope: any;
		type: any;
		vsmUuid: any;

	}

	interface TrustObjectDataDtoConstructor {
		new(value?:any): TrustObjectDataDto;
		readonly prototype: TrustObjectDataDto;
	}

	const TrustObjectDataDto: TrustObjectDataDtoConstructor;

	interface TunnelConfigurationDto extends NSXTunnelConfigurationDto
	{
		readonly excludeLocalSubnets: any;
		readonly gatewayIp: any;

	}

	interface TunnelConfigurationDtoConstructor {
		new(value?:any): TunnelConfigurationDto;
		readonly prototype: TunnelConfigurationDto;
	}

	const TunnelConfigurationDto: TunnelConfigurationDtoConstructor;

	interface Type extends NSXType
	{

	}

	interface TypeConstructor {
		new(value?:any): Type;
		readonly prototype: Type;
	}

	const Type: TypeConstructor;

	interface TypedAttributeDto extends NSXTypedAttributeDto
	{
		readonly id: any;
		readonly key: any;
		readonly name: any;
		readonly revision: any;
		readonly supportedValues: any;
		readonly type: any;
		readonly value: any;

	}

	interface TypedAttributeDtoConstructor {
		new(value?:any): TypedAttributeDto;
		readonly prototype: TypedAttributeDto;
	}

	const TypedAttributeDto: TypedAttributeDtoConstructor;

	interface TypedAttributesDto extends NSXTypedAttributesDto
	{
		readonly id: any;
		readonly revision: any;
		readonly typedAttributes: any;

	}

	interface TypedAttributesDtoConstructor {
		new(value?:any): TypedAttributesDto;
		readonly prototype: TypedAttributesDto;
	}

	const TypedAttributesDto: TypedAttributesDtoConstructor;

	interface TypedAttributeTableDto extends NSXTypedAttributeTableDto
	{
		readonly description: any;
		readonly header: any;
		readonly id: any;
		readonly key: any;
		readonly name: any;
		readonly revision: any;
		readonly rows: any;

	}

	interface TypedAttributeTableDtoConstructor {
		new(value?:any): TypedAttributeTableDto;
		readonly prototype: TypedAttributeTableDto;
	}

	const TypedAttributeTableDto: TypedAttributeTableDtoConstructor;

	interface UiClusterDto extends NSXUiClusterDto
	{
		cluster: any;
		readonly eligible: any;
		readonly errorMessage: any;
		readonly hosts: any;
		readonly ipPool: any;
		readonly issueExists: any;
		readonly mapped: any;
		readonly selectedSwitches: any;
		readonly state: any;
		readonly switches: any;
		readonly vlanId: any;
		readonly vmknicCount: any;
		readonly vxlanVersion: any;

	}

	interface UiClusterDtoConstructor {
		new(value?:any): UiClusterDto;
		readonly prototype: UiClusterDto;
	}

	const UiClusterDto: UiClusterDtoConstructor;

	interface UiHostDto extends NSXUiHostDto
	{
		host: any;
		status: any;
		readonly vmCount: any;
		vmknics: any;

	}

	interface UiHostDtoConstructor {
		new(value?:any): UiHostDto;
		readonly prototype: UiHostDto;
	}

	const UiHostDto: UiHostDtoConstructor;

	interface UiJobResultDto extends NSXUiJobResultDto
	{
		readonly exception: any;
		readonly jobId: any;
		readonly key: any;

	}

	interface UiJobResultDtoConstructor {
		new(value?:any): UiJobResultDto;
		readonly prototype: UiJobResultDto;
	}

	const UiJobResultDto: UiJobResultDtoConstructor;

	interface UiServiceDto extends NSXUiServiceDto
	{
		readonly appliedProfiles: any;
		readonly availableProfiles: any;
		readonly availableService: any;
		readonly enabled: any;
		readonly vendor: any;

	}

	interface UiServiceDtoConstructor {
		new(value?:any): UiServiceDto;
		readonly prototype: UiServiceDto;
	}

	const UiServiceDto: UiServiceDtoConstructor;

	interface UiServiceInstanceDeploymentScopeDto extends NSXUiServiceInstanceDeploymentScopeDto
	{
		readonly cluster: any;
		readonly datastore: any;
		readonly id: any;
		readonly network: any;
		readonly revision: any;

	}

	interface UiServiceInstanceDeploymentScopeDtoConstructor {
		new(value?:any): UiServiceInstanceDeploymentScopeDto;
		readonly prototype: UiServiceInstanceDeploymentScopeDto;
	}

	const UiServiceInstanceDeploymentScopeDto: UiServiceInstanceDeploymentScopeDtoConstructor;

	interface UiServiceInstanceDto extends NSXUiServiceInstanceDto
	{
		readonly enabled: any;
		readonly functionalitiesCount: any;
		readonly serviceInstances: any;

	}

	interface UiServiceInstanceDtoConstructor {
		new(value?:any): UiServiceInstanceDto;
		readonly prototype: UiServiceInstanceDto;
	}

	const UiServiceInstanceDto: UiServiceInstanceDtoConstructor;

	interface UiSwitchDto extends NSXUiSwitchDto
	{
		readonly defaultVmknicCount: any;
		failoverUplinkPortNames: any;
		mtu: any;
		readonly prepared: any;
		promiscuousMode: any;
		readonly supportedTeamingPolicies: any;
		switchObj: any;
		teamingPolicy: any;
		readonly vds: any;

	}

	interface UiSwitchDtoConstructor {
		new(value?:any): UiSwitchDto;
		readonly prototype: UiSwitchDto;
	}

	const UiSwitchDto: UiSwitchDtoConstructor;

	interface UiTransportZoneServiceDto extends NSXUiTransportZoneServiceDto
	{
		readonly noOffunctionalities: any;
		readonly profiles: any;
		readonly serviceName: any;
		readonly status: any;
		readonly version: any;

	}

	interface UiTransportZoneServiceDtoConstructor {
		new(value?:any): UiTransportZoneServiceDto;
		readonly prototype: UiTransportZoneServiceDto;
	}

	const UiTransportZoneServiceDto: UiTransportZoneServiceDtoConstructor;

	interface UiVirtualMachineDto extends NSXUiVirtualMachineDto
	{
		readonly parentHost: any;
		readonly poweredOn: any;
		readonly virtualMachine: any;
		readonly vnics: any;

	}

	interface UiVirtualMachineDtoConstructor {
		new(value?:any): UiVirtualMachineDto;
		readonly prototype: UiVirtualMachineDto;
	}

	const UiVirtualMachineDto: UiVirtualMachineDtoConstructor;

	interface UiVirtualWireDto extends NSXUiVirtualWireDto
	{
		readonly activeHosts: any;
		backing: any;
		clientHandle: any;
		readonly connectedVmCount: any;
		controlPlaneMode: any;
		description: any;
		extendedAttributes: any;
		guestVlanAllowed: any;
		multicastAddr: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		scope: any;
		readonly status: any;
		tenantId: any;
		readonly totalHosts: any;
		type: any;
		vdnId: any;
		readonly vdnScope: any;
		vdnScopeId: any;
		vsmUuid: any;

	}

	interface UiVirtualWireDtoConstructor {
		new(value?:any): UiVirtualWireDto;
		readonly prototype: UiVirtualWireDto;
	}

	const UiVirtualWireDto: UiVirtualWireDtoConstructor;

	interface UiVnicDto extends NSXUiVnicDto
	{
		readonly network: any;
		readonly parentVirtualMachine: any;
		readonly vnic: any;

	}

	interface UiVnicDtoConstructor {
		new(value?:any): UiVnicDto;
		readonly prototype: UiVnicDto;
	}

	const UiVnicDto: UiVnicDtoConstructor;

	interface UiVxlanPropertiesDto extends NSXUiVxlanPropertiesDto
	{
		readonly controllerCount: any;
		readonly multicastRanges: any;
		readonly segmentRanges: any;

	}

	interface UiVxlanPropertiesDtoConstructor {
		new(value?:any): UiVxlanPropertiesDto;
		readonly prototype: UiVxlanPropertiesDto;
	}

	const UiVxlanPropertiesDto: UiVxlanPropertiesDtoConstructor;

	interface UserDto extends NSXUserDto
	{
		readonly changePassword: any;
		readonly description: any;
		readonly disableUserAccount: any;
		readonly firstName: any;
		readonly lastName: any;
		readonly objectId: any;
		readonly password: any;
		readonly passwordNeverExpires: any;
		readonly userId: any;

	}

	interface UserDtoConstructor {
		new(value?:any): UserDto;
		readonly prototype: UserDto;
	}

	const UserDto: UserDtoConstructor;

	interface UserInfoDto extends NSXUserInfoDto
	{
		readonly accessControlEntry: any;
		clientHandle: any;
		description: any;
		readonly email: any;
		extendedAttributes: any;
		readonly fullname: any;
		readonly hasGlobalObjectAccess: any;
		readonly isEnabled: any;
		readonly isGroup: any;
		readonly isLocal: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		readonly password: any;
		revision: any;
		scope: any;
		readonly securityProfile: any;
		type: any;
		readonly userId: any;
		vsmUuid: any;

	}

	interface UserInfoDtoConstructor {
		new(value?:any): UserInfoDto;
		readonly prototype: UserInfoDto;
	}

	const UserInfoDto: UserInfoDtoConstructor;

	interface UserInfoListDto extends NSXUserInfoListDto
	{
		readonly users: any;

	}

	interface UserInfoListDtoConstructor {
		new(value?:any): UserInfoListDto;
		readonly prototype: UserInfoListDto;
	}

	const UserInfoListDto: UserInfoListDtoConstructor;

	interface UserMgmtPermissionDto extends NSXUserMgmtPermissionDto
	{
		readonly localUserPermissions: any;
		readonly vcUserPermissions: any;

	}

	interface UserMgmtPermissionDtoConstructor {
		new(value?:any): UserMgmtPermissionDto;
		readonly prototype: UserMgmtPermissionDto;
	}

	const UserMgmtPermissionDto: UserMgmtPermissionDtoConstructor;

	interface UsersDto extends NSXUsersDto
	{
		readonly users: any;

	}

	interface UsersDtoConstructor {
		new(value?:any): UsersDto;
		readonly prototype: UsersDto;
	}

	const UsersDto: UsersDtoConstructor;

	interface ValueRange extends NSXValueRange
	{
		readonly begin: any;
		readonly end: any;

	}

	interface ValueRangeConstructor {
		new(value?:any): ValueRange;
		readonly prototype: ValueRange;
	}

	const ValueRange: ValueRangeConstructor;

	interface VcConfigDto extends NSXVcConfigDto
	{
		readonly assignRoleToUser: any;
		readonly certificateThumbprint: any;
		readonly ipAddress: any;
		readonly password: any;
		readonly pluginDownloadPort: any;
		readonly pluginDownloadServer: any;
		readonly userName: any;
		readonly vcInventoryLastUpdateTime: any;

	}

	interface VcConfigDtoConstructor {
		new(value?:any): VcConfigDto;
		readonly prototype: VcConfigDto;
	}

	const VcConfigDto: VcConfigDtoConstructor;

	interface VcConfigStatusDto extends NSXVcConfigStatusDto
	{
		readonly connected: any;
		readonly lastInventorySyncTime: any;

	}

	interface VcConfigStatusDtoConstructor {
		new(value?:any): VcConfigStatusDto;
		readonly prototype: VcConfigStatusDto;
	}

	const VcConfigStatusDto: VcConfigStatusDtoConstructor;

	interface VCNSDomainObject extends NSXVCNSDomainObject
	{
		readonly description: any;
		id: any;
		readonly name: any;
		readonly objectId: any;
		readonly objectTypeName: any;
		readonly revision: any;

	}

	interface VCNSDomainObjectConstructor {
		new(value?:any): VCNSDomainObject;
		readonly prototype: VCNSDomainObject;
	}

	const VCNSDomainObject: VCNSDomainObjectConstructor;

	interface VdnClusterDto extends NSXVdnClusterDto
	{
		readonly cluster: any;

	}

	interface VdnClusterDtoConstructor {
		new(value?:any): VdnClusterDto;
		readonly prototype: VdnClusterDto;
	}

	const VdnClusterDto: VdnClusterDtoConstructor;

	interface VdnClusterListDto extends NSXVdnClusterListDto
	{
		readonly clusters: any;

	}

	interface VdnClusterListDtoConstructor {
		new(value?:any): VdnClusterListDto;
		readonly prototype: VdnClusterListDto;
	}

	const VdnClusterListDto: VdnClusterListDtoConstructor;

	interface VdnHostDto extends NSXVdnHostDto
	{
		readonly host: any;
		readonly status: any;
		readonly vmknics: any;

	}

	interface VdnHostDtoConstructor {
		new(value?:any): VdnHostDto;
		readonly prototype: VdnHostDto;
	}

	const VdnHostDto: VdnHostDtoConstructor;

	interface VdnHostListDto extends NSXVdnHostListDto
	{
		readonly hosts: any;

	}

	interface VdnHostListDtoConstructor {
		new(value?:any): VdnHostListDto;
		readonly prototype: VdnHostListDto;
	}

	const VdnHostListDto: VdnHostListDtoConstructor;

	interface VdnHostStatusDto extends NSXVdnHostStatusDto
	{
		readonly readiness: any;

	}

	interface VdnHostStatusDtoConstructor {
		new(value?:any): VdnHostStatusDto;
		readonly prototype: VdnHostStatusDto;
	}

	const VdnHostStatusDto: VdnHostStatusDtoConstructor;

	interface VdnScope extends NSXVdnScope
	{
		readonly clustersAsJson: any;
		description: any;
		id: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;

		clusters(): Cluster;
	}

	interface VdnScopeConstructor {
		new(value?:any): VdnScope;
		readonly prototype: VdnScope;
	}

	const VdnScope: VdnScopeConstructor;

	interface VdnScopeDto extends NSXVdnScopeDto
	{
		clientHandle: any;
		readonly clusters: any;
		readonly controlPlaneMode: any;
		description: any;
		extendedAttributes: any;
		readonly id: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		scope: any;
		type: any;
		readonly virtualWireCount: any;
		vsmUuid: any;

	}

	interface VdnScopeDtoConstructor {
		new(value?:any): VdnScopeDto;
		readonly prototype: VdnScopeDto;
	}

	const VdnScopeDto: VdnScopeDtoConstructor;

	interface VdnScopeInv extends NSXVdnScopeInv
	{
		readonly displayName: any;
		id: any;

		vdnScopes(): VdnScope;
	}

	interface VdnScopeInvConstructor {
		new(value?:any): VdnScopeInv;
		readonly prototype: VdnScopeInv;
	}

	const VdnScopeInv: VdnScopeInvConstructor;

	interface VdnScopeOperationDto extends NSXVdnScopeOperationDto
	{
		readonly value: any;

	}

	interface VdnScopeOperationDtoConstructor {
		new(value?:any): VdnScopeOperationDto;
		readonly prototype: VdnScopeOperationDto;
	}

	const VdnScopeOperationDto: VdnScopeOperationDtoConstructor;

	interface VdnScopesDto extends NSXVdnScopesDto
	{
		readonly allScopes: any;

	}

	interface VdnScopesDtoConstructor {
		new(value?:any): VdnScopesDto;
		readonly prototype: VdnScopesDto;
	}

	const VdnScopesDto: VdnScopesDtoConstructor;

	interface VdnSegmentDto extends NSXVdnSegmentDto
	{
		readonly id: any;
		readonly multicastAddr: any;
		readonly tenantId: any;
		readonly ts: any;
		readonly vdnId: any;

	}

	interface VdnSegmentDtoConstructor {
		new(value?:any): VdnSegmentDto;
		readonly prototype: VdnSegmentDto;
	}

	const VdnSegmentDto: VdnSegmentDtoConstructor;

	interface VdnVmknicDto extends NSXVdnVmknicDto
	{
		readonly deviceId: any;
		readonly dhcp: any;
		readonly ipAddress: any;
		readonly validIp: any;

	}

	interface VdnVmknicDtoConstructor {
		new(value?:any): VdnVmknicDto;
		readonly prototype: VdnVmknicDto;
	}

	const VdnVmknicDto: VdnVmknicDtoConstructor;

	interface VdsContextDto extends NSXVdsContextDto
	{
		readonly failoverUplinkPortNames: any;
		readonly mtu: any;
		readonly promiscuousMode: any;
		readonly switchObj: any;
		readonly teamingPolicy: any;

	}

	interface VdsContextDtoConstructor {
		new(value?:any): VdsContextDto;
		readonly prototype: VdsContextDto;
	}

	const VdsContextDto: VdsContextDtoConstructor;

	interface VdsContextListDto extends NSXVdsContextListDto
	{
		readonly switches: any;

	}

	interface VdsContextListDtoConstructor {
		new(value?:any): VdsContextListDto;
		readonly prototype: VdsContextListDto;
	}

	const VdsContextListDto: VdsContextListDtoConstructor;

	interface VdsContextWithBackingDto extends NSXVdsContextWithBackingDto
	{
		readonly backingStatus: any;
		readonly backingType: any;
		readonly backingValue: any;
		failoverUplinkPortNames: any;
		mtu: any;
		promiscuousMode: any;
		switchObj: any;
		teamingPolicy: any;

	}

	interface VdsContextWithBackingDtoConstructor {
		new(value?:any): VdsContextWithBackingDto;
		readonly prototype: VdsContextWithBackingDto;
	}

	const VdsContextWithBackingDto: VdsContextWithBackingDtoConstructor;

	interface VendorSectionDto extends NSXVendorSectionDto
	{
		readonly description: any;
		readonly id: any;
		readonly key: any;
		readonly name: any;
		readonly revision: any;
		readonly typedAttributes: any;
		readonly typedAttributeTables: any;

	}

	interface VendorSectionDtoConstructor {
		new(value?:any): VendorSectionDto;
		readonly prototype: VendorSectionDto;
	}

	const VendorSectionDto: VendorSectionDtoConstructor;

	interface VendorTemplateDto extends NSXVendorTemplateDto
	{
		readonly description: any;
		readonly id: any;
		readonly idFromVendor: any;
		readonly name: any;
		readonly revision: any;
		readonly typedAttributes: any;
		readonly typedAttributeTables: any;
		readonly vendorAttributes: any;
		readonly vendorSections: any;

	}

	interface VendorTemplateDtoConstructor {
		new(value?:any): VendorTemplateDto;
		readonly prototype: VendorTemplateDto;
	}

	const VendorTemplateDto: VendorTemplateDtoConstructor;

	interface VendorTemplatesDto extends NSXVendorTemplatesDto
	{
		readonly vendorTemplates: any;

	}

	interface VendorTemplatesDtoConstructor {
		new(value?:any): VendorTemplatesDto;
		readonly prototype: VendorTemplatesDto;
	}

	const VendorTemplatesDto: VendorTemplatesDtoConstructor;

	interface VersionedDeploymentSpecDto extends NSXVersionedDeploymentSpecDto
	{
		readonly hostVersion: any;
		readonly id: any;
		readonly ovfUrl: any;
		readonly revision: any;
		readonly vmciEnabled: any;

	}

	interface VersionedDeploymentSpecDtoConstructor {
		new(value?:any): VersionedDeploymentSpecDto;
		readonly prototype: VersionedDeploymentSpecDto;
	}

	const VersionedDeploymentSpecDto: VersionedDeploymentSpecDtoConstructor;

	interface ViewMatchDto extends NSXViewMatchDto
	{
		readonly ipAddress: any;
		readonly ipset: any;
		readonly vnic: any;

	}

	interface ViewMatchDtoConstructor {
		new(value?:any): ViewMatchDto;
		readonly prototype: ViewMatchDto;
	}

	const ViewMatchDto: ViewMatchDtoConstructor;

	interface VirtualServer extends NSXVirtualServer
	{
		accelerationEnabled: any;
		readonly applicationProfile: any;
		readonly applicationRules: any;
		readonly connectionLimit: any;
		readonly connectionRateLimit: any;
		readonly defaultPool: any;
		readonly description: any;
		enabled: any;
		enableServiceInsertion: any;
		id: any;
		readonly ipAddress: any;
		readonly name: any;
		readonly objectId: any;
		readonly poolId: any;
		readonly port: any;
		readonly protocol: any;
		readonly serviceProfileList: any;
		readonly virtualServerId: any;

		applicationProfiles(): ApplicationProfile;
	}

	interface VirtualServerConstructor {
		new(value?:any): VirtualServer;
		readonly prototype: VirtualServer;
	}

	const VirtualServer: VirtualServerConstructor;

	interface VirtualServerInv extends NSXVirtualServerInv
	{
		readonly displayName: any;
		id: any;

		virtualServers(): VirtualServer;
	}

	interface VirtualServerInvConstructor {
		new(value?:any): VirtualServerInv;
		readonly prototype: VirtualServerInv;
	}

	const VirtualServerInv: VirtualServerInvConstructor;

	interface VirtualWire extends NSXVirtualWire
	{
		description: any;
		id: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		readonly portGroupBackingValues: any;
		revision: any;
		readonly tenantId: any;
		readonly vdnScopeId: any;

	}

	interface VirtualWireConstructor {
		new(value?:any): VirtualWire;
		readonly prototype: VirtualWire;
	}

	const VirtualWire: VirtualWireConstructor;

	interface VirtualWireCreateSpecDto extends NSXVirtualWireCreateSpecDto
	{
		readonly controlPlaneMode: any;
		readonly description: any;
		readonly guestVlanAllowed: any;
		readonly name: any;
		readonly tenantId: any;

	}

	interface VirtualWireCreateSpecDtoConstructor {
		new(value?:any): VirtualWireCreateSpecDto;
		readonly prototype: VirtualWireCreateSpecDto;
	}

	const VirtualWireCreateSpecDto: VirtualWireCreateSpecDtoConstructor;

	interface VirtualWireDto extends NSXVirtualWireDto
	{
		readonly backing: any;
		clientHandle: any;
		readonly controlPlaneMode: any;
		description: any;
		extendedAttributes: any;
		readonly guestVlanAllowed: any;
		readonly multicastAddr: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		scope: any;
		readonly tenantId: any;
		type: any;
		readonly vdnId: any;
		readonly vdnScopeId: any;
		vsmUuid: any;

	}

	interface VirtualWireDtoConstructor {
		new(value?:any): VirtualWireDto;
		readonly prototype: VirtualWireDto;
	}

	const VirtualWireDto: VirtualWireDtoConstructor;

	interface VirtualWireInv extends NSXVirtualWireInv
	{
		readonly displayName: any;
		id: any;

		virtualWirePages(): VirtualWirePage;
	}

	interface VirtualWireInvConstructor {
		new(value?:any): VirtualWireInv;
		readonly prototype: VirtualWireInv;
	}

	const VirtualWireInv: VirtualWireInvConstructor;

	interface VirtualWirePage extends NSXVirtualWirePage
	{
		displayName: any;
		id: any;
		pageSize: any;
		startIndex: any;
		totalCount: any;

		virtualWires(): VirtualWire;
	}

	interface VirtualWirePageConstructor {
		new(value?:any): VirtualWirePage;
		readonly prototype: VirtualWirePage;
	}

	const VirtualWirePage: VirtualWirePageConstructor;

	interface VirtualWiresDto extends NSXVirtualWiresDto
	{
		readonly dataPage: any;

	}

	interface VirtualWiresDtoConstructor {
		new(value?:any): VirtualWiresDto;
		readonly prototype: VirtualWiresDto;
	}

	const VirtualWiresDto: VirtualWiresDtoConstructor;

	interface VmDto extends NSXVmDto
	{
		readonly powerStatus: any;
		readonly vmId: any;
		readonly vmName: any;

	}

	interface VmDtoConstructor {
		new(value?:any): VmDto;
		readonly prototype: VmDto;
	}

	const VmDto: VmDtoConstructor;

	interface VmNodeDto extends NSXVmNodeDto
	{
		readonly vmId: any;
		readonly vmName: any;

	}

	interface VmNodeDtoConstructor {
		new(value?:any): VmNodeDto;
		readonly prototype: VmNodeDto;
	}

	const VmNodeDto: VmNodeDtoConstructor;

	interface VmNodeSetDto extends NSXVmNodeSetDto
	{
		readonly vmNodes: any;

	}

	interface VmNodeSetDtoConstructor {
		new(value?:any): VmNodeSetDto;
		readonly prototype: VmNodeSetDto;
	}

	const VmNodeSetDto: VmNodeSetDtoConstructor;

	interface VmsDto extends NSXVmsDto
	{
		readonly clusterId: any;
		readonly clusterName: any;
		readonly datacenterId: any;
		readonly datacenterName: any;
		readonly hostId: any;
		readonly hostName: any;
		readonly vms: any;

	}

	interface VmsDtoConstructor {
		new(value?:any): VmsDto;
		readonly prototype: VmsDto;
	}

	const VmsDto: VmsDtoConstructor;

	interface VnicDto extends NSXVnicDto
	{
		addressGroups: any;
		readonly enableBridgeMode: any;
		readonly enableProxyArp: any;
		readonly enableSendRedirects: any;
		readonly fenceParameters: any;
		readonly index: any;
		readonly inShapingPolicy: any;
		readonly isConnected: any;
		label: any;
		readonly macAddresses: any;
		mtu: any;
		name: any;
		readonly outShapingPolicy: any;
		readonly portgroupId: any;
		readonly portgroupName: any;
		readonly type: any;

	}

	interface VnicDtoConstructor {
		new(value?:any): VnicDto;
		readonly prototype: VnicDto;
	}

	const VnicDto: VnicDtoConstructor;

	interface VnicNodeDto extends NSXVnicNodeDto
	{
		readonly ipAddresses: any;
		readonly macAddress: any;
		readonly uuid: any;

	}

	interface VnicNodeDtoConstructor {
		new(value?:any): VnicNodeDto;
		readonly prototype: VnicNodeDto;
	}

	const VnicNodeDto: VnicNodeDtoConstructor;

	interface VnicNodeSetDto extends NSXVnicNodeSetDto
	{
		readonly vnicNodes: any;

	}

	interface VnicNodeSetDtoConstructor {
		new(value?:any): VnicNodeSetDto;
		readonly prototype: VnicNodeSetDto;
	}

	const VnicNodeSetDto: VnicNodeSetDtoConstructor;

	interface VnicsDto extends NSXVnicsDto
	{
		readonly vnics: any;

	}

	interface VnicsDtoConstructor {
		new(value?:any): VnicsDto;
		readonly prototype: VnicsDto;
	}

	const VnicsDto: VnicsDtoConstructor;

	interface VshieldAppConfigurationDto extends NSXVshieldAppConfigurationDto
	{
		readonly consolidatedConfiguration: any;
		readonly datacenterState: any;
		readonly excludeListConfigurationDto: any;
		readonly failSafeConfiguration: any;
		readonly firewallConfiguration: any;
		readonly firewallConfigurationHistoryList: any;
		readonly protocolsList: any;
		readonly protocolTypes: any;
		readonly status: any;

	}

	interface VshieldAppConfigurationDtoConstructor {
		new(value?:any): VshieldAppConfigurationDto;
		readonly prototype: VshieldAppConfigurationDto;
	}

	const VshieldAppConfigurationDto: VshieldAppConfigurationDtoConstructor;

	interface VsipioctlDto extends NSXVsipioctlDto
	{
		readonly addrsets: any;
		readonly command: any;
		readonly filterId: any;
		readonly hostId: any;
		readonly ipaddr: any;
		readonly ruleId: any;
		readonly stats: any;
		readonly subCommand: any;
		readonly vnicId: any;

	}

	interface VsipioctlDtoConstructor {
		new(value?:any): VsipioctlDto;
		readonly prototype: VsipioctlDto;
	}

	const VsipioctlDto: VsipioctlDtoConstructor;

	interface VsmApplicationDto extends NSXVsmApplicationDto
	{
		clientHandle: any;
		description: any;
		readonly element: any;
		extendedAttributes: any;
		inheritanceAllowed: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		scope: any;
		type: any;
		vsmUuid: any;

	}

	interface VsmApplicationDtoConstructor {
		new(value?:any): VsmApplicationDto;
		readonly prototype: VsmApplicationDto;
	}

	const VsmApplicationDto: VsmApplicationDtoConstructor;

	interface VsmContainerDto extends NSXVsmContainerDto
	{
		clientHandle: any;
		description: any;
		extendedAttributes: any;
		readonly inheritanceAllowed: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		revision: any;
		scope: any;
		type: any;
		vsmUuid: any;

	}

	interface VsmContainerDtoConstructor {
		new(value?:any): VsmContainerDto;
		readonly prototype: VsmContainerDto;
	}

	const VsmContainerDto: VsmContainerDtoConstructor;

	interface VsmInventoryVnicDto extends NSXVsmInventoryVnicDto
	{
		clientHandle: any;
		description: any;
		readonly deviceKey: any;
		extendedAttributes: any;
		readonly label: any;
		readonly macAddress: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		readonly portgroupId: any;
		readonly portKey: any;
		revision: any;
		scope: any;
		type: any;
		readonly vnicUuid: any;
		vsmUuid: any;

	}

	interface VsmInventoryVnicDtoConstructor {
		new(value?:any): VsmInventoryVnicDto;
		readonly prototype: VsmInventoryVnicDto;
	}

	const VsmInventoryVnicDto: VsmInventoryVnicDtoConstructor;

	interface VsmKeyvalueDto extends NSXVsmKeyvalueDto
	{
		readonly key: any;
		readonly value: any;

	}

	interface VsmKeyvalueDtoConstructor {
		new(value?:any): VsmKeyvalueDto;
		readonly prototype: VsmKeyvalueDto;
	}

	const VsmKeyvalueDto: VsmKeyvalueDtoConstructor;

	interface VsmNwfabricFeatureconfigDto extends NSXVsmNwfabricFeatureconfigDto
	{
		readonly featureId: any;
		readonly featureVersion: any;
		readonly resourceConfigs: any;

	}

	interface VsmNwfabricFeatureconfigDtoConstructor {
		new(value?:any): VsmNwfabricFeatureconfigDto;
		readonly prototype: VsmNwfabricFeatureconfigDto;
	}

	const VsmNwfabricFeatureconfigDto: VsmNwfabricFeatureconfigDtoConstructor;

	interface VsmNwfabricFeaturestatusDto extends NSXVsmNwfabricFeaturestatusDto
	{
		readonly enabled: any;
		readonly featureId: any;
		readonly featureVersion: any;
		readonly installed: any;
		readonly message: any;
		readonly status: any;
		readonly updateAvailable: any;

	}

	interface VsmNwfabricFeaturestatusDtoConstructor {
		new(value?:any): VsmNwfabricFeaturestatusDto;
		readonly prototype: VsmNwfabricFeaturestatusDto;
	}

	const VsmNwfabricFeaturestatusDto: VsmNwfabricFeaturestatusDtoConstructor;

	interface VsmSiServiceDto extends NSXVsmSiServiceDto
	{
		readonly category: any;
		clientHandle: any;
		description: any;
		extendedAttributes: any;
		readonly functionalities: any;
		readonly implementations: any;
		readonly internalService: any;
		name: any;
		objectId: any;
		objectTypeName: any;
		readonly precedence: any;
		revision: any;
		scope: any;
		readonly serviceAttributes: any;
		readonly serviceInstances: any;
		readonly serviceInstanceTemplates: any;
		readonly serviceManager: any;
		readonly state: any;
		readonly status: any;
		readonly transports: any;
		type: any;
		readonly usedBy: any;
		readonly vendorTemplates: any;
		readonly version: any;
		vsmUuid: any;

	}

	interface VsmSiServiceDtoConstructor {
		new(value?:any): VsmSiServiceDto;
		readonly prototype: VsmSiServiceDto;
	}

	const VsmSiServiceDto: VsmSiServiceDtoConstructor;

	interface VsmSpoofguardIpaddressesDto extends NSXVsmSpoofguardIpaddressesDto
	{
		readonly ipAddresses: any;

	}

	interface VsmSpoofguardIpaddressesDtoConstructor {
		new(value?:any): VsmSpoofguardIpaddressesDto;
		readonly prototype: VsmSpoofguardIpaddressesDto;
	}

	const VsmSpoofguardIpaddressesDto: VsmSpoofguardIpaddressesDtoConstructor;

	interface VsmSpoofguardObjectinfoDto extends NSXVsmSpoofguardObjectinfoDto
	{
		readonly id: any;
		readonly name: any;
		readonly type: any;

	}

	interface VsmSpoofguardObjectinfoDtoConstructor {
		new(value?:any): VsmSpoofguardObjectinfoDto;
		readonly prototype: VsmSpoofguardObjectinfoDto;
	}

	const VsmSpoofguardObjectinfoDto: VsmSpoofguardObjectinfoDtoConstructor;

	interface VsmVdnFeatureconfigDto extends NSXVsmVdnFeatureconfigDto
	{
		readonly ipDiscoveryConfig: any;
		readonly macLearningConfig: any;

	}

	interface VsmVdnFeatureconfigDtoConstructor {
		new(value?:any): VsmVdnFeatureconfigDto;
		readonly prototype: VsmVdnFeatureconfigDto;
	}

	const VsmVdnFeatureconfigDto: VsmVdnFeatureconfigDtoConstructor;

	interface WebResourceDto extends NSXWebResourceDto
	{
		readonly description: any;
		readonly enabled: any;
		readonly methodInfo: any;
		readonly name: any;
		readonly objectId: any;
		readonly url: any;

	}

	interface WebResourceDtoConstructor {
		new(value?:any): WebResourceDto;
		readonly prototype: WebResourceDto;
	}

	const WebResourceDto: WebResourceDtoConstructor;

	interface WebResourcesDto extends NSXWebResourcesDto
	{
		readonly webResources: any;

	}

	interface WebResourcesDtoConstructor {
		new(value?:any): WebResourcesDto;
		readonly prototype: WebResourcesDto;
	}

	const WebResourcesDto: WebResourcesDtoConstructor;

	interface X509CertificateDto extends NSXX509CertificateDto
	{
		readonly dsaPublicKeyG: any;
		readonly dsaPublicKeyP: any;
		readonly dsaPublicKeyQ: any;
		readonly dsaPublicKeyY: any;
		readonly isCa: any;
		readonly issuer: any;
		readonly issuerCn: any;
		readonly isValid: any;
		readonly md5Hash: any;
		readonly notAfter: any;
		readonly notBefore: any;
		readonly publicKeyAlgo: any;
		readonly publicKeyLength: any;
		readonly rsaPublicKeyExponent: any;
		readonly rsaPublicKeyModulus: any;
		readonly serialNumber: any;
		readonly sha1Hash: any;
		readonly signature: any;
		readonly signatureAlgo: any;
		readonly subject: any;
		readonly subjectCn: any;
		readonly version: any;

	}

	interface X509CertificateDtoConstructor {
		new(value?:any): X509CertificateDto;
		readonly prototype: X509CertificateDto;
	}

	const X509CertificateDto: X509CertificateDtoConstructor;

	interface X509CrlDto extends NSXX509CrlDto
	{
		readonly issuer: any;
		readonly nextUpdate: any;
		readonly version: any;
		readonly x509CrlEntries: any;

	}

	interface X509CrlDtoConstructor {
		new(value?:any): X509CrlDto;
		readonly prototype: X509CrlDto;
	}

	const X509CrlDto: X509CrlDtoConstructor;

	interface X509CrlEntryDto extends NSXX509CrlEntryDto
	{
		readonly revocationDate: any;
		readonly serialNumber: any;

	}

	interface X509CrlEntryDtoConstructor {
		new(value?:any): X509CrlEntryDto;
		readonly prototype: X509CrlEntryDto;
	}

	const X509CrlEntryDto: X509CrlEntryDtoConstructor;

	interface XvsDriverDto extends NSXXvsDriverDto
	{
		readonly name: any;
		readonly supportedSwitchType: any;

	}

	interface XvsDriverDtoConstructor {
		new(value?:any): XvsDriverDto;
		readonly prototype: XvsDriverDto;
	}

	const XvsDriverDto: XvsDriverDtoConstructor;

    }    
