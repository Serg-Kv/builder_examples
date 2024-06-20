builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

var numbersArr = [123, 197, 46, 345, 67, 456];

// Place the numbers in cells
for (var i = 0; i < numbersArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

var oRange = oWorksheet.GetRange("A1:A6").GetValue();

var oFunction = Api.GetWorksheetFunction();
var min = oFunction.MIN(oRange);

oWorksheet.GetRange("C1").SetValue(min);

builder.SaveFile("xlsx", "MIN.xlsx");
builder.CloseFile();
