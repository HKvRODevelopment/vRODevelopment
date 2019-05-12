/// <reference path="Intrinsics-1.0.0.d.ts"/>


  
    // Regular classes.  
	interface Connection
	{

		close(): void;
		createStatement(): void;
		prepareCall(): void;
		prepareStatement(): void;
	}

	declare const Connection: Connection;

	interface JDBCConnection
	{

		getConnection(): void;
	}

	interface JDBCConnectionConstructor {
		new(value?:any): JDBCConnection;
		readonly prototype: JDBCConnection;
	}

	declare const JDBCConnection: JDBCConnectionConstructor;

	interface PreparedStatement
	{

		execute(): void;
		executeQuery(): void;
		executeUpdate(): void;
		getInt(parameterIndex?: Number): void;
		getString(parameterIndex ?: Number): void;
		registerOutParameter(parameterIndex?: Number, sqlType?: Number): void;
		setDate(parameterIndex?: Number, x?: Object): void;
		setString(parameterIndex?: Number, x?: Object): void;
		setTimestamp(parameterIndex?: Number, x?: Object): void;
	}

	declare const PreparedStatement: PreparedStatement;

	interface ResultSet
	{

		afterLast(): void;
		beforeFirst(): void;
		first(): void;
		getDate(columnName?: String): void;
		getDateAt(columnIndex?: Number): void;
		getMetaData(): void;
		getNumber(columnName?: String): void;
		getNumberAt(columnIndex?: Number): void;
		getString(columnName?: String): void;
		getStringAt(columnIndex?: Number): void;
		getTimestamp(columnName?: String): void;
		getTimestampAt(columnIndex?: Number): void;
		last(): void;
		next(): void;
		previous(): void;
		wasNull(): void;
	}

	declare const ResultSet: ResultSet;

	interface ResultSetMetaData
	{

		getColumnCount(): void;
		getColumnName(index?: Number): void;
		getTableName(index?: Number): void;
	}

	declare const ResultSetMetaData: ResultSetMetaData;

	interface SQLActiveRecord
	{

		getFieldNames(): String[];
		getProperty(property?: String): Object;
	}

	interface SQLActiveRecordConstructor {
		new(value?:any): SQLActiveRecord;
		readonly prototype: SQLActiveRecord;
	}

	declare const SQLActiveRecord: SQLActiveRecordConstructor;

	interface SQLColumn
	{
		mandatory: boolean;
		name: String;
		table: SQLTable;
		typeId: int;
		typeName: String;

	}

	interface SQLColumnConstructor {
		new(value?:any): SQLColumn;
		readonly prototype: SQLColumn;
	}

	declare const SQLColumn: SQLColumnConstructor;

	interface SQLDatabase
	{
		connectionURL: String;
		id: String;
		name: String;
		password: String;
		sessionMode: String;
		type: String;
		username: String;

		executeCustomQuery(customQuery?: String): int;
		getAllTableNames(): String[];
		getMappedTableNames(): String[];
		getTables(): SQLTable[];
		getUnmappedTableNames(): String[];
		readCustomQuery(customQuery?: String): SQLActiveRecord[];
	}

	interface SQLDatabaseConstructor {
		new(value?:any): SQLDatabase;
		readonly prototype: SQLDatabase;
	}

	declare const SQLDatabase: SQLDatabaseConstructor;

	interface SQLDatabaseManager
	{

		addDatabase(item?: SQLDatabase): SQLDatabase;
		addTablesToDatabase(database?: SQLDatabase, tableNames?: String[]): SQLTable[];
		convertBooleanForPresentation(source?: String): String;
		generateCreateWorkflow(table?: SQLTable, category?: WorkflowCategory, overwriteWorkflow?: boolean, readOnlyColumns?: SQLColumn[]): Workflow;
		generateDeleteWorkflow(table?: SQLTable, category?: WorkflowCategory, overwriteWorkflow?: boolean): Workflow;
		generateReadWorkflow(table?: SQLTable, category?: WorkflowCategory, overwriteWorkflow?: boolean): Workflow;
		generateUpdateWorkflow(table?: SQLTable, category?: WorkflowCategory, overwriteWorkflow?: boolean, readOnlyColumns?: SQLColumn[]): Workflow;
		getConnectionUrl(existing?: String, type?: String): String;
		getDatabase(name?: String): SQLDatabase;
		getDatabaseById(id?: String): SQLDatabase;
		getDatabases(): SQLDatabase[];
		getSupportedDatabaseTypes(): String[];
		isValidNumberOrEmpty(source?: Object): boolean;
		removeDatabase(item?: SQLDatabase): SQLDatabase;
		removeTableFromDatabase(table?: SQLTable): SQLTable;
		updateDatabase(item?: SQLDatabase): SQLDatabase;
		validateDatabase(database?: SQLDatabase): void;
	}

	declare const SQLDatabaseManager: SQLDatabaseManager;

	interface SQLTable
	{
		database: SQLDatabase;
		name: String;

		createRecord(keyColumns?: Object, validateUnique?: boolean): SQLActiveRecord;
		deleteRecords(columns?: Object, validateUnique?: boolean): Integer;
		findUniqueRecord(example?: Object[]): SQLActiveRecord;
		getColumns(): String[];
		readRecords(columns?: Object, validateUnique?: boolean): SQLActiveRecord[];
		updateRecord(record?: SQLActiveRecord, values?: Object): Integer;
	}

	interface SQLTableConstructor {
		new(value?:any): SQLTable;
		readonly prototype: SQLTable;
	}

	declare const SQLTable: SQLTableConstructor;

    
    // Finder objects.
declare namespace SQL {
	interface ActiveRecord extends SQLActiveRecord
	{

	}

	interface ActiveRecordConstructor {
		new(value?:any): ActiveRecord;
		readonly prototype: ActiveRecord;
	}

	const ActiveRecord: ActiveRecordConstructor;

	interface Column extends SQLColumn
	{
		mandatory: any;
		name: any;
		table: any;
		typeName: any;

	}

	interface ColumnConstructor {
		new(value?:any): Column;
		readonly prototype: Column;
	}

	const Column: ColumnConstructor;

	interface Database extends SQLDatabase
	{
		connectionURL: any;
		name: any;
		password: any;
		sessionMode: any;
		type: any;
		username: any;

		Table(): Table;
	}

	interface DatabaseConstructor {
		new(value?:any): Database;
		readonly prototype: Database;
	}

	const Database: DatabaseConstructor;

	interface Table extends SQLTable
	{
		database: any;
		name: any;

		Column(): Column;
	}

	interface TableConstructor {
		new(value?:any): Table;
		readonly prototype: Table;
	}

	const Table: TableConstructor;

    }    
