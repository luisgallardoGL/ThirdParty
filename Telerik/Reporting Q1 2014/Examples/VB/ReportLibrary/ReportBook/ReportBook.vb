Imports System.ComponentModel

<Description("A collection of Product-related reports")> _
Public Class ReportBook
    Inherits Telerik.Reporting.ReportBook
    Public Sub New()
        Me.Reports.Add(New SalesByRegionDashboard())
        Me.Reports.Add(New Dashboard())
        Me.Reports.Add(New ProductSales())
        Me.Reports.Add(New ProductCatalog())
        Me.Reports.Add(New ProductLineSales())

        Me.Reports(0).DocumentMapText = "Sales By Region"
        Me.Reports(1).DocumentMapText = "Dashboard"
        Me.Reports(2).DocumentMapText = "Product Sales"
        Me.Reports(4).DocumentMapText = "Product Line Sales"
    End Sub
End Class