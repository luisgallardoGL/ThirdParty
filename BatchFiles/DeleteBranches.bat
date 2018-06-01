rem Deletes same branch name on all repos from local and remote
@ECHO OFF
set ORIGINAL_DIR=%CD%
pushd ..\..

CHOICE /M "Do you really want to delete the branch for all repos?"
if %errorlevel% == 1 goto :DeleteBranch
if %errorlevel% == 2 goto :Exit
ECHO.
:DeleteBranch
set /p branch="Enter the branch name to delete : "
ECHO %branch%
ECHO.
pushd ThirdParty
ECHO Switching ThirdParty
ECHO Deleting %branch%
git branch -d %branch%
git push origin --delete %branch%
popd
ECHO ***********************************************
ECHO.

pushd DataProviders
ECHO Switching DataProviders
ECHO Deleting %branch%
git branch -d %branch%
git push origin --delete %branch%
popd
ECHO ***********************************************
ECHO.

pushd Testing
ECHO Switching Testing
ECHO Deleting %branch%
git branch -d %branch%
git push origin --delete %branch%
popd
ECHO ***********************************************
ECHO.

pushd Common
ECHO Switching Common
ECHO Deleting %branch%
git branch -d %branch%
git push origin --delete %branch%
popd
ECHO ***********************************************
ECHO.

pushd Capella-API_V2
ECHO Switching Capella-API_V2
ECHO Deleting %branch%
git branch -d %branch%
git push origin --delete %branch%
popd
ECHO ***********************************************
ECHO.

pushd Capella
ECHO Switching Capella
ECHO Deleting %branch%
git branch -d %branch%
git push origin --delete %branch%
popd
ECHO ***********************************************
ECHO.

pushd Capella-UI
ECHO Switching Capella-UI
ECHO Deleting %branch%
git branch -d %branch%
git push origin --delete %branch%
popd
ECHO ***********************************************
ECHO.

pushd Capella-UI
ECHO Switching Capella-UI
ECHO Deleting %branch%
git branch -d %branch%
git push origin --delete %branch%
popd

:Error
echo Error level given is %errorlevel%
chdir /d %ORIGINAL_DIR% 
exit /b %errorlevel%

:Exit
chdir /d %ORIGINAL_DIR% 
echo Completed.