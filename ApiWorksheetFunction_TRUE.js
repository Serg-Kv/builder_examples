builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.TRUE(); //returns TRUE, doesnt require arguments

oWorksheet.GetRange("A1").SetValue(ans);

builder.SaveFile("xlsx", "FALSE.xlsx");
builder.CloseFile();
