// Return Negative

// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

function makeNegative(num) {
  let numStr = num.toString();
  if (num === 0) {
    return 0;
  }
  if (numStr.includes("-")) {
    return Number(numStr);
  }
  let negative = `-${num}`;
  return Number(negative);
}

makeNegative(-9);
