//Highest and Lowest

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers) {
  const numberArray = numbers.split(" ").map(Number);
  const highestNum = Math.max(...numberArray);
  const lowestNum = Math.min(...numberArray);

  return `${highestNum} ${lowestNum}`;
}
