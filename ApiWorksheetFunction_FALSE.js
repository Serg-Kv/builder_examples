builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange("A1").SetValue(12);

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.FALSE(); //returns false, doesnt require arguments

oWorksheet.GetRange("C1").SetValue(ans);

builder.SaveFile("xlsx", "FALSE.xlsx");
builder.CloseFile();
