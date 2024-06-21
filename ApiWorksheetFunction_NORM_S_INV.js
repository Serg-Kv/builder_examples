builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange("A1").SetValue(0.908);

//method params
var value = oWorksheet.GetRange("A1").GetValue();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.NORM_S_INV(value);

oWorksheet.GetRange("C1").SetValue(ans);

builder.SaveFile("xlsx", "NORM_S_INV.xlsx");
builder.CloseFile();
