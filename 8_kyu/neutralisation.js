// Neutralisation

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.
// Worked Example
// ("+-+", "+--") ➞ "+-0"
// # Compare the first characters of each string, then the next in turn.
// # "+" against a "+" returns another "+".
// # "-" against a "-" returns another "-".
// # "+" against a "-" returns "0".
// # Return the string of characters.

function neutralise(s1, s2) {
  //   debugger;
  let s1Arr = s1.split("");
  let s2Arr = s2.split("");
  let newArr = [];
  for (let i = 0; i < s1Arr.length; i++) {
    if (s1Arr[i] !== s2Arr[i]) {
      newArr.push(0);
    } else {
      newArr.push(s1Arr[i]);
    }
  }
  return newArr.join("");
}

neutralise("--++--", "++--++");
neutralise("-+-+-+", "-+-+-+");
