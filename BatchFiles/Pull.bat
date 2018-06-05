rem Pulls latest on current branch and gives an option to switch the branch as well
@ECHO OFF
set ORIGINAL_DIR=%CD%
pushd ..\..

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
echo Capella:   %branch%
popd
ECHO.
pushd CapellaUI
for /f "delims=" %%i in ('git rev-parse --abbrev-ref HEAD') do set branch=%%i
echo CapellaUI:   %branch%
popd
ECHO.

CHOICE /M "Do you want to switch branch for all repos?"
if %errorlevel% == 1 goto :ChangeBranch
if %errorlevel% == 2 goto :Pull
ECHO.
:ChangeBranch
set /p branch="Enter branch name to switch: "
ECHO %branch%

:Pull
pushd ThirdParty
ECHO Pulling ThirdParty
git pull
if not %errorlevel% == 0 ( goto :Error )
popd
ECHO ***********************************************
ECHO.

pushd DataProviders
ECHO Pulling DataProviders
git pull
if not %errorlevel% == 0 ( goto :Error )
popd
ECHO ***********************************************
ECHO.

pushd Testing
ECHO Pulling Testing
git pull
if not %errorlevel% == 0 ( goto :Error )
popd
ECHO ***********************************************
ECHO.

pushd Common
ECHO Pulling Common
git pull
if not %errorlevel% == 0 ( goto :Error )
popd
ECHO ***********************************************
ECHO.

pushd Capella-API_V2
ECHO Pulling Capella-API_V2
git pull
if not %errorlevel% == 0 ( goto :Error )
popd
ECHO ***********************************************
ECHO.

pushd Capella
ECHO Pulling Capella
git pull
if not %errorlevel% == 0 ( goto :Error )
popd
ECHO ***********************************************
ECHO.

pushd CapellaUI
ECHO Pulling CapellaUI
git pull
if not %errorlevel% == 0 (goto :Error)
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