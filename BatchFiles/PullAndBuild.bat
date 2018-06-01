rem this batch files pull all repos based on given branch or default branch and builds them
@ECHO OFF
set ORIGINAL_DIR=%CD%
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
pushd ThirdParty
for /f "delims=" %%i in ('git rev-parse --abbrev-ref HEAD') do set branch=%%i
echo ThirdParty: %branch%
popd
ECHO.
pushd DataProviders
for /f "delims=" %%i in ('git rev-parse --abbrev-ref HEAD') do set branch=%%i
echo DataProviders: %branch%
popd
ECHO.
pushd Testing
for /f "delims=" %%i in ('git rev-parse --abbrev-ref HEAD') do set branch=%%i
echo Testing: %branch%
popd
ECHO.
pushd Common
for /f "delims=" %%i in ('git rev-parse --abbrev-ref HEAD') do set branch=%%i
echo Common: %branch%
popd
ECHO.
pushd Capella-API_V2
for /f "delims=" %%i in ('git rev-parse --abbrev-ref HEAD') do set branch=%%i
echo Capella-API_V2: %branch%
popd
ECHO.
pushd Capella
for /f "delims=" %%i in ('git rev-parse --abbrev-ref HEAD') do set branch=%%i
echo Capella: %branch%
popd
ECHO.
pushd Capella-UI
for /f "delims=" %%i in ('git rev-parse --abbrev-ref HEAD') do set branch=%%i
echo Capella-UI: %branch%
popd
ECHO.
CHOICE /M "Do you want to switch branch for all repos?"
if %errorlevel% == 1 goto :ChangeBranch
if %errorlevel% == 2 goto :Pull
ECHO.
:ChangeBranch
set /p branch="Enter branch name to switch: "
ECHO %branch%

pushd ThirdParty
ECHO Switching ThirdParty
git checkout %branch%
popd
ECHO.

pushd DataProviders
ECHO Switching DataProviders
git checkout %branch%
popd
ECHO.

pushd Testing
ECHO Switching Testing
git checkout %branch%
popd
ECHO.

pushd Common
ECHO Switching Common
git checkout %branch%
popd
ECHO.

pushd Capella-API_V2
ECHO Switching Capella-API_V2
git checkout %branch%
popd
ECHO.

pushd Capella
ECHO Switching Capella
git checkout %branch%
popd
ECHO.

pushd Capella-UI
ECHO Switching Capella-UI
git checkout %branch%
popd
ECHO.

CHOICE /M "Do you want to Pull from all repos?"
if %errorlevel% == 1 goto :Pull
if %errorlevel% == 2 goto :BuildQuestion
ECHO.

:Pull
pushd ThirdParty
ECHO Pulling ThirdParty
git pull
if not %errorlevel% == 0 ( goto :Error )
popd
ECHO.

pushd DataProviders
ECHO Pulling DataProviders
git pull
if not %errorlevel% == 0 ( goto :Error )
popd
ECHO.

pushd Testing
ECHO Pulling Testing
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

:BuildQuestion
CHOICE /M "Do you want to build all repos?"
if %errorlevel% == 1 goto :Build
if %errorlevel% == 2 goto :Exit
ECHO.

:Build
pushd DataProviders
ECHO Building DataProviders...
nuget restore DataProviders.sln -Verbosity quiet
msbuild DataProviders.sln /m /t:build /verbosity:quiet /p:WarningLevel=0 /clp:ErrorsOnly /nologo
if not %errorlevel% == 0 (
   goto :Error
) else (
	ECHO Done.
)
popd
ECHO ***********************************************
ECHO.

pushd Testing
pushd Integration
ECHO Building Integration...
nuget restore Integration.sln -Verbosity quiet
msbuild Integration.sln /m /t:build /verbosity:quiet /p:WarningLevel=0 /clp:ErrorsOnly /nologo
if not %errorlevel% == 0 (
   goto :Error
) else (
	ECHO Done.
)
popd
popd
ECHO ***********************************************
ECHO.

pushd Common
ECHO Building Common...
nuget restore Common.sln -Verbosity quiet
msbuild Common.sln /m /t:build /verbosity:quiet /p:WarningLevel=0 /clp:ErrorsOnly /nologo
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
msbuild CapellaMobileServices.sln /m /t:build /verbosity:quiet /p:WarningLevel=0 /clp:ErrorsOnly /nologo
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
msbuild Domain.sln /m /t:build /verbosity:quiet /p:WarningLevel=0 /clp:ErrorsOnly /nologo
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
msbuild Services.sln /m /t:build /verbosity:quiet /p:WarningLevel=0 /clp:ErrorsOnly /nologo
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
msbuild UI.sln /m /t:build /verbosity:quiet /p:WarningLevel=0 /clp:ErrorsOnly /nologo
if not %errorlevel% == 0 (
   goto :Error
) else (
	ECHO Done.
	goto :Exit
)
popd
popd
ECHO ***********************************************
ECHO.

pushd Capella-UI
ECHO Building Capella-UI...
nuget restore CapellaUI.sln -Verbosity quies
msbuild CapellaUI.sln /m /t:build /verbosity:quiet /p:WarningLevel=0 /clp:ErrorsOnly /nologo
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