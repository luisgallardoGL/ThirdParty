Imports System
Imports Telerik.Windows.Controls

Class Window1

    Shared ReadOnly dictionaries() As String = {
        "Themes/{0}/System.Windows.xaml",
        "Themes/{0}/Telerik.Windows.Controls.xaml",
        "Themes/{0}/Telerik.Windows.Controls.Input.xaml",
        "Themes/{0}/Telerik.Windows.Controls.Navigation.xaml",
        "Themes/{0}/Telerik.ReportViewer.Wpf.xaml"
    }

    Public Sub New()
        InitializeComponent()
    End Sub

    Sub ThemeSelector_SelectionChanged(sender As Object, e As System.Windows.Controls.SelectionChangedEventArgs)
        Dim box = DirectCast(sender, RadComboBox)
        Dim item = DirectCast(box.SelectedItem, RadComboBoxItem)
        Dim theme = DirectCast(item.Content, String)

        MergeResourceDictionaries(theme)
    End Sub

    Sub MergeResourceDictionaries(theme As String)
        Dim mergedDictionaries = Application.Current.Resources.MergedDictionaries
        mergedDictionaries.Clear()
        For Each dictionary As String In dictionaries
            Dim entry = String.Format(dictionary, theme)
            mergedDictionaries.Add(New ResourceDictionary() With { _
                .Source = New Uri(entry, UriKind.RelativeOrAbsolute) _
            })
        Next
    End Sub

End Class