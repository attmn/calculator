const numbers = document.querySelectorAll(".number");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const calcInput = document.querySelector("#calcInput");

let inputArray = [];

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        inputArray.push(number.value);
        calcInput.textContent = inputArray.join("");
    })
})


function calculate(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    calcInput.textContent = eval(sum);
}

equals.addEventListener("click", function(){calculate(inputArray)}, false);

clear.addEventListener("click", () => {
    inputArray = [];
    calcInput.textContent = "";
}, false);
