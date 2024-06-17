
builder.CreateFile("xlsx");
const oWorksheet = Api.GetActiveSheet();

let numbersArr = [2, 3, 3, 12];

// Place the numbers in cells
for (let i = 0; i < numbersArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

// Calculate the Hyper-Geometric Distance between the four co-ordinates(numbers)
let oFunction = Api.GetWorksheetFunction();

//function parameters
let sample_s = oWorksheet.GetRange("A1").GetValue();
let number_sample = oWorksheet.GetRange("A2").GetValue();
let population_s = oWorksheet.GetRange("A3").GetValue();
let number_pop = oWorksheet.GetRange("A4").GetValue();
let cumulative = True;
let dist = oFunction.HYPERGEOMDIST(
  sample_s,
  number_sample,
  population_s,
  number_pop,
  cumulative
);
oWorksheet.GetRange("C4").SetValue(dist);
builder.SaveFile("xlsx", "HYPGEOMDIST.xlsx");
builder.CloseFile(); 