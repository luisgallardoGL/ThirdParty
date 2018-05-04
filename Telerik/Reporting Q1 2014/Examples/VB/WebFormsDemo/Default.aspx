<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Default.aspx.vb" Inherits="VB.WebFormsDemo._Default" %>

<%@ Register TagPrefix="telerik" Assembly="Telerik.ReportViewer.WebForms" Namespace="Telerik.ReportViewer.WebForms" %>

<%@ Assembly Name="Telerik.ReportViewer.WebForms" %>

<html xmlns="http://www.w3.org/1999/xhtml" id="html">
<head id="Head1" runat="server">
    <meta http-equiv="X-UA-Compatible" content="IE=9" />
    <title>Telerik Report Viewer</title>
    <style type="text/css">			
		html#html, body#body, form#form1, div#content, center#center
		{	
			border: 0px solid black;
			padding: 0px;
			margin: 0px;
			height: 100%;
		}
    </style>
</head>
<body id="body">
    <form id="form1" runat="server">              
    <div id="content"><center id="center"><telerik:ReportViewer ID="ReportViewer1" runat="server"  style="border:1px solid #ccc;" 
			width="99%" height="99%"/></center></div>
    </form>
</body>
</html>
