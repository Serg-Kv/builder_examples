builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

//method params
var number = 32;
var number_chosen = 2;

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.PERMUT(number, number_chosen);

oWorksheet.GetRange("C1").SetValue(ans);

builder.SaveFile("xlsx", "PERMUT.xlsx");
builder.CloseFile();
