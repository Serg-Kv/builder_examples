builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange("A1").SetValue(0.6);

//method params
var value = oWorksheet.GetRange("A1").GetValue();
var cumulative = true;

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.NORM_S_DIST(value, cumulative);

oWorksheet.GetRange("C1").SetValue(ans);

builder.SaveFile("xlsx", "NORM_S_DIST.xlsx");
builder.CloseFile();
