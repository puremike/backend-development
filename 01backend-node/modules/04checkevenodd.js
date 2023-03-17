"use strict";

function checkEvenOrOdd(n) {
  if (n < 0) return;

  if (n % 2 == 0) {
    console.log(`${n} is an EVEN number${"!".repeat(5)}`);
  } else console.log(`${n} is an ODD number${"!".repeat(5)}`);
}

module.exports = checkEvenOrOdd;
