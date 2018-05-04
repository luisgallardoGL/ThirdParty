namespace Telerik.Reporting.Examples.CSharp
{
	using System.ComponentModel;
	using System.Drawing;
	using System.Windows.Forms;
	using Telerik.Reporting;
	using Telerik.Reporting.Drawing;

	partial class SalesByRegionDashboard
	{
		#region Component Designer generated code
		/// <summary>
		/// Required method for telerik Reporting designer support - do not modify
		/// the contents of this method with the code editor.
		/// </summary>
		private void InitializeComponent()
		{
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(SalesByRegionDashboard));
            Telerik.Reporting.Drawing.ColorPalette colorPalette1 = new Telerik.Reporting.Drawing.ColorPalette();
            Telerik.Reporting.GeoLocationMapGroup geoLocationMapGroup1 = new Telerik.Reporting.GeoLocationMapGroup();
            Telerik.Reporting.MapLegend mapLegend1 = new Telerik.Reporting.MapLegend();
            Telerik.Reporting.MercatorProjection mercatorProjection1 = new Telerik.Reporting.MercatorProjection();
            Telerik.Reporting.MapQuestTileProvider mapQuestTileProvider1 = new Telerik.Reporting.MapQuestTileProvider();
            Telerik.Reporting.MapTitle mapTitle1 = new Telerik.Reporting.MapTitle();
            Telerik.Reporting.MapGroup mapGroup1 = new Telerik.Reporting.MapGroup();
            Telerik.Reporting.GraphGroup graphGroup1 = new Telerik.Reporting.GraphGroup();
            Telerik.Reporting.Drawing.ColorPalette colorPalette2 = new Telerik.Reporting.Drawing.ColorPalette();
            Telerik.Reporting.GraphTitle graphTitle1 = new Telerik.Reporting.GraphTitle();
            Telerik.Reporting.DateTimeScale dateTimeScale1 = new Telerik.Reporting.DateTimeScale();
            Telerik.Reporting.NumericalScale numericalScale1 = new Telerik.Reporting.NumericalScale();
            Telerik.Reporting.GraphGroup graphGroup2 = new Telerik.Reporting.GraphGroup();
            Telerik.Reporting.GraphGroup graphGroup3 = new Telerik.Reporting.GraphGroup();
            Telerik.Reporting.Drawing.ColorPalette colorPalette3 = new Telerik.Reporting.Drawing.ColorPalette();
            Telerik.Reporting.GraphTitle graphTitle2 = new Telerik.Reporting.GraphTitle();
            Telerik.Reporting.NumericalScale numericalScale2 = new Telerik.Reporting.NumericalScale();
            Telerik.Reporting.CategoryScale categoryScale1 = new Telerik.Reporting.CategoryScale();
            Telerik.Reporting.GraphGroup graphGroup4 = new Telerik.Reporting.GraphGroup();
            Telerik.Reporting.GraphGroup graphGroup5 = new Telerik.Reporting.GraphGroup();
            Telerik.Reporting.Drawing.ColorPalette colorPalette4 = new Telerik.Reporting.Drawing.ColorPalette();
            Telerik.Reporting.GraphTitle graphTitle3 = new Telerik.Reporting.GraphTitle();
            Telerik.Reporting.NumericalScale numericalScale3 = new Telerik.Reporting.NumericalScale();
            Telerik.Reporting.CategoryScale categoryScale2 = new Telerik.Reporting.CategoryScale();
            Telerik.Reporting.GraphGroup graphGroup6 = new Telerik.Reporting.GraphGroup();
            Telerik.Reporting.ReportParameter reportParameter1 = new Telerik.Reporting.ReportParameter();
            Telerik.Reporting.ReportParameter reportParameter2 = new Telerik.Reporting.ReportParameter();
            Telerik.Reporting.Drawing.StyleRule styleRule1 = new Telerik.Reporting.Drawing.StyleRule();
            Telerik.Reporting.Drawing.StyleRule styleRule2 = new Telerik.Reporting.Drawing.StyleRule();
            Telerik.Reporting.Drawing.DescendantSelector descendantSelector1 = new Telerik.Reporting.Drawing.DescendantSelector();
            Telerik.Reporting.Drawing.StyleRule styleRule3 = new Telerik.Reporting.Drawing.StyleRule();
            Telerik.Reporting.Drawing.StyleRule styleRule4 = new Telerik.Reporting.Drawing.StyleRule();
            Telerik.Reporting.Drawing.StyleRule styleRule5 = new Telerik.Reporting.Drawing.StyleRule();
            Telerik.Reporting.Drawing.StyleRule styleRule6 = new Telerik.Reporting.Drawing.StyleRule();
            Telerik.Reporting.Drawing.StyleRule styleRule7 = new Telerik.Reporting.Drawing.StyleRule();
            this.yearsData = new Telerik.Reporting.SqlDataSource();
            this.countryData = new Telerik.Reporting.SqlDataSource();
            this.sqlDataSource1 = new Telerik.Reporting.SqlDataSource();
            this.salesData = new Telerik.Reporting.SqlDataSource();
            this.detailSection1 = new Telerik.Reporting.DetailSection();
            this.map1 = new Telerik.Reporting.Map();
            this.pointMapSeries1 = new Telerik.Reporting.PointMapSeries();
            this.graph1 = new Telerik.Reporting.Graph();
            this.cartesianCoordinateSystem1 = new Telerik.Reporting.CartesianCoordinateSystem();
            this.graphAxis2 = new Telerik.Reporting.GraphAxis();
            this.graphAxis1 = new Telerik.Reporting.GraphAxis();
            this.lineSeries1 = new Telerik.Reporting.LineSeries();
            this.graph2 = new Telerik.Reporting.Graph();
            this.cartesianCoordinateSystem2 = new Telerik.Reporting.CartesianCoordinateSystem();
            this.graphAxis3 = new Telerik.Reporting.GraphAxis();
            this.graphAxis4 = new Telerik.Reporting.GraphAxis();
            this.barSeries1 = new Telerik.Reporting.BarSeries();
            this.graph3 = new Telerik.Reporting.Graph();
            this.cartesianCoordinateSystem3 = new Telerik.Reporting.CartesianCoordinateSystem();
            this.graphAxis5 = new Telerik.Reporting.GraphAxis();
            this.graphAxis6 = new Telerik.Reporting.GraphAxis();
            this.barSeries2 = new Telerik.Reporting.BarSeries();
            this.textBox1 = new Telerik.Reporting.TextBox();
            this.textBox2 = new Telerik.Reporting.TextBox();
            ((System.ComponentModel.ISupportInitialize)(this)).BeginInit();
            // 
            // yearsData
            // 
            this.yearsData.ConnectionString = "Telerik.Reporting.Examples.CSharp.Properties.Settings.TelerikConnectionString";
            this.yearsData.Name = "yearsData";
            this.yearsData.SelectCommand = "SELECT DISTINCT DatePart(YEAR, soh.OrderDate) AS Year\r\nFROM Sales.SalesOrderHeade" +
    "r AS soh\r\nORDER BY DatePart(YEAR, soh.OrderDate) ASC";
            // 
            // countryData
            // 
            this.countryData.ConnectionString = "Telerik.Reporting.Examples.CSharp.Properties.Settings.TelerikConnectionString";
            this.countryData.Name = "countryData";
            this.countryData.SelectCommand = resources.GetString("countryData.SelectCommand");
            // 
            // sqlDataSource1
            // 
            this.sqlDataSource1.CalculatedFields.AddRange(new Telerik.Reporting.CalculatedField[] {
            new Telerik.Reporting.CalculatedField("Qtr", typeof(int), "= Quarter(Fields.OrderDate)")});
            this.sqlDataSource1.ConnectionString = "Telerik.Reporting.Examples.CSharp.Properties.Settings.TelerikConnectionString";
            this.sqlDataSource1.Name = "sqlDataSource1";
            this.sqlDataSource1.SelectCommand = resources.GetString("sqlDataSource1.SelectCommand");
            // 
            // salesData
            // 
            this.salesData.ConnectionString = "Telerik.Reporting.Examples.CSharp.Properties.Settings.TelerikConnectionString";
            this.salesData.Name = "salesData";
            this.salesData.Parameters.AddRange(new Telerik.Reporting.SqlDataSourceParameter[] {
            new Telerik.Reporting.SqlDataSourceParameter("@country", System.Data.DbType.String, "=Parameters.country.Value"),
            new Telerik.Reporting.SqlDataSourceParameter("@year", System.Data.DbType.Int32, "=Parameters.year.Value")});
            this.salesData.SelectCommand = resources.GetString("salesData.SelectCommand");
            // 
            // detailSection1
            // 
            this.detailSection1.Height = Telerik.Reporting.Drawing.Unit.Inch(8.070866584777832D);
            this.detailSection1.Items.AddRange(new Telerik.Reporting.ReportItemBase[] {
            this.map1,
            this.graph1,
            this.graph2,
            this.graph3,
            this.textBox1,
            this.textBox2});
            this.detailSection1.Name = "detailSection1";
            this.detailSection1.Style.Padding.Bottom = Telerik.Reporting.Drawing.Unit.Mm(5D);
            this.detailSection1.Style.Padding.Left = Telerik.Reporting.Drawing.Unit.Mm(5D);
            this.detailSection1.Style.Padding.Right = Telerik.Reporting.Drawing.Unit.Mm(5D);
            this.detailSection1.Style.Padding.Top = Telerik.Reporting.Drawing.Unit.Mm(5D);
            // 
            // map1
            // 
            colorPalette1.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(79)))), ((int)(((byte)(129)))), ((int)(((byte)(189))))));
            colorPalette1.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(155)))), ((int)(((byte)(187)))), ((int)(((byte)(89))))));
            colorPalette1.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(75)))), ((int)(((byte)(172)))), ((int)(((byte)(198))))));
            colorPalette1.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(44)))), ((int)(((byte)(77)))), ((int)(((byte)(117))))));
            colorPalette1.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(95)))), ((int)(((byte)(117)))), ((int)(((byte)(48))))));
            colorPalette1.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(39)))), ((int)(((byte)(106)))), ((int)(((byte)(124))))));
            this.map1.ColorPalette = colorPalette1;
            this.map1.DataSource = this.salesData;
            this.map1.Filters.Add(new Telerik.Reporting.Filter("=Fields.Country", Telerik.Reporting.FilterOperator.In, "=@country"));
            this.map1.Filters.Add(new Telerik.Reporting.Filter("=Fields.OrderDate.Year", Telerik.Reporting.FilterOperator.In, "=@year"));
            geoLocationMapGroup1.Groupings.Add(new Telerik.Reporting.Grouping("=Fields.City"));
            geoLocationMapGroup1.Name = "cityGroup";
            geoLocationMapGroup1.Sortings.Add(new Telerik.Reporting.Sorting("=Fields.City", Telerik.Reporting.SortDirection.Asc));
            this.map1.GeoLocationGroups.Add(geoLocationMapGroup1);
            mapLegend1.Style.LineColor = System.Drawing.Color.LightGray;
            mapLegend1.Style.LineWidth = Telerik.Reporting.Drawing.Unit.Cm(0D);
            mapLegend1.Style.Visible = false;
            this.map1.Legends.Add(mapLegend1);
            this.map1.Location = new Telerik.Reporting.Drawing.PointU(Telerik.Reporting.Drawing.Unit.Cm(0.50010007619857788D), Telerik.Reporting.Drawing.Unit.Cm(3.0002996921539307D));
            this.map1.Meridians.Style.LineColor = System.Drawing.Color.LightGray;
            this.map1.Name = "map1";
            this.map1.Parallels.Style.LineColor = System.Drawing.Color.LightGray;
            this.map1.PlotAreaStyle.LineColor = System.Drawing.Color.LightGray;
            this.map1.PlotAreaStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Cm(0D);
            this.map1.Projection = mercatorProjection1;
            this.map1.Series.Add(this.pointMapSeries1);
            this.map1.SeriesGroups.Add(mapGroup1);
            this.map1.Size = new Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Cm(14.499899864196777D), Telerik.Reporting.Drawing.Unit.Cm(11.499997138977051D));
            this.map1.Style.Padding.Bottom = Telerik.Reporting.Drawing.Unit.Pixel(10D);
            this.map1.Style.Padding.Left = Telerik.Reporting.Drawing.Unit.Pixel(10D);
            this.map1.Style.Padding.Right = Telerik.Reporting.Drawing.Unit.Pixel(10D);
            this.map1.Style.Padding.Top = Telerik.Reporting.Drawing.Unit.Pixel(10D);
            mapQuestTileProvider1.ServerUrls.Add("http://otile1.mqcdn.com/tiles/1.0.0/");
            mapQuestTileProvider1.ServerUrls.Add("http://otile2.mqcdn.com/tiles/1.0.0/");
            mapQuestTileProvider1.ServerUrls.Add("http://otile3.mqcdn.com/tiles/1.0.0/");
            mapQuestTileProvider1.ServerUrls.Add("http://otile4.mqcdn.com/tiles/1.0.0/");
            this.map1.TileProvider = mapQuestTileProvider1;
            mapTitle1.Position = Telerik.Reporting.GraphItemPosition.TopLeft;
            mapTitle1.Style.Color = System.Drawing.Color.FromArgb(((int)(((byte)(152)))), ((int)(((byte)(152)))), ((int)(((byte)(152)))));
            mapTitle1.Style.Font.Bold = false;
            mapTitle1.Style.Font.Size = Telerik.Reporting.Drawing.Unit.Point(9D);
            mapTitle1.Style.LineColor = System.Drawing.Color.LightGray;
            mapTitle1.Style.LineWidth = Telerik.Reporting.Drawing.Unit.Cm(0D);
            mapTitle1.Style.Visible = true;
            mapTitle1.Text = "SALES VOLUME BY COUNTRY";
            this.map1.Titles.Add(mapTitle1);
            // 
            // pointMapSeries1
            // 
            this.pointMapSeries1.DataPointLabel = "{Country},{City},({Lat},{Long})";
            this.pointMapSeries1.DataPointLabelStyle.Visible = false;
            this.pointMapSeries1.DataPointStyle.LineColor = System.Drawing.Color.DimGray;
            this.pointMapSeries1.DataPointStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1D);
            this.pointMapSeries1.DataPointStyle.Visible = true;
            this.pointMapSeries1.GeoLocationGroup = geoLocationMapGroup1;
            this.pointMapSeries1.Latitude = "=(Fields.Lat)";
            this.pointMapSeries1.LegendItem.Style.BackgroundColor = System.Drawing.Color.Transparent;
            this.pointMapSeries1.LegendItem.Style.LineColor = System.Drawing.Color.Transparent;
            this.pointMapSeries1.LegendItem.Style.LineWidth = Telerik.Reporting.Drawing.Unit.Cm(0D);
            this.pointMapSeries1.LegendItem.Value = "Series 1";
            this.pointMapSeries1.Longitude = "=(Fields.Long)";
            this.pointMapSeries1.MarkerMaxSize = Telerik.Reporting.Drawing.Unit.Mm(10D);
            this.pointMapSeries1.MarkerMinSize = Telerik.Reporting.Drawing.Unit.Mm(1D);
            this.pointMapSeries1.MarkerSize = Telerik.Reporting.Drawing.Unit.Empty;
            this.pointMapSeries1.MarkerType = Telerik.Reporting.DataPointMarkerType.Circle;
            this.pointMapSeries1.Name = "pointMapSeries1";
            mapGroup1.Name = "seriesGroup";
            this.pointMapSeries1.SeriesGroup = mapGroup1;
            this.pointMapSeries1.Size = "=Sum(Fields.LineTotal)";
            // 
            // graph1
            // 
            graphGroup1.Groupings.Add(new Telerik.Reporting.Grouping("=Fields.OrderDate.Month"));
            graphGroup1.Name = "orderDateMonthGroup";
            graphGroup1.Sortings.Add(new Telerik.Reporting.Sorting("=Fields.OrderDate.Month", Telerik.Reporting.SortDirection.Asc));
            this.graph1.CategoryGroups.Add(graphGroup1);
            colorPalette2.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(79)))), ((int)(((byte)(129)))), ((int)(((byte)(189))))));
            colorPalette2.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(155)))), ((int)(((byte)(187)))), ((int)(((byte)(89))))));
            colorPalette2.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(75)))), ((int)(((byte)(172)))), ((int)(((byte)(198))))));
            colorPalette2.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(44)))), ((int)(((byte)(77)))), ((int)(((byte)(117))))));
            colorPalette2.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(95)))), ((int)(((byte)(117)))), ((int)(((byte)(48))))));
            colorPalette2.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(39)))), ((int)(((byte)(106)))), ((int)(((byte)(124))))));
            this.graph1.ColorPalette = colorPalette2;
            this.graph1.CoordinateSystems.Add(this.cartesianCoordinateSystem1);
            this.graph1.DataSource = this.salesData;
            this.graph1.Filters.Add(new Telerik.Reporting.Filter("=Fields.Country", Telerik.Reporting.FilterOperator.In, "=@country"));
            this.graph1.Filters.Add(new Telerik.Reporting.Filter("=Fields.OrderDate.Year", Telerik.Reporting.FilterOperator.In, "=@year"));
            this.graph1.Legend.Position = Telerik.Reporting.GraphItemPosition.BottomCenter;
            this.graph1.Legend.Style.LineColor = System.Drawing.Color.LightGray;
            this.graph1.Legend.Style.LineWidth = Telerik.Reporting.Drawing.Unit.Cm(0D);
            this.graph1.Legend.Style.Visible = false;
            this.graph1.Location = new Telerik.Reporting.Drawing.PointU(Telerik.Reporting.Drawing.Unit.Cm(0.50010007619857788D), Telerik.Reporting.Drawing.Unit.Cm(14.500496864318848D));
            this.graph1.Name = "graph1";
            this.graph1.PlotAreaStyle.LineColor = System.Drawing.Color.LightGray;
            this.graph1.PlotAreaStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Cm(0D);
            this.graph1.Series.Add(this.lineSeries1);
            this.graph1.SeriesGroups.Add(graphGroup2);
            this.graph1.Size = new Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Cm(14.499899864196777D), Telerik.Reporting.Drawing.Unit.Cm(5.5D));
            this.graph1.Style.Padding.Bottom = Telerik.Reporting.Drawing.Unit.Pixel(10D);
            this.graph1.Style.Padding.Left = Telerik.Reporting.Drawing.Unit.Pixel(10D);
            this.graph1.Style.Padding.Right = Telerik.Reporting.Drawing.Unit.Pixel(10D);
            this.graph1.Style.Padding.Top = Telerik.Reporting.Drawing.Unit.Pixel(10D);
            graphTitle1.Position = Telerik.Reporting.GraphItemPosition.TopLeft;
            graphTitle1.Style.Color = System.Drawing.Color.FromArgb(((int)(((byte)(152)))), ((int)(((byte)(152)))), ((int)(((byte)(152)))));
            graphTitle1.Style.Font.Bold = false;
            graphTitle1.Style.Font.Size = Telerik.Reporting.Drawing.Unit.Point(9D);
            graphTitle1.Style.LineColor = System.Drawing.Color.LightGray;
            graphTitle1.Style.LineWidth = Telerik.Reporting.Drawing.Unit.Cm(0D);
            graphTitle1.Text = "SALES VOLUME, MOUNTLY (in millions USD)";
            this.graph1.Titles.Add(graphTitle1);
            // 
            // cartesianCoordinateSystem1
            // 
            this.cartesianCoordinateSystem1.Name = "cartesianCoordinateSystem1";
            this.cartesianCoordinateSystem1.XAxis = this.graphAxis2;
            this.cartesianCoordinateSystem1.YAxis = this.graphAxis1;
            // 
            // graphAxis2
            // 
            this.graphAxis2.LabelFormat = "{0:MMM}";
            this.graphAxis2.MajorGridLineStyle.LineColor = System.Drawing.Color.LightGray;
            this.graphAxis2.MajorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1D);
            this.graphAxis2.MinorGridLineStyle.LineColor = System.Drawing.Color.LightGray;
            this.graphAxis2.MinorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1D);
            this.graphAxis2.MinorGridLineStyle.Visible = false;
            this.graphAxis2.Name = "graphAxis2";
            dateTimeScale1.BaseUnit = Telerik.Reporting.DateTimeScaleUnits.Months;
            this.graphAxis2.Scale = dateTimeScale1;
            this.graphAxis2.Title = "";
            this.graphAxis2.TitlePlacement = Telerik.Reporting.GraphAxisTitlePlacement.AtMaximum;
            // 
            // graphAxis1
            // 
            this.graphAxis1.LabelFormat = "${0}M";
            this.graphAxis1.MajorGridLineStyle.LineColor = System.Drawing.Color.LightGray;
            this.graphAxis1.MajorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1D);
            this.graphAxis1.MajorGridLineStyle.Visible = true;
            this.graphAxis1.MinorGridLineStyle.LineColor = System.Drawing.Color.LightGray;
            this.graphAxis1.MinorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1D);
            this.graphAxis1.MinorGridLineStyle.Visible = false;
            this.graphAxis1.Name = "graphAxis1";
            this.graphAxis1.Scale = numericalScale1;
            this.graphAxis1.Style.LineWidth = Telerik.Reporting.Drawing.Unit.Cm(0D);
            this.graphAxis1.Style.Visible = true;
            this.graphAxis1.Title = "";
            this.graphAxis1.TitlePlacement = Telerik.Reporting.GraphAxisTitlePlacement.AtMaximum;
            // 
            // lineSeries1
            // 
            this.lineSeries1.CategoryGroup = graphGroup1;
            this.lineSeries1.CoordinateSystem = this.cartesianCoordinateSystem1;
            this.lineSeries1.DataPointLabel = "=Sum(Fields.LineTotal)";
            this.lineSeries1.DataPointLabelStyle.Visible = false;
            this.lineSeries1.DataPointStyle.Visible = false;
            this.lineSeries1.LegendItem.Style.BackgroundColor = System.Drawing.Color.Transparent;
            this.lineSeries1.LegendItem.Style.LineColor = System.Drawing.Color.Transparent;
            this.lineSeries1.LegendItem.Style.LineWidth = Telerik.Reporting.Drawing.Unit.Cm(0D);
            this.lineSeries1.LegendItem.Value = "=Fields.OrderDate.Year";
            this.lineSeries1.LineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1D);
            this.lineSeries1.MarkerMaxSize = Telerik.Reporting.Drawing.Unit.Pixel(50D);
            this.lineSeries1.MarkerMinSize = Telerik.Reporting.Drawing.Unit.Pixel(5D);
            this.lineSeries1.MarkerSize = Telerik.Reporting.Drawing.Unit.Pixel(5D);
            this.lineSeries1.Name = "lineSeries1";
            graphGroup2.Groupings.Add(new Telerik.Reporting.Grouping("=Fields.OrderDate.Year"));
            graphGroup2.Name = "orderDateYearGroup";
            graphGroup2.Sortings.Add(new Telerik.Reporting.Sorting("=Fields.OrderDate.Year", Telerik.Reporting.SortDirection.Asc));
            this.lineSeries1.SeriesGroup = graphGroup2;
            this.lineSeries1.Size = null;
            this.lineSeries1.X = "=Date(1, Fields.OrderDate.Month, 1)";
            this.lineSeries1.Y = "=Sum(Fields.LineTotal)/1e6";
            // 
            // graph2
            // 
            graphGroup3.Groupings.Add(new Telerik.Reporting.Grouping("=Fields.ProductCategory"));
            graphGroup3.Name = "productCategoryGroup";
            graphGroup3.Sortings.Add(new Telerik.Reporting.Sorting("=Fields.ProductCategory", Telerik.Reporting.SortDirection.Asc));
            this.graph2.CategoryGroups.Add(graphGroup3);
            colorPalette3.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(79)))), ((int)(((byte)(129)))), ((int)(((byte)(189))))));
            colorPalette3.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(155)))), ((int)(((byte)(187)))), ((int)(((byte)(89))))));
            colorPalette3.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(75)))), ((int)(((byte)(172)))), ((int)(((byte)(198))))));
            colorPalette3.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(44)))), ((int)(((byte)(77)))), ((int)(((byte)(117))))));
            colorPalette3.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(95)))), ((int)(((byte)(117)))), ((int)(((byte)(48))))));
            colorPalette3.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(39)))), ((int)(((byte)(106)))), ((int)(((byte)(124))))));
            this.graph2.ColorPalette = colorPalette3;
            this.graph2.CoordinateSystems.Add(this.cartesianCoordinateSystem2);
            this.graph2.DataSource = this.salesData;
            this.graph2.Filters.Add(new Telerik.Reporting.Filter("=Fields.Country", Telerik.Reporting.FilterOperator.In, "=@country"));
            this.graph2.Filters.Add(new Telerik.Reporting.Filter("=Fields.OrderDate.Year", Telerik.Reporting.FilterOperator.In, "=@year"));
            this.graph2.Legend.Position = Telerik.Reporting.GraphItemPosition.RightCenter;
            this.graph2.Legend.Style.LineColor = System.Drawing.Color.LightGray;
            this.graph2.Legend.Style.LineWidth = Telerik.Reporting.Drawing.Unit.Cm(0D);
            this.graph2.Legend.Style.Visible = true;
            this.graph2.Legend.Width = Telerik.Reporting.Drawing.Unit.Cm(3D);
            this.graph2.Location = new Telerik.Reporting.Drawing.PointU(Telerik.Reporting.Drawing.Unit.Cm(15.000298500061035D), Telerik.Reporting.Drawing.Unit.Cm(14.500496864318848D));
            this.graph2.Name = "graph2";
            this.graph2.PlotAreaStyle.LineColor = System.Drawing.Color.LightGray;
            this.graph2.PlotAreaStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Cm(0D);
            this.graph2.Series.Add(this.barSeries1);
            this.graph2.SeriesGroups.Add(graphGroup4);
            this.graph2.Size = new Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Cm(14.499902725219727D), Telerik.Reporting.Drawing.Unit.Cm(5.5D));
            this.graph2.Style.Padding.Bottom = Telerik.Reporting.Drawing.Unit.Pixel(10D);
            this.graph2.Style.Padding.Left = Telerik.Reporting.Drawing.Unit.Pixel(10D);
            this.graph2.Style.Padding.Right = Telerik.Reporting.Drawing.Unit.Pixel(10D);
            this.graph2.Style.Padding.Top = Telerik.Reporting.Drawing.Unit.Pixel(10D);
            graphTitle2.Position = Telerik.Reporting.GraphItemPosition.TopLeft;
            graphTitle2.Style.Color = System.Drawing.Color.FromArgb(((int)(((byte)(152)))), ((int)(((byte)(152)))), ((int)(((byte)(152)))));
            graphTitle2.Style.Font.Bold = false;
            graphTitle2.Style.Font.Size = Telerik.Reporting.Drawing.Unit.Point(9D);
            graphTitle2.Style.LineColor = System.Drawing.Color.LightGray;
            graphTitle2.Style.LineWidth = Telerik.Reporting.Drawing.Unit.Cm(0D);
            graphTitle2.Text = "SALES VOLUME BY PRODUCT CATEGORIES (in millions USD)";
            this.graph2.Titles.Add(graphTitle2);
            // 
            // cartesianCoordinateSystem2
            // 
            this.cartesianCoordinateSystem2.Name = "cartesianCoordinateSystem2";
            this.cartesianCoordinateSystem2.XAxis = this.graphAxis3;
            this.cartesianCoordinateSystem2.YAxis = this.graphAxis4;
            // 
            // graphAxis3
            // 
            this.graphAxis3.LabelFormat = "${0}M";
            this.graphAxis3.MajorGridLineStyle.LineColor = System.Drawing.Color.LightGray;
            this.graphAxis3.MajorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1D);
            this.graphAxis3.MinorGridLineStyle.LineColor = System.Drawing.Color.LightGray;
            this.graphAxis3.MinorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1D);
            this.graphAxis3.MinorGridLineStyle.Visible = false;
            this.graphAxis3.Name = "graphAxis3";
            this.graphAxis3.Scale = numericalScale2;
            this.graphAxis3.Title = "";
            this.graphAxis3.TitlePlacement = Telerik.Reporting.GraphAxisTitlePlacement.AtMaximum;
            // 
            // graphAxis4
            // 
            this.graphAxis4.MajorGridLineStyle.LineColor = System.Drawing.Color.LightGray;
            this.graphAxis4.MajorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1D);
            this.graphAxis4.MajorGridLineStyle.Visible = false;
            this.graphAxis4.MinorGridLineStyle.LineColor = System.Drawing.Color.LightGray;
            this.graphAxis4.MinorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1D);
            this.graphAxis4.MinorGridLineStyle.Visible = false;
            this.graphAxis4.Name = "graphAxis4";
            this.graphAxis4.Scale = categoryScale1;
            this.graphAxis4.Size = Telerik.Reporting.Drawing.Unit.Cm(2.5D);
            this.graphAxis4.Style.LineWidth = Telerik.Reporting.Drawing.Unit.Cm(0D);
            // 
            // barSeries1
            // 
            this.barSeries1.ArrangeMode = Telerik.Reporting.GraphSeriesArrangeMode.Stacked;
            this.barSeries1.CategoryGroup = graphGroup3;
            this.barSeries1.CoordinateSystem = this.cartesianCoordinateSystem2;
            this.barSeries1.DataPointLabel = "=Sum(Fields.LineTotal)";
            this.barSeries1.DataPointLabelStyle.Visible = false;
            this.barSeries1.DataPointStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Cm(0D);
            this.barSeries1.DataPointStyle.Visible = true;
            this.barSeries1.LegendItem.Style.BackgroundColor = System.Drawing.Color.Transparent;
            this.barSeries1.LegendItem.Style.LineColor = System.Drawing.Color.Transparent;
            this.barSeries1.LegendItem.Style.LineWidth = Telerik.Reporting.Drawing.Unit.Cm(0D);
            this.barSeries1.LegendItem.Value = "=Fields.OrderDate.Year";
            this.barSeries1.Name = "barSeries1";
            graphGroup4.Groupings.Add(new Telerik.Reporting.Grouping("=Fields.OrderDate.Year"));
            graphGroup4.Name = "orderDateYearGroup1";
            graphGroup4.Sortings.Add(new Telerik.Reporting.Sorting("=Fields.OrderDate.Year", Telerik.Reporting.SortDirection.Asc));
            this.barSeries1.SeriesGroup = graphGroup4;
            this.barSeries1.X = "=Sum(Fields.LineTotal)/1e6";
            // 
            // graph3
            // 
            graphGroup5.Filters.Add(new Telerik.Reporting.Filter("=Sum(Fields.LineTotal)", Telerik.Reporting.FilterOperator.TopN, "=20"));
            graphGroup5.Groupings.Add(new Telerik.Reporting.Grouping("=Fields.City"));
            graphGroup5.Name = "cityGroup1";
            graphGroup5.Sortings.Add(new Telerik.Reporting.Sorting("=Sum(Fields.LineTotal)", Telerik.Reporting.SortDirection.Asc));
            this.graph3.CategoryGroups.Add(graphGroup5);
            colorPalette4.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(79)))), ((int)(((byte)(129)))), ((int)(((byte)(189))))));
            colorPalette4.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(155)))), ((int)(((byte)(187)))), ((int)(((byte)(89))))));
            colorPalette4.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(75)))), ((int)(((byte)(172)))), ((int)(((byte)(198))))));
            colorPalette4.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(44)))), ((int)(((byte)(77)))), ((int)(((byte)(117))))));
            colorPalette4.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(95)))), ((int)(((byte)(117)))), ((int)(((byte)(48))))));
            colorPalette4.Colors.Add(System.Drawing.Color.FromArgb(((int)(((byte)(39)))), ((int)(((byte)(106)))), ((int)(((byte)(124))))));
            this.graph3.ColorPalette = colorPalette4;
            this.graph3.CoordinateSystems.Add(this.cartesianCoordinateSystem3);
            this.graph3.DataSource = this.salesData;
            this.graph3.Filters.Add(new Telerik.Reporting.Filter("=Fields.Country", Telerik.Reporting.FilterOperator.In, "=@country"));
            this.graph3.Filters.Add(new Telerik.Reporting.Filter("=Fields.OrderDate.Year", Telerik.Reporting.FilterOperator.In, "=@year"));
            this.graph3.Legend.Position = Telerik.Reporting.GraphItemPosition.RightCenter;
            this.graph3.Legend.Style.LineColor = System.Drawing.Color.LightGray;
            this.graph3.Legend.Style.LineWidth = Telerik.Reporting.Drawing.Unit.Cm(0D);
            this.graph3.Legend.Style.Visible = true;
            this.graph3.Legend.Width = Telerik.Reporting.Drawing.Unit.Cm(3D);
            this.graph3.Location = new Telerik.Reporting.Drawing.PointU(Telerik.Reporting.Drawing.Unit.Cm(15.000200271606445D), Telerik.Reporting.Drawing.Unit.Cm(3.000300407409668D));
            this.graph3.Name = "graph3";
            this.graph3.PlotAreaStyle.LineColor = System.Drawing.Color.LightGray;
            this.graph3.PlotAreaStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Cm(0D);
            this.graph3.Series.Add(this.barSeries2);
            this.graph3.SeriesGroups.Add(graphGroup6);
            this.graph3.Size = new Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Cm(14.500003814697266D), Telerik.Reporting.Drawing.Unit.Cm(11.499997138977051D));
            this.graph3.Style.Padding.Bottom = Telerik.Reporting.Drawing.Unit.Pixel(10D);
            this.graph3.Style.Padding.Left = Telerik.Reporting.Drawing.Unit.Pixel(10D);
            this.graph3.Style.Padding.Right = Telerik.Reporting.Drawing.Unit.Pixel(10D);
            this.graph3.Style.Padding.Top = Telerik.Reporting.Drawing.Unit.Pixel(10D);
            graphTitle3.Position = Telerik.Reporting.GraphItemPosition.TopLeft;
            graphTitle3.Style.Color = System.Drawing.Color.FromArgb(((int)(((byte)(152)))), ((int)(((byte)(152)))), ((int)(((byte)(152)))));
            graphTitle3.Style.Font.Size = Telerik.Reporting.Drawing.Unit.Point(9D);
            graphTitle3.Style.LineColor = System.Drawing.Color.LightGray;
            graphTitle3.Style.LineWidth = Telerik.Reporting.Drawing.Unit.Cm(0D);
            graphTitle3.Text = "TOP 20 CITIES";
            this.graph3.Titles.Add(graphTitle3);
            // 
            // cartesianCoordinateSystem3
            // 
            this.cartesianCoordinateSystem3.Name = "cartesianCoordinateSystem3";
            this.cartesianCoordinateSystem3.XAxis = this.graphAxis5;
            this.cartesianCoordinateSystem3.YAxis = this.graphAxis6;
            // 
            // graphAxis5
            // 
            this.graphAxis5.LabelFormat = "${0}M";
            this.graphAxis5.MajorGridLineStyle.LineColor = System.Drawing.Color.LightGray;
            this.graphAxis5.MajorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1D);
            this.graphAxis5.MinorGridLineStyle.LineColor = System.Drawing.Color.LightGray;
            this.graphAxis5.MinorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1D);
            this.graphAxis5.MinorGridLineStyle.Visible = false;
            this.graphAxis5.Name = "graphAxis5";
            this.graphAxis5.Scale = numericalScale3;
            // 
            // graphAxis6
            // 
            this.graphAxis6.MajorGridLineStyle.LineColor = System.Drawing.Color.LightGray;
            this.graphAxis6.MajorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1D);
            this.graphAxis6.MajorGridLineStyle.Visible = false;
            this.graphAxis6.MinorGridLineStyle.LineColor = System.Drawing.Color.LightGray;
            this.graphAxis6.MinorGridLineStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(1D);
            this.graphAxis6.MinorGridLineStyle.Visible = false;
            this.graphAxis6.Name = "graphAxis6";
            categoryScale2.SpacingSlotCount = 0.5D;
            this.graphAxis6.Scale = categoryScale2;
            this.graphAxis6.Size = Telerik.Reporting.Drawing.Unit.Cm(2.5D);
            this.graphAxis6.Style.LineWidth = Telerik.Reporting.Drawing.Unit.Pixel(0D);
            this.graphAxis6.Style.Visible = true;
            // 
            // barSeries2
            // 
            this.barSeries2.ArrangeMode = Telerik.Reporting.GraphSeriesArrangeMode.Stacked;
            this.barSeries2.CategoryGroup = graphGroup5;
            this.barSeries2.CoordinateSystem = this.cartesianCoordinateSystem3;
            this.barSeries2.DataPointLabel = "=Sum(Fields.LineTotal)";
            this.barSeries2.DataPointLabelStyle.Visible = false;
            this.barSeries2.DataPointStyle.LineWidth = Telerik.Reporting.Drawing.Unit.Cm(0D);
            this.barSeries2.DataPointStyle.Visible = true;
            this.barSeries2.LegendItem.Style.BackgroundColor = System.Drawing.Color.Transparent;
            this.barSeries2.LegendItem.Style.LineColor = System.Drawing.Color.Transparent;
            this.barSeries2.LegendItem.Style.LineWidth = Telerik.Reporting.Drawing.Unit.Cm(0D);
            this.barSeries2.LegendItem.Value = "=Fields.ProductCategory";
            this.barSeries2.Name = "barSeries2";
            graphGroup6.Groupings.Add(new Telerik.Reporting.Grouping("=Fields.ProductCategory"));
            graphGroup6.Name = "productCategoryGroup1";
            graphGroup6.Sortings.Add(new Telerik.Reporting.Sorting("=Fields.ProductCategory", Telerik.Reporting.SortDirection.Asc));
            this.barSeries2.SeriesGroup = graphGroup6;
            this.barSeries2.X = "=Sum(Fields.LineTotal)/1e6";
            // 
            // textBox1
            // 
            this.textBox1.Location = new Telerik.Reporting.Drawing.PointU(Telerik.Reporting.Drawing.Unit.Inch(0.19688987731933594D), Telerik.Reporting.Drawing.Unit.Inch(0.19688980281352997D));
            this.textBox1.Name = "textBox1";
            this.textBox1.Size = new Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Inch(11.417283058166504D), Telerik.Reporting.Drawing.Unit.Inch(0.590511679649353D));
            this.textBox1.Style.Font.Bold = true;
            this.textBox1.Style.Font.Size = Telerik.Reporting.Drawing.Unit.Point(25D);
            this.textBox1.Style.LineWidth = Telerik.Reporting.Drawing.Unit.Point(34D);
            this.textBox1.Style.Padding.Left = Telerik.Reporting.Drawing.Unit.Pixel(10D);
            this.textBox1.Style.Padding.Right = Telerik.Reporting.Drawing.Unit.Pixel(10D);
            this.textBox1.Style.VerticalAlign = Telerik.Reporting.Drawing.VerticalAlign.Middle;
            this.textBox1.StyleName = "Header";
            this.textBox1.Value = "Sales Distribution By Region";
            // 
            // textBox2
            // 
            this.textBox2.Location = new Telerik.Reporting.Drawing.PointU(Telerik.Reporting.Drawing.Unit.Cm(0.49959805607795715D), Telerik.Reporting.Drawing.Unit.Cm(2.0001997947692871D));
            this.textBox2.Name = "textBox2";
            this.textBox2.Size = new Telerik.Reporting.Drawing.SizeU(Telerik.Reporting.Drawing.Unit.Cm(29.000308990478516D), Telerik.Reporting.Drawing.Unit.Cm(0.99989980459213257D));
            this.textBox2.Style.Font.Bold = false;
            this.textBox2.Style.Font.Size = Telerik.Reporting.Drawing.Unit.Point(14D);
            this.textBox2.Style.Padding.Left = Telerik.Reporting.Drawing.Unit.Pixel(10D);
            this.textBox2.Style.Padding.Right = Telerik.Reporting.Drawing.Unit.Pixel(10D);
            this.textBox2.Style.TextAlign = Telerik.Reporting.Drawing.HorizontalAlign.Left;
            this.textBox2.Style.VerticalAlign = Telerik.Reporting.Drawing.VerticalAlign.Middle;
            this.textBox2.Value = "REGION: {Join(\', \', Parameters.country.Value)}\r\nPERIOD: {Join(\', \', Parameters.ye" +
    "ar.Value)}";
            // 
            // SalesByRegionDashboard
            // 
            this.Items.AddRange(new Telerik.Reporting.ReportItemBase[] {
            this.detailSection1});
            this.Name = "SalesByRegionDashboard";
            this.PageSettings.Landscape = false;
            this.PageSettings.Margins = new Telerik.Reporting.Drawing.MarginsU(Telerik.Reporting.Drawing.Unit.Inch(1D), Telerik.Reporting.Drawing.Unit.Inch(1D), Telerik.Reporting.Drawing.Unit.Inch(1D), Telerik.Reporting.Drawing.Unit.Inch(1D));
            this.PageSettings.PaperKind = System.Drawing.Printing.PaperKind.Letter;
            reportParameter1.AutoRefresh = true;
            reportParameter1.AvailableValues.DataSource = this.yearsData;
            reportParameter1.AvailableValues.ValueMember = "= Fields.Year";
            reportParameter1.MultiValue = true;
            reportParameter1.Name = "year";
            reportParameter1.Text = "Year";
            reportParameter1.Type = Telerik.Reporting.ReportParameterType.Integer;
            reportParameter1.Value = "=Array(2003, 2004)";
            reportParameter1.Visible = true;
            reportParameter2.AutoRefresh = true;
            reportParameter2.AvailableValues.DataSource = this.countryData;
            reportParameter2.AvailableValues.ValueMember = "= Fields.Country";
            reportParameter2.MultiValue = true;
            reportParameter2.Name = "country";
            reportParameter2.Text = "Country";
            reportParameter2.Value = "=Array(\'United States\', \'Canada\')";
            reportParameter2.Visible = true;
            this.ReportParameters.Add(reportParameter1);
            this.ReportParameters.Add(reportParameter2);
            this.Style.Font.Name = "Segoe UI Light";
            styleRule1.Selectors.AddRange(new Telerik.Reporting.Drawing.ISelector[] {
            new Telerik.Reporting.Drawing.StyleSelector("Header")});
            styleRule1.Style.Font.Bold = true;
            styleRule1.Style.Font.Name = "Segoe UI Light";
            styleRule1.Style.Font.Size = Telerik.Reporting.Drawing.Unit.Point(25D);
            styleRule1.Style.Padding.Left = Telerik.Reporting.Drawing.Unit.Inch(0D);
            descendantSelector1.Selectors.AddRange(new Telerik.Reporting.Drawing.ISelector[] {
            new Telerik.Reporting.Drawing.TypeSelector(typeof(Telerik.Reporting.Crosstab)),
            new Telerik.Reporting.Drawing.TypeSelector(typeof(Telerik.Reporting.ReportItem))});
            styleRule2.Selectors.AddRange(new Telerik.Reporting.Drawing.ISelector[] {
            descendantSelector1});
            styleRule2.Style.BorderColor.Default = System.Drawing.Color.FromArgb(((int)(((byte)(230)))), ((int)(((byte)(230)))), ((int)(((byte)(230)))));
            styleRule2.Style.BorderStyle.Bottom = Telerik.Reporting.Drawing.BorderType.None;
            styleRule2.Style.BorderStyle.Top = Telerik.Reporting.Drawing.BorderType.Solid;
            styleRule2.Style.Font.Name = "Segoe UI";
            styleRule2.Style.Font.Size = Telerik.Reporting.Drawing.Unit.Point(10D);
            styleRule2.Style.Padding.Bottom = Telerik.Reporting.Drawing.Unit.Cm(0D);
            styleRule2.Style.Padding.Left = Telerik.Reporting.Drawing.Unit.Cm(0D);
            styleRule2.Style.Padding.Right = Telerik.Reporting.Drawing.Unit.Cm(0D);
            styleRule2.Style.TextAlign = Telerik.Reporting.Drawing.HorizontalAlign.Right;
            styleRule2.Style.VerticalAlign = Telerik.Reporting.Drawing.VerticalAlign.Bottom;
            styleRule3.Selectors.AddRange(new Telerik.Reporting.Drawing.ISelector[] {
            new Telerik.Reporting.Drawing.StyleSelector("RedTextBox")});
            styleRule3.Style.BorderStyle.Bottom = Telerik.Reporting.Drawing.BorderType.None;
            styleRule3.Style.BorderStyle.Top = Telerik.Reporting.Drawing.BorderType.None;
            styleRule3.Style.Color = System.Drawing.Color.FromArgb(((int)(((byte)(195)))), ((int)(((byte)(47)))), ((int)(((byte)(11)))));
            styleRule3.Style.Font.Name = "Segoe UI";
            styleRule3.Style.Font.Size = Telerik.Reporting.Drawing.Unit.Point(10D);
            styleRule4.Selectors.AddRange(new Telerik.Reporting.Drawing.ISelector[] {
            new Telerik.Reporting.Drawing.StyleSelector("ItemDetails")});
            styleRule4.Style.BackgroundColor = System.Drawing.Color.FromArgb(((int)(((byte)(247)))), ((int)(((byte)(247)))), ((int)(((byte)(247)))));
            styleRule5.Selectors.AddRange(new Telerik.Reporting.Drawing.ISelector[] {
            new Telerik.Reporting.Drawing.StyleSelector("ItemTotal")});
            styleRule5.Style.BackgroundColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(248)))), ((int)(((byte)(219)))));
            styleRule6.Selectors.AddRange(new Telerik.Reporting.Drawing.ISelector[] {
            new Telerik.Reporting.Drawing.TypeSelector(typeof(Telerik.Reporting.TextItemBase)),
            new Telerik.Reporting.Drawing.TypeSelector(typeof(Telerik.Reporting.HtmlTextBox))});
            styleRule6.Style.Padding.Left = Telerik.Reporting.Drawing.Unit.Point(2D);
            styleRule6.Style.Padding.Right = Telerik.Reporting.Drawing.Unit.Point(2D);
            styleRule7.Selectors.AddRange(new Telerik.Reporting.Drawing.ISelector[] {
            new Telerik.Reporting.Drawing.TypeSelector(typeof(Telerik.Reporting.TextItemBase)),
            new Telerik.Reporting.Drawing.TypeSelector(typeof(Telerik.Reporting.HtmlTextBox))});
            styleRule7.Style.Padding.Left = Telerik.Reporting.Drawing.Unit.Point(2D);
            styleRule7.Style.Padding.Right = Telerik.Reporting.Drawing.Unit.Point(2D);
            this.StyleSheet.AddRange(new Telerik.Reporting.Drawing.StyleRule[] {
            styleRule1,
            styleRule2,
            styleRule3,
            styleRule4,
            styleRule5,
            styleRule6,
            styleRule7});
            this.Width = Telerik.Reporting.Drawing.Unit.Inch(11.81102466583252D);
            ((System.ComponentModel.ISupportInitialize)(this)).EndInit();

		}
		#endregion

        private SqlDataSource sqlDataSource1;
        private SqlDataSource yearsData;
        private SqlDataSource countryData;
        private SqlDataSource salesData;
        private DetailSection detailSection1;
        private Map map1;
        private PointMapSeries pointMapSeries1;
        private Graph graph1;
        private CartesianCoordinateSystem cartesianCoordinateSystem1;
        private GraphAxis graphAxis2;
        private GraphAxis graphAxis1;
        private LineSeries lineSeries1;
        private Graph graph2;
        private CartesianCoordinateSystem cartesianCoordinateSystem2;
        private GraphAxis graphAxis3;
        private GraphAxis graphAxis4;
        private BarSeries barSeries1;
        private Graph graph3;
        private CartesianCoordinateSystem cartesianCoordinateSystem3;
        private GraphAxis graphAxis5;
        private GraphAxis graphAxis6;
        private BarSeries barSeries2;
        private Reporting.TextBox textBox1;
        private Reporting.TextBox textBox2;
	}
}