builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

//configure function parameters
var yValues = [1.5, 2, 3];
var xValues = [2, 3.1, 3.5];
var constant = true;
var stats = true;

//set values in cells
for (var i = 0; i < yValues.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(yValues[i]);
}
for (var i = 0; i < xValues.length; i++) {
  oWorksheet.GetRange("B" + (i + 1)).SetValue(xValues[i]);
}

//get x and y ranges
var yRange = oWorksheet.getRange("A1:A3");
var xRange = oWorksheet.getRange("B1:B3");
var oFunction = Api.GetWorksheetFunction();

//invoke LINEST method
var ans = oFunction.LINEST(yRange, xRange, constant, stats);

//print answer (LINEST is expected to return an array)
for (var i = 0; i < ans.length; i++) {
  oWorksheet.GetRange("D" + (i + 1)).SetValue(ans[i]);
}

builder.SaveFile("xlsx", "LINEST.xlsx");
builder.CloseFile();
