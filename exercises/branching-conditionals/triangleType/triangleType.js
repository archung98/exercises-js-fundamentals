/**
 * Given the the length of three triangle sides, returns the triangle's type as a string, i.e.,
 * `'acute'`, `'right'`, `'obtuse'`, or `'invalid'`.
 *
 * See https://www.murrieta.k12.ca.us/cms/lib5/CA01000508/Centricity/Domain/1830/T4.5.pdf
 *
 * If a triangle can't be formed from the three side lengths then return `'invalid'`.
 *
 * @example
 * triangleType(3, 4, 5); // => 'right'
 * triangleType(4, 3, 5); // => 'right' (the order of arguments shouldn't matter)
 * triangleType(1, 1, 1); // => 'acute'
 * triangleType(12, 15, 8); // => 'obtuse'
 * triangleType(1, 1, 3); // => 'invalid'
 *
 * @param {number} monthNum - A number representing the month, with 1 for January
 *   and 12 for December.
 * @return {number} The number of days in the given month
 */
function triangleType(a,b,c) {
  let angle1 = Math.round(((Math.acos( (b**2 + c**2 - a**2)/(2*b*c))) + Number.EPSILON) * 1000) / 1000;
  let angle2 = Math.round(((Math.acos( (a**2 + c**2 - b**2)/(2*a*c))) + Number.EPSILON) * 1000) / 1000;
  let angle3 = Math.round(((Math.acos( (a**2 + b**2 - c**2)/(2*a*b))) + Number.EPSILON) * 1000) / 1000;
  if (angle1 +angle2+angle3 > 3.140 && angle1 +angle2+angle3 < 3.145){
    if (angle1 === 1.571|| angle2 === 1.571|| angle3 === 1.571){
      return 'right'
    }
    else if (angle1 > 1.571|| angle2 > 1.571 || angle3 > 1.571) {
      return 'obtuse'
    }
    else{
      return 'acute'
    }
  }else {
    return 'invalid'
  }
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for triangleType:');
  console.log(triangleType(3, 4, 5)); // => 'right'
  console.log(triangleType(4, 3, 5)); // => 'right' (the order of arguments shouldn't matter)
  console.log(triangleType(1, 1, 1)); // => 'acute'
  console.log(triangleType(12, 15, 8)); // => 'obtuse'
  console.log(triangleType(1, 1, 3)); // => 'invalid'
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = triangleType;
