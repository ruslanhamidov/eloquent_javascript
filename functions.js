function min(a, b) {
  if (a < b) return a
  return b
}

function isEven(a) {
  if (a < 0) return isEven(a * -1)
  if (a == 0) return true
  else if (a == 1) return false
  else return isEven(a - 2)
}

function countBs(str) {
  let count = 0
  for (const char of str) {
    if (char == 'B') count += 1
  }
  return count
}

function countChar(str, letter) {
  let count = 0
  for (const char of str) {
    if (char == letter) count += 1
  }
  return count
}
