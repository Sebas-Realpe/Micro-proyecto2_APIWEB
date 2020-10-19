function verificar()
{
for (var i=0;i<document.form1.Reporte.length;i++)
{
if (document.form1.Reporte[i].checked)
{

var dir = document.form1.Reporte[i].value ;
document.location=dir;
break;
}
}
}