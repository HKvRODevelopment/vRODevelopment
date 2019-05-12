/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
	interface ActiveDirectory
	{

		getComputerAD(computerName?: String, adServer?: AD_Host): AD_Computer;
		getDC(adServer?: AD_Host): AD_Computer;
		search(type?: String, query?: String, adServer?: AD_Host): Object[];
		searchExactMatch(type?: String, objectName?: String, limit?: Number, adServer?: AD_Host): Object[];
	}

	declare const ActiveDirectory: ActiveDirectory;

	interface AD_Computer
	{
		hostname: String;
		id: String;
		readonly name: String;

	}

	declare const AD_Computer: AD_Computer;

	interface AD_Group
	{
		id: String;

	}

	declare const AD_Group: AD_Group;

	interface AD_Host
	{
		hostConfiguration: AD_ServerConfiguration;
		name: String;
		Url: String;

	}

	declare const AD_Host: AD_Host;

	interface AD_HostManager
	{

	}

	declare const AD_HostManager: AD_HostManager;

	interface AD_OrganizationalUnit
	{
		id: String;

		searchComputer(computerName?: String): AD_Computer;
	}

	declare const AD_OrganizationalUnit: AD_OrganizationalUnit;

	interface AD_PluginOptions
	{
		defaultAdServerId: String;
		searchSizeLimit: Number;
		searchSizeLimitPerServer: Number;

	}

	declare const AD_PluginOptions: AD_PluginOptions;

	interface AD_ServerConfiguration
	{
		alternativeHosts: String[];
		defaultDomain: String;
		followReferrals: boolean;
		host: String;
		id: String;
		ldapBase: String;
		loadBalancingMode: LdapLoadBalancingMode;
		name: String;
		port: Number;
		sharedUserName: String;
		sharedUserPassword: String;
		useSharedSession: boolean;
		useSSL: boolean;

	}

	interface AD_ServerConfigurationConstructor {
		new(value?:any): AD_ServerConfiguration;
		readonly prototype: AD_ServerConfiguration;
	}

	declare const AD_ServerConfiguration: AD_ServerConfigurationConstructor;

	interface AD_Unknown
	{
		id: String;

	}

	declare const AD_Unknown: AD_Unknown;

	interface AD_User
	{
		id: String;

	}

	declare const AD_User: AD_User;

	interface AD_UserGroup
	{
		id: String;

	}

	declare const AD_UserGroup: AD_UserGroup;

	interface ConfigurationManager
	{

	}

	declare const ConfigurationManager: ConfigurationManager;

	declare class LdapAttribute
	{

		constructor(name?: String);
		constructor(name?: String, values?: String[]);
	}

	interface LdapClient
	{

	}

	declare const LdapClient: LdapClient;

	interface LdapClientFactory
	{

	}

	declare const LdapClientFactory: LdapClientFactory;

	interface LdapDeleteRequest
	{

	}

	declare const LdapDeleteRequest: LdapDeleteRequest;

	interface LdapDereferencePolicy
	{
		readonly ALWAYS: LdapDereferencePolicy;
		readonly FINDING: LdapDereferencePolicy;
		readonly NEVER: LdapDereferencePolicy;
		readonly SEARCHING: LdapDereferencePolicy;

	}

	interface LdapDereferencePolicyConstructor {
		new(value?:any): LdapDereferencePolicy;
		readonly prototype: LdapDereferencePolicy;
	}

	declare const LdapDereferencePolicy: LdapDereferencePolicyConstructor;

	interface LdapDN
	{

		equals(dn?: LdapDN): boolean;
		static fromParentDn(rdn?: LdapRDN, parentDN?: LdapDN): LdapRDN;
		static fromRdns(rdns?: LdapRDN[]): LdapRDN;
		static fromString(dnString?: String): LdapRDN;
		getParent(): LdapDN;
		getParentString(): String;
		getRDN(): LdapRDN;
		getRDNs(): LdapRDN[];
		getRDNString(): String;
		getRDNStrings(): Strings[];
		isAncestorOf(): boolean;
		isNullDN(): boolean;
		toNormalizedString(): String;
		toString(): String;
	}

	declare const LdapDN: LdapDN;

	declare class LdapEntry
	{

		constructor(dn?: String, values?: LdapAttribute[]);
		constructor(entryLines?: String[]);
	}

	interface LdapFilter
	{

	}

	interface LdapFilterConstructor {
		new(value?:any): LdapFilter;
		readonly prototype: LdapFilter;
		create(filterString?: String): LdapFilter;
		encodeValue(value?: String): String;
		encodeValueBytes(value?: byte[]): String;
	}

	declare const LdapFilter: LdapFilterConstructor;

	interface LdapLoadBalancingMode
	{
		readonly Failover: LdapLoadBalancingMode;
		readonly RoundRobin: LdapLoadBalancingMode;
		readonly SingleServer: LdapLoadBalancingMode;

		getValue(): String;
	}

	interface LdapLoadBalancingModeConstructor {
		new(value?:any): LdapLoadBalancingMode;
		readonly prototype: LdapLoadBalancingMode;
		fromString(value?: String): LdapLoadBalancingMode;
		getValuesAsString(): String[;
	}

	declare const LdapLoadBalancingMode: LdapLoadBalancingModeConstructor;

	declare class LdapModification
	{

		constructor(modificationType?: LdapModificationType, attributeName?: String);
		constructor(modificationType?: LdapModificationType, attributeName?: String, attributeValue?: String);
		constructor(modificationType?: LdapModificationType, attributeName?: String, attributeValues?: String[]);
		getAttributeName(): String;
		getValueByteArrays(): Object;
		getValues(): String[];
	}

	interface LdapModificationType
	{
		readonly ADD: LdapModificationType;
		readonly DELETE: LdapModificationType;
		readonly INCREMENT: LdapModificationType;
		readonly REPLACE: LdapModificationType;

	}

	declare const LdapModificationType: LdapModificationType;

	interface LdapRDN
	{

		equals(rdn?: LdapRDN): boolean;
		static fromNameValue(attributeName?: String, attributeValue?: String): LdapRDN;
		static fromString(rdnString?: String): LdapRDN;
		getAttributeNames(): String[];
		getAttributeValues(): String[];
		toNormalizedString(): String;
		toString(): String;
	}

	declare const LdapRDN: LdapRDN;

	interface LdapResult
	{

	}

	declare const LdapResult: LdapResult;

	interface LdapSearchRequest
	{

		create(baseDN?: String, filter?: String, scope?: LdapSearchScope, attributes?: String[], derefPolicy?: LdapDereferencePolicy, sizeLimit?: Number, timeLimit?: Number, typesOnly?: boolean): LdapSearchRequest;
	}

	declare const LdapSearchRequest: LdapSearchRequest;

	interface LdapSearchResult
	{

	}

	declare const LdapSearchResult: LdapSearchResult;

	interface LdapSearchResultReference
	{

	}

	declare const LdapSearchResultReference: LdapSearchResultReference;

	interface LdapSearchScope
	{
		readonly BASE: LdapSearchScope;
		readonly ONE: LdapSearchScope;
		readonly SUB: LdapSearchScope;
		readonly SUBORDINATE_SUBTREE: LdapSearchScope;

	}

	interface LdapSearchScopeConstructor {
		new(value?:any): LdapSearchScope;
		readonly prototype: LdapSearchScope;
	}

	declare const LdapSearchScope: LdapSearchScopeConstructor;

	declare class LdapSimplePagedResultsControl
	{

		constructor(pageSize?: Number, cookie?: byte[], isCritical?: boolean);
	}

	interface LdapSubtreeDeleteRequestControl
	{

	}

	interface LdapSubtreeDeleteRequestControlConstructor {
		new(value?:any): LdapSubtreeDeleteRequestControl;
		readonly prototype: LdapSubtreeDeleteRequestControl;
	}

	declare const LdapSubtreeDeleteRequestControl: LdapSubtreeDeleteRequestControlConstructor;

	interface String[
	{

	}

	declare const String[: String[;

	interface Strings
	{

	}

	declare const Strings: Strings;

    
    // Finder objects.
declare namespace AD {
	interface AdHost extends AD_Host
	{
		alternativeHosts: any;
		connectTimeoutMillis: any;
		defaultDomain: any;
		followReferrals: any;
		host: any;
		id: any;
		ldapBase: any;
		loadBalancingMode: any;
		name: any;
		port: any;
		sharedUserName: any;
		subDomainAutoConnect: any;
		url: any;
		useSharedSession: any;
		useSSL: any;

		Domain(): ActiveDirectory;
	}

	interface AdHostConstructor {
		new(value?:any): AdHost;
		readonly prototype: AdHost;
	}

	const AdHost: AdHostConstructor;

	interface AdPlugin
	{

		hosts(): AdHost;
	}

	interface AdPluginConstructor {
		new(value?:any): AdPlugin;
		readonly prototype: AdPlugin;
	}

	const AdPlugin: AdPluginConstructor;

	interface Attribute
	{
		name: any;
		value: any;

	}

	interface AttributeConstructor {
		new(value?:any): Attribute;
		readonly prototype: Attribute;
	}

	const Attribute: AttributeConstructor;

	interface ComputerAD extends AD_Computer
	{
		distinguishedName: any;
		enabled: any;
		name: any;
		objectCategory: any;
		objectCategoryName: any;

		Attribute(): Attribute;
	}

	interface ComputerADConstructor {
		new(value?:any): ComputerAD;
		readonly prototype: ComputerAD;
	}

	const ComputerAD: ComputerADConstructor;

	interface Group extends AD_Group
	{
		distinguishedName: any;
		name: any;
		objectCategory: any;
		objectCategoryName: any;

		Attribute(): Attribute;
		Computer(): ComputerAD;
		Group(): Group;
		OrganizationalUnit(): OrganizationalUnit;
		Unknown(): Unknown;
		User(): User;
		UserGroup(): UserGroup;
	}

	interface GroupConstructor {
		new(value?:any): Group;
		readonly prototype: Group;
	}

	const Group: GroupConstructor;

	interface OrganizationalUnit extends AD_OrganizationalUnit
	{
		distinguishedName: any;
		name: any;
		objectCategory: any;
		objectCategoryName: any;

		Attribute(): Attribute;
		Computer(): ComputerAD;
		Group(): Group;
		OrganizationalUnit(): OrganizationalUnit;
		Unknown(): Unknown;
		User(): User;
		UserGroup(): UserGroup;
	}

	interface OrganizationalUnitConstructor {
		new(value?:any): OrganizationalUnit;
		readonly prototype: OrganizationalUnit;
	}

	const OrganizationalUnit: OrganizationalUnitConstructor;

	interface Unknown extends AD_Unknown
	{
		distinguishedName: any;
		name: any;
		objectCategory: any;
		objectCategoryName: any;

		Attribute(): Attribute;
	}

	interface UnknownConstructor {
		new(value?:any): Unknown;
		readonly prototype: Unknown;
	}

	const Unknown: UnknownConstructor;

	interface User extends AD_User
	{
		accountName: any;
		distinguishedName: any;
		enabled: any;
		id: any;
		name: any;
		objectCategory: any;
		objectCategoryName: any;

		Attribute(): Attribute;
	}

	interface UserConstructor {
		new(value?:any): User;
		readonly prototype: User;
	}

	const User: UserConstructor;

	interface UserGroup extends AD_UserGroup
	{
		distinguishedName: any;
		id: any;
		name: any;
		objectCategory: any;
		objectCategoryName: any;

		Attribute(): Attribute;
	}

	interface UserGroupConstructor {
		new(value?:any): UserGroup;
		readonly prototype: UserGroup;
	}

	const UserGroup: UserGroupConstructor;

    }    
