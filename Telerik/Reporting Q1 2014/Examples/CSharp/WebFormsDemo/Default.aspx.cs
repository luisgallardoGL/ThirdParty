namespace Telerik.Reporting.Examples.CSharp.WebFormsDemo
{
    using System;
    using Telerik.Reporting.Examples.CSharp;
    
	public partial class Default : System.Web.UI.Page
	{
		protected void Page_Load(object sender, EventArgs e)
		{
            if (!IsPostBack)
            {
                InstanceReportSource reportSource = new InstanceReportSource();
                reportSource.ReportDocument = new ReportCatalog();
                this.ReportViewer1.ReportSource = reportSource;
            }
		}
	}
}