/* Created by Tivotal */

let input = document.querySelector(".input-box input");
let clearBtn = document.querySelector(".clear");
let checkBtn = document.querySelector(".check");
let result = document.querySelector(".result");

clearBtn.addEventListener("click", () => {
  input.value = "";
  result.textContent = "Result";
});

checkBtn.addEventListener("click", () => {
  let val = input.value;

  if (checkPrime(val)) {
    result.textContent = val + " is a prime number";
  } else {
    result.textContent = val + " is not a prime number";
  }
});

let checkPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};
