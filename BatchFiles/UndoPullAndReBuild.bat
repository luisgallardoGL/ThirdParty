rem this batch files pull all repos based on given branch or default branch and rebuilds them
@ECHO OFF
set ORIGINAL_DIR=%CD%
set undoChanges=0
set switchBranch=0
set newBranch=""
set pullAll=0
set noBuild=0
set help=0

:Loop

IF "%1"=="" ( 
	GOTO Continue
	)
IF "%1"=="-u" ( 	
	SET undoChanges=1
	)
IF "%1"=="-b" (
	SET switchBranch=1
	SET newBranch="%2"
	SHIFT
	)
IF "%1"=="-p" (
	SET pullAll=1
	)
IF "%1"=="-nb" (
	SET noBuild=1
)
IF "%1"=="-h" (
	SET help=1
)
SHIFT
GOTO Loop
:Continue

IF %help%==1 (
	ECHO.
	ECHO Usage: run from /ThirdParty/BatchFiles/
	ECHO UndoPullAndRebuild.bat -u -p -b develop
	ECHO All parameters are optional, without parameters script will just build all projects in order
	ECHO -u = undo all changes 
	ECHO -p = pull from current branch for every repo
	ECHO -b branchName = switch branch to branchName for every repo
	ECHO -nb = no build, in case you want to only pull and undo
	ECHO.
	goto :Exit
) 

ECHO NoBuild: %noBuild%, Undo: %undoChanges%, switch: %switchBranch%, newBranch: %newBranch%, pull: %pullAll%

pushd ..\..
if not defined DevEnvDir (
	if exist "%PROGRAMFILES(X86)%\Microsoft Visual Studio\2017\Community\Common7\Tools\VsDevCmd.bat" goto :SET2017
	if exist "%PROGRAMFILES(X86)%\Microsoft Visual Studio 14.0\Common7\Tools\VsDevCmd.bat" goto :SET2015
	if exist "%PROGRAMFILES(X86)%\Microsoft Visual Studio 12.0\Common7\Tools\\VsDevCmd.bat" goto :SET2013

	:SET2017
	CALL "C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\Common7\Tools\VsDevCmd.bat"
	goto :CurrentBranches

	:SET2015
	CALL "C:\Program Files (x86)\Microsoft Visual Studio 14.0\Common7\Tools\VsDevCmd.bat"
	goto :CurrentBranches

	:SET2013
	CALL "C:\Program Files (x86)\Microsoft Visual Studio 12.0\Common7\Tools\VsDevCmd.bat"
	goto :CurrentBranches
)

:CurrentBranches
echo CURRENT BRANCHES

pushd DataProviders
for /f "delims=" %%i in ('git rev-parse --abbrev-ref HEAD') do set branch=%%i
echo DataProviders:  %branch%
popd
ECHO.
pushd Common
for /f "delims=" %%i in ('git rev-parse --abbrev-ref HEAD') do set branch=%%i
echo Common:         %branch%
popd
ECHO.
pushd Capella-API_V2
for /f "delims=" %%i in ('git rev-parse --abbrev-ref HEAD') do set branch=%%i
echo Capella-API_V2: %branch%
popd
ECHO.
pushd Capella
for /f "delims=" %%i in ('git rev-parse --abbrev-ref HEAD') do set branch=%%i
echo Capella:        %branch%
popd
ECHO.
pushd Capella-UI
for /f "delims=" %%i in ('git rev-parse --abbrev-ref HEAD') do set branch=%%i
echo Capella-UI:        %branch%
popd
ECHO.

if %undoChanges% == 1 (
   ECHO.
   echo *THIS WILL UNDO CHANGES ON ALL BRANCHES*
) 
if %undoChanges% == 0 ( goto :SwitchBranch )
ECHO.

pushd DataProviders
ECHO Undoing DataProviders Changes..
   git reset --hard
   git checkout .
popd
ECHO.

pushd Common
ECHO Undoing Common Changes..
   git reset --hard
   git checkout .
popd
ECHO.

pushd Capella-API_V2
ECHO Undoing Capella-API_V2 Changes..
   git reset --hard
   git checkout .
popd
ECHO.

pushd Capella
ECHO Undoing Capella Changes..
   git reset --hard
   git checkout .
popd
ECHO.

pushd Capella-UI
ECHO Undoing Capella-UI Changes..
   git reset --hard
   git checkout .
popd
ECHO.


:SwitchBranch
IF %switchBranch%==1 (
	goto :ChangeBranch
	) 
IF %switchBranch%==0 ( goto :Pull )
ECHO.
:ChangeBranch

ECHO Switching to %newBranch%
ECHO.


pushd DataProviders
ECHO Switching DataProviders
git fetch
git checkout %newBranch%
popd
ECHO.

pushd Common
ECHO Switching Common
git fetch
git checkout %newBranch%
popd
ECHO.

pushd Capella-API_V2
ECHO Switching Capella-API_V2
git fetch
git checkout %newBranch%
popd
ECHO.

pushd Capella
ECHO Switching Capella
git fetch
git checkout %newBranch%
popd
ECHO.

pushd Capella-UI
ECHO Switching Capella-UI
git fetch
git checkout %newBranch%
popd
ECHO.

:Pull
IF %pullAll%==1 (
	goto :Pull2
	)
IF %pullAll%==0 ( 
	goto :ReBuild
	)
ECHO.



:Pull2
pushd DataProviders
ECHO Pulling DataProviders
git pull
if not %errorlevel% == 0 ( goto :Error )
popd
ECHO.

pushd Common
ECHO Pulling Common
git pull
if not %errorlevel% == 0 ( goto :Error )
popd
ECHO.

pushd Capella-API_V2
ECHO Pulling Capella-API_V2
git pull
if not %errorlevel% == 0 ( goto :Error )
popd
ECHO.

pushd Capella
ECHO Pulling Capella
git pull
if not %errorlevel% == 0 ( goto :Error )
popd
ECHO.

pushd Capella-UI
ECHO Pulling Capella-UI
git pull
if not %errorlevel% == 0 ( goto :Error )
popd
ECHO.

IF %noBuild%==1 (
	GOTO :Exit
)
:ReBuild
pushd DataProviders
ECHO Building DataProviders...
nuget restore DataProviders.sln -Verbosity quiet
msbuild DataProviders.sln /m /t:rebuild /verbosity:quiet /p:Configuration=Debug_Sandbox /p:WarningLevel=0 /clp:ErrorsOnly /nologo
if not %errorlevel% == 0 (
   goto :Error
) else (
	ECHO Done.
)
popd
ECHO ***********************************************
ECHO.

pushd Common
ECHO Building Common...
nuget restore Common.sln -Verbosity quiet
msbuild Common.sln /m /t:rebuild /verbosity:quiet /p:Configuration=Debug_Sandbox /p:WarningLevel=0 /clp:ErrorsOnly /nologo
if not %errorlevel% == 0 (
   goto :Error
) else (
	ECHO Done.
)
popd
ECHO ***********************************************
ECHO.

pushd Capella-API_V2
ECHO Building Capella-API_V2...
nuget restore CapellaMobileServices.sln -Verbosity quiet
msbuild CapellaMobileServices.sln /m /t:rebuild /verbosity:quiet /p:Configuration=Debug_Sandbox /p:WarningLevel=0 /clp:ErrorsOnly /nologo
if not %errorlevel% == 0 (
	goto :Error
) else (
	ECHO Done.
)
popd
ECHO ***********************************************
ECHO.

pushd Capella
pushd Domain
ECHO Building Domain...
nuget restore Domain.sln -Verbosity quiet
msbuild Domain.sln /m /t:rebuild /verbosity:quiet /p:Configuration=Debug_Sandbox /p:WarningLevel=0 /clp:ErrorsOnly /nologo
if not %errorlevel% == 0 (
   goto :Error
) else (
	ECHO Done.
)
popd
ECHO ***********************************************
ECHO.

pushd Services
ECHO Building Services...
nuget restore Services.sln -Verbosity quiet
msbuild Services.sln /m /t:rebuild /verbosity:quiet /p:Configuration=Debug_Sandbox /p:WarningLevel=0 /clp:ErrorsOnly /nologo
if not %errorlevel% == 0 (
   goto :Error
) else (
	ECHO Done.
)
popd
ECHO ***********************************************
ECHO.

pushd UI
ECHO Building FireflyUI...
nuget restore UI.sln -Verbosity quiet
msbuild UI.sln /m /t:rebuild /verbosity:quiet /p:Configuration=Debug_Sandbox /p:WarningLevel=0 /clp:ErrorsOnly /nologo
if not %errorlevel% == 0 (
   goto :Error
) else (
	ECHO Done.
)
popd
popd
ECHO ***********************************************
ECHO.

pushd Capella-UI
ECHO Building Capella-UI...
nuget restore CapellaUI.sln -Verbosity quiet
msbuild CapellaUI.sln /m /t:rebuild /verbosity:quiet /p:Configuration=Debug_Sandbox /p:WarningLevel=0 /clp:ErrorsOnly /nologo
if not %errorlevel% == 0 (
   goto :Error
) else (
	ECHO Done.
	goto :Exit
)
popd
ECHO ***********************************************
ECHO.


:Error
echo Error level given is %errorlevel%
chdir /d %ORIGINAL_DIR% 
exit /b %errorlevel%

:Exit
chdir /d %ORIGINAL_DIR% 
echo Completed.