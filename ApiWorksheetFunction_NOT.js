builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange("A1").SetValue(12);

var condition = A1 < 100;

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.NOT(condition);

oWorksheet.GetRange("C1").SetValue(ans);

builder.SaveFile("xlsx", "NOT.xlsx");
builder.CloseFile();
