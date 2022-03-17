// Definition and Usage
//   -The some() method checks if any array elements pass a test (provided as a function).
//   -The some() method executes the function once for each array element:
//        +If the function returns true, some() returns true and stops.
//        +If the function returns false, some() returns false and stops.
//   -The some() method does not execute the function for empty array elements.
//   -The some() method does not change the original array.

// Syntax: array.some(function(value, index, arr), this)
var a = [1, 2, 3];
var hasThree = a.some(e => e === 3); //return true
console.log(hasThree);