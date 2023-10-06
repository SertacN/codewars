// Array plus array

function arrayPlusArray(arr1, arr2) {
  let total1 = arr1.reduce((total, num) => total + num);
  let total2 = arr2.reduce((total, num) => total + num);
  return total1 + total2;
}

arrayPlusArray([1, 2, 3], [4, 5, 6]);
