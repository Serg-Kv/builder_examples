builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

var valueArr = [1, 3, 5, 7, 0, 2, 4, 6, 7, 5, 3, 5, 10, 8, 6, 4];

// Place the numbers in cells
for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

//method params
var inputValArray = oWorksheet.GetRange("A1:A16").GetValue();
var k = 1; // 0...1 inclusive range

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.PERCENTILE_INC(inputValArray, k);

oWorksheet.GetRange("C1").SetValue(ans);

builder.SaveFile("xlsx", "PERCENTILE_INC.xlsx");
builder.CloseFile();
