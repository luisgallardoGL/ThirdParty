using Microsoft.Deployment.WindowsInstaller;
using System;
using System.Windows.Forms;

public class CustomActions
{
    [CustomAction]
    public static ActionResult MyAction(Session session)
    {
        MessageBox.Show("Hello World! (CLR: v" + Environment.Version + ")", "Embedded Managed CA (" + ((IntPtr.Size == 8) ? "x64" : "x86") + ")");

        return ActionResult.Success;
    }
}
