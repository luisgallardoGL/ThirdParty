﻿using Microsoft.Deployment.WindowsInstaller;
using WixSharp;
using WixSharp.CommonTasks;

public class Script
{
    static public void Main()
    {
        var project = new Project("CustomDialogTest");

        //Injects CLR dialog EmptyDialog between MSI dialogs InsallDirDlg and VerifyReadyDlg.
        //Passes custom action ShowCustomDialog for instantiating and popping up the CLR dialog.

        project.InjectClrDialog("ShowCustomDialog", Dialogs.InstallDirDlg, Dialogs.VerifyReadyDlg)
               .RemoveDialogsBetween(Dialogs.WelcomeDlg, Dialogs.InstallDirDlg);

        Compiler.PreserveTempFiles = true;
        Compiler.BuildMsi(project);
    }

    [CustomAction]
    public static ActionResult ShowCustomDialog(Session session)
    {
        return WixCLRDialog.ShowAsMsiDialog(new EmptyDialog(session));
    }
}
