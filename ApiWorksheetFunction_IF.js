builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange("A1").SetValue(12);

var condition = A1 < 12;
var trueReturns = 1;
var falseReturns = 0;

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.FALSE(condition, trueReturns, falseReturns);

oWorksheet.GetRange("C1").SetValue(ans);

builder.SaveFile("xlsx", "FALSE.xlsx");
builder.CloseFile();
