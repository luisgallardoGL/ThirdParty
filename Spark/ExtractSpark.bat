cd %1
if not exist spark-1.6.2-bin-hadoop2.6 goto checkforclr
goto end
:checkforclr
if not exist spark-clr_2.10-1.6.200 goto startextract
goto end
:startextract
..\7-zip\7z x Spark.7z.001
:end