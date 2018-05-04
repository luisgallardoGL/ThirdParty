Public Class _Default
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If Not Page.IsPostBack Then
            Dim instanceReportSource as new Telerik.Reporting.InstanceReportSource()
            instanceReportSource.ReportDocument = new ReportCatalog()
            Me.ReportViewer1.ReportSOurce = instanceReportSource
        End If
    End Sub

End Class