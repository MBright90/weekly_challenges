const fibonacciEquation = (length, current = 1, prev = 0, arr = []) => {
  // If recursive iterations have reached the length desired by user, return the
  // current value
  if (length === 0) return current
  
  if (current > Number.MAX_SAFE_INTEGER) [current, prev] = [BigInt(current), BigInt(prev)]
  
  // Recursive case  
  fibonacciEquation(length - 1, current + prev, current, arr)
  arr.unshift(current.toString())
  
  return arr
}

// Wrap fibonacci to check whether length is too short
// and to return a 0 as the beginning value
const fibonacci = (length) => {
  if (length <= 1) return -1
  const fibResult = fibonacciEquation(length)
  fibResult.unshift("0")
  return fibResult
}

console.log(fibonacci(100).join(', '))
