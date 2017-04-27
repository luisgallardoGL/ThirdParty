//css_ref ..\..\..\WixSharp.dll;
//css_ref System.Core.dll;
//css_ref ..\..\..\Wix_bin\SDK\Microsoft.Deployment.WindowsInstaller.dll;
using System;
using Caliburn.Micro;
using Microsoft.Tools.WindowsInstallerXml.Bootstrapper;
using WixSharp;
using WixSharp.Bootstrapper;

public class AppBootstrapper : BootstrapperBase
{
    SimpleContainer container = new SimpleContainer();

    public AppBootstrapper()
    {
        Initialize();
    }

    protected override void Configure()
    {
        container.Singleton<IWindowManager, WindowManager>()
                 .PerRequest<ShellViewModel>();
    }

    protected override object GetInstance(Type service, string key)
    {
        return container.GetInstance(service, key);
    }

    //protected override IEnumerable<object> GetAllInstances(Type service)
    //{
    //    return container.GetAllInstances(service);
    //}

    protected override void BuildUp(object instance)
    {
        container.BuildUp(instance);
    }

    protected override void OnStartup(object sender, StartupEventArgs e)
    {
        var view = new ShellView();
        view.InitializeComponent();
        var viewModel = new ShellViewModel();
        ViewModelBinder.Bind(viewModel, view, null);
        // ViewLocator.
        view.ShowDialog();
        //DisplayRootViewFor<ShellViewModel>();
    }
}

