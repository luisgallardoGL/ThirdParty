


@Imports Telerik.ReportViewer.Mvc
@Code 
    ViewBag.Title = "Telerik HTML5 Report Viewer MVC Demo"
End Code

@Section styles
    <link href="http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />

    <link href="http://cdn.kendostatic.com/2013.2.918/styles/kendo.common.min.css" rel="stylesheet" />
    <link href="http://cdn.kendostatic.com/2013.2.918/styles/kendo.blueopal.min.css" rel="stylesheet" />


    <style>
        #reportViewer1 {
            position: absolute;
            left: 5px;
            right: 5px;
            top: 5px;
            bottom: 5px;
            overflow: hidden;
            font-family: Verdana, Arial;
        }
    </style>

    <link href="ReportViewer/styles/ReportViewer-8.0.14.225.css" rel="stylesheet" />
End Section

@Code
    Dim reportSource As Telerik.Reporting.TypeReportSource = New Telerik.Reporting.TypeReportSource()
    reportSource.TypeName = "ReportCatalog, VB.ReportLibrary"
    
    Dim viewer = Html.TelerikReporting().ReportViewer() _
        .Id("reportViewer1") _
        .ServiceUrl("/api/reports/") _
        .TemplateUrl("/ReportViewer/templates/telerikReportViewerTemplate.html") _
        .ReportSource(reportSource) _
        .ViewMode(ViewModes.INTERACTIVE) _
        .ScaleMode(ScaleModes.SPECIFIC) _
        .Scale(1.0) _
        .PersistSession(False)
End Code

@viewer

@Section scripts
    <script src="http://cdn.kendostatic.com/2013.2.918/js/kendo.all.min.js"></script>
    <script src="ReportViewer/js/ReportViewer-8.0.14.225.js"></script>


End Section