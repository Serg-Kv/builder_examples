builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

//MAXA takes all values (bool, string, number)
var valueArr = [23, 45, true, "text", 0.89];
// // Place the numbers in cells
for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

var oRange = oWorksheet.GetRange("A1:A5").GetValue();

var oFunction = Api.GetWorksheetFunction();
var maxA = oFunction.MAX(oRange);

oWorksheet.GetRange("C1").SetValue(maxA);

builder.SaveFile("xlsx", "MAXA.xlsx");
builder.CloseFile();
