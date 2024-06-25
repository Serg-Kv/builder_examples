builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

//method params
//includes repetitions
var number = 5;

oWorksheet.GetRange("A1").SetValue(number);

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.PHI(number);

oWorksheet.GetRange("C1").SetValue(ans);

builder.SaveFile("xlsx", "PHI.xlsx");
builder.CloseFile();
