const numbers = document.querySelectorAll('.number');
const operands = document.querySelectorAll('.operand');
const equalBtn = document.querySelector('.equal');
const del = document.querySelector('.del');
const allClear = document.querySelector('.allClear');
const value1 = document.querySelector('.firstValue');
const value2 = document.querySelector('.secondValue');

class Calculator {
 constructor(value1, value2) {
  this.value1 = value1;
  this.value2 = value2;
 }
 clear() {}
 allClear() {}
 append(number) {}
 chooseOperation(operation) {}
 compute() {}
 getDisplayNumber() {}
 updateDisplay() {}
}

numbers.forEach((number) =>
 number.addEventListener('click', () => {
  console.log(`${number.innerHTML} is clicked`);
 })
);

operands.forEach((operand) =>
 operand.addEventListener('click', () => {
  console.log(`${operand.innerHTML} operand is clicked`);
 })
);
