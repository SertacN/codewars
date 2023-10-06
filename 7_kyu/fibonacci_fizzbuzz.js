// Fibonacci's FizzBuzz

// 1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.

// 2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.

var fibsFizzBuzz = function (n) {
  let n1 = 0;
  let n2 = 1;
  let arr = [1];

  for (let i = 1; i < n; i++) {
    let n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    arr.push(n3);
  }
  return console.log(
    arr.map((num) =>
      num % 3 === 0 && num % 5 === 0
        ? "FizzBuzz"
        : num % 5 === 0
        ? "Buzz"
        : num % 3 === 0
        ? "Fizz"
        : num
    )
  );
};

fibsFizzBuzz(20);
