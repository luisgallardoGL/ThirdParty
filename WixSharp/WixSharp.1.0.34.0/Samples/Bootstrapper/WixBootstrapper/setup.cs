//css_ref ..\..\..\WixSharp.dll;
//css_ref System.Core.dll;
//css_ref System.Xml.dll;
//css_ref System.Xml.Linq.dll;
//css_ref ..\..\..\Wix_bin\SDK\Microsoft.Deployment.WindowsInstaller.dll;
using System;
using System.Xml;
using System.Xml.Linq;
using io = System.IO;
using WixSharp;
using WixSharp.Bootstrapper;
using WixSharp.CommonTasks;
using System.Diagnostics;
using Microsoft.Win32;

public class InstallScript
{
    static public void Main(string[] args)
    {
        var productProj =
           new Project("My Product",
                new Dir(@"%ProgramFiles%\My Company\My Product",
                    new File("readme.txt"),
                    new File("logo.png")))
           { InstallScope = InstallScope.perMachine };

        productProj.GUID = new Guid("6f330b47-2577-43ad-9095-1861ba25889b");
        productProj.Version = new Version("2.0.0.0");

        productProj.MajorUpgrade = new MajorUpgrade
        {
            Schedule = UpgradeSchedule.afterInstallInitialize,
            DowngradeErrorMessage = "A later version of [ProductName] is already installed. Setup will now exit."
        };

        //---------------------------------------------------------
        var crtProj =
            new Project("CRT",
                new Dir(@"%ProgramFiles%\My Company\CRT",
                    new File("readme.txt")))
            { InstallScope = InstallScope.perMachine };
        //---------------------------------------------------------

        string productMsi = productProj.BuildMsi();
        string crtMsi = crtProj.BuildMsi();

        //---------------------------------------------------------

        var bootstrapper =
                new Bundle("My Product",
                    new PackageGroupRef("NetFx40Web"),
                    //new ExePackage(@"..\redist\dotNetFx40_Full_x86_x64.exe")
                    //{
                    //     Name = "Microsoft .NET Framework 4.0",
                    //     InstallCommand = "/passive /norestart",
                    //     Permanent = true,
                    //     Vital = true,
                    //     DetectCondition = "Netfx4FullVersion AND (NOT VersionNT64 OR Netfx4x64FullVersion)",
                    //     Compressed = true
                    //},
                    new MsiPackage(crtMsi) { DisplayInternalUI = true },
                    new MsiPackage(productMsi) { DisplayInternalUI = true });

        bootstrapper.AboutUrl = "https://wixsharp.codeplex.com/";
        bootstrapper.IconFile = "app_icon.ico";
        bootstrapper.Version = Tasks.GetVersionFromFile(productMsi); //will extract "product version"
        bootstrapper.UpgradeCode = new Guid("6f330b47-2577-43ad-9095-1861bb25889b");
        bootstrapper.Application.LogoFile = "logo.png";
        bootstrapper.Application.LicensePath = "licence.html";  //HyperlinkLicense app with embedded license file
        //bootstrapper.Application.LicensePath = "licence.rtf"; //RtfLicense app with embedded license file 
        //bootstrapper.Application.LicensePath = "http://opensource.org/licenses/MIT"; //HyperlinkLicense app with online license file
        //bootstrapper.Application.LicensePath = null; //HyperlinkLicense app with no license

        bootstrapper.IncludeWixExtension(WixExtension.Util);
        bootstrapper.WixSourceGenerated += Bootstrapper_WixSourceGenerated;

        bootstrapper.PreserveTempFiles = true;

        bootstrapper.Build();

        //---------------------------------------------------------

        if (io.File.Exists(productMsi))
            io.File.Delete(productMsi);

        if (io.File.Exists(crtMsi))
            io.File.Delete(crtMsi);
    }

    static void Bootstrapper_WixSourceGenerated(System.Xml.Linq.XDocument document)
    {
        //This routine will properly set WiX variable 'AdobeInstalled'.
        //Note it has no affect on the runtime behavior and use of 'FileSearch' and "RegistrySearch"
        //only provided as an example.
        document.Select("Wix/Bundle")
                .AddWixFragment(new XElement(WixExtension.Util.ToXName("FileSearch"),
                                           @"Variable=AdobeInstalled;
                                             Result=exists;
                                             Path=[ProgramFilesFolder]Adobe\adobe.exe".ToXAttributes()),

                                new XElement(WixExtension.Util.ToXName("FileSearch"),
                                           @"Variable=PaintNet;
                                             Result=exists;
                                             Path=[ProgramFilesFolder]PaintNet\PaintNet.exe".ToXAttributes()),

                               new UtilRegistrySearch //example of serialization of the built-in type instead of composing XML manually
                               {
                                   Root = RegistryHive.LocalMachine,
                                   Key = @"Key=SOFTWARE\Microsoft\Net Framework Setup\NDP\v4\Full",
                                   Value = "Version",
                                   Variable = "Netfx4FullVersion"
                               }.ToXml(),

                                new XElement(WixExtension.Util.ToXName("RegistrySearch"),
                                           @"Root=HKLM;
                                             Key=SOFTWARE\Microsoft\Net Framework Setup\NDP\v4\Full; 
                                             Value=Version; 
                                             Win64=yes;
                                             Variable=Netfx4x64FullVersion".ToXAttributes()));
    }
}

