CREATE TABLE DefinitionIdentityTable (
  SurrogateIdentityId integer not null,
  DefinitionIdentityHash raw(16) NOT NULL,
  DIARevisionHash  raw(16) NOT NULL,
  Name varchar(4000)  NULL,
  Package varchar(4000) NULL,
  Build integer NULL,
  Major integer NULL,
  Minor integer NULL,
  Revision integer NULL
);

create unique index IX_DefinitionIdentityTable on DefinitionIdentityTable (DefinitionIdentityHash);

create sequence seq_DefinitionIdentityTable;

insert into DefinitionIdentityTable
	(
                SurrogateIdentityId,
		DefinitionIdentityHash,
		DIARevisionHash,
		Name,
		Package,
		Build,
		Major,
		Minor,
		Revision
	)
	values
	(
                seq_DefinitionIdentityTable.nextval,
		'00000000000000000000000000000000',
		'00000000000000000000000000000000',
		null,
		null,
		null,
		null,
		null,
		null
	);

create table IdentityOwnerTable
	(
		SurrogateIdentityId integer not null,
		SurrogateLockOwnerId integer not null
	);

ALTER TABLE InstancesTable ADD SurrogateIdentityId INTEGER;
UPDATE	InstancesTable SET SurrogateIdentityId = (SELECT	SurrogateIdentityId FROM	DefinitionIdentityTable 
                                                  WHERE	DefinitionIdentityHash = '00000000000000000000000000000000'
	                                                AND		DIARevisionHash = '00000000000000000000000000000000'
	                                                AND		Name IS NULL
		                                        AND		Package IS NULL
			                                AND		Build IS NULL
			                                AND		Major IS NULL
			                                AND		Minor IS NULL
			                                AND		Revision IS NULL)
WHERE	SurrogateIdentityId IS NULL;
ALTER TABLE InstancesTable MODIFY SurrogateIdentityId INTEGER NOT NULL;

ALTER TABLE RunnableInstancesTable ADD SurrogateIdentityId INTEGER;
UPDATE	RunnableInstancesTable SET SurrogateIdentityId = (SELECT	SurrogateIdentityId FROM	DefinitionIdentityTable 
                                                  WHERE	DefinitionIdentityHash = '00000000000000000000000000000000'
	                                                AND		DIARevisionHash = '00000000000000000000000000000000'
	                                                AND		Name IS NULL
		                                        AND		Package IS NULL
			                                AND		Build IS NULL
			                                AND		Major IS NULL
			                                AND		Minor IS NULL
			                                AND		Revision IS NULL)
WHERE	SurrogateIdentityId IS NULL;
ALTER TABLE RunnableInstancesTable MODIFY SurrogateIdentityId INTEGER NOT NULL;

ALTER TABLE LockOwnersTable ADD WorkflowIdentityFilter NUMBER(3);
UPDATE	LockOwnersTable SET WorkflowIdentityFilter = 0 WHERE	WorkflowIdentityFilter IS NULL;
ALTER TABLE LockOwnersTable MODIFY WorkflowIdentityFilter NUMBER(3) NOT NULL;