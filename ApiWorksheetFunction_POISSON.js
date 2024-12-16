builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

//method params
//includes repetitions
var x = 9;
var mean = 12;
var cumulative = false;

oWorksheet.GetRange("A1").SetValue(x);
oWorksheet.GetRange("A2").SetValue(mean);
oWorksheet.GetRange("A3").SetValue(cumulative);

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.POISSON(number);

oWorksheet.GetRange("C1").SetValue(ans);

builder.SaveFile("xlsx", "POISSON.xlsx");
builder.CloseFile();
