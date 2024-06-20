builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

var valueArr = [23, 45, true, "text", 0.89];

// Place the numbers in cells
for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

var oRange = oWorksheet.GetRange("A1:A6").GetValue();

var oFunction = Api.GetWorksheetFunction();
var minA = oFunction.MINA(oRange);

oWorksheet.GetRange("C1").SetValue(minA);

builder.SaveFile("xlsx", "MINA.xlsx");
builder.CloseFile();
