"C:\Program Files (x86)\WiX Toolset v3.10\bin\candle.exe" -sw1026   "E:\Galos\Projects\WixSharp\src\WixSharp.Samples\Wix# Samples\Shortcuts\setup.wxs"  -out "E:\Galos\Projects\WixSharp\src\WixSharp.Samples\Wix# Samples\Shortcuts\setup.wixobj"
"C:\Program Files (x86)\WiX Toolset v3.10\bin\light.exe" -sw1076 -sw1079  -b "E:\Galos\Projects\WixSharp\src\WixSharp.Samples\Wix# Samples\Shortcuts" "E:\Galos\Projects\WixSharp\src\WixSharp.Samples\Wix# Samples\Shortcuts\setup.wixobj"  -out "E:\Galos\Projects\WixSharp\src\WixSharp.Samples\Wix# Samples\Shortcuts\setup.msi" -cultures:en-US
pause
