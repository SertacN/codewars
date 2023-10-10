// Descending Order

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

console.log(descendingOrder(1021));
