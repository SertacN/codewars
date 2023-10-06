// Sum of positive

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

function positiveSum(arr) {
  let positiveNum = arr.filter((num) => num > -1);

  if (positiveNum.length === 0) {
    return 0;
  }
  let total = positiveNum.reduce((total, num) => total + num);
  return total;
}

positiveSum([1, -2, 3, 4, 5]);
