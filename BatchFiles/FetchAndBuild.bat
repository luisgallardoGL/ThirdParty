@ECHO OFF
if not defined DevEnvDir (
	ECHO Need to define DevEnvDir
	if exist "%PROGRAMFILES(X86)%\Microsoft Visual Studio\2017\Community\Common7\Tools\VsDevCmd.bat" goto :SET2017
	if exist "%PROGRAMFILES(X86)%\Microsoft Visual Studio 14.0\Common7\Tools\VsDevCmd.bat" goto :SET2015
	if exist "%PROGRAMFILES(X86)%\Microsoft Visual Studio 12.0\Common7\Tools\\VsDevCmd.bat" goto :SET2013

	:SET2017 
	CALL "C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\Common7\Tools\VsDevCmd.bat"
	echo Set for 2017
	goto :RunFetchAndBuild
	
	:SET2015 
	CALL "C:\Program Files (x86)\Microsoft Visual Studio 14.0\Common7\Tools\VsDevCmd.bat"
	echo Set for 2015
	goto :RunFetchAndBuild
	
	:SET2013 
	CALL "C:\Program Files (x86)\Microsoft Visual Studio 12.0\Common7\Tools\VsDevCmd.bat"
	echo set for 2013
	goto :RunFetchAndBuild
)

:RunFetchAndBuild
echo Ready...

pushd ..\..

pushd DataProviders
ECHO Pulling DataProviders
git rev-parse --abbrev-ref HEAD
git pull
if errorlevel 1 (
   echo Failure Reason Given is %errorlevel% in DataProviders
   exit /b %errorlevel%
)
popd
pushd Common
ECHO Pulling Common
git rev-parse --abbrev-ref HEAD
git pull
if errorlevel 1 (
   echo Failure Reason Given is %errorlevel% in Common
   exit /b %errorlevel%
)
popd
pushd Capella
ECHO Pulling Capella
git rev-parse --abbrev-ref HEAD
git pull
if errorlevel 1 (
   echo Failure Reason Given is %errorlevel% in Capella
   exit /b %errorlevel%
)
popd
pause
pushd DataProviders
ECHO Building DataProviders...
msbuild DataProviders.sln /m /t:rebuild /verbosity:quiet /p:WarningLevel=0 /clp:ErrorsOnly /nologo
if errorlevel 1 (
   echo Failure Reason Given is %errorlevel% in DataProviders
   exit /b %errorlevel%
) else (
	ECHO Done.
)
popd
pushd Common
ECHO Building Common...
msbuild Common.sln /m /t:rebuild /verbosity:quiet /p:WarningLevel=0 /clp:ErrorsOnly /nologo
if errorlevel 1 (
   echo Failure Reason Given is %errorlevel% in Common
   exit /b %errorlevel%v
) else (
	ECHO Done.
)
popd
pushd Capella
pushd Domain
ECHO Building Domain...
msbuild Domain.sln /m /t:rebuild /verbosity:quiet /p:WarningLevel=0 /clp:ErrorsOnly /nologo
if errorlevel 1 (
   echo Failure Reason Given is %errorlevel% in Domain
   exit /b %errorlevel%
) else (
	ECHO Done.
)
popd
pushd Services
ECHO Building Services...
msbuild Services.sln /m /t:rebuild /verbosity:quiet /p:WarningLevel=0 /clp:ErrorsOnly /nologo
if errorlevel 1 (
   echo Failure Reason Given is %errorlevel% in Services
   exit /b %errorlevel%
) else (
	ECHO Done.
)
popd
popd
popd
echo Completed.