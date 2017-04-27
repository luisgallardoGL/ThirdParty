//css_dir ..\..\;
//css_ref System.Core.dll;
//css_ref Wix_bin\SDK\Microsoft.Deployment.WindowsInstaller.dll;
using System;
using System.Windows.Forms;
using Microsoft.Deployment.WindowsInstaller;
using WixSharp;
using WixSharp.CommonTasks;

class Script
{
    static public void Main(string[] args)
    {
        var project = new Project("CustomActionTest",
                new Dir(@"%ProgramFiles%\My Company\My Product", new File("setup.cs")),
                new ManagedAction(CustomActions.MyAction, Return.check, When.After, Step.InstallInitialize, Condition.NOT_Installed));

        project.ControlPanelInfo.InstallLocation = "[INSTALLDIR]";
        project.ControlPanelInfo.NoModify = true;

        //project.Platform = Platform.x64;
        project.PreserveTempFiles = true;
        project.BuildMsi();
    }
}

public class CustomActions
{
    [CustomAction]
    public static ActionResult ValidateLicenceKey(Session session)
    {
        return ActionResult.Success;
    }

    [CustomAction]
    public static ActionResult MyAction(Session session)
    {
        MessageBox.Show("Hello World! (CLR: v" + Environment.Version + ")", "Embedded Managed CA (" + (Is64BitProcess ? "x64" : "x86") + ")");
        session.Log("Begin MyAction Hello World");

        return ActionResult.Success;
    }

    public static bool Is64BitProcess
    {
        get { return IntPtr.Size == 8; }
    }
}