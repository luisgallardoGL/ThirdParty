rem Builds all projects without pulling or switching branches. It gives you an option of individual project build if you don’t want to build all projects
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
echo ThirdParty:  %branch%
popd
ECHO.
pushd DataProviders
for /f "delims=" %%i in ('git rev-parse --abbrev-ref HEAD') do set branch=%%i
echo DataProviders:  %branch%
popd
ECHO.
pushd Testing
for /f "delims=" %%i in ('git rev-parse --abbrev-ref HEAD') do set branch=%%i
echo Testing:  %branch%
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
ECHO.
:BuildDataProviderQuestion
CHOICE /M "Do you want to build DataProviders?"
if %errorlevel% == 1 goto :BuildDataProvider
if %errorlevel% == 2 goto :BuildTestingQuestion
ECHO.
:BuildDataProvider
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

:BuildTestingQuestion
CHOICE /M "Do you want to build Testing?"
if %errorlevel% == 1 goto :BuildTesting
if %errorlevel% == 2 goto :BuildCommonQuestion
ECHO.

:BuildTesting
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

:BuildCommonQuestion
CHOICE /M "Do you want to build Common?"
if %errorlevel% == 1 goto :BuildCommon
if %errorlevel% == 2 goto :BuildCapella-API_V2Question
ECHO.

:BuildCommon
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

:BuildCapella-API_V2Question
CHOICE /M "Do you want to build Capella-API_V2?"
if %errorlevel% == 1 goto :BuildCapella-API_V2
if %errorlevel% == 2 goto :BuildDomainQuestion
ECHO.

:BuildCapella-API_V2
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

:BuildDomainQuestion
CHOICE /M "Do you want to build Domain?"
if %errorlevel% == 1 goto :BuildDomain
if %errorlevel% == 2 goto :BuildServiceQuestion
ECHO.

:BuildDomain
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

:BuildServiceQuestion
CHOICE /M "Do you want to build Service?"
if %errorlevel% == 1 goto :BuildService
if %errorlevel% == 2 goto :BuildUIQuestion
ECHO.

:BuildService
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

:BuildUIQuestion
CHOICE /M "Do you want to build UI?"
if %errorlevel% == 1 goto :BuildUI
if %errorlevel% == 2 goto :BuildCapellaUIQuestion
ECHO.

:BuildUI
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

:BuildCapellaUIQuestion
CHOICE /M "Do you want to build Capella-UI?"
if %errorlevel% == 1 goto :BuildCapellaUI
if %errorlevel% == 2 goto :Exit
ECHO.

:BuildCapellaUI
pushd Capella-UI
ECHO Building Capella-UI...
nuget restore CapellaUI.sln -Verbosity quiet
msbuild CapellaUI.sln /m /t:build /verbosity:quiet /p:WarningLevel=0 /clp:ErrorsOnly /nologo
if not %errorlevel% == 0 (
   goto :Error
) else (
	ECHO Done.
	goto :Exit
)
ECHO ***********************************************
ECHO.

:Error
echo Error level given is %errorlevel%
chdir /d %ORIGINAL_DIR% 
exit /b %errorlevel%

:Exit
chdir /d %ORIGINAL_DIR% 
echo Completed.