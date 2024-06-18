
builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

var numbersArr = [2, 3, 3, 12];

// Place the numbers in cells
for (var i = 0; i < numbersArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

// Calculate the Hyper-Geometric Distance between the four co-ordinates(numbers)
var oFunction = Api.GetWorksheetFunction();

//function parameters
var sample_s = oWorksheet.GetRange("A1").GetValue();
var number_sample = oWorksheet.GetRange("A2").GetValue();
var population_s = oWorksheet.GetRange("A3").GetValue();
var number_pop = oWorksheet.GetRange("A4").GetValue();
var cumulative = True;
var dist = oFunction.HYPERGEOM.DIST(
  sample_s,
  number_sample,
  population_s,
  number_pop,
  cumulative
);
oWorksheet.GetRange("C4").SetValue(dist);
builder.SaveFile("xlsx", "HYPGEOM.DIST.xlsx");
builder.CloseFile(); 