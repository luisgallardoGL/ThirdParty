using System;
using System.Diagnostics;
using System.Drawing;
using System.Linq;
using System.Windows.Forms;
using WixSharp;
using WixSharp.CommonTasks;
using WixSharp.UI.Forms;

internal static class Defaults
{
    public const string UserName = "MP_USER";
}

public class Script
{

    static public void Main()
    {
        //Note if the property 'PASSWORD' is not preserved as deferred then it will not be available 
        //from the Project_AfterInstall, which is a deferred custom action.

        var project = new ManagedProject("ManagedSetup",
                          new User
                          {
                              Name = Defaults.UserName,
                              Password = "[PASSWORD]",
                              Domain = "[DOMAIN]",
                              PasswordNeverExpires = true,
                              CreateUser = true
                          },
                          new Property("PASSWORD", "pwd123") { IsDeferred = true });


        project.SourceBaseDir = @"..\..\";
        project.GUID = new Guid("6f330b47-2577-43ad-9095-1861ba25889b");
        //project.LocalizationFile = "MyProduct.en-us.wxl";
        project.LocalizationFile = "WixUI_de-de.wxl";
        project.Language = "de-de";
        project.SetNetFxPrerequisite("NETFRAMEWORK35='#1'", "Please install .NET 3.5 first.");
        project.ManagedUI = new ManagedUI(); 
        project.ManagedUI.InstallDialogs.Add<WelcomeDialog>()
                                        .Add<MyProduct.UserNameDialog>()
                                        .Add<ProgressDialog>()
                                        .Add<ExitDialog>();

        //it effectively becomes a 'Repair' sequence 
        project.ManagedUI.ModifyDialogs.Add<ProgressDialog>()
                                       .Add<ExitDialog>();
         
        project.UILoaded += msi_UILoaded;
        project.BeforeInstall += msi_BeforeInstall;
        project.AfterInstall += Project_AfterInstall;

        project.PreserveTempFiles = true;

        project.BuildMsi();
    }

    static void Project_AfterInstall(SetupEventArgs e)
    {
        if (e.IsInstalling)
            MessageBox.Show($"User '{Defaults.UserName}' with password '{e.Session.Property("PASSWORD")}' has been created");
    }

    static void msi_UILoaded(SetupEventArgs e)
    {
        //You can set the size of the shell view window if required
        //e.ManagedUIShell.SetSize(700, 500);
    }

    static void msi_BeforeInstall(SetupEventArgs e)
    {
        //Note: the property will not be from UserNameDialog if MSI UI is suppressed
        if (e.Session["DOMAIN"] == null)
            e.Session["DOMAIN"] = Environment.MachineName;
    }
}
