Imports System.ComponentModel
Imports System.Drawing
Imports System.Windows.Forms
Imports Telerik.Reporting
Imports Telerik.Reporting.Drawing

Partial Class ProductSales
#Region "Component Designer generated code"
    ''' <summary>
    ''' Required method for telerik Reporting designer support - do not modify
    ''' the contents of this method with the code editor.
    ''' </summary>
    Private Sub InitializeComponent()
        Dim toggleVisibilityAction1 As New Telerik.Reporting.ToggleVisibilityAction()
        Dim tableGroup1 As New Telerik.Reporting.TableGroup()
        Dim tableGroup2 As New Telerik.Reporting.TableGroup()
        Dim tableGroup3 As New Telerik.Reporting.TableGroup()
        Dim toggleVisibilityAction2 As New Telerik.Reporting.ToggleVisibilityAction()
        Dim tableGroup4 As New Telerik.Reporting.TableGroup()
        Dim tableGroup5 As New Telerik.Reporting.TableGroup()
        Dim tableGroup6 As New Telerik.Reporting.TableGroup()
        Dim tableGroup7 As New Telerik.Reporting.TableGroup()
        Dim tableGroup8 As New Telerik.Reporting.TableGroup()
        Dim tableGroup9 As New Telerik.Reporting.TableGroup()
        Dim tableGroup10 As New Telerik.Reporting.TableGroup()
        Dim tableGroup11 As New Telerik.Reporting.TableGroup()
        Dim tableGroup12 As New Telerik.Reporting.TableGroup()
        Dim tableGroup13 As New Telerik.Reporting.TableGroup()
        Dim tableGroup14 As New Telerik.Reporting.TableGroup()
        Dim navigateToReportAction1 As New Telerik.Reporting.NavigateToReportAction()
        Dim typeReportSource1 As New Telerik.Reporting.TypeReportSource()
        Dim formattingRule1 As New Telerik.Reporting.Drawing.FormattingRule()
        Dim graphGroup1 As New Telerik.Reporting.GraphGroup()
        Dim colorPalette1 As New Telerik.Reporting.Drawing.ColorPalette()
        Dim graphGroup3 As New Telerik.Reporting.GraphGroup()
        Dim numericalScale1 As New Telerik.Reporting.NumericalScale()
        Dim numericalScaleCrossAxisPosition1 As New Telerik.Reporting.NumericalScaleCrossAxisPosition()
        Dim numericalScale2 As New Telerik.Reporting.NumericalScale()
        Dim numericalScaleCrossAxisPosition2 As New Telerik.Reporting.NumericalScaleCrossAxisPosition()
        Dim resources As New System.ComponentModel.ComponentResourceManager(GetType(ProductSales))
        Dim graphGroup2 As New Telerik.Reporting.GraphGroup()
        Dim graphGroup4 As New Telerik.Reporting.GraphGroup()
        Dim monochromaticPalette1 As New Telerik.Reporting.Drawing.MonochromaticPalette()
        Dim numericalScale3 As New Telerik.Reporting.NumericalScale()
        Dim numericalScaleCrossAxisPosition3 As New Telerik.Reporting.NumericalScaleCrossAxisPosition()
        Dim numericalScale4 As New Telerik.Reporting.NumericalScale()
        Dim numericalScaleCrossAxisPosition4 As New Telerik.Reporting.NumericalScaleCrossAxisPosition()
        Dim graphGroup5 As New Telerik.Reporting.GraphGroup()
        Dim graphGroup6 As New Telerik.Reporting.GraphGroup()
        Dim numericalScale5 As New Telerik.Reporting.NumericalScale()
        Dim numericalScaleCrossAxisPosition5 As New Telerik.Reporting.NumericalScaleCrossAxisPosition()
        Dim numericalScale6 As New Telerik.Reporting.NumericalScale()
        Dim numericalScaleCrossAxisPosition6 As New Telerik.Reporting.NumericalScaleCrossAxisPosition()
        Dim graphGroup7 As New Telerik.Reporting.GraphGroup()
        Dim graphGroup8 As New Telerik.Reporting.GraphGroup()
        Dim pictureWatermark1 As New Telerik.Reporting.Drawing.PictureWatermark()
        Dim styleRule1 As New Telerik.Reporting.Drawing.StyleRule()
        Dim styleRule2 As New Telerik.Reporting.Drawing.StyleRule()
        Dim descendantSelector1 As New Telerik.Reporting.Drawing.DescendantSelector()
        Dim styleRule3 As New Telerik.Reporting.Drawing.StyleRule()
        Dim styleRule4 As New Telerik.Reporting.Drawing.StyleRule()
        Dim styleRule5 As New Telerik.Reporting.Drawing.StyleRule()
        Dim styleRule6 As New Telerik.Reporting.Drawing.StyleRule()
        Me.textBoxQtr = New Telerik.Reporting.TextBox()
        Me.textBoxTotalYearLabel = New Telerik.Reporting.TextBox()
        Me.textBox4 = New Telerik.Reporting.TextBox()
        Me.textBoxSubCategory = New Telerik.Reporting.TextBox()
        Me.textBox8 = New Telerik.Reporting.TextBox()
        Me.textBoxYear = New Telerik.Reporting.TextBox()
        Me.textBoxGrandTotalYearLabel = New Telerik.Reporting.TextBox()
        Me.textBox2 = New Telerik.Reporting.TextBox()
        Me.textBox9 = New Telerik.Reporting.TextBox()
        Me.textBoxCategory = New Telerik.Reporting.TextBox()
        Me.textBoxGrandTotalCategoryLabel = New Telerik.Reporting.TextBox()
        Me.detail = New Telerik.Reporting.DetailSection()
        Me.crosstab1 = New Telerik.Reporting.Crosstab()
        Me.textBoxFact = New Telerik.Reporting.TextBox()
        Me.textBoxTotalCategory = New Telerik.Reporting.TextBox()
        Me.textBoxTotalCategoryYear = New Telerik.Reporting.TextBox()
        Me.textBoxTotalYear = New Telerik.Reporting.TextBox()
        Me.textBoxGrandTotalYearCategory = New Telerik.Reporting.TextBox()
        Me.textBoxGrandTotalSubCategoryYear = New Telerik.Reporting.TextBox()
        Me.textBoxGrandTotal = New Telerik.Reporting.TextBox()
        Me.GrandTotalCategoryYear = New Telerik.Reporting.TextBox()
        Me.textBoxGrandTotalCategoryQtr = New Telerik.Reporting.TextBox()
        Me.graph1 = New Telerik.Reporting.Graph()
        Me.cartesianCoordinateSystem2 = New Telerik.Reporting.CartesianCoordinateSystem()
        Me.graphAxis4 = New Telerik.Reporting.GraphAxis()
        Me.graphAxis3 = New Telerik.Reporting.GraphAxis()
        Me.sqlDataSource1 = New Telerik.Reporting.SqlDataSource()
        Me.lineSeries1 = New Telerik.Reporting.LineSeries()
        Me.graph4 = New Telerik.Reporting.Graph()
        Me.cartesianCoordinateSystem3 = New Telerik.Reporting.CartesianCoordinateSystem()
        Me.graphAxis5 = New Telerik.Reporting.GraphAxis()
        Me.graphAxis6 = New Telerik.Reporting.GraphAxis()
        Me.barSeries2 = New Telerik.Reporting.BarSeries()
        Me.graph5 = New Telerik.Reporting.Graph()
        Me.cartesianCoordinateSystem1 = New Telerik.Reporting.CartesianCoordinateSystem()
        Me.graphAxis1 = New Telerik.Reporting.GraphAxis()
        Me.graphAxis2 = New Telerik.Reporting.GraphAxis()
        Me.barSeries1 = New Telerik.Reporting.BarSeries()
        Me.textBox3 = New Telerik.Reporting.TextBox()
        Me.textBox5 = New Telerik.Reporting.TextBox()
        Me.textBox6 = New Telerik.Reporting.TextBox()
        Me.textBox1 = New Telerik.Reporting.TextBox()
        Me.reportHeaderSection1 = New Telerik.Reporting.ReportHeaderSection()
        DirectCast(Me, System.ComponentModel.ISupportInitialize).BeginInit()
        ' 
        ' textBoxQtr
        ' 
        Me.textBoxQtr.Name = "textBoxQtr"
        Me.textBoxQtr.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(0.95669287443161), Telerik.Reporting.Drawing.Unit.Inch(0.240000009536743))
        Me.textBoxQtr.Style.BorderStyle.Bottom = Telerik.Reporting.Drawing.BorderType.None
        Me.textBoxQtr.StyleName = "RedTextBox"
        Me.textBoxQtr.Value = "Q{Fields.Qtr}"
        ' 
        ' textBoxTotalYearLabel
        ' 
        Me.textBoxTotalYearLabel.Name = "textBoxTotalYearLabel"
        Me.textBoxTotalYearLabel.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(0.952755987644196), Telerik.Reporting.Drawing.Unit.Inch(0.240000009536743))
        Me.textBoxTotalYearLabel.StyleName = "RedTextBox"
        Me.textBoxTotalYearLabel.Value = "Total"
        ' 
        ' textBox4
        ' 
        Me.textBox4.Name = "textBox4"
        Me.textBox4.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Cm(2.82020831108093), Telerik.Reporting.Drawing.Unit.Inch(0.239999994635582))
        Me.textBox4.StyleName = "RedTextBox"
        Me.textBox4.Value = "Monthly Trend"
        ' 
        ' textBoxSubCategory
        ' 
        Me.textBoxSubCategory.Name = "textBoxSubCategory"
        Me.textBoxSubCategory.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(1.87999987602234), Telerik.Reporting.Drawing.Unit.Inch(0.350393712520599))
        Me.textBoxSubCategory.Style.BorderStyle.Right = Telerik.Reporting.Drawing.BorderType.Solid
        Me.textBoxSubCategory.Style.TextAlign = Telerik.Reporting.Drawing.HorizontalAlign.Left
        Me.textBoxSubCategory.Style.Visible = True
        Me.textBoxSubCategory.StyleName = "ItemDetails"
        Me.textBoxSubCategory.Value = "=Fields.ProductSubCategory"
        ' 
        ' textBox8
        ' 
        Me.textBox8.Name = "textBox8"
        Me.textBox8.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(1.87999987602234), Telerik.Reporting.Drawing.Unit.Inch(0.350393712520599))
        Me.textBox8.Style.TextAlign = Telerik.Reporting.Drawing.HorizontalAlign.Left
        Me.textBox8.Value = "Total"
        ' 
        ' textBoxYear
        ' 
        toggleVisibilityAction1.DisplayExpandedMark = False
        tableGroup1.Groupings.Add(New Telerik.Reporting.Grouping("=Fields.Qtr"))
        tableGroup1.Name = "Quarter"
        tableGroup1.ReportItem = Me.textBoxQtr
        tableGroup1.Sortings.Add(New Telerik.Reporting.Sorting("=Fields.Qtr", Telerik.Reporting.SortDirection.Asc))
        tableGroup1.Visible = False
        tableGroup2.Name = "YearTotalGroup"
        tableGroup2.ReportItem = Me.textBoxTotalYearLabel
        tableGroup2.Visible = False
        tableGroup3.Name = "GroupMonthlyTrend"
        tableGroup3.ReportItem = Me.textBox4
        tableGroup3.Visible = False
        toggleVisibilityAction1.Targets.AddRange(New Telerik.Reporting.IToggleVisibilityTarget() {tableGroup1, tableGroup2, tableGroup3})
        Me.textBoxYear.Action = toggleVisibilityAction1
        Me.textBoxYear.KeepTogether = False
        Me.textBoxYear.Name = "textBoxYear"
        Me.textBoxYear.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(3.01976752281189), Telerik.Reporting.Drawing.Unit.Inch(0.270000010728836))
        Me.textBoxYear.Style.BorderStyle.Default = Telerik.Reporting.Drawing.BorderType.Solid
        Me.textBoxYear.Style.BorderStyle.Top = Telerik.Reporting.Drawing.BorderType.None
        Me.textBoxYear.Style.TextAlign = Telerik.Reporting.Drawing.HorizontalAlign.Left
        Me.textBoxYear.Style.VerticalAlign = Telerik.Reporting.Drawing.VerticalAlign.Middle
        Me.textBoxYear.Value = "=Fields.OrderDate.Year"
        ' 
        ' textBoxGrandTotalYearLabel
        ' 
        Me.textBoxGrandTotalYearLabel.Name = "textBoxGrandTotalYearLabel"
        Me.textBoxGrandTotalYearLabel.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(1.2716536521911599), Telerik.Reporting.Drawing.Unit.Inch(0.510000050067902))
        Me.textBoxGrandTotalYearLabel.Style.BorderStyle.Bottom = Telerik.Reporting.Drawing.BorderType.None
        Me.textBoxGrandTotalYearLabel.Style.BorderStyle.Left = Telerik.Reporting.Drawing.BorderType.Solid
        Me.textBoxGrandTotalYearLabel.Style.BorderStyle.Top = Telerik.Reporting.Drawing.BorderType.None
        Me.textBoxGrandTotalYearLabel.Style.Font.Size = Telerik.Reporting.Drawing.Unit.Point(11.0)
        Me.textBoxGrandTotalYearLabel.Value = "GRAND TOTAL"
        ' 
        ' textBox2
        ' 
        Me.textBox2.CanGrow = False
        Me.textBox2.Name = "textBox2"
        Me.textBox2.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(4.29142093658447), Telerik.Reporting.Drawing.Unit.Inch(0.100000008940697))
        Me.textBox2.Style.BorderStyle.Bottom = Telerik.Reporting.Drawing.BorderType.None
        Me.textBox2.Style.BorderStyle.Top = Telerik.Reporting.Drawing.BorderType.None
        Me.textBox2.StyleName = ""
        ' 
        ' textBox9
        ' 
        Me.textBox9.Name = "textBox9"
        Me.textBox9.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(4.29142093658447), Telerik.Reporting.Drawing.Unit.Inch(0.0399999916553497))
        Me.textBox9.Style.BorderColor.Bottom = System.Drawing.Color.Black
        Me.textBox9.Style.BorderColor.Top = System.Drawing.Color.Black
        Me.textBox9.Style.BorderStyle.Bottom = Telerik.Reporting.Drawing.BorderType.Solid
        Me.textBox9.Style.BorderStyle.Top = Telerik.Reporting.Drawing.BorderType.Solid
        Me.textBox9.Style.BorderWidth.Top = Telerik.Reporting.Drawing.Unit.Point(3.0)
        Me.textBox9.Style.TextAlign = Telerik.Reporting.Drawing.HorizontalAlign.Right
        Me.textBox9.Style.VerticalAlign = Telerik.Reporting.Drawing.VerticalAlign.Bottom
        Me.textBox9.StyleName = "RedTextBox"
        Me.textBox9.Value = ""
        ' 
        ' textBoxCategory
        ' 
        toggleVisibilityAction2.DisplayExpandedMark = False
        tableGroup4.Groupings.Add(New Telerik.Reporting.Grouping("=Fields.ProductSubCategory"))
        tableGroup4.Name = "ProductSubCategory"
        tableGroup4.ReportItem = Me.textBoxSubCategory
        tableGroup4.Sortings.Add(New Telerik.Reporting.Sorting("=Fields.ProductSubCategory", Telerik.Reporting.SortDirection.Asc))
        tableGroup4.Visible = False
        tableGroup5.Name = "ProductSubCategoryTotal"
        tableGroup5.ReportItem = Me.textBox8
        tableGroup5.Visible = False
        toggleVisibilityAction2.Targets.AddRange(New Telerik.Reporting.IToggleVisibilityTarget() {tableGroup4, tableGroup5})
        Me.textBoxCategory.Action = toggleVisibilityAction2
        Me.textBoxCategory.KeepTogether = False
        Me.textBoxCategory.Name = "textBoxCategory"
        Me.textBoxCategory.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(1.57999992370605), Telerik.Reporting.Drawing.Unit.Inch(0.700787484645844))
        Me.textBoxCategory.Style.TextAlign = Telerik.Reporting.Drawing.HorizontalAlign.Left
        Me.textBoxCategory.Style.VerticalAlign = Telerik.Reporting.Drawing.VerticalAlign.Middle
        Me.textBoxCategory.Value = "=Fields.ProductCategory"
        ' 
        ' textBoxGrandTotalCategoryLabel
        ' 
        Me.textBoxGrandTotalCategoryLabel.Name = "textBoxGrandTotalCategoryLabel"
        Me.textBoxGrandTotalCategoryLabel.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(3.45999979972839), Telerik.Reporting.Drawing.Unit.Inch(0.350393712520599))
        Me.textBoxGrandTotalCategoryLabel.Style.BorderColor.Bottom = System.Drawing.Color.Black
        Me.textBoxGrandTotalCategoryLabel.Style.BorderColor.Top = System.Drawing.Color.Black
        Me.textBoxGrandTotalCategoryLabel.Style.BorderStyle.Bottom = Telerik.Reporting.Drawing.BorderType.Solid
        Me.textBoxGrandTotalCategoryLabel.Style.BorderStyle.Right = Telerik.Reporting.Drawing.BorderType.Solid
        Me.textBoxGrandTotalCategoryLabel.Style.BorderWidth.Bottom = Telerik.Reporting.Drawing.Unit.Point(2.0)
        Me.textBoxGrandTotalCategoryLabel.Style.Font.Size = Telerik.Reporting.Drawing.Unit.Point(11.0)
        Me.textBoxGrandTotalCategoryLabel.Style.LineStyle = Telerik.Reporting.Drawing.LineStyle.Solid
        Me.textBoxGrandTotalCategoryLabel.Style.TextAlign = Telerik.Reporting.Drawing.HorizontalAlign.Left
        Me.textBoxGrandTotalCategoryLabel.Value = "GRAND TOTAL"
        ' 
        ' detail
        ' 
        Me.detail.Height = Telerik.Reporting.Drawing.Unit.Inch(1.80000019073486)
        Me.detail.Items.AddRange(New Telerik.Reporting.ReportItemBase() {Me.crosstab1})
        Me.detail.Name = "detail"
        ' 
        ' crosstab1
        ' 
        Me.crosstab1.Body.Columns.Add(New Telerik.Reporting.TableBodyColumn(Telerik.Reporting.Drawing.Unit.Cm(2.43000078201294)))
        Me.crosstab1.Body.Columns.Add(New Telerik.Reporting.TableBodyColumn(Telerik.Reporting.Drawing.Unit.Cm(2.82020831108093)))
        Me.crosstab1.Body.Columns.Add(New Telerik.Reporting.TableBodyColumn(Telerik.Reporting.Drawing.Unit.Cm(2.4200005531311)))
        Me.crosstab1.Body.Columns.Add(New Telerik.Reporting.TableBodyColumn(Telerik.Reporting.Drawing.Unit.Cm(3.23000001907349)))
        Me.crosstab1.Body.Rows.Add(New Telerik.Reporting.TableBodyRow(Telerik.Reporting.Drawing.Unit.Cm(0.89000004529953)))
        Me.crosstab1.Body.Rows.Add(New Telerik.Reporting.TableBodyRow(Telerik.Reporting.Drawing.Unit.Cm(0.89000004529953)))
        Me.crosstab1.Body.Rows.Add(New Telerik.Reporting.TableBodyRow(Telerik.Reporting.Drawing.Unit.Cm(0.89000004529953)))
        Me.crosstab1.Body.SetCellContent(0, 0, Me.textBoxFact)
        Me.crosstab1.Body.SetCellContent(1, 0, Me.textBoxTotalCategory)
        Me.crosstab1.Body.SetCellContent(1, 2, Me.textBoxTotalCategoryYear)
        Me.crosstab1.Body.SetCellContent(0, 2, Me.textBoxTotalYear)
        Me.crosstab1.Body.SetCellContent(1, 3, Me.textBoxGrandTotalYearCategory)
        Me.crosstab1.Body.SetCellContent(0, 3, Me.textBoxGrandTotalSubCategoryYear)
        Me.crosstab1.Body.SetCellContent(2, 3, Me.textBoxGrandTotal)
        Me.crosstab1.Body.SetCellContent(2, 2, Me.GrandTotalCategoryYear)
        Me.crosstab1.Body.SetCellContent(2, 0, Me.textBoxGrandTotalCategoryQtr)
        Me.crosstab1.Body.SetCellContent(0, 1, Me.graph1)
        Me.crosstab1.Body.SetCellContent(2, 1, Me.graph4)
        Me.crosstab1.Body.SetCellContent(1, 1, Me.graph5)
        tableGroup9.Groupings.Add(New Telerik.Reporting.Grouping("=Fields.Qtr"))
        tableGroup9.Name = "Quarter"
        tableGroup9.ReportItem = Me.textBoxQtr
        tableGroup9.Sortings.Add(New Telerik.Reporting.Sorting("=Fields.Qtr", Telerik.Reporting.SortDirection.Asc))
        tableGroup9.Visible = False
        tableGroup10.Name = "GroupMonthlyTrend"
        tableGroup10.ReportItem = Me.textBox4
        tableGroup10.Visible = False
        tableGroup11.Name = "YearTotalGroup"
        tableGroup11.ReportItem = Me.textBoxTotalYearLabel
        tableGroup11.Visible = False
        tableGroup8.ChildGroups.Add(tableGroup9)
        tableGroup8.ChildGroups.Add(tableGroup10)
        tableGroup8.ChildGroups.Add(tableGroup11)
        tableGroup8.Groupings.Add(New Telerik.Reporting.Grouping("=Fields.OrderDate.Year"))
        tableGroup8.Name = "Year"
        tableGroup8.ReportItem = Me.textBoxYear
        tableGroup8.Sortings.Add(New Telerik.Reporting.Sorting("=Fields.OrderDate.Year", Telerik.Reporting.SortDirection.Asc))
        tableGroup12.ReportItem = Me.textBoxGrandTotalYearLabel
        tableGroup7.ChildGroups.Add(tableGroup8)
        tableGroup7.ChildGroups.Add(tableGroup12)
        tableGroup7.Name = "Group1"
        tableGroup7.ReportItem = Me.textBox2
        tableGroup6.ChildGroups.Add(tableGroup7)
        tableGroup6.Name = "Group4"
        tableGroup6.ReportItem = Me.textBox9
        Me.crosstab1.ColumnGroups.Add(tableGroup6)
        Me.crosstab1.ColumnHeadersPrintOnEveryPage = True
        Me.crosstab1.Corner.SetCellContent(2, 0, Me.textBox3, 2, 2)
        Me.crosstab1.Corner.SetCellContent(0, 0, Me.textBox5, 1, 2)
        Me.crosstab1.Corner.SetCellContent(1, 0, Me.textBox6, 1, 2)
        Me.crosstab1.DataSource = Me.sqlDataSource1
        Me.crosstab1.Items.AddRange(New Telerik.Reporting.ReportItemBase() {Me.textBoxFact, Me.textBoxTotalCategory, Me.textBoxTotalCategoryYear, Me.textBoxTotalYear, Me.textBoxGrandTotalYearCategory, Me.textBoxGrandTotalSubCategoryYear, _
            Me.textBoxGrandTotal, Me.GrandTotalCategoryYear, Me.textBoxGrandTotalCategoryQtr, Me.graph1, Me.graph4, Me.graph5, _
            Me.textBox9, Me.textBox2, Me.textBoxYear, Me.textBoxQtr, Me.textBox4, Me.textBoxTotalYearLabel, _
            Me.textBoxGrandTotalYearLabel, Me.textBox3, Me.textBox5, Me.textBox6, Me.textBoxSubCategory, Me.textBox8, _
            Me.textBoxCategory, Me.textBoxGrandTotalCategoryLabel})
        Me.crosstab1.Location = New Telerik.Reporting.Drawing.PointU(Telerik.Reporting.Drawing.Unit.Inch(0.0), Telerik.Reporting.Drawing.Unit.Inch(0.0))
        Me.crosstab1.Name = "crosstab1"
        tableGroup13.ChildGroups.Add(tableGroup4)
        tableGroup13.ChildGroups.Add(tableGroup5)
        tableGroup13.Groupings.Add(New Telerik.Reporting.Grouping("=Fields.ProductCategory"))
        tableGroup13.Name = "ProductCategory"
        tableGroup13.ReportItem = Me.textBoxCategory
        tableGroup13.Sortings.Add(New Telerik.Reporting.Sorting("=Fields.ProductCategory", Telerik.Reporting.SortDirection.Asc))
        tableGroup14.ReportItem = Me.textBoxGrandTotalCategoryLabel
        Me.crosstab1.RowGroups.Add(tableGroup13)
        Me.crosstab1.RowGroups.Add(tableGroup14)
        Me.crosstab1.RowHeadersPrintOnEveryPage = True
        Me.crosstab1.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Cm(19.6886081695557), Telerik.Reporting.Drawing.Unit.Cm(4.32100009918213))
        Me.crosstab1.Style.BorderColor.[Default] = System.Drawing.Color.Empty
        '
        'textBoxFact
        '
        typeReportSource1.Parameters.Add(New Telerik.Reporting.Parameter("ProductCategory", "=Fields.ProductCategory"))
        typeReportSource1.Parameters.Add(New Telerik.Reporting.Parameter("ProductSubcategory", "=Fields.ProductSubCategory"))
        typeReportSource1.Parameters.Add(New Telerik.Reporting.Parameter("FromDate", "=Min(Fields.OrderDate)"))
        typeReportSource1.Parameters.Add(New Telerik.Reporting.Parameter("ToDate", "=Max(Fields.OrderDate)"))
        typeReportSource1.TypeName = "ProductLineSales, VB.ReportLibrary, Version=1.0.0.0, Culture=neutral, PublicKeyTo" & _
    "ken=null"
        navigateToReportAction1.ReportSource = typeReportSource1
        Me.textBoxFact.Action = navigateToReportAction1
        Me.textBoxFact.Bindings.Add(New Telerik.Reporting.Binding("Action", "=IIF(Fields.ProductCategory IS NULL, NULL, ReportItem.ItemDefinition.Action)"))
        formattingRule1.Filters.Add(New Telerik.Reporting.Filter("Fields.ProductCategory IS NULL", Telerik.Reporting.FilterOperator.NotEqual, "=True"))
        formattingRule1.Style.Font.Underline = True
        Me.textBoxFact.ConditionalFormatting.AddRange(New Telerik.Reporting.Drawing.FormattingRule() {formattingRule1})
        Me.textBoxFact.Format = "{0:N1}"
        Me.textBoxFact.Name = "textBoxFact"
        Me.textBoxFact.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(0.95669287443161011R), Telerik.Reporting.Drawing.Unit.Inch(0.35039371252059937R))
        Me.textBoxFact.StyleName = "ItemDetails"
        Me.textBoxFact.Value = "=Sum(Fields.LineTotal)/1000.0"
        ' 
        ' textBoxTotalCategory
        ' 
        Me.textBoxTotalCategory.Format = "{0:N1}"
        Me.textBoxTotalCategory.Name = "textBoxTotalCategory"
        Me.textBoxTotalCategory.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(0.95669287443161), Telerik.Reporting.Drawing.Unit.Inch(0.350393712520599))
        Me.textBoxTotalCategory.Style.BackgroundColor = System.Drawing.Color.Ivory
        Me.textBoxTotalCategory.StyleName = ""
        Me.textBoxTotalCategory.Value = "=Sum(Fields.LineTotal)/1000.0"
        ' 
        ' textBoxTotalCategoryYear
        ' 
        Me.textBoxTotalCategoryYear.Format = "{0:N1}"
        Me.textBoxTotalCategoryYear.Name = "textBoxTotalCategoryYear"
        Me.textBoxTotalCategoryYear.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(0.952755987644196), Telerik.Reporting.Drawing.Unit.Inch(0.350393712520599))
        Me.textBoxTotalCategoryYear.Style.BackgroundColor = System.Drawing.Color.Ivory
        Me.textBoxTotalCategoryYear.Style.BorderStyle.Right = Telerik.Reporting.Drawing.BorderType.Solid
        Me.textBoxTotalCategoryYear.Style.BorderWidth.[Default] = Telerik.Reporting.Drawing.Unit.Pixel(1.0)
        Me.textBoxTotalCategoryYear.Value = "=Sum(Fields.LineTotal)/1000.0"
        ' 
        ' textBoxTotalYear
        ' 
        Me.textBoxTotalYear.Format = "{0:N1}"
        Me.textBoxTotalYear.Name = "textBoxTotalYear"
        Me.textBoxTotalYear.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(0.952755987644196), Telerik.Reporting.Drawing.Unit.Inch(0.350393712520599))
        Me.textBoxTotalYear.Style.BackgroundColor = System.Drawing.Color.Ivory
        Me.textBoxTotalYear.Style.BorderStyle.Right = Telerik.Reporting.Drawing.BorderType.Solid
        Me.textBoxTotalYear.StyleName = ""
        Me.textBoxTotalYear.Value = "=Sum(Fields.LineTotal)/1000.0"
        ' 
        ' textBoxGrandTotalYearCategory
        ' 
        Me.textBoxGrandTotalYearCategory.Format = "{0:N1}"
        Me.textBoxGrandTotalYearCategory.Name = "textBoxGrandTotalYearCategory"
        Me.textBoxGrandTotalYearCategory.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(1.2716536521911599), Telerik.Reporting.Drawing.Unit.Inch(0.350393712520599))
        Me.textBoxGrandTotalYearCategory.StyleName = "ItemTotal"
        Me.textBoxGrandTotalYearCategory.Value = "=Sum(Fields.LineTotal)/1000.0"
        ' 
        ' textBoxGrandTotalSubCategoryYear
        ' 
        Me.textBoxGrandTotalSubCategoryYear.Format = "{0:N1}"
        Me.textBoxGrandTotalSubCategoryYear.Name = "textBoxGrandTotalSubCategoryYear"
        Me.textBoxGrandTotalSubCategoryYear.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(1.2716536521911599), Telerik.Reporting.Drawing.Unit.Inch(0.350393712520599))
        Me.textBoxGrandTotalSubCategoryYear.StyleName = "ItemTotal"
        Me.textBoxGrandTotalSubCategoryYear.Value = "=Sum(Fields.LineTotal)/1000.0"
        ' 
        ' textBoxGrandTotal
        ' 
        Me.textBoxGrandTotal.Format = "{0:N1}"
        Me.textBoxGrandTotal.Name = "textBoxGrandTotal"
        Me.textBoxGrandTotal.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(1.2716536521911599), Telerik.Reporting.Drawing.Unit.Inch(0.350393712520599))
        Me.textBoxGrandTotal.Style.BorderColor.[Default] = System.Drawing.Color.Black
        Me.textBoxGrandTotal.Style.BorderStyle.Bottom = Telerik.Reporting.Drawing.BorderType.Solid
        Me.textBoxGrandTotal.Style.BorderWidth.[Default] = Telerik.Reporting.Drawing.Unit.Point(2.0)
        Me.textBoxGrandTotal.Style.BorderWidth.Top = Telerik.Reporting.Drawing.Unit.Point(1.0)
        Me.textBoxGrandTotal.Style.LineStyle = Telerik.Reporting.Drawing.LineStyle.Solid
        Me.textBoxGrandTotal.StyleName = "ItemTotal"
        Me.textBoxGrandTotal.Value = "=Sum(Fields.LineTotal)/1000.0"
        ' 
        ' GrandTotalCategoryYear
        ' 
        Me.GrandTotalCategoryYear.Format = "{0:N1}"
        Me.GrandTotalCategoryYear.Name = "GrandTotalCategoryYear"
        Me.GrandTotalCategoryYear.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(0.952755987644196), Telerik.Reporting.Drawing.Unit.Inch(0.350393712520599))
        Me.GrandTotalCategoryYear.Style.BackgroundColor = System.Drawing.Color.FromArgb(CInt(CByte(255)), CInt(CByte(248)), CInt(CByte(219)))
        Me.GrandTotalCategoryYear.Style.BorderColor.Bottom = System.Drawing.Color.Black
        Me.GrandTotalCategoryYear.Style.BorderColor.Top = System.Drawing.Color.Black
        Me.GrandTotalCategoryYear.Style.BorderStyle.Bottom = Telerik.Reporting.Drawing.BorderType.Solid
        Me.GrandTotalCategoryYear.Style.BorderStyle.Right = Telerik.Reporting.Drawing.BorderType.Solid
        Me.GrandTotalCategoryYear.Style.BorderWidth.[Default] = Telerik.Reporting.Drawing.Unit.Point(2.0)
        Me.GrandTotalCategoryYear.Style.BorderWidth.Right = Telerik.Reporting.Drawing.Unit.Point(1.0)
        Me.GrandTotalCategoryYear.Style.BorderWidth.Top = Telerik.Reporting.Drawing.Unit.Point(1.0)
        Me.GrandTotalCategoryYear.Style.LineStyle = Telerik.Reporting.Drawing.LineStyle.Solid
        Me.GrandTotalCategoryYear.Value = "=Sum(Fields.LineTotal)/1000.0"
        ' 
        ' textBoxGrandTotalCategoryQtr
        ' 
        Me.textBoxGrandTotalCategoryQtr.Format = "{0:N1}"
        Me.textBoxGrandTotalCategoryQtr.Name = "textBoxGrandTotalCategoryQtr"
        Me.textBoxGrandTotalCategoryQtr.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(0.95669287443161), Telerik.Reporting.Drawing.Unit.Inch(0.350393712520599))
        Me.textBoxGrandTotalCategoryQtr.Style.BackgroundColor = System.Drawing.Color.FromArgb(CInt(CByte(255)), CInt(CByte(248)), CInt(CByte(219)))
        Me.textBoxGrandTotalCategoryQtr.Style.BorderColor.[Default] = System.Drawing.Color.Black
        Me.textBoxGrandTotalCategoryQtr.Style.BorderStyle.Bottom = Telerik.Reporting.Drawing.BorderType.Solid
        Me.textBoxGrandTotalCategoryQtr.Style.BorderWidth.Bottom = Telerik.Reporting.Drawing.Unit.Point(2.0)
        Me.textBoxGrandTotalCategoryQtr.Style.LineStyle = Telerik.Reporting.Drawing.LineStyle.Solid
        Me.textBoxGrandTotalCategoryQtr.Value = "=Sum(Fields.LineTotal)/1000.0"
        ' 
        ' graph1
        ' 
        Me.graph1.Bindings.Add(New Telerik.Reporting.Binding("DataSource", "= ReportItem.DataObject"))
        graphGroup1.Groupings.Add(New Telerik.Reporting.Grouping("=Fields.OrderDate.Month"))
        graphGroup1.Name = "orderDate.MonthGroup2"
        graphGroup1.Sortings.Add(New Telerik.Reporting.Sorting("=Fields.OrderDate.Month", Telerik.Reporting.SortDirection.Asc))
        Me.graph1.CategoryGroups.Add(graphGroup1)
        colorPalette1.Colors.Add(System.Drawing.Color.FromArgb(CInt(CByte(192)), CInt(CByte(80)), CInt(CByte(77))))
        colorPalette1.Colors.Add(System.Drawing.Color.FromArgb(CInt(CByte(128)), CInt(CByte(100)), CInt(CByte(162))))
        colorPalette1.Colors.Add(System.Drawing.Color.FromArgb(CInt(CByte(247)), CInt(CByte(150)), CInt(CByte(70))))
        colorPalette1.Colors.Add(System.Drawing.Color.FromArgb(CInt(CByte(119)), CInt(CByte(44)), CInt(CByte(42))))
        colorPalette1.Colors.Add(System.Drawing.Color.FromArgb(CInt(CByte(77)), CInt(CByte(59)), CInt(CByte(98))))
        colorPalette1.Colors.Add(System.Drawing.Color.FromArgb(CInt(CByte(182)), CInt(CByte(87)), CInt(CByte(8))))
        Me.graph1.ColorPalette = colorPalette1
        Me.graph1.CoordinateSystems.Add(Me.cartesianCoordinateSystem2)
        Me.graph1.DataSource = Me.sqlDataSource1
        Me.graph1.Legend.IsInsidePlotArea = True
        Me.graph1.Legend.Style.LineColor = System.Drawing.Color.LightGray
        Me.graph1.Legend.Style.LineWidth = Telerik.Reporting.Drawing.Unit.Inch(0.0)
        Me.graph1.Legend.Style.Visible = False
        Me.graph1.Name = "graph1"
        Me.graph1.PlotAreaStyle.LineColor = System.Drawing.Color.LightGray
        Me.graph1.PlotAreaStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Inch(0.0)
        Me.graph1.Series.Add(Me.lineSeries1)
        graphGroup3.ChildGroups.Add(graphGroup2)
        graphGroup3.Groupings.Add(New Telerik.Reporting.Grouping("=Fields.ProductCategory"))
        graphGroup3.Name = "productCategoryGroup2"
        graphGroup3.Sortings.Add(New Telerik.Reporting.Sorting("=Fields.ProductCategory", Telerik.Reporting.SortDirection.Asc))
        Me.graph1.SeriesGroups.Add(graphGroup3)
        Me.graph1.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Cm(2.82020831108093), Telerik.Reporting.Drawing.Unit.Cm(0.89000004529953))
        Me.graph1.Style.BackgroundColor = System.Drawing.Color.Ivory
        Me.graph1.Style.BorderColor.[Default] = System.Drawing.Color.FromArgb(CInt(CByte(230)), CInt(CByte(230)), CInt(CByte(230)))
        Me.graph1.Style.BorderStyle.[Default] = Telerik.Reporting.Drawing.BorderType.Solid
        Me.graph1.Style.BorderWidth.[Default] = Telerik.Reporting.Drawing.Unit.Pixel(1.0)
        Me.graph1.Style.Padding.Bottom = Telerik.Reporting.Drawing.Unit.Pixel(6.0)
        Me.graph1.Style.Padding.Left = Telerik.Reporting.Drawing.Unit.Pixel(3.0)
        Me.graph1.Style.Padding.Right = Telerik.Reporting.Drawing.Unit.Pixel(3.0)
        Me.graph1.Style.Padding.Top = Telerik.Reporting.Drawing.Unit.Pixel(6.0)
        Me.graph1.Style.VerticalAlign = Telerik.Reporting.Drawing.VerticalAlign.Middle
        Me.graph1.StyleName = ""
        ' 
        ' cartesianCoordinateSystem2
        ' 
        Me.cartesianCoordinateSystem2.Name = "cartesianCoordinateSystem2"
        Me.cartesianCoordinateSystem2.XAxis = Me.graphAxis4
        Me.cartesianCoordinateSystem2.YAxis = Me.graphAxis3
        ' 
        ' graphAxis4
        ' 
        Me.graphAxis4.MajorGridLineStyle.LineColor = System.Drawing.Color.LightGray
        Me.graphAxis4.MajorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1.0)
        Me.graphAxis4.MajorGridLineStyle.Visible = False
        Me.graphAxis4.MinorGridLineStyle.LineColor = System.Drawing.Color.LightGray
        Me.graphAxis4.MinorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1.0)
        Me.graphAxis4.MinorGridLineStyle.Visible = False
        Me.graphAxis4.Name = "graphAxis4"
        numericalScaleCrossAxisPosition1.Position = Telerik.Reporting.GraphScaleCrossAxisPosition.Auto
        numericalScaleCrossAxisPosition1.Value = 0.0
        numericalScale1.CrossAxisPositions.Add(numericalScaleCrossAxisPosition1)
        numericalScale1.MajorStep = 1.0
        numericalScale1.Maximum = 12.0
        numericalScale1.Minimum = 0.0
        numericalScale1.SpacingSlotCount = 0.5
        Me.graphAxis4.Scale = numericalScale1
        Me.graphAxis4.Style.Visible = False
        ' 
        ' graphAxis3
        ' 
        Me.graphAxis3.MajorGridLineStyle.LineColor = System.Drawing.Color.LightGray
        Me.graphAxis3.MajorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1.0)
        Me.graphAxis3.MajorGridLineStyle.Visible = False
        Me.graphAxis3.MinorGridLineStyle.LineColor = System.Drawing.Color.LightGray
        Me.graphAxis3.MinorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1.0)
        Me.graphAxis3.MinorGridLineStyle.Visible = False
        Me.graphAxis3.Name = "graphAxis3"
        numericalScaleCrossAxisPosition2.Position = Telerik.Reporting.GraphScaleCrossAxisPosition.Auto
        numericalScaleCrossAxisPosition2.Value = 0.0
        numericalScale2.CrossAxisPositions.Add(numericalScaleCrossAxisPosition2)
        Me.graphAxis3.Scale = numericalScale2
        Me.graphAxis3.Style.Visible = False
        '
        'sqlDataSource1
        '
        Me.sqlDataSource1.CalculatedFields.AddRange(New Telerik.Reporting.CalculatedField() {New Telerik.Reporting.CalculatedField("Qtr", GetType(Integer), "= Quarter(Fields.OrderDate)")})
        Me.sqlDataSource1.ConnectionString = "My.MySettings.TelerikConnectionString"
        Me.sqlDataSource1.Name = "sqlDataSource1"
        Me.sqlDataSource1.SelectCommand = resources.GetString("sqlDataSource1.SelectCommand")
        ' 
        ' lineSeries1
        ' 
        Me.lineSeries1.CategoryGroup = graphGroup1
        Me.lineSeries1.CoordinateSystem = Me.cartesianCoordinateSystem2
        Me.lineSeries1.DataPointLabel = "=Sum(Fields.LineTotal)"
        Me.lineSeries1.DataPointLabelStyle.Visible = False
        Me.lineSeries1.DataPointStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Inch(0.0)
        Me.lineSeries1.DataPointStyle.Visible = False
        Me.lineSeries1.LegendItem.Style.LineColor = System.Drawing.Color.LightGray
        Me.lineSeries1.LegendItem.Style.LineWidth = Telerik.Reporting.Drawing.Unit.Cm(0.0)
        Me.lineSeries1.LegendItem.Value = "=Fields.ProductCategory + '/' + Fields.ProductSubCategory"
        Me.lineSeries1.LineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1.0)
        Me.lineSeries1.MarkerMaxSize = Telerik.Reporting.Drawing.Unit.Pixel(50.0)
        Me.lineSeries1.MarkerMinSize = Telerik.Reporting.Drawing.Unit.Pixel(5.0)
        Me.lineSeries1.MarkerSize = Telerik.Reporting.Drawing.Unit.Pixel(5.0)
        graphGroup2.Groupings.Add(New Telerik.Reporting.Grouping("=Fields.ProductSubCategory"))
        graphGroup2.Name = "productSubCategoryGroup1"
        graphGroup2.Sortings.Add(New Telerik.Reporting.Sorting("=Fields.ProductSubCategory", Telerik.Reporting.SortDirection.Asc))
        Me.lineSeries1.SeriesGroup = graphGroup2
        Me.lineSeries1.Size = Nothing
        Me.lineSeries1.X = "= Fields.OrderDate.Month"
        Me.lineSeries1.Y = "=Sum(Fields.LineTotal)"
        ' 
        ' graph4
        ' 
        Me.graph4.Bindings.Add(New Telerik.Reporting.Binding("DataSource", "= ReportItem.DataObject"))
        graphGroup4.Groupings.Add(New Telerik.Reporting.Grouping("=Fields.OrderDate.Month"))
        graphGroup4.Name = "orderDate.MonthGroup2"
        graphGroup4.Sortings.Add(New Telerik.Reporting.Sorting("=Fields.OrderDate.Month", Telerik.Reporting.SortDirection.Asc))
        Me.graph4.CategoryGroups.Add(graphGroup4)
        monochromaticPalette1.BaseColor = System.Drawing.Color.FromArgb(CInt(CByte(113)), CInt(CByte(137)), CInt(CByte(63)))
        Me.graph4.ColorPalette = monochromaticPalette1
        Me.graph4.CoordinateSystems.Add(Me.cartesianCoordinateSystem3)
        Me.graph4.DataSource = Me.sqlDataSource1
        Me.graph4.Legend.IsInsidePlotArea = True
        Me.graph4.Legend.Style.LineColor = System.Drawing.Color.LightGray
        Me.graph4.Legend.Style.LineWidth = Telerik.Reporting.Drawing.Unit.Inch(0.0)
        Me.graph4.Legend.Style.Visible = False
        Me.graph4.Name = "graph4"
        Me.graph4.PlotAreaStyle.LineColor = System.Drawing.Color.LightGray
        Me.graph4.PlotAreaStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Inch(0.0)
        Me.graph4.Series.Add(Me.barSeries2)
        Me.graph4.SeriesGroups.Add(graphGroup5)
        Me.graph4.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Cm(2.82020831108093), Telerik.Reporting.Drawing.Unit.Cm(0.89000004529953))
        Me.graph4.Style.BackgroundColor = System.Drawing.Color.FromArgb(CInt(CByte(255)), CInt(CByte(248)), CInt(CByte(219)))
        Me.graph4.Style.BorderColor.Bottom = System.Drawing.Color.Black
        Me.graph4.Style.BorderColor.[Default] = System.Drawing.Color.FromArgb(CInt(CByte(230)), CInt(CByte(230)), CInt(CByte(230)))
        Me.graph4.Style.BorderColor.Top = System.Drawing.Color.Black
        Me.graph4.Style.BorderStyle.Bottom = Telerik.Reporting.Drawing.BorderType.Solid
        Me.graph4.Style.BorderStyle.[Default] = Telerik.Reporting.Drawing.BorderType.Solid
        Me.graph4.Style.BorderStyle.Top = Telerik.Reporting.Drawing.BorderType.Solid
        Me.graph4.Style.BorderWidth.Bottom = Telerik.Reporting.Drawing.Unit.Point(2.0)
        Me.graph4.Style.BorderWidth.[Default] = Telerik.Reporting.Drawing.Unit.Pixel(1.0)
        Me.graph4.Style.BorderWidth.Top = Telerik.Reporting.Drawing.Unit.Point(1.0)
        Me.graph4.Style.Padding.Bottom = Telerik.Reporting.Drawing.Unit.Pixel(6.0)
        Me.graph4.Style.Padding.Left = Telerik.Reporting.Drawing.Unit.Pixel(3.0)
        Me.graph4.Style.Padding.Right = Telerik.Reporting.Drawing.Unit.Pixel(3.0)
        Me.graph4.Style.Padding.Top = Telerik.Reporting.Drawing.Unit.Pixel(6.0)
        Me.graph4.Style.VerticalAlign = Telerik.Reporting.Drawing.VerticalAlign.Middle
        Me.graph4.StyleName = ""
        ' 
        ' cartesianCoordinateSystem3
        ' 
        Me.cartesianCoordinateSystem3.Name = "cartesianCoordinateSystem2"
        Me.cartesianCoordinateSystem3.XAxis = Me.graphAxis5
        Me.cartesianCoordinateSystem3.YAxis = Me.graphAxis6
        ' 
        ' graphAxis5
        ' 
        Me.graphAxis5.MajorGridLineStyle.LineColor = System.Drawing.Color.LightGray
        Me.graphAxis5.MajorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1.0)
        Me.graphAxis5.MajorGridLineStyle.Visible = False
        Me.graphAxis5.MinorGridLineStyle.LineColor = System.Drawing.Color.LightGray
        Me.graphAxis5.MinorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1.0)
        Me.graphAxis5.MinorGridLineStyle.Visible = False
        Me.graphAxis5.Name = "graphAxis4"
        numericalScaleCrossAxisPosition3.Position = Telerik.Reporting.GraphScaleCrossAxisPosition.Auto
        numericalScaleCrossAxisPosition3.Value = 0.0
        numericalScale3.CrossAxisPositions.Add(numericalScaleCrossAxisPosition3)
        numericalScale3.MajorStep = 1.0
        numericalScale3.Maximum = 13.0
        numericalScale3.Minimum = 0.0
        numericalScale3.SpacingSlotCount = 0.5
        Me.graphAxis5.Scale = numericalScale3
        Me.graphAxis5.Style.Visible = False
        ' 
        ' graphAxis6
        ' 
        Me.graphAxis6.MajorGridLineStyle.LineColor = System.Drawing.Color.LightGray
        Me.graphAxis6.MajorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1.0)
        Me.graphAxis6.MajorGridLineStyle.Visible = False
        Me.graphAxis6.MinorGridLineStyle.LineColor = System.Drawing.Color.LightGray
        Me.graphAxis6.MinorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1.0)
        Me.graphAxis6.MinorGridLineStyle.Visible = False
        Me.graphAxis6.Name = "graphAxis3"
        numericalScaleCrossAxisPosition4.Position = Telerik.Reporting.GraphScaleCrossAxisPosition.Auto
        numericalScaleCrossAxisPosition4.Value = 0.0
        numericalScale4.CrossAxisPositions.Add(numericalScaleCrossAxisPosition4)
        Me.graphAxis6.Scale = numericalScale4
        Me.graphAxis6.Style.Visible = False
        ' 
        ' barSeries2
        ' 
        Me.barSeries2.CategoryGroup = graphGroup4
        Me.barSeries2.CoordinateSystem = Me.cartesianCoordinateSystem3
        Me.barSeries2.DataPointLabel = "=Sum(Fields.LineTotal)"
        Me.barSeries2.DataPointLabelStyle.Visible = False
        Me.barSeries2.DataPointStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Inch(0.0)
        Me.barSeries2.DataPointStyle.Visible = True
        Me.barSeries2.LegendItem.Style.LineColor = System.Drawing.Color.LightGray
        Me.barSeries2.LegendItem.Style.LineWidth = Telerik.Reporting.Drawing.Unit.Cm(0.0)
        Me.barSeries2.LegendItem.Value = "=Fields.ProductCategory + '/' + Fields.ProductSubCategory"
        graphGroup5.Name = "graphGroup1"
        Me.barSeries2.SeriesGroup = graphGroup5
        Me.barSeries2.X = "= Fields.OrderDate.Month"
        Me.barSeries2.Y = "=Sum(Fields.LineTotal)"
        ' 
        ' graph5
        ' 
        Me.graph5.Bindings.Add(New Telerik.Reporting.Binding("DataSource", "= ReportItem.DataObject"))
        graphGroup6.Groupings.Add(New Telerik.Reporting.Grouping("=Fields.OrderDate.Month"))
        graphGroup6.Name = "orderDate.MonthGroup2"
        graphGroup6.Sortings.Add(New Telerik.Reporting.Sorting("=Fields.OrderDate.Month", Telerik.Reporting.SortDirection.Asc))
        Me.graph5.CategoryGroups.Add(graphGroup6)
        Me.graph5.CoordinateSystems.Add(Me.cartesianCoordinateSystem1)
        Me.graph5.DataSource = Me.sqlDataSource1
        Me.graph5.Legend.IsInsidePlotArea = True
        Me.graph5.Legend.Style.LineColor = System.Drawing.Color.LightGray
        Me.graph5.Legend.Style.LineWidth = Telerik.Reporting.Drawing.Unit.Inch(0.0)
        Me.graph5.Legend.Style.Visible = False
        Me.graph5.Name = "graph5"
        Me.graph5.PlotAreaStyle.LineColor = System.Drawing.Color.LightGray
        Me.graph5.PlotAreaStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Inch(0.0)
        Me.graph5.Series.Add(Me.barSeries1)
        Me.graph5.SeriesGroups.Add(graphGroup7)
        Me.graph5.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Cm(2.82020854949951), Telerik.Reporting.Drawing.Unit.Cm(0.89000004529953))
        Me.graph5.Style.BackgroundColor = System.Drawing.Color.Ivory
        Me.graph5.Style.BorderColor.[Default] = System.Drawing.Color.FromArgb(CInt(CByte(230)), CInt(CByte(230)), CInt(CByte(230)))
        Me.graph5.Style.BorderStyle.[Default] = Telerik.Reporting.Drawing.BorderType.Solid
        Me.graph5.Style.BorderWidth.[Default] = Telerik.Reporting.Drawing.Unit.Pixel(1.0)
        Me.graph5.Style.Padding.Bottom = Telerik.Reporting.Drawing.Unit.Pixel(6.0)
        Me.graph5.Style.Padding.Left = Telerik.Reporting.Drawing.Unit.Pixel(3.0)
        Me.graph5.Style.Padding.Right = Telerik.Reporting.Drawing.Unit.Pixel(3.0)
        Me.graph5.Style.Padding.Top = Telerik.Reporting.Drawing.Unit.Pixel(6.0)
        Me.graph5.Style.VerticalAlign = Telerik.Reporting.Drawing.VerticalAlign.Middle
        Me.graph5.StyleName = ""
        ' 
        ' cartesianCoordinateSystem1
        ' 
        Me.cartesianCoordinateSystem1.Name = "cartesianCoordinateSystem2"
        Me.cartesianCoordinateSystem1.XAxis = Me.graphAxis1
        Me.cartesianCoordinateSystem1.YAxis = Me.graphAxis2
        ' 
        ' graphAxis1
        ' 
        Me.graphAxis1.MajorGridLineStyle.LineColor = System.Drawing.Color.LightGray
        Me.graphAxis1.MajorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1.0)
        Me.graphAxis1.MajorGridLineStyle.Visible = False
        Me.graphAxis1.MinorGridLineStyle.LineColor = System.Drawing.Color.LightGray
        Me.graphAxis1.MinorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1.0)
        Me.graphAxis1.MinorGridLineStyle.Visible = False
        Me.graphAxis1.Name = "graphAxis4"
        numericalScaleCrossAxisPosition5.Position = Telerik.Reporting.GraphScaleCrossAxisPosition.Auto
        numericalScaleCrossAxisPosition5.Value = 0.0
        numericalScale5.CrossAxisPositions.Add(numericalScaleCrossAxisPosition5)
        numericalScale5.MajorStep = 1.0
        numericalScale5.Maximum = 13.0
        numericalScale5.Minimum = 0.0
        numericalScale5.SpacingSlotCount = 0.5
        Me.graphAxis1.Scale = numericalScale5
        Me.graphAxis1.Style.Visible = False
        ' 
        ' graphAxis2
        ' 
        Me.graphAxis2.MajorGridLineStyle.LineColor = System.Drawing.Color.LightGray
        Me.graphAxis2.MajorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1.0)
        Me.graphAxis2.MajorGridLineStyle.Visible = False
        Me.graphAxis2.MinorGridLineStyle.LineColor = System.Drawing.Color.LightGray
        Me.graphAxis2.MinorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1.0)
        Me.graphAxis2.MinorGridLineStyle.Visible = False
        Me.graphAxis2.Name = "graphAxis3"
        numericalScaleCrossAxisPosition6.Position = Telerik.Reporting.GraphScaleCrossAxisPosition.Auto
        numericalScaleCrossAxisPosition6.Value = 0.0
        numericalScale6.CrossAxisPositions.Add(numericalScaleCrossAxisPosition6)
        Me.graphAxis2.Scale = numericalScale6
        Me.graphAxis2.Style.Visible = False
        ' 
        ' barSeries1
        ' 
        Me.barSeries1.CategoryGroup = graphGroup6
        Me.barSeries1.CoordinateSystem = Me.cartesianCoordinateSystem1
        Me.barSeries1.DataPointLabel = "=Sum(Fields.LineTotal)"
        Me.barSeries1.DataPointLabelStyle.Visible = False
        Me.barSeries1.DataPointStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Inch(0.0)
        Me.barSeries1.DataPointStyle.Visible = True
        Me.barSeries1.LegendItem.Style.LineColor = System.Drawing.Color.LightGray
        Me.barSeries1.LegendItem.Style.LineWidth = Telerik.Reporting.Drawing.Unit.Cm(0.0)
        Me.barSeries1.LegendItem.Value = "=Fields.ProductCategory + '/' + Fields.ProductSubCategory"
        graphGroup8.Groupings.Add(New Telerik.Reporting.Grouping("=Fields.ProductSubCategory"))
        graphGroup8.Name = "productSubCategoryGroup1"
        graphGroup8.Sortings.Add(New Telerik.Reporting.Sorting("=Fields.ProductSubCategory", Telerik.Reporting.SortDirection.Asc))
        graphGroup7.ChildGroups.Add(graphGroup8)
        graphGroup7.Groupings.Add(New Telerik.Reporting.Grouping("=Fields.ProductCategory"))
        graphGroup7.Name = "productCategoryGroup3"
        graphGroup7.Sortings.Add(New Telerik.Reporting.Sorting("=Fields.ProductCategory", Telerik.Reporting.SortDirection.Asc))
        Me.barSeries1.SeriesGroup = graphGroup7
        Me.barSeries1.X = "= Fields.OrderDate.Month"
        Me.barSeries1.Y = "=Sum(Fields.LineTotal)"
        ' 
        ' textBox3
        ' 
        Me.textBox3.Name = "textBox3"
        Me.textBox3.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(3.46000003814697), Telerik.Reporting.Drawing.Unit.Inch(0.509999990463257))
        Me.textBox3.Style.BorderColor.Bottom = System.Drawing.Color.FromArgb(CInt(CByte(230)), CInt(CByte(230)), CInt(CByte(230)))
        Me.textBox3.Style.BorderStyle.Bottom = Telerik.Reporting.Drawing.BorderType.Solid
        Me.textBox3.Style.BorderStyle.Right = Telerik.Reporting.Drawing.BorderType.Solid
        Me.textBox3.Style.BorderStyle.Top = Telerik.Reporting.Drawing.BorderType.None
        Me.textBox3.Style.TextAlign = Telerik.Reporting.Drawing.HorizontalAlign.Left
        Me.textBox3.Style.VerticalAlign = Telerik.Reporting.Drawing.VerticalAlign.Top
        Me.textBox3.StyleName = "RedTextBox"
        Me.textBox3.Value = "(USD IN THOUSANDS)"
        ' 
        ' textBox5
        ' 
        Me.textBox5.Name = "textBox5"
        Me.textBox5.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(3.46000003814697), Telerik.Reporting.Drawing.Unit.Inch(0.0399999991059303))
        Me.textBox5.Style.BorderColor.Bottom = System.Drawing.Color.Black
        Me.textBox5.Style.BorderColor.Top = System.Drawing.Color.Black
        Me.textBox5.Style.BorderStyle.Bottom = Telerik.Reporting.Drawing.BorderType.Solid
        Me.textBox5.Style.BorderStyle.Top = Telerik.Reporting.Drawing.BorderType.Solid
        Me.textBox5.Style.BorderWidth.Top = Telerik.Reporting.Drawing.Unit.Point(3.0)
        Me.textBox5.Style.VerticalAlign = Telerik.Reporting.Drawing.VerticalAlign.Bottom
        Me.textBox5.StyleName = ""
        ' 
        ' textBox6
        ' 
        Me.textBox6.CanGrow = False
        Me.textBox6.Name = "textBox6"
        Me.textBox6.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(3.46000003814697), Telerik.Reporting.Drawing.Unit.Inch(0.100000001490116))
        Me.textBox6.Style.BorderStyle.Top = Telerik.Reporting.Drawing.BorderType.None
        Me.textBox6.StyleName = ""
        ' 
        ' textBox1
        ' 
        Me.textBox1.Location = New Telerik.Reporting.Drawing.PointU(Telerik.Reporting.Drawing.Unit.Inch(0.0000392595939047169), Telerik.Reporting.Drawing.Unit.Inch(0.0000394185371987987))
        Me.textBox1.Name = "textBox1"
        Me.textBox1.Size = New Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(6.64391946792603), Telerik.Reporting.Drawing.Unit.Inch(0.499960571527481))
        Me.textBox1.StyleName = "Header"
        Me.textBox1.Value = "Sales by Product Line per Period"
        ' 
        ' reportHeaderSection1
        ' 
        Me.reportHeaderSection1.Height = Telerik.Reporting.Drawing.Unit.Inch(0.5)
        Me.reportHeaderSection1.Items.AddRange(New Telerik.Reporting.ReportItemBase() {Me.textBox1})
        Me.reportHeaderSection1.Name = "reportHeaderSection1"
        ' 
        ' ProductSales
        ' 
        Me.Items.AddRange(New Telerik.Reporting.ReportItemBase() {Me.detail, Me.reportHeaderSection1})
        Me.Name = "ProductSales"
        Me.PageSettings.Landscape = True
        Me.PageSettings.Margins = New Telerik.Reporting.Drawing.MarginsU(Telerik.Reporting.Drawing.Unit.Inch(0.200000002980232), Telerik.Reporting.Drawing.Unit.Inch(0.200000002980232), Telerik.Reporting.Drawing.Unit.Inch(0.300000011920929), Telerik.Reporting.Drawing.Unit.Inch(0.400000005960464))
        Me.PageSettings.PaperKind = System.Drawing.Printing.PaperKind.A4
        pictureWatermark1.Image = DirectCast(resources.GetObject("pictureWatermark1.Image"), Object)
        pictureWatermark1.Opacity = 0.17
        pictureWatermark1.Position = Telerik.Reporting.Drawing.WatermarkPosition.Front
        pictureWatermark1.Sizing = Telerik.Reporting.Drawing.WatermarkSizeMode.ScaleProportional
        Me.PageSettings.Watermarks.Add(pictureWatermark1)
        styleRule1.Selectors.AddRange(New Telerik.Reporting.Drawing.ISelector() {New Telerik.Reporting.Drawing.StyleSelector("Header")})
        styleRule1.Style.Font.Bold = True
        styleRule1.Style.Font.Name = "Segoe UI Light"
        styleRule1.Style.Font.Size = Telerik.Reporting.Drawing.Unit.Point(25.0)
        styleRule1.Style.Padding.Left = Telerik.Reporting.Drawing.Unit.Inch(0.0)
        descendantSelector1.Selectors.AddRange(New Telerik.Reporting.Drawing.ISelector() {New Telerik.Reporting.Drawing.TypeSelector(GetType(Telerik.Reporting.Crosstab)), New Telerik.Reporting.Drawing.TypeSelector(GetType(Telerik.Reporting.ReportItem))})
        styleRule2.Selectors.AddRange(New Telerik.Reporting.Drawing.ISelector() {descendantSelector1})
        styleRule2.Style.BorderColor.[Default] = System.Drawing.Color.FromArgb(CInt(CByte(230)), CInt(CByte(230)), CInt(CByte(230)))
        styleRule2.Style.BorderStyle.Bottom = Telerik.Reporting.Drawing.BorderType.None
        styleRule2.Style.BorderStyle.Top = Telerik.Reporting.Drawing.BorderType.Solid
        styleRule2.Style.Font.Name = "Segoe UI"
        styleRule2.Style.Font.Size = Telerik.Reporting.Drawing.Unit.Point(10.0)
        styleRule2.Style.Padding.Bottom = Telerik.Reporting.Drawing.Unit.Cm(0.0)
        styleRule2.Style.Padding.Left = Telerik.Reporting.Drawing.Unit.Cm(0.0)
        styleRule2.Style.Padding.Right = Telerik.Reporting.Drawing.Unit.Cm(0.0)
        styleRule2.Style.TextAlign = Telerik.Reporting.Drawing.HorizontalAlign.Right
        styleRule2.Style.VerticalAlign = Telerik.Reporting.Drawing.VerticalAlign.Bottom
        styleRule3.Selectors.AddRange(New Telerik.Reporting.Drawing.ISelector() {New Telerik.Reporting.Drawing.StyleSelector("RedTextBox")})
        styleRule3.Style.BorderStyle.Bottom = Telerik.Reporting.Drawing.BorderType.None
        styleRule3.Style.BorderStyle.Top = Telerik.Reporting.Drawing.BorderType.None
        styleRule3.Style.Color = System.Drawing.Color.FromArgb(CInt(CByte(195)), CInt(CByte(47)), CInt(CByte(11)))
        styleRule3.Style.Font.Name = "Segoe UI"
        styleRule3.Style.Font.Size = Telerik.Reporting.Drawing.Unit.Point(10.0)
        styleRule4.Selectors.AddRange(New Telerik.Reporting.Drawing.ISelector() {New Telerik.Reporting.Drawing.StyleSelector("ItemDetails")})
        styleRule4.Style.BackgroundColor = System.Drawing.Color.FromArgb(CInt(CByte(247)), CInt(CByte(247)), CInt(CByte(247)))
        styleRule5.Selectors.AddRange(New Telerik.Reporting.Drawing.ISelector() {New Telerik.Reporting.Drawing.StyleSelector("ItemTotal")})
        styleRule5.Style.BackgroundColor = System.Drawing.Color.FromArgb(CInt(CByte(255)), CInt(CByte(248)), CInt(CByte(219)))
        styleRule6.Selectors.AddRange(New Telerik.Reporting.Drawing.ISelector() {New Telerik.Reporting.Drawing.TypeSelector(GetType(Telerik.Reporting.TextItemBase)), New Telerik.Reporting.Drawing.TypeSelector(GetType(Telerik.Reporting.HtmlTextBox))})
        styleRule6.Style.Padding.Left = Telerik.Reporting.Drawing.Unit.Point(2.0)
        styleRule6.Style.Padding.Right = Telerik.Reporting.Drawing.Unit.Point(2.0)
        Me.StyleSheet.AddRange(New Telerik.Reporting.Drawing.StyleRule() {styleRule1, styleRule2, styleRule3, styleRule4, styleRule5, styleRule6})
        Me.Width = Telerik.Reporting.Drawing.Unit.Inch(7.75142097473145)
        DirectCast(Me, System.ComponentModel.ISupportInitialize).EndInit()

    End Sub
#End Region

    Private detail As Telerik.Reporting.DetailSection
    Private sqlDataSource1 As SqlDataSource
    Private textBox1 As Telerik.Reporting.TextBox
    Private reportHeaderSection1 As ReportHeaderSection
    Private crosstab1 As Crosstab
    Private textBoxFact As Telerik.Reporting.TextBox
    Private textBoxTotalCategory As Telerik.Reporting.TextBox
    Private textBoxTotalCategoryYear As Telerik.Reporting.TextBox
    Private textBoxTotalYear As Telerik.Reporting.TextBox
    Private textBoxGrandTotalYearCategory As Telerik.Reporting.TextBox
    Private textBoxGrandTotalSubCategoryYear As Telerik.Reporting.TextBox
    Private textBoxGrandTotal As Telerik.Reporting.TextBox
    Private GrandTotalCategoryYear As Telerik.Reporting.TextBox
    Private textBoxGrandTotalCategoryQtr As Telerik.Reporting.TextBox
    Private textBoxQtr As Telerik.Reporting.TextBox
    Private textBoxTotalYearLabel As Telerik.Reporting.TextBox
    Private textBoxYear As Telerik.Reporting.TextBox
    Private textBoxGrandTotalYearLabel As Telerik.Reporting.TextBox
    Private textBox2 As Telerik.Reporting.TextBox
    Private textBox9 As Telerik.Reporting.TextBox
    Private textBox3 As Telerik.Reporting.TextBox
    Private textBox5 As Telerik.Reporting.TextBox
    Private textBox6 As Telerik.Reporting.TextBox
    Private textBoxSubCategory As Telerik.Reporting.TextBox
    Private textBox8 As Telerik.Reporting.TextBox
    Private textBoxCategory As Telerik.Reporting.TextBox
    Private textBoxGrandTotalCategoryLabel As Telerik.Reporting.TextBox
    Private textBox4 As Telerik.Reporting.TextBox
    Private graph1 As Graph
    Private cartesianCoordinateSystem2 As CartesianCoordinateSystem
    Private graphAxis4 As GraphAxis
    Private graphAxis3 As GraphAxis
    Private lineSeries1 As LineSeries
    Private graph4 As Graph
    Private cartesianCoordinateSystem3 As CartesianCoordinateSystem
    Private graphAxis5 As GraphAxis
    Private graphAxis6 As GraphAxis
    Private barSeries2 As BarSeries
    Private graph5 As Graph
    Private cartesianCoordinateSystem1 As CartesianCoordinateSystem
    Private graphAxis1 As GraphAxis
    Private graphAxis2 As GraphAxis
    Private barSeries1 As BarSeries
End Class

'=======================================================
'Service provided by Telerik (www.telerik.com)
'Conversion powered by NRefactory.
'Twitter: @telerik
'Facebook: facebook.com/telerik
'=======================================================

