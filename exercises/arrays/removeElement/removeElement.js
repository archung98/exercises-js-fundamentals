/**
 * Given an array and an element, return a new array with all instances of the
 * given element removed.
 *
 * @example
 * removeElement([1, 1, 1], 1); // => []
 * removeElement([1, 2, 1], 1); // => [2]
 * removeElement(['one', 'two', 'three'], 'two'); // => ['one', 'three']
 * removeElement(['Jesse', undefined, 'Farmer'], undefined); // => ['Jesse', 'Farmer']
 *
 * @param {object[]} array - An array
 * @param {object} element - An element to remove
 * @returns {object[]} A copy of the input array with all instances of the given
 *   element removed.
 */
function removeElement(array, element) {
  // This is your job. :)
  let removedArray = []
  for (i of array){
    if (i !== element){
      removedArray.push(i)
    }
  }
  return removedArray
}

if (require.main === module) {
  console.log('Running sanity checks for removeElement:');
  console.log(removeElement([1, 1, 1], 1)); // => []
  console.log(removeElement([1, 2, 1], 1)); // => [2]
  console.log(removeElement(['one', 'two', 'three'], 'two')); // => ['one', 'three']
  console.log(removeElement(['Jesse', undefined, 'Farmer'], undefined));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = removeElement;
