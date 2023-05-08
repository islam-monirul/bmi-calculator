// if calculateBtn button gets clicked
document.getElementById("calculateBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const weight = parseFloat(document.getElementById("weightInput").value);
  const height = parseFloat(document.getElementById("heightInput").value);

  // calculating BMI
  const bmi = weight / (height * height);

  // Displaying to Frontend
  const resultElement = document.getElementById("bmiResult");
  resultElement.innerText = `Your BMI is: ${bmi.toFixed(5)}`;
});
