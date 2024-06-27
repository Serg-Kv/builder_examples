builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

var valueArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var quart = 3; 

// Place the numbers in cells
for (var i = 0; i < valueArr1.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr1[i]);
}

//method params
var array = oWorksheet.GetRange("A1:A12");

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.QUARTILE_EXC(array, quart); //0...1 exclusive

oWorksheet.GetRange("C1").SetValue(ans);

builder.SaveFile("xlsx", "QUARTILE_EXC.xlsx");
builder.CloseFile();
