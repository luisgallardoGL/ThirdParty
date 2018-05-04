namespace Telerik.Reporting.Examples.CSharp
{
    using System;
    using System.ComponentModel;
    using System.Drawing;
    using System.Globalization;
    using Telerik.Reporting;

    /// <summary>
    /// Summary description for Report1.
    /// </summary>
    [Description("Product Catalog Report. (Multilingual)")]
    public partial class ProductCatalog : Report
    {
        public ProductCatalog()
        {
            /// <summary>
            /// Required for telerik Reporting designer support
            /// </summary>
            InitializeComponent();

            //
            // TODO: Add any constructor code after InitializeComponent call
            //

            this.ItemDataBinding += new EventHandler(ProductCatalog_ItemDataBinding);
        }

        void ProductCatalog_ItemDataBinding(object sender, EventArgs e)
        {
            string cultureID = (string)this.ReportParameters["CultureID"].Value;

            CultureInfo cultureInfo = null;
            if (string.Compare(cultureID, "zh-CHT", true, CultureInfo.InvariantCulture) == 0)
            {
                cultureInfo = new CultureInfo("zh-TW", false);
            }
            else
            {
                cultureInfo = new CultureInfo(cultureID);
            }

            this.Culture = cultureInfo;
        }
    }
}