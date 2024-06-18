builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();
var numbersArr = [3, 89, 34, 2, 45, 4, 45, 13];
for (var i = 0; i < numbersArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}
var oRange = oWorksheet.getRange("A1:A8");
var oFunction = Api.GetWorksheetFunction();
var kurtosis = oFunction.KURT(oRange);
oWorksheet.GetRange("C1").SetValue(kurtosis);
builder.SaveFile("xlsx", "KURT.xlsx");
builder.CloseFile();
