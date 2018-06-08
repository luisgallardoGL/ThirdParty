namespace CSharp.SilverlightDemo
{
    using System;
    using System.IO;
    using System.Windows;
    using System.Windows.Controls;
    using System.Windows.Markup;
    using Telerik.Windows.Controls;

    public partial class MainPage : UserControl
    {
        static readonly string[] dictionaries = new[] 
        {
            "/CSharp.SilverlightDemo;component/Themes/{0}/System.Windows.xaml",
            "/CSharp.SilverlightDemo;component/Themes/{0}/Telerik.Windows.Controls.xaml",
            "/CSharp.SilverlightDemo;component/Themes/{0}/Telerik.Windows.Controls.Input.xaml",
            "/CSharp.SilverlightDemo;component/Themes/{0}/Telerik.Windows.Controls.Navigation.xaml",
            "/CSharp.SilverlightDemo;component/Themes/{0}/Telerik.ReportViewer.Silverlight.xaml" 
        };

        public MainPage()
        {
            InitializeComponent();
        }

        void ThemeSelector_SelectionChanged(object sender, Telerik.Windows.Controls.SelectionChangedEventArgs e)
        {
            var selectedItem = (RadComboBoxItem)((RadComboBox)sender).SelectedItem;
            MergeResourceDictionaries((string)selectedItem.Content);
        }

        static void MergeResourceDictionaries(string theme)
        {
            var mergedDictionaries = Application.Current.Resources.MergedDictionaries;
            mergedDictionaries.Clear();
            foreach (var dictionary in dictionaries)
            {
                var entry = string.Format(dictionary, theme);
                var resourceInfo = App.GetResourceStream(new Uri(entry, UriKind.RelativeOrAbsolute));
                var resourceReader = new StreamReader(resourceInfo.Stream);
                var xaml = resourceReader.ReadToEnd();
                var resourceTheme = XamlReader.Load(xaml) as ResourceDictionary;

                mergedDictionaries.Add(resourceTheme);
            }
        }
    }
}
