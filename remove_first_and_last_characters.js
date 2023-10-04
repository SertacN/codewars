//Remove first and last character

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

function array(string) {
  const newArray = string.split(",");
  if (newArray.length < 3) {
    return null;
  }

  newArray.shift();
  newArray.pop();

  return newArray.join(" ");
}
