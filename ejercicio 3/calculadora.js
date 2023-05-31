let form = document.getElementById("form");

const operations = {
  suma: 1,
  resta: 2,
  multiplicacion: 3,
  division: 4,
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let form = new FormData(e.target);

  let num1 = Number(form.get("num1"));
  let num2 = Number(form.get("num2"));

  let operator = Number(form.get("operator"));

  let result = document.getElementById("ans");

  switch (operator) {
    case operations.suma:
      result.innerHTML = Number(num1) + Number(num2);
      break;
    case operations.resta:
      result.innerHTML = Number(num1) - Number(num2);
      break;
    case operations.multiplicacion:
      result.innerHTML = Number(num1) * Number(num2);
      break;
    case operations.division:
      result.innerHTML = (Number(num1) / Number(num2)).toFixed(2);
      break;
    default:
      result.innerHTML = "Error";
  }
});
