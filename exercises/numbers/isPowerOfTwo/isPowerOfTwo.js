/**
 * Given a non-negative integer as input, returns `true` if input is a power
 * of `2` and `false` otherwise.
 *
 * A number is a power of `2` if it can be written as `2**k` for some non-negative
 * integer `k`, where "`**`" represents the exponentiation operator.
 *
 * For example, `8` is a power of `2` since `8` equals `2 * 2 * 2 === 2**3`.
 * Conversely, `81` is not a power of `2` since there's no integer `k` such
 * that `81 === 2**k`.
 *
 * @example
 * isPowerOfTwo(2) // => true
 * isPowerOfTwo(3) // => false
 * isPowerOfTwo(4) // => true
 * isPowerOfTwo(2**20) // => true
 * isPowerOfTwo(2**20 + 1) // => false
 *
 * @param {number} num - The number
 * @returns {boolean} True if the number is a power of 2, false otherwise.
 */
 var powerOfTwoCheck = false;
function isPowerOfTwo(num) {
  if (num === 2 || num === 1) {
    powerOfTwoCheck = true
    return powerOfTwoCheck
  }
  while (num > 2) {
    //console.log(isPowerOfTwo(Math.floor(num/2)))
    powerOfTwoCheck = false
    return  isPowerOfTwo(num/2)
  }
  return powerOfTwoCheck

  // Your code here
  // Remember, you can assume that num is a positive integer.
}

if (require.main === module) {
  console.log('Running sanity checks for isPowerOfTwo:');

  // Is 0 a power of two? Is 1?
  // console.log(isPowerOf(0) === _____);
  // console.log(isPowerOf(1) === _____);

  console.log(isPowerOfTwo(2) === true);
  console.log(isPowerOfTwo(7) === false);
  console.log(isPowerOfTwo(4) === true);
  console.log(isPowerOfTwo(16) === true);

  // Your sanity checks here.
  console.log(isPowerOfTwo(21) === false);
  console.log(isPowerOfTwo(0) === false);
  console.log(isPowerOfTwo(1) === true);
}

module.exports = isPowerOfTwo;
