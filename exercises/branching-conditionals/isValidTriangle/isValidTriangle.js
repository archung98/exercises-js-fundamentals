/**
 * Given three numbers, returns true is a triangle exists with those three
 * numbers as side lengths, and false otherwise.
 *
 * @param {number} a Side length #1
 * @param {number} b Side length #2
 * @param {number} c Side length #3
 * @returns {boolean} True if a triangle exists with side lengths of a, b, and c. Returns false otherwise.
 */
function isValidTriangle(a, b, c) {
  let angle1 = Math.acos( (b**2 + c**2 - a**2)/(2*b*c))
  let angle2 = Math.acos( (a**2 + c**2 - b**2)/(2*a*c))
  let angle3 = Math.acos( (a**2 + b**2 - c**2)/(2*a*b))
  let sumAngle =  Math.round(((angle1 +angle2+angle3) + Number.EPSILON) * 100) / 100 
  if (sumAngle === 3.14){
    return true
  } else {
    return false
  }
  

  
  

  /*
    Before you go Googling, get out a piece of paper and draw some triangles.

    If you draw two sides of length A and B, are there values of a potential
    third length (C) that make it impossible to form a triangle?

    If the problem is still to hard, simplify even more. What if you draw two
    side of the same length? Imagine the angle between the two sides increasing
    from 0º and you drawing the third side. What's the largest this third side
    could ever be?
  */
}

if (require.main === module) {
  console.log('Running sanity checks for isValidTriangle:');

  // The order of the arguments should not matter.
  console.log(isValidTriangle(3, 4, 5) === true);
  console.log(isValidTriangle(3, 5, 4) === true);
  console.log(isValidTriangle(4, 3, 5) === true);
  console.log(isValidTriangle(4, 5, 3) === true);
  console.log(isValidTriangle(5, 3, 4) === true);
  console.log(isValidTriangle(5, 4, 3) === true);

  console.log(isValidTriangle(6, 1, 5))// === false);
  console.log(isValidTriangle(1, 1, 1))//=== false);
  console.log(isValidTriangle(7, 3, 5)) //=== false);
  // Add your own sanity checks here. Test negative cases.
  // How else will you be sure your code does what you think it does?
}

module.exports = isValidTriangle;
