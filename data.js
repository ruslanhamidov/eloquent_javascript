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

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
}

let arr = [1,2,3,4]

function arrayToList(arr) {
  let list = null
  for (let elem of reverseArray(arr)) {
    list = {value: elem, rest: list}
  }
  return list
}


function listToArray(list) {
  let arr = []
  for (let node = list; node; node = node.rest)
  arr.push(node.value)
  return arr
}


function prepend(list, element) {
  let arr = listToArray(list)
  arr.unshift(element)
  return arrayToList(arr)
}

function nth(list, index) {
  let count = 0
  let node = list
  while (node) {
    if (count == index) return node.value
    count += 1
    node = node.rest
  }
}

function recursiveNth(list, index) {
  node = list
  if (index == 0) return node.value

  recursiveNth(node.rest, index - 1)
}

// recursiveNth(list, 3)