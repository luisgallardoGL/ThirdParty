namespace CSharp.WpfDemo
{
    using System;
    using System.Windows;
    using Telerik.Windows.Controls;

    public partial class Window1 : Window
    {
        static readonly string[] dictionaries = new [] 
            { 
                "Themes/{0}/System.Windows.xaml",
                "Themes/{0}/Telerik.Windows.Controls.xaml",
                "Themes/{0}/Telerik.Windows.Controls.Input.xaml",
                "Themes/{0}/Telerik.Windows.Controls.Navigation.xaml",
                "Themes/{0}/Telerik.ReportViewer.Wpf.xaml"
            };

        public Window1()
        {
            InitializeComponent();
        }

        void ThemeSelector_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
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
                var uri = string.Format(dictionary, theme);
                mergedDictionaries.Add(new ResourceDictionary()
                {
                    Source = new Uri(uri, UriKind.RelativeOrAbsolute)
                });
            }
        }
    }
}
