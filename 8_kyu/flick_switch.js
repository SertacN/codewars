// Flick Switch

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

function flickSwitch(arr) {
  let newArr = [];
  let isFlick = true;
  //   debugger;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "flick") {
      isFlick = !isFlick;
    }
    newArr.push(isFlick);
  }
  return newArr;
}

console.log(flickSwitch(["codewars", "flick", "code", "wars"]));
