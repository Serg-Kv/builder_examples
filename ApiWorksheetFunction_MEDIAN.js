builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

var numbersArr = [4,45,12,34,3,54,2,2];

// Place the numbers in cells
for (var i = 0; i < numbersArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

var oRange = oWorksheet.GetRange("A1:A8").GetValue();

var oFunction = Api.GetWorksheetFunction();
var median = oFunction.MEDIAN(oRange);

oWorksheet.GetRange("C1").SetValue(median);

builder.SaveFile("xlsx", "MEDIAN.xlsx");
builder.CloseFile();
