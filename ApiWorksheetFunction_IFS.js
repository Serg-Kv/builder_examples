builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange("A1").SetValue(120);

var condition1 = A1 < 100;
var valueIfTrue1 = 1;
var condition2 = A1 > 100;
var valueIfTrue2 = 2;

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.IFS(condition1, valueIfTrue1, condition2, valueIfTrue2);

oWorksheet.GetRange("C1").SetValue(ans);

builder.SaveFile("xlsx", "IFS.xlsx");
builder.CloseFile();
