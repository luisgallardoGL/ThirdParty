Imports Telerik.Reporting.Cache.Interfaces
Imports Telerik.Reporting.Services.Engine
Imports Telerik.Reporting.Services.WebApi
Imports System.IO

Public Class ReportsController
    Inherits ReportsControllerBase

    Protected Overrides Function CreateReportResolver() As IReportResolver
        Dim appPath = HttpContext.Current.Server.MapPath("~/")
        Dim reportsPath = Path.Combine(appPath, "..\..\..\Report Designer\Examples")

        Return New ReportFileResolver(reportsPath).AddFallbackResolver(New ReportTypeResolver())
    End Function

    Protected Overrides Function CreateCache() As ICache
        Return Telerik.Reporting.Services.Engine.CacheFactory.CreateFileCache()
    End Function
End Class
