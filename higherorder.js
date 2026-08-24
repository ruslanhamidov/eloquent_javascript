let arrays = [[1, 2, 3], [4, 5], [6]];

const initialValue = []
const mergeArrays = arrays.reduce(
  (accumulator, currentValue) => accumulator.concat(currentValue),
  initialValue,
)

function every(array, test) {
  for (const val of array) {
    if (!test(val)) return false 
  }
  return true
}

function everyWithSome(array, test) {
  return !array.some(val => !test(val))
}