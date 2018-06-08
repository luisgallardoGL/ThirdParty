Imports Telerik.ReportViewer.WinForms

Partial Class MainForm
    ''' <summary>
    ''' Required designer variable.
    ''' </summary>
    Private components As System.ComponentModel.IContainer = Nothing
    Private reportViewer1 As Telerik.ReportViewer.WinForms.ReportViewer

    ''' <summary>
    ''' Clean up any resources being used.
    ''' </summary>
    ''' <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
    Protected Overloads Overrides Sub Dispose(ByVal disposing As Boolean)
        If disposing AndAlso (components IsNot Nothing) Then
            components.Dispose()
        End If
        MyBase.Dispose(disposing)
    End Sub

#Region "Windows Form Designer generated code"

    ''' <summary>
    ''' Required method for Designer support - do not modify
    ''' the contents of this method with the code editor.
    ''' </summary>
    Private Sub InitializeComponent()
        Dim InstanceReportSource1 As Telerik.Reporting.InstanceReportSource = New Telerik.Reporting.InstanceReportSource()
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(MainForm))
        Me.ReportCatalog1 = New ReportCatalog()
        Me.reportViewer1 = New Telerik.ReportViewer.WinForms.ReportViewer()
        CType(Me.ReportCatalog1, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.SuspendLayout()
        '
        'ReportCatalog1
        '
        Me.ReportCatalog1.Name = "ReportCatalog1"
        '
        'reportViewer1
        '
        Me.reportViewer1.Dock = System.Windows.Forms.DockStyle.Fill
        Me.reportViewer1.Location = New System.Drawing.Point(0, 0)
        Me.reportViewer1.Name = "reportViewer1"
        InstanceReportSource1.ReportDocument = Me.ReportCatalog1
        Me.reportViewer1.ReportSource = InstanceReportSource1
        Me.reportViewer1.Size = New System.Drawing.Size(992, 573)
        Me.reportViewer1.TabIndex = 0
        '
        'MainForm
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(992, 573)
        Me.Controls.Add(Me.reportViewer1)
        Me.Icon = CType(resources.GetObject("$this.Icon"), System.Drawing.Icon)
        Me.Name = "MainForm"
        Me.Text = "Telerik Reporting VB Demo"
        Me.WindowState = System.Windows.Forms.FormWindowState.Maximized
        CType(Me.ReportCatalog1, System.ComponentModel.ISupportInitialize).EndInit()
        Me.ResumeLayout(False)

    End Sub
    Friend WithEvents ReportCatalog1 As ReportCatalog


#End Region
End Class
