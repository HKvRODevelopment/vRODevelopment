/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
	interface ConnectionManager
	{

		save(smtpHost?: String, smtpPort?: Number, username?: String, password?: String, fromAddress?: String, fromName?: String): String;
	}

	declare const ConnectionManager: ConnectionManager;

	interface EmailMessage
	{
		bccAddress: String;
		ccAddress: String;
		fromAddress: String;
		fromName: String;
		password: String;
		smtpHost: String;
		smtpPort: String;
		subject: String;
		toAddress: String;
		username: String;
		useSsl: String;
		useStartTls: String;

		addMimePart(content?: Object, mimetype?: String): void;
		getSessionProperty(key?: String): String;
		sendMessage(): void;
		setSessionProperty(key?: String, value?: String): void;
	}

	interface EmailMessageConstructor {
		new(value?:any): EmailMessage;
		readonly prototype: EmailMessage;
	}

	declare const EmailMessage: EmailMessageConstructor;

	declare class MailClient
	{

		constructor();
		close(): void;
		closeFolder(): void;
		connect(host?: String, port?: Number, username?: String, password?: String): void;
		deleteMessage(msgNumber?: String): void;
		deleteMessages(msgNumbers?: String[]): void;
		disableImapCompatibilityMode(): void;
		enableImapCompatibilityMode(): void;
		enableSSL(): void;
		expungeMessages(): ReceivedMessage[];
		getDefaultFolder(): void;
		getDeletedMessages(): ReceivedMessage[];
		getMessage(msgNumber?: String): ReceivedMessage[];
		getMessageCount(): Number;
		getMessages(): ReceivedMessage[];
		getMessagesBetween(startMsgNumber?: String, endMsgNumber?: String): ReceivedMessage[];
		getNewMessageSize(): Number;
		getRecentMessages(): ReceivedMessage[];
		getSessionProperty(key?: String): String;
		getSubFolders(): String[];
		getSubscribedSubFolders(): String[];
		getUnseenMessages(): ReceivedMessage[];
		getUserNamespaces(userName?: String): String[];
		openDefaultFolder(): void;
		openFolder(folderName?: String): void;
		searchBodyMessage(pattern?: String): ReceivedMessage[];
		searchFromAddress(pattern?: String): ReceivedMessage[];
		searchRecipientAddress(pattern?: String): ReceivedMessage[];
		searchSubjectMessage(pattern?: String): ReceivedMessage[];
		setConnectionTimeout(timeout?: Number): void;
		setMaxBodyPartSize(size?: Number): void;
		setProtocol(protocol?: String): void;
		setSessionProperty(key?: String, value?: String): void;
		setSocketTimeout(timeout?: Number): void;
	}

	interface MessageBodyPart
	{
		contentType: String;
		disposition: String;
		fileName: String;

		getAsMimeAttachment(): MimeAttachment;
		getContent(): String;
		getMultiPartContent(): MessageMultiPart;
		getSize(): Number;
		isAttachment(): boolean;
		isContentMultiPart(): boolean;
	}

	declare const MessageBodyPart: MessageBodyPart;

	interface MessageMultiPart
	{

		getBodyPart(index?: Number): MessageBodyPart;
		getPartsCount(): Number;
	}

	declare const MessageMultiPart: MessageMultiPart;

	interface ReceivedMessage
	{
		bcc: String[];
		cc: String[];
		contentType: String;
		from: String[];
		id: String;
		replyTo: String[];
		subject: String;
		to: String[];

		delete(): void;
		getContent(): String;
		getFolder(): String;
		getHeader(key?: String): String;
		getHeaders(): Properties;
		getMultiPartContent(): MessageMultiPart;
		getReceivedDate(): Date;
		getSentDate(): Date;
		isContentMultiPart(): boolean;
		isExpunged(): boolean;
	}

	declare const ReceivedMessage: ReceivedMessage;

    
            
