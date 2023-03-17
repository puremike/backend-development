"use strict";

function isSquared(n) {
  if (n < 0) return;
  if (Math.sqrt(n) % 1 == 0) {
    console.log(`${n} is a perfect square`);
  } else {
    console.log(`${n} is not a perfect square`);
  }
}

module.exports = isSquared;
