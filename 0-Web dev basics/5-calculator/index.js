let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");

const add = () => {
  let result = num1 + num2;
  sumEl.textContent = `Sum: ` + result;
};

const subtract = () => {
  let result = num1 - num2;
  sumEl.textContent = `Sum: ` + result;
};

const divide = () => {
  let result = num1 / num2;
  sumEl.textContent = `Sum: ` + result;
};

const multiply = () => {
  let result = num1 * num2;
  sumEl.textContent = `Sum: ` + result;
};
