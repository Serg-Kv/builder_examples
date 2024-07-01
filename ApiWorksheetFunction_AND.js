builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange("A1").SetValue(12);

// logcial statements
// statement1 = A1 < 100
// statement2  = 34 <1 00
// statement3  = 50 < 100

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.AND(A1 < 100, 34 < 100, 50 < 100); //AND logical function

oWorksheet.GetRange("C1").SetValue(ans);

builder.SaveFile("xlsx", "AND.xlsx");
builder.CloseFile();
