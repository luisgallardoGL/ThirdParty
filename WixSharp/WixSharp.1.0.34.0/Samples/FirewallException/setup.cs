//css_dir ..\..\;
//css_ref Wix_bin\SDK\Microsoft.Deployment.WindowsInstaller.dll;
//css_ref System.Core.dll;
using System;
using WixSharp;

class Script
{
    static public void Main(string[] args)
    {
        var project =
            new Project("MyProduct",
                new Dir(@"%ProgramFiles%\My Company\My Product",
                    new File(@"Files\Bin\MyApp.exe",
                        new FirewallException("MyApp")
                        {
                            //Scope = FirewallExceptionScope.any,
                            RemoteAddress = "127.0.0.1, 127.0.0.2, 127.0.0.3".Split(',')
                        })));

        project.UI = WUI.WixUI_InstallDir;
        project.GUID = new Guid("6f330b47-2577-43ad-9095-1861ba25889b");
        project.EmitConsistentPackageId = true;
        project.PreserveTempFiles = true;

        project.BuildMsi();
    }
}