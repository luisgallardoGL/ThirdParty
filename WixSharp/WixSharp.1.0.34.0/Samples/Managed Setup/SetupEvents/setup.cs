//css_dir ..\..\..\;
//css_ref Wix_bin\SDK\Microsoft.Deployment.WindowsInstaller.dll;
//css_ref WixSharp.UI.dll;
//css_ref System.Core.dll;
//css_ref System.Xml.dll;

using System;
//using System.Linq;
using System.Windows.Forms;
using Microsoft.Deployment.WindowsInstaller;
using Microsoft.Win32;
using WixSharp;
using WixSharp.CommonTasks;
using System.Diagnostics;

public class Script
{
    static public void Main()
    {
        var project =
            new ManagedProject("ManagedSetup",
                //new ManagedAction("SetInstallDir",
                //                   Return.check,
                //                   When.Before,
                //                   Step.LaunchConditions,
                //                   Condition.NOT_Installed,
                //                   Sequence.InstallUISequence),
                new Dir(@"%ProgramFiles%\My Company\My Product",
                    new File(@"..\Files\bin\MyApp.exe"),
                    new Dir("Docs",
                        new File("readme.txt"))),

               new Dir(new Id("TOOLSDIR"), "Tools", 
                   new File("setup.cs")),

               new RegValueProperty("TOOLSDIR",
                                    RegistryHive.CurrentUser, 
                                    @"SOFTWARE\7-Zip", 
                                    "Path", 
                                    defaultValue: @"C:\My Company\tools")



               );

        //project.ManagedUI = ManagedUI.Empty;
        project.ManagedUI = ManagedUI.Default; //Wix# ManagedUI
        //project.UI = WUI.WixUI_InstallDir; //native MSI UI

        project.UILoaded += project_UIInit;
        project.Load += project_Load;
        project.BeforeInstall += project_BeforeInstall;
        project.AfterInstall += project_AfterInstall;

        project.GUID = new Guid("6f330b47-2577-43ad-9095-1861ba25889b");

        project.PreserveTempFiles = true;

        Compiler.BuildMsi(project);
    }


    [CustomAction]
    public static ActionResult SetInstallDir(Session session)
    {
        //set custom installdir
        ///This event is fired before native MSI UI loaded (disabled for demo purposes)
        //session["INSTALLDIR"] = Registry.CurrentUser.OpenSubKey(@"SOFTWARE\7-Zip")
        //                                            .GetValue("Path")
        //                                            .ToString(); 
        return ActionResult.Success;
    }


    static void project_UIInit(SetupEventArgs e)
    {
        e.Session["TOOLSDIR"] = @"C:\Temp\Doc"; 
        //set custom installdir
        //This event is fired before Wix# ManagedUI loaded (disabled for demo purposes)
        //e.Session["INSTALLDIR"] = Registry.CurrentUser.OpenSubKey(@"SOFTWARE\7-Zip")
        //                                              .GetValue("Path")
        //                                              .ToString();
        SetEnvVersion(e.Session);
    }

    static void SetEnvVersion(Session session)
    {
        if (session["EnvVersion"].IsEmpty())
            session["EnvVersion"] = AppSearch.IniFileValue(Environment.ExpandEnvironmentVariables(@"%windir%\win.ini"),
                                                           "System",
                                                           "Version") ?? "<unknown>";
    }

    static void project_Load(SetupEventArgs e)
    {
        SetEnvVersion(e.Session);
        MessageBox.Show(e.ToString(), "Load " + e.Session["EnvVersion"]);
    }

    static void project_BeforeInstall(SetupEventArgs e)
    {
        MessageBox.Show(e.ToString(), "BeforeInstall");
    }

    static void project_AfterInstall(SetupEventArgs e)
    {
        MessageBox.Show(e.ToString(), "AfterExecute");
    }
}
