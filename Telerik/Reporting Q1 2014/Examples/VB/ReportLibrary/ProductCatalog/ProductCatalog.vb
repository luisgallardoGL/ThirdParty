
Imports System
Imports System.ComponentModel
Imports System.Drawing
Imports System.Globalization
Imports Telerik.Reporting

''' <summary>
''' Summary description for Report1.
''' </summary>
<Description("Product Catalog Report. (Multilingual)")> _
Partial Public Class ProductCatalog
    Inherits Report
    Public Sub New()
        ''' <summary>
        ''' Required for telerik Reporting designer support
        ''' </summary>
        InitializeComponent()

        '
        ' TODO: Add any constructor code after InitializeComponent call
        '

        AddHandler Me.ItemDataBinding, AddressOf Me.ProductCatalog_ItemDataBinding
    End Sub

    Private Sub ProductCatalog_ItemDataBinding(sender As Object, e As EventArgs)
        Dim cultureID As String = DirectCast(Me.ReportParameters("CultureID").Value, String)

        Dim cultureInfo__1 As CultureInfo = Nothing
        If String.Compare(cultureID, "zh-CHT", True, CultureInfo.InvariantCulture) = 0 Then
            cultureInfo__1 = New CultureInfo("zh-TW", False)
        Else
            cultureInfo__1 = New CultureInfo(cultureID)
        End If

        Me.Culture = cultureInfo__1
    End Sub
End Class
