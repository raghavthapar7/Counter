"use strict";

let increaseBtn = document.querySelector(".increase");
let counter = document.querySelector(".counter");
let decreaseBtn = document.querySelector(".decrease");
let resetBtn = document.querySelector(".reset");
// console.log(counter);
let counterNumber = 0;

let updateCounter = function () {
  counter.textContent = counterNumber;
};

let checkCounterNumber = function () {
  counter.classList.remove("counter-increase");
  counter.classList.remove("counter-decrease");
  if (counterNumber > 0) {
    counter.classList.add("counter-increase");
  }
  if (counterNumber < 0) {
    counter.classList.add("counter-decrease");
  }
};

// Increase the number functionality
increaseBtn.addEventListener("click", function () {
  counterNumber++;
  updateCounter();
  checkCounterNumber();
});

// Decrease the number functionality
decreaseBtn.addEventListener("click", function () {
  counterNumber--;
  updateCounter();
  checkCounterNumber();
});

// Reset functionality
resetBtn.addEventListener("click", function () {
  counterNumber = 0;
  updateCounter();
  checkCounterNumber();
});
