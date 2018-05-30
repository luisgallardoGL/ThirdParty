rem This batch file just create branches based on name given from base branch name given
@ECHO OFF
set ORIGINAL_DIR=%CD%
pushd ..\..
if not defined DevEnvDir (
	if exist "%PROGRAMFILES(X86)%\Microsoft Visual Studio\2017\Community\Common7\Tools\VsDevCmd.bat" goto :SET2017
	if exist "%PROGRAMFILES(X86)%\Microsoft Visual Studio 14.0\Common7\Tools\VsDevCmd.bat" goto :SET2015
	if exist "%PROGRAMFILES(X86)%\Microsoft Visual Studio 12.0\Common7\Tools\\VsDevCmd.bat" goto :SET2013

	:SET2017
	CALL "C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\Common7\Tools\VsDevCmd.bat"
	goto :BaseBranchQuestion

	:SET2015
	CALL "C:\Program Files (x86)\Microsoft Visual Studio 14.0\Common7\Tools\VsDevCmd.bat"
	goto :BaseBranchQuestion

	:SET2013
	CALL "C:\Program Files (x86)\Microsoft Visual Studio 12.0\Common7\Tools\VsDevCmd.bat"
	goto :BaseBranchQuestion
)

:BaseBranchQuestion
set /p basebranch="Enter the base branch name: "
ECHO %basebranch%

pushd ThirdParty
ECHO Switching ThirdParty
git checkout %basebranch%
git pull
popd

pushd DataProviders
ECHO Switching DataProviders
git checkout %basebranch%
git pull
popd

pushd Testing
ECHO Switching Testing
git checkout %basebranch%
git pull
popd

pushd Common
ECHO Switching Common
git checkout %basebranch%
git pull
popd

pushd Capella-API_V2
ECHO Switching Capella-API_V2
git checkout %basebranch%
git pull
popd

pushd Capella
ECHO Switching Capella
git checkout %basebranch%
git pull
popd

:CreateBranch
set /p branch="Enter new branch name to create from %basebranch% : " 
ECHO %branch%

pushd ThirdParty
ECHO Switching ThirdParty
ECHO Creating %branch% from %basebranch%
git checkout -b %branch% %basebranch%
git push -u origin %branch%
popd

pushd DataProviders
ECHO Switching DataProviders
ECHO Creating %branch% from %basebranch%
git checkout -b %branch% %basebranch%
git push -u origin %branch%
popd

pushd Testing
ECHO Switching Testing
ECHO Creating %branch% from %basebranch%
git checkout -b %branch% %basebranch%
git push -u origin %branch%
popd

pushd Common
ECHO Switching Common
ECHO Creating %branch% from %basebranch%
git checkout -b %branch% %basebranch%
git push -u origin %branch%
popd

pushd Capella-API_V2
ECHO Switching Capella-API_V2
ECHO Creating %branch% from %basebranch%
git checkout -b %branch% %basebranch%
git push -u origin %branch%
popd

pushd Capella
ECHO Switching Capella
ECHO Creating %branch% from %basebranch%
git checkout -b %branch% %basebranch%
git push -u origin %branch%
popd

CHOICE /M "Do you want to build all repos?"
if %errorlevel% == 1 goto :Build
if %errorlevel% == 2 goto :Exit

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

:Error
echo Error level given is %errorlevel%
chdir /d %ORIGINAL_DIR% 
exit /b %errorlevel%

:Exit
chdir /d %ORIGINAL_DIR% 
echo Completed.