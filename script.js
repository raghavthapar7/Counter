"use strict";

let increaseBtn = document.querySelector(".increase");
let counter = document.querySelector(".counter");
// console.log(counter);
let counterNumber = 0;

//Increase the number functionality
increaseBtn.addEventListener("click", function () {
  counterNumber++;
  counter.textContent = counterNumber;
});
