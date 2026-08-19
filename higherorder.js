let arrays = [[1, 2, 3], [4, 5], [6]];

const initialValue = []
const mergeArrays = arrays.reduce(
  (accumulator, currentValue) => accumulator.concat(currentValue),
  initialValue,
)
// → [1, 2, 3, 4, 5, 6]

function every(array, test) {
  for (const val of array) {
    if (!test(val)) return false 
  }
  return true
}

function everyWithSome(array, test) {
  return array.some(val => test(val))
}


console.log(everyWithSome([1, 3, 5], n => n < 10));
// → true
console.log(everyWithSome([2, 4, 16], n => n < 10));
// → false
console.log(everyWithSome([], n => n < 10));
// → true