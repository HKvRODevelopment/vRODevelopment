/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
	interface AMQPBroker
	{
		readonly acceptAllCertificates: boolean;
		readonly displayName: String;
		readonly host: String;
		readonly id: String;
		readonly name: String;
		readonly port: int;
		readonly username: String;
		readonly useSSL: boolean;
		readonly virtualHost: String;

		bind(queue?: String, exchange?: String, props?: Object): void;
		declareExchange(exchange?: String, props?: Object): void;
		declareQueue(name?: String, props?: Object): void;
		declareQueueAndReceiveAsync(exchange?: String, routingKey?: String, timeoutSeconds?: int): Trigger;
		deleteExchange(exchange?: String): void;
		deleteQueue(queue?: String): void;
		receive(queue?: String): AMQPMessage;
		receiveAsync(queue?: String, timeoutSeconds?: int): Trigger;
		remove(): void;
		retrieveMessage(trigger?: Trigger): AMQPMessage;
		retrieveTriggerProperties(trigger?: Trigger): Properties;
		send(exchange?: String, routingKey?: String, message?: AMQPMessage): void;
		sendAndReceive(exchange?: String, routingKey?: String, requestMessage?: AMQPMessage, timeoutSeconds?: int): AMQPMessage;
		subscribe(queues?: String[], props?: Object): AMQPSubscription;
		unbind(queue?: String, exchange?: String, props?: Object): void;
		update(props?: Object): AMQPBroker;
		validate(): void;
	}

	interface AMQPBrokerConstructor {
		new(value?:any): AMQPBroker;
		readonly prototype: AMQPBroker;
	}

	declare const AMQPBroker: AMQPBrokerConstructor;

	interface AMQPBrokerManager
	{

		addBroker(props?: Object): AMQPBroker;
	}

	declare const AMQPBrokerManager: AMQPBrokerManager;

	declare class AMQPMessage
	{
		body: byte[];
		bodyAsText: String;
		encoding: String;
		headers: Properties;
		properties: Properties;

		constructor();
	}

	interface AMQPSubscription
	{
		readonly displayName: String;
		id: String;
		readonly name: String;
		readonly queues: String[];

		remove(): void;
		removeAndDeleteQueues(): void;
		retrieveLastOnMessageTrigger(): Properties;
		retrieveMessage(trigger?: EventTrigger): AMQPMessage;
	}

	interface AMQPSubscriptionConstructor {
		new(value?:any): AMQPSubscription;
		readonly prototype: AMQPSubscription;
	}

	declare const AMQPSubscription: AMQPSubscriptionConstructor;

	interface EventTrigger
	{

	}

	declare const EventTrigger: EventTrigger;

    
    // Finder objects.
declare namespace AMQP {
	interface Broker extends AMQPBroker
	{
		readonly acceptAllCertificates: any;
		readonly displayName: any;
		readonly host: any;
		readonly id: any;
		readonly name: any;
		readonly port: any;
		readonly username: any;
		readonly useSSL: any;
		readonly virtualHost: any;

		subscriptions(): Subscription;
	}

	interface BrokerConstructor {
		new(value?:any): Broker;
		readonly prototype: Broker;
	}

	const Broker: BrokerConstructor;

	interface Root
	{

		brokers(): Broker;
	}

	interface RootConstructor {
		new(value?:any): Root;
		readonly prototype: Root;
	}

	const Root: RootConstructor;

	interface Subscription extends AMQPSubscription
	{
		readonly displayName: any;
		id: any;
		readonly name: any;
		readonly queues: any;

	}

	interface SubscriptionConstructor {
		new(value?:any): Subscription;
		readonly prototype: Subscription;
	}

	const Subscription: SubscriptionConstructor;

    }    
