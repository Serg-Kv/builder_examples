builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

var numbersArr = [4, 13, 27, 56, 46, 79, 22, 12];

// Place the numbers in cells
for (var i = 0; i < numbersArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

var oFunction = Api.GetWorksheetFunction();

var oRange = oWorksheet.GetRange("A1:A8");

var largePostion = 4;

var kLargest = oFunction.LARGE(oRange, largePostion);

oWorksheet.GetRange("C1").SetValue(kLargest);

builder.SaveFile("xlsx", "LARGE.xlsx");
builder.CloseFile();
