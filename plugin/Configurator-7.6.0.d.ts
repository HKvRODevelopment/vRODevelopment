/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
declare module ch.dunes.util
{
	export interface Holder
	{

	}


}
declare module com.vmware.o11n.plugins.configurator.actions
{
	export interface AddCertificateToKeystoreAction
	{

	}


}
declare module com.vmware.o11n.plugins.configurator.actions
{
	export interface AddEntryToKeystoreAction
	{

	}


}
declare module com.vmware.o11n.plugins.configurator.actions
{
	export interface CreateKeystoreAction
	{

	}


}
declare module com.vmware.o11n.plugins.configurator.actions
{
	export interface DeleteEntryFromKeystoreAction
	{

	}


}
declare module com.vmware.o11n.plugins.configurator.actions
{
	export interface DeleteKeystoreAction
	{

	}


}
	interface Config
	{
		readonly displayName: String;
		readonly id: String;

		getKeystores(): ConfiguratorKeystores;
	}

	declare const Config: Config;

	interface ConfigConnectionValidator
	{

		createHttpProxy(host?: String, port?: int): java.net.Proxy;
		validateConnection(host?: String, port?: int, ssl?: boolean): String;
		validateConnectionUrl(url?: java.net.URL): String;
		validateConnectionWithProxy(url?: java.net.URL, proxy?: java.net.Proxy): String;
	}

	declare const ConfigConnectionValidator: ConfigConnectionValidator;

	interface ConfiguratorCertChainValidatorResult
	{

	}

	declare const ConfiguratorCertChainValidatorResult: ConfiguratorCertChainValidatorResult;

	interface ConfiguratorCertificate
	{
		readonly displayName: String;
		readonly id: String;
		issuerCn: String;
		issuerO: String;
		issuerOU: String;
		sigAlgName: String;
		sigAlgOID: String;
		subjectCn: String;
		subjectO: String;
		subjectOU: String;
		version: int;

	}

	interface ConfiguratorCertificateConstructor {
		new(value?:any): ConfiguratorCertificate;
		readonly prototype: ConfiguratorCertificate;
	}

	declare const ConfiguratorCertificate: ConfiguratorCertificateConstructor;

	interface ConfiguratorDeleteCAAction
	{

	}

	interface ConfiguratorDeleteCAActionConstructor {
		new(value?:any): ConfiguratorDeleteCAAction;
		readonly prototype: ConfiguratorDeleteCAAction;
	}

	declare const ConfiguratorDeleteCAAction: ConfiguratorDeleteCAActionConstructor;

	interface ConfiguratorImportCAFromUrlAction
	{

		execute(): String;
		getCertInfo(): String;
		getModel(): ch.dunes.util.Holder;
		getProxyHost(): ch.dunes.util.Holder;
		getProxyPassword(): ch.dunes.util.Holder;
		getProxyPort(): ch.dunes.util.Holder;
		getProxyUsername(): ch.dunes.util.Holder;
		setCertificateAlias(certAlias?: String): void;
		validate(): String;
		validateCertificates(): ConfiguratorCertChainValidatorResult;
	}

	interface ConfiguratorImportCAFromUrlActionConstructor {
		new(value?:any): ConfiguratorImportCAFromUrlAction;
		readonly prototype: ConfiguratorImportCAFromUrlAction;
	}

	declare const ConfiguratorImportCAFromUrlAction: ConfiguratorImportCAFromUrlActionConstructor;

	interface ConfiguratorImportFromCerAction
	{

		execute(): String;
		getModel(): MimeAttachment;
		validate(): String;
	}

	interface ConfiguratorImportFromCerActionConstructor {
		new(value?:any): ConfiguratorImportFromCerAction;
		readonly prototype: ConfiguratorImportFromCerAction;
	}

	declare const ConfiguratorImportFromCerAction: ConfiguratorImportFromCerActionConstructor;

	interface ConfiguratorKey
	{
		readonly displayName: String;
		readonly id: String;
		issuerCn: String;
		issuerO: String;
		issuerOU: String;
		sigAlgName: String;
		sigAlgOID: String;
		subjectCn: String;
		subjectO: String;
		subjectOU: String;
		version: int;

	}

	interface ConfiguratorKeyConstructor {
		new(value?:any): ConfiguratorKey;
		readonly prototype: ConfiguratorKey;
	}

	declare const ConfiguratorKey: ConfiguratorKeyConstructor;

	interface ConfiguratorKeystore
	{
		readonly displayName: String;
		readonly id: String;

		getAddCertificateToKeystoreAction(): com.vmware.o11n.plugins.configurator.actions.AddCertificateToKeystoreAction;
		getAddEntryToKeystoreAction(): com.vmware.o11n.plugins.configurator.actions.AddEntryToKeystoreAction;
		getCAs(): ConfiguratorCertificate[];
		getDeleteEntryFromKeystoreAction(): com.vmware.o11n.plugins.configurator.actions.DeleteEntryFromKeystoreAction;
		getKeys(): ConfiguratorKey[];
	}

	interface ConfiguratorKeystoreConstructor {
		new(value?:any): ConfiguratorKeystore;
		readonly prototype: ConfiguratorKeystore;
	}

	declare const ConfiguratorKeystore: ConfiguratorKeystoreConstructor;

	interface ConfiguratorKeystores
	{
		readonly displayName: String;
		readonly id: String;

		getCreateKeystoreAction(): com.vmware.o11n.plugins.configurator.actions.CreateKeystoreAction;
		getDeleteCAAction(): ConfiguratorDeleteCAAction;
		getDeleteKeystoreAction(): com.vmware.o11n.plugins.configurator.actions.DeleteKeystoreAction;
		getImportCAFromUrlAction(): ConfiguratorImportCAFromUrlAction;
		getImportFromCerAction(): ConfiguratorImportFromCerAction;
		getKeystores(): ConfiguratorKeystore[];
	}

	declare const ConfiguratorKeystores: ConfiguratorKeystores;

declare module java.net
{
	export interface Proxy
	{

	}


}
declare module java.net
{
	export interface URL
	{

	}


}
    
    // Finder objects.
declare namespace Configurator {
	interface CA extends ConfiguratorCertificate
	{
		readonly displayName: any;
		readonly id: any;
		issuerCn: any;
		issuerO: any;
		issuerOU: any;
		sigAlgName: any;
		sigAlgOID: any;
		subjectCn: any;
		subjectO: any;
		subjectOU: any;
		version: any;

	}

	interface CAConstructor {
		new(value?:any): CA;
		readonly prototype: CA;
	}

	const CA: CAConstructor;

	interface Key extends ConfiguratorKey
	{
		readonly displayName: any;
		readonly id: any;
		issuerCn: any;
		issuerO: any;
		issuerOU: any;
		sigAlgName: any;
		sigAlgOID: any;
		subjectCn: any;
		subjectO: any;
		subjectOU: any;
		version: any;

	}

	interface KeyConstructor {
		new(value?:any): Key;
		readonly prototype: Key;
	}

	const Key: KeyConstructor;

	interface Keystore extends ConfiguratorKeystore
	{
		readonly displayName: any;
		readonly id: any;

		CA(): CA;
		Key(): Key;
	}

	interface KeystoreConstructor {
		new(value?:any): Keystore;
		readonly prototype: Keystore;
	}

	const Keystore: KeystoreConstructor;

	interface Keystores extends ConfiguratorKeystores
	{
		readonly displayName: any;
		readonly id: any;

		Keystore(): Keystore;
	}

	interface KeystoresConstructor {
		new(value?:any): Keystores;
		readonly prototype: Keystores;
	}

	const Keystores: KeystoresConstructor;

	interface PluginInventory extends Config
	{
		readonly displayName: any;
		readonly id: any;

		Keystores(): Keystores;
	}

	interface PluginInventoryConstructor {
		new(value?:any): PluginInventory;
		readonly prototype: PluginInventory;
	}

	const PluginInventory: PluginInventoryConstructor;

    }    
