builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

//method params
//includes repetitions
var number = 32;
var number_chosen = 2;

oWorksheet.GetRange("A1").SetValue(number);
oWorksheet.GetRange("B1").SetValue(number_chosen);

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.PERMUTATIONA(number, number_chosen);

oWorksheet.GetRange("C1").SetValue(ans);

builder.SaveFile("xlsx", "PERMUTATIONA.xlsx");
builder.CloseFile();
