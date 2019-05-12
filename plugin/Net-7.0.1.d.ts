/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
	declare class FTPClient
	{
		connectTimeout: Number;
		cwd: String;
		output: String;
		replyCode: String;
		soLinger: Number;
		state: String;
		tcpNoDelay: boolean;
		timeout: Number;

		constructor();
		connect(host?: String, port?: Number): void;
		disconnect(): void;
		enableSSL(on?: boolean): void;
		executeCommand(cmd?: String, args?: String): void;
		getFile(remoteFile?: String, localFile?: String): Number;
		getStatus(): String;
		getString(remoteFile?: String): String;
		isAvailable(): boolean;
		isConnected(): boolean;
		listAll(basePath?: String): String[];
		listDir(basePath?: String): String[];
		listFile(basePath?: String): String[];
		login(username?: String, password?: String, account?: String): void;
		putFile(localFile?: String, remoteFile?: String): Number;
		putString(content?: String, remoteFile?: String): Number;
	}

	declare class IMAPClient
	{
		connectTimeout: Number;
		output: String;
		soLinger: Number;
		state: String;
		tcpNoDelay: boolean;
		timeout: Number;

		constructor();
		append(mailboxName?: String): boolean;
		appendWithOptions(mailboxName?: String, flags?: String, datetime?: String): boolean;
		capability(): boolean;
		check(): boolean;
		close(): boolean;
		connect(host?: String, port?: Number): void;
		copy(sequenceSet?: String, mailboxName?: String): boolean;
		create(mailboxName?: String): boolean;
		delete(mailboxName?: String): boolean;
		disconnect(): void;
		enableSSL(on?: boolean): void;
		examine(mailboxName?: String): boolean;
		expunge(): boolean;
		fetch(sequenceSet?: String, itemNames?: String): boolean;
		getReply(): String;
		getReplyLines(): String[];
		isAvailable(): boolean;
		isConnected(): boolean;
		list(refName?: String, mailboxName?: String): boolean;
		login(username?: String, password?: String): boolean;
		logout(): boolean;
		lsub(refName?: String, mailboxName?: String): boolean;
		noop(): void;
		rename(oldMailboxName?: String, newMailboxName?: String): boolean;
		search(criteria?: String): boolean;
		searchCharset(charset?: String, criteria?: String): boolean;
		select(mailboxName?: String): boolean;
		status(mailboxName?: String, itemNames?: String[]): boolean;
		store(sequenceSet?: String, itemNames?: String, itemValues?: String): boolean;
		subscribe(mailboxName?: String): boolean;
		uid(command?: String, command?: String): boolean;
		unsubscribe(mailboxName?: String): boolean;
	}

	declare class POP3Client
	{
		connectTimeout: Number;
		output: String;
		soLinger: Number;
		state: String;
		tcpNoDelay: boolean;
		timeout: Number;

		constructor();
		connect(host?: String, port?: Number): void;
		disconnect(): void;
		enableSSL(on?: boolean): void;
		isAvailable(): boolean;
		isConnected(): boolean;
		listMessages(): void;
		login(username?: String, password?: String): void;
		loginWithSecret(username?: String, timestamp?: String, secret?: String): void;
		logout(): void;
		noop(): void;
		reset(): void;
	}

	interface POP3Message
	{
		body: String;
		from: String;
		id: String;
		size: String;
		subject: String;
		to: String;

		deleteFromServer(): void;
		getHeader(key?: String): void;
	}

	declare const POP3Message: POP3Message;

	declare class TelnetClient
	{
		connectTimeout: Number;
		soLinger: Number;
		tcpNoDelay: boolean;
		timeout: Number;

		constructor(terminal?: String);
		connect(host?: String, port?: Number): void;
		disconnect(): void;
		enableSSL(on?: boolean): void;
		isAvailable(): boolean;
		isConnected(): boolean;
		receiveAsBinary(): void;
		receiveAsString(): void;
		sendBinary(val?: Object[]): void;
		sendString(oid?: String): void;
		waitForData(timeout?: Number): void;
	}

    
            
