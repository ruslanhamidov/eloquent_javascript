function range(start, end, step=1) {
  let arr = []
  if (step > 0)
  for (let i = start; i <= end; i += step) arr.push(i)
  else
  for (let i = start; i >= end; i += step) arr.push(i)
  return arr
}

function sum(arr) {
  let sum = 0
  for (let el of arr) {
    sum += el
  }
  return sum
}

function reverseArray(arr) {
  let reversed = []
  for (let i = arr.length; i > 0; i--) {
    reversed.push(i)
  }
  return reversed
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    const temp = arr[i]
    arr[i] = arr[(arr.length - 1) - i]
    arr[(arr.length - 1) - i] = temp
  }
}

