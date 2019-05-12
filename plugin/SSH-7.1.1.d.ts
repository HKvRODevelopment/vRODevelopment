/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
	interface KeyPairManager
	{

		static changePassphrase(path?: Path, oldPasspharse?: SecureString, newPassphrase?: SecureString): void;
		static generateKeyPair(type?: String, path?: Path, passphrase?: SecureString, keySize?: Number, comment?: String): String;
	}

	declare const KeyPairManager: KeyPairManager;

	declare class SSHCommand
	{
		cmd: String;
		error: String;
		exitCode: String;
		output: String;
		state: String;

		constructor(host?: String, username?: String, password?: SecureString);
		constructor(host?: String, username?: String, password?: String, port?: Number);
		disconnect(): void;
		execute(): void;
		executeAndLog(file?: String): void;
		executeCommand(cmd?: String, wait?: boolean): void;
		findAll(basePath?: String, pattern?: String): String[];
		findDir(basePath?: String, pattern?: String): String[];
		findFile(basePath?: String, pattern?: String): String[];
		getEncoding(): Object;
		getFile(remoteFile?: String, localFile?: String): Number;
		listAll(basePath?: String): String[];
		listDir(basePath?: String): String[];
		listFile(basePath?: String): String[];
		putFile(localFile?: String, remoteFile?: String): Number;
		setEncoding(encoding?: String): void;
	}

	interface SSHFile
	{

	}

	declare const SSHFile: SSHFile;

	interface SSHFolder
	{

	}

	declare const SSHFolder: SSHFolder;

	interface SSHHost
	{
		displayName: String;
		hostname: String;
		id: String;
		port: Number;
		rootFolders: String[];
		sshHostConfiguration: SSHHostConfiguration;
		username: String;

	}

	interface SSHHostConstructor {
		new(value?:any): SSHHost;
		readonly prototype: SSHHost;
	}

	declare const SSHHost: SSHHostConstructor;

	declare class SSHHostConfiguration
	{
		certificatePath: String;
		hostname: String;
		id: String;
		passphrase: SecureString;
		password: SecureString;
		passwordAuthentication: boolean;
		port: Number;
		rootFolders: String[];
		username: String;

		constructor();
	}

	interface SSHHostManager
	{

		addRootFolderToHost(sshHost?: SSHHost, rootFolder?: String): SSHHost;
		addSshHost(config?: SSHHostConfiguration): SSHHost;
		getSshHost(id?: String): SSHHost;
		getSshHosts(): SSHHost[];
		removeRootFolderFromHost(sshHost?: SSHHost, rootFolder?: String): SSHHost;
		removeSshHost(host?: SSHHost): void;
		updateSshHost(sshHost?: SSHHost, sourceConfig?: SSHHostConfiguration): SSHHost;
	}

	declare const SSHHostManager: SSHHostManager;

	declare class SSHSession
	{
		cmd: String;
		error: String;
		exitCode: String;
		output: String;
		pty: String;
		soTimeout: String;
		state: String;
		terminal: String;

		constructor(host?: String, username?: String);
		constructor(host?: String, username?: String, port?: Number);
		addEnvironment(key?: String, value?: String): void;
		connectWithIdentidy(privateKeyPath?: Path, passphrase?: SecureString): void;
		connectWithIdentity(privateKeyPath?: Path, passphrase?: SecureString): void;
		connectWithPassword(password?: SecureString): void;
		connectWithPasswordOrIdentity(isPassword?: boolean, password?: SecureString, privateKeyPath?: Path): void;
		disconnect(): void;
		execute(): void;
		executeAndLog(file?: Path): void;
		executeCommand(cmd?: String, wait?: boolean): void;
		findAll(basePath?: Path, pattern?: String): String[];
		findDir(basePath?: Path, pattern?: String): String[];
		findFile(basePath?: Path, pattern?: String): String[];
		getEncoding(): Object;
		getFile(remoteFile?: Path, localFile?: Path): Number;
		listAll(basePath?: Path): String[];
		listDir(basePath?: Path): String[];
		listFile(basePath?: Path): String[];
		putFile(localFile?: Path, remoteFile?: Path): Number;
		setEncoding(encoding?: String): void;
		setUserInfo(userInfo?: Object): void;
	}

    
    // Finder objects.
declare namespace SSH {
	interface File extends SSHFile
	{
		hostname: any;
		name: any;
		path: any;
		port: any;

	}

	interface FileConstructor {
		new(value?:any): File;
		readonly prototype: File;
	}

	const File: FileConstructor;

	interface Folder extends SSHFolder
	{
		hostname: any;
		name: any;
		path: any;
		port: any;

		files(): File;
		folders(): Folder;
	}

	interface FolderConstructor {
		new(value?:any): Folder;
		readonly prototype: Folder;
	}

	const Folder: FolderConstructor;

	interface Host extends SSHHost
	{
		displayName: any;
		hostname: any;
		id: any;
		port: any;
		rootFolders: any;
		sshHostConfiguration: any;
		username: any;

		rootFolders(): RootFolder;
	}

	interface HostConstructor {
		new(value?:any): Host;
		readonly prototype: Host;
	}

	const Host: HostConstructor;

	interface RootFolder extends SSHFolder
	{
		name: any;

		files(): File;
		folders(): Folder;
	}

	interface RootFolderConstructor {
		new(value?:any): RootFolder;
		readonly prototype: RootFolder;
	}

	const RootFolder: RootFolderConstructor;

    }    
