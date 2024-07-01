builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange("A1").SetValue(5);

var expression = oWorksheet.GetRange("A1");
var value1 = 3;
var value2 = "Alice";
var value3 = 5;
var value4 = "Bob";
var defaultVal = "No Match";

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.SWITCH(
  expression,
  value1,
  value2,
  value3,
  value4,
  defaultVal
);

oWorksheet.GetRange("C1").SetValue(ans);

builder.SaveFile("xlsx", "SWITCH.xlsx");
builder.CloseFile();
