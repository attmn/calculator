const calcEntrys = document.querySelectorAll(".calcEntry");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const calcInput = document.querySelector("#calcInput");
const lastAnswer = document.querySelector("#lastAnswer");

let inputArray = [];
let roundedSum = 0;

calcEntrys.forEach(calcEntry => {
  calcEntry.addEventListener("click", () => {
    inputArray.push(calcEntry.value);
    calcInput.textContent = inputArray.join("");
    console.log(inputArray);
  });
});

function calculate(array) {
  try {
    sum = eval(array.join(""));
    roundedSum = Math.round((sum + Number.EPSILON) * 100) / 100;
    calcInput.textContent = roundedSum;
    inputArray = [roundedSum];
  } catch (err) {
    calcInput.textContent = "CALCULATION ERROR";
    nputArray = [];
  }
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

//Use backspace to delete entered characters
document.addEventListener(
  "keydown",
  function(e) {
    if (e.code === "Backspace") {
      inputArray.splice(-1, 1);
      calcInput.textContent = inputArray.join("");
      console.log(inputArray);
    }
  },
  false
);

//Use calcEntrys on keyboard
document.addEventListener(
  "keydown",
  function(e) {
    if (parseInt(e.key) >= 0 && parseInt(e.key) <= 9) {
      inputArray.push(e.key);
      calcInput.textContent = inputArray.join("");
      console.log(inputArray);
    }
  },
  false
);

//Use operators on keyboard
document.addEventListener(
  "keydown",
  function(e) {
    switch (e.key) {
      case "*":
      case "/":
      case "+":
      case "-":
      case "(":
      case ")":
        inputArray.push(e.key);
        calcInput.textContent = inputArray.join("");
        console.log(inputArray);
        break;
      case "=":
        calculate(inputArray);
        break;
      default:
        break;
    }
  },
  false
);

//Bring up last answer
lastAnswer.addEventListener(
  "click",
  () => {
    inputArray.push(roundedSum);
    calcInput.textContent = inputArray.join("");
    console.log(inputArray);
  },
  false
);
