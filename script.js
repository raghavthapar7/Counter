"use strict";

let increaseBtn = document.querySelector(".increase");
let counter = document.querySelector(".counter");
let decreaseBtn = document.querySelector(".decrease");
let resetBtn = document.querySelector(".reset");
// console.log(counter);
let counterNumber = 0;

// Increase the number functionality
increaseBtn.addEventListener("click", function () {
  counterNumber++;
  counter.textContent = counterNumber;
  counter.classList.remove("counter-decrease");
  counter.classList.add("counter-increase");
});

// Decrease the number functionality
decreaseBtn.addEventListener("click", function () {
  counterNumber--;
  counter.textContent = counterNumber;
  counter.classList.remove("counter-increase");
  counter.classList.add("counter-decrease");
});

// Reset functionality
resetBtn.addEventListener("click", function () {
  counterNumber = 0;
  counter.textContent = counterNumber;
  counter.classList.remove("counter-increase");
  counter.classList.remove("counter-decrease");
});
