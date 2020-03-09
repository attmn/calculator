const numbers = document.querySelectorAll(".number");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const calcInput = document.querySelector("#calcInput");

let inputArray = [];

numbers.forEach(number => {
  number.addEventListener("click", () => {
    inputArray.push(number.value);
    calcInput.textContent = inputArray.join("");
    console.log(inputArray);
  });
});

function calculate(array) {
  // let sum = 0;
  // for (let i = 0; i < array.length; i++) {
  //     sum += array[i];
  // }
  sum = eval(inputArray.join(""));
  roundedSum = Math.round((sum + Number.EPSILON) * 100) / 100;
  calcInput.textContent = roundedSum;
  inputArray = [roundedSum];
}

equals.addEventListener(
  "click",
  function() {
    calculate(inputArray);
  },
  false
);

clear.addEventListener(
  "click",
  () => {
    inputArray = [];
    calcInput.textContent = "";
  },
  false
);
