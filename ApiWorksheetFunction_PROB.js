builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

var valueArr1 = [34, 36, 38, 40];
var valueArr2 = [0.4, 0.25, 0.25, 0.1];
var upperLimit = 36;
var lowerLimit = 42;

// Place the numbers in cells
for (var i = 0; i < valueArr1.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr1[i]);
}
for (var i = 0; i < valueArr2.length; i++) {
  oWorksheet.GetRange("B" + (i + 1)).SetValue(valueArr2[i]);
}

//method params
var xRange = oWorksheet.GetRange("A1:A4");
var probRange = oWorksheet.GetRange("B1:B4");

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.PROB(xRange, probRange, lowerLimit, upperLimit);

oWorksheet.GetRange("D1").SetValue(ans);

builder.SaveFile("xlsx", "PROB.xlsx");
builder.CloseFile();
