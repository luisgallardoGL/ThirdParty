Imports Telerik.Windows.Controls
Imports System.IO
Imports System.Windows.Markup

Partial Public Class MainPage
    Inherits UserControl

    Shared ReadOnly dictionaries() As String = {
        "/VB.SilverlightDemo;component/Themes/{0}/System.Windows.xaml",
        "/VB.SilverlightDemo;component/Themes/{0}/Telerik.Windows.Controls.xaml",
        "/VB.SilverlightDemo;component/Themes/{0}/Telerik.Windows.Controls.Input.xaml",
        "/VB.SilverlightDemo;component/Themes/{0}/Telerik.Windows.Controls.Navigation.xaml",
        "/VB.SilverlightDemo;component/Themes/{0}/Telerik.ReportViewer.Silverlight.xaml"
     }

    Public Sub New()
        InitializeComponent()
    End Sub

    Shared Sub MergeResourceDictionaries(theme As String)
        Dim mergedDictionaries = Application.Current.Resources.MergedDictionaries
        mergedDictionaries.Clear()
        For Each dictionary As String In dictionaries
            Dim entry = String.Format(dictionary, theme)
            Dim resourceInfo = App.GetResourceStream(New Uri(entry, UriKind.RelativeOrAbsolute))
            Dim resourceReader = New StreamReader(resourceInfo.Stream)
            Dim xaml As String = resourceReader.ReadToEnd()
            Dim resourceTheme = TryCast(XamlReader.Load(xaml), ResourceDictionary)
            mergedDictionaries.Add(resourceTheme)
        Next
    End Sub

    Private Sub ThemeSelector_SelectionChanged(sender As Object, e As Telerik.Windows.Controls.SelectionChangedEventArgs)
        Dim box = DirectCast(sender, RadComboBox)
        Dim item = DirectCast(box.SelectedItem, RadComboBoxItem)
        Dim theme = DirectCast(item.Content, String)

        MergeResourceDictionaries(theme)
    End Sub

End Class